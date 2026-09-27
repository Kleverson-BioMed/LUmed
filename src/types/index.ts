// Definições de Tipos TypeScript para MedBio
export type QuestionTopic =
  | "Introdução às biomoléculas e ao metabolismo"
  | "Água nos sistemas biológicos, pH e tampões"
  | "Eletrólitos e equilíbrio ácido-base"
  | "Aminoácidos, peptídeos e proteínas de interesse clínico"
  | "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal"
  | "Lipídios, metabolismo lipídico e dislipidemias"
  | "Enzimas, cinética enzimática, regulação e inibidores";

export interface Option {
  id: "A" | "B" | "C" | "D";
  texto: string;
}

export interface Question {
  id: number;
  numero: number;
  assunto: QuestionTopic;
  subassunto: string;
  dificuldade: "Fácil" | "Médio" | "Difícil";
  enunciado: string;
  alternativas: Option[];
  respostaCorreta: "A" | "B" | "C" | "D";
  explicacao: string;
  explicacaoAlternativas: Record<string, string>;
  conceitoPrincipal: string;
}

export interface UserAnswer {
  id: string;
  questionId: number;
  assunto: QuestionTopic;
  subassunto: string;
  dificuldade: string;
  chosenOption: "A" | "B" | "C" | "D";
  correctOption: "A" | "B" | "C" | "D";
  isCorrect: boolean;
  attemptNumber: number;
  timestamp: string;
}

export interface PerformanceStats {
  totalRespostasRegistradas: number;
  questoesUnicasRespondidas: number;
  totalAcertos: number;
  totalErros: number;
  percentualGeral: number;
  desempenhoPorAssunto: {
    assunto: QuestionTopic;
    totalRespondidas: number;
    acertos: number;
    erros: number;
    percentual: number;
  }[];
}

export interface ReviewItem {
  questionId: number;
  lastPracticed: string;
  nextRevision: string;
  daysInterval: number;
  totalHits: number;
  totalErrors: number;
  isWeakPoint: boolean;
}

export interface StudyMaterial {
  id: number;
  assunto: QuestionTopic;
  icone: string;
  descricao: string;
  resumo: string;
  conceitosFundamentais: string[];
  relacaoMedicina: string;
  errosComuns: string[];
  questoesRelacionadas: number[];
}
