// Servidor de Armazenamento Local (localStorage) do MedBio
import { QUESTIONS, TOPICS } from '../data/questionsData.js';
import { STUDY_MATERIALS } from '../data/studyMaterials.js';

const STORAGE_KEYS = {
  USER_ANSWERS: 'medbio_user_answers_v1',
  REVISION_ITEMS: 'medbio_revision_items_v1',
  SIMULATED_EXAMS: 'medbio_simulated_exams_v1',
  USER_PROFILE: 'medbio_user_profile_v1'
};

// Obter respostas salvas
export function getUserAnswers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Erro ao ler respostas do localStorage', e);
    return [];
  }
}

// Salvar resposta de questão e atualizar repetição espaçada
export function recordAnswer({ questionId, chosenOption }) {
  const question = QUESTIONS.find(q => q.id === questionId);
  if (!question) return null;

  const isCorrect = chosenOption === question.respostaCorreta;
  const existingAnswers = getUserAnswers();
  
  // Buscar histórico dessa questão
  const previousAttempts = existingAnswers.filter(a => a.questionId === questionId);
  const attemptsCount = previousAttempts.length + 1;
  const previousHitsCount = previousAttempts.filter(a => a.isCorrect).length;
  const previousErrorsCount = previousAttempts.filter(a => !a.isCorrect).length;

  const newAnswer = {
    id: Date.now().toString(),
    questionId,
    assunto: question.assunto,
    subassunto: question.subassunto,
    dificuldade: question.dificuldade,
    chosenOption,
    correctOption: question.respostaCorreta,
    isCorrect,
    attemptNumber: attemptsCount,
    timestamp: new Date().toISOString()
  };

  const updatedAnswers = [...existingAnswers, newAnswer];
  localStorage.setItem(STORAGE_KEYS.USER_ANSWERS, JSON.stringify(updatedAnswers));

  // Atualizar itens de revisão espaçada
  updateRevisionSchedule(questionId, isCorrect, previousHitsCount + (isCorrect ? 1 : 0), previousErrorsCount + (!isCorrect ? 1 : 0));

  return newAnswer;
}

// Algoritmo de Repetição Espaçada
// Se acertou: 1ª vez -> 3 dias; 2ª vez -> 7 dias; 3ª+ vez -> 14 dias.
// Se errou: -> volta para 1 dia.
// Vários erros (>= 2 erros) -> marcado como "ponto fraco".
export function updateRevisionSchedule(questionId, isCorrect, totalHits, totalErrors) {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REVISION_ITEMS);
    let items = raw ? JSON.parse(raw) : {};

    const now = new Date();
    let daysToAdd = 1;
    let isWeakPoint = totalErrors >= 2;

    if (isCorrect) {
      if (totalHits === 1) daysToAdd = 3;
      else if (totalHits === 2) daysToAdd = 7;
      else daysToAdd = 14;
    } else {
      daysToAdd = 1;
    }

    const nextRevisionDate = new Date(now.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

    items[questionId] = {
      questionId,
      lastPracticed: now.toISOString(),
      nextRevision: nextRevisionDate.toISOString(),
      daysInterval: daysToAdd,
      totalHits,
      totalErrors,
      isWeakPoint
    };

    localStorage.setItem(STORAGE_KEYS.REVISION_ITEMS, JSON.stringify(items));
  } catch (e) {
    console.error('Erro ao atualizar repetição espaçada', e);
  }
}

// Retornar itens de revisão agendados para hoje ou pendentes
export function getPendingRevisions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.REVISION_ITEMS);
    if (!raw) return [];
    
    const items = JSON.parse(raw);
    const now = new Date();

    return Object.values(items).filter(item => {
      const nextDate = new Date(item.nextRevision);
      return nextDate <= now || item.isWeakPoint;
    });
  } catch (e) {
    console.error('Erro ao obter revisões pendentes', e);
    return [];
  }
}

