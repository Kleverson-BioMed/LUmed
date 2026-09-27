// Componente de Resolução de Questões e Correção Didática MedBio
import { QUESTIONS, TOPICS } from '../data/questionsData.js';
import { recordAnswer, getUserAnswers } from '../storage.js';

export function renderQuestionsView(state, setState) {
  // Estado local da tela de questões
  const { currentFilter = 'all', currentQuestionIndex = 0, selectedOption = null, isConfirmed = false, confirmedResult = null } = state;

  const userAnswers = getUserAnswers();

  // Filtragem das questões
  let filteredQuestions = QUESTIONS;
  if (currentFilter === 'wrong') {
    const wrongQuestionIds = userAnswers.filter(a => !a.isCorrect).map(a => a.questionId);
    filteredQuestions = QUESTIONS.filter(q => wrongQuestionIds.includes(q.id));
  } else if (currentFilter === 'unanswered') {
    const answeredIds = userAnswers.map(a => a.questionId);
    filteredQuestions = QUESTIONS.filter(q => !answeredIds.includes(q.id));
  } else if (currentFilter !== 'all') {
    filteredQuestions = QUESTIONS.filter(q => q.assunto === currentFilter);
  }

  // Tratamento de estado sem questões disponíveis
  if (filteredQuestions.length === 0) {
    return `
      <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center max-w-xl mx-auto my-12 animate-fade-in">
        <div class="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
          <i data-lucide="check-circle-2" class="w-8 h-8"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900">Nenhuma questão encontrada!</h3>
        <p class="text-sm text-slate-500 mt-2">Você concluiu todas as questões da categoria selecionada ou não há questões erradas registradas.</p>
        <button onclick="window.medbioSetQuestionFilter('all')" class="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
          Ver todas as 35 questões
        </button>
      </div>
    `;
  }

  // Garantir índice válido dentro do vetor filtrado
  const safeIndex = Math.min(Math.max(currentQuestionIndex, 0), filteredQuestions.length - 1);
  const question = filteredQuestions[safeIndex];

  return `
    <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
      
      <!-- Barra Superior de Filtros e Navegação -->
      <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        <!-- Dropdown / Seletor de Assuntos -->
        <div class="flex items-center gap-2">
          <i data-lucide="filter" class="w-4 h-4 text-slate-400"></i>
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">Filtrar:</span>
          <select onchange="window.medbioSetQuestionFilter(this.value)" class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="all" ${currentFilter === 'all' ? 'selected' : ''}>Todos os assuntos (35)</option>
            <option value="unanswered" ${currentFilter === 'unanswered' ? 'selected' : ''}>Ainda não respondidas</option>
            <option value="wrong" ${currentFilter === 'wrong' ? 'selected' : ''}>Questões que errei</option>
            <optgroup label="Por Assunto Específico">
              ${TOPICS.map(topic => `
                <option value="${topic}" ${currentFilter === topic ? 'selected' : ''}>${topic}</option>
              `).join('')}
            </optgroup>
          </select>
        </div>

        <!-- Indicador de Posição da Questão -->
        <div class="flex items-center gap-3">
          <span class="text-xs font-semibold text-slate-500">Questão ${safeIndex + 1} de ${filteredQuestions.length}</span>
          <div class="flex items-center gap-1">
            <button onclick="window.medbioPrevQuestion()" ${safeIndex === 0 ? 'disabled class="p-1.5 rounded-lg bg-slate-100 text-slate-300 cursor-not-allowed"' : 'class="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"'}>
              <i data-lucide="chevron-left" class="w-4 h-4"></i>
            </button>
            <button onclick="window.medbioNextQuestion()" ${safeIndex === filteredQuestions.length - 1 ? 'disabled class="p-1.5 rounded-lg bg-slate-100 text-slate-300 cursor-not-allowed"' : 'class="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"'}>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

      </div>

      <!-- CARTÃO PRINCIPAL DA QUESTÃO -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
        
        <!-- Meta Informações da Questão -->
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">
              Questão ${question.numero}
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs">
              ${question.subassunto}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${question.dificuldade === 'Fácil' ? 'bg-emerald-50 text-emerald-700' : question.dificuldade === 'Médio' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}">
              ${question.dificuldade}
            </span>
          </div>

          <!-- Botão Tutor Inteligente -->
          <button onclick="window.medbioOpenAITutorForQuestion(${question.id})" class="px-3 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition-colors flex items-center gap-1.5">
            <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-600"></i>
            <span>Perguntar ao tutor</span>
          </button>
        </div>

        <!-- Enunciado da Questão -->
        <div class="space-y-2">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Enunciado</span>
          <p class="text-base md:text-lg font-semibold text-slate-900 leading-relaxed">
            ${question.enunciado}
          </p>
        </div>

        <!-- Alternativas A, B, C, D -->
        <div class="space-y-3 pt-2">
          ${question.alternativas.map(alt => {
            let cardStyle = 'border-slate-200 hover:border-blue-400 bg-white';
            let badgeStyle = 'bg-slate-100 text-slate-700';

            if (selectedOption === alt.id) {
              cardStyle = 'border-blue-600 bg-blue-50/60 shadow-sm';
              badgeStyle = 'bg-blue-600 text-white font-bold';
            }

            if (isConfirmed) {
              if (alt.id === question.respostaCorreta) {
                cardStyle = 'border-emerald-500 bg-emerald-50/80 shadow-sm';
                badgeStyle = 'bg-emerald-600 text-white font-bold';
              } else if (alt.id === selectedOption && !confirmedResult?.isCorrect) {
                cardStyle = 'border-red-500 bg-red-50/80 shadow-sm';
                badgeStyle = 'bg-red-600 text-white font-bold';
              }
            }

            return `
              <div 
                onclick="${isConfirmed ? '' : `window.medbioSelectOption('${alt.id}')`}" 
                class="option-card p-4 rounded-2xl border ${cardStyle} ${isConfirmed ? 'cursor-default' : 'cursor-pointer'} flex items-start gap-3.5">
                
                <span class="w-8 h-8 rounded-xl ${badgeStyle} flex items-center justify-center font-bold text-sm shrink-0 transition-colors">
                  ${alt.id}
                </span>
                
                <p class="text-sm md:text-base text-slate-800 font-medium pt-1 leading-normal">
                  ${alt.texto}
                </p>

              </div>
            `;
          }).join('')}
        </div>

        <!-- Botão de Confirmação -->
        ${!isConfirmed ? `
          <div class="pt-4 flex justify-end">
            <button 
              onclick="window.medbioConfirmAnswer()" 
              ${!selectedOption ? 'disabled class="px-6 py-3 rounded-2xl bg-slate-200 text-slate-400 font-bold text-sm cursor-not-allowed"' : 'class="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center gap-2"'}>
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Confirmar resposta</span>
            </button>
          </div>
        ` : ''}

      </div>

      <!-- PAINEL DE CORREÇÃO DIDÁTICA (Exibido após confirmar) -->
      ${isConfirmed ? renderCorrectionPanel(question, selectedOption, confirmedResult) : ''}

    </div>
  `;
}

