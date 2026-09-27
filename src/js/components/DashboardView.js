// Componente Dashboard Inteligente MedBio
import { getPerformanceStats, getWeakPoints, getPendingRevisions } from '../storage.js';

export function renderDashboard() {
  const stats = getPerformanceStats();
  const weakPoints = getWeakPoints();
  const pendingRevisions = getPendingRevisions();

  return `
    <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
      
      <!-- Cabeçalho de Boas-Vindas -->
      <div class="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-blue-600/10 relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-medium backdrop-blur-md mb-3">
              <i data-lucide="graduation-cap" class="w-4 h-4"></i>
              <span>Plataforma de Estudos Médicos • Bioquímica</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-extrabold tracking-tight">Olá, Futuro(a) Médico(a)! 👋</h1>
            <p class="mt-2 text-blue-100 text-sm md:text-base max-w-2xl leading-relaxed">
              Pratique raciocínio clínico, acompanhe seus pontos fracos e domine a bioquíca médica através de correções didáticas detalhadas.
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button onclick="window.medbioNav('questions')" class="px-5 py-3 rounded-2xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-md flex items-center gap-2">
              <i data-lucide="play-circle" class="w-4 h-4 text-blue-600"></i>
              <span>Resolver questões</span>
            </button>
            <button onclick="window.medbioNav('study')" class="px-5 py-3 rounded-2xl bg-blue-800/60 hover:bg-blue-800/80 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2">
              <i data-lucide="book-open" class="w-4 h-4"></i>
              <span>Continuar estudando</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Grid de Cartões de Métricas -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Questões Feitas</span>
            <div class="p-2 rounded-xl bg-blue-50 text-blue-600">
              <i data-lucide="file-check-2" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="mt-3 flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${stats.questoesUnicasRespondidas}</span>
            <span class="text-xs text-slate-500 font-medium">/ 35 totais</span>
          </div>
          <div class="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div class="bg-blue-600 h-full rounded-full transition-all duration-500" style="width: ${Math.round((stats.questoesUnicasRespondidas / 35) * 100)}%"></div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Taxa de Acertos</span>
            <div class="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="mt-3 flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${stats.percentualGeral}%</span>
            <span class="text-xs text-emerald-600 font-medium">${stats.totalAcertos} acerto(s)</span>
          </div>
          <div class="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div class="bg-emerald-500 h-full rounded-full transition-all duration-500" style="width: ${stats.percentualGeral}%"></div>
          </div>
        </div>

        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Questões Erradas</span>
            <div class="p-2 rounded-xl bg-red-50 text-red-600">
              <i data-lucide="x-circle" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="mt-3 flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${stats.totalErros}</span>
            <span class="text-xs text-slate-500 font-medium">para revisar</span>
          </div>
          <p class="mt-3 text-xs text-slate-500 font-medium">
            ${stats.totalErros > 0 ? 'Foque nestas falhas para evoluir' : 'Nenhuma pendente!'}
          </p>
        </div>

        <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
          <div class="flex items-center justify-between">
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">Revisão Recomendada</span>
            <div class="p-2 rounded-xl bg-amber-50 text-amber-600">
              <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
            </div>
          </div>
          <div class="mt-3 flex items-baseline gap-2">
            <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${pendingRevisions.length}</span>
            <span class="text-xs text-amber-600 font-bold">conceito(s) hoje</span>
          </div>
          <button onclick="window.medbioNav('review')" class="mt-3 text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <span>Acessar fila de revisão</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>

      </div>

      <!-- SEÇÃO INTELIGENTE: Seus Pontos Fracos -->
      <div class="bg-white rounded-3xl p-6 border ${weakPoints.hasWeakPoints ? 'border-amber-300 bg-amber-50/20' : 'border-slate-200'} shadow-sm">
        <div class="flex items-start gap-4">
          <div class="p-3 rounded-2xl ${weakPoints.hasWeakPoints ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'} shrink-0">
            <i data-lucide="${weakPoints.hasWeakPoints ? 'alert-triangle' : 'sparkles'}" class="w-6 h-6"></i>
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold uppercase tracking-wider ${weakPoints.hasWeakPoints ? 'text-amber-700' : 'text-blue-700'}">Diagnóstico de Desempenho</span>
              ${weakPoints.hasWeakPoints ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200 text-amber-900">Atenção</span>` : ''}
            </div>
            <h3 class="text-lg font-bold text-slate-900 mt-1">${weakPoints.title}</h3>
            <p class="text-sm text-slate-600 mt-1 leading-relaxed">${weakPoints.message}</p>
            <div class="mt-3 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 flex items-center justify-between gap-3">
              <span>${weakPoints.sugestao}</span>
              <button onclick="window.medbioNav('questions')" class="shrink-0 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                Praticar agora
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráfico de Desempenho por Assunto -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-lg font-bold text-slate-900">Desempenho por Assunto</h2>
            <p class="text-xs text-slate-500">Percentual de aproveitamento nos 7 tópicos de Bioquímica Médica</p>
          </div>
          <button onclick="window.medbioNav('questions')" class="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
            <span>Ver todas as questões</span>
            <i data-lucide="chevron-right" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="space-y-4">
          ${stats.desempenhoPorAssunto.map(topic => {
            let barColor = 'bg-slate-300';
            let textColor = 'text-slate-500';
            if (topic.totalRespondidas > 0) {
              if (topic.percentual >= 80) {
                barColor = 'bg-emerald-500';
                textColor = 'text-emerald-700';
              } else if (topic.percentual >= 60) {
                barColor = 'bg-blue-600';
                textColor = 'text-blue-700';
              } else {
                barColor = 'bg-red-500';
                textColor = 'text-red-700';
              }
            }

            return `
              <div class="space-y-1.5">
                <div class="flex items-center justify-between text-xs md:text-sm">
                  <span class="font-semibold text-slate-800 truncate max-w-md">${topic.assunto}</span>
                  <div class="flex items-center gap-2">
                    <span class="text-xs text-slate-400">(${topic.acertos}/${topic.totalRespondidas} acertadas)</span>
                    <span class="font-bold ${textColor}">${topic.totalRespondidas > 0 ? `${topic.percentual}%` : 'Não iniciado'}</span>
                  </div>
                </div>
                <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div class="${barColor} h-full rounded-full transition-all duration-500" style="width: ${topic.totalRespondidas > 0 ? topic.percentual : 0}%"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

    </div>
  `;
}
