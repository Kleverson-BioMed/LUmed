// Aplicação Principal MedBio - Gerenciamento de Estado e Controle
import { QUESTIONS, TOPICS } from './data/questionsData.js';
import { recordAnswer, getUserAnswers } from './storage.js';
import { queryAITutor } from './services/aiTutorService.js';

import { renderNavbar } from './components/Navbar.js';
import { renderMobileNav } from './components/Sidebar.js';
import { renderDashboard } from './components/DashboardView.js';
import { renderQuestionsView } from './components/QuestionsView.js';
import { renderReviewView } from './components/ReviewView.js';
import { renderExamView } from './components/ExamView.js';
import { renderStudyView } from './components/StudyView.js';
import { renderAITutorModal } from './components/AITutorModal.js';

// ESTADO GLOBAL DA APLICAÇÃO MEDBIO
const state = {
  activeTab: 'dashboard',

  // Estado da Tela de Resolução de Questões
  questionState: {
    currentFilter: 'all',
    currentQuestionIndex: 0,
    selectedOption: null,
    isConfirmed: false,
    confirmedResult: null
  },

  // Estado do Modo Simulado
  examState: {
    isRunning: false,
    isFinished: false,
    selectedTopic: 'all',
    questionCount: 10,
    questions: [],
    currentIndex: 0,
    answers: {}
  },

  // Estado do Modo de Estudo
  studyState: {
    selectedTopicId: 1
  },

  // Estado do Tutor Inteligente IA
  aiTutorState: {
    isOpen: false,
    activeQuestion: null,
    selectedOption: null,
    chatHistory: [],
    isLoading: false
  }
};

