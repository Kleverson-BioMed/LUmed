// Componente Modal/Drawer do Tutor Inteligente IA (MedBio AI Tutor)
import { queryAITutor } from '../services/aiTutorService.js';

export function renderAITutorModal(state) {
  const { isOpen = false, activeQuestion = null, selectedOption = null, chatHistory = [], isLoading = false } = state;

  if (!isOpen) return '';

  return `
    <div class="fixed inset-0 z-50 flex justify-end animate-fade-in">
      
      <!-- Fundo Escuro Overlay -->
      <div onclick="window.medbioCloseAITutor()" class="ai-drawer-overlay fixed inset-0"></div>

      <!-- Drawer Lateral Direita -->
      <div class="relative w-full max-w-lg bg-white h-full shadow-2xl z-10 flex flex-col justify-between border-l border-slate-200">
        
        <!-- Cabeçalho do Drawer -->
        <div class="p-5 border-b border-slate-200 bg-gradient-to-r from-indigo-700 to-indigo-600 text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white backdrop-blur-md">
              <i data-lucide="sparkles" class="w-5 h-5 text-indigo-200"></i>
            </div>
            <div>
              <h3 class="font-extrabold text-base text-white">Tutor Inteligente MedBio</h3>
              <p class="text-[11px] text-indigo-100">Assistente Acadêmico de Bioquímica Médica</p>
            </div>
          </div>

          <button onclick="window.medbioCloseAITutor()" class="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Banner da Questão Ativa (Se houver) -->
        ${activeQuestion ? `
          <div class="p-3 bg-indigo-50/70 border-b border-indigo-100 text-xs text-indigo-900 flex items-center justify-between">
            <span class="font-bold truncate max-w-xs">Questão ${activeQuestion.numero}: ${activeQuestion.assunto}</span>
            <span class="px-2 py-0.5 rounded bg-indigo-200/60 font-semibold text-[10px]">Ativa</span>
          </div>
        ` : ''}

        <!-- Corpo do Chat / Mensagens -->
        <div id="ai-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
          
          <!-- Mensagem de Boas-Vindas Inicial se Chat estiver Vazio -->
          ${chatHistory.length === 0 ? `
            <div class="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2 shadow-sm">
              <div class="flex items-center gap-2 text-indigo-600 font-bold">
                <i data-lucide="bot" class="w-4 h-4"></i>
                <span>Como posso te ajudar no estudo de Bioquímica?</span>
              </div>
              <p class="leading-relaxed">
                Você pode clicar em uma das sugestões rápidas abaixo ou digitar qualquer dúvida sobre a questão atual, conceitos teóricos ou aplicações clínicas.
              </p>
            </div>
          ` : ''}

          <!-- Mensagens Registradas no Histórico -->
          ${chatHistory.map(msg => `
            <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
              <div class="max-w-[85%] p-3.5 rounded-2xl text-xs md:text-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none shadow-sm' 
                  : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm space-y-2'
              }">
                ${msg.text.replace(/\n/g, '<br/>')}
              </div>
            </div>
          `).join('')}

          <!-- Indicador de Digitação quando Carregando -->
          ${isLoading ? `
            <div class="flex justify-start">
              <div class="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none text-xs text-indigo-600 font-bold flex items-center gap-2 shadow-sm animate-pulse-subtle">
                <i data-lucide="sparkles" class="w-4 h-4 animate-spin"></i>
                <span>Tutor Inteligente pensando...</span>
              </div>
            </div>
          ` : ''}

        </div>

        <!-- Sugestões Rápidas de Pergunta -->
        <div class="p-3 bg-white border-t border-slate-200 space-y-2">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Sugestões Rápidas:</span>
          <div class="flex flex-wrap gap-1.5">
            <button onclick="window.medbioAskAITutor('why_wrong')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors">
              "Por que essa alternativa está errada?"
            </button>
            <button onclick="window.medbioAskAITutor('explain_beginner')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors">
              "Explique para iniciante"
            </button>
            <button onclick="window.medbioAskAITutor('core_concept')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors">
              "Qual o conceito chave?"
            </button>
            <button onclick="window.medbioAskAITutor('clinical_example')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors">
              "Me dê um exemplo clínico"
            </button>
            <button onclick="window.medbioAskAITutor('similar_question')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors">
              "Crie uma questão parecida"
            </button>
          </div>
        </div>

        <!-- Input de Pergunta Customizada -->
        <div class="p-4 bg-white border-t border-slate-200">
          <form onsubmit="window.medbioSubmitAICustomQuestion(event)" class="flex items-center gap-2">
            <input 
              id="ai-custom-input"
              type="text" 
              placeholder="Digite sua dúvida sobre biochemistry..."
              class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs md:text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button type="submit" class="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors">
              <i data-lucide="send" class="w-4 h-4"></i>
            </button>
          </form>
        </div>

      </div>

    </div>
  `;
}