// Calcular Estatísticas de Desempenho por Assunto
export function getPerformanceStats() {
  const answers = getUserAnswers();
  const totalAnswered = answers.length;

  // Agrupar por última tentativa por questão única
  const latestByQuestion = {};
  answers.forEach(ans => {
    latestByQuestion[ans.questionId] = ans;
  });

  const uniqueQuestionsAnswered = Object.keys(latestByQuestion).length;
  const uniqueHits = Object.values(latestByQuestion).filter(a => a.isCorrect).length;
  const uniqueErrors = uniqueQuestionsAnswered - uniqueHits;

  const overallAccuracy = uniqueQuestionsAnswered > 0 
    ? Math.round((uniqueHits / uniqueQuestionsAnswered) * 100) 
    : 0;

  // Desempenho detalhado por cada um dos 7 assuntos
  const topicStats = TOPICS.map(topic => {
    const topicAnswers = answers.filter(a => a.assunto === topic);
    const topicLatest = Object.values(latestByQuestion).filter(a => a.assunto === topic);
    
    const countTotal = topicLatest.length;
    const countHits = topicLatest.filter(a => a.isCorrect).length;
    const countErrors = countTotal - countHits;
    const accuracy = countTotal > 0 ? Math.round((countHits / countTotal) * 100) : 0;

    return {
      assunto: topic,
      totalRespondidas: countTotal,
      acertos: countHits,
      erros: countErrors,
      percentual: accuracy
    };
  });

  return {
    totalRespostasRegistradas: totalAnswered,
    questoesUnicasRespondidas: uniqueQuestionsAnswered,
    totalAcertos: uniqueHits,
    totalErros: uniqueErrors,
    percentualGeral: overallAccuracy,
    desempenhoPorAssunto: topicStats
  };
}

// Identificar Pontos Fracos do Aluno (Seus pontos fracos)
export function getWeakPoints() {
  const stats = getPerformanceStats();
  const answers = getUserAnswers();

  // Filtrar assuntos com menos de 70% de aproveitamento ou erros recorrentes
  const weakTopics = stats.desempenhoPorAssunto.filter(t => t.totalRespondidas > 0 && t.percentual < 70);

  if (weakTopics.length === 0) {
    if (answers.length === 0) {
      return {
        hasWeakPoints: false,
        title: "Nenhum ponto fraco detectado ainda",
        message: "Comece resolvendo questões de Bioquímica para identificarmos automaticamente os conteúdos que exigem maior atenção.",
        sugestao: "Recomendação: Clique em 'Resolver questões' e inicie pelo assunto de Introdução às Biomoléculas."
      };
    }
    return {
      hasWeakPoints: false,
      title: "Excelente desempenho geral!",
      message: "Seu aproveitamento atual em Bioquímica está elevado em todos os assuntos praticados.",
      sugestao: "Continue realizando revisões espaçadas para fixação dos conceitos na memória de longo prazo."
    };
  }

  // Pegar o assunto com menor percentual
  const worstTopic = [...weakTopics].sort((a, b) => a.percentual - b.percentual)[0];
  const studyMaterial = STUDY_MATERIALS.find(m => m.assunto === worstTopic.assunto);

  return {
    hasWeakPoints: true,
    assunto: worstTopic.assunto,
    percentual: worstTopic.percentual,
    erros: worstTopic.erros,
    title: `Ponto de atenção em: ${worstTopic.assunto}`,
    message: `Seu rendimento neste tópico está em ${worstTopic.percentual}% (${worstTopic.erros} erro(s) em ${worstTopic.totalRespondidas} questão(ões)).`,
    sugestao: studyMaterial 
      ? `Sugestão de Estudo: Revise ${studyMaterial.conceitosFundamentais.slice(0, 2).join(' e ')}.`
      : "Recomendação: Revise os resumos teóricos deste assunto antes de tentar novamente."
  };
}

// Salvar histórico de Simulado
export function saveSimulatedExamResult(examData) {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SIMULATED_EXAMS);
    const list = raw ? JSON.parse(raw) : [];
    list.unshift({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...examData
    });
    localStorage.setItem(STORAGE_KEYS.SIMULATED_EXAMS, JSON.stringify(list));
  } catch (e) {
    console.error('Erro ao salvar simulado', e);
  }
}

// Obter histórico de Simulados
export function getSimulatedExamHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SIMULATED_EXAMS);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// Resetar todos os dados para testes do usuário
export function resetUserData() {
  Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
}
