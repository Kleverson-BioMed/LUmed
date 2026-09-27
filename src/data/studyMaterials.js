// Guias Teóricos e Conteúdo Programático Detalhado LUmed

export const STUDY_MATERIALS = [
  // =========================================================================
  // DISCIPLINA 1: BIOQUÍMICA MÉDICA (Módulos 1 a 7)
  // =========================================================================
  {
    id: 1,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 1,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    icone: "Zap",
    descricao: "Bioenergética, acoplamento de ATP, compartimentação celular e regulação por insulina/glucagon.",
    resumo: "O metabolismo celular se divide em catabolismo (degradação oxidativa exergônica para síntese de ATP) e anabolismo (biossíntese endergônica de moléculas complexas). O acoplamento termodinâmico com a hidrólise de ATP impulsiona reações biologicamente desfavoráveis.",
    capitulos: [
      {
        titulo: "1. Conceito e Escopo da Bioenergética",
        subtitulo: "Fluxo metabólico vs. Concentração estática",
        conteudo: "O metabolismo é a rede integrada de reações químicas que mantêm a homeostase. O fluxo metabólico representa a velocidade real com que metabólitos transitam por uma via, diferindo da concentração estática momentânea.",
        conceitoChave: "Fluxo metabólico (turnover isotópico) é dinâmico; a concentração de um metabólito em steady-state pode ser constante mesmo em alta velocidade metabólica.",
        importanteMedicina: "Avaliação do estado nutricional e identificação de bloqueios enzimáticos em erros inatos do metabolismo."
      },
      {
        titulo: "2. Acoplamento Energético de ATP",
        subtitulo: "Impulsão de reações endergônicas",
        conteudo: "Reações endergônicas (ΔG > 0) ocorrem na célula através do acoplamento com a hidrólise exergônica de ATP (ΔG°' ≈ -30.5 kJ/mol), resultando em um ΔG global negativo.",
        conceitoChave: "Enzimas aceleram a velocidade sem alterar o ΔG°' ou a constante de equilíbrio (Keq).",
        importanteMedicina: "Mecanismo da AMPK como sensor de carga energética acionado em estados de esgotamento de ATP (ex: exercício, hipóxia ou uso de Metformina)."
      }
    ],
    conceitosFundamentais: [
      "Fluxo metabólico expressa a rotatividade real da via, não apenas a concentração da substância.",
      "ATP atua como moeda energética universal para acoplamento de reações.",
      "AMPK é o sensor metabólico de depleção energética acionado por alta razão AMP/ATP.",
      "Insulina sinaliza anabolismo alimentado; Glucagon sinaliza catabolismo de jejum."
    ],
    relacaoMedicina: "Compreender a bioenergética é a base para o manejo da Cetoacidose Diabética, Síndrome Metabólica e farmacologia dos antidiabéticos orais como a Metformina.",
    errosComuns: [
      "Confundir massa estática de metabólito com velocidade de fluxo metabólico.",
      "Acreditar que enzimas alteram o ΔG ou o equilíbrio de uma reação."
    ],
    questoesRelacionadas: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 2,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    icone: "Droplet",
    descricao: "Propriedades da água, pontes de hidrogênio, equação de Henderson-Hasselbalch e tampão bicarbonato.",
    resumo: "A água é o solvente biológico universal. A equação de Henderson-Hasselbalch descreve o comportamento dos sistemas tampão biológicos, dos quais o tampão bicarbonato/CO2 é o principal regulador do pH plasmático.",
    capitulos: [
      {
        titulo: "1. Propriedades Físico-Químicas da Água",
        subtitulo: "Pontes de hidrogênio e osmose",
        conteudo: "A polaridade e as pontes de hidrogênio conferem à água elevado calor específico e capacidade de solubilização de íons.",
        conceitoChave: "A água move-se por osmose do meio hipotônico para o meio hipertônico.",
        importanteMedicina: "Prescrição de fluidoterapia intravenosa isosmótica para prevenção de lise celular ou desidratação."
      },
      {
        titulo: "2. Tampão Bicarbonato e Equação de Henderson-Hasselbalch",
        subtitulo: "Regulação do pH sanguíneo",
        conteudo: "pH = pKa + log([HCO3-]/[0.03 x PaCO2]). A capacidade tamponante é máxima quando o pH é próximo ao pKa do ácido.",
        conceitoChave: "O sistema bicarbonato é um sistema aberto acoplado à respiração e à excreção renal.",
        importanteMedicina: "Interpretação de gasometria arterial em distúrbios metabólicos e respiratórios."
      }
    ],
    conceitosFundamentais: [
      "Pontes de hidrogênio conferem alto calor específico e coesão à água.",
      "Henderson-Hasselbalch relaciona pH, pKa e a proporção entre base conjugada e ácido.",
      "O sistema tampão bicarbonato é regulado pelos pulmões (CO2) e rins (HCO3-)."
    ],
    relacaoMedicina: "Diagnóstico e manejo de acidose/alcalose metabólica e respiratória em UTI.",
    errosComuns: [
      "Esquecer que a PCO2 é convertida a ácido carbônico dissolvido pelo fator 0.03."
    ],
    questoesRelacionadas: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 3,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    icone: "Activity",
    descricao: "Anion Gap, potássio, sódio, acidose metabólica/respiratória e alcalose.",
    resumo: "O equilíbrio eletrolítico e ácido-base é mantido pela integração renal e pulmonar. O Anion Gap permite diferenciar acidoses metabólicas por acúmulo de ácidos orgânicos de acidoses hiperclorêmicas.",
    capitulos: [
      {
        titulo: "1. Anion Gap e Acidoses Metabólicas",
        subtitulo: "Cálculo e significado clínico",
        conteudo: "Anion Gap = [Na+] - ([Cl-] + [HCO3-]). Valor normal: 8 a 12 mEq/L.",
        conceitoChave: "Anion Gap elevado indica presença de ânions não mensurados (ex: lactato, acetoacetato, β-hidroxibutirato).",
        importanteMedicina: "Diagnóstico de Cetoacidose Diabética, Acidose Láctica e Intoxicação por Salicilatos."
      }
    ],
    conceitosFundamentais: [
      "Anion Gap elevado = presença de ácidos não mensurados.",
      "Potássio sérico sofre desvios transcelulares em resposta ao pH sanguíneo."
    ],
    relacaoMedicina: "Manejo imediato de emergências metabólicas e distúrbios do potássio.",
    errosComuns: ["Ignorar a correção do potássio após a correção do pH."],
    questoesRelacionadas: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 4,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    icone: "Layers",
    descricao: "Estrutura proteica, curva de saturação da hemoglobina, mioglobina e efeito Bohr.",
    resumo: "As proteínas exercem funções estruturais, catalíticas e de transporte. A hemoglobina exibe cooperatividade alostérica sigmoide na ligação com O2, modulada pelo pH, CO2 e 2,3-BPG (efeito Bohr).",
    capitulos: [
      {
        titulo: "1. Transporte de Oxigênio: Hemoglobina vs. Mioglobina",
        subtitulo: "Curva sigmoide vs. Hiperbólica",
        conteudo: "A mioglobina é monomérica e possui alta afinidade (hiperbólica). A hemoglobina é tetramérica e apresenta cooperatividade positiva (sigmoide).",
        conceitoChave: "Efeito Bohr: Queda no pH e aumento da PaCO2 desviam a curva da hemoglobina para a direita, liberando O2 nos tecidos.",
        importanteMedicina: "Entendimento da anoxia tecidual, hemoglobinopatias (Anemia Falciforme) e adaptação à altitude."
      }
    ],
    conceitosFundamentais: [
      "Cooperatividade alostérica da hemoglobina permite captação no pulmão e entrega no tecido.",
      "2,3-BPG estabiliza a forma desoxigenada (T) da hemoglobina."
    ],
    relacaoMedicina: "Diagnóstico de hemoglobinopatias e choque circulatório.",
    errosComuns: ["Confundir desvio para a direita (liberação) com desvio para a esquerda (retenção de O2)."],
    questoesRelacionadas: [16, 17, 18, 19, 20]
  },
  {
    id: 5,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 5,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    icone: "ShieldAlert",
    descricao: "Transaminação, desaminação oxidativa, ciclo da ureia, amônia, ureia e creatinina.",
    resumo: "O catabolismo de aminoácidos gera amônia tóxica (NH3), convertida em ureia no fígado via ciclo da ureia. A creatinina e uréia séricas são marcadores clássicos de filtração glomerular.",
    capitulos: [
      {
        titulo: "1. Ciclo da Ureia e Destoxificação de Amônia",
        subtitulo: "Transaminação e Carbamoil-Fosfato Sintetase I",
        conteudo: "As transaminases (ALT/AST) transferem grupos amino para o α-cetoglutarato formando glutamato. A amônia liberada entra no ciclo da ureia no hepatócito.",
        conceitoChave: "Deficiência em enzimas do ciclo da ureia causa hiperamonemia grave com edema cerebral.",
        importanteMedicina: "Manejo da Encefalopatia Hepática e Doença Renal Crônica."
      }
    ],
    conceitosFundamentais: [
      "Amônia é neurotóxica; ureia é a forma solúvel de eliminação renal.",
      "Creatinina é derivada da fosfocreatina muscular e reflete a taxa de filtração glomerular."
    ],
    relacaoMedicina: "Avaliação de hepatopatias, nefropatias e estresse oxidativo.",
    errosComuns: ["Confundir ureia (produto do fígado) como se fosse sintetizada no rim."],
    questoesRelacionadas: [21, 22, 23, 24, 25]
  },
  {
    id: 6,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 6,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    icone: "PieChart",
    descricao: "Triacilgliceróis, quilomícrons, VLDL, LDL, HDL, β-oxidação e cetogênese.",
    resumo: "Lipídios são transportados no sangue em lipoproteínas plasmáticas. O LDL transporta colesterol para tecidos periféricos, enquanto o HDL realiza o transporte reverso. A β-oxidação mitocondrial fornece energia no jejum.",
    capitulos: [
      {
        titulo: "1. Transporte de Lipídios e Lipoproteínas",
        subtitulo: "Aterogênese e transporte reverso",
        conteudo: "Quilomícrons transportam gordura da dieta. VLDL carrega triacilgliceróis endógenos. LDL deposita colesterol na parede arterial; HDL remove colesterol (transporte reverso).",
        conceitoChave: "ApoB-100 é a apolipoproteína do LDL associada à aterogênese.",
        importanteMedicina: "Prescrição de Estatinas (inibidores da HMG-CoA Redutase) na prevenção cardiovascular."
      }
    ],
    conceitosFundamentais: [
      "LDL transporta colesterol para a periferia; HDL realiza transporte reverso para o fígado.",
      "β-oxidação gera Acetil-CoA no jejum para alimentar o Ciclo de Krebs e a Cetogênese."
    ],
    relacaoMedicina: "Tratamento da Aterosclerose, Dislipidemias e Cetoacidose Diabética.",
    errosComuns: ["Esquecer que as estatinas inibem a HMG-CoA redutase no fígado."],
    questoesRelacionadas: [26, 27, 28, 29, 30]
  },
  {
    id: 7,
    discipline: "bioquimica",
    disciplineName: "Bioquímica Médica",
    moduloNumero: 7,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    icone: "Sliders",
    descricao: "Modelo de Michaelis-Menten (Km, Vmax), inibição competitiva, não competitiva e alostérica.",
    resumo: "Enzimas aumentam a velocidade das reações diminuindo a energia de ativação. A cinética de Michaelis-Menten caracteriza a afinidade (Km) e velocidade máxima (Vmax). Inibidores competitivos alteram o Km aparente sem alterar Vmax.",
    capitulos: [
      {
        titulo: "1. Cinética de Michaelis-Menten e Inibidores",
        subtitulo: "Km, Vmax e alosterismo",
        conteudo: "Km é a concentração de substrato na qual V = Vmax / 2. Quanto menor o Km, maior a afinidade da enzima pelo substrato.",
        conceitoChave: "Inibidor Competitivo: Aumenta Km aparente; Vmax permanece inalterada (pode ser superada por excesso de substrato).",
        importanteMedicina: "Mecanismo de fármacos inibidores enzimáticos (ex: Captopril, AAS, Estatinas)."
      }
    ],
    conceitosFundamentais: [
      "Km inversamente proporcional à afinidade da enzima pelo substrato.",
      "Inibição competitiva: Km aumenta, Vmax não muda.",
      "Inibição não-competitiva: Vmax diminui, Km não muda."
    ],
    relacaoMedicina: "Farmacologia de inibidores enzimáticos e enzimologia clínica diagnóstica (troponina, CK-MB, TGO/TGP).",
    errosComuns: ["Achar que inibidor competitivo diminui a Vmax."],
    questoesRelacionadas: [31, 32, 33, 34, 35]
  },

  // =========================================================================
  // DISCIPLINA 2: MICROBIOLOGIA, VIROLOGIA E SÍNDROMES GRIPAIS (Módulos 1 a 4)
  // =========================================================================
  {
    id: 8,
    discipline: "microbiologia",
    disciplineName: "Microbiologia, Virologia e Síndromes Gripais",
    moduloNumero: 1,
    assunto: "Módulo 1 — Introdução à Microbiologia",
    icone: "Microscope",
    descricao: "Conceito, escopo, biotecnologia, diferenciação estrutural (bactérias, fungos, protozoários, vírus), ubiquidade e microbiota humana.",
    resumo: "A Microbiologia é a ciência dedicada ao estudo dos organismos microscópicos. Abrange a Medicina (diagnóstico e antibiogramas), biotecnologia (insulina recombinante, fármacos), indústria (fermentações, ácido cítrico, vinagre) e ecologia (ciclos biogeoquímicos de N2 e C). Abrange a diferenciação celular entre procariontes (bactérias com peptidoglicano), eucariontes (fungos com quitina, protozoários) e agentes acelulares (vírus). A microbiota humana comensal/mutualista atua na proteção contra patógenos por exclusão competitiva e síntese de vitaminas K e B12.",
    imagemUrl: "/images/microbiology_overview.jpg",
    imagemLegenda: "Esquema Anatômico LUmed: Comparativo Estrutural entre Bactérias (Peptidoglicano), Fungos (Quitina), Protozoários e Vírus (Acelulares).",
    capitulos: [
      {
        titulo: "1. Conceito, Escopo e Aplicações Práticas",
        subtitulo: "Medicina, Biotecnologia, Indústria e Ecologia",
        conteudo: "A Microbiologia estuda organismos invisíveis a olho nu sem instrumentação optoeletrônica. Suas aplicações abrangem:\n• Medicina e Diagnóstico: Identificação de agentes patogênicos, antibiogramas (TSA) e vigilância epidemiológica.\n• Biotecnologia e Indústria: Síntese de proteínas recombinantes (ex: insulina humana em E. coli), alimentos fermentados (queijos, iogurtes), bebidas alcoólicas e insumos químicos (ácido cítrico, vinagre).\n• Ecologia: Ciclos biogeoquímicos fundamentais como fixação biológica de nitrogênio e decomposição da matéria orgânica.",
        conceitoChave: "Microrganismos não são apenas agentes etiológicos de doenças, mas ferramentas biotecnológicas essenciais e mantenedores da vida na Terra.",
        importanteMedicina: "O antibiograma orienta a antibioticoterapia racional, prevenindo a seleção de cepas bacterianas multirresistentes (MDR)."
      },
      {
        titulo: "2. Diferenciação dos Grupos de Microrganismos",
        subtitulo: "Bactérias, Fungos, Protozoários e Vírus",
        conteudo: "A organização celular é o critério primário de classificação:\n• Bactérias: Procariontes unicelulares sem núcleo delimitado por carioteca e sem organelas membranosas. Possuem parede celular rica em peptidoglicano.\n• Fungos: Eucariontes unicelulares (leveduras) ou multicelulares filamentosos (bolores). Parede celular composta por quitina.\n• Protozoários: Eucariontes unicelulares sem parede celular rígida, móveis por cílios, flagelos ou pseudópodes.\n• Vírus: Agentes acelulares constituídos por ácido nucleico (DNA ou RNA) e proteína, parasitas intracelulares obrigatórios.",
        conceitoChave: "Bactérias (procariontes com peptidoglicano) diferem criticamente dos fungos (eucariontes com quitina) e vírus (acelulares).",
        tabelaComparativa: {
          headers: ["Grupo", "Organização Celular", "Invólucro Nuclear", "Parede Celular", "Metabolismo Próprio"],
          rows: [
            ["Bactérias", "Procarionte (Unicelular)", "Ausente (Nucleoide)", "Peptidoglicano", "Sim"],
            ["Fungos", "Eucarionte (Uni/Multicelular)", "Presente (Carioteca)", "Quitina", "Sim"],
            ["Protozoários", "Eucarionte (Unicelular)", "Presente (Carioteca)", "Ausente", "Sim"],
            ["Vírus", "Acelular", "Ausente", "Ausente (Capsídeo proteico)", "Não (Parasita obrigatório)"]
          ]
        },
        importanteMedicina: "Alvos farmacológicos específicos: Antibióticos (ex: Penicilinas) atacam a síntese de peptidoglicano bacteriano, sem afetar células humanas eucariontes."
      },
      {
        titulo: "3. Ubiquidade e Microbiota Humana",
        subtitulo: "Exclusão competitiva e síntese de vitaminas",
        conteudo: "Os microrganismos são ubíquos, habitando solo, água, ar e superfícies corporais. A microbiota humana compreende microrganismos comensais e mutualistas na pele, cavidade oral, trato gastrointestinal e respiratório.\nFunções vitais:\n1. Proteção contra patógenos por exclusão competitiva por nutrientes e sítios receptores de adesão.\n2. Síntese de vitaminas essenciais (Vitamina K para fatores de coagulação e Vitamina B12).\n3. Modulação e maturação do sistema imune das mucosas (MALT).",
        conceitoChave: "A microbiota comensal atua como barreira biológica ativa por exclusão competitiva contra infecções oportunistas.",
        importanteMedicina: "Uso indiscriminado de antibióticos de amplo espectro destrói a microbiota intestinal comensal, permitindo a superinfecção por Clostridioides difficile (colite pseudomembranosa)."
      }
    ],
    conceitosFundamentais: [
      "Bactérias são procariontes unicelulares com parede celular de peptidoglicano.",
      "Fungos são eucariontes com parede celular de quitina; Protozoários são eucariontes sem parede rígida.",
      "Vírus são agentes acelulares sem metabolismo próprio, parasitas intracelulares obrigatórios.",
      "Microbiota humana protege por exclusão competitiva e sintetiza Vitaminas K e B12."
    ],
    relacaoMedicina: "Fundamenta o diagnóstico microbiológico, antibiogramas, prevenção de infecções hospitalares (CCIH) e preservação da microbiota em prescrições médicas.",
    errosComuns: [
      "Confundir bactérias (procariontes com peptidoglicano) com fungos (eucariontes com quitina).",
      "Considerar a microbiota humana como nociva, ignorando sua função imunoprotectora indispensável."
    ],
    questoesRelacionadas: [36, 37, 38, 39, 40]
  },
  {
    id: 9,
    discipline: "microbiologia",
    disciplineName: "Microbiologia, Virologia e Síndromes Gripais",
    moduloNumero: 2,
    assunto: "Módulo 2 — Introdução à Virologia",
    icone: "Shield",
    descricao: "Propriedades virais, vírion, genoma, capsídeo, simetrias, envelope lipídico, marcos históricos e vacinas de Poliomielite (Salk vs. Sabin).",
    resumo: "Vírus são elementos genéticos (DNA ou RNA) envoltos por um capsídeo proteico (com simetria icosaédrica, helicoidal ou complexa). O vírion é a partícula extracelular completa e infecciosa. Vírus envelopados possuem bicamada lipídica da célula hospedeira, tornando-se mais sensíveis a detergentes, sabão, álcool 70% e desidratação. Destacam-se os marcos históricos de Edward Jenner (varíola), Beijerinck, a microscopia eletrônica e as vacinas de poliomielite desenvolvidas por Salk (IPV - inativada injetável) e Sabin (OPV - atenuada oral) no Programa Nacional de Imunizações (PNI).",
    imagemUrl: "/images/viral_structure.jpg",
    imagemLegenda: "Arquitetura Viral LUmed: Comparação entre Vírus Envelopados (lábeis a álcool 70%) e Vírus Nus/Não Envelopados (resistentes em fômites).",
    capitulos: [
      {
        titulo: "1. Conceitos e Propriedades Gerais dos Vírus",
        subtitulo: "Definição de Vírus e Vírion",
        conteudo: "Vírus são elementos genéticos de fita simples ou dupla (DNA ou RNA) sem metabolismo próprio (ausência de ribossomos e ATP sintase). Dependem exclusivamente da célula hospedeira para tradução e energia.\n• Vírion: A partícula viral estruturalmente completa, madura e infectante situada no ambiente extracelular.",
        conceitoChave: "Vírus não realizam metabolismo autônomo; são parasitas intracelulares obrigatórios.",
        importanteMedicina: "Os antivirais precisam atuar em alvos virais específicos para evitar toxicidade às células humanas hospedeiras."
      },
      {
        titulo: "2. Arquitetura e Estrutura Viral",
        subtitulo: "Genoma, Capsídeo, Nucleocapsídeo e Envelope Lipídico",
        conteudo: "• Genoma Viral: Instruções genéticas em DNA ou RNA (linear/circular, fita simples ou dupla).\n• Capsídeo: Capa proteica composta por subunidades chamadas capsômeros, protegendo o ácido nucleico.\n• Nucleocapsídeo: Complexo formado pelo genoma associado ao capsídeo proteico.\n• Envelope Lipídico: Bicamada lipídica derivada da membrana celular durante o brotamento. Contém glicoproteínas virais inseridas para acoplamento aos receptores celulares.",
        conceitoChave: "O envelope lipídico torna o vírus MUITO MAIS SENSÍVEL a álcool 70%, detergentes, sabão, calor e desidratação ambiental.",
        tabelaComparativa: {
          headers: ["Característica", "Vírus Envelopados", "Vírus Não Envelopados (Nus)"],
          rows: [
            ["Invólucro Externo", "Bicamada lipídica com glicoproteínas", "Capsídeo proteico rígido"],
            ["Sensibilidade a Álcool/Sabão", "Alta (Desestruturação rápida)", "Resistentes (Capsídeo protege)"],
            ["Resistência ao pH Ácido Gástrico", "Lábicos (Inativados no estômago)", "Resistentes (Transmissão fecal-oral)"],
            ["Persistência em Fômites", "Curta duração em superfícies secas", "Longa duração em superfícies inanimadas"],
            ["Exemplos Clínicos", "Influenza, Coronavírus, VSR, HIV", "Rinovírus, Adenovírus, Norovírus, Poliovírus"]
          ]
        },
        importanteMedicina: "Higienização das mãos com álcool 70% e sabão destrói eficazmente vírus envelopados como SARS-CoV-2 e Influenza por dissolução do envelope."
      },
      {
        titulo: "3. Simetria dos Capsídeos Virais",
        subtitulo: "Icosaédrica, Helicoidal e Complexa",
        conteudo: "• Simetria Icosaédrica: Estrutura geométrica tridimensional de 20 faces triangulares e 12 vértices (ex: Adenovírus, Herpesvírus).\n• Simetria Helicoidal: Capsômeros ligados diretamente ao ácido nucleico em espiral ou tubo (ex: Influenza, VSR).\n• Simetria Complexa: Estruturas elaboradas não classificadas estritamente em icosaédrica ou helicoidal (ex: Poxvírus, Bacteriófagos).",
        conceitoChave: "A simetria proteica determina o empacotamento do genoma e a morfologia externa do vírion."
      },
      {
        titulo: "4. Marcos Históricos e Imunização",
        subtitulo: "Edward Jenner, Beijerinck, Salk, Sabin e PNI",
        conteudo: "• Edward Jenner (1796): Criou a vacinação contra a varíola usando o vírus vaccinia da varíola bovina.\n• Martinus Beijerinck (1898): Conceituou o 'contagium vivum fluidum' (termo vírus) ao demonstrar passagem em filtros bacterianos.\n• Microscopia Eletrônica e Cultivo Celular (Séc. XX): Permitiram a visualização direta e propagação viral in vitro.\n• Vacinas da Poliomielite:\n  - Jonas Salk (1955): Vacina de Poliovírus Inativado por formaldeído (IPV - injetável).\n  - Albert Sabin (1961): Vacina de Poliovírus Vivo Atenuado (OPV - oral / 'gotinha').\n• PNI (Programa Nacional de Imunizações): Estrutura brasileira para erradicação e controle de imunopreveníveis.",
        conceitoChave: "Vacina Salk = Injetável Inativada (IPV); Vacina Sabin = Oral Atenuada (OPV).",
        importanteMedicina: "O PNI utiliza o esquema sequencial IPV/OPV para erradicação segura da poliomielite sem risco de paralisação associada à vacina atenuada."
      }
    ],
    conceitosFundamentais: [
      "Vírion é a partícula viral completa e infectante no ambiente extracelular.",
      "Envelope lipídico deriva da membrana da célula hospedeira por brotamento e confere extrema sensibilidade a álcool 70% e sabão.",
      "Capsídeo exibe simetria icosaédrica, helicoidal ou complexa.",
      "Salk desenvolveu a vacina inativada (IPV); Sabin desenvolveu a vacina atenuada oral (OPV)."
    ],
    relacaoMedicina: "Fundamenta protocolos de higienização hospitalar, escolha de saneantes e acompanhamento do Calendário Nacional de Vacinação do PNI.",
    errosComuns: [
      "Acreditar erroneamente que vírus envelopados são mais resistentes que vírus nus (o envelope de lipídio os torna extremamente lábeis a desinfetantes e álcool).",
      "Inverter os cientistas da poliomielite: Salk = Inativada/Injetável (IPV); Sabin = Oral/Atenuada (OPV)."
    ],
    questoesRelacionadas: [41, 42, 43, 44, 45]
  },
  {
    id: 10,
    discipline: "microbiologia",
    disciplineName: "Microbiologia, Virologia e Síndromes Gripais",
    moduloNumero: 3,
    assunto: "Módulo 3 — Vírus Influenza (Gripe)",
    icone: "Thermometer",
    descricao: "Família Orthomyxoviridae, Hemaglutinina (HA), Neuraminidase (NA), Canal M2, Antigenic Drift vs. Shift, clínica, complicações e antiviral Oseltamivir.",
    resumo: "O vírus Influenza (família Orthomyxoviridae) possui genoma de RNA fita simples de polaridade negativa (-ssRNA) segmentado em 8 fragmentos (Influenza A e B). A Hemaglutinina (HA) medeia a acoplagem ao ácido siálico e fusão. A Neuraminidase (NA) cliva o ácido siálico liberando novas partículas virais. O canal M2 promove a acidificação endossômica para o desnudamento (uncoating). A Deriva Antigênica (Antigenic Drift) gera mutações pontuais sazonais (epidemias). O Salto Antigênico (Antigenic Shift) gera rearranjos genéticos drásticos entre cepas em hospedeiro intermediário (PANDEMIAS). O Oseltamivir (Tamiflu) é inibidor seletivo da Neuraminidase.",
    imagemUrl: "/images/influenza_structure.jpg",
    imagemLegenda: "Mapeamento Molecular LUmed: Vírus Influenza A com 8 Segmentos de RNA, Trímeros HA (Entrada), Tetrâmeros NA (Liberação) e Canal M2.",
    capitulos: [
      {
        titulo: "1. Classificação, Genoma e Estrutura",
        subtitulo: "Orthomyxoviridae e Genoma Segmentado",
        conteudo: "• Família: Orthomyxoviridae.\n• Genoma: RNA de fita simples e polaridade negativa (-ssRNA), segmentado em 8 fragmentos independentes no Influenza A e B.\n• A segmentação genômica é o fator determinante que permite o rearranjo genético (reassortment) entre diferentes cepas.",
        conceitoChave: "O genoma segmentado de RNA negativo permite recombinação por rearranjo entre cepas infectando a mesma célula.",
        importanteMedicina: "Monitoramento de cepas aviárias (ex: H5N1, H7N9) e suínas com potencial pandêmico."
      },
      {
        titulo: "2. Proteínas Estruturais Críticas",
        subtitulo: "Hemaglutinina (HA), Neuraminidase (NA) e Canal Iônico M2",
        conteudo: "• Hemaglutinina (HA): Trímero glicoproteico de superfície. Liga-se aos receptores de ácido siálico do epitélio respiratório e medeia a fusão no endossomo. Alvo principal de anticorpos neutralizantes.\n• Neuraminidase (NA): Tetrâmero com atividade enzimática. Cliva resíduos de ácido siálico prevenindo a autoagregação e permitindo a liberação das novas partículas virais brotadas.\n• Canal Iônico M2: Proteína transmembrana que bombeia prótons (H+) para o interior do vírion no endossomo, promovendo o desnudamento (uncoating) do RNA no citoplasma.",
        conceitoChave: "HA = Adsorção e Fusão (Entrada); NA = Clivagem de Ácido Siálico (Liberação); M2 = Acidificação e Desnudamento (Uncoating).",
        tabelaComparativa: {
          headers: ["Proteína Viral", "Estrutura", "Função no Ciclo Replicativo", "Significado Clínico/Farmacológico"],
          rows: [
            ["Hemaglutinina (HA)", "Trímero", "Ligação ao ácido siálico e fusão celular", "Alvo da imunidade vacinal (anticorpos neutralizantes)"],
            ["Neuraminidase (NA)", "Tetrâmero", "Clivagem do ácido siálico para soltar vírions", "Alvo dos antivirais Oseltamivir (Tamiflu) e Zanamivir"],
            ["Canal Iônico M2", "Tetramérico", "Acidificação do vírion no endossomo (Uncoating)", "Alvo da Amantadina/Rimantadina (resistência alta)"]
          ]
        },
        importanteMedicina: "O Oseltamivir inibe a Neuraminidase (NA), mantendo os vírus recém-formados presos à célula hospedeira e interrompendo a disseminação."
      },
      {
        titulo: "3. Tipos e Variabilidade Antigênica",
        subtitulo: "Deriva Antigênica (Drift) vs. Salto Antigênico (Shift)",
        conteudo: "• Tipos de Influenza: Influenza A (infecta humanos, aves e mamíferos; causador de pandemias); Influenza B (infecta humanos; epidemias sazonais); Influenza C e D (brandos ou animais).\n• Deriva Antigênica (Antigenic Drift):\n  - Mutações pontuais acidentais no genoma (devido ao erro da RNA polimerase sem atividade de revisão).\n  - Ocorre de forma contínua em Influenza A e B.\n  - Causa alterações discretas na HA e NA -> EPIDEMIAS SAZONAIS e necessidade de reformulação anualmente da vacina de gripe.\n• Salto Antigênico (Antigenic Shift):\n  - Troca drástica de segmentos genéticos (rearranjo) quando duas cepas distintas infectam a mesma célula hospedeira (ex: porco infectado por vírus humano e aviário).\n  - Surge um vírus inédito com combinação nova de HA/NA para a qual a população não possui imunidade -> PANDEMIAS MUNDIAIS (ex: H1N1 de 2009).",
        conceitoChave: "Antigenic Drift (mutações pontuais) = Epidemias Sazonais Anuais; Antigenic Shift (rearranjo de segmentos de RNA) = PANDEMIAS.",
        importanteMedicina: "A vacinação anual contra a gripe é necessária devido à Deriva Antigênica contínua do vírus."
      },
      {
        titulo: "4. Ciclo Replicativo, Quadro Clínico e Tratamento",
        subtitulo: "Do acoplamento à terapia com Oseltamivir",
        conteudo: "• Ciclo Replicativo: Adsorção via HA -> Endocitose -> Acidificação via M2 (Uncoating) -> Transcrição e Replicação no NÚCLEO celular -> Brotamento -> Liberação via NA.\n• Quadro Clínico: Início SÚBITO de febre alta (>38°C), mialgia intensa, cefaleia, prostração, tosse seca e dor de garganta.\n• Complicações: Pneumonia viral primária ou pneumonia bacteriana secundária (S. pneumoniae, S. aureus).\n• Diagnóstico: RT-PCR nasofaríngeo (padrão-ouro) e Testes Rápidos de Antígeno.\n• Tratamento: Inibidores da Neuraminidase (Oseltamivir/Tamiflu®, Zanamivir). Eficácia máxima se administrados nas primeiras 48 horas do início dos sintomas em grupos de risco (idosos, gestantes, imunossuprimidos, crônicos).",
        conceitoChave: "Diferente da maioria dos vírus de RNA, a replicação do Influenza ocorre no NÚCLEO da célula hospedeira.",
        importanteMedicina: "A prescrição precoce de Oseltamivir nas primeiras 48h reduz drasticamente a mortalidade por pneumonia e complicações graves por Influenza."
      }
    ],
    conceitosFundamentais: [
      "Influenza A e B possuem RNA -ssRNA segmentado em 8 fragmentos.",
      "HA medeia a entrada no endossomo; NA cliva ácido siálico para liberar vírions; M2 acidifica o endossomo.",
      "Antigenic Drift (mutações pontuais) = Epidemias Sazonais Anuais; Antigenic Shift (rearranjo de segmentos de RNA) = PANDEMIAS.",
      "Oseltamivir (Tamiflu) é inibidor seletivo da Neuraminidase (NA), mais eficaz nas primeiras 48h."
    ],
    relacaoMedicina: "Crucial para conduta clínica no Pronto-Socorro na Síndrome Gripal, indicação de Tamiflu e campanhas anuais de vacinação contra a gripe.",
    errosComuns: [
      "Confundir Antigenic Drift (mutações sazonais) com Antigenic Shift (rearranjo drástico de segmentos que causa pandemias).",
      "Achar que a replicação do Influenza ocorre no citosol (ela ocorre no núcleo celular)."
    ],
    questoesRelacionadas: [46, 47, 48, 49, 50]
  },
  {
    id: 11,
    discipline: "microbiologia",
    disciplineName: "Microbiologia, Virologia e Síndromes Gripais",
    moduloNumero: 4,
    assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios",
    icone: "Activity",
    descricao: "Critérios de SG, Rinovírus, Adenovírus, Vírus Sincicial Respiratório (VSR/Proteína F/Abrysvo/Palivizumabe/Nirsevimabe) e SARS-CoV-2 (Spike/ACE2/TMPRSS2/Vacinas).",
    resumo: "A Síndrome Gripal (SG) é um quadro respiratório agudo com pelo menos dois sinais/sintomas: febre, calafrios, dor de garganta, cefaleia, tosse, coriza ou alterações do olfato/paladar. Vírus envelopados (Influenza, VSR, Coronavírus) transmitem-se prioritariamente por gotículas e contato próximo, sendo sensíveis a sabão e álcool 70%. Vírus não envelopados (Rinovírus, Adenovírus) persistem em fômites. O Rinovírus causa resfriado replicando a 33-35°C na cavidade nasal. O Adenovírus causa febre faringoconjuntival e ceratoconjuntivite. O VSR causa Bronquiolite em lactentes via Proteína F que induz a fusão de células formando SINCÍCIOS. O SARS-CoV-2 liga a proteína Spike (S) ao receptor ACE2 com clivagem por TMPRSS2, desencadeando a tempestade de citocinas em casos graves.",
    capitulos: [
      {
        titulo: "1. Definição da Síndrome Gripal (SG) e Propriedades Físico-Químicas",
        subtitulo: "Critérios diagnósticos e vírus envelopados vs. não envelopados",
        conteudo: "• Critério Clínico de Síndrome Gripal (SG): Quadro respiratório agudo caracterizado por pelo menos DOIS dos seguintes sinais/sintomas: febre (mesmo que referida), calafrios, dor de garganta, cefaleia, tosse, coriza, distúrbios do olfato (anosmia) ou do paladar (ageusia).\n• Vírus Envelopados (Influenza, VSR, Coronavírus): Transmitidos prioritariamente por gotículas e contato próximo; altamente sensíveis a álcool 70%, sabão e dessecação.\n• Vírus Não Envelopados (Rinovírus, Adenovírus): Resistentes ao pH gástrico e dessecação; persistem por longos períodos em superfícies inanimadas (fômites).",
        conceitoChave: "Vírus não envelopados (Rinovírus, Adenovírus) resistem no ambiente e fômites; vírus envelopados necessitam de gotículas e contato próximo.",
        importanteMedicina: "Orientação de precaução de contato e gotículas no ambiente hospitalar."
      },
      {
        titulo: "2. Rinovírus Humanos",
        subtitulo: "Receptor ICAM-1 e Tropismo Térmico",
        conteudo: "• Família: Picornaviridae (Gênero Enterovirus). Vírus pequeno não envelopado, +ssRNA.\n• Patogênese: Causa 30% a 50% dos casos de Resfriado Comum. Liga-se ao receptor ICAM-1 no epitélio nasal.\n• Tropismo Térmico: Sua replicação é OTIMIZADA na faixa de 33°C a 35°C (temperatura da cavidade nasal superior). Replica de forma ineficiente a 37°C no pulmão.\n• Fisiopatologia: Sintomas (coriza fluida, espirros, obstrução nasal) decorrem da resposta inflamatória por citocinas (IL-1, IL-6, IL-8) e bradicinina, e NÃO da destruição maciça do epitélio.",
        conceitoChave: "A replicação do Rinovírus é restrita à cavidade nasal devido à preferência térmica de 33°C-35°C.",
        importanteMedicina: "Diferenciação entre Resfriado Comum por Rinovírus (benigno, afebril ou febre baixa, restrito às vias aéreas superiores) e Gripe por Influenza (prostração grave, febre alta, mialgia)."
      },
      {
        titulo: "3. Adenovírus Humanos",
        subtitulo: "Fibras capsulares, Ceratoconjuntivite e Gastroenterite",
        conteudo: "• Família: Adenoviridae. Vírus não envelopado de dsDNA com projeções proteicas em forma de 'fibras' nos vértices do capsídeo icosaédrico.\n• Resistência: Extremamente estável no ambiente e resistente ao pH gástrico.\n• Manifestações Clínicas:\n  1. Faringite Febril Aguda: Febre, dor de garganta e exsudato amigdaliano (mimetizando faringite bacteriana por S. pyogenes).\n  2. Febre Faringoconjuntival: Tríade de Febre + Faringite + Conjuntivite folicular não purulenta.\n  3. Ceratoconjuntivite Epidêmica: Conjuntivite grave com acometimento corneano.\n  4. Gastroenterite Viral: Sorotipos entéricos 40 e 41 causam diarreia aquosa em lactentes.",
        conceitoChave: "Adenovírus é vírus de DNA fita dupla (dsDNA) não envelopado com fibras; causa exsudato amigdaliano que mimetiza infecção bacteriana.",
        importanteMedicina: "Evita o uso desnecessário de antibióticos na faringite por Adenovírus através de teste rápido ou observação clínica da conjuntivite associada."
      },
      {
        titulo: "4. Vírus Sincicial Respiratório (VSR)",
        subtitulo: "Proteína G, Proteína F, Formação de Sincícios, Bronquiolite e Avanços em Imunização",
        conteudo: "• Família: Pneumoviridae. Vírus -ssRNA envelopado de simetria helicoidal.\n• Proteínas de Superfície:\n  - Proteína G: Ancoragem aos cílios do epitélio brônquico.\n  - Proteína F (Fusão): Promove a fusão da membrana da célula infectada com células vizinhas não infectadas, formando massas multinucleadas gigantes chamadas SINCÍCIOS.\n• Patogênese: Causa necrose do epitélio bronquiolar, acúmulo de muco, debris celulares e edema da submucosa, provocando aprisionamento de ar, hiperinsuflação e atelectasias.\n• Impacto Clínico: Agente primário da Bronquiolite Viral Aguda (BVA) e pneumonia em lactentes abaixo de 2 anos (sibilos, taquipneia, tiragem intercostal).\n• Estratégias de Imunização e Prevenção:\n  - Imunização Materna (Vacina Abrysvo®): Proteína F recombinante administrada na gestação para transferência transplacentária de anticorpos protetores IgG para o feto.\n  - Palivizumabe: Anticorpo monoclonal humanoizado anti-proteína F indicado para prematuros e cardiopatas congênitos.\n  - Nirsevimabe: Anticorpo monoclonal de meia-vida prolongada em dose única para recém-nascidos e lactentes durante a primeira estação do VSR.",
        conceitoChave: "A Proteína F do VSR promove fusão celular formando SINCÍCIOS; é o agente clássico da Bronquiolite em lactentes.",
        tabelaComparativa: {
          headers: ["Estratégia de Prevenção do VSR", "Mecanismo Biológico", "Público-Alvo", "Via de Administração"],
          rows: [
            ["Vacina Abrysvo®", "Imunização ativa materna (Proteína F recombinante)", "Gestantes no 3º trimestre", "Injetável materna (IgG transplacentário)"],
            ["Palivizumabe", "Imunoprofilaxia passiva (Anticorpo monoclonal anti-F)", "Prematuros e crianças com cardiopatia/doença pulmonar", "Injetável mensal na estação do VSR"],
            ["Nirsevimabe", "Anticorpo monoclonal de ação estendida (Long-acting)", "Todos os recém-nascidos e lactentes na 1ª estação", "Dose única intramuscular"]
          ]
        },
        importanteMedicina: "O reconhecimento dos sinais de esforço respiratório (tiragem subcostal, batimento de asa de nariz) na Bronquiolite por VSR é vital para indicação de oxigenoterapia e internação hospitalar."
      },
      {
        titulo: "5. SARS-CoV-2 (COVID-19)",
        subtitulo: "Proteína Spike (S), Receptor ACE2, Protease TMPRSS2, Fases da Doença e Vacinas",
        conteudo: "• Família: Coronaviridae. Vírus +ssRNA envelopado com o maior genoma de RNA conhecido (~30 kilobases).\n• Proteínas Estruturais:\n  - Proteína Spike (S): Espícula de acoplamento ao receptor.\n  - Proteínas de Envelope (E) e Membrana (M): Montagem da partícula viral.\n  - Nucleocapsídeo (N): Empacotamento do RNA viral.\n• Mecanismo de Entrada: A proteína Spike (S) acopla-se ao receptor da Enzima Conversora de Angiotensina 2 (ACE2) expresso no epitélio respiratório, endotélio vascular, rins e intestino. A clivagem e ativação da fusão são realizadas pela protease celular TMPRSS2 (Protease Transmembrana de Serina 2).\n• Fases da Doença:\n  1. Fase Viral: Multiplicação intensa no trato respiratório superior (sintomas gripais, febre, anosmia, ageusia).\n  2. Fase Inflamatória Pulmonar/Sistêmica: Desregulação imunológica com tempestade de citocinas (IL-6, TNF-α, IL-1β).\n  3. Complicações Severas: Dano alveolar difuso, Síndrome do Desconforto Respiratório Agudo (SDRA), disfunção endotelial, estado hipercoagulável e microtromboses.\n• Plataformas Vacinais:\n  - mRNA (Pfizer/BioNTech, Moderna): Nanopartículas lipídicas contendo o mRNA da proteína Spike.\n  - Vetor Viral Não Replicante (AstraZeneca, Janssen): Adenovírus modificado carregando o gene da proteína S.\n  - Vírus Inativado (CoronaVac): Vírus SARS-CoV-2 inteiro quimicamente inativado.\n  - Subunidade Proteica Recombinante (Novavax): Injeção direta da proteína Spike purificada.",
        conceitoChave: "SARS-CoV-2 usa a Proteína Spike (S) para ligar ao receptor ACE2 com ativação proteolítica por TMPRSS2; a gravidade decorre da tempestade de citocinas e vasculite com hipercoagulabilidade.",
        importanteMedicina: "Identificação da fase inflamatória para introdução oportuna de corticoterapia (Dexametasona) e anticoagulação profilática em pacientes hospitalizados."
      }
    ],
    conceitosFundamentais: [
      "Síndrome Gripal exige pelo menos 2 sintomas agudos: febre, tosse, dor de garganta, cefaleia, coriza, anosmia/ageusia.",
      "Vírus não envelopados (Rinovírus, Adenovírus) resistem em fômites; vírus envelopados transmitem-se por gotículas.",
      "Rinovírus replica a 33-35°C na cavidade nasal (restrito ao trato superior).",
      "VSR gera SINCÍCIOS via Proteína F e causa Bronquiolite em lactentes; prevenido por Abrysvo® materna, Palivizumabe e Nirsevimabe.",
      "SARS-CoV-2 liga a Proteína Spike (S) ao receptor ACE2 com clivagem por TMPRSS2; complicações por tempestade de citocinas e SDRA."
    ],
    relacaoMedicina: "Essencial para diagnóstico diferencial de infecções respiratórias virais, conduta na Bronquiolite pediátrica, imunização com monoclonais e manejo da COVID-19.",
    errosComuns: [
      "Confundir a Proteína F do VSR (fusão/sincícios) com a Proteína G (ancoragem aos cílios).",
      "Esquecer que o Rinovírus replica de forma ineficiente na temperatura do trato inferior (37°C)."
    ],
    questoesRelacionadas: [51, 52, 53, 54, 55]
  }
];
