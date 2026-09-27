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

  // 2. GUIAS TEÓRICOS DE ESTUDO LUmed (COMPLETOS COM ESQUEMAS VISUAIS, TABELAS E MNEMÔNICOS)
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
        
        <path d="M 225 100 L 295 100" stroke="#2563eb" stroke-width="3.5" marker-end="url(#arrow)" fill="none"/>
        <path d="M 405 100 L 475 100" stroke="#2563eb" stroke-width="3.5" fill="none"/>

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
        <text x="195" y="85" text-anchor="middle" font-weight="bold" font-size="18" fill="#2563eb">➔</text>
        
        <rect x="230" y="35" width="130" height="90" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
        <text x="295" y="60" text-anchor="middle" font-weight="extrabold" font-size="13" fill="#991b1b">Amônia (NH₃)</text>
        <text x="295" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#dc2626">⚠️ Neurotóxica</text>
        <text x="295" y="105" text-anchor="middle" font-size="10" fill="#7f1d1d">Entra no Fígado</text>
        <text x="395" y="85" text-anchor="middle" font-weight="bold" font-size="18" fill="#2563eb">➔</text>
        
        <rect x="430" y="35" width="110" height="90" rx="12" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
        <text x="485" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#166534">Ciclo Ureia</text>
        <text x="485" y="85" text-anchor="middle" font-weight="bold" font-size="11" fill="#15803d">Hepatócito</text>
        <text x="485" y="105" text-anchor="middle" font-size="10" fill="#14532d">CPS-I (CPS1)</text>
        <text x="565" y="85" text-anchor="middle" font-weight="bold" font-size="18" fill="#2563eb">➔</text>
        
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
        <text x="175" y="110" text-anchor="middle" font-weight="bold" font-size="11" fill="#dc2626">Risco de Placa de Ateroma</text>
        <text x="175" y="130" text-anchor="middle" font-size="10" fill="#991b1b">Alvo das Estatinas (HMG-CoA Redutase)</text>

        <rect x="360" y="10" width="330" height="140" rx="16" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
        <text x="525" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#166534">HDL (Colesterol "Bom")</text>
        <text x="525" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#15803d">Apolipoproteína ApoA-I</text>
        <text x="525" y="85" text-anchor="middle" font-size="11" fill="#14532d">Transporte Reverso: Artérias ➔ Fígado</text>
        <text x="525" y="110" text-anchor="middle" font-weight="bold" font-size="11" fill="#16a34a">Proteção Cardiovascular</text>
        <text x="525" y="130" text-anchor="middle" font-size="10" fill="#15803d">Excreção Biliar de Colesterol</text>
      </svg>`,
      imagemLegenda: "Metabolismo Lipídico LUmed: LDL Aterogênico (ApoB-100) vs HDL com Transporte Reverso.",
      capitulos: [
        {
          titulo: "1. Lipoproteínas e Farmacologia das Estatinas",
          subtitulo: "ApoB-100, ApoA-I e Inibição da HMG-CoA Redutase",
          conteudo: "• LDL carrega a apolipoproteína ApoB-100. Quando retido no subendotélio arterial, sofre oxidação e captação por macrófagos (scavenger), formando Células Espumosas e placas de Ateroma.\n• Estatinas (ex: Atorvastatina, Simvastatina): Inibem competitivamente a enzima HMG-CoA Redutase no fígado, bloqueando a síntese endógena de colesterol. Isso induz superexpressão de receptores de LDL no hepatócito, reduzindo o LDL circulante.",
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
        <text x="350" y="182" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569">Concentração de Substrato [S]</text>
        <text x="25" y="95" text-anchor="middle" font-size="10" font-weight="bold" fill="#475569" transform="rotate(-90 25 95)">Velocidade Reação (V)</text>
        
        <path d="M 60 160 Q 140 45 650 40" fill="none" stroke="#2563eb" stroke-width="3"/>
        <text x="280" y="35" font-weight="extrabold" font-size="11" fill="#2563eb">Enzima Sem Inibidor (Vmax / Km)</text>

        <path d="M 60 160 Q 280 80 650 40" fill="none" stroke="#d97706" stroke-width="3" stroke-dasharray="5"/>
        <text x="380" y="75" font-weight="extrabold" font-size="11" fill="#d97706">Inibição Competitiva (Km AUMENTA, Vmax IGUAL)</text>

        <path d="M 60 160 Q 140 100 650 90" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="3"/>
        <text x="380" y="115" font-weight="extrabold" font-size="11" fill="#dc2626">Inibição Não-Competitiva (Vmax DIMINUI, Km IGUAL)</text>
      </svg>`,
      imagemLegenda: "Cinética Enzimática LUmed: Curvas de Michaelis-Menten e Tipos de Inibição Farmacológica.",
      capitulos: [
        {
          titulo: "1. Cinética Enzimática e Farmacologia dos Inibidores",
          subtitulo: "Diferenciação Prática entre Inibidor Competitivo e Não-Competitivo",
          conteudo: "• Km (Constante de Michaelis): É a [S] necessária para atingir Vmax/2. Km e afinidade são INVERSAMENTE proporcionais.\n• Inibição Competitiva: O inibidor liga-se ao sítio ativo. Elevação da [S] supera a inibição. Consequência: Km aumenta (parece menor afinidade), mas Vmax permanece inalterada.\n• Inibição Não-Competitiva: O inibidor liga-se a um sítio alostérico distinto. Elevação da [S] NÃO supera o bloqueio. Consequência: Vmax diminui, enquanto o Km permanece inalterado.",
          conceitoChave: "Inibição Competitiva: Km aumenta, Vmax IGUAL. Inibição Não-Competitiva: Vmax diminui, Km IGUAL.",
          tabelaComparativa: {
            headers: ["Tipo de Inibidor", "Local de Ligação", "Efeito no Km", "Efeito na Vmax", "Superado por +Substrato?"],
            rows: [
              ["Competitivo", "Sítio Ativo", "AUMENTA", "INALTERADA", "SIM (ex: Captopril, Estatinas)"],
              ["Não-Competitivo", "Sítio Alostérico", "INALTERADO", "DIMINUI", "NÃO (ex: Cianeto na Citocromo C)"],
              ["Incompetitivo", "Complexo Enzima-Substrato", "DIMINUI", "DIMINUI", "NÃO"]
            ]
          },
          importanteMedicina: "O Captopril (IECA) inibe competitivamente a ECA, impedindo a conversão de Angiotensina I em Angiotensina II na hipertensão."
        }
      ],
      conceitosFundamentais: [
        "Km é a concentração de substrato na qual V = Vmax / 2.",
        "Menor Km = Maior afinidade da enzima pelo substrato.",
        "Inibidor competitivo atua no sítio ativo; pode ser deslocado por excesso de substrato."
      ],
      relacaoMedicina: "Compreensão de mecanismos farmacológicos e diagnóstico enzimático (Troponina, CK-MB, ALT/AST).",
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
      resumo: "A Microbiologia é a ciência dedicada aos organismos microscópicos. Abrange a medicina (diagnóstico, antibiogramas), biotecnologia e ecologia. Diferencia procariontes (bactérias com peptidoglicano), eucariontes (fungos com quitina, protozoários) e acelulares (vírus). A microbiota humana protege o hospedeiro por exclusão competitiva e síntese de vitaminas K e B12.",
      imagemUrl: "/images/microbiology_overview.jpg",
      imagemLegenda: "Esquema Anatômico LUmed: Comparativo Estrutural entre Bactérias (Peptidoglicano), Fungos (Quitina), Protozoários e Vírus (Acelulares).",
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
        <text x="430" y="102" text-anchor="middle" font-weight="bold" font-size="11" fill="#92400e">Sem Parede Celular</text>

        <rect x="525" y="35" width="145" height="90" rx="12" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
        <text x="597" y="60" text-anchor="middle" font-weight="extrabold" font-size="12" fill="#991b1b">VÍRUS</text>
        <text x="597" y="80" text-anchor="middle" font-size="10" fill="#dc2626">Acelular</text>
        <text x="597" y="102" text-anchor="middle" font-weight="bold" font-size="11" fill="#7f1d1d">Parasita Obrigatório</text>
      </svg>`,
      capitulos: [
        {
          titulo: "1. Conceito, Escopo e Aplicações Práticas",
          subtitulo: "Medicina, Biotecnologia, Indústria e Ecologia",
          conteudo: "• Medicina e Diagnóstico: Identificação de agentes patogênicos, testes de sensibilidade aos antimicrobianos (TSA/antibiogramas) e controle hospitalar (CCIH).\n• Biotecnologia: Síntese de proteínas recombinantes (ex: insulina humana em E. coli), vacinas e enzimas.\n• Indústria e Ecologia: Produção de alimentos fermentados (queijos, vinagre) e fixação de nitrogênio no solo.",
          conceitoChave: "Microrganismos são ferramentas biotecnológicas cruciais e mantenedores dos ecossistemas.",
          importanteMedicina: "O uso consciente de antibióticos evita a seleção de superfungos e bactérias multirresistentes (MDR)."
        },
        {
          titulo: "2. Diferenciação Celular e Microbiota Humana",
          subtitulo: "Procariontes, Eucariontes, Acelulares e Exclusão Competitiva",
          conteudo: "• Bactérias: Procariontes unicelulares sem carioteca, com parede de Peptidoglicano.\n• Fungos: Eucariontes unicelulares (leveduras) ou filamentosos (bolores), com parede de Quitina e membrana com Ergosterol.\n• Protozoários: Eucariontes unicelulares sem parede celular rígida.\n• Vírus: Acelulares, parasitas intracelulares obrigatórios.\n• Microbiota Humana: Protege por exclusão competitiva e produz Vitaminas K e B12.",
          conceitoChave: "Microbiota intestinal protege por exclusão competitiva e sintetiza vitaminas K e B12.",
          tabelaComparativa: {
            headers: ["Grupo", "Organização Celular", "Invólucro Nuclear", "Parede Celular", "Metabolismo Próprio"],
            rows: [
              ["Bactérias", "Procarionte", "Ausente (Nucleoide)", "Peptidoglicano", "Sim"],
              ["Fungos", "Eucarionte", "Presente (Carioteca)", "Quitina", "Sim"],
              ["Protozoários", "Eucarionte", "Presente (Carioteca)", "Ausente", "Sim"],
              ["Vírus", "Acelular", "Ausente", "Ausente (Capsídeo proteico)", "Não (Parasita obrigatório)"]
            ]
          },
          importanteMedicina: "Antibióticos de amplo espectro destroem a microbiota intestinal, podendo induzir colite pseudomembranosa por Clostridioides difficile."
        }
      ],
      conceitosFundamentais: [
        "Bactérias são procariontes unicelulares com parede de peptidoglicano.",
        "Fungos são eucariontes com parede de quitina.",
        "Vírus são acelulares e parasitas intracelulares obrigatórios.",
        "Microbiota humana protege por exclusão competitiva e sintetiza vitaminas K e B12."
      ],
      relacaoMedicina: "Base para microbiologia clínica, racional de antibiogramas e infectologia.",
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
      imagemLegenda: "Arquitetura Viral LUmed: Comparação entre Vírus Envelopados (lábeis a álcool 70%) e Vírus Nus/Não Envelopados.",
      svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="330" height="140" rx="16" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
        <text x="175" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#991b1b">VÍRUS ENVELOPADOS</text>
        <text x="175" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Possuem Bicamada Lipídica</text>
        <text x="175" y="85" text-anchor="middle" font-size="11" fill="#7f1d1d">Sensíveis a Álcool 70%, Sabão e Calor</text>
        <text x="175" y="110" text-anchor="middle" font-weight="bold" font-size="11" fill="#dc2626">Transmissão por Gotículas Secreção</text>
        <text x="175" y="130" text-anchor="middle" font-size="10" fill="#991b1b">Ex: Influenza, SARS-CoV-2, VSR, HIV</text>

        <rect x="360" y="10" width="330" height="140" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
        <text x="525" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#1e40af">VÍRUS NÃO ENVELOPADOS (NUS)</text>
        <text x="525" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">Capsídeo Proteico Rígido</text>
        <text x="525" y="85" text-anchor="middle" font-size="11" fill="#1e3a8a">Resistentes a Álcool, pH Ácido e Fômites</text>
        <text x="525" y="110" text-anchor="middle" font-weight="bold" font-size="11" fill="#2563eb">Transmissão Fecal-Oral / Fômites</text>
        <text x="525" y="130" text-anchor="middle" font-size="10" fill="#1d4ed8">Ex: Rinovírus, Adenovírus, Poliovírus</text>
      </svg>`,
      capitulos: [
        {
          titulo: "1. Estrutura Viral e Labilidade ao Álcool 70%",
          subtitulo: "Vírus Envelopados vs. Vírus Nus",
          conteudo: "• O envelope lipídico é derivado de membranas celulares durante o brotamento. O uso de álcool 70% ou sabão solubiliza essa camada lipídica, destruindo as glicoproteínas de ancoragem e inativando o vírus infectante.\n• Vírus nus (não envelopados) possuem capsídeo rígido que resiste ao ressecamento, permitindo longa sobrevivência em superfícies inanimadas (fômites).",
          conceitoChave: "Álcool 70% e detergentes inativam vírus ENVELOPADOS dissolvendo o envelope lipídico.",
          importanteMedicina: "Higienização das mãos e superfícies na prevenção da COVID-19 e Influenza."
        },
        {
          titulo: "2. Vacinas da Poliomielite: Salk vs. Sabin",
          subtitulo: "IPV (Inativada Injetável) vs. OPV (Atenuada Oral)",
          conteudo: "• Jonas Salk (1955): Vacina de vírus inativados por formaldeído (IPV - injetável). Induz anticorpos IgG circulantes.\n• Albert Sabin (1961): Vacina de vírus vivo atenuado (OPV - oral / gotinha). Induz imunidade local de mucosa intestinal (IgA secreta) + IgG sistêmica.\n• PNI Atual: Transição para o esquema 100% IPV (injetável) para eliminar o risco residual de paralisia associada ao vírus vacinal atenuado.",
          conceitoChave: "Salk = Inativada Injetável (IPV); Sabin = Oral Vivo Atenuado (OPV).",
          tabelaComparativa: {
            headers: ["Característica", "Vacina Salk (IPV)", "Vacina Sabin (OPV)"],
            rows: [
              ["Mecanismo Biológico", "Vírus Inativado (Morto)", "Vírus Vivo Atenuado"],
              ["Via de Administração", "Intramuscular / Injetável", "Oral (Gotinha)"],
              ["Imunidade Gerada", "Humoral Sistêmica (IgG)", "Humoral (IgG) + Mucosa Intestinal (IgA)"],
              ["Risco de Paralisia por Reversão", "ZERO Risco", "Risco Raro de Reversão Recombinante"],
              ["Uso no PNI Atual", "Esquema Principal Preferencial", "Substituída Progressivamente por IPV"]
            ]
          },
          importanteMedicina: "Reconhecimento das estratégias do PNI para erradicação global da poliomielite."
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
      resumo: "Influenza é um vírus -ssRNA segmentado envelopado. Possui espículas de Hemaglutinina (HA - entrada) e Neuraminidase (NA - liberação). A Deriva Antigênica (Drift) causa epidemias sazonais anuais; o Salto Antigênico (Shift) gera PANDEMIAS. O Oseltamivir inibe a Neuraminidase.",
      imagemUrl: "/images/influenza_structure.jpg",
      imagemLegenda: "Arquitetura do Vírus Influenza A LUmed: Glicoproteínas HA (Entrada), NA (Liberação) e Canal M2.",
      svgDiagrama: `<svg viewBox="0 0 700 160" class="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="330" height="140" rx="16" fill="#eff6ff" stroke="#93c5fd" stroke-width="2"/>
        <text x="175" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#1e40af">DERIVA ANTIGÊNICA (DRIFT)</text>
        <text x="175" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#1d4ed8">Mutações Pontuais Contínuas (RNA Pol)</text>
        <text x="175" y="85" text-anchor="middle" font-size="11" fill="#1e3a8a">Altera Pequenos Epitopos de HA/NA</text>
        <text x="175" y="110" text-anchor="middle" font-weight="bold" font-size="11" fill="#2563eb">Causa EPIDEMIAS SAZONAIS Anuais</text>
        <text x="175" y="130" text-anchor="middle" font-size="10" fill="#1d4ed8">Exige reformulação anual da vacina</text>

        <rect x="360" y="10" width="330" height="140" rx="16" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
        <text x="525" y="38" text-anchor="middle" font-weight="900" font-size="13" fill="#991b1b">SALTO ANTIGÊNICO (SHIFT)</text>
        <text x="525" y="60" text-anchor="middle" font-weight="bold" font-size="11" fill="#b91c1c">Rearranjo Drástico de Segmentos RNA</text>
        <text x="525" y="85" text-anchor="middle" font-size="11" fill="#7f1d1d">Recombinação entre Cepas Humana e Animal</text>
        <text x="525" y="110" text-anchor="middle" font-weight="bold" font-size="11" fill="#dc2626">Causa PANDEMIAS GLOBAIS</text>
        <text x="525" y="130" text-anchor="middle" font-size="10" fill="#991b1b">Ex: Pandemia H1N1 de 2009</text>
      </svg>`,
      capitulos: [
        {
          titulo: "1. Proteínas Estruturais e Farmacologia do Tamiflu",
          subtitulo: "Hemaglutinina (HA), Neuraminidase (NA) e Oseltamivir",
          conteudo: "• Hemaglutinina (HA): Liga-se ao receptor de ácido siálico da célula epitelial respiratória, promovendo a fusão do envelope e a entrada do vírus.\n• Neuraminidase (NA): Cliva enzimaticamente os resíduos de ácido siálico na célula hospedeira ao final da replicação, soltando os vírions recém-brotados para infectar novas células.\n• Oseltamivir (Tamiflu®): É um inibidor competitivo seletivo da Neuraminidase (NA). Bloqueia a clivagem do ácido siálico, fazendo com que os vírus fiquem 'presos' à superfície da célula hospedeira, contendo a disseminação tecidual.",
          conceitoChave: "HA = Ligação receptórica e entrada; NA = Clivagem e liberação das partículas virais. Oseltamivir inibe a NA.",
          importanteMedicina: "O Oseltamivir deve ser iniciado idealmente nas primeiras 48 horas do início dos sintomas em pacientes de risco para Síndrome Respiratória Aguda Grave (SRAG)."
        },
        {
          titulo: "2. Genética Viral: Antigenic Drift vs. Antigenic Shift",
          subtitulo: "Epidemias Sazonais vs. Pandemias Globais",
          conteudo: "• Antigenic Drift (Deriva Antigênica): Mutações pontuais induzidas por erros da RNA polimerase viral nas espículas HA e NA. Responsável pelas epidemias sazonais anuais (exige vacina anual).\n• Antigenic Shift (Salto Antigênico): Exclusivo do Influenza A devido ao genoma segmentado em 8 fragmentos de RNA. Ocorre quando duas cepas distintas (ex: aviária e humana) co-infectam o mesmo hospedeiro (ex: porco), havendo troca drástica de segmentos genéticos, gerando um vírus totalmente inédito causador de PANDEMIAS (ex: H1N1 em 2009).",
          conceitoChave: "Drift = Mutações pontuais (Epidemias Sazonais); Shift = Rearranjo de segmentos RNA (PANDEMIAS).",
          tabelaComparativa: {
            headers: ["Mecanismo", "Tipo de Alteração", "Vírus Envolvidos", "Impacto Epidemiológico"],
            rows: [
              ["Antigenic Drift (Deriva)", "Mutações pontuais em HA/NA", "Influenza A e B", "Epidemias Sazonais Anuais"],
              ["Antigenic Shift (Salto)", "Rearranjo completo de fragmentos RNA", "Apenas Influenza A", "PANDEMIAS Globais (ex: H1N1)"]
            ]
          },
          importanteMedicina: "Identificação da gravidade clínica da Gripe (febre alta, prostração, mialgia intensa) vs Resfriado Comum."
        }
      ],
      conceitosFundamentais: [
        "HA é responsável pela ligação ao ácido siálico e entrada celular.",
        "NA cliva o ácido siálico permitindo a liberação viral.",
        "Oseltamivir (Tamiflu) inibe a Neuraminidase.",
        "Drift causa epidemias sazonais; Shift gera pandemias globais."
      ],
      relacaoMedicina: "Tratamento precoce de SRAG e vigilância epidemiológica global.",
      errosComuns: ["Achar que o Antigenic Shift ocorre no Influenza B (ocorre prioritariamente no Influenza A)."],
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
        <text x="90" y="60" text-anchor="middle" font-size="10" fill="#3b82f6">+ssRNA Nu</text>
        <text x="90" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#1d4ed8">Replica 33-35°C</text>
        <text x="90" y="110" text-anchor="middle" font-size="10" fill="#1e3a8a">Resfriado Comum</text>

        <rect x="180" y="10" width="160" height="140" rx="14" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
        <text x="260" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#166534">ADENOVÍRUS</text>
        <text x="260" y="60" text-anchor="middle" font-size="10" fill="#15803d">dsDNA Nu (Fibras)</text>
        <text x="260" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#14532d">Febre + Conjuntivite</text>
        <text x="260" y="110" text-anchor="middle" font-size="10" fill="#15803d">Exsudato Amigdaliano</text>

        <rect x="350" y="10" width="160" height="140" rx="14" fill="#fffbeb" stroke="#fde68a" stroke-width="2"/>
        <text x="430" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#b45309">VSR (PNEUMO)</text>
        <text x="430" y="60" text-anchor="middle" font-size="10" fill="#d97706">-ssRNA Envelopado</text>
        <text x="430" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#92400e">Proteína F ➔ Sincícios</text>
        <text x="430" y="110" text-anchor="middle" font-size="10" fill="#b45309">Bronquiolite Pediátrica</text>

        <rect x="520" y="10" width="170" height="140" rx="14" fill="#fef2f2" stroke="#fca5a5" stroke-width="2"/>
        <text x="605" y="38" text-anchor="middle" font-weight="900" font-size="12" fill="#991b1b">SARS-CoV-2</text>
        <text x="605" y="60" text-anchor="middle" font-size="10" fill="#dc2626">+ssRNA Envelopado</text>
        <text x="605" y="85" text-anchor="middle" font-weight="bold" font-size="10" fill="#7f1d1d">Spike ➔ ACE2 / TMPRSS2</text>
        <text x="605" y="110" text-anchor="middle" font-size="10" fill="#991b1b">COVID-19 / SDRA</text>
      </svg>`,
      capitulos: [
        {
          titulo: "1. Rinovírus e Adenovírus Humanos",
          subtitulo: "Tropismo Térmico e Diagnóstico Diferencial de Faringite",
          conteudo: "• Rinovírus: Vírus +ssRNA não envelopado. Sua RNA polimerase replica prioritariamente a 33-35°C (temperatura do vestíbulo e cavidade nasal). A 37°C (trato inferior), sua replicação é contida, explicando a benignidade do Resfriado Comum sem febre alta.\n• Adenovírus: Vírus dsDNA não envelopado com projeções proteicas em 'fibras'. Causa Febre Faringoconjuntival (tríade: febre + faringite + conjuntivite folicular). Seu exsudato amigdaliano mimetiza infecção por Streptococcus pyogenes, mas o hemograma e swabs confirmam etiologia viral.",
          conceitoChave: "Rinovírus replica a 33-35°C na cavidade nasal; Adenovírus (dsDNA) causa faringoconjuntivite com exsudato amigdaliano mimetizando bactéria.",
          importanteMedicina: "Evita o uso equivocado de antibióticos na faringite por Adenovírus."
        },
        {
          titulo: "2. Vírus Sincicial Respiratório (VSR) e Prevenção",
          subtitulo: "Proteína F, Bronquiolite Pediátrica, Vacina Abrysvo, Palivizumabe e Nirsevimabe",
          conteudo: "• Proteína F (Fusão): Induz a fusão da membrana da célula infectada com as células epiteliais brônquicas vizinhas, formando massas multinucleadas gigantes necróticas chamadas SINCÍCIOS.\n• Bronquiolite Viral Aguda (BVA): Obstrução bronquiolar por muco e sincícios necróticos em lactentes abaixo de 2 anos (taquipneia, tiragem intercostal e sibilos).\n• Imunoprofilaxia e Vacinas:\n  1. Vacina Abrysvo®: Imunização ativa da gestante no 3º trimestre com transferência transplacentária de anticorpos IgG para o recém-nascido.\n  2. Palivizumabe: Monoclonal anti-proteína F mensal para prematuros e cardiopatas.\n  3. Nirsevimabe: Monoclonal de ação estendida (long-acting) em dose única para recém-nascidos na 1ª estação do VSR.",
          conceitoChave: "Proteína F forma SINCÍCIOS; VSR causa Bronquiolite; Prevenção com Abrysvo® (gestante), Palivizumabe e Nirsevimabe.",
          tabelaComparativa: {
            headers: ["Imunobiológico", "Natureza", "Público-Alvo", "Mecanismo"],
            rows: [
              ["Vacina Abrysvo®", "Vacina Proteína F Recombinante", "Gestantes no 3º trimestre", "Imunização ativa materna com passagem IgG transplacentária"],
              ["Palivizumabe", "Anticorpo Monoclonal Humanizado", "Prematuros / Cardiopatas", "Imunoprofilaxia passiva mensal na estação VSR"],
              ["Nirsevimabe", "Anticorpo Monoclonal Long-Acting", "Todos os recém-nascidos", "Dose única com proteção para toda a temporada"]
            ]
          },
          importanteMedicina: "Reconhecer a tiragem subcostal e batimento de asa nasal na BVA por VSR para rápida oxigenoterapia."
        },
        {
          titulo: "3. SARS-CoV-2 (COVID-19)",
          subtitulo: "Proteína Spike (S), Receptor ACE2, Protease TMPRSS2 e Tratamento",
          conteudo: "• Entrada Molecular: A proteína Spike (S) conecta-se ao receptor ACE2 na célula epitelial e endotelial. A protease transmembrana de serina TMPRSS2 realiza a clivagem ativadora de fusão.\n• Fase Inflamatória e SDRA: O dano celular endotelial desencadeia tempestade de citocinas (IL-6, TNF-α), microtromboses e Síndrome do Desconforto Respiratório Agudo (SDRA).\n• Tratamento em Hospitalizados: Corticoterapia (Dexametasona) na fase hipoxêmica + Anticoagulação profilática.",
          conceitoChave: "SARS-CoV-2 liga a Proteína Spike ao receptor ACE2 com ativação por TMPRSS2.",
          importanteMedicina: "Uso oportuno de Dexametasona em pacientes com necessidade de oxigenoterapia suplementar na COVID-19."
        }
      ],
      conceitosFundamentais: [
        "Rinovírus é +ssRNA nu com replicação restrita a 33-35°C na cavidade nasal.",
        "Adenovírus é dsDNA nu com fibras; causa febre faringoconjuntival.",
        "VSR forma sincícios via Proteína F e causa Bronquiolite em lactentes.",
        "SARS-CoV-2 liga Spike ao receptor ACE2 com clivagem por TMPRSS2."
      ],
      relacaoMedicina: "Conduta clínica nas infecções respiratórias virais da infância e adultos.",
      errosComuns: ["Prescrever antibióticos para faringite por Adenovírus ou bronquiolite por VSR."],
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
      explicacaoAlternativas: { A: "Incorreta. Se fosse inibida, a incorporação no produto Y não aumentaria.", B: "Correta. Concentração constante com aumento de turnover isotópico reflete fluxo metabólico elevado.", C: "Incorreta. A concentração estática não afere a velocidade de fluxo.", D: "Incorreta. X é intermediário ativo da via." },
      conceitoPrincipal: "Diferença entre concentração estática de metabólito e fluxo metabólico dinâmico."
    },
    {
      id: 2, numero: 2, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Acoplamento Energético de ATP", dificuldade: "Fácil",
      enunciado: "As células realizam reações endergônicas (ΔG > 0) que seriam termodinamicamente desfavoráveis isoladamente. Como o metabolismo celular torna essas reações viáveis?",
      alternativas: [
        { id: "A", texto: "Alterando a constante de equilíbrio através de enzimas." },
        { id: "B", texto: "Acoplando a reação endergônica à hidrólise de compostos de alta energia como o ATP, resultando em ΔG global negativo." },
        { id: "C", texto: "Elevando a temperatura intracelular para níveis térmicos extremos." },
        { id: "D", texto: "Aumentando a energia de ativação." }
      ],
      respostaCorreta: "B",
      explicacao: "Reações endergônicas são impulsionadas pelo acoplamento com a hidrólise altamente exergônica do ATP (ΔG°' ≈ -30,5 kJ/mol).",
      explicacaoAlternativas: { A: "Incorreta. Enzimas aceleram reações mas não mudam a constante de equilíbrio Keq.", B: "Correta. Acoplamento à hidrólise de ATP torna o ΔG global negativo e espontâneo.", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Princípio do acoplamento energético via hidrólise de ATP."
    },
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
      explicacaoAlternativas: { A: "Incorreta. Núcleo individualizado com carioteca é exclusivo de eucariontes.", B: "Correta. Bactérias são procariontes com parede de peptidoglicano.", C: "Incorreta. Quitina é encontrada na parede de fungos.", D: "Incorreta. Bactérias possuem DNA circular." },
      conceitoPrincipal: "Diferenciação estrutural entre procariotos (bactérias com peptidoglicano) e eucariotos."
    },
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
      explicacao: "O envelope lipídico é derivado da célula hospedeira durante o brotamento. Por conter lipídios, ele é rapidamente solubilizado por sabão, álcool 70% e saneantes, inativando o vírus.",
      explicacaoAlternativas: { A: "Incorreta. Vírus nus são mais resistentes no ambiente.", B: "Correta. O envelope lipídico confere alta sensibilidade ao álcool 70% e detergentes.", C: "Incorreta.", D: "Incorreta." },
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
      explicacao: "A Deriva Antigênica (Drift) consiste em mutações pontuais acumuladas que causam epidemias sazonais anuais. O Salto Antigênico (Shift) é a troca/rearranjo de fragmentos de RNA entre cepas distintas (ex: aviária e humana) num hospedeiro intermediário, criando vírus inédito causador de PANDEMIAS.",
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
    USER_ANSWERS: 'lumed_user_answers_v4',
    REVISION_ITEMS: 'lumed_revision_items_v4',
    SIMULATED_EXAMS: 'lumed_simulated_exams_v4'
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
        return { hasWeakPoints: false, title: "Nenhum ponto fraco detectado ainda", message: "Comece a praticar questões para mapear seus tópicos prioritários de estudo.", sugestao: "Inicie por Microbiologia ou Bioquímica Médica." };
      }
      return { hasWeakPoints: false, title: "Excelente aproveitamento!", message: "Seus acertos estão elevados em todas as matérias praticadas.", sugestao: "Mantenha a rotina de repetição espaçada no LUmed." };
    }

    const worst = [...weakTopics].sort((a, b) => a.percentual - b.percentual)[0];
    const mat = STUDY_MATERIALS.find(m => m.assunto === worst.assunto);
    return { hasWeakPoints: true, title: `Ponto de atenção: ${worst.assunto}`, message: `Aproveitamento de ${worst.percentual}% (${worst.erros} erro(s) em ${worst.totalRespondidas} questões).`, sugestao: mat ? `Sugestão: Revise ${mat.conceitosFundamentais[0]}` : "Revise este módulo no guia." };
  }

  // 5. ENGINE INTELIGENTE DO TUTOR LUmed (BASE DE CONHECIMENTO MÉDICO AMPLIADA)
  async function queryAITutorMock({ question, promptType, customPrompt, selectedOption }) {
    await new Promise(r => setTimeout(r, 350));
    const textQuery = (customPrompt || '').toLowerCase();
    const opt = selectedOption || 'A';
    const currentQ = question || QUESTIONS[0];
    const alt = currentQ.alternativas.find(a => a.id === opt);

    // Se for uma dúvida customizada digitada pelo usuário no chat:
    if (promptType === 'custom' && textQuery) {
      if (textQuery.includes('bohr') || textQuery.includes('oxigenio') || textQuery.includes('hemoglobina')) {
        return `🩺 **Tutor LUmed — Efeito Bohr & Oxigênio**:
• **O que é**: O Efeito Bohr descreve o desvio da curva de dissociação da Hemoglobina para a DIREITA em resposta ao aumento de H+ (queda de pH) e da PaCO2.
• **Significado Fisiológico**: Nos tecidos metabolicamente ativos, a acidez e o CO2 facilitam a transição para a forma T (desoxigenada), 'soltando' o O2 onde ele é mais necessário.
• **Mnemônico**: *CADET, desvia pra Direita!* (CO2, Acidose/H+, 2,3-DPG, Exercício, Temperatura).`;
      }
      if (textQuery.includes('anion gap') || textQuery.includes('acidose')) {
        return `🧮 **Tutor LUmed — Anion Gap Plasmático**:
• **Fórmula**: Anion Gap = [Na+] - ([Cl-] + [HCO3-]). Normal: 8 a 12 mEq/L.
• **Interpretação**: Se > 12 mEq/L, há consumo de bicarbonato por ácidos orgânicos não mensurados no sangue.
• **Mnemônico MUDPILES**: Metanol, Uremia, Diabetes (Cetoacidose), Paralcóol, Isoniazida/Infecção, Lactato (Choque/Sepse), Etilenoglicol, Salicilatos.`;
      }
      if (textQuery.includes('salk') || textQuery.includes('sabin') || textQuery.includes('polio')) {
        return `💉 **Tutor LUmed — Vacinas da Poliomielite**:
• **Vacina Salk (IPV)**: Vírus INATIVADO (morto) injetável. Gera imunidade sistêmica IgG sem risco de paralisia vacinal. É o esquema preferencial do PNI.
• **Vacina Sabin (OPV)**: Vírus VIVO ATENUADO oral (gotinha). Gera imunidade de mucosa intestinal (IgA) + IgG sistêmica.
• **Macete de Prova**: *Salk = Seringa (IPV/Injetável/Inativada); Sabin = Sabor/Gotinha (OPV/Atenuada).*`;
      }
      if (textQuery.includes('influenza') || textQuery.includes('oseltamivir') || textQuery.includes('tamiflu') || textQuery.includes('drift') || textQuery.includes('shift')) {
        return `🦠 **Tutor LUmed — Vírus Influenza & Antivirais**:
• **Hemaglutinina (HA)**: Espícula de ligação ao ácido siálico para ENTRADA celular.
• **Neuraminidase (NA)**: Espícula de clivagem enzimática do ácido siálico para LIBERAÇÃO das partículas virais.
• **Oseltamivir (Tamiflu)**: Inibe a Neuraminidase (NA), prendendo os vírus à célula hospedeira.
• **Drift vs Shift**: Drift = Mutações pontuais (Epidemias sazonais anuais); Shift = Rearranjo de fragmentos de RNA (PANDEMIAS Globais).`;
      }
      if (textQuery.includes('vsr') || textQuery.includes('sincicio') || textQuery.includes('bronquiolite') || textQuery.includes('abrysvo') || textQuery.includes('palivizumabe') || textQuery.includes('nirsevimabe')) {
        return `🫁 **Tutor LUmed — VSR & Bronquiolite Aguda**:
• **Patogênese**: A Proteína F (Fusão) funde células epiteliais brônquicas adjacentes formando SINCÍCIOS multinucleados.
• **Quadro Clínico**: Bronquiolite em lactentes < 2 anos (taquipneia, sibilos, tiragem).
• **Prevenção**: Vacina Abrysvo® (gestante 3º trimestre), Palivizumabe (monoclonal mensal para prematuros) e Nirsevimabe (monoclonal de dose única).`;
      }
      if (textQuery.includes('spike') || textQuery.includes('ace2') || textQuery.includes('tmprss2') || textQuery.includes('covid') || textQuery.includes('sars')) {
        return `🧬 **Tutor LUmed — SARS-CoV-2 (COVID-19)**:
• **Mecanismo de Entrada**: A Proteína Spike (S) acopla no receptor ACE2 celular e sofre clivagem ativadora pela protease TMPRSS2.
• **Fisiopatologia**: Fase inicial viral seguida por tempestade de citocinas (IL-6), vasculite e risco de SDRA com microtromboses.
• **Tratamento**: Dexametasona na fase hipoxêmica em hospitalizados.`;
      }
      if (textQuery.includes('ldl') || textQuery.includes('hdl') || textQuery.includes('estatina') || textQuery.includes('colesterol')) {
        return `🩸 **Tutor LUmed — Lipoproteínas & Estatinas**:
• **LDL**: Carrega ApoB-100. Deposita colesterol nas artérias (placa de ateroma).
• **HDL**: Carrega ApoA-I. Realiza o Transporte Reverso de Colesterol (retira das artérias para o fígado).
• **Estatinas**: Inibem a HMG-CoA Redutase no fígado, aumentando os receptores que limpam o LDL da circulação.`;
      }
      if (textQuery.includes('km') || textQuery.includes('vmax') || textQuery.includes('competitiv')) {
        return `⚡ **Tutor LUmed — Cinética Enzimática**:
• **Km**: Concentração de substrato para Vmax/2. Menor Km = Maior afinidade.
• **Inibidor Competitivo**: Atua no sítio ativo. Km AUMENTA, Vmax permanece IGUAL (superado por +substrato).
• **Inibidor Não-Competitivo**: Atua no sítio alostérico. Vmax DIMINUI, Km permanece IGUAL (não superado).`;
      }
      if (textQuery.includes('ureia') || textQuery.includes('amonia') || textQuery.includes('hepati') || textQuery.includes('encefalopatia')) {
        return `🫀 **Tutor LUmed — Amônia & Ciclo da Ureia**:
• **Amônia (NH3)**: Neurotóxica liberada na transaminação (ALT/AST).
• **Ciclo da Ureia**: Ocorre no FÍGADO (enzima CPS-I) convertendo amônia em ureia atóxica excretada pelo RIM.
• **Encefalopatia Hepática**: Falha hepática acumula amônia no cérebro causando edema de astrócitos.`;
      }

      return `👨‍⚕️ **Tutor LUmed**:
Dúvida: "${customPrompt}"
Sobre o módulo de **${currentQ.assunto}**:
${currentQ.explicacao}

💡 **Conceito Chave de Medicina**: ${currentQ.conceitoPrincipal}`;
    }

    // Botões de sugestão rápida
    switch (promptType) {
      case 'why_wrong':
        return `🧠 **Tutor LUmed**:
Sobre a **Alternativa ${opt}** ("${alt ? alt.texto : ''}"):
${currentQ.explicacaoAlternativas?.[opt] || 'Esta alternativa contém um distrator conceitual comum em provas.'}

💡 **Gabarito Correto**: Alternativa **${currentQ.respostaCorreta}**.
🔑 **Conceito-Chave**: ${currentQ.conceitoPrincipal}`;
      case 'explain_beginner':
        return `🩺 **Explicação Simplificada LUmed**:
${currentQ.explicacao}

Gabarito: **${currentQ.respostaCorreta}**. Conceito: *"${currentQ.conceitoPrincipal}"*.`;
      case 'core_concept':
        return `🔑 **Conceito Chave para Dominar**:
**${currentQ.conceitoPrincipal}**

• Assunto: ${currentQ.assunto}
• Gabarito: ${currentQ.respostaCorreta}`;
      case 'clinical_example':
        return `🏥 **Aplicação na Prática Médica**:
Na rotina clínica de *${currentQ.assunto}*, reconhecer por que a **Alternativa ${currentQ.respostaCorreta}** é correta previne condutas errôneas: ${currentQ.explicacao}`;
      default:
        return `👨‍⚕️ **Tutor LUmed**:
Gabarito: **${currentQ.respostaCorreta}**.
Raciocínio Clínico: ${currentQ.explicacao}`;
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
              Bioquímica Médica, Microbiologia, Virologia e Síndromes Gripais integrados com repetição espaçada e IA Didática.
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-3">
              <button type="button" onclick="window.medbioNav('questions')" class="px-5 py-2.5 rounded-xl bg-white text-blue-700 font-extrabold text-xs shadow-md hover:bg-blue-50 transition-all flex items-center gap-2">
                <i data-lucide="play" class="w-4 h-4"></i> Praticar Questões
              </button>
              <button type="button" onclick="window.medbioSelectDisciplineAndTopic('bioquimica', 1)" class="px-5 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-2">
                <i data-lucide="book-open" class="w-4 h-4"></i> Bioquímica Médica
              </button>
              <button type="button" onclick="window.medbioSelectDisciplineAndTopic('microbiologia', 8)" class="px-5 py-2.5 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-bold text-xs border border-white/20 transition-all flex items-center gap-2">
                <i data-lucide="microscope" class="w-4 h-4"></i> Microbiologia & Virologia
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
            <span class="text-xs font-bold uppercase text-slate-400">Gabarito com Tutor IA</span>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl md:text-4xl font-black text-indigo-600">55/55</span>
              <span class="text-xs font-bold text-slate-500">questões</span>
            </div>
            <p class="text-xs text-slate-500 font-medium">Disponível em tempo real no app</p>
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
          <h3 class="text-lg font-extrabold text-slate-900">Navegação Rápida por Módulo de Estudo</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${STUDY_MATERIALS.map(mat => `
              <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-3">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold ${mat.discipline === 'bioquimica' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-blue-50 text-blue-800 border border-blue-200'}">
                    ${mat.disciplineName} • Módulo ${mat.moduloNumero}
                  </span>
                  <span class="text-xs font-bold text-slate-400">${mat.questoesRelacionadas.length} questões</span>
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
    } else if (currentFilter !== 'all') {
      filtered = QUESTIONS.filter(q => q.assunto === currentFilter);
    }

    const currentQ = filtered[currentQuestionIndex];

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8 max-w-4xl mx-auto">
        <!-- Filtro de Questões -->
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2 overflow-x-auto py-1">
            <button type="button" onclick="window.medbioSetQuestionFilter('all')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}">Todas (${QUESTIONS.length})</button>
            <button type="button" onclick="window.medbioSetQuestionFilter('unanswered')" class="px-3 py-1.5 rounded-xl text-xs font-bold ${currentFilter === 'unanswered' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'}">Não Respondidas</button>
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
                  <button type="button" onclick="window.medbioOpenAITutorForQuestion(${currentQ.id})" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5">
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
              <div>
                <h3 class="font-extrabold text-base leading-none">Tutor Inteligente LUmed</h3>
                <span class="text-[10px] text-indigo-200 font-medium">Medicina • Bioquímica & Microbiologia</span>
              </div>
            </div>
            <button type="button" onclick="window.medbioCloseAITutor()" class="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
          </div>

          <div id="ai-chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            ${chatHistory.length === 0 ? `
              <div class="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm space-y-2">
                <p class="font-bold text-indigo-600 text-sm">Olá! Sou o Tutor Inteligente do LUmed 🩺</p>
                <p class="leading-relaxed">Estou pronto para te explicar qualquer dúvida conceitual ou clínica sobre Bioquímica Médica, Microbiologia, Virologia e Síndromes Gripais!</p>
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
              <input id="ai-custom-input" type="text" placeholder="Digite sua dúvida (ex: Efeito Bohr, Salk vs Sabin, Anion Gap...)" class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-500" />
              <button type="submit" class="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-sm"><i data-lucide="send" class="w-4 h-4"></i></button>
            </form>
          </div>
        </div>
      </div>
    `;
  }

  // 8. RENDERIZADOR PRINCIPAL LUmed
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

  // 9. HANDLERS GLOBAIS DE EVENTOS (window.medbio*)
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

  // 10. MONTAGEM INICIAL DA APLICAÇÃO LUmed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  }
  renderApp();
  setTimeout(renderApp, 50);
})();
