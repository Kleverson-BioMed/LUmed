// LUmed — Plataforma Inteligente de Estudos Médicos (Autocontido Sem Dependência de Server HTTP / CORS)
// Funciona 100% nativamente abrindo o index.html direto no navegador ou hospedado na Vercel

(function() {
  // 1. TÓPICOS PROGRAMÁTICOS (Bioquímica Médica + Microbiologia, Virologia e Síndromes Gripais)
  const TOPICS = [
    // Bioquímica Médica
    "Introdução às biomoléculas e ao metabolismo",
    "Água nos sistemas biológicos, pH e tampões",
    "Eletrólitos e equilíbrio ácido-base",
    "Aminoácidos, peptídeos e proteínas de interesse clínico",
    "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    "Lipídios, metabolismo lipídico e dislipidemias",
    "Enzimas, cinética enzimática, regulação e inibidores",
    // Microbiologia, Virologia e Síndromes Gripais
    "Módulo 1 — Introdução à Microbiologia",
    "Módulo 2 — Introdução à Virologia",
    "Módulo 3 — Vírus Influenza (Gripe)",
    "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios"
  ];

  // 2. GUIAS TEÓRICOS DE ESTUDO LUmed (DETALHADOS E ORGANIZADOS EM MÓDULOS, CAPÍTULOS E CARDS)
  const STUDY_MATERIALS = [
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
      errosComuns: ["Esquecer que a PCO2 é convertida a ácido carbônico dissolvido pelo fator 0.03."],
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

  // 3. BANCO DE QUESTÕES CLÍNICAS (55 Questões com Gabarito Comentado Item por Item)
  const QUESTIONS = [
    // Assunto 1: Bioquímica - Bioenergética (Q1 - Q5)
    {
      id: 1, numero: 1, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Bioenergética e Fluxo Metabólico", dificuldade: "Médio",
      enunciado: "Em um experimento de rastreamento metabólico com marcadores isotópicos em hepatócitos isolados, observou-se que a concentração do metabólito X permaneceu praticamente constante, enquanto a taxa de incorporação do isótopo radioativo no produto final Y aumentou três vezes. Qual é a interpretação bioquímica correta dessa observação?",
      alternativas: [
        { id: "A", texto: "A via metabólica foi inibida, acumulando o metabólito X na célula." },
        { id: "B", texto: "O fluxo metabólico através da via aumentou, com síntese e consumo do metabólito X ocorrendo em taxas elevadas equivalentes." },
        { id: "C", texto: "A concentração constante de X prova que a velocidade da reação catalisada pela enzima chave permaneceu inalterada." },
        { id: "D", texto: "O metabólito X é um efetor alostérico negativo que bloqueou a conversão no produto Y." }
      ],
      respostaCorreta: "B",
      explicacao: "A concentração de um metabólito representa seu pool estático momentâneo, enquanto o fluxo metabólico expressa a velocidade real de conversão ao longo da via. Em steady-state, produção e consumo ocorrem em velocidade igual e elevada.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Concentração constante com aumento de turnover isotópico reflete fluxo metabólico elevado.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Diferença entre concentração estática de metabólito e fluxo metabólico dinâmico."
    },
    {
      id: 2, numero: 2, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Acoplamento Energético de ATP", dificuldade: "Fácil",
      enunciado: "As células realizam reações endergônicas (ΔG > 0) que seriam termodinamicamente desfavoráveis isoladamente. Como o metabolismo celular torna essas reações viáveis?",
      alternativas: [
        { id: "A", texto: "Alterando a constante de equilíbrio através de enzimas." },
        { id: "B", texto: "Acoplando a reação endergônica à hidrólise de compostos de alta energia como o ATP, resultando em ΔG global negativo." },
        { id: "C", texto: "Elevando a temperatura intracelular." },
        { id: "D", texto: "Aumentando a energia de ativação." }
      ],
      respostaCorreta: "B",
      explicacao: "Reações endergônicas são impulsionadas pelo acoplamento com a hidrólise altamente exergônica do ATP (ΔG°' ≈ -30,5 kJ/mol).",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Acoplamento à hidrólise de ATP torna o ΔG global negativo e espontâneo.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Princípio do acoplamento energético via hidrólise de ATP."
    },

    // Módulo 1: Introdução à Microbiologia (Q36 - Q40)
    {
      id: 36, numero: 36, assunto: "Módulo 1 — Introdução à Microbiologia", subassunto: "Diferenciação Celular dos Microrganismos", dificuldade: "Fácil",
      enunciado: "Na classificação dos grupos de microrganismos de interesse médico, as bactérias se diferenciam dos fungos e protozoários por apresentarem qual característica celular estrutural marcante?",
      alternativas: [
        { id: "A", texto: "Presença de carioteca delimitando um núcleo individualizado." },
        { id: "B", texto: "Estrutura celular procarionte sem organelas membranosas e com parede celular rígida de peptidoglicano." },
        { id: "C", texto: "Parede celular constituída exclusivamente por polímeros de quitina." },
        { id: "D", texto: "Ausência completa de material genético próprio." }
      ],
      respostaCorreta: "B",
      explicacao: "As bactérias são organismos procariontes unicelulares sem núcleo individualizado nem organelas membranosas, apresentando parede celular rica em peptidoglicano.",
      explicacaoAlternativas: { A: "Incorreta. Núcleo individualizado é de eucariontes.", B: "Correta. Bactérias são procariontes com parede de peptidoglicano.", C: "Incorreta. Quitina é de fungos.", D: "Incorreta. Possuem DNA próprio." },
      conceitoPrincipal: "Diferenciação estrutural entre procariotos (bactérias com peptidoglicano) e eucariotos."
    },
    {
      id: 37, numero: 37, assunto: "Módulo 1 — Introdução à Microbiologia", subassunto: "Microbiota Humana e Proteção contra Patógenos", dificuldade: "Médio",
      enunciado: "A microbiota humana normal é composta por bilhões de microrganismos comensais e mutualistas. Qual é uma das principais funções fisiológicas da microbiota intestinal no hospedeiro humano?",
      alternativas: [
        { id: "A", texto: "Produção direta de anticorpos IgA secretores nas células de Paneth." },
        { id: "B", texto: "Proteção contra colonização por patógenos oportunistas através de exclusão competitiva por sítios de ligação e nutrientes, além da síntese de vitaminas K e B12." },
        { id: "C", texto: "Degradação completa da hemoglobina." },
        { id: "D", texto: "Inativação de todas as exotoxinas." }
      ],
      respostaCorreta: "B",
      explicacao: "A microbiota comensal atua como barreira biológica por exclusão competitiva por nutrientes e sítios receptores, além de sintetizar vitaminas essenciais K e B12.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Proteção por exclusão competitiva e síntese de vitaminas K e B12.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Papel protetor da microbiota humana por exclusão competitiva e síntese de vitaminas."
    },

    // Módulo 2: Introdução à Virologia (Q41 - Q45)
    {
      id: 41, numero: 41, assunto: "Módulo 2 — Introdução à Virologia", subassunto: "Envelope Lipídico Viral e Sensibilidade", dificuldade: "Médio",
      enunciado: "Os vírus são agentes acelulares considerados parasitas intracelulares obrigatórios. Em relação aos vírus ENVELOPADOS quando comparados aos NÃO ENVELOPADOS (nus), qual propriedade físico-química é verdadeira?",
      alternativas: [
        { id: "A", texto: "Os vírus envelopados são mais resistentes a detergentes, álcool 70% e desidratação." },
        { id: "B", texto: "O envelope lipídico deriva das membranas da célula hospedeira e torna o vírus mais sensível a solventes lipídicos, álcool 70%, calor e desinfetantes." },
        { id: "C", texto: "Vírus não envelopados não possuem capsídeo proteico." },
        { id: "D", texto: "O envelope é sintetizado do zero por ribossomos próprios do vírus." }
      ],
      respostaCorreta: "B",
      explicacao: "O envelope lipídico é derivado da célula hospedeira durante o brotamento. Por conter lipídios, ele é rapidamente solubilizado e desestruturado por sabão, álcool 70% e saneantes, inativando o vírus.",
      explicacaoAlternativas: { A: "Incorreta. Vírus não envelopados são mais resistentes ambientalmente.", B: "Correta. O envelope lipídico confere alta sensibilidade ao álcool 70% e detergentes.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Labilidade dos vírus envelopados perante saneantes e álcool 70%."
    },
    {
      id: 42, numero: 42, assunto: "Módulo 2 — Introdução à Virologia", subassunto: "Vacinas de Poliomielite: Salk vs. Sabin", dificuldade: "Médio",
      enunciado: "O Programa Nacional de Imunizações (PNI) utilizou historicamente duas vacinas fundamentais contra a Poliomielite: Salk e Sabin. Qual a diferença biológica crucial entre a Vacina Salk e a Sabin?",
      alternativas: [
        { id: "A", texto: "Salk é vírus vivo atenuado oral (OPV); Sabin é poliovírus inativado injetável (IPV)." },
        { id: "B", texto: "Salk utiliza poliovírus inativado (IPV - injetável); Sabin utiliza poliovírus vivo atenuado (OPV - oral / gotinha)." },
        { id: "C", texto: "Ambas utilizam vetores adenovirais não replicantes." },
        { id: "D", texto: "Sabin utiliza vacina de mRNA mensageiro." }
      ],
      respostaCorreta: "B",
      explicacao: "Jonas Salk desenvolveu a vacina de vírus inativados por formaldeído (IPV - injetável). Albert Sabin desenvolveu a vacina de vírus vivo atenuado (OPV - oral / 'gotinha').",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Salk = Inativada Injetável (IPV); Sabin = Oral Atenuada (OPV).", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Diferenciação metodológica entre a vacina inativada Salk (IPV) e a vacina atenuada Sabin (OPV)."
    },

    // Módulo 3: Vírus Influenza (Gripe) (Q46 - Q50)
    {
      id: 46, numero: 46, assunto: "Módulo 3 — Vírus Influenza (Gripe)", subassunto: "Hemaglutinina e Neuraminidase", dificuldade: "Difícil",
      enunciado: "O vírus Influenza A possui duas espículas glicoproteicas no envelope: Hemaglutinina (HA) e Neuraminidase (NA). Quais são as funções biológicas específicas da HA e da NA no ciclo replicativo?",
      alternativas: [
        { id: "A", texto: "HA cliva o ácido siálico para liberar novos vírions; NA medeia a entrada." },
        { id: "B", texto: "HA liga-se ao ácido siálico e medeia a fusão; NA cliva o ácido siálico prevenindo autoagregação e permitindo a liberação das novas partículas virais." },
        { id: "C", texto: "HA sintetiza o RNA viral; NA atua como canal iônico." },
        { id: "D", texto: "Ambas possuem função de degradação da parede celular." }
      ],
      respostaCorreta: "B",
      explicacao: "A Hemaglutinina (HA) reconhece o receptor de ácido siálico e promove a fusão para entrada. A Neuraminidase (NA) possui atividade enzimática de clivagem do ácido siálico para soltar e liberar os vírions recém-brotados.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. HA = Ligação receptórica e entrada; NA = Clivagem de ácido siálico e liberação.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Papéis funcionais complementares da Hemaglutinina (entrada) e Neuraminidase (liberação)."
    },
    {
      id: 47, numero: 47, assunto: "Módulo 3 — Vírus Influenza (Gripe)", subassunto: "Antigenic Drift vs. Antigenic Shift", dificuldade: "Difícil",
      enunciado: "A emergência de grandes Pandemias de Influenza A (como a de 2009 H1N1) ocorre por qual mecanismo genético de alteração antigênica em comparação às epidemias sazonais anuais?",
      alternativas: [
        { id: "A", texto: "Pandemias surgem por Deriva Antigênica (Antigenic Drift); epidemias por transcrição reversa." },
        { id: "B", texto: "Epidemias sazonais decorrem da Deriva Antigênica (mutações pontuais contínuas); Pandemias decorrem do Salto Antigênico (Antigenic Shift), que é o rearranjo/recombinação drástica de segmentos RNA de diferentes cepas em um mesmo hospedeiro." },
        { id: "C", texto: "Pandemias surgem por fusão do Influenza com o Rinovírus." },
        { id: "D", texto: "Epidemias sazonais ocorrem por mutação do DNA celular." }
      ],
      respostaCorreta: "B",
      explicacao: "A Deriva Antigênica (Drift) consiste em mutações pontuais acumuladas que causam epidemias sazonais anuais. O Salto Antigênico (Shift) é a troca/rearranjo de fragmentos de RNA entre cepas distintas (ex: aviária e humana) num hospedeiro intermediário (ex: porco), criando vírus inédito causador de PANDEMIAS.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Drift (mutações pontuais) = Epidemias Sazonais; Shift (rearranjo de segmentos RNA) = PANDEMIAS.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Diferenciação patogenética entre Deriva Antigênica (Drift - sazonal) e Salto Antigênico (Shift - pandêmico)."
    },
    {
      id: 48, numero: 48, assunto: "Módulo 3 — Vírus Influenza (Gripe)", subassunto: "Tratamento Antiviral com Oseltamivir", dificuldade: "Médio",
      enunciado: "O antiviral Oseltamivir (Tamiflu®) é o medicamento de escolha no tratamento da Síndrome Gripal por Influenza. Qual é o seu mecanismo de ação molecular específico?",
      alternativas: [
        { id: "A", texto: "Inibição seletiva da enzima Neuraminidase (NA), impedindo a clivagem do ácido siálico e a liberação de novos vírions infectantes." },
        { id: "B", texto: "Bloqueio dos canais de sódio no epitélio nasal." },
        { id: "C", texto: "Inibição da protease celular TMPRSS2." },
        { id: "D", texto: "Ação surfactante direta sobre o envelope." }
      ],
      respostaCorreta: "A",
      explicacao: "O Oseltamivir é um inibidor seletivo da Neuraminidase (NA), impedindo que os vírions recém-formados se desanquem da superfície celular, contendo a disseminação viral no trato respiratório.",
      explicacaoAlternativas: { A: "Correta. Oseltamivir inibe a Neuraminidase viral.", B: "Incorreta.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Mecanismo farmacológico do Oseltamivir como inibidor da Neuraminidase."
    },

    // Módulo 4: Síndromes Gripais (Q51 - Q55)
    {
      id: 51, numero: 51, assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "Rinovírus e Tropismo Térmico", dificuldade: "Médio",
      enunciado: "O Rinovírus humano é a causa mais comum do Resfriado Comum. Qual propriedade biológica explica a limitação da infecção por Rinovírus predominantemente ao Trato Respiratório Superior?",
      alternativas: [
        { id: "A", texto: "Destruição do vírus pelo oxigênio alveolar." },
        { id: "B", texto: "A replicação do Rinovírus é otimizada na faixa de temperatura entre 33°C e 35°C (temperatura da cavidade nasal), sendo ineficiente na temperatura de 37°C do pulmão." },
        { id: "C", texto: "Ligação aos receptores de insulina gástricos." },
        { id: "D", texto: "Incapacidade de produzir capsídeo proteico." }
      ],
      respostaCorreta: "B",
      explicacao: "A RNA polimerase do Rinovírus apresenta tropismo térmico específico: replica em capacidade máxima entre 33°C e 35°C (temperatura da cavidade nasal superior). Em 37°C (trato inferior), sua replicação é contida.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Replicação otimizada a 33-35°C restringe a infecção à nasofaringe.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Tropismo térmico do Rinovírus (33-35°C) e a limitação ao trato respiratório superior."
    },
    {
      id: 52, numero: 52, assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "VSR e Formação de Sincícios via Proteína F", dificuldade: "Difícil",
      enunciado: "O Vírus Sincicial Respiratório (VSR) é o principal agente etiológico da Bronquiolite Viral Aguda (BVA) em lactentes. Qual é o papel da Proteína de Fusão (Proteína F) na patogênese da doença?",
      alternativas: [
        { id: "A", texto: "Causar fragmentação dos macrófagos alveolares." },
        { id: "B", texto: "Promover a fusão da membrana da célula infectada com as membranas das células vizinhas não infectadas, formando massas multinucleadas gigantes chamadas Sincícios." },
        { id: "C", texto: "Destruir a síntese de surfactante pulmonar." },
        { id: "D", texto: "Inibir a imunoglobulina E." }
      ],
      respostaCorreta: "B",
      explicacao: "A Proteína F do VSR promove a fusão de células epiteliais brônquicas adjacentes, criando massas celulares multinucleadas necróticas chamadas Sincícios, que obstruem os bronquíolos.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. A Proteína F induz fusão celular formando Sincícios multinucleados.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Formação de sincícios citopáticos pela Proteína F do VSR na Bronquiolite Viral Aguda."
    },
    {
      id: 53, numero: 53, assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "SARS-CoV-2: Receptor ACE2 e Protease TMPRSS2", dificuldade: "Difícil",
      enunciado: "Na infecção pelo SARS-CoV-2 (COVID-19), qual receptor da célula hospedeira é reconhecido pela Proteína Spike (S), e qual protease celular realiza a clivagem ativadora de fusão?",
      alternativas: [
        { id: "A", texto: "Receptor ICAM-1 e protease Neuraminidase." },
        { id: "B", texto: "Receptor da Enzima Conversora de Angiotensina 2 (ACE2) e protease TMPRSS2 (Protease Transmembrana de Serina 2)." },
        { id: "C", texto: "Receptor CD4 e protease DPP4." },
        { id: "D", texto: "Receptor de ácido siálico e M2." }
      ],
      respostaCorreta: "B",
      explicacao: "A proteína Spike (S) do SARS-CoV-2 acopla-se ao receptor ACE2 no epitélio e endotélio, sofrendo clivagem ativadora pela protease celular TMPRSS2 para fusão e entrada.",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Spike acopla no ACE2 e é ativada pela TMPRSS2.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Entrada do SARS-CoV-2 via receptor ACE2 e clivagem proteolítica por TMPRSS2."
    }
  ];

  // 4. ARMAZENAMENTO LOCAL (STORAGE)
  const STORAGE_KEYS = {
    USER_ANSWERS: 'lumed_user_answers_v3',
    REVISION_ITEMS: 'lumed_revision_items_v3',
    SIMULATED_EXAMS: 'lumed_simulated_exams_v3'
  };

  function getUserAnswers() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.USER_ANSWERS);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function recordAnswer({ questionId, chosenOption }) {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) return null;

    const isCorrect = chosenOption === question.respostaCorreta;
    const existing = getUserAnswers();
    const prev = existing.filter(a => a.questionId === questionId);
    const hits = prev.filter(a => a.isCorrect).length + (isCorrect ? 1 : 0);
    const errors = prev.filter(a => !a.isCorrect).length + (!isCorrect ? 1 : 0);

    const newAns = {
      id: Date.now().toString(),
      questionId,
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
    updateRevisionSchedule(questionId, isCorrect, hits, errors);
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
        return { hasWeakPoints: false, title: "Nenhum ponto fraco detectado ainda", message: "Comece a praticar questões para mapear seus tópicos prioritários de estudo.", sugestao: "Inicie por Microbiologia ou Bioquímica." };
      }
      return { hasWeakPoints: false, title: "Excelente aproveitamento!", message: "Seus acertos estão elevados em todas as matérias praticadas.", sugestao: "Mantenha a rotina de repetição espaçada." };
    }

    const worst = [...weakTopics].sort((a, b) => a.percentual - b.percentual)[0];
    const mat = STUDY_MATERIALS.find(m => m.assunto === worst.assunto);
    return { hasWeakPoints: true, title: `Ponto de atenção: ${worst.assunto}`, message: `Aproveitamento de ${worst.percentual}% (${worst.erros} erro(s) em ${worst.totalRespondidas} questões).`, sugestao: mat ? `Sugestão: Revise ${mat.conceitosFundamentais[0]}` : "Revise este módulo no guia." };
  }

  // 5. TUTOR INTELIGENTE IA MOCK (LUmed AI)
  async function queryAITutorMock({ question, promptType, customPrompt, selectedOption }) {
    await new Promise(r => setTimeout(r, 400));
    const opt = selectedOption || 'A';
    const alt = question.alternativas.find(a => a.id === opt);

    switch (promptType) {
      case 'why_wrong':
        return `🧠 **Tutor LUmed**:
Sobre a **Alternativa ${opt}** ("${alt ? alt.texto : ''}"):
${question.explicacaoAlternativas?.[opt] || 'Esta alternativa contém um distrator conceitual.'}

💡 **Conceito Chave**: ${question.conceitoPrincipal}`;
      case 'explain_beginner':
        return `🩺 **Explicação Simplificada LUmed**:
${question.explicacao}

Gabarito: **${question.respostaCorreta}**. Conceito: *"${question.conceitoPrincipal}"*.`;
      case 'core_concept':
        return `🔑 **Conceito Chave para Dominar**:
**${question.conceitoPrincipal}**

- Módulo: ${question.assunto}
- Gabarito: ${question.respostaCorreta}`;
      case 'clinical_example':
        return `🏥 **Aplicação na Prática Médica**:
Na rotina clínica de *${question.assunto}*, reconhecer por que a **Alternativa ${question.respostaCorreta}** é correta previne erros diagnósticos: ${question.explicacao.slice(0, 140)}...`;
      case 'similar_question':
        return `📝 **Questão Similar**:
"No contexto de ${question.assunto}, qual a conduta ou mecanismo correto sobre ${question.subassunto}?"
Gabarito: ${question.respostaCorreta} (${question.conceitoPrincipal}).`;
      default:
        return `👨‍⚕️ **Tutor LUmed**:
Dúvida: "${customPrompt || 'Dúvida geral'}"
Gabarito: **${question.respostaCorreta}**.
Raciocínio: ${question.explicacao}`;
    }
  }

  // 6. ESTADO GLOBAL LUmed
  const state = {
    activeTab: 'dashboard', // 'dashboard' | 'questions' | 'review' | 'exam' | 'study'
    questionState: { currentFilter: 'all', currentQuestionIndex: 0, selectedOption: null, isConfirmed: false, confirmedResult: null },
    examState: { isRunning: false, isFinished: false, selectedTopic: 'all', questionCount: 10, questions: [], currentIndex: 0, answers: {} },
    studyState: { selectedDiscipline: 'microbiologia', selectedTopicId: 8, expandedChapterIndex: null },
    aiTutorState: { isOpen: false, activeQuestion: null, selectedOption: null, chatHistory: [], isLoading: false }
  };

  // 7. RENDERIZADORES DE COMPONENTES HTML

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
              <i data-lucide="help-circle" class="w-4 h-4"></i> Questões
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
          ${pendingCount > 0 ? `<span class="absolute top-0 right-2 w-2 h-2 bg-amber-500 rounded-full"></span>` : ''}
        </button>
        <button type="button" onclick="window.medbioNav('exam')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'exam' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="file-text" class="w-5 h-5 mb-0.5"></i><span>Simulado</span>
        </button>
      </nav>
    `;
  }

  function renderDashboardHTML() {
    const stats = getPerformanceStats();
    const weakPoints = getWeakPoints();
    const pendingRevisions = getPendingRevisions();

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        <div class="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-xs font-medium mb-3">
                <i data-lucide="graduation-cap" class="w-4 h-4"></i><span>Plataforma Médica • LUmed</span>
              </div>
              <h1 class="text-2xl md:text-3xl font-extrabold">Bem-vindo(a) ao LUmed! 🩺</h1>
              <p class="mt-2 text-blue-100 text-sm md:text-base max-w-2xl leading-relaxed">
                Estude Bioquímica Médica e Microbiologia, Virologia & Síndromes Gripais com tutor inteligente, resumos por tópicos e repetição espaçada.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button type="button" onclick="window.medbioNav('study')" class="px-5 py-3 rounded-2xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-md flex items-center gap-2">
                <i data-lucide="book-open" class="w-4 h-4 text-blue-600"></i><span>Começar a Estudar</span>
              </button>
              <button type="button" onclick="window.medbioNav('questions')" class="px-5 py-3 rounded-2xl bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-sm border border-blue-400/30 transition-all flex items-center gap-2">
                <i data-lucide="play-circle" class="w-4 h-4"></i><span>Praticar Questões</span>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase">Aproveitamento</p>
              <h3 class="text-2xl font-extrabold text-slate-900 mt-1">${stats.percentualGeral}%</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><i data-lucide="check-circle-2" class="w-6 h-6"></i></div>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase">Questões Concluídas</p>
              <h3 class="text-2xl font-extrabold text-slate-900 mt-1">${stats.questoesUnicasRespondidas} <span class="text-xs font-normal text-slate-400">/ ${QUESTIONS.length}</span></h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center"><i data-lucide="help-circle" class="w-6 h-6"></i></div>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase">Revisões Agendadas</p>
              <h3 class="text-2xl font-extrabold text-slate-900 mt-1">${pendingRevisions.length}</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center"><i data-lucide="rotate-ccw" class="w-6 h-6"></i></div>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p class="text-xs font-bold text-slate-400 uppercase">Módulos Teóricos</p>
              <h3 class="text-2xl font-extrabold text-slate-900 mt-1">${STUDY_MATERIALS.length}</h3>
            </div>
            <div class="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center"><i data-lucide="book-open" class="w-6 h-6"></i></div>
          </div>
        </div>

        <!-- Módulos de Estudo Rápidos na Home -->
        <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-extrabold text-slate-900">Disciplinas & Módulos Programáticos</h3>
              <p class="text-xs text-slate-500">Selecione uma matéria para acessar o guia teórico estruturado</p>
            </div>
            <button type="button" onclick="window.medbioNav('study')" class="text-xs font-bold text-blue-600 hover:text-blue-800">Ver todos →</button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div onclick="window.medbioSelectDisciplineAndTopic('bioquimica', 1)" class="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer bg-slate-50/50 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">Bioquímica Médica</span>
                <span class="text-xs text-slate-400 font-semibold">7 Módulos</span>
              </div>
              <h4 class="font-extrabold text-slate-900">Bioenergética, pH, Enzimas & Lipídios</h4>
              <p class="text-xs text-slate-600 line-clamp-2">Fundamentos de biossíntese, regulação hormonal, cinética de Michaelis-Menten e dislipidemias.</p>
            </div>

            <div onclick="window.medbioSelectDisciplineAndTopic('microbiologia', 8)" class="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer bg-blue-50/40 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800">Microbiologia & Virologia</span>
                <span class="text-xs text-slate-400 font-semibold">4 Módulos</span>
              </div>
              <h4 class="font-extrabold text-slate-900">Microbiologia, Virologia & Síndromes Gripais</h4>
              <p class="text-xs text-slate-600 line-clamp-2">Bactérias, fungos, vírus, Influenza A/B, VSR com sincícios, Rinovírus, Adenovírus e SARS-CoV-2.</p>
            </div>
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
    } else if (currentFilter !== 'all') {
      filtered = QUESTIONS.filter(q => q.assunto === currentFilter);
    }

    const currentQ = filtered[currentQuestionIndex] || filtered[0];

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8 max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl p-4 md:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-500 uppercase">Filtrar por:</span>
            <select onchange="window.medbioSetQuestionFilter(this.value)" class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-blue-600">
              <option value="all" ${currentFilter === 'all' ? 'selected' : ''}>Todas as Questões (${QUESTIONS.length})</option>
              <option value="wrong" ${currentFilter === 'wrong' ? 'selected' : ''}>Erros Anteriores</option>
              <option value="unanswered" ${currentFilter === 'unanswered' ? 'selected' : ''}>Não Respondidas</option>
              ${TOPICS.map(t => `<option value="${t}" ${currentFilter === t ? 'selected' : ''}>${t}</option>`).join('')}
            </select>
          </div>
          <span class="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            Questão ${currentQuestionIndex + 1} de ${filtered.length}
          </span>
        </div>

        ${!currentQ ? `
          <div class="bg-white rounded-3xl p-10 text-center border border-slate-200">
            <p class="text-slate-500 text-sm font-semibold">Nenhuma questão encontrada para este filtro.</p>
            <button type="button" onclick="window.medbioSetQuestionFilter('all')" class="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold">Ver todas</button>
          </div>
        ` : `
          <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 text-blue-800 border border-blue-100">${currentQ.assunto}</span>
              <span class="text-xs font-semibold text-slate-400">Nível: ${currentQ.dificuldade || 'Médio'}</span>
            </div>

            <p class="text-base md:text-lg font-semibold text-slate-900 leading-relaxed">${currentQ.enunciado}</p>

            <div class="space-y-3 pt-2">
              ${currentQ.alternativas.map(alt => {
                let cardClass = 'border-slate-200 bg-white hover:border-slate-300';
                let iconClass = 'bg-slate-100 text-slate-700';

                if (selectedOption === alt.id) {
                  cardClass = 'border-blue-600 bg-blue-50/70 shadow-sm';
                  iconClass = 'bg-blue-600 text-white';
                }

                if (isConfirmed) {
                  if (alt.id === currentQ.respostaCorreta) {
                    cardClass = 'border-emerald-500 bg-emerald-50/80 font-semibold';
                    iconClass = 'bg-emerald-600 text-white';
                  } else if (selectedOption === alt.id && selectedOption !== currentQ.respostaCorreta) {
                    cardClass = 'border-red-400 bg-red-50/80';
                    iconClass = 'bg-red-600 text-white';
                  }
                }

                return `
                  <div type="button" onclick="window.medbioSelectOption('${alt.id}')" class="option-card p-4 rounded-2xl border ${cardClass} transition-all cursor-pointer flex items-start gap-3.5">
                    <span class="w-8 h-8 rounded-xl ${iconClass} flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">${alt.id}</span>
                    <p class="text-sm md:text-base text-slate-800 font-medium pt-0.5">${alt.texto}</p>
                  </div>
                `;
              }).join('')}
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-slate-100 gap-4">
              <button type="button" onclick="window.medbioPrevQuestion()" ${currentQuestionIndex === 0 ? 'disabled class="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-300 cursor-not-allowed text-xs font-bold"' : 'class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"'}>
                ← Anterior
              </button>

              ${!isConfirmed ? `
                <button type="button" onclick="window.medbioConfirmAnswer()" ${!selectedOption ? 'disabled class="px-6 py-3 rounded-2xl bg-slate-200 text-slate-400 font-extrabold text-sm cursor-not-allowed"' : 'class="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-md transition-all"'}>
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
                  <span class="font-extrabold text-sm text-emerald-400">Gabarito Comentado: Alternativa ${currentQ.respostaCorreta}</span>
                  <button type="button" onclick="window.medbioOpenAITutorForQuestion(${currentQ.id})" class="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs flex items-center gap-1.5">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> Tutor LUmed
                  </button>
                </div>
                <p class="text-xs md:text-sm text-slate-200 leading-relaxed">${currentQ.explicacao}</p>
                <div class="p-3 rounded-xl bg-white/10 text-xs text-blue-200 font-medium">
                  <strong>Conceito-Chave:</strong> ${currentQ.conceitoPrincipal}
                </div>
              </div>
            ` : ''}
          </div>
        `}
      </div>
    `;
  }

  // 8. RENDERIZADOR DO GUIA DE ESTUDOS ORGANIZADO (Módulos, Capítulos, Cards e Tabelas)
  function renderStudyHTML() {
    const { selectedDiscipline, selectedTopicId } = state.studyState;

    // Filtrar materiais da disciplina ativa
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
            <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">Guia de Estudos LUmed</h1>
          </div>

          <!-- Tabs de Disciplina -->
          <div class="flex items-center bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            <button type="button" onclick="window.medbioSelectDiscipline('microbiologia')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${selectedDiscipline === 'microbiologia' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
              🦠 Microbiologia & Virologia
            </button>
            <button type="button" onclick="window.medbioSelectDiscipline('bioquimica')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${selectedDiscipline === 'bioquimica' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}">
              🧪 Bioquímica Médica
            </button>
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

            ${activeMat.imagemUrl ? `
              <!-- Ilustração Médica Didática LUmed -->
              <div class="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 my-4">
                <img src="${activeMat.imagemUrl}" alt="${activeMat.assunto}" class="w-full h-auto max-h-[440px] object-cover" />
                <div class="p-3 bg-slate-900 text-slate-200 text-xs font-medium border-t border-slate-800 flex items-center gap-2">
                  <i data-lucide="image" class="w-4 h-4 text-blue-400 shrink-0"></i>
                  <span>${activeMat.imagemLegenda || activeMat.assunto}</span>
                </div>
              </div>
            ` : ''}

            <!-- Capítulos / Tópicos Detalhados em Cards -->
            <div class="space-y-6">
              <h3 class="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-2">Capítulos do Módulo</h3>
              ${activeMat.capitulos ? activeMat.capitulos.map((cap, idx) => `
                <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
                  <div>
                    <h4 class="text-sm md:text-base font-extrabold text-slate-900">${cap.titulo}</h4>
                    ${cap.subtitulo ? `<p class="text-xs font-semibold text-blue-700 mt-0.5">${cap.subtitulo}</p>` : ''}
                  </div>

                  <div class="text-xs md:text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                    ${cap.conteudo}
                  </div>

                  <!-- Tabela Comparativa (quando houver no capítulo) -->
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

                  <!-- Box Conceito-Chave -->
                  ${cap.conceitoChave ? `
                    <div class="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs font-medium">
                      <strong class="text-indigo-800 block uppercase font-bold text-[11px] mb-0.5">💡 Conceito-Chave:</strong>
                      ${cap.conceitoChave}
                    </div>
                  ` : ''}

                  <!-- Box Importante para Medicina -->
                  ${cap.importanteMedicina ? `
                    <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-medium">
                      <strong class="text-emerald-800 block uppercase font-bold text-[11px] mb-0.5">🩺 Importante para a Prática Médica:</strong>
                      ${cap.importanteMedicina}
                    </div>
                  ` : ''}
                </div>
              `).join('') : ''}
            </div>

            <!-- Conceitos Fundamentais -->
            <div class="space-y-3 pt-2">
              <span class="text-xs font-bold uppercase text-slate-500">Pontos Fundamentais de Fixação</span>
              <div class="grid grid-cols-1 gap-2">
                ${activeMat.conceitosFundamentais.map(c => `
                  <div class="p-3 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 flex items-start gap-2.5">
                    <span class="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5"></span>
                    <span class="leading-relaxed">${c}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Pegadinhas e Erros Comuns -->
            ${activeMat.errosComuns && activeMat.errosComuns.length > 0 ? `
              <div class="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs space-y-2">
                <strong class="block uppercase font-bold text-amber-800 text-xs">⚠️ Pegadinhas de Prova e Erros Frequentes:</strong>
                <ul class="list-disc list-inside space-y-1 text-amber-900 font-medium">
                  ${activeMat.errosComuns.map(e => `<li>${e}</li>`).join('')}
                </ul>
              </div>
            ` : ''}

            <!-- Navegação de Rodapé entre Módulos -->
            <div class="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
              <button type="button" onclick="window.medbioPrevStudyModule()" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold">
                ← Módulo Anterior
              </button>

              <button type="button" onclick="window.medbioSetQuestionFilter('${activeMat.assunto}')" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md">
                📝 Praticar Questões
              </button>

              <button type="button" onclick="window.medbioNextStudyModule()" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold">
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
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200 mb-2">
              <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i><span>Repetição Espaçada</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">Central de Revisão Inteligente LUmed</h1>
            <p class="text-sm text-slate-500 mt-1">Revisar conceitos no momento ideal consolida o aprendizado em memória de longo prazo.</p>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center shrink-0">
            <span class="text-xs font-bold text-amber-700 uppercase block">Agendados Hoje</span>
            <span class="text-3xl font-extrabold text-amber-900 block mt-1">${pending.length}</span>
            <span class="text-xs font-semibold text-amber-800">conceitos</span>
          </div>
        </div>

        ${pending.length === 0 ? `
          <div class="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm text-center max-w-xl mx-auto my-6 space-y-3">
            <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <i data-lucide="sparkles" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Sua fila de revisão está limpa! 🎉</h3>
            <p class="text-sm text-slate-500">Você revisou todos os conceitos agendados para hoje.</p>
            <button type="button" onclick="window.medbioNav('questions')" class="mt-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm">Resolver novas questões</button>
          </div>
        ` : `
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="text-base font-bold text-slate-900">Conceitos Pendentes (${pending.length})</h3>
              <button type="button" onclick="window.medbioStartReviewSession()" class="px-5 py-2.5 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center gap-2">
                <i data-lucide="play" class="w-4 h-4"></i><span>Iniciar sessão de revisão</span>
              </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${pending.map(item => {
                const q = QUESTIONS.find(quest => quest.id === item.questionId);
                if (!q) return '';
                return `
                  <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">Questão ${q.numero || q.id}</span>
                      ${item.isWeakPoint ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-100 text-red-700">Ponto Fraco</span>` : `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800">Revisão em ${item.daysInterval}d</span>`}
                    </div>
                    <h4 class="text-sm font-bold text-slate-900 line-clamp-2">${q.enunciado}</h4>
                    <div class="p-2.5 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600">
                      <span class="font-bold text-slate-700 block">Conceito:</span><span>${q.conceitoPrincipal}</span>
                    </div>
                    <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span class="text-[11px] text-slate-400 font-medium">${item.totalHits} acerto(s) / ${item.totalErrors} erro(s)</span>
                      <button type="button" onclick="window.medbioReviewQuestion(${q.id})" class="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs">Revisar esta</button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
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
                ${[5, 10, 15, 25].map(c => `
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
              ${q.alternativas.map(alt => `
                <div type="button" onclick="window.medbioAnswerExamQuestion(${q.id}, '${alt.id}')" class="option-card p-4 rounded-2xl border ${answers[q.id] === alt.id ? 'border-blue-600 bg-blue-50/70' : 'border-slate-200 bg-white'} cursor-pointer flex items-start gap-3.5">
                  <span class="w-8 h-8 rounded-xl ${answers[q.id] === alt.id ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'} flex items-center justify-center text-sm font-bold shrink-0">${alt.id}</span>
                  <p class="text-sm md:text-base text-slate-800 font-medium pt-1">${alt.texto}</p>
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
        if (answers[q.id]) recordAnswer({ questionId: q.id, chosenOption: answers[q.id] });
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
              <h3 class="font-extrabold text-base">Tutor Inteligente LUmed</h3>
            </div>
            <button type="button" onclick="window.medbioCloseAITutor()" class="p-1 rounded-lg bg-white/10 text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
          </div>

          <div id="ai-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            ${chatHistory.length === 0 ? `
              <div class="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm space-y-1">
                <p class="font-bold text-indigo-600">Como posso te ajudar no LUmed?</p>
                <p>Tire dúvidas conceituais de Bioquímica ou Microbiologia, Virologia e Síndromes Gripais.</p>
              </div>
            ` : ''}
            ${chatHistory.map(msg => `
              <div class="flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed ${msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-slate-200 text-slate-800'}">
                  ${msg.text.replace(/\n/g, '<br/>')}
                </div>
              </div>
            `).join('')}
            ${isLoading ? `<div class="p-3 bg-white border rounded-2xl text-xs text-indigo-600 font-bold">Tutor pensando...</div>` : ''}
          </div>

          <div class="p-3 bg-white border-t border-slate-200 space-y-2">
            <span class="text-[11px] font-bold text-slate-400 uppercase block">Sugestões Rápidas:</span>
            <div class="flex flex-wrap gap-1.5">
              <button type="button" onclick="window.medbioAskAITutor('why_wrong')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border">"Por que essa alternativa está errada?"</button>
              <button type="button" onclick="window.medbioAskAITutor('explain_beginner')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border">"Explique para iniciante"</button>
              <button type="button" onclick="window.medbioAskAITutor('core_concept')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border">"Qual o conceito chave?"</button>
              <button type="button" onclick="window.medbioAskAITutor('clinical_example')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border">"Exemplo clínico"</button>
            </div>
          </div>

          <div class="p-4 bg-white border-t border-slate-200">
            <form onsubmit="window.medbioSubmitAICustomQuestion(event)" class="flex items-center gap-2">
              <input id="ai-custom-input" type="text" placeholder="Digite sua dúvida médica..." class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800" />
              <button type="submit" class="p-2.5 rounded-xl bg-indigo-600 text-white font-bold"><i data-lucide="send" class="w-4 h-4"></i></button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // 9. RENDERIZADOR PRINCIPAL LUmed
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

  // 10. HANDLERS GLOBAIS DE EVENTOS (window.medbio*)
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
    if (!selectedOption) return;

    let filtered = QUESTIONS;
    if (currentFilter === 'wrong') {
      const wrongIds = getUserAnswers().filter(a => !a.isCorrect).map(a => a.questionId);
      filtered = QUESTIONS.filter(q => wrongIds.includes(q.id));
    } else if (currentFilter === 'unanswered') {
      const ansIds = getUserAnswers().map(a => a.questionId);
      filtered = QUESTIONS.filter(q => !ansIds.includes(q.id));
    } else if (currentFilter !== 'all') {
      filtered = QUESTIONS.filter(q => q.assunto === currentFilter);
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
    const idx = QUESTIONS.findIndex(q => q.id === qId);
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
    const q = QUESTIONS.find(quest => quest.id === questionId) || QUESTIONS[0];
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
      if (promptType === 'why_wrong') userText = 'Por que essa alternativa está errada?';
      else if (promptType === 'explain_beginner') userText = 'Explique para um iniciante.';
      else if (promptType === 'core_concept') userText = 'Qual conceito preciso dominar?';
      else if (promptType === 'clinical_example') userText = 'Me dê um exemplo clínico.';
      else if (promptType === 'similar_question') userText = 'Crie uma questão parecida.';
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

  // 11. MONTAGEM INICIAL DA APLICAÇÃO LUmed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  }
  renderApp();
  setTimeout(renderApp, 50);
})();

