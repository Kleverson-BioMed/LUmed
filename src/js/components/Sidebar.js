// Componente de Navegação Inferior para Dispositivos Móveis (Mobile Navigation)
import { getPendingRevisions } from '../storage.js';

export function renderMobileNav(activeTab) {
  const pendingCount = getPendingRevisions().length;

  return `
    <nav class="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 px-2 py-2 flex items-center justify-around shadow-lg">
      <button onclick="window.medbioNav('dashboard')" class="flex flex-col items-center justify-center w-14 py-1 rounded-lg text-xs font-medium ${activeTab === 'dashboard' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
        <i data-lucide="layout-dashboard" class="w-5 h-5 mb-0.5"></i>
        <span>Início</span>
      </button>

      <button onclick="window.medbioNav('questions')" class="flex flex-col items-center justify-center w-14 py-1 rounded-lg text-xs font-medium ${activeTab === 'questions' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
        <i data-lucide="help-circle" class="w-5 h-5 mb-0.5"></i>
        <span>Questões</span>
      </button>

      <button onclick="window.medbioNav('review')" class="relative flex flex-col items-center justify-center w-14 py-1 rounded-lg text-xs font-medium ${activeTab === 'review' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
        <i data-lucide="rotate-ccw" class="w-5 h-5 mb-0.5"></i>
        <span>Revisão</span>
        ${pendingCount > 0 ? `<span class="absolute top-0 right-2 w-2 h-2 bg-amber-500 rounded-full"></span>` : ''}
      </button>

      <button onclick="window.medbioNav('exam')" class="flex flex-col items-center justify-center w-14 py-1 rounded-lg text-xs font-medium ${activeTab === 'exam' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
        <i data-lucide="file-text" class="w-5 h-5 mb-0.5"></i>
        <span>Simulado</span>
      </button>

      <button onclick="window.medbioNav('study')" class="flex flex-col items-center justify-center w-14 py-1 rounded-lg text-xs font-medium ${activeTab === 'study' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
        <i data-lucide="book-open" class="w-5 h-5 mb-0.5"></i>
        <span>Estudar</span>
      </button>
    </nav>
  `;
}
