// Parte 1 do Banco de Questões LUmed (Q1 a Q70: Bioquímica & Microbiologia Geral / Virologia)

export const QUESTIONS_PART1 = [
  // =========================================================================
  // SEÇÃO 1: BIOQUÍMICA MÉDICA (Q1 a Q35 - Atividade de Revisão de Bioquímica)
  // =========================================================================
  {
    id: 1, numero: 1, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Bioenergética e Fluxo Metabólico", dificuldade: "Intermediária",
    enunciado: "Duas culturas de hepatócitos recebem glicose marcada. Sob alta insulina, a incorporação do marcador ao glicogênio aumenta, mas a concentração de glicose-6-fosfato permanece igual à do controle. Qual inferência é válida?",
    alternativas: [
      { id: "A", texto: "Concentrações iguais do intermediário indicam fluxos iguais." },
      { id: "B", texto: "A insulina pode aumentar o fluxo para o glicogênio sem elevar a concentração do intermediário." },
      { id: "C", texto: "O glicogênio é formado sem participação da glicose-6-fosfato." },
      { id: "D", texto: "A concentração do intermediário mede todas as velocidades metabólicas." }
    ],
    respostaCorreta: "B",
    explicacao: "Em sistemas metabólicos em estado de fluxo (steady-state), a velocidade de formação e consumo de um intermediário (glicose-6-fosfato) pode aumentar proporcionalmente sob ação hormonal (insulina), acelerando o fluxo metabólico em direção ao glicogênio sem alterar a concentração estática do metabólito.",
    explicacaoAlternativas: {
      A: "Incorreta. Concentrações estáticas iguais não significam velocidades de fluxo iguais.",
      B: "Correta. O fluxo da via aumenta proporcionalmente mantendo a concentração do intermediário constante.",
      C: "Incorreta. A glicose-6-fosfato é o intermediário obrigatório na glicogenogênese.",
      D: "Incorreta. A concentração estática não afere a velocidade cinética do fluxo metabólico."
    },
    conceitoPrincipal: "Diferença entre concentração estática de metabólito e fluxo metabólico dinâmico.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 2, numero: 2, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Regulação Energética e AMP/ATP", dificuldade: "Intermediária",
    enunciado: "Durante contração intensa, 2 ADP são convertidos pela adenilato-quinase em ATP e AMP. Qual consequência do aumento da razão AMP/ATP é compatível com a regulação energética?",
    alternativas: [
      { id: "A", texto: "Estímulo à síntese de reservas energéticas." },
      { id: "B", texto: "Bloqueio da utilização celular de glicose." },
      { id: "C", texto: "Dispensa da produção metabólica de ATP." },
      { id: "D", texto: "Estímulo a vias produtoras de ATP e redução de vias consumidoras." }
    ],
    respostaCorreta: "D",
    explicacao: "O aumento da razão AMP/ATP ativa a proteína quinase ativada por AMP (AMPK). A AMPK atua como o principal sensor energético celular, ativando vias catabólicas produtoras de ATP (glicólise, β-oxidação) e inibindo vias anabólicas consumidoras de ATP (síntese de glicogênio e lipídios).",
    explicacaoAlternativas: {
      A: "Incorreta. Alto AMP inibe o anabolismo e a síntese de reservas.",
      B: "Correta apenas o oposto: estimula o consumo de glicose para gerar ATP.",
      C: "Incorreta. O aumento de AMP sinaliza necessidade urgente de ATP.",
      D: "Correta. AMPK estimula vias catabólicas e inibe vias anabólicas."
    },
    conceitoPrincipal: "Papel do sensor AMPK na ativação do catabolismo sob alta razão AMP/ATP.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 3, numero: 3, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Membranas e Fosfolipídios", dificuldade: "Fácil",
    enunciado: "Uma formulação com fosfolipídios forma vesículas capazes de transportar fármaco hidrossolúvel. Qual arranjo molecular permite a formação do compartimento?",
    alternativas: [
      { id: "A", texto: "Cabeças polares voltadas à água e caudas apolares no interior da bicamada." },
      { id: "B", texto: "Caudas apolares voltadas à água e cabeças polares isoladas no interior." },
      { id: "C", texto: "Cabeças e caudas com igual solubilidade em água, dispostas aleatoriamente." },
      { id: "D", texto: "Moléculas ligadas por ligações peptídicas, formando parede impermeável." }
    ],
    respostaCorreta: "A",
    explicacao: "Os fosfolipídios são moléculas anfipáticas. Em meio aquoso, organizam-se espontaneamente em bicamadas ou lipossomas com as cabeças hidrofílicas/polares voltadas para as fases aquosas externa e interna, e as caudas hidrofóbicas/apolares interagindo no centro da bicamada.",
    explicacaoAlternativas: {
      A: "Correta. Arranjo anfipático da bicamada lipídica isolando fase aquosa.",
      B: "Incorreta. As caudas apolares são repelidas pela água.",
      C: "Incorreta. Cabeças e caudas têm afinidades opostas pela água.",
      D: "Incorreta. Fosfolipídios não são unidos por ligações peptídicas."
    },
    conceitoPrincipal: "Propriedades anfipáticas dos fosfolipídios e organização da bicamada lipídica.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 4, numero: 4, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Glicólise Anaeróbica e Regeneração de NAD+", dificuldade: "Intermediária",
    enunciado: "Ao bloquear a cadeia respiratória de células cultivadas com glicose, pesquisadores observam maior formação de lactato e produção residual de ATP. Qual mecanismo relaciona os resultados?",
    alternativas: [
      { id: "A", texto: "O lactato fornece oxigênio à mitocôndria." },
      { id: "B", texto: "A formação de lactato gera diretamente ATP." },
      { id: "C", texto: "A redução do piruvato regenera NAD+ para a continuidade da glicólise." },
      { id: "D", texto: "O lactato ativa a síntese de glicogênio, fonte imediata de ATP." }
    ],
    respostaCorreta: "C",
    explicacao: "Sem oxigênio ou com a cadeia respiratória bloqueada, a fosforilação oxidativa cessa e o NADH não pode ser reoxidado nas mitocôndrias. A Lactato Desidrogenase (LDH) reduz o piruvato a lactato consumindo NADH, regenerando o NAD+ necessário para que a glicólise continue produzindo ATP na etapa da GAPDH.",
    explicacaoAlternativas: {
      A: "Incorreta. Lactato não fornece oxigênio.",
      B: "Incorreta. A reação da LDH não produz ATP diretamente, apenas regenera NAD+.",
      C: "Correta. A reoxidação do NADH a NAD+ pela LDH mantém a glicólise ativa em anaerobiose.",
      D: "Incorreta. Lactato não ativa glicogenogênese para gerar ATP rápido."
    },
    conceitoPrincipal: "Regeneração do NAD+ via lactato desidrogenase para sustentação da glicólise anaeróbica.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 5, numero: 5, assunto: "Introdução às biomoléculas e ao metabolismo", subassunto: "Turnover e Ciclo do Ácido Cítrico", dificuldade: "Intermediária",
    enunciado: "A concentração de citrato permanece constante após uma intervenção, mas o rastreamento isotópico mostra maior incorporação de carbono da glicose nesse metabólito. O que os dados permitem concluir?",
    alternativas: [
      { id: "A", texto: "O fluxo é invariável quando a concentração não muda." },
      { id: "B", texto: "Sua formação e seu consumo podem ter aumentado simultaneamente." },
      { id: "C", texto: "O citrato marcado foi obrigatoriamente produzido fora da célula." },
      { id: "D", texto: "O ciclo do ácido cítrico foi interrompido." }
    ],
    respostaCorreta: "B",
    explicacao: "Em uma via metabólica em regime permanente (steady-state), o aumento proporcional da taxa de síntese e da taxa de degradação/consumo de um intermediário como o citrato resulta em maior incorporação isotópica sem alterar o pool de concentração estática.",
    explicacaoAlternativas: {
      A: "Incorreta. Concentração estável pode ocorrer com fluxo acelerado.",
      B: "Correta. Aceleração concomitante de entrada e saída mantém o nível constante com alto turnover.",
      C: "Incorreta. O citrato é sintetizado dentro das mitocôndrias pela citrato sintase.",
      D: "Incorreta. O aumento do carbono marcado indica ativação da via."
    },
    conceitoPrincipal: "Conceito de steady-state metabólico com aumento simétrico de síntese e consumo.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 6, numero: 6, assunto: "Água nos sistemas biológicos, pH e tampões", subassunto: "Tonicidade e Osmolaridade Celular", dificuldade: "Intermediária",
    enunciado: "Hemácias são colocadas em duas soluções de igual osmolaridade inicial: uma contém ureia, que atravessa rapidamente a membrana; outra contém soluto pouco permeável. Qual variável explica respostas distintas de volume celular?",
    alternativas: [
      { id: "A", texto: "A osmolaridade determina sozinha o volume final." },
      { id: "B", texto: "A ureia impede a passagem de água." },
      { id: "C", texto: "A permeabilidade do soluto determina sua contribuição para a tonicidade." },
      { id: "D", texto: "A tonicidade independe das propriedades da membrana." }
    ],
    respostaCorreta: "C",
    explicacao: "Osmolaridade considera o número total de partículas de soluto dissolvidas, enquanto Tonicidade refere-se apenas aos solutos NÃO permeáveis à membrana celular (que exercem pressão osmótica efetiva). A ureia é um soluto penetrante; ao se igualar nos dois lados da membrana, perde a capacidade de reter água, tornando a solução hipotônica efetiva.",
    explicacaoAlternativas: {
      A: "Incorreta. A tonicidade efetiva (solutos não penetrantes) é que determina o volume celular final.",
      B: "Incorreta. A ureia não bloqueia o fluxo de água.",
      C: "Correta. Solutos permeáveis (como a ureia) não contribuem para a tonicidade efetiva no equilíbrio.",
      D: "Incorreta. A tonicidade depende diretamente das propriedades de permeabilidade da membrana."
    },
    conceitoPrincipal: "Diferença entre osmolaridade total e tonicidade efetiva celular.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 7, numero: 7, assunto: "Água nos sistemas biológicos, pH e tampões", subassunto: "Propriedades da Água e Termorregulação", dificuldade: "Fácil",
    enunciado: "A evaporação do suor contribui para o resfriamento corporal durante exercício em ambiente quente. Qual propriedade da água explica esse fenômeno?",
    alternativas: [
      { id: "A", texto: "Seu elevado calor de vaporização exige absorção de energia térmica." },
      { id: "B", texto: "Sua evaporação libera energia térmica para a pele." },
      { id: "C", texto: "Sua ausência de ligações intermoleculares impede retenção de calor." },
      { id: "D", texto: "O suor resfria apenas por apresentar temperatura inicial menor." }
    ],
    respostaCorreta: "A",
    explicacao: "Devido às fortes pontes de hidrogênio intermoleculares, a água possui um elevado Calor Latente de Vaporização (~2.260 J/g). Para passar do estado líquido para vapor na pele, as moléculas de água precisam absorver uma grande quantidade de energia térmica do corpo, promovendo o resfriamento corpóreo.",
    explicacaoAlternativas: {
      A: "Correta. A quebra de pontes de hidrogênio na vaporização remove calor da pele.",
      B: "Incorreta. A evaporação remove (absorve) calor do corpo, não libera.",
      C: "Incorreta. A água possui intensas pontes de hidrogênio.",
      D: "Incorreta. O resfriamento se dá pela troca de fase líquida-vapor."
    },
    conceitoPrincipal: "Elevado calor de vaporização da água como mecanismo fisiológico de termorregulação.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 8, numero: 8, assunto: "Água nos sistemas biológicos, pH e tampões", subassunto: "Equação de Henderson-Hasselbalch", dificuldade: "Difícil",
    enunciado: "Um tampão com pKa 6,8 apresenta razão base/ácido igual a 4. Após adição de ácido, a razão passa a 1. Considerando log 4 = 0,6, qual é a variação aproximada de pH?",
    alternativas: [
      { id: "A", texto: "Aumenta 0,6, de 6,8 a 7,4." },
      { id: "B", texto: "Cai 1,0, de 7,8 a 6,8." },
      { id: "C", texto: "Não varia, porque a solução é tamponada." },
      { id: "D", texto: "Cai 0,6, de 7,4 a 6,8." }
    ],
    respostaCorreta: "D",
    explicacao: "Pela equação pH = pKa + log([Base]/[Ácido]):\n1. Estado Inicial: pH = 6.8 + log(4) = 6.8 + 0.6 = 7.4.\n2. Estado Final: Razão = 1, logo log(1) = 0. Assim, pH = 6.8 + 0 = 6.8.\n3. Variação: O pH cai 0,6 unidades (de 7,4 para 6,8).",
    explicacaoAlternativas: {
      A: "Incorreta. Adição de ácido reduz o pH.",
      B: "Incorreta. A queda calculada é de 0,6 unidades.",
      C: "Incorreta. Tampões atenuam a variação, mas o pH altera conforme consome a base.",
      D: "Correta. Cálculo preciso via Henderson-Hasselbalch: de 7,4 para 6,8."
    },
    conceitoPrincipal: "Aplicação quantitativa da equação de Henderson-Hasselbalch.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 9, numero: 9, assunto: "Água nos sistemas biológicos, pH e tampões", subassunto: "Tampão Bicarbonato e Le Chatelier", dificuldade: "Intermediária",
    enunciado: "Em duas culturas idênticas, apenas uma dispõe de sistema de remoção contínua de CO2 produzido pelo metabolismo. Considerando CO2 + H2O ⇌ H+ + HCO3−, qual mudança é esperada nessa cultura?",
    alternativas: [
      { id: "A", texto: "Aumento de H+ por deslocamento à direita." },
      { id: "B", texto: "Redução de H+ em comparação com a cultura fechada." },
      { id: "C", texto: "Perda completa da capacidade tampão do bicarbonato." },
      { id: "D", texto: "Ausência de efeito no pH devido à presença de bicarbonato." }
    ],
    respostaCorreta: "B",
    explicacao: "Pelo Princípio de Le Chatelier, ao remover continuamente o reagente CO2 do meio aquoso, o equilíbrio da reação reversible (CO2 + H2O ⇌ H+ + HCO3-) desloca-se para a esquerda. Isso consome H+ e HCO3-, reduzindo a concentração de H+ (elevando o pH) em relação ao sistema fechado onde o CO2 se acumularia.",
    explicacaoAlternativas: {
      A: "Incorreta. A remoção de CO2 desloca para a esquerda, consumindo H+.",
      B: "Correta. Menor PaCO2 reduz os íons H+ por deslocamento para a esquerda.",
      C: "Incorreta. É o funcionamento natural do tampão aberto.",
      D: "Incorreta. Alteração de CO2 impacta diretamente o pH."
    },
    conceitoPrincipal: "Deslocamento do equilíbrio do tampão bicarbonato pela remoção de CO2.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 10, numero: 10, assunto: "Água nos sistemas biológicos, pH e tampões", subassunto: "Capacidade Tamponante e Concentração", dificuldade: "Intermediária",
    enunciado: "Dois tampões apresentam mesmo pKa e pH, mas o primeiro tem concentração total de componentes dez vezes maior. Após igual adição de ácido a volumes iguais, qual resposta é esperada?",
    alternativas: [
      { id: "A", texto: "O segundo resiste mais à adição de ácido." },
      { id: "B", texto: "Ambos apresentam necessariamente igual variação de pH." },
      { id: "C", texto: "O primeiro apresenta menor variação por ter maior capacidade tampão." },
      { id: "D", texto: "O primeiro se acidifica mais por conter maior quantidade de ácido fraco." }
    ],
    respostaCorreta: "C",
    explicacao: "A capacidade tampão (resistência à mudança de pH por adição de ácido ou base) depende diretamente da concentração molar total das espécies conjugadas ([Base] + [Ácido]). O tampão 10 vezes mais concentrado possui maior quantidade absoluta de reserva alcalina (HCO3-) para neutralizar o H+ adicionado, resultando em menor variação de pH.",
    explicacaoAlternativas: {
      A: "Incorreta. O tampão menos concentrado esgota sua base rapidamente.",
      B: "Incorreta. A variação é inversamente proporcional à capacidade tampão.",
      C: "Correta. Maior concentração molar total confere maior capacidade tamponante.",
      D: "Incorreta. O primeiro possui mais base livre para amortecer a acidez."
    },
    conceitoPrincipal: "Relação entre a concentração molar do tampão e sua capacidade tampão quantitativa.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 11, numero: 11, assunto: "Eletrólitos e equilíbrio ácido-base", subassunto: "Acidose Metabólica com Anion Gap Elevado e Fórmula de Winter", dificuldade: "Difícil",
    enunciado: "Na sepse, encontram-se pH 7,20; Na+ 140; Cl− 104; HCO3− 12 mEq/L; PaCO2 25 mmHg. Use AG = Na − (Cl + HCO3) e Winter: PaCO2 = 1,5 × HCO3 + 8 ± 2. Qual interpretação integra os dados?",
    alternativas: [
      { id: "A", texto: "Acidose metabólica de ânion gap normal e acidose respiratória." },
      { id: "B", texto: "Alcalose metabólica de ânion gap elevado." },
      { id: "C", texto: "Acidose respiratória primária com compensação renal." },
      { id: "D", texto: "Acidose metabólica de ânion gap elevado com compensação respiratória apropriada." }
    ],
    respostaCorreta: "D",
    explicacao: "1. AG = 140 - (104 + 12) = 140 - 116 = 24 mEq/L (Elevado > 12 mEq/L por acúmulo de lactato na sepse).\n2. Fórmula de Winter: PaCO2 esperada = (1.5 x 12) + 8 ± 2 = 18 + 8 ± 2 = 26 ± 2 mmHg (faixa 24 a 28 mmHg).\n3. Como a PaCO2 medida é 25 mmHg (dentro da faixa de 24 a 28), confirma-se compensação respiratória adequada por hiperventilação.",
    explicacaoAlternativas: {
      A: "Incorreta. O Anion Gap calculou 24 (elevado) e a PaCO2 de 25 é a resposta compensatória adequada.",
      B: "Incorreta. pH 7.20 indica acidose acentuada.",
      C: "Incorreta. O distúrbio primário é a queda do HCO3- (metabólico).",
      D: "Correta. Acidose metabólica de AG elevado (24 mEq/L) com PaCO2 dentro da margem de Winter (25 mmHg)."
    },
    conceitoPrincipal: "Cálculo integrado de Anion Gap e fórmula de Winter no choque séptico.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 12, numero: 12, assunto: "Eletrólitos e equilíbrio ácido-base", subassunto: "Cetoacidose Diabética e Distúrbio Misto", dificuldade: "Difícil",
    enunciado: "Na cetoacidose, uma paciente apresenta HCO3− 8 mEq/L e PaCO2 32 mmHg após receber sedativo. Pela fórmula de Winter, qual distúrbio adicional é sugerido?",
    alternativas: [
      { id: "A", texto: "Acidose respiratória: PaCO2 maior que a esperada." },
      { id: "B", texto: "Alcalose respiratória: PaCO2 menor que a esperada." },
      { id: "C", texto: "Nenhum: PaCO2 está na faixa esperada." },
      { id: "D", texto: "Alcalose metabólica: HCO3− está elevado." }
    ],
    respostaCorreta: "A",
    explicacao: "Pela fórmula de Winter: PaCO2 esperada = (1.5 x 8) + 8 ± 2 = 12 + 8 ± 2 = 20 ± 2 mmHg (faixa 18 a 22 mmHg).\nA PaCO2 medida foi 32 mmHg (muito acima da faixa de 18-22 esperada). Isso significa que a sedação causou depressão respiratória (hipoventilação), adicionando uma Acidose Respiratória à Acidose Metabólica prévia.",
    explicacaoAlternativas: {
      A: "Correta. PaCO2 medida (32) maior que a esperada por Winter (18-22) indica Acidose Respiratória associada.",
      B: "Incorreta. A PaCO2 medida foi maior, não menor.",
      C: "Incorreta. 32 mmHg é anormalmente alto para um HCO3- de 8 mEq/L.",
      D: "Incorreta. HCO3- de 8 mEq/L é acidose metabólica grave."
    },
    conceitoPrincipal: "Identificação de Acidose Respiratória sobreposta usando a fórmula de Winter.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 13, numero: 13, assunto: "Eletrólitos e equilíbrio ácido-base", subassunto: "Alcalose Metabólica Hipoclorêmica", dificuldade: "Intermediária",
    enunciado: "Uma paciente com vômitos apresenta pH 7,52, HCO3− 38 mEq/L, hipocloremia e cloro urinário baixo. Que mecanismo contribui para a persistência da alteração?",
    alternativas: [
      { id: "A", texto: "Expansão de volume com reabsorção aumentada de bicarbonato." },
      { id: "B", texto: "Contração de volume e déficit de cloro, que dificultam a excreção renal de bicarbonato." },
      { id: "C", texto: "Ausência de filtração glomerular de bicarbonato quando sua concentração sobe." },
      { id: "D", texto: "Conversão plasmática direta de bicarbonato em lactato." }
    ],
    respostaCorreta: "B",
    explicacao: "Os vômitos induzem perda de HCl (gerando alcalose metabólica hipoclorêmica) e desidratação (contração de volume). A depleção de volume ativa o sistema renina-angiotensina-aldosterona (SRAA), forçando os rins a reabsorver Na+ junto com HCO3- no túbulo proximal. Sem cloro disponível no néfron distal, os rins não conseguem secretar HCO3-, perpetuando a alcalose (alcalose responsiva ao sal).",
    explicacaoAlternativas: {
      A: "Incorreta. Há contração de volume, não expansão.",
      B: "Correta. A contração de volume e a hipocloremia impedem a excreção renal compensatória do excesso de bicarbonato.",
      C: "Incorreta. Bicarbonato é filtrado livremente no glomérulo.",
      D: "Incorreta. Não ocorre conversão de bicarbonato em lactato."
    },
    conceitoPrincipal: "Fisiopatologia da alcalose metabólica hipoclorêmica de manutenção por contração de volume.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 14, numero: 14, assunto: "Eletrólitos e equilíbrio ácido-base", subassunto: "Hipercalemia e Eletrofisiologia Cardíaca", dificuldade: "Intermediária",
    enunciado: "Um paciente apresenta K+ 6,7 mEq/L, fraqueza e alterações eletrocardiográficas; a amostra não está hemolisada. Qual mecanismo explica o risco cardíaco?",
    alternativas: [
      { id: "A", texto: "Hiperpolarização progressiva sem alteração de canais." },
      { id: "B", texto: "Efeito restrito aos músculos esqueléticos." },
      { id: "C", texto: "Alteração do potencial de repouso e da disponibilidade de canais dependentes de voltagem." },
      { id: "D", texto: "Redução direta da hemoglobina circulante." }
    ],
    respostaCorreta: "C",
    explicacao: "O potencial de repouso das células miocárdicas é determinado pela razão K+ interno / K+ externo (Equação de Nernst). A elevação do K+ extracelular despolariza parcialmente o potencial de repouso de membrana (torna-o menos negativo). Isso inativa progressivamente os canais de sódio dependentes de voltagem (Nav1.5), lentificando a condução e predispondo a bloqueios atrioventriculares e Fibrilação Ventricular fatal.",
    explicacaoAlternativas: {
      A: "Incorreta. A hipercalemia despolariza a membrana (torna-a menos negativa), não hiperpolariza.",
      B: "Incorreta. O miocárdio é o órgão crítico afetado.",
      C: "Correta. Despolarização do potencial de repouso e inativação de canais de sódio voltagem-dependentes.",
      D: "Incorreta. Não interfere na concentração de hemoglobina."
    },
    conceitoPrincipal: "Efeito da hipercalemia sobre o potencial de repouso e excitabilidade miocárdica.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 15, numero: 15, assunto: "Eletrólitos e equilíbrio ácido-base", subassunto: "Distúrbio Ácido-Base Misto", dificuldade: "Difícil",
    enunciado: "Uma pessoa com pneumonia e diarreia intensa apresenta pH 7,46, PaCO2 25 mmHg e HCO3− 17 mEq/L. Que combinação de distúrbios primários deve ser considerada?",
    alternativas: [
      { id: "A", texto: "Acidose respiratória e alcalose metabólica." },
      { id: "B", texto: "Acidose respiratória e acidose metabólica." },
      { id: "C", texto: "Alcalose metabólica isolada." },
      { id: "D", texto: "Alcalose respiratória pela hiperventilação e acidose metabólica pela perda intestinal de bicarbonato." }
    ],
    respostaCorreta: "D",
    explicacao: "1. pH 7.46 (levemente alcalêmico): indica predomínio da Alcalose Respiratória provocada por hiperventilação motivada pela pneumonia/hipóxia (PaCO2 25 mmHg < 35).\n2. HCO3- 17 mEq/L (< 22): a diarreia intensa causa perda de secreções entéricas ricas em bicarbonato, caracterizando Acidose Metabólica de Ânion Gap Normal coexistente.",
    explicacaoAlternativas: {
      A: "Incorreta. A PaCO2 de 25 mmHg é alcalose respiratória, não acidose.",
      B: "Incorreta. O pH de 7.46 exclui acidose dupla primária.",
      C: "Incorreta. Há dois distúrbios primários atuando em sentidos opostos no pH.",
      D: "Correta. Coexistência de Alcalose Respiratória (pneumonia) e Acidose Metabólica (diarreia)."
    },
    conceitoPrincipal: "Diagnóstico de distúrbio ácido-base misto (alcalose respiratória + acidose metabólica).",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 16, numero: 16, assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico", subassunto: "Carga de Aminoácidos e Eletroforese", dificuldade: "Fácil",
    enunciado: "Uma mutação substitui glutamato por lisina na superfície de uma proteína e altera sua migração eletroforética sem mudar o comprimento da cadeia. Qual explicação é consistente?",
    alternativas: [
      { id: "A", texto: "A troca de grupo lateral negativo por positivo altera a carga líquida." },
      { id: "B", texto: "A mutação substitui ligação peptídica por fosfodiéster." },
      { id: "C", texto: "A troca só altera a proteína se romper a cadeia principal." },
      { id: "D", texto: "A migração depende exclusivamente da massa molecular." }
    ],
    respostaCorreta: "A",
    explicacao: "O Glutamato possui uma cadeia lateral ácida com carga negativa (-1 em pH fisiológico), enquanto a Lisina possui cadeia lateral básica com carga positiva (+1). A substituição de Glutamato por Lisina altera a carga líquida da proteína em +2 unidades, modificando sua mobilidade em um campo elétrico durante a eletroforese.",
    explicacaoAlternativas: {
      A: "Correta. Alteração da carga elétrica líquida pela troca de aminoácido ácido por básico.",
      B: "Incorreta. A cadeia peptídica se mantém com ligações amídica/peptídicas.",
      C: "Incorreta. Alterações de cadeias laterais afetam profundamente a carga e conformação.",
      D: "Incorreta. A eletroforese em gel nativo depende de carga, tamanho e forma."
    },
    conceitoPrincipal: "Impacto da substituição de aminoácidos na carga líquida e migração eletroforética.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 17, numero: 17, assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico", subassunto: "Biomarcadores Cardíacos e Troponina", dificuldade: "Intermediária",
    enunciado: "Um paciente com dor torácica apresenta troponina cardíaca elevada. A equipe solicita medida seriada, eletrocardiograma e avaliação clínica. Por que essa abordagem é necessária?",
    alternativas: [
      { id: "A", texto: "Uma única troponina identifica mecanismo e localização da lesão." },
      { id: "B", texto: "Qualquer elevação isolada demonstra ruptura aguda de placa." },
      { id: "C", texto: "A elevação indica lesão miocárdica; causa e caráter agudo dependem do contexto e da dinâmica temporal." },
      { id: "D", texto: "A troponina sobe apenas após destruição extensa de miocárdio." }
    ],
    respostaCorreta: "C",
    explicacao: "A troponina I e T cardíacas são marcadores organosspecíficos de lesão do miocárdio, mas NÃO são patognomônicas de Infarto Agudo do Miocárdio (IAM). Podem elevar-se em miocardite, embolia pulmonar, insuficiência renal e insuficiência cardíaca. Para confirmar se é um evento coronariano agudo, exige-se demonstrar curva de elevação/queda seriada associada a sintomas ou ECG alterado.",
    explicacaoAlternativas: {
      A: "Incorreta. Um valor isolado não diferencia injúria crônica de isquemia aguda.",
      B: "Incorreta. Diversas causas não isquêmicas elevam a troponina.",
      C: "Correta. Troponina confirma necrose/lesão miocárdica; a cinética temporal confirma a agudização.",
      D: "Incorreta. Dosagens de alta sensibilidade detectam microlesões miocárdicas."
    },
    conceitoPrincipal: "Interpretacão da dosagem seriada de troponina no diagnóstico diferencial da síndrome coronariana aguda.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 18, numero: 18, assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico", subassunto: "Estrutura Proteica e Ligação Peptídica", dificuldade: "Intermediária",
    enunciado: "Dois peptídeos têm os mesmos aminoácidos em sequências diferentes e apresentam atividades distintas. Na modelagem, a rotação de suas ligações peptídicas é limitada. Qual afirmação explica ambas as observações?",
    alternativas: [
      { id: "A", texto: "A composição determina a estrutura primária independentemente da ordem." },
      { id: "B", texto: "A sequência determina a estrutura primária e a ressonância restringe a rotação peptídica." },
      { id: "C", texto: "A ligação peptídica gira livremente, mas as cadeias laterais são fixas." },
      { id: "D", texto: "Peptídeos de composição igual formam necessariamente a mesma estrutura." }
    ],
    respostaCorreta: "B",
    explicacao: "1. A estrutura primária é definida pela ordem sequencial exata dos aminoácidos (diferente sequência = diferente proteína/peptídeo com dobramento único).\n2. A ligação peptídica (C-N) possui caráter parcial de dupla ligação devido à ressonância do grupo amida, impedindo a livre rotação do plano peptídico e restringindo a conformação espacial.",
    explicacaoAlternativas: {
      A: "Incorreta. A ordem exata determina a estrutura primária.",
      B: "Correta. A ordem aminoacídica dita a sequência primária e o caráter de dupla ligação por ressonância limita a rotação do plano C-N.",
      C: "Incorreta. A ligação peptídica é rígida e plana (não gira livremente).",
      D: "Incorreta. Peptídeos com mesmos aminoácidos em ordem distinta são moléculas completamente diferentes."
    },
    conceitoPrincipal: "Efeito da sequência primária e do caráter de dupla ligação por ressonância da ligação peptídica.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 19, numero: 19, assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico", subassunto: "Estereoquímica dos Aminoácidos", dificuldade: "Intermediária",
    enunciado: "Um estudante classifica L-alanina, D-alanina e glicina apenas pelo sinal de desvio da luz polarizada. Qual correção conceitual é necessária?",
    alternativas: [
      { id: "A", texto: "D e L indicam, respectivamente, rotação positiva e negativa." },
      { id: "B", texto: "A glicina possui enantiômeros por ter dois hidrogênios no carbono alfa." },
      { id: "C", texto: "D e L indicam ausência e presença do grupo amino." },
      { id: "D", texto: "D e L descrevem configuração relativa; a glicina não possui carbono alfa quiral." }
    ],
    respostaCorreta: "D",
    explicacao: "1. A nomenclatura D/L refere-se à configuração estereoquímica absoluta/relativa comparada ao D/L-gliceraldeído, e NÃO ao sinal experimental da rotação óptica (+ d-dextrógiro ou - l-levógiro).\n2. A Glicina é o único aminoácido padrão aquiral (sem carbono quiral), pois possui 2 átomos de hidrogênio ligados ao seu carbono alfa, não apresentando isometria óptica.",
    explicacaoAlternativas: {
      A: "Incorreta. D/L não se correlacionam diretamente com a rotação d- (+) ou l- (-).",
      B: "Incorreta. Ter 2 hidrogênios torna a glicina simétrica/aquiral (sem enantiômeros).",
      C: "Incorreta. D/L referem-se ao arranjo espacial dos substituintes no carbono alfa.",
      D: "Correta. D/L são configurações estereoquímicas; a glicina é aquiral."
    },
    conceitoPrincipal: "Estereoisometria dos aminoácidos e aquiralidade da glicina.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 20, numero: 20, assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico", subassunto: "Cálcio Total vs Cálcio Ionizado e Hipoalbuminemia", dificuldade: "Intermediária",
    enunciado: "Uma pessoa com albumina sérica de 2,0 g/dL apresenta cálcio total baixo, sem sinais de hipocalcemia. Qual exame responde mais diretamente se a fração biologicamente ativa está reduzida?",
    alternativas: [
      { id: "A", texto: "Cálcio ionizado, pois menor ligação à albumina pode reduzir o total sem reduzir o livre." },
      { id: "B", texto: "Cálcio total repetido, pois ele representa apenas a fração livre." },
      { id: "C", texto: "Albumina urinária, pois mede o cálcio livre plasmático." },
      { id: "D", texto: "Creatinina, pois calcula a fração de cálcio ligada à albumina." }
    ],
    respostaCorreta: "A",
    explicacao: "Cerca de 40-45% do cálcio plasmático circula ligado às proteínas (principalmente à albumina). Na hipoalbuminemia (albumina 2.0 g/dL), a fração ligada cai, reduzindo o Cálcio Total dosado no laboratório, mas a fração livre de Cálcio Ionizado (biologicamente ativa que atua nos nervos/músculos) permanece normal.",
    explicacaoAlternativas: {
      A: "Correta. A dosagem direta do Cálcio Ionizado mede a fração fisiologicamente ativa.",
      B: "Incorreta. O cálcio total inclui a fração ligada às proteínas.",
      C: "Incorreta. Albumina urinária afere proteinúria/lesão renal.",
      D: "Incorreta. Creatinina afere taxa de filtração glomerular."
    },
    conceitoPrincipal: "Influência da albumina sérica na fração total e livre (ionizada) do cálcio.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 21, numero: 21, assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal", subassunto: "Ciclo da Ureia e Fontes de Nitrogênio", dificuldade: "Fácil",
    enunciado: "Após trauma extenso, aumenta a proteólise muscular e parte do nitrogênio chega ao fígado como alanina e glutamina. Quais são as duas fontes imediatas de nitrogênio incorporadas na ureia?",
    alternativas: [
      { id: "A", texto: "Creatinina e lactato." },
      { id: "B", texto: "Amônia livre e aspartato." },
      { id: "C", texto: "Glicose e bicarbonato." },
      { id: "D", texto: "Ácido graxo e acetil-CoA." }
    ],
    respostaCorreta: "B",
    explicacao: "A molécula de Ureia [(NH2)2CO] contém 2 grupos amino:\n1. O primeiro nitrogênio entra como Amônia Livre (NH4+), combinada com HCO3- pela CPS-I para formar Carbamoil-Fosfato.\n2. O segundo nitrogênio entra trazido pelo aminoácido Aspartato, que reage com a citrulina no citosol formando argininosuccinato.",
    explicacaoAlternativas: {
      A: "Incorreta. Creatinina e lactato não entram na síntese de ureia.",
      B: "Correta. Amônia livre (via carbamoil-fosfato) e o grupo amino do Aspartato fornecem os dois nitrocênios da ureia.",
      C: "Incorreta. Glicose não fornece nitrogênio.",
      D: "Incorreta. Ácidos graxos não possuem nitrogênio."
    },
    conceitoPrincipal: "Origem dos dois átomos de nitrogênio da molécula de ureia (Amônia e Aspartato).",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 22, numero: 22, assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal", subassunto: "Erros Inatos do Ciclo da Ureia (OTC vs CPS I)", dificuldade: "Difícil",
    enunciado: "Dois lactentes têm hiperamonemia e citrulina baixa. Apenas o primeiro apresenta orotato urinário elevado. Qual associação distingue deficiência de OTC e deficiência de CPS I?",
    alternativas: [
      { id: "A", texto: "Primeiro: CPS I; segundo: OTC." },
      { id: "B", texto: "Ambos: CPS I, pois orotato não se relaciona ao ciclo." },
      { id: "C", texto: "Ambos: OTC, pois o orotato não distingue os defeitos." },
      { id: "D", texto: "Primeiro: OTC, com desvio do carbamoil-fosfato; segundo: CPS I." }
    ],
    respostaCorreta: "D",
    explicacao: "1. Na deficiência de Ornitina Transcarbamilase (OTC - enzima ligada ao X), o Carbamoil-Fosfato acumula-se nas mitocôndrias e extravasa para o citosol, onde desvia para a via de biossíntese de pirimidinas, gerando excesso de Ácido Orotico na urina.\n2. Na deficiência de Carbamoil-Fosfato Sintetase I (CPS I), o carbamoil-fosfato NÃO é formado; logo, há hiperamonemia com citrulina baixa e SEM ácido orótico urinário.",
    explicacaoAlternativas: {
      A: "Incorreta. É o oposto: OTC eleva o orotato urinário.",
      B: "Incorreta. Orotato eleva-se no bloqueio da OTC por desvio citoplasmático.",
      C: "Incorreta. O Orotato é o marcador que diferencia a deficiência de OTC da de CPS I.",
      D: "Correta. Primeiro = OTC (orotato urinário elevado por extravasamento de carbamoil-fosfato); segundo = CPS I."
    },
    conceitoPrincipal: "Diagnóstico diferencial dos erros inatos do ciclo da ureia pelo ácido orótico urinário.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 23, numero: 23, assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal", subassunto: "Deficiência de G6PD e Proteção pelo NADPH", dificuldade: "Intermediária",
    enunciado: "Após exposição oxidante, uma pessoa com deficiência de G6PD desenvolve hemólise, embora suas hemácias ainda produzam ATP pela glicólise. Por que o ATP não evita a lesão?",
    alternativas: [
      { id: "A", texto: "A glicólise gera todo o NADPH e a via das pentoses gera ATP." },
      { id: "B", texto: "ATP e NADPH são moléculas idênticas em locais diferentes." },
      { id: "C", texto: "A regeneração de glutationa reduzida requer NADPH, cuja produção está comprometida." },
      { id: "D", texto: "A hemólise decorre diretamente da queda da síntese hepática de ureia." }
    ],
    respostaCorreta: "C",
    explicacao: "As hemácias não possuem mitocôndrias e dependem exclusivamente da via das pentoses fosfato (catalisada pela G6PD) para produzir NADPH. O NADPH é essencial para a enzima Glutationa Redutase manter a Glutationa no estado reduzido (GSH). A GSH neutraliza espécies reativas de oxigênio (peróxidos). O ATP da glicólise fornece energia para bombas iônicas, mas não repara danos peroxidativos na membrana sem NADPH.",
    explicacaoAlternativas: {
      A: "Incorreta. A via das pentoses gera NADPH, e a glicólise gera ATP.",
      B: "Incorreta. ATP é doadora de fosfato/energia; NADPH é coenzima redutora/antioxidante.",
      C: "Correta. Sem G6PD há falta de NADPH para regenerar GSH, ocorrendo desnaturação de hemoglobina (corpúsculos de Heinz) e hemólise.",
      D: "Incorreta. Não há relação com síntese hepática de ureia."
    },
    conceitoPrincipal: "Papel do NADPH produzido pela G6PD na proteção eritrocitária contra o estresse oxidativo.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 24, numero: 24, assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal", subassunto: "Razão Ureia/Creatinina e Azotemia Pré-Renal", dificuldade: "Intermediária",
    enunciado: "Uma paciente desidratada apresenta ureia elevada em proporção maior que a creatinina; ambos os valores melhoram após reposição volêmica. Que interpretação é compatível com os resultados?",
    alternativas: [
      { id: "A", texto: "Hipoperfusão e maior reabsorção tubular de ureia podem explicar parte da diferença." },
      { id: "B", texto: "O achado comprova lesão glomerular irreversível." },
      { id: "C", texto: "A creatinina é reabsorvida mais intensamente que a ureia." },
      { id: "D", texto: "O achado revela necessariamente defeito primário no ciclo da ureia." }
    ],
    respostaCorreta: "A",
    explicacao: "Na desidratação (azotemia pré-renal), a hipoperfusão renal reduz a filtração de ureia e creatinina. No entanto, o estímulo à reabsorção de sódio e água nos túbulos renais arrasta passivamente a UREIA de volta à circulação (reabsorção tubular de ureia aumentada), fazendo com que a Ureia sérica suba desproporcionalmente mais que a Creatinina (razão Ureia/Creatinina > 40). A reposição de volume normaliza o fluxo e os marcadores.",
    explicacaoAlternativas: {
      A: "Correta. Reabsorção tubular passiva de ureia acoplada ao sódio/água na hipoperfusão pré-renal.",
      B: "Incorreta. A reversibilidade pós-hidratação afasta lesão glomerular irreversível.",
      C: "Incorreta. A creatinina não é reabsorvida significativamente pelos túbulos.",
      D: "Incorreta. Reflete alteração de perfusão hemodinâmica renal."
    },
    conceitoPrincipal: "Mecanismo da elevação desproporcional de ureia sobre a creatinina na azotemia pré-renal.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 25, numero: 25, assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal", subassunto: "Creatinina e Massa Muscular em Idosos", dificuldade: "Intermediária",
    enunciado: "Uma pessoa idosa com baixa massa muscular apresenta creatinina dentro do intervalo de referência, mas há suspeita de filtração glomerular reduzida. Qual abordagem é apropriada?",
    alternativas: [
      { id: "A", texto: "Excluir redução da filtração pela creatinina normal." },
      { id: "B", texto: "Interpretar a produção muscular reduzida e considerar estimativas com marcadores adicionais." },
      { id: "C", texto: "Usar exclusivamente ureia, que independe da hidratação." },
      { id: "D", texto: "Afirmar que creatinina normal descarta doença renal nessa população." }
    ],
    respostaCorreta: "B",
    explicacao: "A creatinina sérica é derivada da degradação espontânea da fosfocreatina muscular; portanto, sua taxa de produção é diretamente proporcional à massa magra. Idosos sarcopênicos produzem pouca creatinina; assim, mesmo com acentuada perda de filtração glomerular renal (IRCA), a creatinina sérica pode permanecer 'aparentemente normal', exigindo cálculo da depuração ou uso de marcadores como a Cistatina C.",
    explicacaoAlternativas: {
      A: "Incorreta. Creatinina normal em sarcopênicos pode mascarar insuficiência renal grave.",
      B: "Correta. Ajustar a interpretação à sarcopenia e solicitar cistatina C ou clearance de creatinina.",
      C: "Incorreta. A ureia sofre forte influência da dieta e hidratação.",
      D: "Incorreta. Creatinina isolada pode subestimar disfunção renal em idosos."
    },
    conceitoPrincipal: "Limitação da creatinina sérica isolada no diagnóstico da taxa de filtração glomerular em idosos sarcopênicos.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 26, numero: 26, assunto: "Lipídios, metabolismo lipídico e dislipidemias", subassunto: "Fórmula de Friedewald e Perfil Lipídico", dificuldade: "Fácil",
    enunciado: "Um perfil mostra colesterol total 268 mg/dL, HDL-C 34 mg/dL e triglicerídeos 290 mg/dL. Use LDL-C = CT − HDL-C − TG/5. Quais são LDL-C estimado e colesterol não HDL, respectivamente?",
    alternativas: [
      { id: "A", texto: "176 e 176 mg/dL." },
      { id: "B", texto: "234 e 176 mg/dL." },
      { id: "C", texto: "176 e 234 mg/dL." },
      { id: "D", texto: "210 e 268 mg/dL." }
    ],
    respostaCorreta: "C",
    explicacao: "1. VLDL estimado = TG / 5 = 290 / 5 = 58 mg/dL.\n2. LDL estimado (Friedewald) = CT - HDL - (TG/5) = 268 - 34 - 58 = 176 mg/dL.\n3. Colesterol Não-HDL = CT - HDL = 268 - 34 = 234 mg/dL.",
    explicacaoAlternativas: {
      A: "Incorreta. O colesterol não-HDL é CT - HDL = 234.",
      B: "Incorreta. Inverteu os valores.",
      C: "Correta. LDL-C = 176 mg/dL; Colesterol Não-HDL = 234 mg/dL.",
      D: "Incorreta. Erro nos cálculos aritméticos."
    },
    conceitoPrincipal: "Cálculo de LDL pela fórmula de Friedewald e determinação do Colesterol Não-HDL.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 27, numero: 27, assunto: "Lipídios, metabolismo lipídico e dislipidemias", subassunto: "Jejum Prolongado e Cetogênese Hepática", dificuldade: "Intermediária",
    enunciado: "No jejum prolongado, o fígado recebe ácidos graxos do tecido adiposo e direciona parte do acetil-CoA da beta-oxidação à cetogênese. Qual condição metabólica favorece esse direcionamento?",
    alternativas: [
      { id: "A", texto: "O oxaloacetato é demandado na gliconeogênese, limitando sua disponibilidade ao ciclo do ácido cítrico." },
      { id: "B", texto: "A beta-oxidação converte diretamente acetil-CoA em glicose." },
      { id: "C", texto: "A insulina elevada estimula lipólise e cetogênese." },
      { id: "D", texto: "A cetogênese utiliza somente oxaloacetato, sem acetil-CoA." }
    ],
    respostaCorreta: "A",
    explicacao: "No jejum prolongado ou cetoacidose, a intensa gliconeogênese hepática consome oxaloacetato para formar glicose. Com a escassez de oxaloacetato no estroma mitocondrial, o excesso de Acetil-CoA gerado pela β-oxidação dos ácidos graxos não consegue entrar no Ciclo de Krebs (Ciclo do Ácido Cítrico) e é desviado para a síntese de corpos cetônicos (acetoacetato e β-hidroxibutirato).",
    explicacaoAlternativas: {
      A: "Correta. O consumo de oxaloacetato pela gliconeogênese desvia o Acetil-CoA para a cetogênese.",
      B: "Incorreta. Acetil-CoA não pode ser convertido em glicose em mamíferos.",
      C: "Incorreta. No jejum há glucagon elevado e insulina baixa.",
      D: "Incorreta. A cetogênese é alimentada por moléculas de Acetil-CoA."
    },
    conceitoPrincipal: "Mecanismo de desvio de Acetil-CoA para a cetogênese por depleção de oxaloacetato na gliconeogênese.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 28, numero: 28, assunto: "Lipídios, metabolismo lipídico e dislipidemias", subassunto: "Deficiência de Carnitina (Hipoglicemia Hipocetótica)", dificuldade: "Intermediária",
    enunciado: "Uma criança apresenta hipoglicemia hipocetótica no jejum; suspeita-se de falha no transporte mitocondrial de ácidos graxos de cadeia longa. Qual achado reforça a hipótese?",
    alternativas: [
      { id: "A", texto: "Oxidação elevada desses ácidos graxos e cetogênese aumentada." },
      { id: "B", texto: "Ausência completa de glicólise nas hemácias." },
      { id: "C", texto: "Queda exclusiva da formação de ureia." },
      { id: "D", texto: "Oxidação diminuída e menor aporte de acetil-CoA à cetogênese." }
    ],
    respostaCorreta: "D",
    explicacao: "O transporte de ácidos graxos de cadeia longa para a matriz mitocondrial exige o sistema de Carnitina (CPT-I / CPT-II). Quando há defeito nessa ponte transportadora, a β-oxidação desmorona no jejum. Sem β-oxidação: 1. Não há geração de Acetil-CoA para a cetogênese (gerando hipocetose); 2. Não há ATP e NADH para sustentar a gliconeogênese, levando ao consumo exaustivo da glicose sanguínea (gerando hipoglicemia).",
    explicacaoAlternativas: {
      A: "Incorreta. A oxidação e cetogênese estariam diminuídas.",
      B: "Incorreta. Hemácias não possuem mitocôndrias nem dependem de carnitina.",
      C: "Incorreta. A alteração chave é no metabolismo energético e cetogênico.",
      D: "Correta. Queda da β-oxidação mitocondrial e ausência de Acetil-CoA para formar corpos cetônicos."
    },
    conceitoPrincipal: "Fisiopatologia dos defeitos do transporte por carnitina (hipoglicemia hipocetótica).",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 29, numero: 29, assunto: "Lipídios, metabolismo lipídico e dislipidemias", subassunto: "Quilomícron e Lipoproteína Lipase (LPL)", dificuldade: "Intermediária",
    enunciado: "Uma criança apresenta quilomícrons elevados após jejum adequado, triglicerídeos muito altos e pancreatite; investiga-se deficiência de lipoproteína lipase. Qual etapa está prejudicada?",
    alternativas: [
      { id: "A", texto: "Esterificação de colesterol dentro da HDL." },
      { id: "B", texto: "Hidrólise de triglicerídeos de quilomícrons para entrega de ácidos graxos." },
      { id: "C", texto: "Produção de corpos cetônicos a partir de acetil-CoA." },
      { id: "D", texto: "Conversão de LDL em quilomícrons nos capilares." }
    ],
    respostaCorreta: "B",
    explicacao: "A Lipoproteína Lipase (LPL) fica ancorada no endotélio capilar dos tecidos adiposo e muscular, ativada pela ApoC-II. Sua função é hidrolisar os triacilgliceróis transportados no núcleo de quilomícrons e VLDL em ácidos graxos livres e glicerol. A deficiência de LPL ou ApoC-II impede o clareamento dos quilomícrons, acumulando triglicerídeos no plasma (>1.000 mg/dL) com risco iminente de pancreatite aguda.",
    explicacaoAlternativas: {
      A: "Incorreta. Esterificação na HDL é realizada pela LCAT.",
      B: "Correta. A LPL cliva os triglicerídeos dos quilomícrons para absorção tecidual de ácidos graxos.",
      C: "Incorreta. LPL atua nos vasos capilares, não na matriz mitocondrial.",
      D: "Incorreta. LDL e quilomícrons são lipoproteínas de vias distintas."
    },
    conceitoPrincipal: "Papel da Lipoproteína Lipase (LPL) na hidrólise vascular dos triglicerídeos dos quilomícrons.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 30, numero: 30, assunto: "Lipídios, metabolismo lipídico e dislipidemias", subassunto: "Mecanismo de Ação das Estatinas", dificuldade: "Intermediária",
    enunciado: "Após iniciar estatina, um paciente apresenta redução do LDL-C. Que sequência liga o alvo molecular do medicamento ao efeito plasmático?",
    alternativas: [
      { id: "A", texto: "Menor síntese de colesterol, menos receptores de LDL e maior remoção de LDL." },
      { id: "B", texto: "Menor síntese, conversão de HDL em LDL e excreção renal de LDL." },
      { id: "C", texto: "Menor síntese de colesterol, mais receptores hepáticos de LDL e maior captação plasmática." },
      { id: "D", texto: "Menor síntese e bloqueio direto da absorção intestinal de triglicerídeos." }
    ],
    respostaCorreta: "C",
    explicacao: "1. As Estatinas inibem competitivamente a enzima HMG-CoA Redutase no fígado.\n2. A queda do colesterol livre intracelular nos hepatócitos ativa o fator de transcrição SREBP-2.\n3. O SREBP-2 induz a superexpressão de receptores de LDL (rLDL) na membrana dos hepatócitos.\n4. Com mais receptores na superfície, o fígado retira mais partículas de LDL da circulação sanguínea, reduzindo o LDL-C plasmático.",
    explicacaoAlternativas: {
      A: "Incorreta. As estatinas AUMENTAM os receptores de LDL no fígado.",
      B: "Incorreta. LDL não é excretado pelos rins.",
      C: "Correta. Inibição de HMG-CoA Redutase -> Queda de colesterol hepático -> Aumento de receptores de LDL no hepatócito -> Limpeza do LDL circulante.",
      D: "Incorreta. Inibição intestinal de colesterol é ação da Ezetimiba."
    },
    conceitoPrincipal: "Mecanismo celular e fisiológico de redução do LDL plasmático pelas Estatinas.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 31, numero: 31, assunto: "Enzimas, cinética enzimática, regulação e inibidores", subassunto: "Inibição Competitiva Enzimática", dificuldade: "Fácil",
    enunciado: "Após adicionar um inibidor reversível, a concentração de substrato necessária para alcançar metade de Vmáx passa de 2 para 8 mmol/L, sem alteração de Vmáx. Qual mecanismo é compatível?",
    alternativas: [
      { id: "A", texto: "Inibição não competitiva pura." },
      { id: "B", texto: "Inibição irreversível superada por substrato." },
      { id: "C", texto: "Ativação com aumento da afinidade aparente." },
      { id: "D", texto: "Inibição competitiva com aumento de Km aparente." }
    ],
    respostaCorreta: "D",
    explicacao: "A concentração de substrato para atingir Vmax/2 é o Km. Se o Km aumentou (de 2 para 8 mmol/L), a afinidade aparente diminuiu. Como a velocidade máxima (Vmax) permaneceu inalterada, o inibidor disputa diretamente o mesmo sítio ativo com o substrato, tratando-se de uma Inibição Competitiva Reversível.",
    explicacaoAlternativas: {
      A: "Incorreta. Inibição não-competitiva reduz a Vmax sem alterar o Km.",
      B: "Incorreta. Inibição irreversível diminui a Vmax por inativação covalente.",
      C: "Incorreta. A alteração descreve inibição, não ativação.",
      D: "Correta. Inibição competitiva aumenta o Km aparente mantendo a Vmax inalterada."
    },
    conceitoPrincipal: "Diagnóstico cinético da inibição competitiva (Km elevado e Vmax inalterada).",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 32, numero: 32, assunto: "Enzimas, cinética enzimática, regulação e inibidores", subassunto: "Inibição Não-Competitiva", dificuldade: "Intermediária",
    enunciado: "Outro inibidor reduz Vmáx à metade, mas não altera Km; elevar o substrato não restaura Vmáx. No modelo cinético simples, qual classificação corresponde aos dados?",
    alternativas: [
      { id: "A", texto: "Competitiva reversível." },
      { id: "B", texto: "Não competitiva pura." },
      { id: "C", texto: "Ativação por substrato." },
      { id: "D", texto: "Elevação da concentração de enzima ativa." }
    ],
    respostaCorreta: "B",
    explicacao: "Na Inibição Não-Competitiva Pura, o inibidor liga-se a um sítio alostérico distinto do sítio ativo, podendo ligar-se tanto à enzima livre (E) quanto ao complexo enzima-substrato (ES) com a mesma afinidade. Por não competir pelo sítio ativo, o Km não se altera, mas a capacidade catalítica das enzimas é reduzida (Vmax diminui) sem poder ser superada por excesso de substrato.",
    explicacaoAlternativas: {
      A: "Incorreta. Inibição competitiva pode ser superada por excesso de substrato.",
      B: "Correta. Inibição não-competitiva diminui a Vmax mantendo o Km inalterado.",
      C: "Incorreta. Trata-se de inibição.",
      D: "Incorreta. Reduziria Vmax se inativasse enzimas sem ser por ligação reversível alostérica."
    },
    conceitoPrincipal: "Cinética da inibição não-competitiva alostérica (Vmax reduzida e Km inalterado).",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 33, numero: 33, assunto: "Enzimas, cinética enzimática, regulação e inibidores", subassunto: "Alosterismo e Curva Sigmoidal", dificuldade: "Intermediária",
    enunciado: "Uma enzima multissubunidades tem curva sigmoidal de atividade versus substrato. A adição de um efetor desloca a curva à esquerda. Qual interpretação é adequada?",
    alternativas: [
      { id: "A", texto: "Há maior atividade em menores concentrações de substrato, compatível com regulação alostérica." },
      { id: "B", texto: "A enzima tornou-se obrigatoriamente monomérica." },
      { id: "C", texto: "Metade dos sítios foi destruída de forma irreversível." },
      { id: "D", texto: "O substrato deixou de se ligar à enzima." }
    ],
    respostaCorreta: "A",
    explicacao: "Enzimas alostéricas multissubunidades apresentam curva de saturação sigmoide por cooperatividade positiva. Um efetor alostérico positivo (ativador) estabiliza o estado R (alta afinidade), deslocando a curva para a ESQUERDA (K0.5 diminui), permitindo maior velocidade em menores concentrações de substrato.",
    explicacaoAlternativas: {
      A: "Correta. Deslocamento à esquerda por efetor alostérico positivo indica aumento da afinidade aparente.",
      B: "Incorreta. A cooperatividade exige a manutenção do oligômero.",
      C: "Incorreta. Não houve destruição irreversível.",
      D: "Incorreta. O substrato liga-se com maior afinidade."
    },
    conceitoPrincipal: "Deslocamento da curva sigmoide por ativadores alostéricos positivos.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 34, numero: 34, assunto: "Enzimas, cinética enzimática, regulação e inibidores", subassunto: "Velocidade Inicial e Ensaio Enzimático", dificuldade: "Intermediária",
    enunciado: "Um laboratório compara atividade enzimática pela produção medida nos primeiros segundos e, em outro ensaio, apenas após longo tempo de reação. Por que a segunda medição pode não representar velocidade inicial?",
    alternativas: [
      { id: "A", texto: "A velocidade inicial só ocorre após equilíbrio." },
      { id: "B", texto: "Produto acumulado equivale à concentração de enzima." },
      { id: "C", texto: "As concentrações de substrato e produto mudam e podem alterar a velocidade." },
      { id: "D", texto: "Não há produto detectável no início da reação." }
    ],
    respostaCorreta: "C",
    explicacao: "A velocidade inicial (V0) deve ser medida logo no início da reação (<5% de consumo de substrato), onde a [S] permanece praticamente constante e o acúmulo de produto é insignificante. Com o passar do tempo, o substrato é esgotado, o produto se acumula (podendo causar inibição por produto ou reação reversa) e a enzima pode sofrer desnaturação, desacelerando a taxa da reação.",
    explicacaoAlternativas: {
      A: "Incorreta. No equilíbrio, a velocidade líquida da reação é zero.",
      B: "Incorreta. Produto acumulado é resultado do tempo x velocidade.",
      C: "Correta. O esgotamento do substrato e o acúmulo do produto desaceleram a velocidade da reação ao longo do tempo.",
      D: "Incorreta. Ensaios modernos medem produto logo nos primeiros instantes."
    },
    conceitoPrincipal: "Requisitos experimentais para determinação da velocidade inicial (V0) em ensaios enzimáticos.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 35, numero: 35, assunto: "Enzimas, cinética enzimática, regulação e inibidores", subassunto: "Inibição Irreversível vs Reversível e Diálise", dificuldade: "Difícil",
    enunciado: "Após incubar enzima com inibidor e remover moléculas livres por diálise, a atividade permanece baixa. A adição de enzima nova recupera parte da atividade. Qual explicação integra os dois resultados?",
    alternativas: [
      { id: "A", texto: "O inibidor livre bloqueou igualmente a enzima nova." },
      { id: "B", texto: "Todo o substrato foi consumido durante a diálise." },
      { id: "C", texto: "A inibição competitiva foi integralmente removida pela diálise." },
      { id: "D", texto: "Parte da enzima original permaneceu inativada, e a nova forneceu sítios ativos." }
    ],
    respostaCorreta: "D",
    explicacao: "1. A permanência da baixa atividade mesmo após a remoção do inibidor livre por diálise demonstra que a inativação foi IRREVERSÍVEL (modificação covalente do sítio ativo original).\n2. Como o inibidor livre foi dialisado e removido, a adição posterior de enzima nova acrescenta sítios ativos livres intactos, recuperando a atividade catalítica na proporção da nova enzima adicionada.",
    explicacaoAlternativas: {
      A: "Incorreta. Não havia inibidor livre pois foi removido por diálise.",
      B: "Incorreta. A diálise remove pequenas moléculas solúveis sem conter o ensaio.",
      C: "Incorreta. Se fosse inibição competitiva reversível, a diálise teria restaurado a atividade da enzima original.",
      D: "Correta. Inativação irreversível da enzima original + recuperação catalítica pela nova enzima sem inibidor livre."
    },
    conceitoPrincipal: "Diferenciação de inibidores irreversíveis pela permanência de inativação pós-diálise.",
    source: "Material fornecido pelo usuário (Atividade de Revisão de Bioquímica)", sourceUrl: "", sourceYear: "2026"
  },

  // =========================================================================
  // SEÇÃO 2: MICROBIOLOGIA & VIROLOGIA (Q36 a Q70)
  // =========================================================================
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
    conceitoPrincipal: "Diferenciação estrutural entre procariotos (bactérias com peptidoglicano) e eucariotos.",
    source: "Fiocruz - Guia de Microbiologia Médica", sourceUrl: "https://www.fiocruz.br", sourceYear: "2023"
  },
  {
    id: 37, numero: 37, assunto: "Módulo 1 — Introdução à Microbiologia", subassunto: "Microbiota Humana e Proteção", dificuldade: "Intermediária",
    enunciado: "A microbiota intestinal humana mutualista atua como barreira defensiva contra infecções oportunistas através de qual mecanismo fisiológico chave?",
    alternativas: [
      { id: "A", texto: "Secreção direta de anticorpos IgM no lúmen do cólon." },
      { id: "B", texto: "Exclusão competitiva por nutrientes e receptores de adesão, além da produção de bacteriocinas e síntese de vitaminas K e B12." },
      { id: "C", texto: "Acidificação extrema do estômago por ácido clorídrico." },
      { id: "D", texto: "Fagocitose ativa de patógenos por bactérias comensais." }
    ],
    respostaCorreta: "B",
    explicacao: "A microbiota intestinal comensal impede a colonização por patógenos exógenos ao competir por nutrientes essenciais e sítios de adesão nas vilosidades. Além disso, sintetiza micronutrientes indispensáveis (como Vitaminas K e B12) e bacteriocinas inibitórias.",
    explicacaoAlternativas: {
      A: "Incorreta. Anticorpos são produzidos por plasmócitos humanos da mucosa (IgA).",
      B: "Correta. Proteção por exclusão competitiva, bacteriocinas e síntese de vitaminas K e B12.",
      C: "Incorreta. O suco gástrico é produzido pelas células parietais humanas do estômago.",
      D: "Incorreta. Bactérias não realizam fagocitose."
    },
    conceitoPrincipal: "Função protetora da microbiota intestinal por exclusão competitiva e síntese de vitaminas.",
    source: "CDC - Human Microbiome & Infection Prevention", sourceUrl: "https://www.cdc.gov", sourceYear: "2024"
  },
  {
    id: 38, numero: 38, assunto: "Módulo 1 — Introdução à Microbiologia", subassunto: "Coloração de Gram e Parede Bacteriana", dificuldade: "Intermediária",
    enunciado: "Um laboratório de microbiologia realiza a Coloração de Gram em um lavado broncoalveolar. Bactérias Gram-positivas coram-se em roxo/violeta, enquanto Gram-negativas coram-se em rosa/vermelho. Qual diferença estrutural explica essa propriedade?",
    alternativas: [
      { id: "A", texto: "Bactérias Gram-positivas possuem parede espessa de peptidoglicano que retém o complexo cristal violeta-iodo." },
      { id: "B", texto: "Bactérias Gram-negativas possuem espessa camada de quitina insolúvel em álcool." },
      { id: "C", texto: "Gram-positivas não possuem membrana plasmática interna." },
      { id: "D", texto: "Gram-negativas acumulam lipofuscina no nucleoide." }
    ],
    respostaCorreta: "A",
    explicacao: "A parede celular das bactérias Gram-positivas é formada por uma camada espessa de Peptidoglicano (com ácidos teicoicos e lipoteicoicos) que se desidrata ao contato com o álcool-acetona, retendo o corante Cristal Violeta-Iodo (violeta). As Gram-negativas possuem fina camada de peptidoglicano e membrana externa lipídica que é lavada pelo álcool, descorando e recebendo o contracorante fucsina/safranina (rosa/vermelho).",
    explicacaoAlternativas: {
      A: "Correta. Espessa camada de peptidoglicano das Gram-positivas retém o cristal violeta.",
      B: "Incorreta. Quitina é encontrada em fungos.",
      C: "Incorreta. Ambas possuem membrana plasmática lipídica interna.",
      D: "Incorreta. Lipofuscina é um pigmento de desgaste celular em eucariontes."
    },
    conceitoPrincipal: "Base estrutural da diferenciação na Coloração de Gram pela espessura do peptidoglicano.",
    source: "Ministério da Saúde - Manual de Microbiologia Clínica", sourceUrl: "https://www.gov.br/saude", sourceYear: "2023"
  },
  {
    id: 39, numero: 39, assunto: "Módulo 1 — Introdução à Microbiologia", subassunto: "Resistência Antimicrobiana e Beta-lactamases", dificuldade: "Difícil",
    enunciado: "Uma cepa de Klebsiella pneumoniae isolada em UTI produz beta-lactamase de espectro estendido (ESBL). Qual é o mecanismo de ação molecular dessa enzima de resistência?",
    alternativas: [
      { id: "A", texto: "Bombear o antibiótico para fora da célula por efluxo dependente de ATP." },
      { id: "B", texto: "Clivar o anel beta-lactâmico de penicilinas e cefalosporinas, inativando a ação inibidora sobre a transpeptidase (PBP)." },
      { id: "C", texto: "Alterar a subunidade 50S do ribossomo bacteriano." },
      { id: "D", texto: "Sintetizar uma parede celular espessa rica em micolatos." }
    ],
    respostaCorreta: "B",
    explicacao: "As enzimas beta-lactamases (como as ESBL) hidrolisam a ligação amida do anel beta-lactâmico de antibióticos (penicilinas, cefalosporinas e monobactâmicos). Com o anel aberto, o antibiótico não consegue se ligar às proteínas ligadoras de penicilina (PBPs / transpeptidases), permitindo que a bactéria continue sintetizando seu peptidoglicano.",
    explicacaoAlternativas: {
      A: "Incorreta. Esse é o mecanismo de bombas de efluxo.",
      B: "Correta. Hidrólise do anel beta-lactâmico inativa o fármaco antes da ligação às PBPs.",
      C: "Incorreta. Alteração ribossômica confere resistência a macrolídeos/lincosamidas.",
      D: "Incorreta. Paredes ricas em ácidos micolicos são características de micobactérias."
    },
    conceitoPrincipal: "Mecanismo enzimático de resistência bacteriana aos beta-lactâmicos por hidrólise do anel.",
    source: "OMS/WHO - Global Antimicrobial Resistance Report", sourceUrl: "https://www.who.int", sourceYear: "2024"
  },
  {
    id: 40, numero: 40, assunto: "Módulo 1 — Introdução à Microbiologia", subassunto: "Cápsula Bacteriana e Virulência", dificuldade: "Intermediária",
    enunciado: "Streptococcus pneumoniae apresenta variantes capsuladas ricas em polissacarídeos e variantes acapsuladas. Em ensaios in vivo, por que apenas as cepas capsuladas causam pneumonia grave e bacteremia?",
    alternativas: [
      { id: "A", texto: "A cápsula polissacarídica dificulta a opsonização e a fagocitose pelos macrófagos e neutrófilos." },
      { id: "B", texto: "A cápsula produz toxinas que destroem a hemoglobina das hemácias." },
      { id: "C", texto: "A cápsula é necessária para a replicação intracelular no citoplasma." },
      { id: "D", texto: "A cápsula permite que a bactéria se locomova por flagelos." }
    ],
    respostaCorreta: "A",
    explicacao: "A cápsula bacteriana é uma camada externa gelatinosa de polissacarídeos. Sua principal função como fator de virulência é inibir a opsonização pelo sistema complemento (C3b) e impedir o reconhecimento físico por macrófagos e neutrófilos, inibindo a fagocitose e permitindo a disseminação bacterêmica.",
    explicacaoAlternativas: {
      A: "Correta. A cápsula polissacarídica é um antifagocitário crucial.",
      B: "Incorreta. A cápsula não é uma toxina hemolítica.",
      C: "Incorreta. Streptococcus pneumoniae é um patógeno predominantemente extracelular.",
      D: "Incorreta. Flagelos são estruturas protéicas distintas para motilidade."
    },
    conceitoPrincipal: "Papel da cápsula bacteriana como estrutura antifagocitária e fator de virulência.",
    source: "PubMed - Pneumococcal Capsular Virulence Mechanics", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov", sourceYear: "2023"
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
    conceitoPrincipal: "Labilidade dos vírus envelopados perante saneantes e álcool 70%.",
    source: "Fiocruz - Virologia Humana", sourceUrl: "https://www.fiocruz.br", sourceYear: "2023"
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
    conceitoPrincipal: "Diferenciação metodológica entre a vacina inativada Salk (IPV) e a vacina atenuada Sabin (OPV).",
    source: "Ministério da Saúde - PNI Imunizações", sourceUrl: "https://www.gov.br/saude", sourceYear: "2024"
  },
  {
    id: 43, numero: 43, assunto: "Módulo 2 — Introdução à Virologia", subassunto: "Simetria do Capsídeo Viral", dificuldade: "Fácil",
    enunciado: "A arquitetura do capsídeo proteico viral organiza-se em formas geométricas bem definidas. O Adenovírus apresenta simetria icosaédrica clássica. Como se caracteriza essa estrutura tridimensional?",
    alternativas: [
      { id: "A", texto: "Poliedro regular com 20 faces triangulares equiláteras e 12 vértices." },
      { id: "B", texto: "Tubo helicoidal espiralado ao redor do RNA." },
      { id: "C", texto: "Formato de tijolo amorfo revestido por membrana lipídica dupla." },
      { id: "D", texto: "Estrutura biconcava com cauda contrátil." }
    ],
    respostaCorreta: "A",
    explicacao: "A simetria icosaédrica é constituída por 20 faces triangulares equiláteras e 12 vértices, formada pela auto-montagem de subunidades proteicas chamadas capsômeros (pentons e hexons).",
    explicacaoAlternativas: {
      A: "Correta. Icosaedro regular com 20 faces e 12 vértices.",
      B: "Incorreta. Essa é a simetria helicoidal (ex: Rabdovírus, Influenza).",
      C: "Incorreta. Essa é a simetria complexa dos Poxvírus.",
      D: "Incorreta. Essa é a estrutura de bacteriófagos complexos."
    },
    conceitoPrincipal: "Geometria do capsídeo icosaédrico viral.",
    source: "Material fornecido pelo usuário (Virologia.pdf)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 44, numero: 44, assunto: "Módulo 2 — Introdução à Virologia", subassunto: "Etapas do Ciclo Replicativo Viral", dificuldade: "Intermediária",
    enunciado: "Durante a infecção celular, a etapa em que o capsídeo proteico do vírus é degradado por enzimas proteolíticas da célula hospedeira, liberando o ácido nucleico viral no citoplasma, recebe qual denominação?",
    alternativas: [
      { id: "A", texto: "Adsorção." },
      { id: "B", texto: "Brotamento." },
      { id: "C", texto: "Desencapsidação (Uncoating)." },
      { id: "D", texto: "Montagem." }
    ],
    respostaCorreta: "C",
    explicacao: "A Desencapsidação (uncoating) é a etapa subsequente à penetração em que o ácido nucleico viral é libertado do seu capsídeo proteico envolvente através da ação de enzimas lisossomais ou proteases endossomais da célula hospedeira.",
    explicacaoAlternativas: {
      A: "Incorreta. Adsorção é o ligamento inicial do vírus ao receptor da membrana.",
      B: "Incorreta. Brotamento é a saída do vírus envelopado ao final do ciclo.",
      C: "Correta. Desencapsidação é a liberação do ácido nucleico por remoção do capsídeo.",
      D: "Incorreta. Montagem é a reunião dos componentes virais sintetizados."
    },
    conceitoPrincipal: "Definição da fase de desencapsidação no ciclo replicativo viral.",
    source: "Material fornecido pelo usuário (Virologia.pdf)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 45, numero: 45, assunto: "Módulo 2 — Introdução à Virologia", subassunto: "Persistência Ambiental de Vírus Nus", dificuldade: "Fácil",
    enunciado: "Por que vírus não envelopados (nus), como o Norovírus e o Poliovírus, apresentam elevada taxa de transmissão pela via fecal-oral e conseguem sobreviver no esgoto sanitário?",
    alternativas: [
      { id: "A", texto: "Possuem cápsula de peptidoglicano extremamente espessa." },
      { id: "B", texto: "Seu capsídeo proteico rígido resiste à desidratação, às variações de pH ácido do estômago e aos sais biliares." },
      { id: "C", texto: "Realizam fotossíntese para produzir sua própria energia extracelular." },
      { id: "D", texto: "O envelope de gordura protege o RNA contra a acidez." }
    ],
    respostaCorreta: "B",
    explicacao: "Vírus não envelopados são constituídos unicamente pelo nucleocapsídeo proteico rígido. A ausência do envelope lipídico lábil os torna altamente resistentes ao pH ácido gástrico, aos sais biliares e a detergentes, permitindo a sobrevivência no trato digestivo e a transmissão hídrica/fecal-oral.",
    explicacaoAlternativas: {
      A: "Incorreta. Vírus não possuem peptidoglicano.",
      B: "Correta. Capsídeo proteico rígido confere alta estabilidade ao pH gástrico e ao ambiente.",
      C: "Incorreta. Vírus não possuem metabolismo autônomo nem fotossíntese.",
      D: "Incorreta. Vírus nus NÃO possuem envelope de gordura."
    },
    conceitoPrincipal: "Resistência físico-química dos vírus não envelopados ao pH ácido e transmissão digestiva.",
    source: "CDC - Viral Gastroenteritis & Waterborne Pathogens", sourceUrl: "https://www.cdc.gov", sourceYear: "2024"
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
    conceitoPrincipal: "Papéis funcionais complementares da Hemaglutinina (entrada) e Neuraminidase (liberação).",
    source: "Material fornecido pelo usuário (Virologia.pdf)", sourceUrl: "", sourceYear: "2026"
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
    conceitoPrincipal: "Diferenciação patogenética entre Deriva Antigênica (Drift - sazonal) e Salto Antigênico (Shift - pandêmico).",
    source: "OMS/WHO - Influenza Pandemic Risk Assessment", sourceUrl: "https://www.who.int", sourceYear: "2024"
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
    conceitoPrincipal: "Mecanismo farmacológico do Oseltamivir como inibidor da Neuraminidase.",
    source: "Ministério da Saúde - Protocolo de Tratamento da Influenza", sourceUrl: "https://www.gov.br/saude", sourceYear: "2024"
  },
  {
    id: 49, numero: 49, assunto: "Módulo 3 — Vírus Influenza (Gripe)", subassunto: "Transcrição Nuclear do Influenza", dificuldade: "Difícil",
    enunciado: "Os vírus de RNA tipicamente replicam-se inteiramente no citoplasma da célula hospedeira. Contudo, o vírus Influenza apresenta qual peculiaridade única em seu ciclo replicativo?",
    alternativas: [
      { id: "A", texto: "Sua transcrição e replicação do genoma de RNA ocorrem obrigatoriamente dentro do NÚCLEO da célula hospedeira." },
      { id: "B", texto: "Transforma seu genoma em DNA proviral integrado ao cromossomo hospedeiro." },
      { id: "C", texto: "Não utiliza a maquinaria de ribossomos da célula." },
      { id: "D", texto: "Replica-se dentro dos lisossomos sem libertar o RNA." }
    ],
    respostaCorreta: "A",
    explicacao: "Diferente de quase todos os outros vírus de RNA fita negativa (que replicam no citoplasma), o vírus Influenza transporta suas RNP (ribonucleoproteínas) para dentro do NÚCLEO celular, utilizando o splicing celular e roubando o cap dos pré-mRNAs celulares (cap-snatching).",
    explicacaoAlternativas: {
      A: "Correta. O Influenza é um vírus de RNA que transcreve e replica dentro do núcleo celular.",
      B: "Incorreta. Isso é característico dos Retrovírus (HIV) via transcriptase reversa.",
      C: "Incorreta. Depende obrigatoriamente dos ribossomos hospedeiros para tradução.",
      D: "Incorreta. O RNA deve ser liberado no citosol para direcionar a tradução."
    },
    conceitoPrincipal: "Exceção biológica do vírus Influenza ao realizar transcrição e replicação de RNA no núcleo celular.",
    source: "Material fornecido pelo usuário (Virologia.pdf)", sourceUrl: "", sourceYear: "2026"
  },
  {
    id: 50, numero: 50, assunto: "Módulo 3 — Vírus Influenza (Gripe)", subassunto: "Diferença entre Influenza A e B", dificuldade: "Intermediária",
    enunciado: "Na vigilância epidemiológica das síndromes gripais, por que o vírus Influenza A é associado a grandes Pandemias Globais, enquanto o Influenza B causa apenas surtos e epidemias regionais?",
    alternativas: [
      { id: "A", texto: "O Influenza A infecta múltiplas espécies (humanos, aves, suínos), permitindo o rearranjo genético (Shift), enquanto o Influenza B infecta quase exclusivamente humanos." },
      { id: "B", texto: "O Influenza B não possui espícula de Hemaglutinina." },
      { id: "C", texto: "O Influenza A é um vírus de DNA altamente estável." },
      { id: "D", texto: "O Influenza B é imune ao Oseltamivir." }
    ],
    respostaCorreta: "A",
    explicacao: "O Influenza A possui um vasto reservatório animal (aves aquáticas migratórias, suínos, cavalos), permitindo co-infecções de espécies e rearranjo drástico dos 8 segmentos de RNA (Antigenic Shift). O Influenza B é restrito à população humana, sofrendo apenas mutações pontuais (Drift), incapaz de realizar o Shift pandêmico.",
    explicacaoAlternativas: {
      A: "Correta. Reservatório animal diversificado do Influenza A viabiliza o Antigenic Shift pandêmico.",
      B: "Incorreta. Ambos possuem HA e NA.",
      C: "Incorreta. Ambos são vírus de RNA fita simples.",
      D: "Incorreta. O Oseltamivir é ativo contra Influenza A e B."
    },
    conceitoPrincipal: "Importância do reservatório animal do Influenza A na gênese de pandemias.",
    source: "Material fornecido pelo usuário (Virologia.pdf)", sourceUrl: "", sourceYear: "2026"
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
    conceitoPrincipal: "Tropismo térmico do Rinovírus (33-35°C) e a limitação ao trato respiratório superior.",
    source: "Fiocruz - Vírus Respiratórios", sourceUrl: "https://www.fiocruz.br", sourceYear: "2023"
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
    conceitoPrincipal: "Formação de sincícios citopáticos pela Proteína F do VSR na Bronquiolite Viral Aguda.",
    source: "CDC - Respiratory Syncytial Virus Infection", sourceUrl: "https://www.cdc.gov", sourceYear: "2024"
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
    conceitoPrincipal: "Entrada do SARS-CoV-2 via receptor ACE2 e clivagem proteolítica por TMPRSS2.",
    source: "Ministério da Saúde - Guia de Manejo da COVID-19", sourceUrl: "https://www.gov.br/saude", sourceYear: "2024"
  },
  {
    id: 54, numero: 54, assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "Adenovírus e Ceratoconjuntivite", dificuldade: "Intermediária",
    enunciado: "Um paciente jovem apresenta febre alta, dor de garganta intensa com exsudato purulento nas tonsilas e conjuntivite folicular bilateral não purulenta. O quadro mimetiza faringite estreptocócica. Qual vírus de DNA não envelopado com fibras capsulares é o provável responsável por essa Febre Faringoconjuntival?",
    alternativas: [
      { id: "A", texto: "Rinovírus." },
      { id: "B", texto: "Adenovírus humano." },
      { id: "C", texto: "Vírus Sincicial Respiratório." },
      { id: "D", texto: "Influenza B." }
    ],
    respostaCorreta: "B",
    explicacao: "O Adenovírus é um vírus de dsDNA não envelopado que possui projeções proteicas em formato de fibras nos vértices do capsídeo. É o clássico causador da tríade de Febre Faringoconjuntival (faringite exsudativa + febre + conjuntivite), prevenindo o uso desnecessário de penicilinas.",
    explicacaoAlternativas: {
      A: "Incorreta. Rinovírus é de RNA e causa resfriado comum benigno.",
      B: "Correta. Adenovírus causa a Febre Faringoconjuntival com exsudato amigdaliano.",
      C: "Incorreta. VSR afeta o trato inferior de lactentes (bronquiolite).",
      D: "Incorreta. Influenza causa prostração sistêmica grave sem conjuntivite típica."
    },
    conceitoPrincipal: "Síndrome clínica da Febre Faringoconjuntival por Adenovírus.",
    source: "Fiocruz - Diagnóstico das Infecções por Adenovírus", sourceUrl: "https://www.fiocruz.br", sourceYear: "2023"
  },
  {
    id: 55, numero: 55, assunto: "Módulo 4 — Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "Avanços em Imunização contra VSR", dificuldade: "Difícil",
    enunciado: "O Ministério da Saúde e as diretrizes pediátricas atualizaram as estratégias de prevenção da Bronquiolite por VSR. Qual é o mecanismo da vacina Abrysvo® administrada em gestantes?",
    alternativas: [
      { id: "A", texto: "Transferência transplacentária de anticorpos protetores IgG maternos anti-proteína F para o feto durante o 3º trimestre." },
      { id: "B", texto: "Injeção de vírus vivo atenuado diretamente no recém-nascido." },
      { id: "C", texto: "Inibição enzimática da RNA polimerase no leite materno." },
      { id: "D", texto: "Aplicação de anticorpo monoclonal quinzenal na mãe." }
    ],
    respostaCorreta: "A",
    explicacao: "A vacina Abrysvo® consiste na Proteína de Fusão (Proteína F) recombinante do VSR na conformação pré-fusão. Ao ser administrada em gestantes no 3º trimestre, estimula a produção de IgG materno, que atravessa ativamente a placenta, conferindo imunidade passiva protetora aos recém-nascidos nos primeiros 6 meses de vida.",
    explicacaoAlternativas: {
      A: "Correta. Imunização ativa da gestante para passagem transplacentária de IgG ao bebê.",
      B: "Incorreta. Não é vacina de vírus vivo administrada em bebês.",
      C: "Incorreta. Não atua na enzima do leite materno.",
      D: "Incorreta. Abrysvo® é uma vacina recombinante em dose única."
    },
    conceitoPrincipal: "Imunização ativa materna com transferência transplacentária de IgG contra a Proteína F do VSR.",
    source: "Ministério da Saúde - Nota Técnica de Imunização do VSR (Abrysvo)", sourceUrl: "https://www.gov.br/saude", sourceYear: "2024"
  }
];
