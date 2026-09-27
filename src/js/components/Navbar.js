// Componente de Navegação Superior (Navbar) do MedBio
import { getPerformanceStats, getPendingRevisions } from '../storage.js';

export function renderNavbar(activeTab, onTabChange, onOpenAITutor) {
  const stats = getPerformanceStats();
  const pendingRevisions = getPendingRevisions().length;

  return `
    <header class="sticky top-0 z-30 glass-panel border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <!-- Logo e Marca -->
        <div class="flex items-center gap-3 cursor-pointer" onclick="window.medbioNav('dashboard')">
          <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/20">
            <i data-lucide="brain" class="w-6 h-6"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="font-extrabold text-xl tracking-tight text-slate-900">Med<span class="text-blue-600">Bio</span></span>
              <span class="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-200">Medicina</span>
            </div>
            <p class="text-[11px] text-slate-500 hidden sm:block font-medium">Tutor Inteligente de Bioquímica Médica</p>
          </div>
        </div>

        <!-- Links de Navegação Desktop -->
        <nav class="hidden md:flex items-center space-x-1">
          <button onclick="window.medbioNav('dashboard')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
            <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
            Dashboard
          </button>
          <button onclick="window.medbioNav('questions')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'questions' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
            <i data-lucide="help-circle" class="w-4 h-4"></i>
            Questões
          </button>
          <button onclick="window.medbioNav('review')" class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'review' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
            <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            Revisão
            ${pendingRevisions > 0 ? `<span class="px-1.5 py-0.5 text-xs bg-amber-500 text-white rounded-full font-bold">${pendingRevisions}</span>` : ''}
          </button>
          <button onclick="window.medbioNav('exam')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'exam' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
            <i data-lucide="file-text" class="w-4 h-4"></i>
            Simulado
          </button>
          <button onclick="window.medbioNav('study')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${activeTab === 'study' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
            <i data-lucide="book-open" class="w-4 h-4"></i>
            Estudar
          </button>
        </nav>

        <!-- Ações do Lado Direito -->
        <div class="flex items-center gap-3">
          <!-- Estatística Rápida -->
          <div class="hidden lg:flex items-center gap-3 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
            <div class="flex items-center gap-1.5">
              <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i>
              <span>${stats.percentualGeral}% precisão</span>
            </div>
            <span class="text-slate-300">|</span>
            <div class="flex items-center gap-1.5">
              <i data-lucide="target" class="w-4 h-4 text-blue-600"></i>
              <span>${stats.questoesUnicasRespondidas}/35 questões</span>
            </div>
          </div>

          <!-- Botão Tutor Inteligente -->
          <button onclick="window.medbioOpenAITutor()" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm shadow-indigo-500/20 transition-all flex items-center gap-2">
            <i data-lucide="sparkles" class="w-4 h-4 text-indigo-200"></i>
            <span>Tutor IA</span>
          </button>
        </div>

      </div>
    </header>
  `;
}
