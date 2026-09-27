// LUmed — Plataforma Inteligente de Estudos Médicos
// Autocontido, empacotável pelo Vite, com suporte completo a 4 disciplinas, 145 questões comentadas,
// repetição espaçada, calculadora antropométrica e Tutor Inteligente IA.

import { DISCIPLINES, STUDY_MATERIALS } from '../data/studyMaterials.js';
import { QUESTIONS } from '../data/questionsData.js';

(function() {
  // 1. TÓPICOS PROGRAMÁTICOS (Dinamizados a partir dos Guias Teóricos)
  const TOPICS = [...new Set(STUDY_MATERIALS.map(m => m.assunto))];

  // 2. CHAVES DE ARMAZENAMENTO LOCAL
  const STORAGE_KEYS = {
    USER_ANSWERS: 'lumed_user_answers_v5',
    REVISION_ITEMS: 'lumed_revision_items_v5',
    SIMULATED_EXAMS: 'lumed_simulated_exams_v5'
  };

  // 3. PERSISTÊNCIA LOCAL (STORAGE & PROGRESSO DO ALUNO)
  function getUserAnswers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function recordAnswer({ questionId, chosenOption }) {
    const question = QUESTIONS.find(q => q.id === questionId || q.numero === questionId);
    if (!question) return null;

    const isCorrect = chosenOption === question.respostaCorreta;
    const existing = getUserAnswers();
    const prev = existing.filter(a => a.questionId === question.id);
    const hits = prev.filter(a => a.isCorrect).length + (isCorrect ? 1 : 0);
    const errors = prev.filter(a => !a.isCorrect).length + (!isCorrect ? 1 : 0);

    const newAns = {
      id: Date.now().toString(),
      questionId: question.id,
      assunto: question.assunto,
      subassunto: question.subassunto,
      dificuldade: question.dificuldade,
      chosenOption,
      correctOption: question.respostaCorreta,
      isCorrect,
      attemptNumber: prev.length + 1,
      timestamp: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify([...existing, newAns]));
    updateRevisionSchedule(question.id, isCorrect, hits, errors);
    return newAns;
  }

  function updateRevisionSchedule(questionId, isCorrect, totalHits, totalErrors) {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.REVISION_ITEMS);
      let items = raw ? JSON.parse(raw) : {};
      const now = new Date();
      let days = isCorrect ? (totalHits === 1 ? 3 : totalHits === 2 ? 7 : 14) : 1;

      items[questionId] = {
        questionId,
        lastPracticed: now.toISOString(),
        nextRevision: new Date(now.getTime() + days * 86400000).toISOString(),
        daysInterval: days,
        totalHits,
        totalErrors,
        isWeakPoint: totalErrors >= 2
      };
      localStorage.setItem(STORAGE_KEYS.REVISION_ITEMS, JSON.stringify(items));
    } catch (e) {}
  }

  function getPendingRevisions() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.REVISION_ITEMS);
      if (!raw) return [];
      const items = JSON.parse(raw);
      const now = new Date();
      return Object.values(items).filter(item => new Date(item.nextRevision) <= now || item.isWeakPoint);
    } catch (e) { return []; }
  }

  function getPerformanceStats() {
    const answers = getUserAnswers();
    const latest = {};
    answers.forEach(a => { latest[a.questionId] = a; });

    const uniqueList = Object.values(latest);
    const uniqueCount = uniqueList.length;
    const hits = uniqueList.filter(a => a.isCorrect).length;
    const errors = uniqueCount - hits;
    const overallPct = uniqueCount > 0 ? Math.round((hits / uniqueCount) * 100) : 0;

    const topicStats = TOPICS.map(topic => {
      const topicLatest = uniqueList.filter(a => a.assunto === topic);
      const count = topicLatest.length;
      const topicHits = topicLatest.filter(a => a.isCorrect).length;
      const pct = count > 0 ? Math.round((topicHits / count) * 100) : 0;
      return { assunto: topic, totalRespondidas: count, acertos: topicHits, erros: count - topicHits, percentual: pct };
    });

    return { questoesUnicasRespondidas: uniqueCount, totalAcertos: hits, totalErros: errors, percentualGeral: overallPct, desempenhoPorAssunto: topicStats };
  }

  function getWeakPoints() {
    const stats = getPerformanceStats();
    const weakTopics = stats.desempenhoPorAssunto.filter(t => t.totalRespondidas > 0 && t.percentual < 70);

    if (weakTopics.length === 0) {
      if (stats.questoesUnicasRespondidas === 0) {
        return { hasWeakPoints: false, title: "Nenhum ponto fraco detectado ainda", message: "Comece a praticar questões para mapear seus tópicos prioritários de estudo.", sugestao: "Inicie por Microbiologia, Bioquímica, Parasitologia ou Propedêutica Médica." };
      }
      return { hasWeakPoints: false, title: "Excelente aproveitamento!", message: "Seus acertos estão elevados em todas as matérias praticadas.", sugestao: "Mantenha a rotina de repetição espaçada no LUmed." };
    }

    const worst = [...weakTopics].sort((a, b) => a.percentual - b.percentual)[0];
    const mat = STUDY_MATERIALS.find(m => m.assunto === worst.assunto);
    return { hasWeakPoints: true, title: `Ponto de atenção: ${worst.assunto}`, message: `Aproveitamento de ${worst.percentual}% (${worst.erros} erro(s) em ${worst.totalRespondidas} questões).`, sugestao: mat ? `Sugestão: Revise ${mat.conceitosFundamentais[0]}` : "Revise este módulo no guia." };
  }

  // 4. BASE DE CONHECIMENTO & ENGINE DO TUTOR INTELIGENTE LUmed
  async function queryAITutorMock({ question, promptType, customPrompt, selectedOption }) {
    await new Promise(r => setTimeout(r, 350));
    const textQuery = (customPrompt || '').toLowerCase();
    const opt = selectedOption !== null && selectedOption !== undefined ? selectedOption : 0;
    const currentQ = question || QUESTIONS[0];

    // Se for uma dúvida customizada digitada pelo usuário no chat:
    if (promptType === 'custom' && textQuery) {
      // Bioquímica
      if (textQuery.includes('bohr') || textQuery.includes('oxigenio') || textQuery.includes('hemoglobina')) {
        return `🩺 **Tutor LUmed — Efeito Bohr & Oxigênio**:
• **O que é**: O Efeito Bohr descreve o desvio da curva de dissociação da Hemoglobina para a DIREITA em resposta ao aumento de H+ (queda de pH) e da PaCO2.
• **Significado Fisiológico**: Nos tecidos metabolicamente ativos, a acidez e o CO2 facilitam a transição para a forma T (desoxigenada), 'soltando' o O2 onde ele é mais necessário.
• **Mnemônico**: *CADET, desvia pra Direita!* (CO2, Acidose/H+, 2,3-DPG, Exercício, Temperatura).`;
      }
      if (textQuery.includes('anion gap') || textQuery.includes('acidose')) {
        return `🧮 **Tutor LUmed — Anion Gap Plasmático**:
• **Fórmula**: Anion Gap = [Na+] - ([Cl-] + [HCO3-]). Normal: 8 a 12 mEq/L.
• **Interpretação**: Se > 12 mEq/L, há acúmulo de ânions não mensurados no sangue.
• **Mnemônico MUDPILES**: Metanol, Uremia, Diabetes (Cetoacidose), Paralcóol, Isoniazida, Lactato, Etilenoglicol, Salicilatos.`;
      }
      if (textQuery.includes('ldl') || textQuery.includes('hdl') || textQuery.includes('estatina') || textQuery.includes('colesterol')) {
        return `🩸 **Tutor LUmed — Lipoproteínas & Estatinas**:
• **LDL**: Carrega ApoB-100. Deposita colesterol nas artérias (placa de ateroma).
• **HDL**: Carrega ApoA-I. Realiza o Transporte Reverso de Colesterol (retira das artérias para o fígado).
• **Estatinas**: Inibem a HMG-CoA Redutase no fígado, aumentando os receptores que limpam o LDL da circulação.`;
      }

      // Virologia & Influenza
      if (textQuery.includes('influenza') || textQuery.includes('oseltamivir') || textQuery.includes('tamiflu') || textQuery.includes('drift') || textQuery.includes('shift')) {
        return `🦠 **Tutor LUmed — Vírus Influenza & Antivirais**:
• **Hemaglutinina (HA)**: Espícula de ligação ao ácido siálico para ENTRADA celular.
• **Neuraminidase (NA)**: Espícula de clivagem enzimática do ácido siálico para LIBERAÇÃO das partículas virais.
• **Oseltamivir (Tamiflu)**: Inibe a Neuraminidase (NA), prendendo os vírus à célula hospedeira.
• **Drift vs Shift**: Drift = Mutações pontuais (Epidemias sazonais anuais); Shift = Rearranjo de 8 fragmentos de RNA (PANDEMIAS Globais de Influenza A).`;
      }

      // Parasitologia
      if (textQuery.includes('tricuri') || textQuery.includes('trichiura') || textQuery.includes('chicote') || textQuery.includes('prolapso')) {
        return `🪱 **Tutor LUmed — Tricuríase (Trichuris trichiura)**:
• **Morfologia**: 'Verme em chicote' (anterior afilada na mucosa colônica, posterior espessa no lúmen).
• **Ovos no EPF**: Formato patognomônico de BARRIL ou LIMÃO com rolhas polares hialinas.
• **Clínica Grave**: Em crianças com infecção maciça, causa PROLAPSO RETAL, tenesmo, diarreia mucossanguinolenta e anemia ferropriva.
• **Tratamento**: Mebendazol ou Albendazol por 3 dias. Não faz ciclo de Loos.`;
      }
      if (textQuery.includes('ascaris') || textQuery.includes('ascaridiase') || textQuery.includes('löffler') || textQuery.includes('loos') || textQuery.includes('piperazina')) {
        return `🪱 **Tutor LUmed — Ascaridíase (Ascaris lumbricoides)**:
• **Ciclo de Loos**: Intestino -> Fígado -> Coração Direito -> Pulmões (ruptura de capilares alveolares) -> Laringe (deglutição) -> Intestino Delgado.
• **Síndrome de Löffler**: Pneumonia eosinofílica migratória com tosse, infiltrado pulmonar migratório ao Rx e alta eosinofilia.
• **Suboclusão Intestinal**: Tratar com PIPERAZINA (provoca paralisia flácida dos vermes) + Óleo Mineral + Jejum por SNG.
• **Ovos**: Férteis com casca espessa mamilonada marrom. Tratamento ambulatorial: Albendazol 400 mg dose única.`;
      }
      if (textQuery.includes('chagas') || textQuery.includes('cruzi') || textQuery.includes('barbeiro') || textQuery.includes('romaña') || textQuery.includes('benznidazol') || textQuery.includes('mega') || textQuery.includes('brd')) {
        return `🪱 **Tutor LUmed — Doença de Chagas (Trypanosoma cruzi)**:
• **Vetor & Transmissão**: Triatomíneo ('Barbeiro') por contaminação das fezes/urina (estercorária) ou via oral (açaí/caldo de cana).
• **Formas**: Amastigota (intracelular tecidual), Tripomastigota (sanguíneo e metacíclico infectante).
• **Fase Aguda**: Sinal de Romaña (edema bipalpebral unilateral indolor) e alta parassitemia (pesquisa direta no sangue). Tratamento: BENZNIDAZOL.
• **Fase Crônica**: 2 testes sorológicos distintos IgG positivos (ELISA + IFI). Forma Cardíaca (BRD + BDAE, arritmias, aneurisma apical) e Digestiva (Megaesôfago e Megacólon por destruição dos plexos entéricos de Auerbach/Meissner).`;
      }

      // Propedêutica Médica
      if (textQuery.includes('glasgow') || textQuery.includes('consciencia') || textQuery.includes('decerebracao') || textQuery.includes('decorticao')) {
        return `🩺 **Tutor LUmed — Escala de Coma de Glasgow (GCS)**:
• **Parâmetros Comportamentais**: Abertura Ocular (1-4), Resposta Verbal (1-5) e Resposta Motora (1-6). Pontuação de 3 a 15.
• **Resposta Motora à Dor**:
  - 6: Obedece ordens
  - 5: Localiza a dor
  - 4: Flexão normal (retirada)
  - 3: Flexão anormal (Postura de Decorticação)
  - 2: Extensão anormal (Postura de Decerebração)
  - 1: Sem resposta motora.`;
      }
      if (textQuery.includes('imc') || textQuery.includes('antropometria') || textQuery.includes('circunferencia abdominal')) {
        return `⚖️ **Tutor LUmed — Antropometria & IMC**:
• **Cálculo do IMC**: Peso (kg) / [Altura (m)]². Faixas OMS: Eutrofia (18,5 - 24,9), Sobrepeso (25,0 - 29,9), Obesidade I (30,0 - 34,9), Obesidade II (35,0 - 39,9), Obesidade III (>= 40,0).
• **Circunferência Abdominal (Risco Cardiovascular Elevated)**: > 88 cm em mulheres / > 102 cm em homens.`;
      }
      if (textQuery.includes('exame fisico') || textQuery.includes('percussao') || textQuery.includes('plessimetro') || textQuery.includes('ausculta')) {
        return `🩺 **Tutor LUmed — Técnicas Propedêuticas**:
• **Sequência Clássica**: Inspeção -> Palpação -> Percussão -> Ausculta (Examinador posicionado à DIREITA do paciente).
• **Exceção Abdominal**: Inspeção -> Ausculta -> Percussão -> Palpação (para não alterar ruídos hidroaéreos).
• **Percussão Digito-Digital**: Dedo Plessímetro (apoiado) e Dedo Plessor (golpeador).
• **Sons Percutórios**: Som Claro Pulmonar (pulmão aerado), Som Timpânico (bolha gástrica/gás), Som Maciço (fígado/órgão sólido).
• **Estetoscópio**: Campânula (sons graves/baixa frequência) vs Diafragma (sons agudos/alta frequência).`;
      }
      if (textQuery.includes('virchow') || textQuery.includes('troisier') || textQuery.includes('tireoide') || textQuery.includes('turgencia') || textQuery.includes('facies')) {
        return `🩺 **Tutor LUmed — Propedêutica da Cabeça e Pescoço**:
• **Linfonodo de Virchow (Sinal de Troisier)**: Enfartamento ganglionar supraclavicular esquerdo = metástase de adenocarcinoma gástrico/abdominal via ducto torácico.
• **Tireoide**: Mobilidade vertical ao DEGLUTIR facilita a palpação bimanual (Manobra de Quervain).
• **Turgência Jugular a 45º**: Indicador de hipertensão venosa central (PVC elevada) e insuficiência cardíaca direita.
• **Fácies**: Parkinsoniana (em máscara), Cushingóide (lua cheia), Basedowiana (exoftalmia).`;
      }

      return `👨‍⚕️ **Tutor LUmed**:
Dúvida: "${customPrompt}"
Sobre o tópico de **${currentQ.assunto}**:
${currentQ.explicacao}

💡 **Conceito Chave de Medicina**: ${currentQ.conceitoPrincipal}`;
    }

    // Botões de sugestão rápida
    const letter = ['A', 'B', 'C', 'D'][opt] || 'A';
    switch (promptType) {
      case 'why_wrong':
        return `🧠 **Tutor LUmed**:
Sobre a **Alternativa (${letter})**:
${currentQ.explicacaoAlternativas?.[letter] || currentQ.explicacaoAlternativas?.[opt] || 'Esta alternativa é um distrator conceitual.'}

💡 **Gabarito Correto**: Alternativa **(${['A', 'B', 'C', 'D'][currentQ.respostaCorreta]})**.
🔑 **Conceito-Chave**: ${currentQ.conceitoPrincipal}`;
      case 'explain_beginner':
        return `🩺 **Explicação Simplificada LUmed**:
${currentQ.explicacao}

Gabarito: **(${['A', 'B', 'C', 'D'][currentQ.respostaCorreta]})**. Conceito: *"${currentQ.conceitoPrincipal}"*.`;
      case 'core_concept':
        return `🔑 **Conceito Chave para Dominar**:
**${currentQ.conceitoPrincipal}**

• Assunto: ${currentQ.assunto}
• Gabarito: Alternativa (${['A', 'B', 'C', 'D'][currentQ.respostaCorreta]})`;
      case 'clinical_example':
        return `🏥 **Aplicação na Prática Médica**:
Na rotina clínica de *${currentQ.assunto}*, entender a **Alternativa (${['A', 'B', 'C', 'D'][currentQ.respostaCorreta]})** é fundamental: ${currentQ.explicacao}`;
      default:
        return `👨‍⚕️ **Tutor LUmed**:
Gabarito: **(${['A', 'B', 'C', 'D'][currentQ.respostaCorreta]})**.
Raciocínio Clínico: ${currentQ.explicacao}`;
    }
  }

  // 5. ESTADO GLOBAL LUmed
  const state = {
    activeTab: 'dashboard', // 'dashboard' | 'questions' | 'review' | 'exam' | 'study'
    questionState: { currentFilter: 'all', currentQuestionIndex: 0, selectedOption: null, isConfirmed: false, confirmedResult: null },
    examState: { isRunning: false, isFinished: false, selectedTopic: 'all', questionCount: 10, questions: [], currentIndex: 0, answers: {} },
    studyState: { selectedDiscipline: 'microbiologia', selectedTopicId: 8, expandedChapterIndex: null },
    aiTutorState: { isOpen: false, activeQuestion: null, selectedOption: null, chatHistory: [], isLoading: false }
  };

  // 6. COMPONENTES E INTERFACES HTML
  function renderNavbarHTML() {
    const stats = getPerformanceStats();
    const pendingCount = getPendingRevisions().length;

    return `
      <header class="sticky top-0 z-30 glass-panel border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div class="flex items-center gap-3 cursor-pointer" onclick="window.medbioNav('dashboard')">
            <div class="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-500/20 tracking-wider">
              LU
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="font-extrabold text-xl tracking-tight text-slate-900">LU<span class="text-blue-600">med</span></span>
                <span class="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 rounded-full border border-blue-200">Medicina</span>
              </div>
              <p class="text-[11px] text-slate-500 hidden sm:block font-medium">Plataforma de Estudos Médicos & Tutor IA</p>
            </div>
          </div>

          <nav class="hidden md:flex items-center space-x-1">
            <button type="button" onclick="window.medbioNav('dashboard')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="layout-dashboard" class="w-4 h-4"></i> Dashboard
            </button>
            <button type="button" onclick="window.medbioNav('questions')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'questions' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="help-circle" class="w-4 h-4"></i> Questões (${QUESTIONS.length})
            </button>
            <button type="button" onclick="window.medbioNav('study')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'study' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="book-open" class="w-4 h-4"></i> Estudar
            </button>
            <button type="button" onclick="window.medbioNav('review')" class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'review' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Revisão
              ${pendingCount > 0 ? `<span class="px-1.5 py-0.5 text-xs bg-amber-500 text-white rounded-full font-bold">${pendingCount}</span>` : ''}
            </button>
            <button type="button" onclick="window.medbioNav('exam')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'exam' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="file-text" class="w-4 h-4"></i> Simulado
            </button>
          </nav>

          <div class="flex items-center gap-3">
            <div class="hidden lg:flex items-center gap-3 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
              <div class="flex items-center gap-1.5"><i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-600"></i><span>${stats.percentualGeral}% precisão</span></div>
              <span class="text-slate-300">|</span>
              <div class="flex items-center gap-1.5"><i data-lucide="target" class="w-4 h-4 text-blue-600"></i><span>${stats.questoesUnicasRespondidas}/${QUESTIONS.length} questões</span></div>
            </div>
            <button type="button" onclick="window.medbioOpenAITutor()" class="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4 text-indigo-200"></i><span>Tutor LUmed</span>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  function renderMobileNavHTML() {
    const pendingCount = getPendingRevisions().length;
    return `
      <nav class="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 px-2 py-2 flex items-center justify-around shadow-lg">
        <button type="button" onclick="window.medbioNav('dashboard')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'dashboard' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="layout-dashboard" class="w-5 h-5 mb-0.5"></i><span>Início</span>
        </button>
        <button type="button" onclick="window.medbioNav('questions')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'questions' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="help-circle" class="w-5 h-5 mb-0.5"></i><span>Questões</span>
        </button>
        <button type="button" onclick="window.medbioNav('study')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'study' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="book-open" class="w-5 h-5 mb-0.5"></i><span>Estudar</span>
        </button>
        <button type="button" onclick="window.medbioNav('review')" class="relative flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'review' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="rotate-ccw" class="w-5 h-5 mb-0.5"></i><span>Revisão</span>
          ${pendingCount > 0 ? `<span class="absolute top-1 right-3 w-2 h-2 bg-amber-500 rounded-full"></span>` : ''}
        </button>
        <button type="button" onclick="window.medbioNav('exam')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'exam' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="file-text" class="w-5 h-5 mb-0.5"></i><span>Simulado</span>
        </button>
      </nav>
    `;
  }

  function renderDashboardHTML() {
    const stats = getPerformanceStats();
    const weak = getWeakPoints();
    const pendingCount = getPendingRevisions().length;

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        <!-- Hero Banner LUmed -->
        <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-6 md:p-8 text-white shadow-xl">
          <div class="relative z-10 space-y-3 max-w-2xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-blue-100">
              <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Plataforma Inteligente LUmed
            </div>
            <h1 class="text-2xl md:text-4xl font-extrabold tracking-tight text-white">Preparatório Médico LUmed</h1>
            <p class="text-blue-100 text-xs md:text-sm leading-relaxed">
              Bioquímica Médica, Microbiologia & Virologia, Parasitologia Médica e Propedêutica Médica integradas com repetição espaçada e IA Didática.
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-2.5">
              <button type="button" onclick="window.medbioNav('questions')" class="px-4 py-2.5 rounded-xl bg-white text-blue-700 font-extrabold text-xs shadow-md hover:bg-blue-50 transition-all flex items-center gap-1.5">
                <i data-lucide="play" class="w-4 h-4"></i> Praticar Questões (${QUESTIONS.length})
              </button>
              <button type="button" onclick="window.medbioSelectDisciplineAndTopic('microbiologia', 8)" class="px-3.5 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 transition-all">
                🦠 Microbiologia
              </button>
              <button type="button" onclick="window.medbioSelectDisciplineAndTopic('parasitologia', 5)" class="px-3.5 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 transition-all">
                🪱 Parasitologia
              </button>
              <button type="button" onclick="window.medbioSelectDisciplineAndTopic('propedeutica', 8)" class="px-3.5 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 transition-all">
                🩺 Propedêutica
              </button>
              <button type="button" onclick="window.medbioSelectDisciplineAndTopic('bioquimica', 1)" class="px-3.5 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 transition-all">
                🧪 Bioquímica
              </button>
            </div>
          </div>
        </div>

        <!-- Métrica de Desempenho e Diagnóstico Autônomo -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase text-slate-400">Precisão Geral</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl md:text-4xl font-black text-slate-900">${stats.percentualGeral}%</span>
              <span class="text-xs font-bold text-slate-500">acertos</span>
            </div>
            <p class="text-xs text-slate-500 font-medium">${stats.totalAcertos} certas de ${stats.questoesUnicasRespondidas} praticadas</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase text-slate-400">Repetição Espaçada</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl md:text-4xl font-black text-amber-600">${pendingCount}</span>
              <span class="text-xs font-bold text-slate-500">pendentes</span>
            </div>
            <p class="text-xs text-slate-500 font-medium">Agendamento autônomo (1, 3, 7, 14 dias)</p>
          </div>

          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-2">
            <span class="text-xs font-bold uppercase text-slate-400">Banco de Questões Verificado</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl md:text-4xl font-black text-indigo-600">${QUESTIONS.length}</span>
              <span class="text-xs font-bold text-slate-500">questões</span>
            </div>
            <p class="text-xs text-slate-500 font-medium">Gabarito detalhado item a item + Tutor IA</p>
          </div>
        </div>

        <!-- Card de Ponto Fraco Detectado -->
        <div class="p-6 rounded-3xl ${weak.hasWeakPoints ? 'bg-red-50/80 border-red-200 text-red-950' : 'bg-emerald-50/80 border-emerald-200 text-emerald-950'} border shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 font-extrabold text-sm">
              <i data-lucide="${weak.hasWeakPoints ? 'alert-triangle' : 'check-circle-2'}" class="w-5 h-5 ${weak.hasWeakPoints ? 'text-red-600' : 'text-emerald-600'}"></i>
              <span>${weak.title}</span>
            </div>
            ${weak.hasWeakPoints ? `<button type="button" onclick="window.medbioStartReviewSession()" class="px-3.5 py-1.5 rounded-xl bg-red-600 text-white font-bold text-xs shadow-xs">Revisar Agora</button>` : ''}
          </div>
          <p class="text-xs md:text-sm font-medium leading-relaxed">${weak.message}</p>
          <div class="p-3 bg-white/70 rounded-xl text-xs font-semibold border ${weak.hasWeakPoints ? 'border-red-100 text-red-900' : 'border-emerald-100 text-emerald-900'}">
            💡 ${weak.sugestao}
          </div>
        </div>

        <!-- Grade de Módulos Rápidos por Disciplina -->
        <div class="space-y-4">
          <h3 class="text-lg font-extrabold text-slate-900">Disciplinas e Módulos de Estudo LUmed (${STUDY_MATERIALS.length} Módulos)</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${STUDY_MATERIALS.map(mat => `
              <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                    ${mat.disciplineName} • Módulo ${mat.moduloNumero}
                  </span>
                  <span class="text-xs font-bold text-slate-400">${mat.questoesRelacionadas ? mat.questoesRelacionadas.length : 0} questões</span>
                </div>
                <h4 class="text-sm md:text-base font-extrabold text-slate-900">${mat.assunto}</h4>
                <p class="text-xs text-slate-600 line-clamp-2">${mat.descricao}</p>
                <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <button type="button" onclick="window.medbioSelectDisciplineAndTopic('${mat.discipline}', ${mat.id})" class="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    Ler Guia Teórico →
                  </button>
                  <button type="button" onclick="window.medbioSetQuestionFilter('${mat.assunto}')" class="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs">
                    Resolver Questões
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function renderQuestionsHTML() {
    const { currentFilter, currentQuestionIndex, selectedOption, isConfirmed } = state.questionState;

    let filtered = QUESTIONS;
    if (currentFilter === 'wrong') {
      const wrongIds = getUserAnswers().filter(a => !a.isCorrect).map(a => a.questionId);
      filtered = QUESTIONS.filter(q => wrongIds.includes(q.id));
    } else if (currentFilter === 'unanswered') {
      const ansIds = getUserAnswers().map(a => a.questionId);
      filtered = QUESTIONS.filter(q => !ansIds.includes(q.id));
    } else if (currentFilter === 'bioquimica') {
      filtered = QUESTIONS.filter(q => q.assunto === 'bioquimica');
    } else if (currentFilter === 'microbiologia') {
      filtered = QUESTIONS.filter(q => q.assunto === 'microbiologia');
    } else if (currentFilter === 'parasitologia') {
      filtered = QUESTIONS.filter(q => q.assunto === 'parasitologia');
    } else if (currentFilter === 'propedeutica') {
      filtered = QUESTIONS.filter(q => q.assunto === 'propedeutica');
    } else if (currentFilter !== 'all') {
      filtered = QUESTIONS.filter(q => q.assunto === currentFilter || q.subassunto === currentFilter);
    }

    const currentQ = filtered[currentQuestionIndex];

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8 max-w-4xl mx-auto">
        <!-- Filtro de Questões -->
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2 overflow-x-auto py-1">
            <button type="button" onclick="window.medbioSetQuestionFilter('all')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}">Todas (${QUESTIONS.length})</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('bioquimica')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'bioquimica' ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'}">🧪 Bioquímica</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('microbiologia')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'microbiologia' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}">🦠 Microbiologia</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('parasitologia')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'parasitologia' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}">🪱 Parasitologia</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('propedeutica')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'propedeutica' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-700'}">🩺 Propedêutica</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('unanswered')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'unanswered' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'}">Não Respondidas</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('wrong')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'wrong' ? 'bg-red-600 text-white' : 'bg-slate-100 text-slate-700'}">Erradas</button>
          </div>
          <span class="text-xs font-extrabold text-slate-500">Questão ${filtered.length > 0 ? currentQuestionIndex + 1 : 0} de ${filtered.length}</span>
        </div>

        ${!currentQ ? `
          <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-3">
            <p class="text-slate-500 text-sm font-semibold">Nenhuma questão encontrada para este filtro.</p>
            <button type="button" onclick="window.medbioSetQuestionFilter('all')" class="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold">Ver todas as questões</button>
          </div>
        ` : `
          <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-100">Questão #${currentQ.numero || currentQ.id}</span>
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">${currentQ.subassunto || currentQ.assunto}</span>
              </div>
              <span class="text-xs font-semibold text-slate-400 uppercase">Dificuldade: ${currentQ.dificuldade || 'Média'}</span>
            </div>

            <p class="text-base md:text-lg font-semibold text-slate-900 leading-relaxed">${currentQ.enunciado}</p>

            <div class="space-y-3 pt-2">
              ${currentQ.alternativas.map((altText, idx) => {
                let cardClass = 'border-slate-200 bg-white hover:border-slate-300';
                let iconClass = 'bg-slate-100 text-slate-700';
                const letter = ['A', 'B', 'C', 'D'][idx];

                if (selectedOption === idx) {
                  cardClass = 'border-blue-600 bg-blue-50/70 shadow-sm';
                  iconClass = 'bg-blue-600 text-white';
                }

                if (isConfirmed) {
                  if (idx === currentQ.respostaCorreta) {
                    cardClass = 'border-emerald-500 bg-emerald-50/80 font-semibold';
                    iconClass = 'bg-emerald-600 text-white';
                  } else if (selectedOption === idx && selectedOption !== currentQ.respostaCorreta) {
                    cardClass = 'border-red-400 bg-red-50/80';
                    iconClass = 'bg-red-600 text-white';
                  }
                }

                return `
                  <div type="button" onclick="window.medbioSelectOption(${idx})" class="option-card p-4 rounded-2xl border ${cardClass} transition-all cursor-pointer flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl ${iconClass} flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">${letter}</span>
                    <p class="text-sm md:text-base text-slate-800 font-medium pt-0.5">${altText}</p>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-100 gap-4">
              <button type="button" onclick="window.medbioPrevQuestion()" ${currentQuestionIndex === 0 ? 'disabled class="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-300 cursor-not-allowed text-xs font-bold"' : 'class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"'}>
                ← Anterior
              </button>

              ${!isConfirmed ? `
                <button type="button" onclick="window.medbioConfirmAnswer()" ${selectedOption === null || selectedOption === undefined ? 'disabled class="px-6 py-3 rounded-2xl bg-slate-200 text-slate-400 font-extrabold text-sm cursor-not-allowed"' : 'class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all"'}>
                  Confirmar Resposta
                </button>
              ` : `
                <button type="button" onclick="window.medbioNextQuestion()" class="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all">
                  Próxima Questão →
                </button>
              `}
            </div>

            ${isConfirmed ? `
              <div class="p-6 rounded-2xl bg-slate-900 text-white space-y-4 animate-fade-in mt-6">
                <div class="flex items-center justify-between">
                  <span class="font-extrabold text-sm text-emerald-400">Gabarito Comentado: Alternativa (${['A', 'B', 'C', 'D'][currentQ.respostaCorreta]})</span>
                  <button type="button" onclick="window.medbioOpenAITutorForQuestion('${currentQ.id}')" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Tutor LUmed
                  </button>
                </div>
                <p class="text-xs md:text-sm text-slate-200 leading-relaxed">${currentQ.explicacao}</p>
                
                ${currentQ.explicacaoAlternativas ? `
                  <div class="space-y-1.5 pt-2 border-t border-white/10 text-xs">
                    <span class="font-bold text-slate-300 block">Análise das Alternativas:</span>
                    ${Object.entries(currentQ.explicacaoAlternativas).map(([letra, explic]) => `
                      <p class="text-slate-300"><strong>${letra}:</strong> ${explic}</p>
                    `).join('')}
                  </div>
                ` : ''}

                <div class="p-3 rounded-xl bg-white/10 text-xs text-blue-200 font-medium">
                  <strong>Conceito-Chave:</strong> ${currentQ.conceitoPrincipal}
                </div>

                ${currentQ.source ? `
                  <div class="text-[11px] text-slate-400 border-t border-white/10 pt-2 flex items-center justify-between">
                    <span>Fonte: <strong>${currentQ.source}</strong> (${currentQ.sourceYear || '2023'})</span>
                    ${currentQ.sourceUrl ? `<a href="${currentQ.sourceUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">Ver referência ↗</a>` : ''}
                  </div>
                ` : ''}
              </div>
            ` : ''}
          </div>
        `}
      </div>
    `;
  }

  function renderStudyHTML() {
    const { selectedDiscipline, selectedTopicId } = state.studyState;

    const disciplineMaterials = STUDY_MATERIALS.filter(m => m.discipline === selectedDiscipline);
    const activeMat = STUDY_MATERIALS.find(m => m.id === selectedTopicId) || disciplineMaterials[0] || STUDY_MATERIALS[0];

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        <!-- Seletor Principal de Disciplina -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              <span>Estudar</span> • <span>${activeMat.disciplineName}</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">Guia Teórico de Estudos LUmed</h1>
          </div>

          <!-- Tabs de Disciplinas -->
          <div class="flex flex-wrap items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200 gap-1">
            ${DISCIPLINES.map(d => `
              <button type="button" onclick="window.medbioSelectDiscipline('${d.id}')" class="px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all ${selectedDiscipline === d.id ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
                ${d.name}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Sidebar de Módulos da Disciplina Ativa -->
          <div class="lg:col-span-4 space-y-2">
            <span class="text-xs font-bold uppercase text-slate-400 px-2 block">Módulos da Matéria (${disciplineMaterials.length})</span>
            ${disciplineMaterials.map(mat => `
              <button type="button" onclick="window.medbioSelectStudyTopic(${mat.id})" class="w-full text-left p-4 rounded-2xl border transition-all ${mat.id === activeMat.id ? 'border-blue-600 bg-blue-50/90 font-bold text-blue-900 shadow-sm' : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-extrabold ${mat.id === activeMat.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}">
                    Módulo ${mat.moduloNumero}
                  </span>
                </div>
                <h4 class="text-xs md:text-sm font-bold text-slate-900 leading-tight">${mat.assunto}</h4>
                <p class="text-[11px] text-slate-500 font-normal line-clamp-1 mt-1">${mat.descricao}</p>
              </button>
            `).join('')}
          </div>

          <!-- Área Principal de Leitura e Estudo -->
          <div class="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-8">
            <!-- Cabeçalho do Módulo -->
            <div class="border-b border-slate-100 pb-5 space-y-2">
              <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-100">
                Módulo ${activeMat.moduloNumero} • ${activeMat.disciplineName}
              </span>
              <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">${activeMat.assunto}</h2>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed pt-1">${activeMat.descricao}</p>
            </div>

            <!-- Resumo Executivo -->
            <div class="p-5 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100 space-y-2">
              <span class="text-xs font-extrabold uppercase text-blue-800 tracking-wider flex items-center gap-1.5">
                <i data-lucide="book-open" class="w-4 h-4"></i> Visão Geral & Objetivos Clínicos
              </span>
              <p class="text-xs md:text-sm text-slate-800 leading-relaxed font-medium">${activeMat.resumo}</p>
            </div>

            <!-- Calculadora de IMC Propedêutica (Exclusiva do Módulo 9 - Antropometria) -->
            ${activeMat.id === 9 ? `
              <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-200 shadow-sm space-y-4 my-6">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">⚖️</div>
                  <div>
                    <h4 class="text-base font-extrabold text-slate-900">Calculadora de IMC Propedêutica LUmed</h4>
                    <p class="text-xs text-slate-600">Ferramenta antropométrica interativa baseada na Classificação da OMS.</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Peso do Paciente (kg):</label>
                    <input type="number" id="imc-peso" placeholder="Ex: 70" step="0.1" class="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label class="block text-xs font-bold text-slate-700 mb-1">Altura (cm ou m):</label>
                    <input type="number" id="imc-altura" placeholder="Ex: 175 ou 1.75" step="0.01" class="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
                <button type="button" onclick="window.medbioCalcularIMC()" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md transition-all">
                  Calcular IMC & Classificar
                </button>
                <div id="imc-resultado" class="hidden p-4 rounded-xl bg-white border border-blue-200 space-y-2 text-xs animate-fade-in">
                  <!-- Preenchido via JavaScript -->
                </div>
              </div>
            ` : ''}

            <!-- Renderização de Imagens e Esquemas Didáticos -->
            ${activeMat.imagemUrl ? `
              <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 my-4">
                <img src="${activeMat.imagemUrl}" alt="${activeMat.assunto}" class="w-full h-auto max-h-[440px] object-cover" />
                <div class="p-3 bg-slate-900 text-slate-200 text-xs font-medium border-t border-slate-800 flex items-center gap-2">
                  <i data-lucide="image" class="w-4 h-4 text-blue-400 shrink-0"></i>
                  <span>${activeMat.imagemLegenda || activeMat.assunto}</span>
                </div>
              </div>
            ` : ''}

            ${activeMat.svgDiagrama ? `
              <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white p-5 my-4 space-y-3">
                <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span class="text-xs font-extrabold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                    <i data-lucide="activity" class="w-4 h-4"></i> Esquema Visual LUmed
                  </span>
                  <span class="text-[11px] font-bold text-slate-400">Infográfico Didático</span>
                </div>
                <div class="w-full overflow-x-auto pt-1">
                  ${activeMat.svgDiagrama}
                </div>
                ${activeMat.imagemLegenda ? `<p class="text-xs font-semibold text-slate-600 pt-1 flex items-center gap-1.5"><i data-lucide="info" class="w-3.5 h-3.5 text-blue-600"></i> ${activeMat.imagemLegenda}</p>` : ''}
              </div>
            ` : ''}

            <!-- Capítulos / Tópicos Detalhados em Cards -->
            <div class="space-y-6">
              <h3 class="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-2">Capítulos do Módulo</h3>
              ${activeMat.capitulos ? activeMat.capitulos.map((cap) => `
                <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                  <div>
                    <h4 class="text-sm md:text-base font-extrabold text-slate-900">${cap.titulo}</h4>
                    ${cap.subtitulo ? `<p class="text-xs font-semibold text-blue-700 mt-0.5">${cap.subtitulo}</p>` : ''}
                  </div>

                  <div class="text-xs md:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                    ${cap.conteudo}
                  </div>

                  ${cap.tabelaComparativa ? `
                    <div class="my-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                      <table class="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr class="bg-slate-100 border-b border-slate-200">
                            ${cap.tabelaComparativa.headers.map(h => `<th class="p-3 font-extrabold text-slate-800">${h}</th>`).join('')}
                          </tr>
                        </thead>
                        <tbody>
                          ${cap.tabelaComparativa.rows.map((row, rIdx) => `
                            <tr class="border-b border-slate-100 ${rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}">
                              ${row.map(cell => `<td class="p-3 text-slate-700 font-medium">${cell}</td>`).join('')}
                            </tr>
                          `).join('')}
                        </tbody>
                      </table>
                    </div>
                  ` : ''}

                  <div class="p-3 rounded-xl bg-blue-100/60 border border-blue-200 text-xs text-blue-900">
                    <strong>💡 Conceito Chave:</strong> ${cap.conceitoChave}
                  </div>
                </div>
              `).join('') : ''}
            </div>

            <!-- Navegação entre Módulos -->
            <div class="flex items-center justify-between pt-6 border-t border-slate-100">
              <button type="button" onclick="window.medbioPrevStudyModule()" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold">
                ← Módulo Anterior
              </button>
              <button type="button" onclick="window.medbioNextStudyModule()" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold">
                Próximo Módulo →
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderReviewHTML() {
    const pending = getPendingRevisions();

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8 max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span class="text-xs font-bold uppercase text-amber-600 tracking-wider block mb-1">Repetição Espaçada</span>
            <h1 class="text-2xl font-extrabold text-slate-900">Sessão de Revisão Programada</h1>
            <p class="text-xs text-slate-500 mt-1">Questões reagendadas com base no seu histórico de acertos e erros.</p>
          </div>
          <button type="button" onclick="window.medbioStartReviewSession()" class="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs shadow-md">
            Iniciar Revisão (${pending.length})
          </button>
        </div>

        ${pending.length === 0 ? `
          <div class="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-2">
            <i data-lucide="check-circle" class="w-12 h-12 text-emerald-500 mx-auto"></i>
            <h3 class="text-lg font-bold text-slate-900">Nenhuma revisão pendente para hoje!</h3>
            <p class="text-xs text-slate-500">Parabéns! Continue praticando simulados ou questões novas.</p>
          </div>
        ` : `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${pending.map(item => {
              const q = QUESTIONS.find(quest => quest.id === item.questionId);
              if (!q) return '';
              return `
                <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">Questão #${q.numero || q.id}</span>
                    ${item.isWeakPoint ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">Ponto Fraco</span>` : `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800">Revisão em ${item.daysInterval}d</span>`}
                  </div>
                  <h4 class="text-sm font-bold text-slate-900 line-clamp-2">${q.enunciado}</h4>
                  <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                    <span class="font-bold text-slate-700 block">Conceito:</span><span>${q.conceitoPrincipal}</span>
                  </div>
                  <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-[11px] text-slate-400 font-medium">${item.totalHits} acerto(s) / ${item.totalErrors} erro(s)</span>
                    <button type="button" onclick="window.medbioReviewQuestion('${q.id}')" class="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs">Revisar esta</button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    `;
  }

  function renderExamHTML() {
    const { isRunning, isFinished, questions, currentIndex, answers, selectedTopic, questionCount } = state.examState;

    if (!isRunning && !isFinished) {
      return `
        <div class="max-w-2xl mx-auto space-y-6 animate-fade-in pb-16 md:pb-8">
          <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm text-center space-y-3">
            <div class="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto"><i data-lucide="file-text" class="w-8 h-8"></i></div>
            <h1 class="text-2xl font-extrabold">Modo Simulado LUmed</h1>
            <p class="text-sm text-slate-500">Teste seus conhecimentos em condições reais de prova clínica.</p>
          </div>

          <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <div class="space-y-2">
              <label class="text-xs font-bold uppercase text-slate-500">Quantidade de Questões:</label>
              <div class="grid grid-cols-4 gap-3">
                ${[5, 10, 20, 35].map(c => `
                  <button type="button" onclick="window.medbioSetExamConfig('questionCount', ${c})" class="py-3 rounded-2xl border text-sm font-bold ${questionCount === c ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-700'}">${c} questões</button>
                `).join('')}
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold uppercase text-slate-500">Filtrar Assunto:</label>
              <select onchange="window.medbioSetExamConfig('selectedTopic', this.value)" class="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-sm font-bold text-slate-800">
                <option value="all" ${selectedTopic === 'all' ? 'selected' : ''}>Todos os assuntos (Geral)</option>
                ${TOPICS.map(t => `<option value="${t}" ${selectedTopic === t ? 'selected' : ''}>${t}</option>`).join('')}
              </select>
            </div>

            <button type="button" onclick="window.medbioStartExam()" class="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-base shadow-lg flex items-center justify-center gap-2">
              <i data-lucide="play" class="w-5 h-5"></i><span>Começar Simulado</span>
            </button>
          </div>
        </div>
      `;
    }

    if (isRunning) {
      const q = questions[currentIndex];
      return `
        <div class="space-y-6 animate-fade-in pb-16 md:pb-8 max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex items-center justify-between">
            <span class="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full">Questão ${currentIndex + 1} de ${questions.length}</span>
            <button type="button" onclick="window.medbioFinishExam()" class="px-4 py-2 bg-red-50 text-red-700 font-bold text-xs rounded-xl border border-red-200">Finalizar e ver resultado</button>
          </div>

          <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <p class="text-base md:text-lg font-semibold text-slate-900">${q.enunciado}</p>
            <div class="space-y-3 pt-2">
              ${q.alternativas.map((altText, idx) => `
                <div type="button" onclick="window.medbioAnswerExamQuestion('${q.id}', ${idx})" class="option-card p-4 rounded-2xl border ${answers[q.id] === idx ? 'border-blue-600 bg-blue-50/70' : 'border-slate-200 bg-white'} cursor-pointer flex items-start gap-3.5">
                  <span class="w-8 h-8 rounded-xl ${answers[q.id] === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'} flex items-center justify-center text-sm font-bold shrink-0">${['A', 'B', 'C', 'D'][idx]}</span>
                  <p class="text-sm md:text-base text-slate-800 font-medium pt-1">${altText}</p>
                </div>
              `).join('')}
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-100">
              <button type="button" onclick="window.medbioSetExamIndex(${currentIndex - 1})" ${currentIndex === 0 ? 'disabled class="px-4 py-2 rounded-xl bg-slate-100 text-slate-300 cursor-not-allowed text-xs font-bold"' : 'class="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold"'}>Anterior</button>
              <button type="button" onclick="window.medbioSetExamIndex(${currentIndex + 1})" ${currentIndex === questions.length - 1 ? 'disabled class="px-4 py-2 rounded-xl bg-slate-100 text-slate-300 cursor-not-allowed text-xs font-bold"' : 'class="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold"'}>Próxima</button>
            </div>
          </div>
        </div>
      `;
    }

    if (isFinished) {
      let hits = 0;
      questions.forEach(q => {
        if (answers[q.id] === q.respostaCorreta) hits++;
        if (answers[q.id] !== undefined) recordAnswer({ questionId: q.id, chosenOption: answers[q.id] });
      });
      const pct = Math.round((hits / questions.length) * 100);

      return `
        <div class="max-w-2xl mx-auto space-y-6 animate-fade-in pb-16 md:pb-8">
          <div class="bg-slate-900 rounded-3xl p-8 text-white text-center space-y-4">
            <h1 class="text-4xl font-extrabold text-white">${pct}% de Aproveitamento</h1>
            <p class="text-blue-200 text-sm">Você acertou ${hits} de ${questions.length} questões praticadas.</p>
          </div>
          <div class="flex items-center justify-between pt-4">
            <button type="button" onclick="window.medbioResetExam()" class="px-6 py-3 rounded-2xl bg-slate-200 text-slate-800 font-bold text-sm">Novo Simulado</button>
            <button type="button" onclick="window.medbioNav('questions')" class="px-6 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm">Ir para Questões</button>
          </div>
        </div>
      `;
    }
  }

  function renderAITutorModalHTML() {
    const { isOpen, chatHistory, isLoading } = state.aiTutorState;
    if (!isOpen) return '';

    return `
      <div class="fixed inset-0 z-50 flex justify-end animate-fade-in">
        <div onclick="window.medbioCloseAITutor()" class="ai-drawer-overlay fixed inset-0 bg-slate-900/40 backdrop-blur-xs"></div>
        <div class="relative w-full max-w-lg bg-white h-full shadow-2xl z-10 flex flex-col justify-between border-l border-slate-200">
          <div class="p-5 bg-gradient-to-r from-indigo-700 to-indigo-600 text-white flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center font-black text-xs">LU</div>
              <div>
                <h3 class="font-extrabold text-base leading-none">Tutor Inteligente LUmed</h3>
                <span class="text-[10px] text-indigo-200 font-medium">Medicina • Microbiologia, Parasitologia, Propedêutica & Bioquímica</span>
              </div>
            </div>
            <button type="button" onclick="window.medbioCloseAITutor()" class="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
          </div>

          <div id="ai-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            ${chatHistory.length === 0 ? `
              <div class="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm space-y-2">
                <p class="font-bold text-indigo-600 text-sm">Olá! Sou o Tutor Inteligente do LUmed 🩺</p>
                <p class="leading-relaxed">Estou pronto para te explicar qualquer dúvida conceitual ou clínica sobre Bioquímica Médica, Microbiologia, Virologia, Parasitologia e Propedêutica Médica!</p>
                <p class="text-slate-500 font-medium">Pergunte livremente ou selecione uma sugestão rápida abaixo.</p>
              </div>
            ` : ''}
            ${chatHistory.map(msg => `
              <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-800 shadow-xs'}">
                  ${msg.text.replace(/\n/g, '<br/>')}
                </div>
              </div>
            `).join('')}
            ${isLoading ? `<div class="p-3 bg-white border rounded-2xl text-xs text-indigo-600 font-bold flex items-center gap-2"><div class="w-3 h-3 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div><span>Tutor formulando resposta clínica...</span></div>` : ''}
          </div>

          <div class="p-3 bg-white border-t border-slate-200 space-y-2">
            <span class="text-[11px] font-bold text-slate-400 uppercase block">Atalhos Rápido do Tutor:</span>
            <div class="flex flex-wrap gap-1.5">
              <button type="button" onclick="window.medbioAskAITutor('why_wrong')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border border-slate-200">"Por que errei?"</button>
              <button type="button" onclick="window.medbioAskAITutor('explain_beginner')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border border-slate-200">"Explique para iniciantes"</button>
              <button type="button" onclick="window.medbioAskAITutor('core_concept')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border border-slate-200">"Conceito-Chave"</button>
              <button type="button" onclick="window.medbioAskAITutor('clinical_example')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border border-slate-200">"Caso Clínico"</button>
            </div>
          </div>

          <div class="p-4 bg-white border-t border-slate-200">
            <form onsubmit="window.medbioSubmitAICustomQuestion(event)" class="flex items-center gap-2">
              <input id="ai-custom-input" type="text" placeholder="Digite sua dúvida (ex: Chagas, Sinal de Romaña, Glasgow, IMC...)" class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500" />
              <button type="submit" class="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-sm"><i data-lucide="send" class="w-4 h-4"></i></button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // 7. RENDERIZADOR PRINCIPAL LUmed
  function renderApp() {
    const root = document.getElementById('app-root');
    if (!root) return;

    let contentHtml = '';
    switch (state.activeTab) {
      case 'dashboard': contentHtml = renderDashboardHTML(); break;
      case 'questions': contentHtml = renderQuestionsHTML(); break;
      case 'review': contentHtml = renderReviewHTML(); break;
      case 'exam': contentHtml = renderExamHTML(); break;
      case 'study': contentHtml = renderStudyHTML(); break;
      default: contentHtml = renderDashboardHTML();
    }

    root.innerHTML = `
      <div class="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
        ${renderNavbarHTML()}
        <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          ${contentHtml}
        </main>
        ${renderMobileNavHTML()}
        ${renderAITutorModalHTML()}
      </div>
    `;

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      try { window.lucide.createIcons(); } catch (e) {}
    }
  }

  // 8. HANDLERS GLOBAIS DE EVENTOS (window.medbio*)
  window.medbioNav = function(tab) { state.activeTab = tab; renderApp(); };

  window.medbioSelectDiscipline = function(disc) {
    state.studyState.selectedDiscipline = disc;
    const mats = STUDY_MATERIALS.filter(m => m.discipline === disc);
    if (mats.length > 0) {
      state.studyState.selectedTopicId = mats[0].id;
    }
    renderApp();
  };

  window.medbioSelectDisciplineAndTopic = function(disc, topicId) {
    state.activeTab = 'study';
    state.studyState.selectedDiscipline = disc;
    state.studyState.selectedTopicId = topicId;
    renderApp();
  };

  window.medbioSelectStudyTopic = function(id) {
    state.studyState.selectedTopicId = id;
    const mat = STUDY_MATERIALS.find(m => m.id === id);
    if (mat) {
      state.studyState.selectedDiscipline = mat.discipline;
    }
    renderApp();
  };

  window.medbioNextStudyModule = function() {
    const mats = STUDY_MATERIALS.filter(m => m.discipline === state.studyState.selectedDiscipline);
    const currIdx = mats.findIndex(m => m.id === state.studyState.selectedTopicId);
    if (currIdx !== -1 && currIdx < mats.length - 1) {
      state.studyState.selectedTopicId = mats[currIdx + 1].id;
      renderApp();
    }
  };

  window.medbioPrevStudyModule = function() {
    const mats = STUDY_MATERIALS.filter(m => m.discipline === state.studyState.selectedDiscipline);
    const currIdx = mats.findIndex(m => m.id === state.studyState.selectedTopicId);
    if (currIdx > 0) {
      state.studyState.selectedTopicId = mats[currIdx - 1].id;
      renderApp();
    }
  };

  window.medbioSetQuestionFilter = function(filterVal) {
    state.activeTab = 'questions';
    state.questionState.currentFilter = filterVal;
    state.questionState.currentQuestionIndex = 0;
    state.questionState.selectedOption = null;
    state.questionState.isConfirmed = false;
    state.questionState.confirmedResult = null;
    renderApp();
  };

  window.medbioSelectOption = function(optId) {
    if (state.questionState.isConfirmed) return;
    state.questionState.selectedOption = optId;
    renderApp();
  };

  window.medbioConfirmAnswer = function() {
    const { currentFilter, currentQuestionIndex, selectedOption } = state.questionState;
    if (selectedOption === null || selectedOption === undefined) return;

    let filtered = QUESTIONS;
    if (currentFilter === 'wrong') {
      const wrongIds = getUserAnswers().filter(a => !a.isCorrect).map(a => a.questionId);
      filtered = QUESTIONS.filter(q => wrongIds.includes(q.id));
    } else if (currentFilter === 'unanswered') {
      const ansIds = getUserAnswers().map(a => a.questionId);
      filtered = QUESTIONS.filter(q => !ansIds.includes(q.id));
    } else if (currentFilter === 'bioquimica') {
      filtered = QUESTIONS.filter(q => q.assunto === 'bioquimica');
    } else if (currentFilter === 'microbiologia') {
      filtered = QUESTIONS.filter(q => q.assunto === 'microbiologia');
    } else if (currentFilter === 'parasitologia') {
      filtered = QUESTIONS.filter(q => q.assunto === 'parasitologia');
    } else if (currentFilter === 'propedeutica') {
      filtered = QUESTIONS.filter(q => q.assunto === 'propedeutica');
    } else if (currentFilter !== 'all') {
      filtered = QUESTIONS.filter(q => q.assunto === currentFilter || q.subassunto === currentFilter);
    }

    const currentQ = filtered[currentQuestionIndex];
    if (!currentQ) return;

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
    renderApp();
  };

  window.medbioPrevQuestion = function() {
    state.questionState.currentQuestionIndex = Math.max(0, state.questionState.currentQuestionIndex - 1);
    state.questionState.selectedOption = null;
    state.questionState.isConfirmed = false;
    state.questionState.confirmedResult = null;
    renderApp();
  };

  window.medbioStartReviewSession = function() { window.medbioSetQuestionFilter('wrong'); };
  window.medbioReviewQuestion = function(qId) {
    const idx = QUESTIONS.findIndex(q => q.id === qId || q.numero === qId);
    if (idx !== -1) {
      state.activeTab = 'questions';
      state.questionState.currentFilter = 'all';
      state.questionState.currentQuestionIndex = idx;
      state.questionState.selectedOption = null;
      state.questionState.isConfirmed = false;
      renderApp();
    }
  };

  window.medbioSetExamConfig = function(key, val) { state.examState[key] = val; renderApp(); };
  window.medbioStartExam = function() {
    let pool = QUESTIONS;
    if (state.examState.selectedTopic !== 'all') {
      pool = QUESTIONS.filter(q => q.assunto === state.examState.selectedTopic);
    }
    const count = Math.min(state.examState.questionCount, pool.length);
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);

    state.examState.questions = shuffled;
    state.examState.currentIndex = 0;
    state.examState.answers = {};
    state.examState.isRunning = true;
    state.examState.isFinished = false;
    renderApp();
  };

  window.medbioAnswerExamQuestion = function(qId, optId) { state.examState.answers[qId] = optId; renderApp(); };
  window.medbioSetExamIndex = function(idx) {
    if (idx >= 0 && idx < state.examState.questions.length) {
      state.examState.currentIndex = idx;
      renderApp();
    }
  };
  window.medbioFinishExam = function() { state.examState.isRunning = false; state.examState.isFinished = true; renderApp(); };
  window.medbioResetExam = function() { state.examState.isRunning = false; state.examState.isFinished = false; state.examState.answers = {}; renderApp(); };

  window.medbioOpenAITutor = function() {
    const q = QUESTIONS[state.questionState.currentQuestionIndex] || QUESTIONS[0];
    state.aiTutorState.isOpen = true;
    state.aiTutorState.activeQuestion = q;
    state.aiTutorState.selectedOption = state.questionState.selectedOption;
    renderApp();
  };

  window.medbioOpenAITutorForQuestion = function(questionId) {
    const q = QUESTIONS.find(quest => quest.id === questionId || quest.numero === questionId) || QUESTIONS[0];
    state.aiTutorState.isOpen = true;
    state.aiTutorState.activeQuestion = q;
    state.aiTutorState.selectedOption = state.questionState.selectedOption;
    renderApp();
  };

  window.medbioCloseAITutor = function() { state.aiTutorState.isOpen = false; renderApp(); };

  window.medbioAskAITutor = async function(promptType, customPrompt = '') {
    const question = state.aiTutorState.activeQuestion || QUESTIONS[0];
    const selectedOption = state.aiTutorState.selectedOption;

    let userText = customPrompt;
    if (!userText) {
      if (promptType === 'why_wrong') userText = 'Por que errei ou por que essa alternativa está incorreta?';
      else if (promptType === 'explain_beginner') userText = 'Explique de forma simplificada para iniciantes.';
      else if (promptType === 'core_concept') userText = 'Qual o conceito chave que preciso dominar?';
      else if (promptType === 'clinical_example') userText = 'Como isso se aplica na prática médica?';
    }

    state.aiTutorState.chatHistory.push({ sender: 'user', text: userText });
    state.aiTutorState.isLoading = true;
    renderApp();

    const reply = await queryAITutorMock({ question, promptType, customPrompt, selectedOption });
    state.aiTutorState.isLoading = false;
    state.aiTutorState.chatHistory.push({ sender: 'ai', text: reply });
    renderApp();
  };

  window.medbioSubmitAICustomQuestion = function(event) {
    if (event && event.preventDefault) event.preventDefault();
    const input = document.getElementById('ai-custom-input');
    if (!input || !input.value.trim()) return false;
    const text = input.value.trim();
    input.value = '';
    window.medbioAskAITutor('custom', text);
    return false;
  };

  window.medbioCalcularIMC = function() {
    const pEl = document.getElementById('imc-peso');
    const aEl = document.getElementById('imc-altura');
    const resEl = document.getElementById('imc-resultado');
    if (!pEl || !aEl || !resEl) return;

    const peso = parseFloat(pEl.value);
    let altura = parseFloat(aEl.value);
    if (!peso || !altura || peso <= 0 || altura <= 0) {
      resEl.classList.remove('hidden');
      resEl.innerHTML = `<span class="text-red-600 font-bold">Por favor, insira valores válidos de peso e altura.</span>`;
      return;
    }

    if (altura > 3) altura = altura / 100;

    const imc = (peso / (altura * altura)).toFixed(1);
    let classif = '';
    let badgeColor = '';
    let risco = '';

    if (imc < 18.5) {
      classif = 'Baixo Peso (Magreza)';
      badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
      risco = 'Risco aumentado de desnutrição, osteopenia e infecções.';
    } else if (imc <= 24.9) {
      classif = 'Eutrofia (Peso Normal)';
      badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
      risco = 'Risco cardiovascular e metabólico médio/baixo.';
    } else if (imc <= 29.9) {
      classif = 'Sobrepeso (Pré-Obesidade)';
      badgeColor = 'bg-yellow-100 text-yellow-800 border-yellow-300';
      risco = 'Risco aumentado para Hipertensão, Diabetes Tipo 2 e Dislipidemia.';
    } else if (imc <= 34.9) {
      classif = 'Obesidade Grau I (Moderada)';
      badgeColor = 'bg-orange-100 text-orange-800 border-orange-300';
      risco = 'Risco alto para Doenças Cardiovasculares, Apneia do Sono e Esteatose Hepática.';
    } else if (imc <= 39.9) {
      classif = 'Obesidade Grau II (Grave)';
      badgeColor = 'bg-red-100 text-red-800 border-red-300';
      risco = 'Risco muito alto para DAC, Insuficiência Cardíaca e Osteoartrite.';
    } else {
      classif = 'Obesidade Grau III (Mórbida)';
      badgeColor = 'bg-rose-900 text-white border-rose-950';
      risco = 'Risco extremamente elevado com indicação de avaliação multidisciplinar/bariátrica.';
    }

    resEl.classList.remove('hidden');
    resEl.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="font-black text-slate-900 text-sm">IMC Calculado: <span class="text-blue-600 text-base">${imc} kg/m²</span></span>
        <span class="px-3 py-1 rounded-full text-xs font-extrabold border ${badgeColor}">${classif}</span>
      </div>
      <p class="text-slate-700 font-medium pt-1"><strong>Implicação Propedêutica:</strong> ${risco}</p>
    `;
  };

  // 9. MONTAGEM INICIAL DA APLICAÇÃO LUmed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  }
  renderApp();
  setTimeout(renderApp, 50);
})();
