// Componente Modo Simulado MedBio
import { QUESTIONS, TOPICS } from '../data/questionsData.js';
import { saveSimulatedExamResult, recordAnswer } from '../storage.js';

export function renderExamView(examState, setExamState) {
  const { isRunning, isFinished, questions = [], currentIndex = 0, answers = {}, selectedTopic = 'all', questionCount = 10, startTime = null, endTime = null } = examState;

  // TELA 1: Configuração Inicial do Simulado
  if (!isRunning && !isFinished) {
    return `
      <div class="max-w-2xl mx-auto space-y-6 animate-fade-in pb-16 md:pb-8">
        
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <i data-lucide="file-text" class="w-8 h-8"></i>
          </div>
          <h1 class="text-2xl font-extrabold text-slate-900">Modo Simulado MedBio</h1>
          <p class="text-sm text-slate-500 leading-relaxed">
            Teste seus conhecimentos em condições reais de prova. As explicações só serão exibidas após a finalização do teste.
          </p>
        </div>

        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
          <h3 class="text-base font-bold text-slate-900">Configurar seu Simulado</h3>

          <!-- Seleção de Quantidade de Questões -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Quantidade de Questões:</label>
            <div class="grid grid-cols-4 gap-3">
              ${[5, 10, 15, 35].map(cnt => `
                <button 
                  onclick="window.medbioSetExamConfig('questionCount', ${cnt})"
                  class="py-3 rounded-2xl border text-sm font-bold transition-all ${questionCount === cnt ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-sm' : 'border-slate-200 text-slate-700 hover:border-slate-300'}">
                  ${cnt} questões
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Seleção de Assunto -->
          <div class="space-y-2">
            <label class="text-xs font-bold uppercase tracking-wider text-slate-500">Filtrar Assunto:</label>
            <select onchange="window.medbioSetExamConfig('selectedTopic', this.value)" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="all" ${selectedTopic === 'all' ? 'selected' : ''}>Todos os assuntos (Geral)</option>
              ${TOPICS.map(topic => `
                <option value="${topic}" ${selectedTopic === topic ? 'selected' : ''}>${topic}</option>
              `).join('')}
            </select>
          </div>

          <!-- Iniciar -->
          <div class="pt-4">
            <button onclick="window.medbioStartExam()" class="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2">
              <i data-lucide="play" class="w-5 h-5"></i>
              <span>Começar Simulado Agora</span>
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // TELA 2: Execução do Simulado
  if (isRunning) {
    const q = questions[currentIndex];
    const answeredCount = Object.keys(answers).length;

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        
        <!-- Header do Simulado -->
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full border border-blue-200">
              Questão ${currentIndex + 1} de ${questions.length}
            </span>
            <span class="text-xs font-semibold text-slate-500 hidden sm:inline">
              ${answeredCount} de ${questions.length} respondidas
            </span>
          </div>

          <button onclick="window.medbioFinishExam()" class="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs rounded-xl border border-red-200 transition-colors flex items-center gap-1.5">
            <i data-lucide="check-square" class="w-4 h-4"></i>
            <span>Finalizar e ver resultado</span>
          </button>
        </div>

        <!-- Grade de Navegação Rápida -->
        <div class="bg-white rounded-2xl p-3 border border-slate-200 shadow-sm flex flex-wrap gap-2">
          ${questions.map((quest, idx) => {
            const isAnswered = answers[quest.id] !== undefined;
            const isCurrent = idx === currentIndex;
            let style = 'bg-slate-100 text-slate-600';
            if (isCurrent) style = 'bg-blue-600 text-white font-bold ring-2 ring-blue-300';
            else if (isAnswered) style = 'bg-emerald-100 text-emerald-800 font-bold';

            return `
              <button onclick="window.medbioSetExamIndex(${idx})" class="w-8 h-8 rounded-lg text-xs flex items-center justify-center transition-all ${style}">
                ${idx + 1}
              </button>
            `;
          }).join('')}
        </div>

        <!-- Questão Ativa do Simulado -->
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">${q.assunto}</span>
            <p class="text-base md:text-lg font-semibold text-slate-900 leading-relaxed">
              ${q.enunciado}
            </p>
          </div>

          <div class="space-y-3 pt-2">
            ${q.alternativas.map(alt => {
              const isSelected = answers[q.id] === alt.id;
              return `
                <div 
                  onclick="window.medbioAnswerExamQuestion(${q.id}, '${alt.id}')"
                  class="option-card p-4 rounded-2xl border ${isSelected ? 'border-blue-600 bg-blue-50/70 shadow-sm' : 'border-slate-200 bg-white'} cursor-pointer flex items-start gap-3.5">
                  <span class="w-8 h-8 rounded-xl ${isSelected ? 'bg-blue-600 text-white font-bold' : 'bg-slate-100 text-slate-700'} flex items-center justify-center text-sm font-bold shrink-0">
                    ${alt.id}
                  </span>
                  <p class="text-sm md:text-base text-slate-800 font-medium pt-1">
                    ${alt.texto}
                  </p>
                </div>
              `;
            }).join('')}
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-slate-100">
            <button onclick="window.medbioSetExamIndex(${currentIndex - 1})" ${currentIndex === 0 ? 'disabled class="px-4 py-2 rounded-xl bg-slate-100 text-slate-300 cursor-not-allowed text-xs font-bold"' : 'class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-bold transition-colors"'}>
              Anterior
            </button>
            <button onclick="window.medbioSetExamIndex(${currentIndex + 1})" ${currentIndex === questions.length - 1 ? 'disabled class="px-4 py-2 rounded-xl bg-slate-100 text-slate-300 cursor-not-allowed text-xs font-bold"' : 'class="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-xs font-bold transition-colors"'}>
              Próxima
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // TELA 3: Relatório Final do Simulado
  if (isFinished) {
    let hits = 0;
    let errors = 0;
    const topicBreakdown = {};

    questions.forEach(q => {
      const userChoice = answers[q.id];
      const isHit = userChoice === q.respostaCorreta;

      if (isHit) hits++;
      else errors++;

      if (!topicBreakdown[q.assunto]) {
        topicBreakdown[q.assunto] = { total: 0, hits: 0 };
      }
      topicBreakdown[q.assunto].total++;
      if (isHit) topicBreakdown[q.assunto].hits++;

      // Registrar histórico no localStorage
      if (userChoice) {
        recordAnswer({ questionId: q.id, chosenOption: userChoice });
      }
    });

    const totalCount = questions.length;
    const accuracyPct = Math.round((hits / totalCount) * 100);

    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fade-in pb-16 md:pb-8">
        
        <!-- Cartão Principal de Resultado -->
        <div class="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 md:p-8 text-white shadow-xl text-center space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-bold">
            <i data-lucide="award" class="w-4 h-4 text-emerald-400"></i>
            <span>Simulado Concluído</span>
          </div>

          <div>
            <h1 class="text-4xl font-extrabold text-white">${accuracyPct}% de Aproveitamento</h1>
            <p class="text-blue-200 text-sm mt-2">Você acertou ${hits} de ${totalCount} questões praticadas.</p>
          </div>

          <div class="grid grid-cols-2 gap-4 max-w-sm mx-auto pt-2">
            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md">
              <span class="text-xs font-bold uppercase text-emerald-400 block">Acertos</span>
              <span class="text-2xl font-extrabold text-white block mt-1">${hits}</span>
            </div>
            <div class="p-4 rounded-2xl bg-white/10 backdrop-blur-md">
              <span class="text-xs font-bold uppercase text-red-400 block">Erros</span>
              <span class="text-2xl font-extrabold text-white block mt-1">${errors}</span>
            </div>
          </div>
        </div>

        <!-- Desempenho por Assunto no Simulado -->
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-4">
          <h3 class="text-base font-bold text-slate-900">Desempenho por Assunto no Simulado</h3>
          <div class="space-y-3">
            ${Object.entries(topicBreakdown).map(([top, data]) => {
              const pct = Math.round((data.hits / data.total) * 100);
              return `
                <div class="space-y-1">
                  <div class="flex justify-between text-xs font-semibold text-slate-800">
                    <span>${top}</span>
                    <span>${pct}% (${data.hits}/${data.total})</span>
                  </div>
                  <div class="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div class="bg-blue-600 h-full rounded-full" style="width: ${pct}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="flex items-center justify-between pt-4">
          <button onclick="window.medbioResetExam()" class="px-6 py-3 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm transition-colors">
            Novo Simulado
          </button>
          <button onclick="window.medbioNav('questions')" class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all">
            Ir para Correção e Questões
          </button>
        </div>

      </div>
    `;
  }
}
