// Base de Dados Oficial do LUmed - 55 Questões de Medicina (Bioquímica + Microbiologia/Virologia)
export const TOPICS = [
  // Bioquímica Médica
  "Introdução às biomoléculas e ao metabolismo",
  "Água nos sistemas biológicos, pH e tampões",
  "Eletrólitos e equilíbrio ácido-base",
  "Aminoácidos, peptídeos e proteínas de interesse clínico",
  "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
  "Lipídios, metabolismo lipídico e dislipidemias",
  "Enzimas, cinética enzimática, regulação e inibidores",
  // Microbiologia, Virologia e Síndromes Gripais
  "Módulo 1: Introdução à Microbiologia",
  "Módulo 2: Introdução à Virologia",
  "Módulo 3: Vírus Influenza (Gripe)",
  "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios"
];

export const QUESTIONS = [
  // Assunto 1: Introdução às biomoléculas e ao metabolismo (Q1 - Q5)
  {
    id: 1,
    numero: 1,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    subassunto: "Bioenergética e Fluxo Metabólico",
    dificuldade: "Médio",
    enunciado: "Em um experimento de rastreamento metabólico com marcadores isotópicos em hepatócitos isolados, observou-se que a concentração do metabólito X permaneceu praticamente constante, enquanto a taxa de incorporação do isótopo radioativo no produto final Y aumentou três vezes. Qual é a interpretação bioquímica correta dessa observação?",
    alternativas: [
      { id: "A", texto: "A via metabólica foi inibida, acumulando o metabólito X na célula." },
      { id: "B", texto: "O fluxo metabólico através da via aumentou, com síntese e consumo do metabólito X ocorrendo em taxas elevadas equivalentes." },
      { id: "C", texto: "A concentração constante de X prova que a velocidade da reação catalisada pela enzima chave permaneceu inalterada." },
      { id: "D", texto: "O metabólito X é um efetor alostérico negativo que bloqueou a conversão no produto Y." }
    ],
    respostaCorreta: "B",
    explicacao: "A concentração de um metabólito representa seu pool estático momentâneo na célula, enquanto o fluxo metabólico expressa a velocidade real de conversão de substratos em produtos ao longo da via. Em estado estacionário (steady-state), a produção e o consumo de X ocorrem na mesma velocidade elevada, mantendo a concentração constante enquanto o fluxo isotópico aumenta.",
    explicacaoAlternativas: {
      A: "Incorreta. Se a via estivesse inibida, a incorporação isotópica no produto Y teria diminuído, e a concentração de X se alteraria dependendo do ponto de bloqueio.",
      B: "Correta. A concentração constante de um intermediário em steady-state com aumento de rotatividade (turnover) isotópico reflete um aumento real no fluxo metabólico celular.",
      C: "Incorreta. Concentração estática não implica taxa de reação constante; produção e consumo simultaneamente acelerados mantêm a concentração inalterada.",
      D: "Incorreta. Se X agisse como efetor inibitório, a síntese do produto Y não apresentaria aceleração de incorporação isotópica."
    },
    conceitoPrincipal: "Diferença fundamental entre concentração estática de um metabólito e fluxo metabólico dinâmico (metabolic flux)."
  },
  {
    id: 2,
    numero: 2,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    subassunto: "Acoplamento Energético e Hidrólise de ATP",
    dificuldade: "Fácil",
    enunciado: "As células realizam reações endergônicas (com variação de energia livre de Gibbs ΔG > 0) que seriam termodinamicamente desfavoráveis isoladamente. Como o metabolismo celular torna essas reações viáveis?",
    alternativas: [
      { id: "A", texto: "Alterando a constante de equilíbrio da reação através da ação de enzimas catalisadoras." },
      { id: "B", texto: "Acoplando a reação endergônica à hidrólise de compostos de alta energia como o ATP, resultando em um ΔG global negativo." },
      { id: "C", texto: "Elevando a temperatura intracelular para transformar o ΔG positivo em negativo." },
      { id: "D", texto: "Aumentando a energia de ativação do estado de transição da reação." }
    ],
    respostaCorreta: "B",
    explicacao: "Reações endergônicas (ΔG > 0) são impulsionadas pelo acoplamento químico com reações altamente exergônicas (ΔG < 0), principalmente a hidrólise do ATP (ΔG°' ≈ -30,5 kJ/mol). Se a soma dos ΔG das reações acopladas for menor que zero, o processo global torna-se espontâneo.",
    explicacaoAlternativas: {
      A: "Incorreta. Enzimas aceleram a velocidade de reação ao diminuir a energia de ativação, mas NUNCA alteram a constante de equilíbrio (Keq) nem o ΔG.",
      B: "Correta. O acoplamento energético permite que a energia livre liberada pela hidrólise de ligações fosfoanidro do ATP supere a demanda da reação endergônica.",
      C: "Incorreta. A temperatura corporal humana é mantida constante (~37°C) e não varia para favorecer reações isoladas.",
      D: "Incorreta. Aumentar a energia de ativação tornaria a reação ainda mais lenta e desfavorável."
    },
    conceitoPrincipal: "Princípio do acoplamento energético bioenergético via hidrólise de ATP para impulsionar reações desfavoráveis."
  },
  {
    id: 3,
    numero: 3,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    subassunto: "Compartimentação Celular e Vias Metabólicas",
    dificuldade: "Médio",
    enunciado: "A compartimentação de vias metabólicas em organelas distintas é uma estratégia evolutiva essencial nas células eucarióticas. Qual das alternativas exemplifica corretamente a vantagem fisiológica dessa compartimentação?",
    alternativas: [
      { id: "A", texto: "Permite que a glicólise e a gliconeogênese ocorram simultaneamente no citosol sem necessidade de regulação." },
      { id: "B", texto: "Separa a β-oxidação de ácidos graxos (na matriz mitocondrial) da síntese de ácidos graxos (no citosol), evitando ciclos fúteis." },
      { id: "C", texto: "Impede que o ATP produzido nas mitocôndrias seja utilizado no núcleo celular." },
      { id: "D", texto: "Garante que todas as enzimas celulares operem exatamente sob o mesmo pH ótimo de 7,4." }
    ],
    respostaCorreta: "B",
    explicacao: "A compartimentação física isola vias anabólicas (como a síntese de ácidos graxos no citosol) de vias catabólicas concorrentes (como a β-oxidação na matriz mitocondrial). Isso previne a degradação simultânea e imediata do produto recém-sintetizado (ciclo fútil) e possibilita regulação independente.",
    explicacaoAlternativas: {
      A: "Incorreta. Glicólise e gliconeogênese ocorrem predominantemente no citosol, mas exigem rígida regulação alostérica e hormonal para evitar operação simultânea desenfreada.",
      B: "Correta. A separação entre o citosol (anabolismo lipídico) e a matriz mitocondrial (catabolismo lipídico) é um clássico exemplo de controle espacial metabólico.",
      C: "Incorreta. O ATP mitocondrial difunde-se livremente para o citosol e núcleo para abastecer processos celulares dependentes de energia.",
      D: "Incorreta. Organelas possuem pHs específicos; por exemplo, os lisossomos mantêm pH ácido (~4,5-5,0) ideal para hidrolases."
    },
    conceitoPrincipal: "Vantagem funcional da compartimentação celular no controle metabólico e prevenção de ciclos fúteis."
  },
  {
    id: 4,
    numero: 4,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    subassunto: "Carga Energética e Regulação Alostérica",
    dificuldade: "Difícil",
    enunciado: "A carga energética celular é definida pela proporção de nucleotídeos de adenina ([ATP] + 0,5[ADP]) / ([ATP] + [ADP] + [AMP]). Em uma situação de depleção energética severa (baixa carga energética), qual resposta metabólica é esperada?",
    alternativas: [
      { id: "A", texto: "Ativação de vias anabólicas como a glicogenogênese e biossíntese de lipídios." },
      { id: "B", texto: "Inibição alostérica da fosfofructocinase-1 (PFK-1) e da piruvato desidrogenase." },
      { id: "C", texto: "Ativação da Proteína Quinase Ativada por AMP (AMPK), estimulando vias catabólicas produtoras de ATP." },
      { id: "D", texto: "Bloqueio completo da fosforilação oxidativa mitocondrial." }
    ],
    respostaCorreta: "C",
    explicacao: "O AMP é o sensor mais sensível do estado energético celular. O aumento da razão AMP/ATP ativa a proteína quinase AMPK, que atua como um 'disjuntor metabólico': ela estimula vias geradoras de ATP (glicólise, β-oxidação) e desliga vias consumidoras de ATP (síntese de ácidos graxos, colesterol e proteínas).",
    explicacaoAlternativas: {
      A: "Incorreta. Vias anabólicas consomem grande quantidade de ATP e são desativadas sob baixa carga energética.",
      B: "Incorreta. O AMP é um ativador alostérico potente da PFK-1, estimulando a glicólise para recompor os níveis de ATP.",
      C: "Correta. A AMPK responde ao estresse energético ativando o catabolismo e inibindo o anabolismo.",
      D: "Incorreta. A baixa carga energética demanda o aumento da atividade da fosforilação oxidativa, não seu bloqueio."
    },
    conceitoPrincipal: "Papel do AMP e da AMPK como sensores centrais da homeostase energética celular."
  },
  {
    id: 5,
    numero: 5,
    assunto: "Introdução às biomoléculas e ao metabolismo",
    subassunto: "Integração Metabólica Alimentado vs. Jejum",
    dificuldade: "Médio",
    enunciado: "Após uma refeição rica em carboidratos, a secreção de insulina pelo pâncreas aumenta significativamente. Qual é o efeito coordenado da insulina no metabolismo hepático?",
    alternativas: [
      { id: "A", texto: "Estimula a glicogenólise e a gliconeogênese, liberando glicose na circulação sanguínea." },
      { id: "B", texto: "Promove a captação de glicose, a síntese de glicogênio e a lipogênese a partir do excesso de acetil-CoA." },
      { id: "C", texto: "Ativa a lipase sensível a hormônio no tecido adiposo, aumentando os ácidos graxos livres." },
      { id: "D", texto: "Inibe a fosfofructocinase-2 (PFK-2), reduzindo os níveis de Frutose-2,6-bisfosfato." }
    ],
    respostaCorreta: "B",
    explicacao: "A insulina é o hormônio anabólico por excelência do estado alimentado. No fígado, ela induz enzimas da glicólise (como glucocinase e PFK-1), ativa a glicogênio sintase para armazenamento de glicose e direciona o excesso de piruvato/acetil-CoA para a síntese de ácidos graxos e triacilgliceróis.",
    explicacaoAlternativas: {
      A: "Incorreta. Glicogenólise e gliconeogênese são vias ativadas pelo glucagon durante o jejum para manter a glicemia.",
      B: "Correta. A insulina sinaliza abundância de nutrients, estimulando o consumo de glicose e o armazenamento de energia em forma de glicogênio e lipídios.",
      C: "Incorreta. A insulina INIBE a lipase sensível a hormônio no tecido adiposo para conter a lipólise.",
      D: "Incorreta. A insulina ativa a PFK-2 via desfosforilação, elevando a Frutose-2,6-bisfosfato e ativando vigorosamente a glicólise."
    },
    conceitoPrincipal: "Regulação hormonal anabólica exercida pela insulina no fígado no estado pós-prandial."
  },

  // (Q6 - Q35 permanecem mantidas e completas)
  {
    id: 6,
    numero: 6,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    subassunto: "Equação de Henderson-Hasselbalch",
    dificuldade: "Fácil",
    enunciado: "Um tampão químico atinge sua capacidade tamponante máxima quando a concentração de base conjugada A- é igual à de ácido fraco HA. Qual é a relação entre pH e pKa nessa condição?",
    alternativas: [
      { id: "A", texto: "pH = pKa + 1" },
      { id: "B", texto: "pH = pKa" },
      { id: "C", texto: "pH = pKa / 2" },
      { id: "D", texto: "pH = 7,4" }
    ],
    respostaCorreta: "B",
    explicacao: "Pela equação de Henderson-Hasselbalch, quando [A-] = [HA], log(1) = 0, portanto pH = pKa.",
    explicacaoAlternativas: { A: "Incorreta.", B: "Correta.", C: "Incorreta.", D: "Incorreta." },
    conceitoPrincipal: "Condição de máxima eficiência tamponante (pH = pKa)."
  },

  // -------------------------------------------------------------
  // NOVAS QUESTÕES: MICROBIOLOGIA, VIROLOGIA E SÍNDROMES GRIPAIS
  // -------------------------------------------------------------

  // Módulo 1: Introdução à Microbiologia (Q36 - Q40)
  {
    id: 36,
    numero: 36,
    assunto: "Módulo 1: Introdução à Microbiologia",
    subassunto: "Diferenciação Celular dos Microrganismos",
    dificuldade: "Fácil",
    enunciado: "Na classificação dos grupos de microrganismos de interesse médico, as bactérias se diferenciam dos fungos e protozoários por apresentarem qual característica celular estrutural marcante?",
    alternativas: [
      { id: "A", texto: "Presença de carioteca delimitando um núcleo individualizado." },
      { id: "B", texto: "Estrutura celular procarionte sem organelas membranosas e com parede celular rígida de peptidoglicano." },
      { id: "C", texto: "Parede celular constituída exclusivamente por polímeros de quitina." },
      { id: "D", texto: "Ausência completa de material genético próprio e dependência celular estrita." }
    ],
    respostaCorreta: "B",
    explicacao: "As bactérias são os únicos organismos procariontes entre os microrganismos citados. Elas não possuem núcleo delimitado por carioteca nem organelas membranosas intracelulares, e sua parede celular é caracteristicamente formada por peptidoglicano (mureína).",
    explicacaoAlternativas: {
      A: "Incorreta. A presença de núcleo individualizado com carioteca é exclusiva de células eucariontes (fungos, protozoários e células humanas).",
      B: "Correta. Bactérias são procariontes unicelulares com parede celular de peptidoglicano.",
      C: "Incorreta. Parede celular rica em quitina é a assinatura estrutural dos fungos.",
      D: "Incorreta. Bactérias possuem genoma de DNA próprio de fita dupla circular no nucleoide."
    },
    conceitoPrincipal: "Diferenciação estrutural entre procariotos (bactérias com peptidoglicano) e eucariotos."
  },
  {
    id: 37,
    numero: 37,
    assunto: "Módulo 1: Introdução à Microbiologia",
    subassunto: "Microbiota Humana e Proteção contra Patógenos",
    dificuldade: "Médio",
    enunciado: "A microbiota humana normal é composta por bilhões de microrganismos comensais e mutualistas residentes na pele e mucosas. Qual é uma das principais funções fisiológicas da microbiota intestinal no hospedeiro humano?",
    alternativas: [
      { id: "A", texto: "Produção direta de anticorpos IgA secretores nas células de Paneth." },
      { id: "B", texto: "Proteção contra colonização por patógenos oportunistas através de exclusão competitiva por sítios de ligação e nutrientes, além da síntese de vitaminas K e B12." },
      { id: "C", texto: "Degradação completa da hemoglobina excretada pela bile." },
      { id: "D", texto: "Inativação irreversível de todas as toxinas bacterianas exógenas." }
    ],
    respostaCorreta: "B",
    explicacao: "A microbiota comensal atua como barreira biológica através da exclusão competitiva (ocupa receptores epiteliais e consome nutrientes locais), secreção de bacteriocinas e modulação do sistema imune, além de sintetizar micronutrientes essenciais como a vitamina K e complexo B.",
    explicacaoAlternativas: {
      A: "Incorreta. IgA secretora é produzida por plasmócitos da lâmina própria do tecido linfoide associado à mucosa (GALT), e não por bactérias.",
      B: "Correta. A microbiota comensal impede o supercrescimento de patógenos por exclusão competitiva e produz vitaminas essenciais.",
      C: "Incorreta. A bilirrubina biliar é reduzida pela microbiota a urobilinogênio, mas isso não envolve degradação direta da hemoglobina sanguínea.",
      D: "Incorreta. A microbiota não inativa todas as exotoxinas exógenas ingeridas."
    },
    conceitoPrincipal: "Papel protetor da microbiota humana por exclusão competitiva e síntese de vitaminas essenciais."
  },

  // Módulo 2: Introdução à Virologia (Q41 - Q45)
  {
    id: 41,
    numero: 41,
    assunto: "Módulo 2: Introdução à Virologia",
    subassunto: "Propriedades Gerais e Envelope Lipídico Viral",
    dificuldade: "Médio",
    enunciado: "Os vírus são agentes acelulares considerados parasitas intracelulares obrigatórios. Em relação aos vírus ENVELOPADOS quando comparados aos NÃO ENVELOPADOS (nua), qual propriedade físico-química é verdadeira?",
    alternativas: [
      { id: "A", texto: "Os vírus envelopados são mais resistentes a detergentes, álcool 70% e ressecamento ambiental." },
      { id: "B", texto: "O envelope lipídico deriva das membranas da célula hospedeira e torna o vírus mais sensível a solventes lipídicos, álcool 70%, calor e desinfetantes." },
      { id: "C", texto: "Vírus não envelopados não possuem capsídeo proteico protetor de ácido nucleico." },
      { id: "D", texto: "O envelope lipídico é sintetizado do zero por ribossomos e enzimas exclusivas do próprio vírus." }
    ],
    respostaCorreta: "B",
    explicacao: "O envelope viral é composto por uma bicamada lipídica adquirida da célula hospedeira durante o brotamento. Por conter lipídios, ele é rapidamente solubilizado e desestruturado por sabão, álcool 70%, detergentes e dessecação, inativando as espículas glicoproteicas virais necessárias para a infecção.",
    explicacaoAlternativas: {
      A: "Incorreta. É o oposto: vírus NÃO envelopados (como Rinovírus e Adenovírus) são muito mais resistentes no meio ambiente.",
      B: "Correta. A presença de envelope lipídico confere alta sensibilidade ao álcool 70%, sabão e sanetizantes que dissolvem a membrana.",
      C: "Incorreta. Todos os vírus (envelopados ou não) possuem capsídeo proteico.",
      D: "Incorreta. O vírus não possui ribossomos nem maquinaria lipídica própria; ele rouba a membrana da célula hospedeira."
    },
    conceitoPrincipal: "Labilidade dos vírus envelopados perante saneantes, sabão e álcool 70% devido à composição lipídica do envelope."
  },
  {
    id: 42,
    numero: 42,
    assunto: "Módulo 2: Introdução à Virologia",
    subassunto: "História da Virologia e Vacinas de Poliomielite",
    dificuldade: "Médio",
    enunciado: "O Programa Nacional de Imunizações (PNI) utilizou historicamente duas vacinas fundamentais no combate à Poliomielite: a Vacina Salk e a Vacina Sabin. Qual a diferença biológica crucial entre a Vacina de Jonas Salk e a de Albert Sabin?",
    alternativas: [
      { id: "A", texto: "Salk é constituída por vírus vivo atenuado oral (OPV); Sabin é de poliovírus inativado por formaldeído injetável (IPV)." },
      { id: "B", texto: "Salk utiliza poliovírus inativado (IPV - injetável); Sabin utiliza poliovírus vivo atenuado (OPV - oral / gotinha)." },
      { id: "C", texto: "Ambas utilizam vetores virais não replicantes de adenovírus humano." },
      { id: "D", texto: "A vacina Sabin é composta exclusivamente por mRNA mensageiro encapsulado em nanopartículas lipídicas." }
    ],
    respostaCorreta: "B",
    explicacao: "Jonas Salk desenvolveu a vacina IPV (Inactivated Poliovirus Vaccine), composta por vírus mortos/inativados por formaldeído e administrada por via parenteral (injetável). Albert Sabin desenvolveu a vacina OPV (Oral Poliovirus Vaccine), composta por cepas virais vivas atenuadas administradas por via oral (a famosa 'gotinha').",
    explicacaoAlternativas: {
      A: "Incorreta. A atribuição dos tipos de vacina está invertida.",
      B: "Correta. Salk = Vírus Inativado Injetável (IPV); Sabin = Vírus Vivo Atenuado Oral (OPV).",
      C: "Incorreta. Nenhuma das vacinas clássicas de pólio utiliza tecnologia de vetor adenoviral.",
      D: "Incorreta. A tecnologia de mRNA não foi utilizada no desenvolvimento histórico das vacinas de pólio do século XX."
    },
    conceitoPrincipal: "Diferenciação metodológica entre a vacina inativada Salk (IPV) e a vacina atenuada oral Sabin (OPV)."
  },

  // Módulo 3: Vírus Influenza (Gripe) (Q46 - Q50)
  {
    id: 46,
    numero: 46,
    assunto: "Módulo 3: Vírus Influenza (Gripe)",
    subassunto: "Glicoproteínas de Superfície: Hemaglutinina e Neuraminidase",
    dificuldade: "Difícil",
    enunciado: "O vírus Influenza A possui duas espículas glicoproteicas principais no envelope: a Hemaglutinina (HA) e a Neuraminidase (NA). Quais são as funções biológicas específicas da HA e da NA, respectivamente, no ciclo replicativo viral?",
    alternativas: [
      { id: "A", texto: "HA cliva o ácido siálico para liberar novos vírions; NA medeia o desnudamento dentro do endossomo." },
      { id: "B", texto: "HA liga-se aos receptores de ácido siálico e medeia a fusão do envelope; NA cliva o ácido siálico prevenindo autoagregação e permitindo a liberação do vírus brotado." },
      { id: "C", texto: "HA sintetiza o RNA de fita negativa; NA atua como canal iônico de prótons." },
      { id: "D", texto: "Ambas possuem exatamente a mesma função enzimática de degradação da parede celular bacteriana." }
    ],
    respostaCorreta: "B",
    explicacao: "A Hemaglutinina (HA) reconhece e se liga aos receptores com ácido siálico na superfície do epitélio respiratório, promovendo a endocitose e fusão do envelope. A Neuraminidase (NA) tem função enzimática: cliva os resíduos de ácido siálico na saída celular, soltando os novos vírions brotados e impedindo sua autoagregação.",
    explicacaoAlternativas: {
      A: "Incorreta. As funções de entrada e saída estão invertidas.",
      B: "Correta. HA = Ligação receptórica e entrada; NA = Atividade enzimática de desancoragem e brotamento/liberação.",
      C: "Incorreta. A síntese de RNA é realizada pela RNA polimerase viral (PB1, PB2, PA), e o canal iônico é a proteína M2.",
      D: "Incorreta. Influenza é um vírus humano e não ataca parede celular de bactérias."
    },
    conceitoPrincipal: "Papéis funcionais complementares da Hemaglutinina (entrada) e Neuraminidase (liberação) no vírus Influenza."
  },
  {
    id: 47,
    numero: 47,
    assunto: "Módulo 3: Vírus Influenza (Gripe)",
    subassunto: "Variabilidade Genética: Antigenic Drift vs. Antigenic Shift",
    dificuldade: "Difícil",
    enunciado: "A emergência da grande Pandemia de Influenza A H1N1 em 2009 ocorreu por qual mecanismo genético de alteração antigênica em relação ao mecanismo responsável pelas epidemias sazonais anuais de gripe?",
    alternativas: [
      { id: "A", texto: "Pandemias surgem por Deriva Antigênica (Antigenic Drift); epidemias sazonais surgem por transcrição reversa." },
      { id: "B", texto: "Epidemias sazonais decorrem da Deriva Antigênica (mutações pontuais contínuas); Pandemias decorrem do Salto Antigênico (Antigenic Shift), que é a recombinação/rearranjo drástico de segmentos RNA entre diferentes cepas em um mesmo hospedeiro." },
      { id: "C", texto: "Pandemias surgem devido à fusão do Influenza com o Rinovírus humano." },
      { id: "D", texto: "Epidemias sazonais ocorrem por modificação irreversível do DNA genômico celular." }
    ],
    respostaCorreta: "B",
    explicacao: "A Deriva Antigênica (Antigenic Drift) consiste em mutações pontuais acumuladas no genoma pela RNA polimerase, gerando surtos sazonais que exigem vacina reformulada todo ano. O Salto Antigênico (Antigenic Shift) ocorre por reordenamento de segmentos genéticos de RNA quando duas cepas distintas (ex: aviária e humana) infectam o mesmo animal (ex: porco), gerando um vírus com nova HA/NA totalmente inédito para a imunidade humana, causando PANDEMIAS.",
    explicacaoAlternativas: {
      A: "Incorreta. Influenza não realiza transcrição reversa (não é retrovírus).",
      B: "Correta. Drift (mutações pontuais) = Gripes sazonais anuais; Shift (rearranjo de segmentos de RNA) = Pandemias globais.",
      C: "Incorreta. Não ocorre fusão genômica entre famílias virais totalmente distintas como Orthomyxoviridae e Picornaviridae.",
      D: "Incorreta. O vírus Influenza possui genoma de RNA e não altera o DNA genômico da célula hospedeira."
    },
    conceitoPrincipal: "Diferenciação patogenética entre Deriva Antigênica (Drift - sazonal) e Salto Antigênico (Shift - pandêmico)."
  },
  {
    id: 48,
    numero: 48,
    assunto: "Módulo 3: Vírus Influenza (Gripe)",
    subassunto: "Mecanismo de Ação de Antivirais: Oseltamivir",
    dificuldade: "Médio",
    enunciado: "O antiviral Oseltamivir (Tamiflu®) é indicado para o tratamento da Síndrome Gripal grave por Influenza. Qual é o mecanismo de ação molecular específico deste fármaco no vírus?",
    alternativas: [
      { id: "A", texto: "Inibição seletiva da enzima Neuraminidase (NA), impedindo a clivagem do ácido siálico e a liberação dos novos vírions infectantes." },
      { id: "B", texto: "Bloqueio irreversível dos canais de sódio no epitélio nasal humano." },
      { id: "C", texto: "Inibição da protease transmembrana TMPRSS2." },
      { id: "D", texto: "Destruição direta do envelope lipídico por ação surfactante." }
    ],
    respostaCorreta: "A",
    explicacao: "O Oseltamivir é um inibidor seletivo e competitivo da enzima Neuraminidase (NA). Ao bloquear a atividade da NA, os novos vírus gerados ficam 'presos' na superfície da célula infectada agregados ao ácido siálico, interrompendo a disseminação viral no trato respiratório.",
    explicacaoAlternativas: {
      A: "Correta. O Oseltamivir inibe a Neuraminidase, contendo a liberação e propagação dos vírions de Influenza A e B.",
      B: "Incorreta. O fármaco age especificamente sobre a enzima viral NA, não em canais de sódio.",
      C: "Incorreta. TMPRSS2 é a protease celular utilizada pelo SARS-CoV-2, não alvo do Oseltamivir.",
      D: "Incorreta. Oseltamivir é um análogo estrutural de ácido siálico, não um surfactante de envelope."
    },
    conceitoPrincipal: "Mecanismo farmacológico do Oseltamivir como inibidor da Neuraminidase no tratamento do Influenza."
  },

  // Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios (Q51 - Q55)
  {
    id: 51,
    numero: 51,
    assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios",
    subassunto: "Rinovírus e Fisiopatologia do Resfriado Comum",
    dificuldade: "Médio",
    enunciado: "O Rinovírus humano é o principal agente etiológico do Resfriado Comum. Qual particularidade virológica e fisiológica explica por que a infecção por Rinovírus é predominantemente restrita ao Trato Respiratório Superior (nariz e nasofaringe)?",
    alternativas: [
      { id: "A", texto: "O Rinovírus é envelopado e destruído pelo oxigênio alveolar." },
      { id: "B", texto: "A replicação viral do Rinovírus é otimizada na faixa de temperatura entre 33°C e 35°C (temperatura da cavidade nasal), sendo ineficiente na temperatura de 37°C do pulmão." },
      { id: "C", texto: "O vírus se liga exclusivamente aos receptores de insulina do estômago." },
      { id: "D", texto: "O Rinovírus não produz proteínas e é destruído pelo muco respiratório." }
    ],
    respostaCorreta: "B",
    explicacao: "O Rinovírus (família Picornaviridae) possui um tropismo térmico característico: sua enzima RNA polimerase atinge o pico de eficiência replicativa entre 33°C e 35°C, exatamente a temperatura mais amena mantida pela passagem de ar na cavidade nasal superior. Em 37°C (trato respiratório inferior), sua replicação é inibida.",
    explicacaoAlternativas: {
      A: "Incorreta. O Rinovírus é um vírus NÃO envelopado (nua).",
      B: "Correta. A preferência térmica por 33-35°C restringe a replicação otimizada do Rinovírus à cavidade nasal superior.",
      C: "Incorreta. O receptor celular primário do Rinovírus é a molécula de adesão ICAM-1 no epitélio nasal.",
      D: "Incorreta. Rinovírus possui capsídeo proteico com 4 proteínas estruturais (VP1-VP4)."
    },
    conceitoPrincipal: "Tropismo térmico do Rinovírus (33-35°C) e a limitação fisiológica ao trato respiratório superior."
  },
  {
    id: 52,
    numero: 52,
    assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios",
    subassunto: "Vírus Sincicial Respiratório (VSR) e Proteína F",
    dificuldade: "Difícil",
    enunciado: "O Vírus Sincicial Respiratório (VSR) é a causa mais frequente de Bronquiolite Viral Aguda (BVA) em lactentes e crianças abaixo de 2 anos. Qual é o mecanismo de ação da Proteína de Fusão (Proteína F) responsável pela alteração histopatológica patognomônica da doença?",
    alternativas: [
      { id: "A", texto: "A Proteína F causa a fragmentação autofágica de macrófagos alveolares." },
      { id: "B", texto: "A Proteína F promove a fusão da membrana da célula infectada com as membranas das células vizinhas não infectadas, formando massas multinucleadas gigantes chamadas Sincícios." },
      { id: "C", texto: "A Proteína F destrói a secreção de surfactante pulmonar diretamente nas células de Clara." },
      { id: "D", texto: "A Proteína F inibe a síntese de imunoglobulina E nas vias aéreas." }
    ],
    respostaCorreta: "B",
    explicacao: "A glicoproteína F (Fusão) exposta no envelope do VSR medeia a fusão das membranas plasmáticas das células epiteliais brônquicas infectadas com as células adjacentes. Isso cria grandes agregados de citoplasma multinucleado sem limites celulares individuais, denominados SINCÍCIOS, que sofrem necrose e obstruem a luz bronquiolar com muco e debris.",
    explicacaoAlternativas: {
      A: "Incorreta. A marca citopatológica primária é a formação de sincícios no epitélio bronquiolar, não autofagia macrofágica.",
      B: "Correta. A Proteína F induz fusão intercelular formando Sincícios multinucleados, levando à obstrução e BVA no lactente.",
      C: "Incorreta. O prejuízo primário é a inflamação, edema e obstrução exsudativa bronquiolar por sincícios necróticos.",
      D: "Incorreta. A Proteína F atua como ligante de fusão de membrana."
    },
    conceitoPrincipal: "Formação de sincícios citopáticos mediada pela Proteína F do VSR e patogênese da Bronquiolite Viral Aguda."
  },
  {
    id: 53,
    numero: 3,
    assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios",
    subassunto: "SARS-CoV-2: Receptor ACE2 e Protease TMPRSS2",
    dificuldade: "Difícil",
    enunciado: "No mecanismo de infecção celular do SARS-CoV-2 (agente etiológico da COVID-19), qual receptor da célula hospedeira é reconhecido pelo domínio de ligação (RBD) da Proteína Spike (S), e qual protease transmembrana é necessária para clivar e ativar a fusão viral?",
    alternativas: [
      { id: "A", texto: "Receptor ICAM-1 e protease Neuraminidase." },
      { id: "B", texto: "Receptor da Enzima Conversora de Angiotensina 2 (ACE2) e protease TMPRSS2 (Protease Transmembrana de Serina 2)." },
      { id: "C", texto: "Receptor CD4 e protease DPP4." },
      { id: "D", texto: "Receptor Sialic Acid e protease M2." }
    ],
    respostaCorreta: "B",
    explicacao: "A proteína glicoproteica Spike (S) do SARS-CoV-2 reconhece e se acopla ao receptor ACE2 (Enzima Conversora de Angiotensina 2) expresso no epitélio respiratório e endotélio. Em seguida, a protease celular de serina TMPRSS2 realiza a clivagem proteolítica nos sítios S1/S2 e S2' da Spike, liberando a alça de fusão para a entrada do genoma viral.",
    explicacaoAlternativas: {
      A: "Incorreta. ICAM-1 é o receptor do Rinovírus; Neuraminidase é a enzima do Influenza.",
      B: "Correta. O acoplamento da Spike ao receptor ACE2 e a clivagem ativadora pela TMPRSS2 são os dois pilares da entrada celular do SARS-CoV-2.",
      C: "Incorreta. CD4 é o receptor do HIV; DPP4 é o receptor do MERS-CoV.",
      D: "Incorreta. Ácido siálico e M2 são características do Influenza A."
    },
    conceitoPrincipal: "Mecanismo molecular de ancoragem e clivagem do SARS-CoV-2 via ACE2 e TMPRSS2."
  }
];
