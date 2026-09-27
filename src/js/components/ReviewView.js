// Componente de Revisão Espaçada MedBio
import { QUESTIONS } from '../data/questionsData.js';
import { getPendingRevisions } from '../storage.js';

export function renderReviewView() {
  const pendingRevisions = getPendingRevisions();

  return `
    <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
      
      <!-- Cabeçalho da Seção de Revisão -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200 mb-2">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
            <span>Algoritmo de Repetição Espaçada</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">Central de Revisão Inteligente</h1>
          <p class="text-sm text-slate-500 mt-1">
            Revisar conceitos no momento ideal consolida o aprendizado na memória de longo prazo e reduz o esquecimento.
          </p>
        </div>

        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center shrink-0">
          <span class="text-xs font-bold text-amber-700 uppercase tracking-wider block">Agendados para Hoje</span>
          <span class="text-3xl font-extrabold text-amber-900 block mt-1">${pendingRevisions.length}</span>
          <span class="text-xs font-semibold text-amber-800">conceito(s) pendentes</span>
        </div>
      </div>

      <!-- Alerta Informativo do Sistema de Revisão -->
      <div class="bg-blue-50/60 border border-blue-200 rounded-2xl p-4 text-xs text-blue-900 flex items-start gap-3">
        <i data-lucide="info" class="w-5 h-5 text-blue-600 shrink-0 mt-0.5"></i>
        <div>
          <span class="font-bold">Como funciona a Repetição Espaçada MedBio?</span>
          <p class="mt-0.5 leading-relaxed">
            Se você acerta uma questão, ela é reagendada em 3 dias. Acertando novamente, vai para 7 e 14 dias. Se errar, ela retorna imediatamente para a fila diária de 1 dia e é marcada como ponto de atenção.
          </p>
        </div>
      </div>

      <!-- LISTA DE ITENS PARA REVISAR -->
      ${pendingRevisions.length === 0 ? `
        <div class="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm text-center max-w-xl mx-auto my-6">
          <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <i data-lucide="sparkles" class="w-8 h-8"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Sua fila de revisão está limpa! 🎉</h3>
          <p class="text-sm text-slate-500 mt-2">Você revisou todos os conceitos agendados para hoje. Continue praticando novas questões para alimentar seu algoritmo de memória.</p>
          <button onclick="window.medbioNav('questions')" class="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-md">
            Resolver novas questões
          </button>
        </div>
      ` : `
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h3 class="text-base font-bold text-slate-900">Conceitos Fisiológicos Pendentes (${pendingRevisions.length})</h3>
            <button onclick="window.medbioStartReviewSession()" class="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center gap-2">
              <i data-lucide="play" class="w-4 h-4"></i>
              <span>Iniciar sessão de revisão agora</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${pendingRevisions.map(item => {
              const q = QUESTIONS.find(quest => quest.id === item.questionId);
              if (!q) return '';

              return `
                <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-amber-300 transition-all flex flex-col justify-between gap-4">
                  
                  <div class="space-y-2">
                    <div class="flex items-center justify-between">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                        Questão ${q.numero}
                      </span>
                      ${item.isWeakPoint ? `
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">
                          Ponto Fraco (${item.totalErrors} erros)
                        </span>
                      ` : `
                        <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800">
                          Revisão em ${item.daysInterval} dia(s)
                        </span>
                      `}
                    </div>

                    <h4 class="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      ${q.enunciado}
                    </h4>

                    <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                      <span class="font-bold text-slate-700 block">Conceito a revisar:</span>
                      <span class="line-clamp-2">${q.conceitoPrincipal}</span>
                    </div>
                  </div>

                  <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] text-slate-400 font-medium">Histórico: ${item.totalHits} acerto(s) / ${item.totalErrors} erro(s)</span>
                    <button onclick="window.medbioReviewQuestion(${q.id})" class="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors">
                      Revisar esta
                    </button>
                  </div>

                </div>
              `;
            }).join('')}
          </div>
        </div>
      `}

    </div>
  `;
}
