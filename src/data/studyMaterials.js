// Resumos Teóricos e Guias de Estudo Prático MedBio
export const STUDY_MATERIALS = [
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
      "Achar que enzimas alteram o ΔG ou a constante de equilíbrio (Keq) de uma reação. Enzimas alteram APENAS a velocidade (energia de ativação).",
      "Confundir massa de metabólito estática com taxa de renovação isotópica (fluxo).",
      "Assumir que vias anabólicas e catabólicas ocorrem simultaneamente no mesmo compartimento sem regulação."
    ],
    questoesRelacionadas: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    icone: "Droplet",
    descricao: "Propriedades da água, pontes de hidrogênio, equação de Henderson-Hasselbalch, tampão bicarbonato e osmose.",
    resumo: "A água é o solvente biológico universal. Sua natureza polar e capacidade de formar pontes de hidrogênio conferem elevado calor específico, essencial para a termorregulação. Os tampões biológicos resistem a variações drásticas de pH quando este está próximo ao pKa do sistema.",
    conceitosFundamentais: [
      "Equação de Henderson-Hasselbalch: pH = pKa + log([Base Conjugada] / [Ácido Fraco]).",
      "Máxima capacidade tamponante ocorre quando pH = pKa (50% ácido / 50% base).",
      "O tampão bicarbonato (HCO3-/CO2) é um sistema aberto regulado dinamicamente por pulmões (CO2) e rins (HCO3-).",
      "No meio intracelular, o tampão fosfato e os resíduos de Histidina nas proteínas são predominantes.",
      "Osmose: Movimento de água do meio hipotônico para o hipertônico. Hemácias em meio hipotônico sofrem hemólise."
    ],
    relacaoMedicina: "Essencial para entender a prescrição de fluidoterapia intravenosa (soro fisiológico vs. água livre), prevenção de edema cerebral osmótico e fisiologia respiratória/renal básica.",
    errosComuns: [
      "Achar que o tampão bicarbonato é ineficaz por ter pKa de 6,1. Ele é extremamente eficiente por ser um sistema aberto fisiológico.",
      "Confundir a direção da osmose: a água é atraída PARA o meio de MAIOR osmolaridade (hipertônico).",
      "Esquecer que o pH do sangue humano normal é estritamente mantido entre 7,35 e 7,45."
    ],
    questoesRelacionadas: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    icone: "Activity",
    descricao: "Gasometria arterial, acidose e alcalose metabólica/respiratória, Ânion Gap e Fórmula de Winter.",
    resumo: "Os desequilíbrios ácido-base alteram a carga de proteínas e o funcionamento celular. Classificam-se em primariamente metabólicos (variação no HCO3-) ou respiratórios (variação na PaCO2), acompanhados por respostas compensatórias fisiológicas dos rins ou pulmões.",
    conceitosFundamentais: [
      "Acidose: pH < 7,35. Alcalose: pH > 7,45.",
      "Ânion Gap = Na+ - (Cl- + HCO3-). Valor normal: 8 a 12 mEq/L. Elevado na Cetoacidose, Acidose Lática e Uremia.",
      "Alcalose metabólica por vômitos decorre da perda maciça de HCl gástrico (hipoclorêmica).",
      "Alcalose respiratória por hiperventilação desprotona a albumina, reduz o cálcio iônico livre e gera tetania/parestesias.",
      "Fórmula de Winter: PaCO2 esperada na acidose metabólica = (1,5 × [HCO3-]) + 8 ± 2."
    ],
    relacaoMedicina: "Tema obrigatório nas UTI, Prontos-Socorros e Enfermarias. Permite diagnosticar insuficiência respiratória, choque séptico, cetoacidose diabética e intoxicações gravemente descompensadas.",
    errosComuns: [
      "Não calcular o Ânion Gap ao se deparar com uma acidose metabólica.",
      "Confundir hiperventilação (causa alcalose respiratória) com respiração profunda compensatória de Kussmaul.",
      "Esquecer que a compensação renal leva de 24 a 72 horas para atuar plenamente, enquanto a respiratória age em minutos."
    ],
    questoesRelacionadas: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    icone: "Dna",
    descricao: "Estrutura proteica, ponto isoelétrico, patofisiologia da Anemia Falciforme, Efeito Bohr e Colágeno.",
    resumo: "Proteínas são polímeros de aminoácidos unidos por ligações peptídicas. Suas propriedades derivam da sequência de aminoácidos (estrutura primária) e da conformação tridimensional (secundária, terciária e quaternária). Mutações pontuais podem alterar drasticamente a função proteica.",
    conceitosFundamentais: [
      "Ponto Isoelétrico (pI): pH em que a carga líquida da proteína/aminoácido é exatamente zero.",
      "Desnaturação destrói arranjos secundários/terciários/quaternários, mantendo a estrutura primária intocada.",
      "Anemia Falciforme (HbS): Mutação de ponto trocando Glutamato (polar) por Valina (apolar) na posição β6.",
      "Efeito Bohr: Redução do pH ou elevação da pCO2 desvia a curva de O2 para a DIREITA, liberando O2 nos tecidos.",
      "Vitamina C (Ascorbato): Cofator para hidroxilação de Prolina/Lisina no Colágeno. Sua falta causa Escorbuto."
    ],
    relacaoMedicina: "Compreensão da patogênese da Anemia Falciforme, fragilidade capilar no Escorbuto, transporte tecidual de oxigênio em pacientes graves e diagnóstico por eletroforese de proteínas.",
    errosComuns: [
      "Achar que a desnaturação quebra ligações peptídicas covalentes (isso é proteólise).",
      "Confundir o desvio para a direita da hemoglobina (libera O2 nos tecidos) com desvio para a esquerda (capta O2 no pulmão).",
      "Esquecer que a mutação da HbS introduz um resíduo apolar/hidrofóbico (Valina)."
    ],
    questoesRelacionadas: [16, 17, 18, 19, 20]
  },
  {
    id: 5,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    icone: "ShieldAlert",
    descricao: "Transaminação, eliminação de amônia, deficiência de OTC, estresse oxidativo na G6PD e marcadores renais.",
    resumo: "O catabolismo de aminoácidos gera amônia (NH3), altamente neurotóxica. O fígado converte amônia em ureia no Ciclo da Ureia para excreção renal. A Via das Pentoses Fosfato (G6PD) produz NADPH para proteger hemácias do estresse oxidativo.",
    conceitosFundamentais: [
      "Transporte seguro de amônia: Glutamina (tecidos gerais) e Alanina (músculo via Ciclo de Cahill).",
      "Deficiência de OTC (ligada ao X): Causa hiperamonemia congênita com elevação marcante de Ácido Orotótico na urina.",
      "Neurotoxicidade da amônia: Acúmulo de Glutamina nos astrócitos atrai água, gerando edema cerebral citotóxico.",
      "G6PD gera NADPH nas hemácias para regenerar a Glutationa Reduzida (GSH). Sua falta causa hemólise induzida por drogas.",
      "Creatinina: Derivada da ciclização não-enzimática da fosfocreatina muscular; melhor marcador endógeno da TFG."
    ],
    relacaoMedicina: "Diagnóstico de erro inato do metabolismo no teste do pezinho, investigação de icterícia induzida por fármacos em pacientes deficientes em G6PD e monitoramento da taxa de filtração glomerular em nefrologia.",
    errosComuns: [
      "Confundir a deficiência de CPS-I (sem ácido orotótico) com a deficiência de OTC (com ácido orotótico alto).",
      "Achar que a urina contém amônia livre como forma primária de excreção de nitrogênio em vez de ureia.",
      "Esquecer que o NADPH da G6PD é o único escudo antioxidante das hemácias adultas."
    ],
    questoesRelacionadas: [21, 22, 23, 24, 25]
  },
  {
    id: 6,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    icone: "HeartPulse",
    descricao: "β-oxidação, carnitina, cetogênese, lipoproteínas (LPL / ApoC-II), estatinas e Hipercolesterolemia Familiar.",
    resumo: "Lipídios são biomoléculas energéticas e estruturais apolares. Os ácidos graxos são degradados na matriz mitocondrial via β-oxidação. O transporte no sangue ocorre via lipoproteínas (Quilomícrons, VLDL, LDL, HDL). O excesso de LDL favorece a aterosclerose.",
    conceitosFundamentais: [
      "Transporte de ácidos graxos longos para a mitocôndria exige a Lançadeira de Carnitina (CPT-I e CPT-II).",
      "O fígado produz corpos cetônicos, mas NÃO os consome por não expressar a enzima Tioforase.",
      "ApoC-II é o ativador indispensável da Lipoproteína Lipase (LPL) no endotélio vascular.",
      "Estatinas inibem competitivamente a HMG-CoA Redutase, induzindo superexpressão de Receptores de LDL (LDLR).",
      "Hipercolesterolemia Familiar: Mutação no gene do LDLR impede a endocitose do LDL, causando xantomas e infarto precoce."
    ],
    relacaoMedicina: "Cardiologia preventiva, prescrição de estatinas, manejo de dislipidemias graves, rastreamento familiar de xantomas e manejo da cetoacidose em diabetes mellitus tipo 1.",
    errosComuns: [
      "Achar que o fígado consome corpos cetônicos para energia própria.",
      "Confundir a função do LDL (leva colesterol do fígado aos tecidos) com o HDL (transporte reverso dos tecidos ao fígado).",
      "Esquecer que as estatinas agem inibindo a enzima chave inicial de biossíntese do colesterol (HMG-CoA Redutase)."
    ],
    questoesRelacionadas: [26, 27, 28, 29, 30]
  },
  {
    id: 7,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    icone: "Cpu",
    descricao: "Cinética de Michaelis-Menten, inibição competitiva e não-competitiva, PFK-1 e regulação por fosforilação.",
    resumo: "Enzimas são catalisadores biológicos altamente específicos. Sua atividade é ajustada por temperatura, pH, efetores alostéricos e modificações covalentes (fosforilação). Inibidores enzimáticos alteram os parâmetros cinéticos Km e Vmax.",
    conceitosFundamentais: [
      "Km: Concentração de substrato necessária para atingir a metade da velocidade máxima (Vmax / 2). Mede a afinidade.",
      "Inibição Competitiva: Compete pelo sítio ativo. Eleva o Km aparente; Vmax permanece inalterada.",
      "Inibição Não-Competitiva: Liga-se a sítio alostérico. Reduz a Vmax; Km permanece inalterado.",
      "Frutose-2,6-bisfosfato (F-2,6-BP) é o efetor alostérico positivo mais potente da PFK-1 glicolítica.",
      "Glucagon fosforila e INIBE a Glicogênio Sintase, enquanto ATIVA a Glicogênio Fosforilase."
    ],
    relacaoMedicina: "Base para a farmacologia clínica moderna (inibidores de ECA, metotrexato, estatinas, aspirina, pesticidas organofosforados) e diagnósticos de zimogênios / marcadores de lesão celular (Troponina, CK-MB, TGO/TGP).",
    errosComuns: [
      "Confundir Km com velocidade (Km é uma CONCENTRAÇÃO de substrato em Molar).",
      "Achar que a Vmax na inibição competitiva é alterada (com substrato suficiente, o inibidor é deslocado e atinge-se a Vmax original).",
      "Esquecer que a fosforilação pode inibir algumas enzimas (Glicogênio Sintase) e ativar outras (Glicogênio Fosforilase)."
    ],
    questoesRelacionadas: [31, 32, 33, 34, 35]
  }
];
