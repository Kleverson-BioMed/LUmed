// Guias Teóricos e Conteúdo Programático Detalhado LUmed
export const STUDY_MATERIALS = [
  // Bioquímica Médica (Módulos 1-7)
  {
    id: 1,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    icone: "Zap",
    descricao: "Conceitos fundamentais de bioenergética, fluxo metabólico, carga energética e regulação hormonal.",
    resumo: "O metabolismo é a rede integrada de reações químicas que mantêm a homeostase e a vida celular. Ele se divide em catabolismo (degradação oxidativa de exergônica de nutrientes para produção de ATP) e anabolismo (biossíntese endergônica de moléculas complexas). A regulação do fluxo é coordenada por sinais hormonais e carga energética.",
    conceitosFundamentais: [
      "Fluxo metabólico (metabolic flux) difere da concentração momentânea de um metabólito.",
      "Acoplamento energético: Reações endergônicas (ΔG > 0) ocorrem quando acopladas à hidrólise de ATP (ΔG < 0).",
      "Compartimentação celular isola vias antagônicas (ex: síntese de ácidos graxos no citosol vs. β-oxidação na mitocôndria).",
      "AMPK atua como sensor de baixa carga energética celular, ativando o catabolismo.",
      "Insulina sinaliza estado alimentado anabólico; Glucagon sinaliza estado de jejum catabólico."
    ],
    relacaoMedicina: "Compreender a bioenergética e a regulação hormonal é a base para diagnosticar cetoacidose diabética, erros inatos do metabolismo, síndrome metabólica e o mecanismo de ação de antidiabéticos como a Metformina (que ativa a AMPK).",
    errosComuns: [
      "Achar que enzimas alteram o ΔG ou a constante de equilíbrio (Keq) de uma reação.",
      "Confundir massa de metabólito estática com taxa de renovação isotópica (fluxo)."
    ],
    questoesRelacionadas: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    icone: "Droplet",
    descricao: "Propriedades da água, pontes de hidrogênio, equação de Henderson-Hasselbalch, tampão bicarbonato e osmose.",
    resumo: "A água é o solvente biológico universal. Sua natureza polar e capacidade de formar pontes de hidrogênio conferem elevado calor específico. Os tampões biológicos resistem a variações de pH fisiológico.",
    conceitosFundamentais: [
      "Equação de Henderson-Hasselbalch: pH = pKa + log([Base Conjugada] / [Ácido Fraco]).",
      "Máxima capacidade tamponante ocorre quando pH = pKa.",
      "O tampão bicarbonato (HCO3-/CO2) é um sistema aberto regulado por pulmões e rins."
    ],
    relacaoMedicina: "Base para a prescrição de fluidoterapia intravenosa e prevenção de distúrbios osmóticos.",
    errosComuns: ["Achar que a osmose move água para o meio hipotônico."],
    questoesRelacionadas: [6, 7, 8, 9, 10]
  },

  // ----------------------------------------------------------------------
  // NOVO CONTEÚDO PROGRAMÁTICO: MICROBIOLOGIA, VIROLOGIA E SÍNDROMES GRIPAIS
  // ----------------------------------------------------------------------

  {
    id: 8,
    assunto: "Módulo 1: Introdução à Microbiologia",
    icone: "Microscope",
    descricao: "Conceito, escopo, diferenciação celular dos microrganismos (bactérias, fungos, protozoários, vírus) e microbiota humana.",
    resumo: "A Microbiologia é a ciência dedicada ao estudo dos organismos microscópicos. Abrange o diagnóstico médico e antibiogramas, aplicações biotecnológicas (síntese de insulina recombinante, fermentação) e ciclos biogeoquímicos. Compreende a diferenciação entre procariontes (bactérias com peptidoglicano), eucariontes (fungos com quitina, protozoários) e agentes acelulares (vírus). A microbiota humana atua na exclusão competitiva de patógenos e síntese de vitaminas K e B12.",
    conceitosFundamentais: [
      "Bactérias: Procariontes unicelulares sem núcleo individualizado e com parede celular de peptidoglicano.",
      "Fungos: Eucariontes (unicelulares como leveduras ou filamentosos como bolores) com parede celular rica em quitina.",
      "Protozoários: Eucariontes unicelulares sem parede celular rígida, móveis por cílios, flagelos ou pseudópodes.",
      "Vírus: Parasitas intracelulares obrigatórios acelulares (DNA ou RNA).",
      "Ubiquidade e Microbiota Humana: A microbiota comensal/mutualista protege mucosas por exclusão competitiva e modula o sistema imune."
    ],
    relacaoMedicina: "Fundamental no diagnóstico infeccioso, testes de suscetibilidade a antimicrobianos (antibiogramas), prevenção de infecções hospitalares (CCIH) e preservação da microbiota comensal na prescrição de antibióticos de amplo espectro.",
    errosComuns: [
      "Confundir bactérias (procariontes com peptidoglicano) com fungos (eucariontes com quitina).",
      "Assumir que a microbiota humana é maléfica (ela é vital para a nutrição e imunoproteção por exclusão competitiva)."
    ],
    questoesRelacionadas: [36, 37, 38, 39, 40]
  },
  {
    id: 9,
    assunto: "Módulo 2: Introdução à Virologia",
    icone: "Shield",
    descricao: "Propriedades virais, genoma, capsídeo, simetrias, envelope lipídico, marcos históricos e vacinas de Poliomielite (Salk vs. Sabin).",
    resumo: "Vírus são elementos genéticos (DNA ou RNA) envoltos por capsídeo proteico (com simetria icosaédrica, helicoidal ou complexa). O vírion é a partícula madura infectante. Vírus envelopados adquirem bicamada lipídica da célula hospedeira, tornando-se mais sensíveis a detergentes, sabão, álcool 70% e calor. Destacam-se os marcos históricos de Edward Jenner (varíola), Beijerinck e o desenvolvimento das vacinas de poliomielite por Salk (IPV - inativada injetável) e Sabin (OPV - atenuada oral).",
    conceitosFundamentais: [
      "Vírion: Partícula viral estruturalmente completa e infectante no ambiente extracelular.",
      "Envelope Lipídico: Bicamada lipídica contendo glicoproteínas virais; torna o vírus sensível a álcool 70%, detergentes e dessecação.",
      "Simetria dos Capsídeos: Icosaédrica (20 faces), Helicoidal (em espiral) ou Complexa (poxvírus/bacteriófagos).",
      "Vacina Salk (IPV): Vírus inativado por formaldeído injetável.",
      "Vacina Sabin (OPV): Vírus vivo atenuado oral ('gotinha')."
    ],
    relacaoMedicina: "Crucial para entender a higienização de mãos com álcool 70% e detergentes contra vírus envelopados, além de dominar o calendário vacinal do PNI e imunobiológicos.",
    errosComuns: [
      "Achar que vírus envelopados são mais resistentes que não envelopados (o envelope lipídico os torna MUITO mais sensíveis a álcool e sabão).",
      "Inverter o tipo de vacina: Salk = Injetável Inativada (IPV); Sabin = Oral Atenuada (OPV)."
    ],
    questoesRelacionadas: [41, 42, 43, 44, 45]
  },
  {
    id: 10,
    assunto: "Módulo 3: Vírus Influenza (Gripe)",
    settitulo: "Orthomyxoviridae, Hemaglutinina, Neuraminidase, Canal M2, Antigenic Drift vs. Shift e Oseltamivir",
    icone: "Thermometer",
    descricao: "Estrutura do vírus Influenza A e B, proteínas HA, NA e M2, Deriva e Salto Antigênico, clínica, complicações e antiviral Oseltamivir.",
    resumo: "O vírus Influenza (família Orthomyxoviridae) possui genoma de RNA fita negativa (-ssRNA) segmentado em 8 fragmentos. A Hemaglutinina (HA) liga-se ao ácido siálico e medeia a fusão. A Neuraminidase (NA) cliva o ácido siálico para liberar vírions brotados. A Deriva Antigênica (Antigenic Drift) por mutações pontuais causa epidemias sazonais anuais. O Salto Antigênico (Antigenic Shift) por rearranjo genético entre cepas em um hospedeiro intermediário causa PANDEMIAS. O Oseltamivir (Tamiflu) age inibindo a Neuraminidase.",
    conceitosFundamentais: [
      "Hemaglutinina (HA): Trímero de acoplamento ao ácido siálico e fusão celular.",
      "Neuraminidase (NA): Enzima de desancoragem que cliva o ácido siálico permitindo a liberação viral.",
      "Canal Iônico M2: Promove acidificação endossômica para o desnudamento (uncoating).",
      "Deriva Antigênica (Antigenic Drift): Mutações pontuais da RNA polimerase -> Epidemias Sazonais Anuais.",
      "Salto Antigênico (Antigenic Shift): Rearranjo/recombinação de segmentos genéticos de RNA de diferentes cepas -> PANDEMIAS (ex: H1N1 em 2009).",
      "Oseltamivir (Tamiflu): Inibidor seletivo da Neuraminidase (NA)."
    ],
    relacaoMedicina: "Diagnóstico diferencial de Síndrome Gripal em prontos-socorros, indicação precoce do Oseltamivir nas primeiras 48h em pacientes de risco e rastreamento de complicações como pneumonia bacteriana secundária por S. pneumoniae.",
    errosComuns: [
      "Confundir Antigenic Drift (mutações pontuais sazonais) com Antigenic Shift (rearranjo drástico de segmentos causa de pandemias).",
      "Achar que o Oseltamivir mata bactérias (ele é um antiviral inibidor da Neuraminidase viral)."
    ],
    questoesRelacionadas: [46, 47, 48, 49, 50]
  },
  {
    id: 11,
    assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios",
    icone: "Activity",
    descricao: "Critérios de Síndrome Gripal (SG), Rinovírus (ICAM-1/33-35°C), Adenovírus, Vírus Sincicial Respiratório (VSR/Proteína F/Abrysvo/Palivizumabe/Nirsevimabe) e SARS-CoV-2 (Spike/ACE2/TMPRSS2/Vacinas).",
    resumo: "A Síndrome Gripal (SG) é caracterizada por início agudo de febre, tosse, dor de garganta, cefaleia e mialgia. O Rinovírus causa o resfriado comum replicando idealmente a 33-35°C na cavidade nasal. O Adenovírus causa faringocutânea, ceratoconjuntivite e gastroenterite. O VSR causa Bronquiolite Viral Aguda (BVA) em lactentes via Proteína F que forma SINCÍCIOS multinucleados. O SARS-CoV-2 liga a proteína Spike (S) ao receptor ACE2 com clivagem por TMPRSS2, desencadeando a tempestade de citocinas em casos graves.",
    conceitosFundamentais: [
      "Vírus Envelopados (Influenza, VSR, Coronavírus): Transmissão por gotículas; sensíveis a sabão e álcool 70%.",
      "Vírus Não Envelopados (Rinovírus, Adenovírus): Resistentes ao estômago e dessecação; persistem em fômites.",
      "Rinovírus: Liga-se ao ICAM-1 e replica a 33-35°C no nariz (restrito ao trato superior).",
      "Adenovírus: Vírus de dsDNA não envelopado com fibras; causa febre faringoconjuntival e ceratoconjuntivite.",
      "VSR: Agente principal da Bronquiolite em lactentes; Proteína F forma Sincícios.",
      "Imunização do VSR: Vacina materna Abrysvo® (IgG transplacentário) e Monoclonais (Palivizumabe e Nirsevimabe).",
      "SARS-CoV-2: Proteína Spike (S) -> Receptor ACE2 + Protease celular TMPRSS2 -> Tempestade de citocinas (IL-6) e tempestade inflamatória."
    ],
    relacaoMedicina: "Manejo pediátrico de Bronquiolite Viral Aguda por VSR, rastreamento de síndrome respiratória aguda grave (SRAG), profilaxia com anticorpos monoclonais e manejo imunológico da COVID-19.",
    errosComuns: [
      "Achar que o Rinovírus replica bem no pulmão a 37°C (ele é restrito a 33-35°C na cavidade nasal).",
      "Esquecer que a Proteína F do VSR promove a fusão celular gerando os característicos Sincícios."
    ],
    questoesRelacionadas: [51, 52, 53, 54, 55]
  }
];