// Renderização Central da Interface (View Layer)
function renderApp() {
  const root = document.getElementById('app-root');
  if (!root) return;

  let mainContentHtml = '';

  switch (state.activeTab) {
    case 'dashboard':
      mainContentHtml = renderDashboard();
      break;
    case 'questions':
      mainContentHtml = renderQuestionsView(state.questionState, setQuestionState);
      break;
    case 'review':
      mainContentHtml = renderReviewView();
      break;
    case 'exam':
      mainContentHtml = renderExamView(state.examState, setExamState);
      break;
    case 'study':
      mainContentHtml = renderStudyView(state.studyState.selectedTopicId, (id) => {
        state.studyState.selectedTopicId = id;
        renderApp();
      });
      break;
    default:
      mainContentHtml = renderDashboard();
  }

  root.innerHTML = `
    <div class="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      
      <!-- Topbar Navigation -->
      ${renderNavbar(state.activeTab)}

      <!-- Main View Area -->
      <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        ${mainContentHtml}
      </main>

      <!-- Bottom Mobile Navigation -->
      ${renderMobileNav(state.activeTab)}

      <!-- Modal Drawer do Tutor IA -->
      ${renderAITutorModal(state.aiTutorState)}

    </div>
  `;

  // Inicializa os ícones Lucide após atualização do DOM
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ATUALIZADORES DE ESTADO E NAVEGAÇÃO

function setQuestionState(updater) {
  if (typeof updater === 'function') {
    state.questionState = updater(state.questionState);
  } else {
    state.questionState = { ...state.questionState, ...updater };
  }
  renderApp();
}

function setExamState(updater) {
  if (typeof updater === 'function') {
    state.examState = updater(state.examState);
  } else {
    state.examState = { ...state.examState, ...updater };
  }
  renderApp();
}

// API DE EVENTOS GLOBAIS DA JANELA (window.medbio*)

window.medbioNav = function(tabName) {
  state.activeTab = tabName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.medbioSetQuestionFilter = function(filterVal) {
  state.activeTab = 'questions';
  state.questionState.currentFilter = filterVal;
  state.questionState.currentQuestionIndex = 0;
  state.questionState.selectedOption = null;
  state.questionState.isConfirmed = false;
  state.questionState.confirmedResult = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.medbioSelectOption = function(optionId) {
  if (state.questionState.isConfirmed) return;
  state.questionState.selectedOption = optionId;
  renderApp();
};

window.medbioConfirmAnswer = function() {
  const { currentFilter, currentQuestionIndex, selectedOption } = state.questionState;
  if (!selectedOption) return;

  // Filtrar vetor atual
  let filtered = QUESTIONS;
  if (currentFilter === 'wrong') {
    const wrongIds = getUserAnswers().filter(a => !a.isCorrect).map(a => a.questionId);
    filtered = QUESTIONS.filter(q => wrongIds.includes(q.id));
  } else if (currentFilter === 'unanswered') {
    const answeredIds = getUserAnswers().map(a => a.questionId);
    filtered = QUESTIONS.filter(q => !answeredIds.includes(q.id));
  } else if (currentFilter !== 'all') {
    filtered = QUESTIONS.filter(q => q.assunto === currentFilter);
  }

  const currentQ = filtered[currentQuestionIndex];
  if (!currentQ) return;

  // Gravar no localStorage
  const res = recordAnswer({ questionId: currentQ.id, chosenOption: selectedOption });

  state.questionState.isConfirmed = true;
  state.questionState.confirmedResult = res;

  renderApp();
};

window.medbioNextQuestion = function() {
  state.questionState.currentQuestionIndex += 1;
  state.questionState.selectedOption = null;
  state.questionState.isConfirmed = false;
  state.questionState.confirmedResult = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.medbioPrevQuestion = function() {
  state.questionState.currentQuestionIndex = Math.max(0, state.questionState.currentQuestionIndex - 1);
  state.questionState.selectedOption = null;
  state.questionState.isConfirmed = false;
  state.questionState.confirmedResult = null;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

// Eventos do Modo de Estudo
window.medbioSelectStudyTopic = function(id) {
  state.studyState.selectedTopicId = id;
  renderApp();
};

// Eventos da Central de Revisão
window.medbioStartReviewSession = function() {
  window.medbioSetQuestionFilter('wrong');
};

window.medbioReviewQuestion = function(qId) {
  const index = QUESTIONS.findIndex(q => q.id === qId);
  if (index !== -1) {
    state.activeTab = 'questions';
    state.questionState.currentFilter = 'all';
    state.questionState.currentQuestionIndex = index;
    state.questionState.selectedOption = null;
    state.questionState.isConfirmed = false;
    renderApp();
  }
};

// Eventos do Modo Simulado
window.medbioSetExamConfig = function(key, val) {
  state.examState[key] = val;
  renderApp();
};

window.medbioStartExam = function() {
  let pool = QUESTIONS;
  if (state.examState.selectedTopic !== 'all') {
    pool = QUESTIONS.filter(q => q.assunto === state.examState.selectedTopic);
  }

  // Embaralhar e selecionar quantidade
  const count = Math.min(state.examState.questionCount, pool.length);
  const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);

  state.examState.questions = shuffled;
  state.examState.currentIndex = 0;
  state.examState.answers = {};
  state.examState.isRunning = true;
  state.examState.isFinished = false;

  renderApp();
};

window.medbioAnswerExamQuestion = function(qId, optId) {
  state.examState.answers[qId] = optId;
  renderApp();
};

window.medbioSetExamIndex = function(idx) {
  if (idx >= 0 && idx < state.examState.questions.length) {
    state.examState.currentIndex = idx;
    renderApp();
  }
};

window.medbioFinishExam = function() {
  state.examState.isRunning = false;
  state.examState.isFinished = true;
  renderApp();
};

window.medbioResetExam = function() {
  state.examState.isRunning = false;
  state.examState.isFinished = false;
  state.examState.answers = {};
  renderApp();
};

// EVENTOS DO TUTOR INTELIGENTE IA
window.medbioOpenAITutor = function() {
  const q = QUESTIONS[state.questionState.currentQuestionIndex] || QUESTIONS[0];
  state.aiTutorState.isOpen = true;
  state.aiTutorState.activeQuestion = q;
  state.aiTutorState.selectedOption = state.questionState.selectedOption;
  renderApp();
};

window.medbioOpenAITutorForQuestion = function(questionId) {
  const q = QUESTIONS.find(quest => quest.id === questionId) || QUESTIONS[0];
  state.aiTutorState.isOpen = true;
  state.aiTutorState.activeQuestion = q;
  state.aiTutorState.selectedOption = state.questionState.selectedOption;
  renderApp();
};

window.medbioCloseAITutor = function() {
  state.aiTutorState.isOpen = false;
  renderApp();
};

window.medbioAskAITutor = async function(promptType, customPrompt = '') {
  const question = state.aiTutorState.activeQuestion || QUESTIONS[0];
  const selectedOption = state.aiTutorState.selectedOption;

  // Registrar mensagem do usuário no chat
  let userText = customPrompt;
  if (!userText) {
    if (promptType === 'why_wrong') userText = 'Por que essa alternativa está errada?';
    else if (promptType === 'explain_beginner') userText = 'Explique para um iniciante.';
    else if (promptType === 'core_concept') userText = 'Qual conceito preciso dominar?';
    else if (promptType === 'clinical_example') userText = 'Me dê um exemplo clínico.';
    else if (promptType === 'similar_question') userText = 'Crie uma questão parecida.';
  }

  state.aiTutorState.chatHistory.push({ sender: 'user', text: userText });
  state.aiTutorState.isLoading = true;
  renderApp();

  // Scroll para o fim do chat
  setTimeout(() => {
    const chatContainer = document.getElementById('ai-chat-messages');
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 50);

  // Consulta o Serviço de IA (Mock Didático no MVP)
  const aiReply = await queryAITutor({ question, promptType, customPrompt, selectedOption });

  state.aiTutorState.isLoading = false;
  state.aiTutorState.chatHistory.push({ sender: 'ai', text: aiReply });
  renderApp();

  setTimeout(() => {
    const chatContainer = document.getElementById('ai-chat-messages');
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 50);
};

window.medbioSubmitAICustomQuestion = function(event) {
  event.preventDefault();
  const input = document.getElementById('ai-custom-input');
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  input.value = '';
  window.medbioAskAITutor('custom', text);
};

// Inicialização da Aplicação ao Carregar a Página
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