// Renderizar Correção Didática Detalhada
function renderCorrectionPanel(question, selectedOption, result) {
  const isCorrect = selectedOption === question.respostaCorreta;

  return `
    <div class="bg-white rounded-3xl p-6 md:p-8 border ${isCorrect ? 'border-emerald-300' : 'border-red-300'} shadow-lg space-y-6 animate-fade-in">
      
      <!-- Cabeçalho do Resultado -->
      <div class="flex items-center gap-4 p-4 rounded-2xl ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-red-50 text-red-900 border border-red-200'}">
        <div class="w-12 h-12 rounded-2xl ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'} text-white flex items-center justify-center shrink-0">
          <i data-lucide="${isCorrect ? 'check-circle-2' : 'x-circle'}" class="w-7 h-7"></i>
        </div>
        <div>
          <h3 class="text-lg font-extrabold">${isCorrect ? 'Resposta Correta! Parabéns! 🎉' : 'Resposta Incorreta.'}</h3>
          <p class="text-xs font-semibold mt-0.5">
            Sua opção: <span class="font-bold">${selectedOption}</span> • Gabarito Oficial: <span class="font-bold underline">${question.respostaCorreta}</span>
          </p>
        </div>
      </div>

      <!-- Raciocínio Didático -->
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <i data-lucide="book-open-check" class="w-5 h-5 text-blue-600"></i>
          <h4 class="text-base font-bold text-slate-900">Raciocínio Didático da Questão</h4>
        </div>
        <p class="text-sm md:text-base text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed font-normal">
          ${question.explicacao}
        </p>
      </div>

      <!-- Explicação Individual de Cada Alternativa -->
      <div class="space-y-3">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500">Análise Item por Item</h4>
        <div class="space-y-2">
          ${question.alternativas.map(alt => {
            const exp = question.explicacaoAlternativas?.[alt.id] || '';
            const isAltCorrect = alt.id === question.respostaCorreta;
            return `
              <div class="p-3 rounded-xl border ${isAltCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-100 bg-slate-50'} text-xs leading-relaxed">
                <span class="font-bold ${isAltCorrect ? 'text-emerald-700' : 'text-slate-700'}">Alternativa ${alt.id}:</span>
                <span class="text-slate-600 ml-1">${exp}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Destaque do Conceito Principal -->
      <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex items-start gap-3">
        <i data-lucide="key" class="w-5 h-5 text-indigo-600 shrink-0 mt-0.5"></i>
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-700">Conceito Principal Cobrado</span>
          <p class="text-sm font-semibold mt-1">${question.conceitoPrincipal}</p>
        </div>
      </div>

      <!-- Botões de Ação Final -->
      <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <button onclick="window.medbioOpenAITutorForQuestion(${question.id})" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4"></i>
          <span>Tirar dúvida com Tutor IA</span>
        </button>

        <div class="flex items-center gap-2">
          <button onclick="window.medbioNav('study')" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors">
            Revisar este assunto
          </button>
          <button onclick="window.medbioNextQuestion()" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-1.5">
            <span>Próxima questão</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

    </div>
  `;
}
