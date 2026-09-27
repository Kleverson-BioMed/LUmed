// Guias Teóricos e Conteúdo Programático Detalhado LUmed
// Importado e integrado integralmente a partir dos materiais institucionais e diretrizes oficiais

export const DISCIPLINES = [
  { id: "bioquimica", name: "Bioquímica Médica", icon: "Zap" },
  { id: "microbiologia", name: "Microbiologia & Virologia", icon: "Microscope" },
  { id: "parasitologia", name: "Parasitologia & Infectologia", icon: "Bug" },
  { id: "propedeutica", name: "Propedêutica Médica & Semiotécnica", icon: "Stethoscope" }
];

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
    descricao: "Bioenergética, acoplamento de ATP, compartimentação celular e regulação por insulina/glucagon e AMPK.",
    resumo: "O metabolismo celular é a rede integrada de reações exergônicas (catabolismo) e endergônicas (anabolismo). A hidrólise de ATP (ΔG°' ≈ -30,5 kJ/mol) fornece energia livre para acoplar reações desfavoráveis. A enzima AMPK atua como o principal sensor de esgotamento energético celular.",
    svgDiagrama: `<svg viewBox="0 0 700 200" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="200" height="160" rx="16" fill="#eff6ff" stroke="#bfdbfe" stroke-width="2"/>
      <text x="120" y="50" text-anchor="middle" font-weight="extrabold" font-size="14" fill="#1e40af">CATABOLISMO</text>
      <text x="120" y="72" text-anchor="middle" font-size="11" font-weight="semibold" fill="#3b82f6">Degradação Oxidativa</text>
      <text x="120" y="100" text-anchor="middle" font-weight="bold" font-size="12" fill="#1e3a8a">Glicose, Lipídios, PTN</text>
      <text x="120" y="125" text-anchor="middle" font-size="20" fill="#2563eb">↓</text>
      <text x="120" y="150" text-anchor="middle" font-weight="bold" font-size="12" fill="#166534">Libera Energia (ΔG &lt; 0)</text>

      <circle cx="350" cy="100" r="50" fill="#2563eb" stroke="#1d4ed8" stroke-width="3"/>
      <text x="350" y="96" text-anchor="middle" font-weight="900" font-size="22" fill="#ffffff">ATP</text>
      <text x="350" y="116" text-anchor="middle" font-weight="bold" font-size="10" fill="#dbeafe">Moeda Energética</text>

      <rect x="480" y="20" width="200" height="160" rx="16" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="2"/>
      <text x="580" y="50" text-anchor="middle" font-weight="extrabold" font-size="14" fill="#166534">ANABOLISMO</text>
      <text x="580" y="72" text-anchor="middle" font-size="11" font-weight="semibold" fill="#15803d">Biossíntese Celular</text>
      <text x="580" y="100" text-anchor="middle" font-weight="bold" font-size="12" fill="#14532d">Proteínas, DNA, Glicogênio</text>
      <text x="580" y="125" text-anchor="middle" font-size="20" fill="#16a34a">↑</text>
      <text x="580" y="150" text-anchor="middle" font-weight="bold" font-size="12" fill="#991b1b">Consome ATP (ΔG &gt; 0)</text>
    </svg>`,
    imagemLegenda: "Esquema Bioquímico LUmed: Acoplamento do Catabolismo Exergônico ao Anabolismo Endergônico via ATP.",
    capitulos: [
      {
        titulo: "1. Conceito e Escopo da Bioenergética Celular",
        subtitulo: "Fluxo metabólico dinâmico vs. Concentração estática",
        conteudo: "• Fluxo Metabólico: É a velocidade com que metabólitos fluem através de uma via enzimática. Um estado de equilíbrio estático (steady-state) mantém concentrações constantes mesmo com um fluxo extremamente rápido.\n• Variação de Energia Livre (ΔG): Reações exergônicas (ΔG < 0) ocorrem espontaneamente; reações endergônicas (ΔG > 0) exigem aporte de energia.",
        conceitoChave: "Concentração estática de metabólitos não equivale à velocidade da via; o fluxo metabólico expressa o turnover real.",
        importanteMedicina: "Avaliação da taxa metabólica basal e identificação de bloqueios por Erros Inatos do Metabolismo."
      },
      {
        titulo: "2. Acoplamento de ATP e Sensor Energético AMPK",
        subtitulo: "Impulsão de reações biologicamente desfavoráveis",
        conteudo: "• Acoplamento de ATP: A hidrólise de ligações fosfoanidrido do ATP libera -30.5 kJ/mol. Ao acoplar-se a uma reação endergônica, o ΔG total torna-se negativo.\n• Papel da Enzima AMPK: Quando a célula esgota ATP e acumula AMP (alta razão AMP/ATP), a AMPK é ativada por fosforilação, desligando vias anabólicas (síntese de ácidos graxos) e ativando vias catabólicas (glicólise, β-oxidação).",
        conceitoChave: "AMPK é o interruptor energético celular: desliga anabolismo e liga catabolismo em estresse bioenergético.",
        tabelaComparativa: {
          headers: ["Estado Metabólico", "Hormônio Dominante", "Razão AMP/ATP", "Atividade da AMPK", "Via Ativada"],
          rows: [
            ["Estado Alimentado", "Insulina", "Baixa (Alto ATP)", "Inibida", "Anabolismo (Glicogenogênese, Lipogênese)"],
            ["Jejum / Exercício / Hipóxia", "Glucagon / Adrenalina", "Elevada (Baixo ATP)", "Altamente Ativada", "Catabolismo (Glicogenólise, β-oxidação)"],
            ["Uso de Metformina", "N/A (Farmacológico)", "Elevada (Inibe Complexo I)", "Ativada", "Inibe Gliconeogênese Hepática"]
          ]
        },
        importanteMedicina: "A Metformina (antidiabético de 1ª linha) inibe o Complexo I mitocondrial, ativando a AMPK para reduzir a gliconeogênese hepática no Diabetes Tipo 2."
      }
    ],
    conceitosFundamentais: [
      "Fluxo metabólico expressa a rotatividade real da via, não apenas a concentração da substância.",
      "ATP atua como moeda energética universal para acoplamento de reações.",
      "AMPK é o sensor metabólico ativado por alta razão AMP/ATP.",
      "Insulina sinaliza anabolismo no estado alimentado; Glucagon sinaliza catabolismo no jejum."
    ],
    relacaoMedicina: "Compreender a bioenergética é a base para o manejo da Cetoacidose Diabética, Síndrome Metabólica e farmacologia dos antidiabéticos orais.",
    errosComuns: [
      "Confundir concentração estática de metabólito com velocidade de fluxo metabólico.",
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
    resumo: "A água forma pontes de hidrogênio responsáveis por suas propriedades térmicas e solventes. O pH plasmático normal (7.35 a 7.45) é mantido primariamente pelo Tampão Bicarbonato, descrito pela Equação de Henderson-Hasselbalch.",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="30" width="170" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="115" y="55" text-anchor="middle" font-weight="extrabold" font-size="13" fill="#1e40af">🫁 PULMÕES</text>
      <text x="115" y="85" text-anchor="middle" font-weight="900" font-size="20" fill="#2563eb">CO₂</text>
      <text x="115" y="110" text-anchor="middle" font-size="11" fill="#475569">Regulação Respiratória</text>
      <text x="115" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="#1d4ed8">Controla PaCO₂ (Minutos)</text>
      
      <text x="250" y="95" text-anchor="middle" font-weight="bold" font-size="15" fill="#334155">CO₂ + H₂O</text>
      <text x="340" y="95" text-anchor="middle" font-weight="900" font-size="22" fill="#2563eb">⇄</text>
      <text x="420" y="95" text-anchor="middle" font-weight="bold" font-size="15" fill="#b91c1c">HCO₃⁻ + H⁺</text>

      <rect x="500" y="30" width="170" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="585" y="55" text-anchor="middle" font-weight="extrabold" font-size="13" fill="#166534">🫘 RINS</text>
      <text x="585" y="85" text-anchor="middle" font-weight="900" font-size="20" fill="#16a34a">HCO₃⁻</text>
      <text x="585" y="110" text-anchor="middle" font-size="11" fill="#475569">Regulação Renal</text>
      <text x="585" y="130" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Reabsorve Base (Horas/Dias)</text>
    </svg>`,
    imagemLegenda: "Esquema do Tampão Bicarbonato LUmed: Integração entre Pulmões (PaCO2) e Rins (HCO3-).",
    capitulos: [
      {
        titulo: "1. Fisiologia da Água e Tampão Bicarbonato",
        subtitulo: "Equação de Henderson-Hasselbalch no Plasma Sanguíneo",
        conteudo: "• A Equação de Henderson-Hasselbalch rege o pH sanguíneo:\n  pH = pKa + log([HCO3-] / (0.03 x PaCO2))\n  O pKa do sistema ácido carbônico/bicarbonato é 6.1. O fator 0.03 converte a pressão parcial de CO2 (mmHg) em concentração de ácido carbônico dissolvido (mM).\n• PaCO2 normal: 35 a 45 mmHg. HCO3- normal: 22 a 26 mEq/L.",
        conceitoChave: "O Tampão Bicarbonato é um sistema aberto: os pulmões ajustam o ácido (PaCO2 em minutos) e os rins ajustam a base (HCO3- em dias).",
        importanteMedicina: "Em hiperventilação (ataque de pânico), a queda da PaCO2 causa Alcalose Respiratória. Em hipoventilação (DPOC), a elevação de PaCO2 causa Acidose Respiratória."
      }
    ],
    conceitosFundamentais: [
      "pH plasmático fisiológico oscila entre 7.35 e 7.45.",
      "Henderson-Hasselbalch relaciona pH, pKa e a razão entre base conjugada (HCO3-) e ácido (PaCO2).",
      "Pulmões compensam distúrbios metabólicos rapidamente; Rins compensam distúrbios respiratórios lentamente."
    ],
    relacaoMedicina: "Diagnóstico e manejo de acidose/alcalose metabólica e respiratória em UTI e emergências.",
    errosComuns: ["Esquecer de multiplicar a PaCO2 por 0.03 para obter a concentração de ácido dissolvido."],
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
    resumo: "O Anion Gap plasmático avalia a presença de ânions orgânicos não mensurados no sangue. É essencial para o diagnóstico diferencial das acidoses metabólicas em UTI.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="350" y="35" text-anchor="middle" font-weight="extrabold" font-size="14" fill="#0f172a">FÓRMULA DO ANION GAP PLASMÁTICO</text>
      <rect x="40" y="50" width="620" height="45" rx="12" fill="#2563eb"/>
      <text x="350" y="78" text-anchor="middle" font-weight="900" font-size="16" fill="#ffffff">Anion Gap = [ Na⁺ ]  −  ( [ Cl⁻ ] + [ HCO₃⁻ ] )</text>
      <text x="200" y="125" text-anchor="middle" font-weight="bold" font-size="12" fill="#166534">Valor Normal: 8 a 12 mEq/L</text>
      <text x="500" y="125" text-anchor="middle" font-weight="bold" font-size="12" fill="#991b1b">Elevado: Cetoacidose / Lactato / Salicilatos</text>
    </svg>`,
    imagemLegenda: "Cálculo e Significado do Anion Gap LUmed nas Emergências Metabólicas.",
    capitulos: [
      {
        titulo: "1. Diagnóstico do Anion Gap Elevado",
        subtitulo: "Acrostático MUDPILES e GOLD MARK",
        conteudo: "• Anion Gap Elevado (> 12 mEq/L): Ocorre quando ocorre consumo de HCO3- por tamponamento de ácidos orgânicos não mensurados no exame de rotina.\n• Mnemônico MUDPILES:\n  - M: Metanol\n  - U: Uremia (Insuficiência Renal Aguda/Crônica)\n  - D: Diabetes (Cetoacidose Diabética)\n  - P: Paralcóol / Propilenoglicol\n  - I: Isoniazida / Infecção / Iatrogênico\n  - L: Lactato (Acidose Láctica por Choque/Sepse)\n  - E: Etilenoglicol\n  - S: Salicilatos (Aspirina)",
        conceitoChave: "Anion Gap elevado confirma consumo de bicarbonato por adição de ácidos orgânicos fixos.",
        importanteMedicina: "No choque séptico com má perfusão tecidual, o acúmulo de Ácido Láctico gera Acidose Metabólica com Anion Gap Elevado."
      }
    ],
    conceitosFundamentais: [
      "Anion Gap = Na+ - (Cl- + HCO3-). Normal: 8-12 mEq/L.",
      "Anion Gap elevado indica adição de ácidos orgânicos (Lactato, Acetoacetato, Salicilatos).",
      "Potássio sofre desvio transcelular: Acidose metabólica induz hipercalemia por saída celular de K+."
    ],
    relacaoMedicina: "Abordagem rápida de pacientes graves na sala de emergência e UTI.",
    errosComuns: ["Ignorar a necessidade de corrigir o potássio sérico durante a correção do pH na cetoacidose."],
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
    resumo: "A Mioglobina apresenta curva hiperbólica de alta afinidade. A Hemoglobina é um tetrâmero com cooperatividade alostérica (curva sigmoide), modulada pelo pH, PaCO2 e 2,3-BPG (Efeito Bohr).",
    svgDiagrama: `<svg viewBox="0 0 700 200" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="180" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="60" y1="160" x2="650" y2="160" stroke="#64748b" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="160" stroke="#64748b" stroke-width="2"/>
      <text x="350" y="185" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569">Pressão Parcial de O₂ (PaO₂ mmHg)</text>
      <text x="25" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569" transform="rotate(-90 25 95)">% Saturação O₂</text>
      <path d="M 60 160 Q 90 35 650 30" fill="none" stroke="#dc2626" stroke-width="3"/>
      <text x="170" y="40" font-weight="extrabold" font-size="11" fill="#dc2626">Mioglobina (Hiperbólica)</text>
      <path d="M 60 160 C 180 155, 240 60, 650 40" fill="none" stroke="#2563eb" stroke-width="3"/>
      <text x="330" y="70" font-weight="extrabold" font-size="11" fill="#2563eb">Hemoglobina pH 7.4 (Sigmoide)</text>
      <path d="M 60 160 C 220 158, 300 90, 650 55" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5"/>
      <text x="440" y="115" font-weight="extrabold" font-size="11" fill="#d97706">Efeito Bohr ↓pH / ↑CO₂ / ↑Temp (Desvio Direita)</text>
    </svg>`,
    imagemLegenda: "Curvas de Ligação de Oxigênio LUmed: Hemoglobina Sigmoide vs Mioglobina Hiperbólica e Efeito Bohr.",
    capitulos: [
      {
        titulo: "1. Cooperatividade e Efeito Bohr",
        subtitulo: "Transição do Estado T (Tenso) para o Estado R (Relaxado)",
        conteudo: "• A Hemoglobina alterna entre a conformação T (baixa afinidade por O2) e R (alta afinidade). A ligação do 1º O2 facilita os subsequentes (cooperatividade alostérica).\n• Efeito Bohr: Nos tecidos metabolicamente ativos, a produção de H+ e CO2 reduz o pH. H+ liga-se aos resíduos de histidina estabilizando a forma T (desoxigenada), deslocando a curva para a DIREITA e promovendo a liberação de O2.",
        conceitoChave: "Efeito Bohr desvia a curva da hemoglobina para a DIREITA (libera O2 no tecido metabólico ativo).",
        importanteMedicina: "Adaptação a altitudes e fisiopatologia da Anemia Falciforme (HbS polimeriza no Estado T desoxigenado)."
      }
    ],
    conceitosFundamentais: [
      "Mioglobina é monomérica de reserva muscular (curva hiperbólica).",
      "Hemoglobina é tetramérica de transporte sistêmico (curva sigmoide).",
      "Fatores que desviam a curva para a DIREITA: ↓pH, ↑PaCO2, ↑2,3-BPG, ↑Temperatura."
    ],
    relacaoMedicina: "Compreensão do aporte tecidual de oxigênio em choque e anemia.",
    errosComuns: ["Confundir desvio para a direita (liberação) com desvio para a esquerda (retenção)."],
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
    resumo: "O catabolismo proteico gera amônia tóxica (NH3), convertida em ureia no fígado. A creatinina é derivada da fosfocreatina muscular e serve de marcador de filtração glomerular renal.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="35" width="130" height="90" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="95" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#1e40af">Aminoácidos</text>
      <text x="95" y="85" text-anchor="middle" font-size="10" fill="#3b82f6">Transaminação</text>
      <text x="95" y="105" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">ALT / AST</text>
      
      <rect x="230" y="35" width="130" height="90" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="295" y="60" text-anchor="middle" font-weight="extrabold" font-size="13" fill="#991b1b">Amônia (NH₃)</text>
      <text x="295" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#dc2626">⚠️ Neurotóxica</text>
      
      <rect x="430" y="35" width="110" height="90" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="485" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">Ciclo Ureia</text>
      <text x="485" y="85" text-anchor="middle" font-weight="bold" font-size="11" fill="#15803d">Hepatócito (CPS-I)</text>
      
      <rect x="585" y="35" width="90" height="90" rx="12" fill="#f0fdf4" stroke="#4ade80" stroke-width="2"/>
      <text x="630" y="68" text-anchor="middle" font-weight="900" font-size="13" fill="#166534">UREIA</text>
      <text x="630" y="95" text-anchor="middle" font-size="10" fill="#15803d">Excreção Renal</text>
    </svg>`,
    imagemLegenda: "Rotas de Destoxificação de Nitrogênio LUmed: Amônia Hepática convertida em Ureia Solúvel.",
    capitulos: [
      {
        titulo: "1. Ciclo da Ureia e Encefalopatia Hepática",
        subtitulo: "Enzima-Chave CPS-I e Toxicidade Cerebral da Amônia",
        conteudo: "• A enzima Carbamoil-Fosfato Sintetase I (CPS-I) mitocondrial inicia o ciclo da ureia no fígado.\n• Hiperamonemia: Em cirrose hepática ou insuficiência hepática fulminante, a amônia não é convertida em ureia, atravessando a barreira hematoencefálica. No astrócito, a amônia consome α-cetoglutarato para formar glutamina, gerando edema cerebral e Encefalopatia Hepática.",
        conceitoChave: "Ureia é sintetizada exclusivamente no FÍGADO e excretada pelos RINS.",
        importanteMedicina: "Tratamento da encefalopatia hepática com Lactulosa (acidifica a luz intestinal convertendo NH3 no íon NH4+ não absorvível)."
      }
    ],
    conceitosFundamentais: [
      "ALT e AST realizam transaminação de aminoácidos para glutamato.",
      "Amônia é altamente neurotóxica; Ureia é o composto atóxico e solúvel de descarte.",
      "Creatinina é derivada da creatina muscular proporcional à massa magra."
    ],
    relacaoMedicina: "Avaliação da função hepática, renal e estresse oxidativo.",
    errosComuns: ["Confundir o local de síntese da ureia (fígado) com o local de excreção (rim)."],
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
    resumo: "Lipoproteínas transportam lipídios no plasma. O LDL (ApoB-100) deposita colesterol na parede arterial (aterogênico), enquanto o HDL (ApoA-I) realiza o Transporte Reverso de Colesterol.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="330" height="140" rx="16" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="175" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#991b1b">LDL (Colesterol "Ruim")</text>
      <text x="175" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Apolipoproteína ApoB-100</text>
      <text x="175" y="85" text-anchor="middle" font-size="11" fill="#7f1d1d">Fígado ➔ Artérias Periféricas</text>

      <rect x="360" y="10" width="330" height="140" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="525" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#166534">HDL (Colesterol "Bom")</text>
      <text x="525" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#15803d">Apolipoproteína ApoA-I</text>
      <text x="525" y="85" text-anchor="middle" font-size="11" fill="#14532d">Transporte Reverso: Artérias ➔ Fígado</text>
    </svg>`,
    imagemLegenda: "Metabolismo Lipídico LUmed: LDL Aterogênico (ApoB-100) vs HDL com Transporte Reverso.",
    capitulos: [
      {
        titulo: "1. Lipoproteínas e Farmacologia das Estatinas",
        subtitulo: "ApoB-100, ApoA-I e Inibição da HMG-CoA Redutase",
        conteudo: "• LDL carrega a apolipoproteína ApoB-100. Quando retido no subendotélio arterial, sofre oxidação e captação por macrófagos (scavenger), formando Células Espumosas e placas de Ateroma.\n• Estatinas: Inibem competitivamente a enzima HMG-CoA Redutase no fígado, bloqueando a síntese endógena de colesterol. Isso induz superexpressão de receptores de LDL no hepatócito, reduzindo o LDL circulante.",
        conceitoChave: "Estatinas inibem a HMG-CoA Redutase e aumentam a captação hepática de LDL do sangue.",
        importanteMedicina: "Prevenção primária e secundária de Infarto Agudo do Miocárdio (IAM) e AVC isquêmico."
      }
    ],
    conceitosFundamentais: [
      "Quilomícrons transportam lipídios exógenos da dieta.",
      "VLDL e LDL transportam lipídios endógenos hepáticos para a periferia.",
      "HDL realiza o Transporte Reverso de Colesterol para excreção biliar."
    ],
    relacaoMedicina: "Manejo da Aterosclerose, Dislipidemias e Cetoacidose Diabética.",
    errosComuns: ["Ignorar que o HDL depende da apolipoproteína ApoA-I para atuar na proteção cardiovascular."],
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
    resumo: "As enzimas reduzem a energia de ativação sem alterar o ΔG. A constante de Michaelis (Km) reflete a afinidade. Inibidores competitivos aumentam o Km sem alterar a Vmax; Inibidores não-competitivos diminuem a Vmax sem alterar o Km.",
    svgDiagrama: `<svg viewBox="0 0 700 200" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="180" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="60" y1="160" x2="650" y2="160" stroke="#64748b" stroke-width="2"/>
      <line x1="60" y1="25" x2="60" y2="160" stroke="#64748b" stroke-width="2"/>
      <path d="M 60 160 Q 140 45 650 40" fill="none" stroke="#2563eb" stroke-width="3"/>
      <path d="M 60 160 Q 280 80 650 40" fill="none" stroke="#d97706" stroke-width="3" stroke-dasharray="5"/>
      <path d="M 60 160 Q 140 100 650 90" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="3"/>
    </svg>`,
    imagemLegenda: "Cinética Enzimática LUmed: Curvas de Michaelis-Menten e Tipos de Inibição Farmacológica.",
    capitulos: [
      {
        titulo: "1. Cinética Enzimática e Farmacologia dos Inibidores",
        subtitulo: "Diferenciação Prática entre Inibidor Competitivo e Não-Competitivo",
        conteudo: "• Km (Constante de Michaelis): É a [S] necessária para atingir Vmax/2. Km e afinidade são INVERSAMENTE proporcionais.\n• Inibição Competitiva: O inibidor liga-se ao sítio ativo. Km aumenta, Vmax permanece inalterada.\n• Inibição Não-Competitiva: O inibidor liga-se a um sítio alostérico distinto. Vmax diminui, Km permanece inalterado.",
        conceitoChave: "Inibição Competitiva: Km aumenta, Vmax IGUAL. Inibição Não-Competitiva: Vmax diminui, Km IGUAL.",
        importanteMedicina: "O Captopril (IECA) inibe competitivamente a ECA na hipertensão."
      }
    ],
    conceitosFundamentais: [
      "Km é a concentração de substrato na qual V = Vmax / 2.",
      "Menor Km = Maior afinidade da enzima pelo substrato.",
      "Inibidor competitivo atua no sítio ativo; pode ser deslocado por excesso de substrato."
    ],
    relacaoMedicina: "Compreensão de mecanismos farmacológicos e diagnóstico enzimático.",
    errosComuns: ["Afirmar erradamente que inibidores competitivos reduzem a velocidade máxima (Vmax)."],
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
    resumo: "A Microbiologia estuda organismos microscópicos. Abrange medicina, biotecnologia e ecologia. Diferencia procariontes (bactérias com peptidoglicano), eucariontes (fungos com quitina, protozoários) e acelulares (vírus). A microbiota humana protege por exclusão competitiva e sintetiza vitaminas K e B12.",
    imagemUrl: "/images/microbiology_overview.jpg",
    imagemLegenda: "Esquema Anatômico LUmed: Comparativo Estrutural entre Bactérias, Fungos, Protozoários e Vírus.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="140" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="35" width="140" height="90" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="100" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#1e40af">BACTÉRIAS</text>
      <text x="100" y="80" text-anchor="middle" font-size="10" fill="#3b82f6">Procarionte</text>
      <text x="100" y="102" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">Peptidoglicano</text>

      <rect x="195" y="35" width="140" height="90" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="265" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">FUNGOS</text>
      <text x="265" y="80" text-anchor="middle" font-size="10" fill="#15803d">Eucarionte</text>
      <text x="265" y="102" text-anchor="middle" font-weight="bold" font-size="11" fill="#14532d">Quitina / Ergosterol</text>

      <rect x="360" y="35" width="140" height="90" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
      <text x="430" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#b45309">PROTOZOÁRIOS</text>
      <text x="430" y="80" text-anchor="middle" font-size="10" fill="#d97706">Eucarionte</text>

      <rect x="525" y="35" width="145" height="90" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="597" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#991b1b">VÍRUS</text>
      <text x="597" y="80" text-anchor="middle" font-size="10" fill="#dc2626">Acelular</text>
    </svg>`,
    capitulos: [
      {
        titulo: "1. Diferenciação Celular e Microbiota Humana",
        subtitulo: "Procariontes, Eucariontes, Acelulares e Exclusão Competitiva",
        conteudo: "• Bactérias: Procariontes unicelulares com parede de Peptidoglicano.\n• Fungos: Eucariontes com parede de Quitina e Ergosterol na membrana.\n• Protozoários: Eucariontes sem parede celular rígida.\n• Vírus: Acelulares, parasitas intracelulares obrigatórios.\n• Microbiota Humana: Protege por exclusão competitiva e produz Vitaminas K e B12.",
        conceitoChave: "Microbiota intestinal protege por exclusão competitiva e sintetiza vitaminas K e B12."
      }
    ],
    conceitosFundamentais: [
      "Bactérias são procariontes com parede de peptidoglicano.",
      "Fungos são eucariontes com parede de quitina.",
      "Vírus são acelulares e parasitas intracelulares obrigatórios."
    ],
    relacaoMedicina: "Base para microbiologia clínica e racional de antibiogramas.",
    errosComuns: ["Confundir bactérias (procariontes) com fungos (eucariontes)."],
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
    resumo: "Vírus são parasitas intracelulares obrigatórios. Vírion é a partícula extracelular madura. Vírus envelopados (com bicamada lipídica) são sensíveis a detergentes e álcool 70%. Destacam-se as vacinas de poliomielite: Salk (IPV - inativada injetável) e Sabin (OPV - atenuada oral).",
    imagemUrl: "/images/viral_structure.jpg",
    imagemLegenda: "Arquitetura Viral LUmed: Comparação entre Vírus Envelopados e Vírus Nus.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="330" height="140" rx="16" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="175" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#991b1b">VÍRUS ENVELOPADOS</text>
      <text x="175" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Possuem Bicamada Lipídica</text>
      <text x="175" y="85" text-anchor="middle" font-size="11" fill="#7f1d1d">Sensíveis a Álcool 70%, Sabão e Calor</text>

      <rect x="360" y="10" width="330" height="140" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="525" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#1e40af">VÍRUS NÃO ENVELOPADOS (NUS)</text>
      <text x="525" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">Capsídeo Proteico Rígido</text>
      <text x="525" y="85" text-anchor="middle" font-size="11" fill="#1e3a8a">Resistentes a Álcool, pH Ácido e Fômites</text>
    </svg>`,
    capitulos: [
      {
        titulo: "1. Estrutura Viral e Vacinas de Poliomielite",
        subtitulo: "Salk (IPV - Inativada Injetável) vs Sabin (OPV - Atenuada Oral)",
        conteudo: "• Envelope lipídico: Solubilizado por álcool 70% e detergentes.\n• Salk (IPV): Vírus inativado injetável; imunidade sistêmica IgG sem risco de paralisia.\n• Sabin (OPV): Vírus vivo atenuado oral (gotinha); induz IgA de mucosa intestinal.",
        conceitoChave: "Salk = Inativada Injetável (IPV); Sabin = Oral Vivo Atenuado (OPV)."
      }
    ],
    conceitosFundamentais: [
      "Vírion é a partícula viral completa e infectante.",
      "Envelope lipídico confere sensibilidade ao álcool 70% e detergentes.",
      "Vacina Salk é inativada injetável (IPV); Sabin é atenuada oral (OPV)."
    ],
    relacaoMedicina: "Fundamento de biossegurança hospitalar, higienização e vacinologia.",
    errosComuns: ["Confundir a vacina Salk (injetável inativada) com a Sabin (oral viva atenuada)."],
    questoesRelacionadas: [41, 42, 43, 44, 45]
  },
  {
    id: 10,
    discipline: "microbiologia",
    disciplineName: "Microbiologia, Virologia e Síndromes Gripais",
    moduloNumero: 3,
    assunto: "Módulo 3 — Vírus Influenza (Gripe)",
    icone: "Wind",
    descricao: "Tipos (A, B, C), estrutura (HA, NA, M2), mecanismos de variação antigênica (Drift vs Shift), pandemias e antiviral Oseltamivir.",
    resumo: "Influenza é um vírus -ssRNA segmentado envelopado (família Orthomyxoviridae). Possui espículas de Hemaglutinina (HA - entrada) e Neuraminidase (NA - liberação). A Deriva Antigênica (Drift) causa epidemias sazonais anuais; o Salto Antigênico (Shift) gera PANDEMIAS. O Oseltamivir inibe a Neuraminidase.",
    imagemUrl: "/images/influenza_structure.jpg",
    imagemLegenda: "Arquitetura do Vírus Influenza A LUmed: Glicoproteínas HA (Entrada), NA (Liberação) e Canal M2.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="330" height="140" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="175" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#1e40af">DERIVA ANTIGÊNICA (DRIFT)</text>
      <text x="175" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">Mutações Pontuais Contínuas</text>
      <text x="175" y="85" text-anchor="middle" font-size="11" fill="#1e3a8a">EPIDEMIAS SAZONAIS Anuais</text>

      <rect x="360" y="10" width="330" height="140" rx="16" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="525" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#991b1b">SALTO ANTIGÊNICO (SHIFT)</text>
      <text x="525" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Rearranjo de Segmentos RNA</text>
      <text x="525" y="85" text-anchor="middle" font-size="11" fill="#7f1d1d">PANDEMIAS GLOBAIS (ex: H1N1)</text>
    </svg>`,
    capitulos: [
      {
        titulo: "1. Estrutura e Ciclo Replicativo do Influenza",
        subtitulo: "HA, NA, Oseltamivir e Replicação Nuclear Incomum",
        conteudo: "• HA (Hemaglutinina): Reconhece o receptor de ácido siálico para ENTRADA por endocitose.\n• NA (Neuraminidase): Cliva o ácido siálico para LIBERAÇÃO de vírions.\n• Oseltamivir (Tamiflu): Inibidor seletivo da Neuraminidase.\n• Replicação Nuclear: Embora seja vírus de RNA, a transcrição e replicação do Influenza ocorrem dentro do NÚCLEO celular (característica incomum para vírus de RNA).\n• Ciclo Replicativo: 1. Adsorção (HA no ácido siálico) → 2. Penetração (endocitose) → 3. Desencapsidação → 4. Transcrição/Replicação no Núcleo → 5. Síntese Proteica nos ribossomos → 6. Montagem → 7. Brotamento e liberação mediada pela NA.",
        conceitoChave: "HA = Entrada; NA = Liberação (Inibida por Oseltamivir). Replicação de RNA no NÚCLEO."
      }
    ],
    conceitosFundamentais: [
      "HA liga ao ácido siálico; NA libera o vírus recém-formado.",
      "Oseltamivir inibe a Neuraminidase.",
      "Drift causa epidemias sazonais; Shift gera pandemias globais."
    ],
    relacaoMedicina: "Tratamento precoce de SRAG e vigilância epidemiológica global.",
    errosComuns: ["Esquecer que a transcrição do Influenza ocorre no núcleo celular."],
    questoesRelacionadas: [46, 47, 48, 49, 50]
  },
  {
    id: 11,
    discipline: "microbiologia",
    disciplineName: "Microbiologia, Virologia e Síndromes Gripais",
    moduloNumero: 4,
    assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios",
    icone: "Stethoscope",
    descricao: "Rinovírus (tropismo a 33-35°C), Adenovírus (dsDNA, fibras, exsudato), VSR (Sincícios, Proteína F, Abrysvo, Palivizumabe, Nirsevimabe) e SARS-CoV-2 (Spike, ACE2, TMPRSS2).",
    resumo: "Compreende a fisiopatologia dos principais agentes do trato respiratório: Rinovírus (resfriado por tropismo a 33-35°C), Adenovírus (faringite com conjuntivite), VSR (sincícios via Proteína F, bronquiolite pediátrica com prevenções por Abrysvo® materna, Palivizumabe e Nirsevimabe) e SARS-CoV-2 (Spike no receptor ACE2 via TMPRSS2).",
    imagemUrl: "/images/microbiology_overview.jpg",
    imagemLegenda: "Principais Vírus Respiratórios LUmed: Rinovírus, Adenovírus, VSR e SARS-CoV-2.",
    svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="160" height="140" rx="14" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="90" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#1e40af">RINOVÍRUS</text>
      <text x="90" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#1d4ed8">Replica 33-35°C</text>

      <rect x="180" y="10" width="160" height="140" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="260" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#166534">ADENOVÍRUS</text>
      <text x="260" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">dsDNA (Fibras)</text>

      <rect x="350" y="10" width="160" height="140" rx="14" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
      <text x="430" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#b45309">VSR</text>
      <text x="430" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#92400e">Proteína F ➔ Sincícios</text>

      <rect x="520" y="10" width="170" height="140" rx="14" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="605" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#991b1b">SARS-CoV-2</text>
      <text x="605" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#7f1d1d">Spike ➔ ACE2 / TMPRSS2</text>
    </svg>`,
    capitulos: [
      {
        titulo: "1. Agentes Virais Respiratórios",
        subtitulo: "Diferenciação Fisiopatológica e Clínica",
        conteudo: "• Rinovírus: +ssRNA nu; replicação otimizada a 33-35°C na nasofaringe.\n• Adenovírus: dsDNA nu com fibras; causa febre faringoconjuntival e exsudato amigdaliano.\n• VSR: -ssRNA envelopado; Proteína F induz sincícios necróticos na bronquiolite pediátrica.\n• SARS-CoV-2: +ssRNA envelopado; Proteína Spike (S) liga-se ao ACE2 com ativação por TMPRSS2.",
        conceitoChave: "VSR forma SINCÍCIOS; Rinovírus tem tropismo a 33-35°C; SARS-CoV-2 usa Spike/ACE2."
      }
    ],
    conceitosFundamentais: [
      "Rinovírus é restrito às vias aéreas superiores por causa de seu tropismo térmico (33-35°C).",
      "Adenovírus causa exsudato que simula infecção por Streptococcus pyogenes.",
      "VSR causa bronquiolite por formação de sincícios necróticos."
    ],
    relacaoMedicina: "Diagnóstico diferencial de infecções respiratórias virais na pediatria e adultos.",
    errosComuns: ["Usar antibióticos para tratar faringite por Adenovírus ou bronquiolite por VSR."],
    questoesRelacionadas: [51, 52, 53, 54, 55]
  },

  // =========================================================================
  // DISCIPLINA 3: PARASITOLOGIA & INFECTOLOGIA (Módulos 5, 6 e 7 - PDFs 1, 2, 3)
  // =========================================================================
  {
    id: 12,
    discipline: "parasitologia",
    disciplineName: "Parasitologia & Infectologia",
    moduloNumero: 5,
    assunto: "Módulo 5 — Tricuríase (Trichuris trichiura)",
    icone: "Bug",
    descricao: "Conceito, epidemiologia, taxonomia (tricocéfalo), dimorfismo sexual, ovos com tampões polares, habitat (ceco/cólon), ciclo geo-helmíntico, síndrome disentérica e prolapso retal.",
    resumo: "A Tricuríase é uma geo-helmintíase intestinal causada pelo nematódeo Trichuris trichiura (tricocéfalo). O ciclo exige maturação dos ovos no solo por 2 a 4 semanas até atingir a forma infectante (ovo embrionado L3). A porção anterior delgada penetra na mucosa do ceco e cólon. Em infecções maciças, gera Síndrome Disentérica Tricocefálica, anemia ferropriva, inapetência mediada por TNF-alfa e Prolapso Retal.",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="30" width="140" height="120" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
      <text x="100" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#b45309">1. ELIMINAÇÃO</text>
      <text x="100" y="80" text-anchor="middle" font-size="10" fill="#78350f">Ovo não-embrionado</text>
      <text x="100" y="100" text-anchor="middle" font-size="10" fill="#78350f">nas fezes humanas</text>

      <text x="190" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#d97706">➔</text>

      <rect x="210" y="30" width="150" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="285" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">2. SOLO (2-4 sem)</text>
      <text x="285" y="80" text-anchor="middle" font-size="10" fill="#15803d">Embrionamento</text>
      <text x="285" y="100" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#14532d">Forma L3 Infectante</text>

      <text x="380" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#16a34a">➔</text>

      <rect x="400" y="30" width="130" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="465" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#1e40af">3. INGESTÃO</text>
      <text x="465" y="80" text-anchor="middle" font-size="10" fill="#1d4ed8">Água / Alimentos</text>
      <text x="465" y="100" text-anchor="middle" font-size="10" fill="#1e3a8a">Geofagia em crianças</text>

      <text x="548" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#2563eb">➔</text>

      <rect x="565" y="30" width="115" height="120" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="622" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#991b1b">4. CECO / CÓLON</text>
      <text x="622" y="80" text-anchor="middle" font-size="10" fill="#dc2626">Fixação mucosa</text>
      <text x="622" y="100" text-anchor="middle" font-weight="bold" font-size="10" fill="#7f1d1d">Verme Adulto</text>
    </svg>`,
    imagemLegenda: "Ciclo Epidemiológico do Trichuris trichiura LUmed (Fonte: Material Fornecido pelo Usuário / UNEX MED).",
    capitulos: [
      {
        titulo: "1. Agente Etiológico e Morfologia de Trichuris trichiura",
        subtitulo: "Tricocéfalo: Aspecto em Chicote e Ovos Patognomônicos em Barril",
        conteudo: "• Agente: Nematódeo Trichuris trichiura (Filo Nematoda, Família Trichuridae). Conhecido como tricocéfalo (tricho = cabelo + cephalos = cabeça), pois possui extremidade anterior fina e porção posterior espessa em formato de chicote.\n• Dimorfismo Sexual: Macho (30-45 mm) possui extremidade posterior enrolada em espiral com espículo copulatório; Fêmea (35-50 mm) possui extremidade posterior reta e produz de 3.000 a 20.000 ovos por dia.\n• Ovos: Formato elíptico patognomônico semelhante a um barril ou limão, cor castanho-amarelada, com opérculos mucosos (tampões polares) nas duas extremidades. Eliminados NÃO embrionados nas fezes.",
        conceitoChave: "Ovos de T. trichiura em formato de BARRIL com TAMPÕES POLARES salientes são o achado patognomônico no EPF.",
        importanteMedicina: "Ovos recém-eliminados nas fezes NÃO são infectantes. Necessitam de 2 a 4 semanas no solo úmido e quente para maturarem até a larva L3."
      },
      {
        titulo: "2. Ciclo Biológico, Transmissão e Patogenia",
        subtitulo: "Fixação na Mucosa do Ceco e Mecanismo da Síndrome Disentérica",
        conteudo: "• Ciclo Monoxênico Geo-helmíntico: Ingestão de ovos embrionados L3 na água, alimentos contaminados ou mãos sujas (geofagia em crianças). No ceco e cólon ascendente, as larvas eclosam e a extremidade anterior delgada penetra profundamente na mucosa intestinal.\n• Mecanismo Patogênico: Danos mecânicos diretos e micro-hemorragias. A inapetência severa em crianças decorre do extravasamento de TNF-alfa produzido por macrófagos ativados da lâmina própria.\n• Complicações Maciças: Síndrome Disentérica Tricocefálica (diarreia crônica com muco e sangue, tenesmo) e Prolapso Retal (em crianças desnutridas pelo esforço defecatório repetido/tenesmo associado à hipotonia do assoalho pélvico).",
        conceitoChave: "Prolapso retal e tenesmo intenso em crianças desnutridas sugerem alta carga parasitária por Trichuris trichiura.",
        tabelaComparativa: {
          headers: ["Característica", "Trichuris trichiura (Tricuríase)", "Ascaris lumbricoides (Ascaridíase)"],
          rows: [
            ["Formato do Ovo", "Barril / Limão com tampões polares", "Oval / Arredondado com casca mamelonada"],
            ["Habitat Intestinal", "Ceco e Cólon Ascendente (Intestino Grosso)", "Jejuno e Íleo (Intestino Delgado)"],
            ["Migração Pulmonar", "NÃO realiza migração tecidual/pulmonar", "SIM realiza ciclo pulmonar (Síndrome de Löeffler)"],
            ["Fixação na Mucosa", "Penetra extremidade anterior delgada na mucosa", "Livre na luz intestinal sem fixação à mucosa"],
            ["Complicação Marcante", "Síndrome Disentérica / Prolapso Retal", "Obstrução Intestinal / Migração Errática Biliar"]
          ]
        },
        importanteMedicina: "Ao contrário de Ascaris, o Trichuris trichiura NÃO faz migração pulmonar. Não há Síndrome de Löeffler na tricuríase."
      },
      {
        titulo: "3. Diagnóstico Laboratorial e Tratamento",
        subtitulo: "EPF (Hoffman, Kato-Katz) e Anti-helmínticos",
        conteudo: "• Diagnóstico: Exame Parasitológico de Fezes (EPF) pelas técnicas de Hoffman-Pons-Janer (sedimentação espontânea) e Kato-Katz (método quantitativo de ovos por grama de fezes - OPG).\n• Tratamento de Escolha: Mebendazol (100 mg 2x/dia por 3 dias) ou Albendazol (400 mg/dia por 3 dias em infecções moderadas/graves). O Mebendazol inibe a captação de glicose e a polimerização de tubulina pelo parasito.\n• Medidas Complementares: Reposição de sulfato ferroso para anemia ferropriva e suporte nutricional.",
        conceitoChave: "Mebendazol e Albendazol inibem a polimerização da tubulina celular do nematódeo.",
        importanteMedicina: "O Albendazol é contraindicado no 1º trimestre da gestação."
      }
    ],
    conceitosFundamentais: [
      "Trichuris trichiura (tricocéfalo) habita o ceco e cólon ascendente.",
      "Ovos têm formato de BARRIL com TAMPÕES POLARES salientes.",
      "Ciclo geo-helmíntico obriga maturação de 2 a 4 semanas no solo (forma L3 infectante).",
      "Não faz ciclo pulmonar/Löeffler.",
      "Infecções maciças causam disenteria, tenesmo, anemia, TNF-alfa elevado e prolapso retal."
    ],
    relacaoMedicina: "Diagnóstico diferencial de diarreia crônica infantil, anemia ferropriva e prolapso retal na emergência pediátrica.",
    errosComuns: [
      "Acreditar que o Trichuris trichiura realiza migração pelos pulmões.",
      "Achar que ovos recém-eliminados nas fezes infectam por contágio direto imediato."
    ],
    questoesRelacionadas: [91, 92, 93, 94, 95]
  },
  {
    id: 13,
    discipline: "parasitologia",
    disciplineName: "Parasitologia & Infectologia",
    moduloNumero: 6,
    assunto: "Módulo 6 — Ascaridíase (Ascaris lumbricoides)",
    icone: "Bug",
    descricao: "Epidemiologia, morfologia (fêmea retilínea vs macho curvado), ovos férteis mamelonados vs inférteis, ciclo pulmonar (Síndrome de Löeffler), maturação no intestino delgado, obstrução intestinal e migração errática.",
    resumo: "A Ascaridíase é a helmintíase mais prevalente no mundo (~800 milhões de infectados), causada pelo Ascaris lumbricoides. A infecção ocorre pela ingestão de ovos férteis embrionados (L3). As larvas eclosam no intestino delgado, atravessam a mucosa e realizam migração tecidual obrigatória (fígado -> coração -> capilares alveolares/pulmões), desencadeando a Síndrome de Löeffler (tosse, febre, infiltrado pulmonar migratório e eosinofilia). Após ascenderem pela árvore respiratória e serem deglutidas, tornam-se vermes adultos no intestino delgado, onde podem causar obstrução mecânica e migração errática.",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="30" width="130" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="95" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1e40af">1. INGESTÃO L3</text>
      <text x="95" y="80" text-anchor="middle" font-size="10" fill="#1d4ed8">Ovo mamelonado</text>
      <text x="95" y="100" text-anchor="middle" font-size="10" fill="#1e3a8a">Eclosão Intestinal</text>

      <text x="175" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#2563eb">➔</text>

      <rect x="195" y="30" width="140" height="120" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="265" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#991b1b">2. FÍGADO & PULMÃO</text>
      <text x="265" y="80" text-anchor="middle" font-size="10" fill="#dc2626">Migração Tecidual</text>
      <text x="265" y="100" text-anchor="middle" font-weight="extrabold" font-size="10" fill="#7f1d1d">Síndrome de Löeffler</text>

      <text x="350" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#dc2626">➔</text>

      <rect x="370" y="30" width="140" height="120" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
      <text x="440" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309">3. DEGLUTIÇÃO</text>
      <text x="440" y="80" text-anchor="middle" font-size="10" fill="#d97706">Árvore respiratória</text>
      <text x="440" y="100" text-anchor="middle" font-size="10" fill="#92400e">Retorno ao Intestino</text>

      <text x="525" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#d97706">➔</text>

      <rect x="545" y="30" width="130" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="610" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#166534">4. ADULTO DELGADO</text>
      <text x="610" y="80" text-anchor="middle" font-size="10" fill="#15803d">200.000 ovos/dia</text>
      <text x="610" y="100" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">Obstrução / Biliar</text>
    </svg>`,
    imagemLegenda: "Ciclo Cardiopulmonar e Intestinal do Ascaris lumbricoides LUmed (Fonte: Material Fornecido / UNEX MED).",
    capitulos: [
      {
        titulo: "1. Agente Etiológico, Morfologia e Ovos Mamelonados",
        subtitulo: "Fêmea Gigante, Macho Cauda Curvada, Ovos Férteis e Inférteis",
        conteudo: "• Tamanho: Um dos maiores nematódeos intestinais humanos. Fêmeas medem 20-35 cm com extremidade posterior retilínea; Machos medem 15-30 cm com extremidade posterior curvada ventralmente (dimorfismo sexual evidente).\n• Produção de Ovos: Uma fêmea adulta produz até 200.000 ovos por dia no jejuno/íleo.\n• Ovo Fértil: Oval/arredondado com casca espessa revestida por camada externa MAMELONADA de mucopolissacarídeos. Contém célula-ovo organizada e alta resistência no solo.\n• Ovo Infértil: Mais alongado, irregular, com conteúdo interno desorganizado, produzido por fêmeas não fecundadas. Não embriona.",
        conceitoChave: "Ovo fértil com camada externa MAMELONada espessa confere extrema resistência no ambiente por meses a anos.",
        importanteMedicina: "Ovo recém-eliminado nas fezes NÃO é infectante. Precisa de dias/semanas no solo para formar a larva L3."
      },
      {
        titulo: "2. Ciclo Cardiopulmonar e Síndrome de Löeffler",
        subtitulo: "Passagem Larvária Tecidual Obriga Respiração Th2 e Eosinofilia",
        conteudo: "• Etapa 1: Ingestão de ovos embrionados L3 em água/hortaliças contaminadas. Eclosão no intestino delgado.\n• Etapa 2 (Migração Tecidual): Larvas atravessam a parede intestinal, ganham veias mesentéricas -> Fígado -> Coração Direito -> Capilares Alveolares nos Pulmões.\n• Etapa 3 (Fase Pulmonar): Larvas rompem capilares e sobem pelos alvéolos, bronquíolos, traqueia e faringe. Provocam resposta imune do padrão Th2 (IL-4, IL-5, IL-13) com eosinofilia intensa, tosse, sibilância, infiltrados pulmonares transitórios na radiografia (Síndrome de Löeffler).\n• Etapa 4: Deglutição das larvas para o intestino delgado, maturando em adultos em 4 a 8 semanas.",
        conceitoChave: "Síndrome de Löeffler: Infiltrado pulmonar migratório + Tosse/Dispneia + Eosinofilia periférica na fase de migração larvária pulmonar.",
        importanteMedicina: "EPF na fase pulmonar é NEGATIVO para ovos, pois os vermes adultos ainda não se formaram no intestino (período pré-patente de ~60 dias)."
      },
      {
        titulo: "3. Complicações Intestinais, Migração Errática e Tratamento",
        subtitulo: "Massa de Vermes, Colangite, Pancreatite, Albendazol e Conduta na Obstrução",
        conteudo: "• Obstrução Intestinal Mecânica: Ocorre em crianças com alta carga parasitária (novelo de vermes bloqueia a válvula íleo-cecal/íleo terminal).\n• Migração Errática: Sob febre alta, anestesia ou dose inadequada de vermífugo, vermes adultos migram para a Ampola de Vater/ducto colédoco (causando colangite/icterícia obstrutiva), ducto pancreático (pancreatite aguda) ou apêndice cecal (apendicite aguda).\n• Tratamento de Primeira Linha: Albendazol (400 mg dose única) ou Mebendazol (100 mg 2x/dia por 3 dias). Mecanismo: inibição da polimerização da tubulina.\n• Conduta na Obstrução Intestinal: Tratamento conservador com sonda nasogástrica, hidratação IV, óleo mineral por SNG e antiespasmódicos. Evitar anti-helmínticos paralíticos na fase aguda para não causar lise/obstrução irreversível.",
        conceitoChave: "Na obstrução por Ascaris, prioriza-se descompressão com óleo mineral e hidratação antes do antiparasitário.",
        tabelaComparativa: {
          headers: ["Fase da Doença", "Localização do Parasito", "Manifestação Clínica Marcante", "Diagnóstico Principal"],
          rows: [
            ["Fase Larvária (Pulmonar)", "Capilares alveolares / Alvéolos", "Síndrome de Löeffler (tosse, eosinofilia)", "Pesquisa de larvas no escarro / RX tórax (EPF negativo)"],
            ["Fase Adulta (Intestinal)", "Luz do Jejuno e Íleo", "Dor abdominal, desnutrição, suboclusão", "EPF (Ovos mamelonados férteis/inférteis)"],
            ["Fase Complicada (Errática)", "Ductos biliares, pancreáticos, apêndice", "Cólica biliar, icterícia, pancreatite, apendicite", "Ultrassonografia / Colangioressonância / Endoscopia"]
          ]
        },
        importanteMedicina: "O Albendazol e Mebendazol atuam na fase adulta intestinal. Na Síndrome de Löeffler, o quadro é autolimitado."
      }
    ],
    conceitosFundamentais: [
      "Ascaris lumbricoides é um nematódeo gigante que habita a luz do intestino delgado.",
      "Ovo fértil apresenta casca espessa MAMELONADA.",
      "Forma infectante = Ovo embrionado com larva L3.",
      "Migração pulmonar causa Síndrome de Löeffler com eosinofilia intensa.",
      "Complicações: Obstrução intestinal por novelo de vermes e migração errática para via biliar."
    ],
    relacaoMedicina: "Abordagem da eosinofilia no prontuário, emergência cirúrgica pediátrica e infectologia.",
    errosComuns: [
      "Solicitar EPF para diagnosticar Síndrome de Löeffler (falso-negativo no período pré-patente).",
      "Administrar vermífugo maciço imediatamente em quadros de obstrução intestinal aguda."
    ],
    questoesRelacionadas: [96, 97, 98, 99, 100]
  },
  {
    id: 14,
    discipline: "parasitologia",
    disciplineName: "Parasitologia & Infectologia",
    moduloNumero: 7,
    assunto: "Módulo 7 — Doença de Chagas (Trypanosoma cruzi)",
    icone: "Bug",
    descricao: "Carlos Chagas (1909), formas evolutivas (Tripomastigota, Amastigota, Epimastigota), vetores triatomíneos (barbeiros), transmissão vetorial x oral x congênita, fase aguda (Romaña/Chagoma) x crônica (Cardiopatia, Megaesôfago, Megacólon) e Benznidazol.",
    resumo: "A Doença de Chagas é uma zoonose causada pelo protozoário hemoflagelado Trypanosoma cruzi, descoberta por Carlos Chagas em 1909. Apresenta 3 formas morfológicas cruciais: Tripomastigota (circulante no sangue/fezes do vetor, não replica), Amastigota (intracelular nos tecidos humanos - miocárdio e plexos nervosos, multiplica por divisão binária) e Epimastigota (proliferativa no intestino do barbeiro). A transmissão vetorial clássica ocorre pela contaminação da pele/mucosa por FEZES do barbeiro (Triatoma, Rhodnius, Panstrongylus) após a picada. A transmissão oral (açaí, caldo de cana) é a principal causa de surtos agudos no Brasil. Na fase crônica, causa Cardiomiopatia Dilatada Chagásica (arritmias, BRD) e Formas Digestivas (Megaesôfago e Megacólon por destruição do plexo mioentérico de Auerbach e Meissner). Tratamento etiológico com Benznidazol.",
    svgDiagrama: `<svg viewBox="0 0 700 200" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="180" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="25" y="30" width="200" height="140" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="125" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#1e40af">TRIPOMASTIGOTA</text>
      <text x="125" y="78" text-anchor="middle" font-size="10" fill="#1d4ed8">Forma fusiforme flagelada</text>
      <text x="125" y="98" text-anchor="middle" font-size="10" fill="#1e3a8a">Circula no Sangue / Fezes</text>
      <text x="125" y="120" text-anchor="middle" font-weight="bold" font-size="11" fill="#2563eb">NÃO Replica nos tecidos</text>

      <rect x="250" y="30" width="200" height="140" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="350" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#991b1b">AMASTIGOTA</text>
      <text x="350" y="78" text-anchor="middle" font-size="10" fill="#dc2626">Forma oval sem flagelo</text>
      <text x="350" y="98" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#7f1d1d">INTRACELULAR nos tecidos</text>
      <text x="350" y="120" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Divisão Binária / Ninho</text>

      <rect x="475" y="30" width="200" height="140" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="575" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">EPIMASTIGOTA</text>
      <text x="575" y="78" text-anchor="middle" font-size="10" fill="#15803d">Forma do vetor inseto</text>
      <text x="575" y="98" text-anchor="middle" font-size="10" fill="#14532d">Intestino do Barbeiro</text>
      <text x="575" y="120" text-anchor="middle" font-weight="bold" font-size="11" fill="#16a34a">Multiplica no inseto</text>
    </svg>`,
    imagemLegenda: "Formas Evolutivas do Trypanosoma cruzi LUmed (Fonte: Material Fornecido / UNEX MED).",
    capitulos: [
      {
        titulo: "1. Descoberta de Carlos Chagas e Formas Parasitárias",
        subtitulo: "Tripomastigota, Amastigota (Ninhos Teciduais) e Epimastigota",
        conteudo: "• Marco Histórico (1909): Carlos Chagas descreveu em feito único o parasito, o vetor, os reservatórios (tatus, gambás) e a clínica humana.\n• Tripomastigota: Forma fusiforme com flagelo e membrana ondulante. Presente no sangue periférico humano e nas fezes do vetor. NÃO se multiplica.\n• Amastigota: Forma arredondada/oval, sem flagelo livre. É a forma REPLICATIVA INTRACELULAR no hospedeiro vertebrado (multiplica por divisão binária no miocárdio, neurônios entéricos, formando ninhos de amastigotas que rompem as células).\n• Epimastigota: Forma alongada presente no tubo digestório do vetor triatomíneo (Triatoma, Rhodnius, Panstrongylus). Multiplica-se no inseto mas NÃO infecta diretamente o mamífero.",
        conceitoChave: "Amastigotas são as únicas formas que se multiplicam por divisão binária DENTRO das células humanas.",
        importanteMedicina: "A lise celular causada pela ruptura dos ninhos de amastigotas desencadeia a intensa resposta inflamatória tecidual."
      },
      {
        titulo: "2. Mecanismos de Transmissão e Fase Aguda",
        subtitulo: "Transmissão por Fezes do Barbeiro, Via Oral, Sinal de Romaña e Chagoma",
        conteudo: "• Transmissão Vetorial Clássica: O barbeiro pica para repasto sanguíneo e DEFECA no local. O parasito está nas FEZES do inseto (não na saliva!). O prurido faz a pessoa coçar, introduzindo tripomastigotas metacíclicos na ferida ou mucosa.\n• Transmissão Oral (Surtos Agudos): Ingestão de alimentos contaminados com triatomíneos triturados (açaí, caldo de cana, carne de caça). Responsável pelos surtos agudos graves contemporâneos no Brasil.\n• Outras Vias: Congênita (transplacentária), transfusional e transplante de órgãos.\n• Fase Aguda: Parasitemia elevada. Sinais de porta de entrada: Sinal de Romaña (edema palpebral unilateral e indolor com dacrioadenite) e Chagoma de Inoculação (lesão cutânea eritematosa com enfartamento ganglionar). Pode evoluir com Miocardite Aguda e Meningoencefalite em crianças/imunossupressos.",
        conceitoChave: "Na transmissão vetorial, o T. cruzi é eliminado nas FEZES do barbeiro. Transmissão oral causa surtos agudos.",
        importanteMedicina: "O Sinal de Romaña (edema palpebral unilateral indolor) sugere porta de entrada conjuntival na fase aguda."
      },
      {
        titulo: "3. Fase Crônica (Cardíaca e Digestiva) e Tratamento",
        subtitulo: "Cardiomiopatia Dilatada, Megaesôfago, Megacólon e Benznidazol",
        conteudo: "• Forma Indeterminada: Sorologia positiva sem sintomas ou alterações em ECG/radiografias (dura 10-30 anos; ~50% dos pacientes).\n• Cardiopatia Chagásica Crônica: Principal causa de mortalidade. Inflamação crônica e fibrose do miocárdio resultam em cardiomiopatia dilatada, insuficiência cardíaca refratária, arritmias ventriculares, Bloqueio de Ramo Direito (BRD) + BDAS e tromboembolismo.\n• Forma Digestiva (Megaesôfago e Megacólon): O T. cruzi causa destruição/desnervação dos plexos nervosos entéricos (Auerbach mioentérico e Meissner submucoso). Leva a acalásia funcional do esôfago (disfagia progressiva de sólidos para líquidos, regurgitação) e dilatação do cólon sigmoide (constipação grave, fecaloma, volvo de sigmoide).\n• Diagnóstico: Fase Aguda = Exame direto de sangue (gota espessa/esfregaço, Strout); Fase Crônica = Sorologia IgG por 2 métodos distintos (ELISA, IFI, HAI).\n• Tratamento Etiológico: Benznidazol (1ª escolha no Brasil) ou Nifurtimox. Alta eficácia na fase aguda; na fase crônica, o benefício é controverso.",
        conceitoChave: "Megaesôfago e Megacólon resultam da destruição inflamatória dos plexos nervosos de Auerbach e Meissner.",
        tabelaComparativa: {
          headers: ["Fase / Forma", "Parasitemia", "Manifestação Clínica", "Método Diagnóstico de Escolha", "Conduta Terapêutica"],
          rows: [
            ["Fase Aguda", "ELEVADA", "Febre, Sinal de Romaña, Chagoma, Miocardite", "Exame Direto de Sangue (Gota Espessa / Strout)", "Benznidazol (Tratamento etiológico imediato)"],
            ["Forma Indeterminada", "BAIXA / Intermitente", "Assintomático (ECG e RX normais)", "Sorologia IgG (2 métodos positivos: ELISA + IFI)", "Acompanhamento clínico periódico / Benznidazol"],
            ["Forma Cardíaca Crônica", "BAIXA", "Cardiomiopatia dilatada, arritmias, BRD, IC", "Sorologia IgG + ECG + Ecocardiograma", "Manejo da IC (iECA, BB, Diuréticos) + Marcapasso"],
            ["Forma Digestiva Crônica", "BAIXA", "Megaesôfago (disfagia), Megacólon (fecaloma/volvo)", "Sorologia IgG + Esofagograma / Enema Opaco", "Dieta, laxantes, dilatação endoscópica / Cirurgia"]
          ]
        },
        importanteMedicina: "O diagnóstico na fase crônica exige OBRIGATORIAMENTE dois testes sorológicos com metodologias diferentes (ex: ELISA + IFI)."
      }
    ],
    conceitosFundamentais: [
      "Trypanosoma cruzi é um protozoário hemoflagelado transmitido pelas fezes do barbeiro.",
      "Amastigotas são intracelulares e se multiplicam por divisão binária no mamífero.",
      "Transmissão oral por alimentos (açaí/caldo de cana) causa surtos agudos.",
      "Romaña = Edema palpebral unilateral indolor.",
      "Forma cardíaca causa cardiomiopatia dilatada e BRD.",
      "Forma digestiva causa megaesôfago e megacólon por destruição dos plexos entéricos.",
      "Diagnóstico na fase crônica = 2 sorologias de metodologias distintas.",
      "Tratamento etiológico = Benznidazol."
    ],
    relacaoMedicina: "Cardiologia tropical, gastroenterologia (acalásia), infectologia e vigilância sanitária alimentar.",
    errosComuns: [
      "Afirmar que o barbeiro transmite o T. cruzi pela saliva durante a picada.",
      "Acreditar que métodos parasitológicos diretos no sangue são eficazes para diagnosticar a fase crônica."
    ],
    questoesRelacionadas: [101, 102, 103, 104, 105]
  },

  // =========================================================================
  // DISCIPLINA 4: PROPEDÊUTICA MÉDICA & SEMIOTÉCNICA (Módulos 8 a 11 - PDFs 5 a 8)
  // =========================================================================
  {
    id: 15,
    discipline: "propedeutica",
    disciplineName: "Propedêutica Médica & Semiotécnica",
    moduloNumero: 8,
    assunto: "Módulo 8 — Exame Físico Geral: Pele, Fâneros, Mucosas e Linfonodos",
    icone: "Stethoscope",
    descricao: "Histologia da pele (epiderme, derme, hipoderme), parâmetros de avaliação (coloração, umidade, textura, espessura, temperatura, elasticidade, turgor, sensibilidade, integridade, lesões elementares), mucosas, fâneros (cabelo, pelos, unhas) e semiologia dos linfonodos.",
    resumo: "O Exame Físico Geral ou Ectoscopia avalia sistematicamente o tegumento cutâneo e anexos. A pele é dividida em Epiderme (não vascularizada, camada basal com melanócitos), Derme (tecido conjuntivo vascularizado, fibras elásticas) e Hipoderme/TSC (tecido adiposo frouxo). A semiotécnica examina coloração (palidez, cianose, icterícia), umidade (seca em hipotireoidismo/avitaminose A vs sudorese), espessura (pinçamento de dobra sem TSC), elasticidade (retorno à tração; hiperelasticidade em Ehlers-Danlos), turgor (hidratação tecidual), sensibilidade (tátil - Meissner/Merkel; térmica - Krause/Ruffini; dolorosa - hipoalgesia na hanseníase) e Lesões Elementares (máculas, pápulas, vesículas, bolhas, úlceras, crostas, liquenificação). Os fâneros incluem unhas (ângulo de implantação <160°; hipocratismo digital = 180°) e pelos (hirsutismo x hipertricose). Os linfonodos (cabeça/pescoço ~300) são avaliados quanto a tamanho, consistência, mobilidade e dor.",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="30" width="200" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="130" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#1e40af">EPIDERME</text>
      <text x="130" y="78" text-anchor="middle" font-size="10" fill="#1d4ed8">Avascular / Células escamosas</text>
      <text x="130" y="98" text-anchor="middle" font-size="10" fill="#1e3a8a">Camada Basal + Melanócitos</text>

      <rect x="250" y="30" width="200" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="350" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">DERME (CÓRION)</text>
      <text x="350" y="78" text-anchor="middle" font-size="10" fill="#15803d">Vascularizada / Vasos & Nervos</text>
      <text x="350" y="98" text-anchor="middle" font-size="10" fill="#14532d">Fibras Colágenas e Elásticas</text>

      <rect x="470" y="30" width="200" height="120" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
      <text x="570" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#b45309">HIPODERME (TSC)</text>
      <text x="570" y="78" text-anchor="middle" font-size="10" fill="#d97706">Panículo Adiposo frouxo</text>
      <text x="570" y="98" text-anchor="middle" font-size="10" fill="#92400e">Folículos pilosos & Vasos</text>
    </svg>`,
    imagemLegenda: "Camadas da Pele e Parâmetros Semiológicos LUmed (Fonte: Material Fornecido / Porto, 2017).",
    capitulos: [
      {
        titulo: "1. Camadas da Pele e Parâmetros da Ectoscopia",
        subtitulo: "Coloração, Umidade, Espessura, Elasticidade, Turgor e Sensibilidade",
        conteudo: "• Epiderme: Camada superficial avascular. A renovação celular é contínua; os melanócitos da camada basal sintetizam melanina.\n• Derme (Córion): Tecido conjuntivo rico em vasos sanguíneos, linfáticos, fibras elásticas, glândulas sebáceas/sudoríparas e receptores sensoriais.\n• Hipoderme (TSC): Panículo adiposo frouxo que permite o deslizamento da pele.\n• Manobras Semiológicas:\n  - Espessura: Pinçamento de dobra cutânea com polegar e indicador sem englobar o TSC.\n  - Elasticidade: Capacidade da pele distender ao ser tracionada e retornar à posição. Hiperelasticidade ocorre na Síndrome de Ehlers-Danlos.\n  - Turgor: Avalia o conteúdo de água celular/intersticial pinçando pele + TSC. Turgor diminuído indica desidratação.\n  - Sensibilidade: Tátil (receptores de Meissner, Merkel e folículos pilosos), Térmica (Krause = frio; Ruffini = quente) e Dolorosa (pesquisada com ponta de agulha; hipoalgesia/analgesia é marco da Hanseníase).",
        conceitoChave: "Turgor avalia pele + tecido subcutâneo (hidratação); Elasticidade avalia retorno da pele à tração (tecido elástico).",
        importanteMedicina: "A perda de sensibilidade dolorosa e térmica em manchas hipocrômicas é o sinal clássico para o diagnóstico de Hanseníase."
      },
      {
        titulo: "2. Lesões Elementares da Pele e Mucosas",
        subtitulo: "Classificação em 6 Grupos Semiológicos",
        conteudo: "• 1. Alterações de Cor: Mácula ou Mancha (alteração de cor no mesmo plano do tegumento, sem relevo).\n• 2. Elevações Edematosas: Urticada (edema dérmico circunscrito pruriginoso).\n• 3. Formações Sólidas: Pápula (<1 cm superficial), Tubérculo (sólido dérmico), Nódulo (1-3 cm profundo em derme/hipoderme), Nodosidade (>3 cm) e Vegetação (lesão pediculada/couve-flor).\n• 4. Coleções Líquidas: Vesícula (<1 cm conteúdo claro), Bolha (>1 cm), Pústula (conteúdo purulento), Abscesso (coleção purulenta profunda) e Hematoma.\n• 5. Alterações de Espessura: Queratose, Liquenificação (acentuação dos sulcos por coçadura crônica), Esclerose e Atrofia.\n• 6. Perda e Reparação: Escama, Erosão/Exulceração (superficial epidérmica sem cicatriz), Úlcera (atinge derme com cicatriz), Fissura/Rágade, Crosta, Escara (necrose), Cicatriz e Queloide.",
        conceitoChave: "Erosão atinge apenas epiderme (não deixa cicatriz); Úlcera ultrapassa a derme (deixa cicatriz).",
        tabelaComparativa: {
          headers: ["Lesão Elementar", "Conteúdo / Natureza", "Profundidade", "Exemplo Clínico"],
          rows: [
            ["Mácula / Mancha", "Alteração de pigmento/vascular", "Plano da pele (sem relevo)", "Vitiligo / Melasma / Efélides"],
            ["Pápula", "Sólido elevação < 1 cm", "Epidérmica / Dérmica superficial", "Acne / Picada de inseto / Hanseníase"],
            ["Vesícula", "Líquido claro < 1 cm", "Intraepidérmica", "Herpes Simples / Varicela"],
            ["Bolha (Flictena)", "Líquido claro > 1 cm", "Subepidérmica", "Queimadura de 2º grau / Pênfigo"],
            ["Liquenificação", "Espessamento com sulcos", "Epidérmico crônico", "Dermatite atópica por coçadura"]
          ]
        },
        importanteMedicina: "Reconhecimento das lesões elementares direciona o diagnóstico dermatológico e infeccioso."
      },
      {
        titulo: "3. Fâneros (Unhas, Pelos) e Exame dos Linfonodos",
        subtitulo: "Hipocratismo Digital, Hirsutismo e Cadeias Ganglionares",
        conteudo: "• Unhas: Ângulo de implantação normal é < 160°. No Hipocratismo Digital (baqueteamento digital), o ângulo é de ~180° com aumento do diâmetro falângico, indicando hipóxia crônica (DPOC, neoplasia pulmonar, cardiopatia cianótica) ou doença inflamatória intestinal. Onicólise é o descolamento da lâmina ungueal.\n• Pelos: Hirsutismo é o aumento de pelos terminais masculinos na mulher em locais androgênio-dependentes (barba, tórax). Hipertricose é o aumento generalizado de pelos não sexuais.\n• Linfonodos: A cabeça e pescoço possuem ~300 linfonodos (30% do total do corpo). Avalia-se localização, tamanho, consistência (amolecida, fibroelástica, endurecida/pétrea), mobilidade (móveis vs aderidos a planos profundos) e dor. Linfonodo pétreo e indolor sugere metátese neoplásica; linfonodo doloroso com rubor sugere linfadenite infecciosa aguda.",
        conceitoChave: "Hipocratismo digital (ângulo ungueal de 180°) é sinal de hipóxia crônica ou doença sistêmica.",
        importanteMedicina: "O linfonodo de Virchow (supraclavicular esquerdo endurecido) sugere metástase de adenocarcinoma gástrico ou abdominal."
      }
    ],
    conceitosFundamentais: [
      "Epiderme é avascular; Derme é rica em vasos e nervos; Hipoderme é panículo adiposo.",
      "Turgor avalia hidratação; Elasticidade avalia fibras elásticas cutâneas.",
      "Hipoalgesia em mancha cutânea é marco da Hanseníase.",
      "Hipocratismo digital (ângulo de 180°) indica hipóxia tecidual crônica.",
      "Linfonodos pétreos e indolores sugerem neoplasia maligna."
    ],
    relacaoMedicina: "Semiotécnica fundamental para o exame físico de admissão hospitalar e consulta médica.",
    errosComuns: [
      "Confundir turgor (hidratação) com elasticidade da pele.",
      "Confundir hirsutismo (pelos masculinos em mulher por androgênios) com hipertricose."
    ],
    questoesRelacionadas: [116, 117, 118, 119, 120]
  },
  {
    id: 16,
    discipline: "propedeutica",
    disciplineName: "Propedêutica Médica & Semiotécnica",
    moduloNumero: 9,
    assunto: "Módulo 9 — Antropometria e Avaliação do Estado Nutricional",
    icone: "Stethoscope",
    descricao: "Medidas antropométricas: Tipos de peso (atual, usual, ideal, corrigido, ajustado, estimado, seco), aferição em acamados, altura/estatura (5 pontos de contato, altura do joelho, envergadura, altura recumbente), IMC (fórmula e classificação), circunferências (cintura, quadril, panturrilha/sarcopenia), dobras cutâneas (DCB, DCT, DCSE, DCCI), desenvolvimento físico e avaliação da desnutrição/desidratação.",
    resumo: "A Antropometria mensura as variações físicas e a composição corporal. O Peso Corporal inclui peso atual, usual/habitual, ideal (via IMC), corrigido (amputados), ajustado (prescrição de dietas), estimado (fórmulas de Chumlea com altura do joelho e circunferência do braço) e peso seco (descontando ascites e edemas). A Estatura é aferida em estadiômetro com 5 pontos de contato (calcanhares, panturrilhas, glúteos, escápulas, ombros) ou estimada pela Altura do Joelho em idosos/acamados. A Envergadura (distância dactilion-dactilion) equivale à altura. O IMC [Peso (kg) / Altura² (m)] classifica eutrofia (18.5-24.9 kg/m²), sobrepeso (≥25) e obesidade (≥30). A Circunferência da Cintura (CC) reflete gordura visceral e risco cardiovascular. A Circunferência da Panturrilha (CP < 31 cm) diagnostica sarcopenia em idosos. As Dobras Cutâneas (trícipital DCT, bicipital DCB, subescapular DCSE, suprailíaca DCCI) estimam o Tecido Adiposo Subcutâneo (TAS). A Desnutrição em adultos exige ≥ 2 critérios (perda de peso, ingestão insuficiente, perda muscular, perda de gordura, edema, força de preensão reduzida por dinamômetro).",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="350" y="35" text-anchor="middle" font-weight="extrabold" font-size="14" fill="#0f172a">CLASSIFICAÇÃO DO IMC (OMS / ADULTOS)</text>
      <rect x="30" y="55" width="100" height="50" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="80" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#1e40af">&lt; 18.5</text>
      <text x="80" y="92" text-anchor="middle" font-size="10" fill="#1d4ed8">Baixo Peso</text>

      <rect x="140" y="55" width="110" height="50" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <text x="195" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#166534">18.5 - 24.9</text>
      <text x="195" y="92" text-anchor="middle" font-weight="extrabold" font-size="10" fill="#15803d">Eutrófico</text>

      <rect x="260" y="55" width="110" height="50" rx="8" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="315" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#b45309">25.0 - 29.9</text>
      <text x="315" y="92" text-anchor="middle" font-size="10" fill="#d97706">Sobrepeso</text>

      <rect x="380" y="55" width="90" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="425" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#991b1b">30 - 34.9</text>
      <text x="425" y="92" text-anchor="middle" font-size="10" fill="#dc2626">Obesidade I</text>

      <rect x="480" y="55" width="90" height="50" rx="8" fill="#fef2f2" stroke="#f87171" stroke-width="1.5"/>
      <text x="525" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#991b1b">35 - 39.9</text>
      <text x="525" y="92" text-anchor="middle" font-size="10" fill="#dc2626">Obesidade II</text>

      <rect x="580" y="55" width="90" height="50" rx="8" fill="#7f1d1d"/>
      <text x="625" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#ffffff">≥ 40.0</text>
      <text x="625" y="92" text-anchor="middle" font-weight="bold" font-size="10" fill="#fca5a5">Obesidade III</text>

      <text x="350" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#475569">Fórmula: IMC = Peso (kg) / [Altura (m)]²</text>
    </svg>`,
    imagemLegenda: "Classificação de IMC e Parâmetros Antropométricos LUmed (Fonte: Material Fornecido / UNEX MED).",
    capitulos: [
      {
        titulo: "1. Tipos de Peso e Técnicas de Aferição",
        subtitulo: "Peso Atual, Usual, Corregido, Ajustado, Estimado e Seco",
        conteudo: "• Peso Atual: Aferido no momento do exame em balança calibrada (paciente descalço, roupas leves, avaliador à esquerda).\n• Peso Usual/Habitual: Peso mantido por maior período de tempo; referência para perda ponderal involuntária recente.\n• Peso Corrigido: Calculado para pacientes amputados subtraindo a porcentagem do membro ausente.\n• Peso Ajustado: Usado para prescrição dietética em obesos [Peso Ideal + (Peso Atual - Peso Ideal) x 0.25].\n• Peso Estimado: Calculado via equações de Chumlea (usando altura do joelho e circunferência do braço) quando o paciente é acamado.\n• Peso Seco: Peso corporal livre de líquido acumulado (descontando ascite e edemas).",
        conceitoChave: "Peso Seco desconta o acúmulo de edema e ascite na avaliação do paciente hipervolêmico."
      },
      {
        titulo: "2. Estatura, Envergadura e Índice de Massa Corporal (IMC)",
        subtitulo: "5 Pontos de Contato, Altura do Joelho e Classificação Nutricional",
        conteudo: "• Estadiômetro: Aferição ortostática com 5 pontos em contato com a haste vertical: calcanhares, panturrilhas, glúteos, escápulas e ombros.\n• Altura do Joelho: Medida entre o calcanhar e a superfície anterior da coxa com joelho fletido a 90°; estimativa precisa de estatura em idosos acamados pois não sofre alteração com o envelhecimento.\n• Altura Recumbente: Aferida no leito; superestima a altura real em ~3 cm nos homens e ~4 cm nas mulheres.\n• IMC: Peso (kg) / Altura² (m). Baixo peso (<18.5), Eutrófico (18.5-24.9), Sobrepeso (25-29.9), Obesidade I (30-34.9), Obesidade II (35-39.9) e Obesidade III (≥40).\n• Limitação do IMC: Não distingue massa magra (muscular) de massa gorda (adiposa) nem edemas.",
        conceitoChave: "Altura do joelho é a melhor estimativa de estatura em idosos acamados por não sofrer redução pela compressão vertebral.",
        importanteMedicina: "A Circunferência da Cintura (CC) avalia a gordura visceral abdominal (risco cardiovascular elevado se >88 cm em mulheres e >102 cm em homens)."
      },
      {
        titulo: "3. Circunferências, Dobras Cutâneas e Avaliação da Desnutrição",
        subtitulo: "Sarcopenia (Panturrilha), Pregas Adiposas e Diagnóstico da Desnutrição",
        conteudo: "• Circunferência da Panturrilha (CP): Medida no maior diâmetro da perna. CP < 31 cm indica depleção de massa muscular e sarcopenia em idosos.\n• Dobras Cutâneas (Pregas): Mensuradas com adipômetro/plicômetro no lado direito. Tricipital (DCT), Bicipital (DCB), Subescapular (DCSE) e Suprailíaca (DCCI). Estimam o tecido adiposo subcutâneo (TAS).\n• Diagnóstico Clínico da Desnutrição em Adultos (≥ 2 critérios): Ingestão energética insuficiente, perda de peso involuntária, perda de gordura subcutânea, perda de massa muscular, acúmulo de líquido (edema mascarando peso) ou força de preensão manual reduzida no dinamômetro.",
        conceitoChave: "Circunferência da Panturrilha < 31 cm é o marcador mais sensível para diagnóstico de Sarcopenia no idoso."
      }
    ],
    conceitosFundamentais: [
      "Peso seco desconta o excesso de edemas e ascite.",
      "5 pontos de contato na parede para estadiômetro: calcanhares, panturrilhas, glúteos, escápulas e ombros.",
      "Altura do joelho estima a estatura sem viés do envelhecimento.",
      "IMC = kg/m²; Eutrofia entre 18.5 e 24.9 kg/m².",
      "Circunferência da Panturrilha < 31 cm diagnostica sarcopenia.",
      "Força de preensão manual no dinamômetro avalia capacidade funcional na desnutrição."
    ],
    relacaoMedicina: "Nutrologia médica, geriatria, terapia nutricional enteral/parenteral e endocrinologia.",
    errosComuns: [
      "Usar o IMC isoladamente para avaliar atletas com elevada massa muscular hipertrófica.",
      "Confundir altura recumbente com altura real sem considerar a superestimativa de 3-4 cm."
    ],
    questoesRelacionadas: [121, 122, 123, 124, 125]
  },
  {
    id: 17,
    discipline: "propedeutica",
    disciplineName: "Propedêutica Médica & Semiotécnica",
    moduloNumero: 10,
    assunto: "Módulo 10 — Impressão Geral, Nível de Consciência, Fácies e Atitudes no Leito",
    icone: "Stethoscope",
    descricao: "Somatoscopia/Ectoscopia, avaliação do estado geral (BEG, REG, REG), níveis de consciência (SRAA: Lúcido, Obnubilado, Sonolento, Confuso, Torporoso, Comatoso, Escala de Glasgow), distúrbios da fala e linguagem (Disfonia, Dislalia, Disartria, Disfasia/Afasia), tipos de Fácies semiológicas e Atitudes/Decúbitos no leito (voluntárias x involuntárias: opistótono, ortopneia, sinal de Bell).",
    resumo: "A Impressão Geral (Somatoscopia ou Ectoscopia) fornece a visão global do paciente. O Estado Geral é classificado em Bom (BEG), Regular (REG) ou Ruim (REG). O Nível de Consciência é mantido pelo Sistema Reticular Ativador Ascendente (SRAA). Os estados alterados progridem de Lúcido/Orientado para Obnubilação (alerta moderadamente comprometido), Sonolência (desperta com estímulo leve, responde e dorme), Confusão Mental (perda de atenção, desorientação temporoespacial, ilusões), Torpor/Estupor (desperta apenas com estímulos nociceptivos fortes) e Coma (ausência de despertar). A Escala de Coma de Glasgow (GCS) avalia Abertura Ocular, Resposta Verbal e Resposta Motora. Os distúrbios de fala abrangem Disfonia/Afonia (timbre/laringe), Dislalia (troca de fonemas), Disartria (articulação/músculos) e Disfasia/Afasia (lesão cortical do hemisfério dominante). As Fácies patológicas incluem Hipocrática (peritonite/doença terminal), Renal (edema periorbitário), Leonina (hanseníase virchowiana), Adenoidiana (boca aberta), Basedowiana (exoftalmia/hipertireoidismo), Mixedematosa (hipotireoidismo), Cushingoide (lua cheia), Parkinsoniana (em máscara) e Paralisia Facial Periférica (lagoftalmia/sinal de Bell, apagamento de sulcos). As Atitudes no Leito se dividem em Voluntárias (Ortopneia na IC, Genupeitoral na pericardite, Cócoras na Tetralogia de Fallot) e Involuntárias (Passiva no coma, Ortótono, Opistótono no tétano/meningite, Emprostótono, Posição em Gatilho na meningite infantil).",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <text x="350" y="35" text-anchor="middle" font-weight="extrabold" font-size="14" fill="#0f172a">ESCALA GRADUADA DO NÍVEL DE CONSCIÊNCIA (SRAA)</text>
      
      <rect x="25" y="55" width="115" height="50" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <text x="82" y="75" text-anchor="middle" font-weight="extrabold" font-size="10" fill="#166534">LÚCIDO</text>
      <text x="82" y="92" text-anchor="middle" font-size="9" fill="#15803d">Orientado Tempo/Espaço</text>

      <rect x="150" y="55" width="115" height="50" rx="8" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="207" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#1e40af">OBNUBILAÇÃO</text>
      <text x="207" y="92" text-anchor="middle" font-size="9" fill="#1d4ed8">Alerta diminuído</text>

      <rect x="275" y="55" width="115" height="50" rx="8" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="332" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#b45309">SONOLÊNCIA</text>
      <text x="332" y="92" text-anchor="middle" font-size="9" fill="#d97706">Desperta com leve toque</text>

      <rect x="400" y="55" width="125" height="50" rx="8" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5"/>
      <text x="462" y="75" text-anchor="middle" font-weight="bold" font-size="10" fill="#991b1b">TORPOR / ESTUPOR</text>
      <text x="462" y="92" text-anchor="middle" font-size="9" fill="#dc2626">Só desperta a dor forte</text>

      <rect x="535" y="55" width="135" height="50" rx="8" fill="#7f1d1d"/>
      <text x="602" y="75" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#ffffff">COMA</text>
      <text x="602" y="92" text-anchor="middle" font-size="9" fill="#fca5a5">Ausência de despertar</text>

      <text x="350" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#475569">Avaliação pelo Sistema Reticular Ativador Ascendente (SRAA)</text>
    </svg>`,
    imagemLegenda: "Gradação do Nível de Consciência e Fácies Semiológicas LUmed (Fonte: Material Fornecido / Porto, 2019).",
    capitulos: [
      {
        titulo: "1. Avaliação do Nível de Consciência e Fala",
        subtitulo: "SRAA, Escala de Glasgow, Disfonia, Dislalia, Disartria e Disfasia",
        conteudo: "• Sistema Reticular Ativador Ascendente (SRAA): Estrutura do tronco encefálico responsável pelo estado de vigília.\n• Gradação de Consciência: Lúcido (orientado auto e alopsiquicamente) -> Obnubilado (alerta levemente turvo) -> Sonolento (desperta fácil) -> Confuso (desorientação temporoespacial, ilusões) -> Torporoso/Estuporoso (somente desperta a estímulos dolorosos intensos) -> Comatoso (sem resposta motora ou verbal reflexa útil).\n• Distúrbios da Linguagem:\n  - Disfonia / Afonia: Alteração do timbre ou tom da voz (problema na laringe/pregas vocais).\n  - Dislalia: Troca de fonemas ou letras (ex: 'tasa' por 'casa', comum em crianças e disritmolalia/gagueira).\n  - Disartria: Alteração na articulação dos músculos da fonação (voz arrastada na ataxia cerebelar ou baixa/monótona no Parkinsonismo).\n  - Disfasia / Afasia: Perturbação da elaboração cortical da linguagem no hemisfério dominante (Sensorial/Wernicke vs Motora/Broca).",
        conceitoChave: "Disartria é defeito na articulação muscular da fala; Disfasia é lesão cortical do hemisfério cerebral dominante.",
        importanteMedicina: "Na Afasia de Broca (motora), o paciente entende o que lhe é dito mas não consegue falar; na Afasia de Wernicke (sensorial), fala fluentemente mas sem nexo e não compreende."
      },
      {
        titulo: "2. Fácies Semiológicas e Reconhecimento Clínico",
        subtitulo: "Fácies Hipocrática, Basedowiana, Mixedematosa, Cushingoide e Paralisia Facial",
        conteudo: "• Fácies: Expressão fisionômica e traços anatômicos faciais que sugerem diagnóstico imediato.\n• Principais Fácies Semiológicas:\n  - Hipocrática: Olhos afundados, nariz afilado, suor frio e palidez; indica gravidade extrema (peritonite, choque, agonia).\n  - Basedowiana: Exoftalmia (olhos saltados), fenda palpebral aumentada e olhar assustado; hipertireoidismo (Doença de Graves).\n  - Mixedematosa: Rosto embotado, edema periorbitário, pele seca/amarelada, cabelos secos e madarose (perda de sobrancelhas); hipotireoidismo grave.\n  - Cushingoide (Lua Cheia): Rosto arredondado, bochechas avermelhadas, acne e hirsutismo; excesso de corticoide/Síndrome de Cushing.\n  - Leonina: Espessamento da pele da face com sulcos profundos e perda de sobrancelhas; Hanseníase Virchowiana.\n  - Paralisia Facial Periférica (Nervo Facial / VII par): Apagamento dos sulcos nasogeniano e frontal do lado afetado, desvio da comissura labial para o lado SADIO, e Lagoftalmia (incapacidade de fechar o olho) com Sinal de Bell (olho gira para cima ao tentar fechar).",
        conceitoChave: "Na paralisia facial periférica (VII par), a comissura labial desvia para o lado SADIO e há Sinal de Bell.",
        tabelaComparativa: {
          headers: ["Fácies Semiológica", "Características Marcantes", "Condição / Doença Associada"],
          rows: [
            ["Fácies Basedowiana", "Exoftalmia, olhar assustado, hiperemia", "Hipertireoidismo (Doença de Graves)"],
            ["Fácies Mixedematosa", "Edema facial, pele seca, madarose, olhar apático", "Hipotireoidismo Crônico Grave"],
            ["Fácies Cushingoide", "Face em lua cheia, acne, rubor, hirsutismo", "Síndrome de Cushing / Corticoidismo exógeno"],
            ["Fácies Parkinsoniana", "Fácies em máscara, inexpressiva, olhar fixo", "Doença de Parkinson / Parkinsonismo"],
            ["Fácies Leonina", "Espessamento lepromatoso, lepromas na face", "Hanseníase forma Virchowiana"]
          ]
        },
        importanteMedicina: "O Sinal de Bell (olho desvia para cima e para fora ao tentar fechar as pálpebras) diferencia a Paralisia Facial Periférica (lesão do VII par) da Paralisia Central."
      },
      {
        titulo: "3. Atitudes e Decúbitos Preferidos no Leito",
        subtitulo: "Atitudes Voluntárias vs Involuntárias (Opistótono, Ortopneia e Gatilho)",
        conteudo: "• Atitudes Voluntárias (Posições aliviadoras de dor/dispneia):\n  - Ortopneica: Paciente sentado no leito com braços apoiados para utilizar musculatura respiratória acessória (Insuficiência Cardíaca Grave / DPOC).\n  - Genupeitoral (Prece Maometana): Paciente ajoelhado com o tórax encostado no leito; reduz o atrito no Derrame Pericárdico / Pericardite Aguda.\n  - Cócoras (Squatting): Adotada por crianças com Tetralogia de Fallot para aumentar a resistência vascular sistêmica e melhorar a oxigenação.\n• Atitudes Involuntárias (Contratura muscular reflexa / patológica):\n  - Passiva: Paciente fica na posição em que é colocado (inconsciente / comatoso).\n  - Opistótono: Contratura intensa da musculatura extensora da coluna; corpo apoia-se apenas na cabeça e calcanhares formando um arco arqueado para trás (Tétano e Meningite).\n  - Emprostótono: Corpura curvado para a frente (concavidade anterior).\n  - Posição em Gatilho: Típica de irritação meníngea (meningite em crianças); caracterizada por hiperextensão da cabeça, flexão de pernas sobre as coxas e encurvamento do tronco.",
        conceitoChave: "Opistótono (corpo em arco apoiado na cabeça e calcanhares) é clássico do Tétano e Meningite grave.",
        importanteMedicina: "A posição genupeitoral reduz a dor torácica da pericardite aguda por afastar o pericárdio parietal do visceral."
      }
    ],
    conceitosFundamentais: [
      "SRAA coordena o estado de vigília e alerta.",
      "Disartria é muscular/fonatória; Disfasia é cortico-cerebral.",
      "Fácies Basedowiana tem exoftalmia; Mixedematosa tem micedema e madarose.",
      "Paralisia facial periférica desvia a boca para o lado SADIO e apresenta Sinal de Bell.",
      "Opistótono é atitude involuntária em arco por rigidez extensora no Tétano.",
      "Posição em gatilho indica irritação meníngea infantil."
    ],
    relacaoMedicina: "Semiologia neurológica, dermatológica e propedêutica clínica geral.",
    errosComuns: [
      "Achar que a boca desvia para o lado paralisado na paralisia facial periférica (desvia para o lado SADIO).",
      "Confundir disartria (dificuldade de articular palavras) com disfasia (dificuldade de elaborar a linguagem no córtex)."
    ],
    questoesRelacionadas: [126, 127, 128, 129, 130]
  },
  {
    id: 18,
    discipline: "propedeutica",
    disciplineName: "Propedêutica Médica & Semiotécnica",
    moduloNumero: 11,
    assunto: "Módulo 11 — Segmento Cefálico II: Ouvido, Nariz, Boca, Laringe, Tireoide e Paratireoides",
    icone: "Stethoscope",
    descricao: "Exame do segmento cefálico II: Ouvido (orelha externa, média, interna; hipoacusia, vertigem, otalgia, otorreia), Nariz e Seios Paranasais (vibrissas, seios frontais/maxilares, obstrução, rinorreia fétida unilateral em criança), Boca e Glândulas Salivares (adenoma pleomórfico, sialadenite, manobra de ordenha), Laringe e Traqueia (disfonia, estridor, laringomalacia) e Tireoide/Paratireoides (Pemberton, Trousseau, Chvostek).",
    resumo: "Compreende a semiologia do Segmento Cefálico II. O Ouvido divide-se em Orelha Externa (pavilhão e meato acústico), Média (ossículos marteulo, bigorna, estribo; cavidade aérea) e Interna/Labirinto (cóclea, canais semicirculares, NC VIII). Sinais: Hipoacusia/Anacusia, Tontura x Vertigem (sensação rotatória do ambiente), Zumbido (ototóxicos: AAS, aminoglicosídeos). O Nariz realiza filtração, aquecimento e umidificação. Seios paranasais (frontais, maxilares, etmoidais, esfenoidais) iniciam desenvolvimento aos 2 meses intrauterinos. Rinorreia unilateral fétida em criança exige busca por corpo estranho. A Boca inclui glândulas salivares maiores (parótida, submandibular, sublingual); o Adenoma Pleomórfico é o tumor benigno mais comum da parótida. A Laringe tem função esfincteriana, respiratória e fonatória; compressão do nervo laríngeo recorrente causa disfonia/rouquidão. Estridor é som soproso por restrição em via aérea superior (abrupto sem febre = corpo estranho; com febre = laringite). A Tireoide (C5-C7) é avaliada por inspeção/palpação; a Manobra de Pemberton (elevar braços paralelos à cabeça) faz o bócio mergulhante aflorar à fúrcula com congestão venosa. As 4 Paratireoides secretam PTH; a hipocalcemia é diagnosticada pelo Sinal de Trousseau (espasmo carpopodal / mão de parteiro ao inflar manguito 20 mmHg acima da PAS por 3 min) e Sinal de Chvostek (contração hemifacial à percussão do nervo facial).",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="30" y="30" width="190" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="125" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#1e40af">👂 OUVIDO & LABIRINTO</text>
      <text x="125" y="80" text-anchor="middle" font-size="10" fill="#1d4ed8">Vertigem = Sensação Rotatória</text>
      <text x="125" y="100" text-anchor="middle" font-size="10" fill="#1e3a8a">Ototóxicos: AAS e Aminoglicosídeos</text>

      <rect x="240" y="30" width="220" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="350" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">🦋 TIREOIDE & PEMBERTON</text>
      <text x="350" y="80" text-anchor="middle" font-size="10" fill="#15803d">Manobra de Pemberton</text>
      <text x="350" y="100" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">Eleva braços ➔ Bócio Mergulhante</text>

      <rect x="480" y="30" width="190" height="120" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="575" y="55" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#991b1b">⚡ SINAIS HIPOCALCEMIA</text>
      <text x="575" y="80" text-anchor="middle" font-weight="bold" font-size="10" fill="#dc2626">Trousseau: Mão de Parteiro</text>
      <text x="575" y="100" text-anchor="middle" font-size="10" fill="#7f1d1d">Chvostek: Espasmo Nervo VII</text>
    </svg>`,
    imagemLegenda: "Semiologia do Segmento Cefálico II LUmed (Fonte: Material Fornecido / Porto, 2019).",
    capitulos: [
      {
        titulo: "1. Semiologia do Ouvido, Nariz e Cavidade Oral",
        subtitulo: "Vertigem x Tontura, Rinorreia Fétida e Tumores de Salivares",
        conteudo: "• Ouvido: Vertigem é a ilusão de movimento rotatório do ambiente (alteração labiríntica/vestibular). Zumbido pode ser provocado por fármacos ototóxicos (AAS em altas doses, aminoglicosídeos como gentamicina, diuréticos de alça).\n• Nariz: Rinorreia purulenta unilateral com odor fétido em criança é sinal altamente sugestivo de CORPO ESTRANHO na cavidade nasal.\n• Glândulas Salivares: A manobra de 'ordenha' avalia o fluxo de saliva pelas carúnculas sublinguais e parotídeas (óstio do ducto de Stensen). O tumor benigno mais comum das glândulas salivares é o Adenoma Pleomórfico (ocorre predominantemente na parótida). O tumor maligno mais comum é o Carcinoma Mucoepidermoide.",
        conceitoChave: "Rinorreia unilateral fétida em criança exige exclusão imediata de corpo estranho nasal.",
        importanteMedicina: "O Adenoma Pleomórfico apresenta crescimento lento e indolor na glândula parótida."
      },
      {
        titulo: "2. Laringe, Traqueia, Rouquidão e Estridor",
        subtitulo: "Nervo Laríngeo Recorrente e Diagnóstico Diferencial de Estridor",
        conteudo: "• Disfonia / Rouquidão: Alteração de início súbito pode refletir disfonia psicogênica ou paralisia de prega vocal por compressão/lesão do Nervo Laríngeo Recorrente (ramo do vago NC X). Rouquidão progressiva crônica em tabagista sugere Neoplasia de Laringe.\n• Estridor: Som ruidoso inspiratório provocado pelo turbilhonamento do ar na obstrução das vias aéreas superiores. Estridor abrupto sem febre em criança = aspiração de corpo estranho; estridor com febre = laringite aguda/crupe.",
        conceitoChave: "Lesão do Nervo Laríngeo Recorrente causa paralisia de prega vocal e disfonia/rouquidão.",
        importanteMedicina: "Na laringomalacia (causa mais comum de estridor congênito), o estridor piora com choro, alimentação e supino."
      },
      {
        titulo: "3. Tireoide, Paratireoides e Sinais de Hipocalcemia",
        subtitulo: "Manobra de Pemberton, Sinal de Trousseau e Sinal de Chvostek",
        conteudo: "• Tireoide: Localizada entre C5 e C7. A Manobra de Pemberton (pesquisa de bócio mergulhante intratorácico) solicita que o paciente eleve ambos os braços encostados à cabeça; o bócio mergulhante aflora à fúrcula esternal causando congestão venosa facial e tontura.\n• Paratireoides e Hipocalcemia (Tetania):\n  - Sinal de Trousseau: Provocado inflando o manguito do esfigmomanômetro 20 mmHg acima da PAS por 3 minutos. Ocorre espasmo carpopodal com flexão do punho e adução do polegar ('mão de parteiro') por hipocalcemia.\n  - Sinal de Chvostek: Percussão do nervo facial (anterior ao meato acústico externo) desencadeia contração reflexa da musculatura labial e facial do mesmo lado. Presente na hipocalcemia (embora 10% da população hígida possa apresentar).",
        conceitoChave: "Sinal de Trousseau (mão de parteiro com manguito insuflado) é a evidência semiológica mais específica de hipocalcemia.",
        tabelaComparativa: {
          headers: ["Sinal / Manobra", "Técnica de Execução", "Achado Positivo", "Significado Clínico"],
          rows: [
            ["Manobra de Pemberton", "Elevar braços ao lado da cabeça por 1 min", "Congestão facial, tontura, estridor", "Bócio mergulhante intratorácico"],
            ["Sinal de Trousseau", "Manguito +20 mmHg acima da PAS por 3 min", "Espasmo carpopodal (mão de parteiro)", "Hipocalcemia grave / Tetania"],
            ["Sinal de Chvostek", "Percussão leve no tronco do Nervo Facial (VII)", "Espasmo hemifacial ipsilateral", "Hipocalcemia (presente em 10% normais)"]
          ]
        },
        importanteMedicina: "A remoção acidental das paratireoides durante tireoidectomia total causa hipocalcemia aguda grave manifestada por Trousseau e Chvostek."
      }
    ],
    conceitosFundamentais: [
      "Vertigem é sensação rotatória por alteração labiríntica.",
      "Rinorreia fétida unilateral em criança = corpo estranho.",
      "Adenoma Pleomórfico é o tumor benigno mais comum da parótida.",
      "Nervo Laríngeo Recorrente inerva as pregas vocais (compressão = disfonia).",
      "Manobra de Pemberton identifica bócio mergulhante.",
      "Sinal de Trousseau (mão de parteiro) e Chvostek (espasmo facial) indicam hipocalcemia."
    ],
    relacaoMedicina: "Otorrinolaringologia, cirurgia de cabeça e pescoço e endocrinologia clínica.",
    errosComuns: [
      "Confundir tontura inespecífica com vertigem verdadeira.",
      "Acreditar que o sinal de Chvostek é 100% exclusivo de hipocalcemia (ocorre em 10% de pessoas normais)."
    ],
    questoesRelacionadas: [131, 132, 133, 134, 135]
  },
  {
    id: 16,
    discipline: "parasitologia",
    disciplineName: "Parasitologia & Infectologia",
    moduloNumero: 8,
    assunto: "Módulo 8 — Enterobíase / Oxiuríase (Enterobius vermicularis)",
    icone: "Bug",
    descricao: "Helmintíase mais prevalente em escolares, morfologia em oxiúro, migração noturna da fêmea, prurido anal noturno, falha do EPF, Método de Graham (fita adesiva), autoinfecção, retroinfecção, vulvovaginite e tratamento familiar com Albendazol e repetição em 14 dias.",
    resumo: "A Enterobíase (ou Oxiuríase) é uma parasitose intestinal cosmopolita causada pelo nematódeo Enterobius vermicularis (oxiúro). É a helmintíase intestinal mais prevalente em crianças em idade escolar e, ao contrário de outras geo-helmintíases, não depende exclusivamente de saneamento precário, ocorrendo em qualquer nível socioeconômico. A fêmea adulta (8-13 mm, cauda afilada) habita o ceco e à noite migra pelo canal anal para depositar de 4.000 a 17.000 ovos na região perianal, provocando prurido anal noturno intenso (sinal cardinal). Os ovos (ovalados, assimétricos em plano-convexo 'D') tornam-se infectantes em poucas horas (4-6h). O Exame Parasitológico de Fezes (EPF) convencional FALHA por baixa sensibilidade (as fêmeas não ovipõem no lúmen intestinal); o MÉTODO DE GRAHAM (fita adesiva transparente colhida pela manhã antes do banho/evacuação) é o método de escolha. Tratamento de primeira linha: Albendazol ou Mebendazol em dose única, REPETINDO OBRIGATORIAMENTE APÓS 2 SEMANAS e TRATANDO TODOS OS CONTATOS DOMICILIARES SIMULTANEAMENTE.",
    svgDiagrama: `<svg viewBox="0 0 700 180" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="680" height="160" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
      <rect x="25" y="30" width="150" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
      <text x="100" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#1e40af">1. OVO ASSIMÉTRICO (D)</text>
      <text x="100" y="80" text-anchor="middle" font-size="10" fill="#1d4ed8">Infectante em 4-6h</text>
      <text x="100" y="100" text-anchor="middle" font-size="10" fill="#1e3a8a">Plano-convexo L3</text>

      <text x="190" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#2563eb">➔</text>

      <rect x="210" y="30" width="150" height="120" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
      <text x="285" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#b45309">2. HABITAT CECO</text>
      <text x="285" y="80" text-anchor="middle" font-size="10" fill="#d97706">Desenvolvimento direto</text>
      <text x="285" y="100" text-anchor="middle" font-size="10" fill="#92400e">Sem Ciclo de Loos</text>

      <text x="375" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#d97706">➔</text>

      <rect x="395" y="30" width="150" height="120" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
      <text x="470" y="55" text-anchor="middle" font-weight="extrabold" font-size="11" fill="#991b1b">3. MIGRAÇÃO NOTURNA</text>
      <text x="470" y="80" text-anchor="middle" font-size="10" fill="#dc2626">Oviposição Perianal</text>
      <text x="470" y="100" text-anchor="middle" font-weight="extrabold" font-size="10" fill="#7f1d1d">Prurido Anal Noturno</text>

      <text x="560" y="90" text-anchor="middle" font-weight="900" font-size="20" fill="#dc2626">➔</text>

      <rect x="580" y="30" width="100" height="120" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
      <text x="630" y="55" text-anchor="middle" font-weight="extrabold" font-size="10" fill="#166534">GRAHAM</text>
      <text x="630" y="80" text-anchor="middle" font-size="9" fill="#15803d">Fita Adesiva</text>
      <text x="630" y="100" text-anchor="middle" font-weight="bold" font-size="9" fill="#14532d">Pela Manhã</text>
    </svg>`,
    imagemLegenda: "Ciclo Biológico e Diagnóstico do Enterobius vermicularis LUmed (Fonte: Enterobiase 2026 / UNEX MED).",
    capitulos: [
      {
        titulo: "1. Agente Etiológico, Morfologia e Epidemiologia Cosmopolita",
        subtitulo: "Enterobius vermicularis (Oxiúro), Oviposição Perianal e Ovos em 'D'",
        conteudo: "• Agente Etiológico: Enterobius vermicularis (nematódeo intestinal conhecido como oxiúro - de oxys = pontiagudo + oura = cauda).\n• Dimorfismo Sexual: Fêmeas adultas medem de 8 a 13 mm com cauda afilada e reta; Machos medem 2 a 5 mm com cauda curvada e morrem após a cópula.\n• Ovos: Formato ovalado e assimétrico (um lado plano e outro convexo em 'D'), com casca fina transparente contendo larva L3. Tornam-se infectantes em poucas horas (4 a 6h) sob temperatura ambiente.\n• Contexto Epidemiológico: Helmintíase intestinal mais comum em escolares e creches. NÃO depende exclusivamente de saneamento precário (frequente em países desenvolvidos e qualquer nível socioeconômico).",
        conceitoChave: "Ovos assimétricos em formato de 'D' tornam-se infectantes em apenas 4 a 6 horas após a deposição.",
        importanteMedicina: "Não é uma geo-helmintíase clássica dependente de maturação longa no solo; os ovos amadurecem rapidamente na pele/ambiente."
      },
      {
        titulo: "2. Fisiopatologia da Migração Noturna, Vias de Transmissão e Clínica",
        subtitulo: "Prurido Anal Noturno, Autoinfecção, Retroinfecção e Vulvovaginite",
        conteudo: "• Migração Noturna: Durante a noite, o relaxamento do esfíncter anal e a queda da temperatura corporal estimulam a fêmea grávida a abandonar o ceco e migrar pelo canal anal, depositando de 4.000 a 17.000 ovos aderidos à pele perianal.\n• Mecanismo do Prurido: A movimentação física da fêmea e secreções irritantes provocam prurido anal noturno intenso (sinal cardinal), causando insônia, irritabilidade e sono agitado.\n• Vias de Transmissão:\n  - Autoinfecção Externa: Coçar a região perianal -> ovos sob as unhas -> transporte mão-boca -> reinfecção.\n  - Heteroinfecção: Ingestão de ovos em superfícies, brinquedos ou alimentos por terceiros.\n  - Inalação: Ovos leves dispersos ao sacudir lençóis contaminados são inalados e deglutidos.\n  - Retroinfecção: Larvas eclodem na pele perianal e reentram pelo ânus subindo ao ceco.\n• Complicações: Escoriações perianais infectadas secundariamente por bactérias; Vulvovaginite e prurido genital em meninas por migração errática para a vulva; apendicite secundária.",
        conceitoChave: "Prurido anal noturno é o sinal cardinal. Em meninas, a migração errática pode provocar vulvovaginite.",
        importanteMedicina: "O ato de coçar e levar a mão à boca (autoinfecção) é o principal fator de manutenção da infecção crônica na criança."
      },
      {
        titulo: "3. Diagnóstico (Método de Graham) e Protocolo Terapêutico Familiar",
        subtitulo: "Por que o EPF Falha, Fita Adesiva Matinal e Repetição Obrigatória em 14 dias",
        conteudo: "• Por que o EPF Convencional Falha?: Os vermes não ovipõem no lúmen intestinal, mas sim na pele perianal. O EPF tem baixíssima sensibilidade e um resultado negativo NÃO exclui enterobíase.\n• Método de Escolha (Método de Graham / Fita Adesiva Transparente): Coleta realizada PELA MANHÃ, ao acordar, ANTES do banho e ANTES da evacuação. Pressiona-se a fita transparente sobre a região perianal e cola-se na lâmina de vidro.\n• Sensibilidade: 1 única coleta = ~50% sensibilidade; 3 coletas seriadas em dias consecutivos = ~90% de sensibilidade.\n• Tratamento Anti-helmíntico: Albendazol (400 mg VO dose única) ou Mebendazol (100 mg VO dose única) ou Pamoato de Pirantel.\n• REGRA DE OURO TERAPÊUTICA: REPETIR A DOSE EM 2 SEMANAS! Motivo: Os anti-helmínticos matam os vermes adultos mas NÃO destroem os ovos no ambiente. A 2ª dose elimina as larvas recém-eclodidas antes que maturarem.\n• Tratamento Familiar: OBRIGATÓRIO TRATAR TODOS OS CONTATOS DOMICILIARES simultaneamente para interromper a reinfecção cruzada.",
        conceitoChave: "EPF falha na enterobíase; método de escolha é Graham (fita adesiva) matinal. É OBRIGATÓRIO repetir a dose em 14 dias e tratar a família toda.",
        tabelaComparativa: {
          headers: ["Parâmetro", "EPF Convencional", "Método de Graham (Fita Adesiva)"],
          rows: [
            ["Sensibilidade", "BAIXA (< 10-15%)", "ALTA (50% 1 coleta; 90% 3 coletas seriadas)"],
            ["Amostra Colhida", "Fezes no pote", "Impressão por fita transparente na pele perianal"],
            ["Momento de Coleta", "Qualquer horário", "Pela manhã ao acordar (antes do banho/evacuar)"],
            ["Indicação", "Outras helmintíases e protozooses", "Enterobíase / Oxiuríase (Enterobius vermicularis)"]
          ]
        },
        importanteMedicina: "Não sacudir roupas de cama contaminadas para evitar dispersão aérea de ovos; lavar lençóis e cortar unhas das crianças."
      }
    ],
    conceitosFundamentais: [
      "Enterobius vermicularis é o nematódeo causador da oxiuríase (comum em crianças).",
      "Ovos têm formato plano-convexo em 'D' e ficam infectantes em 4 a 6 horas.",
      "Prurido anal noturno ocorre pela migração noturna da fêmea à pele perianal.",
      "O EPF convencional tem baixa sensibilidade e falha no diagnóstico.",
      "Método de escolha = Método de Graham (fita adesiva transparente) colhido pela manhã.",
      "Tratamento obriga REPETIÇÃO DA DOSE APÓS 2 SEMANAS e TRATAMENTO DE TODA A FAMÍLIA."
    ],
    relacaoMedicina: "Pediatria, infectologia, medicina da família e parasitologia clínica.",
    errosComuns: [
      "Solicitar EPF convencional para diagnosticar prurido anal noturno.",
      "Tratar apenas a criança sintomática sem tratar os contatos domiciliares assintomáticos.",
      "Esquecer de prescrever a 2ª dose de anti-helmíntico após 14 dias."
    ],
    questoesRelacionadas: [146, 147, 148, 149, 150, 151, 152, 153, 154, 155]
  }
];
