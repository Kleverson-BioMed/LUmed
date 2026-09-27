// Componente Modo de Estudo Teórico MedBio
import { STUDY_MATERIALS } from '../data/studyMaterials.js';

export function renderStudyView(selectedTopicId, setSelectedTopicId) {
  const activeMaterial = STUDY_MATERIALS.find(m => m.id === (selectedTopicId || 1)) || STUDY_MATERIALS[0];

  return `
    <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
      
      <!-- Cabeçalho da Área Estudar -->
      <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>Base Teórica & Correlação Clínica</span>
          </div>
          <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">Guia Acadêmico de Bioquímica</h1>
          <p class="text-sm text-slate-500 mt-1">
            Resumos teóricos direcionados aos conceitos de maior relevância fisiológica e clínica.
          </p>
        </div>

        <button onclick="window.medbioSetQuestionFilter('${activeMaterial.assunto}')" class="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 shrink-0">
          <i data-lucide="play" class="w-4 h-4"></i>
          <span>Praticar questões deste assunto (${activeMaterial.questoesRelacionadas.length})</span>
        </button>
      </div>

      <!-- Grid Principal: Menu Lateral de Tópicos + Conteúdo Ativo -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- Menu Lateral dos 7 Assuntos -->
        <div class="lg:col-span-4 space-y-2">
          <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">Selecione o Tópico:</h3>
          ${STUDY_MATERIALS.map(mat => {
            const isActive = mat.id === activeMaterial.id;
            return `
              <button 
                onclick="window.medbioSelectStudyTopic(${mat.id})"
                class="w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${isActive ? 'border-blue-600 bg-blue-50/70 shadow-sm font-bold text-blue-900' : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'}">
                <span class="w-7 h-7 rounded-xl ${isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'} flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  ${mat.id}
                </span>
                <div class="flex-1">
                  <h4 class="text-xs md:text-sm font-bold leading-snug">${mat.assunto}</h4>
                  <p class="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">${mat.descricao}</p>
                </div>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Conteúdo Teórico Expandido do Tópico Ativo -->
        <div class="lg:col-span-8 space-y-6">
          
          <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            
            <!-- Título do Assunto -->
            <div class="border-b border-slate-100 pb-4">
              <span class="text-xs font-bold text-blue-600 uppercase tracking-wider">Assunto #${activeMaterial.id}</span>
              <h2 class="text-xl md:text-2xl font-extrabold text-slate-900 mt-1">${activeMaterial.assunto}</h2>
            </div>

            <!-- Resumo -->
            <div class="space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <i data-lucide="file-text" class="w-4 h-4 text-blue-600"></i>
                Resumo Acadêmico
              </h4>
              <p class="text-sm md:text-base text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100 leading-relaxed font-normal">
                ${activeMaterial.resumo}
              </p>
            </div>

            <!-- Conceitos Fundamentais -->
            <div class="space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <i data-lucide="key" class="w-4 h-4 text-amber-600"></i>
                Conceitos Fundamentais
              </h4>
              <div class="space-y-2">
                ${activeMaterial.conceitosFundamentais.map(c => `
                  <div class="p-3.5 rounded-xl bg-white border border-slate-200 text-xs md:text-sm text-slate-800 font-medium flex items-start gap-2.5">
                    <span class="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                    <span class="leading-normal">${c}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Relação com a Medicina -->
            <div class="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <i data-lucide="stethoscope" class="w-4 h-4 text-emerald-600"></i>
                Relação com a Prática Médica
              </h4>
              <p class="text-sm leading-relaxed font-medium text-emerald-900">
                ${activeMaterial.relacaoMedicina}
              </p>
            </div>

            <!-- Erros Comuns / Pegadinhas -->
            <div class="p-5 rounded-2xl bg-red-50/70 border border-red-200 text-red-950 space-y-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
                <i data-lucide="alert-circle" class="w-4 h-4 text-red-600"></i>
                Erros Comuns e Pegadinhas de Prova
              </h4>
              <ul class="space-y-1.5 list-disc list-inside text-xs md:text-sm text-red-900 font-medium leading-relaxed">
                ${activeMaterial.errosComuns.map(err => `
                  <li>${err}</li>
                `).join('')}
              </ul>
            </div>

            <!-- Ação Final -->
            <div class="pt-4 flex justify-end">
              <button onclick="window.medbioSetQuestionFilter('${activeMaterial.assunto}')" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2">
                <span>Praticar questões relativas a este assunto</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  `;
}
