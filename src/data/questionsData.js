// Base de Dados Oficial do MedBio - 35 Questões de Bioquímica Médica
export const TOPICS = [
  "Introdução às biomoléculas e ao metabolismo",
  "Água nos sistemas biológicos, pH e tampões",
  "Eletrólitos e equilíbrio ácido-base",
  "Aminoácidos, peptídeos e proteínas de interesse clínico",
  "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
  "Lipídios, metabolismo lipídico e dislipidemias",
  "Enzimas, cinética enzimática, regulação e inibidores"
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
      { id: "D", texto: "Inibe a fosfofructocinase-2 (PFK-2), reduzindo os níveis de Frutose-2,6-bisfosfato." },
    ],
    respostaCorreta: "B",
    explicacao: "A insulina é o hormônio anabólico por excelência do estado alimentado. No fígado, ela induz enzimas da glicólise (como glucocinase e PFK-1), ativa a glicogênio sintase para armazenamento de glicose e direciona o excesso de piruvato/acetil-CoA para a síntese de ácidos graxos e triacilgliceróis.",
    explicacaoAlternativas: {
      A: "Incorreta. Glicogenólise e gliconeogênese são vias ativadas pelo glucagon durante o jejum para manter a glicemia.",
      B: "Correta. A insulina sinaliza abundância de nutrientes, estimulando o consumo de glicose e o armazenamento de energia em forma de glicogênio e lipídios.",
      C: "Incorreta. A insulina INIBE a lipase sensível a hormônio no tecido adiposo para conter a lipólise.",
      D: "Incorreta. A insulina ativa a PFK-2 via desfosforilação, elevando a Frutose-2,6-bisfosfato e ativando vigorosamente a glicólise."
    },
    conceitoPrincipal: "Regulação hormonal anabólica exercida pela insulina no fígado no estado pós-prandial."
  },

  // Assunto 2: Água nos sistemas biológicos, pH e tampões (Q6 - Q10)
  {
    id: 6,
    numero: 6,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    subassunto: "Equação de Henderson-Hasselbalch e Capacidade Tamponante",
    dificuldade: "Fácil",
    enunciado: "Um tampão químico atinge sua capacidade tamponante máxima contra a adição de ácidos ou bases quando a concentração da sua forma receptora de prótons (base conjugada A-) é exatamente igual à da sua forma doadora de prótons (ácido fraco HA). Nessa condição específica, qual é a relação entre o pH da solução e o pKa do ácido?",
    alternativas: [
      { id: "A", texto: "pH = pKa + 1" },
      { id: "B", texto: "pH = pKa" },
      { id: "C", texto: "pH = pKa / 2" },
      { id: "D", texto: "pH = 7,4 independentemente do ácido" }
    ],
    respostaCorreta: "B",
    explicacao: "Pela equação de Henderson-Hasselbalch: pH = pKa + log([A-]/[HA]). Quando [A-] = [HA], a razão [A-]/[HA] = 1, e como log(1) = 0, obtém-se pH = pKa. Nessa faixa centrada no pKa (pKa ± 1), a solução exibe máxima resistência a variações de pH.",
    explicacaoAlternativas: {
      A: "Incorreta. Quando pH = pKa + 1, a razão [A-]/[HA] é de 10:1 (90% na forma desprotonada).",
      B: "Correta. Na condição de equimolaridade entre o ácido e sua base conjugada, o logaritmo da razão é zero, fazendo o pH igualar-se ao pKa do sistema.",
      C: "Incorreta. O pH não é metade do pKa; a relação é logarítmica e aditiva.",
      D: "Incorreta. 7,4 é o pH fisiológico do sangue humano, mas cada sistema tampão possui seu valor único de pKa."
    },
    conceitoPrincipal: "Aplicação da equação de Henderson-Hasselbalch e condição de máxima eficiência tamponante (pH = pKa)."
  },
  {
    id: 7,
    numero: 7,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    subassunto: "Sistema Tampão Bicarbónato no Plasma",
    dificuldade: "Médio",
    enunciado: "O sistema tampão bicarbonato (HCO3- / H2CO3 / CO2) é o principal responsável pela manutenção do pH plasmático em 7,4. Embora o pKa aparente desse sistema seja de 6,1 (distante do pH fisiológico), ele é extremamente eficaz no organismo humano. Por que esse tampão é tão eficiente in vivo?",
    alternativas: [
      { id: "A", texto: "Porque o bicarbonato é desprotegido por ação enzimática direta nos eritrócitos." },
      { id: "B", texto: "Porque trata-se de um sistema aberto, cujos componentes são regulados dinamicamente pelos rins (HCO3-) e pulmões (CO2)." },
      { id: "C", texto: "Porque a concentração de ácido carbônico livre no sangue é dez vezes maior que a de bicarbonato." },
      { id: "D", texto: "Porque ele não sofre interferência da pressão parcial de oxigênio nem de dióxido de carbono." }
    ],
    respostaCorreta: "B",
    explicacao: "Diferente de tampões fechados de laboratório, o tampão bicarbonato funciona como um sistema aberto fisiológico. O componente volátil (CO2) é expelido ou retido pelos pulmões em minutos, enquanto a base (HCO3-) é reabsorvida ou regenerada pelos rins em horas/dias, permitindo ajustar o pH mesmo longe do pKa teórico.",
    explicacaoAlternativas: {
      A: "Incorreta. A anidrase carbônica acelera a interconversão entre CO2 + H2O e H2CO3, mas a eficiência fisiológica decorre da regulação de órgãos excretores.",
      B: "Correta. A natureza aberta do sistema acoplado à ventilação pulmonar e excreção renal confere enorme capacidade tamponante frente a cargas ácidas ou básicas.",
      C: "Incorreta. Em pH 7,4, a proporção [HCO3-] / [CO2 dissolvido] é de aproximadamente 20:1 (24 mEq/L de bicarbonato para 1,2 mEq/L de CO2), e não o contrário.",
      D: "Incorreta. A PaCO2 influencia diretamente o equilíbrio do ácido carbônico no sangue."
    },
    conceitoPrincipal: "Fisiologia do sistema tampão aberto bicarbonato e sua regulação pulmonar e renal."
  },
  {
    id: 8,
    numero: 8,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    subassunto: "Propriedades da Água e Ligações de Hidrogênio",
    dificuldade: "Fácil",
    enunciado: "A molécula de água (H2O) possui geometria angular e elevada polaridade. Essa estrutura molecular permite a formação de pontes (ligações) de hidrogênio. Qual efeito biológico direto deriva dessa propriedade da água?",
    alternativas: [
      { id: "A", texto: "Baixo calor específico, permitindo grandes variações térmicas rápidas no organismo." },
      { id: "B", texto: "Capacidade de dissolver biomoléculas apolares, como os triacilgliceróis, no meio citoplasmático." },
      { id: "C", texto: "Elevado calor de vaporização e alto calor específico, atuando como estabilizador térmico corporal." },
      { id: "D", texto: "Incapacidade de interagir com íons carregados como Na+ e Cl-." }
    ],
    respostaCorreta: "C",
    explicacao: "As extensas ligações de hidrogênio entre moléculas de água conferem-lhe alto calor específico e elevado calor de vaporização. Isso impede oscilações bruscas de temperatura no organismo decorrentes do calor gerado pelo metabolismo e permite a termorregulação eficiente através da evaporação do suor.",
    explicacaoAlternativas: {
      A: "Incorreta. A água tem ALTO calor específico, o que RESISTE às variações térmicas e protege o organismo.",
      B: "Incorreta. Moléculas apolares (lipídios) são hidrofóbicas e não se dissolvem na água; elas formam agregados para minimizar o contato aquoso.",
      C: "Correta. As forças de atração intermoleculares (pontes de H) exigem muita energia térmica para serem rompidas, estabilizando a temperatura corporal.",
      D: "Incorreta. A água é um excelente solvente para íons polares devido à formação de esferas de solvatação dipolar."
    },
    conceitoPrincipal: "Propriedades físico-químicas da água resultantes das ligações de hidrogênio e seu papel na termorregulação."
  },
  {
    id: 9,
    numero: 9,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    subassunto: "Tampões Intracelulares e Proteicos",
    dificuldade: "Médio",
    enunciado: "Embora o sistema bicarbonato seja predominante no espaço extracelular, no meio INTRACELULAR outros sistemas assumem papel tamponante crítico. Quais são os principais agentes tamponantes citoplasmáticos?",
    alternativas: [
      { id: "A", texto: "Corpos cetônicos e triacilgliceróis dissolvidos." },
      { id: "B", texto: "Tampão fosfato (HPO4 2- / H2PO4 -) e resíduos de histidina nas proteínas intracelulares." },
      { id: "C", texto: "Ácido lático e lactato de sódio." },
      { id: "D", texto: "Íons cálcio e magnésio em forma livre." }
    ],
    respostaCorreta: "B",
    explicacao: "No meio intracelular, o fosfato orgânico e inorgânico é abundante e possui pKa de 6,86 (próximo do pH do citosol ~7,2). Além disso, o anel imidazol da histidina presente nas proteínas celulares (como a hemoglobina nas hemácias) possui pKa em torno de 6,0, atuando eficientemente como doador/aceptor de prótons.",
    explicacaoAlternativas: {
      A: "Incorreta. Lipídios são biomoléculas apolares sem grupos ionizáveis com capacidade tamponante fisiológica.",
      B: "Correta. O fosfato inorgânico/orgânico e os grupos R imidazólicos da histidina proteica são os pilares da capacidade tampão celular.",
      C: "Incorreta. Ácido lático é um subproduto metabólico ácido que desestabiliza o pH quando acumulado, não um tampão de manutenção.",
      D: "Incorreta. Ca2+ e Mg2+ são cátions divalentes sinalizadores/cofatores sem capacidade de aceitar prótons H+."
    },
    conceitoPrincipal: "Tamponamento intracelular promovido pelo sistema fosfato e por resíduos de histidina em proteínas."
  },
  {
    id: 10,
    numero: 10,
    assunto: "Água nos sistemas biológicos, pH e tampões",
    subassunto: "Osmolaridade e Pressão Osmótica",
    dificuldade: "Médio",
    enunciado: "Um paciente internado na UTI recebe por engano uma infusão intravenosa rápida de uma solução hipotônica pura (água destilada). O que acontecerá com as hemácias do paciente como consequência osmótica imediata?",
    alternativas: [
      { id: "A", texto: "Perderão água para o plasma por osmose, sofrendo crenação (murchamento)." },
      { id: "B", texto: "Absorverão água do plasma por osmose até sofrerem turgescência e lise (hemólise)." },
      { id: "C", texto: "Não sofrerão alteração de volume, pois o plasma impede a difusão de água." },
      { id: "D", texto: "Liberarão sódio intracelular ativamente para igualar a osmolaridade extracelular." }
    ],
    respostaCorreta: "B",
    explicacao: "A osmose é o movimento da água do meio de menor concentração de solutos (hipotônico) para o de maior concentração (hipertônico). A adição de água destilada torna o plasma hipotônico em relação ao interior da hemácia; a água entra rapidamente nas células vermelhas, causando edema, turgescência e rompimento da membrana (hemólise).",
    explicacaoAlternativas: {
      A: "Incorreta. A crenação (murchamento) ocorre quando a hemácia é colocada em meio HIPERTÔNICO, onde ela perde água.",
      B: "Correta. A água destilada reduz a osmolaridade plasmática; a água entra na célula por gradiente osmótico, levando à hemólise intravascular.",
      C: "Incorreta. A membrana plasmática é altamente permeável à água (via aquaporinas); o fluxo osmótico é imediato.",
      D: "Incorreta. O transporte ativo de sódio via bomba Na+/K+ ATPase não é rápido o suficiente para evitar o fluxo osmótico da água."
    },
    conceitoPrincipal: "Consequências osmóticas do desequilíbrio de osmolaridade plasmática sobre a integridade celular eritrocitária."
  },

  // Assunto 3: Eletrólitos e equilíbrio ácido-base (Q11 - Q15)
  {
    id: 11,
    numero: 11,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    subassunto: "Acidose Metabólica e Ânion Gap",
    dificuldade: "Difícil",
    enunciado: "Um paciente jovem com Diabetes Mellitus Tipo 1 é admitido no pronto-socorro inconsciente, com respiração profunda de Kussmaul. A gasometria arterial revela: pH = 7,15, PaCO2 = 22 mmHg, HCO3- = 8 mEq/L. Os eletrólitos séricos mostram Na+ = 138 mEq/L, Cl- = 98 mEq/L. Qual é o diagnóstico ácido-base e o valor do Ânion Gap (hiato aniônico)?",
    alternativas: [
      { id: "A", texto: "Acidose metabólica com Ânion Gap normal (10 mEq/L)." },
      { id: "B", texto: "Acidose metabólica com Ânion Gap elevado (32 mEq/L) devido ao acúmulo de cetoácidos." },
      { id: "C", texto: "Alcalose respiratória descompensada com Ânion Gap de 18 mEq/L." },
      { id: "D", texto: "Acidose respiratória primária com Ânion Gap de 40 mEq/L." }
    ],
    respostaCorreta: "B",
    explicacao: "Ânion Gap = Na+ - (Cl- + HCO3-) = 138 - (98 + 8) = 32 mEq/L (Valor de referência normal: 8-12 mEq/L). O pH < 7,35 com HCO3- muito baixo (< 22) confirma Acidose Metabólica. O hiato aniônico bastante elevado decorre do acúmulo de ânions não mensurados (acetoacetato e β-hidroxibutirato na Cetoacidose Diabética). A PaCO2 reduzida reflete hiperventilação compensatória (respiração de Kussmaul).",
    explicacaoAlternativas: {
      A: "Incorreta. O cálculo do Ânion Gap dá 32 mEq/L, o que é severamente elevado (não normal).",
      B: "Correta. Paciente com cetoacidose diabética apresenta acidose metabólica com ânion gap elevado por produção excessiva de cetoácidos não mensurados.",
      C: "Incorreta. O pH está abaixo de 7,35 (acidose, não alcalose) e a causa primária é a queda extrema do bicarbonato.",
      D: "Incorreta. A alteração primária é o bicarbonato (metabólica); a hiperventilação é apenas uma compensação secundária."
    },
    conceitoPrincipal: "Cálculo e interpretação do Ânion Gap no diagnóstico de acidoses metabólicas."
  },
  {
    id: 12,
    numero: 12,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    subassunto: "Alcalose Metabólica por Vômitos",
    dificuldade: "Médio",
    enunciado: "Um lactente apresenta estenose hipertrófica do piloro e episódios repetidos de vômitos incoercíveis não biliosos. A gasometria arterial demonstra pH = 7,52, HCO3- = 34 mEq/L e PaCO2 = 46 mmHg. Qual é o mecanismo bioquímico causador dessa distorção ácido-base?",
    alternativas: [
      { id: "A", texto: "Perda excessiva de ácido clorídrico (H+ e Cl-) no suco gástrico, levando à retenção relativa de bicarbonato no plasma." },
      { id: "B", texto: "Perda de secreção pancreática rica em bicarbonato através do vômito." },
      { id: "C", texto: "Retenção de CO2 pulmonar como alteração primária causadora de acidose." },
      { id: "D", texto: "Consumo excessivo de tampões proteicos plasmáticos." }
    ],
    respostaCorreta: "A",
    explicacao: "Os vômitos de origem gástrica causam perda maciça de HCl (prótons H+ e íons Cl-). Ao sintetizar o HCl gástrico, as células parietais lançam uma quantidade equivalente de HCO3- na circulação (maré alcalina). Quando o ácido gástrico é vomitado em vez de neutralizado pelo bicarbonato pancreático no duodeno, ocorre acúmulo sistêmico de bicarbonato, resultando em Alcalose Metabólica Hipoclorêmica.",
    explicacaoAlternativas: {
      A: "Correta. A perda de H+ gástrico desloca o equilíbrio ácido-base no sentido da alcalose metabólica com hipocloremia.",
      B: "Incorreta. Vômitos pancreáticos/biliosos causam perda de bicarbonato (levando à acidose), mas na estenose de piloro o obstáculo impede a passagem do conteúdo duodenal.",
      C: "Incorreta. A elevação modesta da PaCO2 (46 mmHg) é apenas a resposta compensatória pulmonar (hipoventilação), não a causa primária.",
      D: "Incorreta. O desequilíbrio é provocado pela perda hidroeletrolítica direta de HCl."
    },
    conceitoPrincipal: "Patofisiologia da alcalose metabólica hipoclorêmica induzida por perdas gástricas."
  },
  {
    id: 13,
    numero: 13,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    subassunto: "Acidose Respiratória e Compensação Renal",
    dificuldade: "Médio",
    enunciado: "Um paciente idoso com Doença Pulmonar Obstrutiva Crônica (DPOC) grave dá entrada com exacerbação infecciosa. Sua gasometria mostra pH = 7,28, PaCO2 = 65 mmHg e HCO3- = 30 mEq/L. Como é classificado esse distúrbio e como os rins estão respondendo?",
    alternativas: [
      { id: "A", texto: "Alcalose metabólica aguda com compensação respiratória." },
      { id: "B", texto: "Acidose respiratória com compensação renal parcial (retenção e reabsorção de bicarbonato)." },
      { id: "C", texto: "Acidose metabólica pura sem resposta compensatória." },
      { id: "D", texto: "Alcalose respiratória crônica com perda renal de bicarbonato." }
    ],
    respostaCorreta: "B",
    explicacao: "pH = 7,28 (< 7,35) indica acidose. PaCO2 = 65 mmHg (> 45 mmHg) indica hipoventilação pulmonar como causa primária (Acidose Respiratória). O HCO3- de 30 mEq/L (> 26 mEq/L) demonstra que os rins estão retendo e reabsorvendo bicarbonato para tamponar o excesso de H+ e tentar restabelecer o pH fisiológico.",
    explicacaoAlternativas: {
      A: "Incorreta. O pH é ácido (7,28), afastando o diagnóstico de alcalose.",
      B: "Correta. A retenção primária de CO2 pelos pulmões desencadeia acidose respiratória; a resposta renal compensatória consiste em reabsorver HCO3- e excretar H+.",
      C: "Incorreta. A elevação do HCO3- para 30 mEq/L comprova a presença de compensação renal em andamento.",
      D: "Incorreta. Na alcalose respiratória a PaCO2 estaria diminuída por hiperventilação."
    },
    conceitoPrincipal: "Acidose respiratória induzida por retenção de CO2 e os mecanismos de compensação renal através da reabsorção de HCO3-."
  },
  {
    id: 14,
    numero: 14,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    subassunto: "Alcalose Respiratória por Hiperventilação",
    dificuldade: "Fácil",
    enunciado: "Durante uma crise grave de ansiedade e pânico, uma jovem hiperventila intensamente por 15 minutos, evoluindo com parestesias periorais e espasmo carpopodal (sinal de Trousseau). A causa bioquímica dos sintomas neurológicos/musculares é:",
    alternativas: [
      { id: "A", texto: "Aumento da pCO2 gerando acidose grave que destrói a bainha de mielina." },
      { id: "B", texto: "Alcalose respiratória por eliminação excessiva de CO2, aumentando a ligação do cálcio à albumina e reduzindo o cálcio iônico livre." },
      { id: "C", texto: "Hipocalemia grave provocada por perda renal imediata de potássio em minutos." },
      { id: "D", texto: "Acúmulo de ácido lático muscular devido à fadiga dos músculos intercostais." }
    ],
    respostaCorreta: "B",
    explicacao: "A hiperventilação 'lava' o CO2 do sangue (lavagem de CO2), elevando o pH sanguíneo (Alcalose Respiratória). O pH elevado promove a desprotonação dos resíduos carboxílicos da albumina plasmática. Com mais cargas negativas livres, a albumina se liga fortemente ao cálcio (Ca2+), reduzindo abruptamente a fração de cálcio iônico (livre) e provocando hipocalcemia funcional com hiperexitabilidade neuromuscular (tetania/parestesias).",
    explicacaoAlternativas: {
      A: "Incorreta. A hiperventilação DIMINUI a pCO2 e causa ALCALOSE, não acidose.",
      B: "Correta. A alcalose aumenta os sítios de ligação aniónicos na albumina, sequestrando cálcio iônico livre e precipitando parestesias e espasmos musculares.",
      C: "Incorreta. A compensação renal leva horas a dias; as parestesias agudas por hiperventilação decorrem do desequilíbrio do cálcio iônico.",
      D: "Incorreta. O lactato não é a causa das parestesias agudas por hiperventilação psiquogênica."
    },
    conceitoPrincipal: "Efeito da alcalose respiratória aguda sobre o cálcio iônico plasmático e excitabilidade neuromuscular."
  },
  {
    id: 15,
    numero: 15,
    assunto: "Eletrólitos e equilíbrio ácido-base",
    subassunto: "Fórmula de Winter e Compensação Ácido-Base",
    dificuldade: "Difícil",
    enunciado: "Para avaliar se a resposta compensatória respiratória em um paciente com acidose metabólica é adequada, utiliza-se a Fórmula de Winter: PaCO2 esperada = (1,5 × [HCO3-]) + 8 ± 2. Se um paciente apresenta HCO3- = 12 mEq/L e sua PaCO2 aferida na gasometria for de 38 mmHg, qual é a interpretação clínica correta?",
    alternativas: [
      { id: "A", texto: "A resposta compensatória está perfeita e esperada para o nível de bicarbonato." },
      { id: "B", texto: "O paciente apresenta um distúrbio misto: Acidose Metabólica associada a uma Acidose Respiratória (hipoventilação inadequada)." },
      { id: "C", texto: "O paciente possui uma Alcalose Respiratória concomitante supercompensada." },
      { id: "D", texto: "A fórmula de Winter não pode ser aplicada se o bicarbonato estiver abaixo de 15 mEq/L." }
    ],
    respostaCorreta: "B",
    explicacao: "Aplicando a Fórmula de Winter: PaCO2 esperada = (1,5 × 12) + 8 ± 2 = 18 + 8 ± 2 = 26 ± 2 mmHg (faixa aceitável: 24 a 28 mmHg). Como a PaCO2 real do paciente é de 38 mmHg (muito acima da faixa esperada de 26 mmHg), significa que o paciente não está ventilando o suficiente para expelir o CO2 necessário. Trata-se, portanto, de um distúrbio misto: Acidose Metabólica + Acidose Respiratória.",
    explicacaoAlternativas: {
      A: "Incorreta. A PaCO2 esperada seria 24-28 mmHg; 38 mmHg indica retenção inadequada de CO2.",
      B: "Correta. Quando a PaCO2 medida é superior à PaCO2 esperada pela Fórmula de Winter, há retenção anormal de CO2 associada (acidose respiratória concomitante).",
      C: "Incorreta. Se houvesse alcalose respiratória concomitante, a PaCO2 estaria ABAIXO dos 24 mmHg esperados.",
      D: "Incorreta. A fórmula de Winter é perfeitamente válida para faixas de bicarbonato reduzido na acidose metabólica."
    },
    conceitoPrincipal: "Uso da Fórmula de Winter para identificação de distúrbios ácido-base mistos."
  },

  // Assunto 4: Aminoácidos, peptídeos e proteínas de interesse clínico (Q16 - Q20)
  {
    id: 16,
    numero: 16,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    subassunto: "Ponto Isoelétrico (pI) e Carga Elétrica de Aminoácidos",
    dificuldade: "Médio",
    enunciado: "O Ácido Glutâmico é um aminoácido dicarboxílico que possui três grupos ionizáveis com os seguintes pKas: pK1 (α-carboxila) = 2,19; pK2 (α-amino) = 9,67; pKR (carboxila da cadeia lateral) = 4,25. Qual é o valor aproximado do Ponto Isoelétrico (pI) do Glutamato e qual será sua carga líquida em pH fisiológico (7,4)?",
    alternativas: [
      { id: "A", texto: "pI = 3,22; carga líquida = -1" },
      { id: "B", texto: "pI = 5,93; carga líquida = 0" },
      { id: "C", texto: "pI = 6,96; carga líquida = +1" },
      { id: "D", texto: "pI = 4,25; carga líquida = -2" }
    ],
    respostaCorreta: "A",
    explicacao: "Para aminoácidos ácidos (com cadeia lateral carboxílica), a forma zwitteriônica neutra situa-se entre a ionização dos dois grupos carboxila. Assim, pI = (pK1 + pKR) / 2 = (2,19 + 4,25) / 2 = 6,44 / 2 = 3,22. Em pH 7,4 (pH > pI), ambos os grupos carboxila estão desprotonados (-1 e -1 = -2) e o grupo amino está protonado (+1), resultando em carga líquida de -1.",
    explicacaoAlternativas: {
      A: "Correta. O pI é a média dos pKas dos grupos carboxílicos (3,22). Em pH 7,4 o ácido glutâmico encontra-se predominantemente na forma aniónica (monoânion, carga -1).",
      B: "Incorreta. 5,93 é a média entre pK1 e pK2, fórmula usada apenas para aminoácidos neutros sem cadeia lateral ionizável.",
      C: "Incorreta. Em pH 7,4, acima do pI, a carga deve ser negativa (aniónica), não positiva.",
      D: "Incorreta. O pI é uma média calculada entre duas etapas de desprotonação que cercam a espécie neutra."
    },
    conceitoPrincipal: "Cálculo do Ponto Isoelétrico (pI) de aminoácidos dicarboxílicos e determinação da carga elétrica em pH fisiológico."
  },
  {
    id: 17,
    numero: 17,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    subassunto: "Níveis de Estrutura Proteica e Desnaturação",
    dificuldade: "Fácil",
    enunciado: "A desnaturação de uma proteína globular por aquecimento ou alteração extrema de pH compromete sua função biológica. Quais níveis de organização estrutural da proteína são destruídos durante o processo de desnaturação suave sem clivagem de ligações peptídicas?",
    alternativas: [
      { id: "A", texto: "Apenas a estrutura primária." },
      { id: "B", texto: "As estruturas secundária, terciária e quaternária, preservando a estrutura primária intacta." },
      { id: "C", texto: "Todas as estruturas, incluindo as ligações covalentes peptídicas da estrutura primária." },
      { id: "D", texto: "Apenas as pontes dissulfeto de cisteína." }
    ],
    respostaCorreta: "B",
    explicacao: "A desnaturação desrupta interações fracas não-covalentes (pontes de hidrogênio, interações hidrofóbicas, pontes salinas) que mantêm os arranjos secundário (α-hélices/folhas-β), terciário e quaternário. As ligações peptídicas covalentes que unem os aminoácidos na estrutura primária permanecem intactas.",
    explicacaoAlternativas: {
      A: "Incorreta. A estrutura primária é a única mantida intocada durante a desnaturação sem proteólise.",
      B: "Correta. A perda da conformação tridimensional nativa afeta as estruturas secundária, terciária e quaternária, mantendo a sequência de aminoácidos (estrutura primária).",
      C: "Incorreta. A quebra de ligações peptídicas é chamada de hidrólise proteica (ou proteólise), e não desnaturação.",
      D: "Incorreta. A desnaturação afeta amplamente todas as forças conformacionais secundárias e terciárias."
    },
    conceitoPrincipal: "Conceito de desnaturação proteica e a preservação da estrutura primária covalente."
  },
  {
    id: 18,
    numero: 18,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    subassunto: "Hemoglobinopatias: Anemia Falciforme",
    dificuldade: "Médio",
    enunciado: "A Anemia Falciforme (HbS) é uma doença genética clássica decorrente de uma mutação de ponto no gene da β-globina. Qual alteração molecular exata na cadeia polipeptídica desencadeia a polimerização da hemoglobina desoxigenada e a deformação das hemácias em foice?",
    alternativas: [
      { id: "A", texto: "Substituição do aminoácido apolar Valina pelo aminoácido polar Ácido Glutâmico na posição 6." },
      { id: "B", texto: "Substituição do Ácido Glutâmico (hidrofílico) pela Valina (hidrofóbica) na posição 6 da cadeia β." },
      { id: "C", texto: "Deleção completa da Histidina distal F8 ligada ao grupo heme." },
      { id: "D", texto: "Troca da Lisina por Arginina na interface alfa-beta." }
    ],
    respostaCorreta: "B",
    explicacao: "Na HbS, o sexto aminoácido da cadeia β (Ácido Glutâmico, negativamente carregado e hidrofílico) é substituído por uma Valina (apolar e hidrofóbica). Essa Valina exposta cria um 'patch' hidrofóbico na superfície da desoxi-HbS, fazendo com que as moléculas de hemoglobina se agreguem em polímeros fibrosos insolúveis que deformam a hemácia em formato de foice.",
    explicacaoAlternativas: {
      A: "Incorreta. A substituição é exatamente o inverso: o Ácido Glutâmico é trocado pela Valina.",
      B: "Correta. A introdução de Valina hidrofóbica na posição β6 gera um ponto de contato grudento apolar que induz a polimerização em baixas tensões de O2.",
      C: "Incorreta. A deleção da Histidina F8 causa metemoglobinemia ou instabilidade da globina, não falciformação.",
      D: "Incorreta. Trocas conservativas entre Lisina e Arginina não causam o fenótipo falciforme."
    },
    conceitoPrincipal: "Bases moleculares da Anemia Falciforme (mutação E6V na cadeia β-globina)."
  },
  {
    id: 19,
    numero: 19,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    subassunto: "Curva de Dissociação da Hemoglobina e Efeito Bohr",
    dificuldade: "Médio",
    enunciado: "Nos tecidos periféricos em intensa atividade metabólica, a alta produção de CO2 e o acúmulo de prótons H+ (queda do pH) modulam a afinidade da hemoglobina pelo oxigênio. Esse fenômeno fisiológico é conhecido como Efeito Bohr. De que maneira ele otimiza a oxigenação tecidual?",
    alternativas: [
      { id: "A", texto: "Desloca a curva de dissociação de O2 para a esquerda, aumentando a afinidade da hemoglobina pelo oxigênio." },
      { id: "B", texto: "Desloca a curva de dissociação para a direita, reduzindo a afinidade pelo O2 e facilitando sua liberação nos tecidos." },
      { id: "C", texto: "Provoca a dissociação das subunidades da hemoglobina em monômeros isolados de mioglobina." },
      { id: "D", texto: "Inibe a síntese de 2,3-bisfosfoglicerato (2,3-BPG) nas hemácias." }
    ],
    respostaCorreta: "B",
    explicacao: "O aumento de H+ e CO2 nos tecidos estabiliza o estado T (tenso, de menor afinidade por O2) da hemoglobina. Isso desloca a curva de saturação de oxigênio para a DIREITA (aumenta P50), significando que a hemoglobina descarrega o O2 com muito mais facilidade para suprir os tecidos metabolicamente ativos.",
    explicacaoAlternativas: {
      A: "Incorreta. O deslocamento para a esquerda ocorre nos pulmões (alcalose, menor pCO2, menor temperatura), onde se deseja CAPTAR O2.",
      B: "Correta. O Efeito Bohr reduz a afinidade pelo O2 em meio ácido/rico em CO2, promovendo a entrega eficiente de O2 aos tecidos.",
      C: "Incorreta. A tetramerização da hemoglobina permanece estável; o que muda é a conformação alostérica entre os estados R e T.",
      D: "Incorreta. O 2,3-BPG atua em conjunto com H+ e CO2 para estabilizar a forma T, reforçando o descarregamento de O2."
    },
    conceitoPrincipal: "Significado fisiológico do Efeito Bohr e deslocamento da curva de dissociação da hemoglobina para a direita."
  },
  {
    id: 20,
    numero: 20,
    assunto: "Aminoácidos, peptídeos e proteínas de interesse clínico",
    subassunto: "Biossíntese do Colágeno e Escorbuto",
    dificuldade: "Fácil",
    enunciado: "Um marinheiro no século XVIII apresenta sangramento gengival, petéquias cutâneas, má cicatrização de feridas e fragilidade capilar severa (quadro clássico de Escorbuto). O defeito bioquímico subjacente reside na deficiência de Vitamina C (Ácido Ascórbico), que afeta diretamente qual etapa da maturação do colágeno?",
    alternativas: [
      { id: "A", texto: "A tradução do RNA mensageiro do pré-procolágeno nos ribossomos." },
      { id: "B", texto: "A hidroxilação enzimática dos resíduos de Prolina e Lisina, necessária para estabilizar a hélice tripla do colágeno." },
      { id: "C", texto: "A clivagem proteolítica dos peptídeos N e C-terminais do procolágeno no espaço extracelular." },
      { id: "D", texto: "A incorporação de pontes dissulfeto intercadeias." }
    ],
    respostaCorreta: "B",
    explicacao: "A Vitamina C atua como agente redutor cofactor essencial para as enzimas prolyl-hidroxilase e lysyl-hidroxilase, mantendo o íon Fe2+ em seu estado reduzido ativo. A ausência de 4-hidroxiprolina impede a formação de pontes de hidrogênio intracadeias vitais para estabilizar a tripla-hélice do tropocolágeno, resultando em colágeno termicamente instável e fragilidade vascular.",
    explicacaoAlternativas: {
      A: "Incorreta. A tradução proteica da cadeia de procolágeno ocorre normalmente nos ribossomos.",
      B: "Correta. A deficiência de ascorbato impede a hidroxilação de prolina/lisina, comprometendo a estabilidade estrutural do colágeno.",
      C: "Incorreta. A clivagem dos propeptídeos é realizada por peptidases do procolágeno independentes de vitamina C.",
      D: "Incorreta. Pontes dissulfeto são formadas no retículo endoplasmático durante o enovelamento inicial, mas a falha estrutural do escorbuto é a falta de hidroxilação."
    },
    conceitoPrincipal: "Papel coenzimático do ácido ascórbico (Vitamina C) na hidroxilação da prolina/lisina na maturação do colágeno."
  },

  // Assunto 5: Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal (Q21 - Q25)
  {
    id: 21,
    numero: 21,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    subassunto: "Transaminação e Transporte de Amônia",
    dificuldade: "Médio",
    enunciado: "Durante o catabolismo de aminoácidos nos tecidos periféricos (como no músculo esquelético sob exercício intenso), o grupo amino (-NH3+) tóxico precisa ser transportado com segurança até o fígado para metabolização. Quais são as duas principais formas não-tóxicas de transporte de amônia na circulação sanguínea?",
    alternativas: [
      { id: "A", texto: "Ureia livre e ácido úrico." },
      { id: "B", texto: "Glutamina e Alanina (Ciclo de Cahill / Alanina-Glicose)." },
      { id: "C", texto: "Amônia livre (NH3) e amônio (NH4+)." },
      { id: "D", texto: "Aspartato e Glutamato livres." }
    ],
    respostaCorreta: "B",
    explicacao: "A amônia livre é altamente neurotóxica. Para seu transporte seguro, os tecidos periféricos convertem o glutamato em Glutamina (via Glutamina Sintetase). No músculo, o piruvato recebe o amino derivado dos aminoácidos de cadeia ramificada, formando Alanina (Ciclo da Alanina-Glicose). No fígado, Glutamina e Alanina liberam a amônia para o Ciclo da Ureia.",
    explicacaoAlternativas: {
      A: "Incorreta. A ureia é produzida exclusivamente no fígado para excreção renal, não sendo a forma primária de transporte do músculo ao fígado.",
      B: "Correta. Glutamina (nos tecidos em geral) e Alanina (no músculo) são os veículos neutros e não-tóxicos de transporte de nitrogênio no sangue.",
      C: "Incorreta. Níveis elevados de amônia livre (NH3/NH4+) no plasma causam encefalopatia e coma.",
      D: "Incorreta. Glutamato e Aspartato em níveis elevados na circulação são excitotóxicos e não circulam como transportadores sistêmicos principais."
    },
    conceitoPrincipal: "Mecanismo de transporte não-tóxico de amônia dos tecidos periféricos ao fígado via Glutamina e Alanina."
  },
  {
    id: 22,
    numero: 22,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    subassunto: "Ciclo da Ureia e Hiperamonemia",
    dificuldade: "Difícil",
    enunciado: "Um recém-nascido do sexo masculino apresenta recusa alimentar, letargia, hipotonia, alcalose respiratória e episódios convulsivos no terceiro dia de vida. Os exames laboratoriais revelam níveis plasmáticos de amônia extremamente elevados (800 µmol/L; normal < 50) e acúmulo acentuado de Ácido Orotótico na urina. Qual enzima do ciclo da ureia apresenta deficiência hereditária nesse lactente?",
    alternativas: [
      { id: "A", texto: "Carbamoil Fosfato Sintetase I (CPS-I)." },
      { id: "B", texto: "Ornitina Carbamoiltransferase (OTC)." },
      { id: "C", texto: "Argininosuccinato Sintetase." },
      { id: "D", texto: "Arginase." }
    ],
    respostaCorreta: "B",
    explicacao: "A deficiência de Ornitina Carbamoiltransferase (OTC) é a desordem do ciclo da ureia mais comum (herança ligada ao X). O bloqueio da OTC faz com que o carbamoil fosfato acumulado na matriz mitocondrial vaze para o citosol, onde alimenta a via de biossíntese de pirimidinas, levando à superprodução e excreção de ÁCIDO OROTÓTICO na urina (acidúria orótica).",
    explicacaoAlternativas: {
      A: "Incorreta. A deficiência de CPS-I causa hiperamonemia grave, porém com NÍVEIS BAIXOS ou ausentes de ácido orotótico urinário.",
      B: "Correta. O achado de hiperamonemia grave associado ao aumento de ácido orotótico é patognomônico da deficiência de OTC.",
      C: "Incorreta. A deficiência de Argininosuccinato Sintetase causa citrulinemia com acúmulo proeminente de citrulina.",
      D: "Incorreta. A deficiência de arginase causa argininemia progressiva com espasticidade em idades mais avançadas."
    },
    conceitoPrincipal: "Diagnóstico diferencial enzimático das hiperamonemias congênitas no Ciclo da Ureia."
  },
  {
    id: 23,
    numero: 23,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    subassunto: "Neurotoxicidade da Amônia",
    dificuldade: "Médio",
    enunciado: "A hiperamonemia grave gera encefalopatia hepática metabólica com edema cerebral citotóxico de astrócitos. Qual é o mecanismo bioquímico intracelular no SNC que explica o inchaço astrocitário induzido pela amônia?",
    alternativas: [
      { id: "A", texto: "Consumo excessivo de α-cetoglutarato para síntese de glutamato e conversão deste em Glutamina pela Glutamina Sintetase astrocitária, gerando influxo osmótico de água." },
      { id: "B", texto: "Bloqueio direto da captação de glicose pela barreira hematoencefálica." },
      { id: "C", texto: "Deposição de cristais de ureia no tecido cerebral." },
      { id: "D", texto: "Destruição autoinmune dos receptores de GABA." }
    ],
    respostaCorreta: "A",
    explicacao: "Nos astrócitos, a enzima Glutamina Sintetase combina NH4+ com Glutamato para formar Glutamina. Na hiperamonemia, o acúmulo intracelular massivo de Glutamina (um osmólito potente) nos astrócitos atrai água por gradiente osmótico, causando edema cerebral citotóxico, hipertensão intracraniana e prejuízo ao ciclo de Krebs por depleção de α-cetoglutarato.",
    explicacaoAlternativas: {
      A: "Correta. O acúmulo de glutamina nos astrócitos atua como uma 'esponja osmótica', puxando água e causando edema cerebral grave.",
      B: "Incorreta. A captação de glicose via GLUT-1 prossegue; a toxicidade é impulsionada pelo estresse osmótico e depleção de intermediários energéticos.",
      C: "Incorreta. O cérebro não realiza o ciclo da ureia e não acumula cristais de ureia.",
      D: "Incorreta. A alteração não é autoimune, mas sim metabólico-osmótica direta por toxicidade de nitrogênio."
    },
    conceitoPrincipal: "Mecanismo neurotóxico da amônia: acúmulo astrocitário de glutamina e edema cerebral citotóxico."
  },
  {
    id: 24,
    numero: 24,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    subassunto: "Estresse Oxidativo, G6PD e Anemia Hemolítica",
    dificuldade: "Médio",
    enunciado: "Um homem de 28 anos com deficiência de Glicose-6-Fosfato Desidrogenase (G6PD) desenvolve icterícia, urina escura e palidez intensa dois dias após utilizar o antimalárico Primaquina. Qual é a falha metabólica nas hemácias que precipitou a crise hemolítica induzida pelo fármaco?",
    alternativas: [
      { id: "A", texto: "Incapacidade de gerar ATP na via glicolítica de Embden-Meyerhof." },
      { id: "B", texto: "Deficiência na produção de NADPH pela via das pentoses fosfato, impedindo a regeneração da Glutationa Reduzida (GSH) para neutralizar espécies reativas de oxigênio." },
      { id: "C", texto: "Acúmulo de metemoglobina devido à falta de síntese de ferro heme." },
      { id: "D", texto: "Inibição irreversível da anidrase carbônica eritrocitária." }
    ],
    respostaCorreta: "B",
    explicacao: "As hemácias dependem exclusivamente da enzima G6PD (primeira enzima da Via das Pentoses Fosfato) para produzir NADPH. O NADPH é o cofator indispensável para a enzima Glutationa Redutase reconverter a glutationa oxidada (GSSG) em Glutationa Reduzida (GSH). Sem GSH, os peróxidos gerados por drogas oxidantes (como a primaquina) desnaturam a hemoglobina (corpos de Heinz) e rompem a membrana eritrocitária (hemólise).",
    explicacaoAlternativas: {
      A: "Incorreta. A glicólise produz ATP normalmente; a falha está na Via das Pentoses Fosfato que gera NADPH.",
      B: "Correta. A deficiência de NADPH impede a reciclagem da glutationa reduzida (GSH), deixando as hemácias vulneráveis à lise oxidativa por radicais livres.",
      C: "Incorreta. A metemoglobinemia é a oxidação de Fe2+ a Fe3+, que possui vias de redução próprias via citocromo b5 redutase.",
      D: "Incorreta. A anidrase carbônica não é afetada na deficiência enzimática da G6PD."
    },
    conceitoPrincipal: "Papel do NADPH e da glutationa reduzida (GSH) na defesa antioxidante eritrocitária contra o estresse oxidativo."
  },
  {
    id: 25,
    numero: 25,
    assunto: "Metabolismo das proteínas, ciclo da ureia, estresse oxidativo e função renal",
    subassunto: "Marcadores de Função Renal e Filtração Glomerular",
    dificuldade: "Fácil",
    enunciado: "Na avaliação laboratorial da função renal, a Creatinina sérica é amplamente utilizada para estimar a Taxa de Filtração Glomerular (TFG). Qual é a origem bioquímica da creatinina no organismo humano?",
    alternativas: [
      { id: "A", texto: "Produto da degradação enzimática de aminoácidos pirimídicos no fígado." },
      { id: "B", texto: "Anidrido resultante da degradação espontânea não-enzimática da Creatina e Fosfocreatina no tecido muscular esquelético." },
      { id: "C", texto: "Subproduto da digestão bacteriana de proteínas no cólon intestinal." },
      { id: "D", texto: "Metabólito sintetizado nos túbulos renais durante o processo de secreção ativa." }
    ],
    respostaCorreta: "B",
    explicacao: "A creatinina é formada no tecido muscular esquelético pela conversão espontânea, irreversível e não-enzimática da fosfocreatina e creatina em uma taxa constante diária (proporcional à massa muscular do indivíduo). Por ser filtrada livremente pelo glomérulo e sofrer mínima reabsorção/secreção tubular, sua concentração sérica reflete com precisão a TFG.",
    explicacaoAlternativas: {
      A: "Incorreta. A creatinina não deriva do catabolismo de nucleotídeos de pirimidina.",
      B: "Correta. A ciclização espontânea da fosfocreatina muscular gera a creatinina, cuja taxa de produção é constante e depende da massa muscular.",
      C: "Incorreta. Proteínas intestinais formam ureia e amônia, e não creatinina.",
      D: "Incorreta. A creatinina é filtrada no glomérulo, e não sintetizada de novo nos túbulos renais."
    },
    conceitoPrincipal: "Origem metabólica muscular da creatinina e sua aplicação na estimativa da taxa de filtração glomerular."
  },

  // Assunto 6: Lipídios, metabolismo lipídico e dislipidemias (Q26 - Q30)
  {
    id: 26,
    numero: 26,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    subassunto: "β-oxidação de Ácidos Graxos e L-Carnitina",
    dificuldade: "Médio",
    enunciado: "Para que os ácidos graxos de cadeia longa (como o palmitato, 16C) sejam degradados para a produção de energia, eles precisam ser transportados do citosol para a matriz mitocondrial. Qual sistema transportador enzimático é fundamental para a translocação dos ácidos graxos através da membrana mitocondrial interna?",
    alternativas: [
      { id: "A", texto: "Lançadeira do Malato-Aspartato." },
      { id: "B", texto: "Sistema da Carnitina Palmitoiltransferase (CPT-I, CPT-II e L-carnitina)." },
      { id: "C", texto: "Translocador de Nucleotídeos de Adenina (ANT)." },
      { id: "D", texto: "Lançadeira do Glicerol-3-Fosfato." }
    ],
    respostaCorreta: "B",
    explicacao: "Ácidos graxos de cadeia longa ativados (Acil-CoA) não atravessam a impermeável membrana mitocondrial interna. A enzima CPT-I (na membrana externa) transfere o grupo acila para a L-carnitina, formando Acil-carnitina. Esta é translocada para a matriz, onde a CPT-II regenera o Acil-CoA mitocondrial para dar início à β-oxidação.",
    explicacaoAlternativas: {
      A: "Incorreta. A lançadeira malato-aspartato transporta equivalentes redutores de NADH do citosol para a mitocôndria, não lipídios.",
      B: "Correta. A lançadeira de carnitina (CPT-I / CPT-II) é o passo limitante e obrigatório para o transporte de ácidos graxos de cadeia longa até a matriz mitocondrial.",
      C: "Incorreta. O ANT transporta ATP mitocondrial para o citosol em troca de ADP.",
      D: "Incorreta. A lançadeira glicerol-3-fosfato transfere elétrons do NADH citosólico para o FAD mitocondrial."
    },
    conceitoPrincipal: "Mecanismo de transporte citosol-matriz mitocondrial de ácidos graxos via sistema Carnitina Palmitoiltransferase (CPT)."
  },
  {
    id: 27,
    numero: 27,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    subassunto: "Cetogênese e Cetoacidose",
    dificuldade: "Médio",
    enunciado: "Durante o jejum prolongado ou na cetoacidose diabética não tratada, o fígado produz intensamente corpos cetônicos (Acetoacetato, β-Hidroxibutirato e Acetona). Por que o próprio hepatócito é INCAPAZ de utilizar os corpos cetônicos como fonte energética?",
    alternativas: [
      { id: "A", texto: "Porque o fígado carece da enzima Tioforase (β-Cetoacil-CoA Transferase)." },
      { id: "B", texto: "Porque a mitocôndria hepática não possui acetil-CoA desidrogenase." },
      { id: "C", texto: "Porque a membrana hepatocitária é impermeável a corpos cetônicos." },
      { id: "D", texto: "Porque os corpos cetônicos são destruídos pela insulina dentro do fígado." }
    ],
    respostaCorreta: "A",
    explicacao: "O fígado é o único órgão capaz de sintetizar corpos cetônicos a partir do excesso de Acetil-CoA gerado pela β-oxidação. No entanto, o hepatócito não pode re-converter o acetoacetato em acetoacetil-CoA porque não expressa a enzima Tioforase (succinil-CoA:3-cetoácido CoA transferase). Isso garante que os corpos cetônicos sejam exportados para tecidos extra-hepáticos (cérebro, coração, músculo).",
    explicacaoAlternativas: {
      A: "Correta. A ausência da enzima tioforase no fígado previne um ciclo fútil, obrigando a exportação dos corpos cetônicos para os órgãos periféricos.",
      B: "Incorreta. A acetil-CoA desidrogenase participa da β-oxidação e está presente em abundância no fígado.",
      C: "Incorreta. Os corpos cetônicos são hidrossolúveis e se difundem facilmente através de transportadores de monocarboxilatos.",
      D: "Incorreta. A síntese e utilização de corpos cetônicos são reguladas enzimaticamente, sem degradação direta pela insulina."
    },
    conceitoPrincipal: "Fisiologia da cetogênese hepática e a ausência da enzima tioforase como mecanismo de exportação metabólica."
  },
  {
    id: 28,
    numero: 28,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    subassunto: "Metabolismo das Lipoproteínas (Quilomícrons e VLDL)",
    dificuldade: "Fácil",
    enunciado: "As lipoproteínas plasmáticas transportam lipídios hidrofóbicos na circulação aquosa. A enzima Lipoproteína Lipase (LPL), ancorada ao endotélio dos capilares do tecido adiposo e muscular, desempenha função chave no clareamento de triglicerídeos circulantes. Qual apolipoproteína é o cofator essencial necessário para ativar a LPL?",
    alternativas: [
      { id: "A", texto: "ApoA-I" },
      { id: "B", texto: "ApoB-100" },
      { id: "C", texto: "ApoC-II" },
      { id: "D", texto: "ApoE" }
    ],
    respostaCorreta: "C",
    explicacao: "A ApoC-II (presente nos quilomícrons e na VLDL, transferida pela HDL) é o ativador alostérico indispensável da Lipoproteína Lipase (LPL). A LPL hidrolisa os triacilgliceróis das lipoproteínas em ácidos graxos livres e glicerol. Indivíduos com deficiência congênita de ApoC-II desenvolvem hipertrigliceridemia grave (síndrome de quilomicronemia).",
    explicacaoAlternativas: {
      A: "Incorreta. ApoA-I é a apolipoproteína principal da HDL que ativa a LCAT no transporte reverso de colesterol.",
      B: "Incorreta. ApoB-100 é a apolipoproteína estrutural da VLDL, IDL e LDL que se liga ao receptor de LDL (LDLR).",
      C: "Correta. ApoC-II atua como 'chave' ativadora da LPL nos capilares periféricos para a entrega de ácidos graxos.",
      D: "Incorreta. ApoE medeia o reconhecimento de remanescentes lipoproteicos pelo receptor hepático."
    },
    conceitoPrincipal: "Função da Apolipoproteína C-II na ativação da Lipoproteína Lipase (LPL) e hidrólise de triacilgliceróis."
  },
  {
    id: 29,
    numero: 29,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    subassunto: "Biossíntese do Colesterol e Mecanismo das Estatinas",
    dificuldade: "Fácil",
    enunciado: "As estatinas (como a Atorvastatina e a Simvastatina) são os medicamentos mais prescritos na prática médica para o controle da hipercolesterolemia e prevenção de eventos cardiovasculares. Qual é o alvo enzimático direto inibido pelas estatinas na via de síntese do colesterol?",
    alternativas: [
      { id: "A", texto: "Escualeno Sintase." },
      { id: "B", texto: "HMG-CoA Redutase (3-hidroxi-3-metilglutaril-CoA redutase)." },
      { id: "C", texto: "Lecitina-Colesterol Aciltransferase (LCAT)." },
      { id: "D", texto: "Acil-CoA:Colesterol Aciltransferase (ACAT)." }
    ],
    respostaCorreta: "B",
    explicacao: "As estatinas atuam como inibidores competitivos reversíveis da enzima HMG-CoA Redutase, que catalisa a conversão da HMG-CoA em Mevalonato. Por ser a etapa limitante da síntese de colesterol intracelular no fígado, sua inibição reduz o pool hepático de colesterol, estimulando a superexpressão de Receptores de LDL (LDLR) na superfície hepatocitária e reduzindo o LDL-c plasmático.",
    explicacaoAlternativas: {
      A: "Incorreta. A escualeno sintase atua em etapas posteriores da via e não é o alvo das estatinas.",
      B: "Correta. A HMG-CoA Redutase é a enzima chave regulatória da biossíntese endógena de colesterol bloqueada pelas estatinas.",
      C: "Incorreta. A LCAT esterifica o colesterol na superfície das partículas de HDL na circulação sanguínea.",
      D: "Incorreta. A ACAT esterifica colesterol dentro das células para armazenamento em gotículas lipídicas."
    },
    conceitoPrincipal: "Mecanismo farmacológico de inibição da HMG-CoA Redutase pelas estatinas e up-regulation dos receptores de LDL."
  },
  {
    id: 30,
    numero: 30,
    assunto: "Lipídios, metabolismo lipídico e dislipidemias",
    subassunto: "Hipercolesterolemia Familiar e Receptores de LDL",
    dificuldade: "Difícil",
    enunciado: "Um homem de 34 anos apresenta xantomas tendinosos nos tendões de Aquiles, arco corneano precoce e níveis de LDL-colesterol de 380 mg/dL. Seu pai faleceu de infarto agudo do miocárdio aos 41 anos. O teste genético confirma Hipercolesterolemia Familiar Heterozigótica. Qual o defeito de membrana característico dessa condição?",
    alternativas: [
      { id: "A", texto: "Mutação no gene do receptor de LDL (LDLR), impedindo a endocitose mediada por receptor das partículas de LDL circulantes." },
      { id: "B", texto: "Superativação permanente da lipase hepática eliminando o HDL." },
      { id: "C", texto: "Ausência completa de apolipoproteína B-48 no intestino delgado." },
      { id: "D", texto: "Incapacidade de sintetizar sal biliar na vesícula biliar." }
    ],
    respostaCorreta: "A",
    explicacao: "A Hipercolesterolemia Familiar é uma doença autossômica dominante provocada na maioria dos casos por mutações inativadoras no gene do receptor de LDL (LDLR). Sem receptores funcionais na superfície do fígado, a remoção da LDL plasmática por endocitose mediada por clatrina é gravemente afetada, levando ao acúmulo massivo de LDL no sangue e deposição em artérias e tendões (xantomas).",
    explicacaoAlternativas: {
      A: "Correta. A deficiência funcional do LDLR impede o depuramento hepático de partículas de LDL, gerando hipercolesterolemia grave e aterosclerose precoce.",
      B: "Incorreta. O defeito reside na captação do LDL, e não na lipase hepática.",
      C: "Incorreta. A ausência de ApoB-48 causa abetalipoproteinemia (incapacidade de absorver lipídios da dieta), gerando níveis extremamente BAIXOS de colesterol.",
      D: "Incorreta. Os sais biliares são sintetizados normalmente a partir do colesterol abundante no interior das células."
    },
    conceitoPrincipal: "Patogênese molecular da Hipercolesterolemia Familiar (mutação no LDLR e falha na endocitose de LDL)."
  },

  // Assunto 7: Enzimas, cinética enzimática, regulação e inibidores (Q31 - Q35)
  {
    id: 31,
    numero: 31,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    subassunto: "Cinética de Michaelis-Menten (Km e Vmax)",
    dificuldade: "Fácil",
    enunciado: "Na cinética enzimática de Michaelis-Menten, a constante Km (Constante de Michaelis) é um parâmetro fundamental. Qual é o significado físico/biológico direto do valor de Km?",
    alternativas: [
      { id: "A", texto: "É a velocidade máxima Vmax dividida por dois." },
      { id: "B", texto: "É a concentração de substrato [S] na qual a velocidade da reação atinge metade da velocidade máxima (Vmax / 2)." },
      { id: "C", texto: "É a energia de ativação total necessária para converter substrato em produto." },
      { id: "D", texto: "É o tempo em segundos gasto pela enzima para catalisar 1 mol de substrato." }
    ],
    respostaCorreta: "B",
    explicacao: "Por definição matemática na equação de Michaelis-Menten (v = (Vmax × [S]) / (Km + [S])), quando [S] = Km, a velocidade v = Vmax/2. Um Km baixo indica alta afinidade da enzima pelo substrato (é necessária pouca concentração de substrato para atingir metade da Vmax), enquanto um Km alto reflete menor afinidade.",
    explicacaoAlternativas: {
      A: "Incorreta. Km é uma CONCENTRAÇÃO de substrato (expressa em mM ou µM), e não uma velocidade.",
      B: "Correta. Km corresponde exatamente à concentração de substrato necessária para ocupar metade dos sítios ativos enzimáticos disponíveis (v = 0,5 Vmax).",
      C: "Incorreta. A energia de ativação é representada pelo símbolo ΔG‡, não por Km.",
      D: "Incorreta. O tempo de renovação por segundo é a constante de velocidade kcat (turnover number)."
    },
    conceitoPrincipal: "Definição cinética do Km como a concentração de substrato necessária para atingir metade da Vmax."
  },
  {
    id: 32,
    numero: 32,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    subassunto: "Inibição Enzimática Competitiva",
    dificuldade: "Médio",
    enunciado: "O Metotrexato é um quimioterápico antineoplásico que compete estruturalmente com o Folato pelo sítio ativo da enzima Dihidrofolato Redutase (DHFR). Como se comportam os parâmetros cinéticos Km aparente e Vmax na presença desse inibidor competitivo?",
    alternativas: [
      { id: "A", texto: "O Km aparente AUMENTA e a Vmax permanece INALTERADA (pode ser atingida adicionando grande excesso de substrato)." },
      { id: "B", texto: "O Km aparente diminui e a Vmax diminui." },
      { id: "C", texto: "O Km aparente permanece inalterado e a Vmax diminui severamente." },
      { id: "D", texto: "Tanto o Km quanto a Vmax aumentam proporcionalmente." }
    ],
    respostaCorreta: "A",
    explicacao: "Na inibição competitiva, o inibidor disputa diretamente o mesmo sítio ativo com o substrato. Para alcançar metade da velocidade máxima é necessária uma concentração maior de substrato (o Km aparente AUMENTA). Porém, ao adicionar concentrações massivas de substrato, este suplanta o inibidor, permitindo atingir a mesma velocidade máxima (Vmax permanece INALTERADA).",
    explicacaoAlternativas: {
      A: "Correta. Inibidores competitivos elevam o Km aparente (reduzem aparente afinidade) mas não alteram a Vmax.",
      B: "Incorreta. Esse padrão com diminuição de ambos os parâmetros caracteriza inibição incompetitiva (uncompetitive).",
      C: "Incorreta. Vmax reduzida com Km inalterado é a marca registrada da inibição NÃO-competitiva pura.",
      D: "Incorreta. Nenhum inibidor aumenta a velocidade máxima Vmax de uma enzima."
    },
    conceitoPrincipal: "Características cinéticas da inibição enzimática competitiva (Km aparente elevado e Vmax inalterada)."
  },
  {
    id: 33,
    numero: 33,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    subassunto: "Inibição Enzimática Não-Competitiva",
    dificuldade: "Médio",
    enunciado: "Um pesticida organofosforado liga-se de forma não-competitiva a um sítio alostérico distinto do sítio catalítico da Acetilcolinesterase. Qual é o efeito característico da inibição NÃO-competitiva sobre os gráficos de Lineweaver-Burk e parâmetros cinéticos?",
    alternativas: [
      { id: "A", texto: "Altera o ponto de intersecção no eixo X (-1/Km) e mantém a intersecção no eixo Y (1/Vmax)." },
      { id: "B", texto: "Reduz a Vmax (aumentando o ponto de intersecção no eixo Y, 1/Vmax) enquanto o Km permanece inalterado (mesma intersecção no eixo X)." },
      { id: "C", texto: "Desloca as retas paralelamente sem alterar a inclinação." },
      { id: "D", texto: "Aumenta a Vmax e diminui o Km simultaneamente." }
    ],
    respostaCorreta: "B",
    explicacao: "Inibidores não-competitivos se ligam a um sítio alostérico independente de a enzima estar livre ou ligada ao substrato (ligam-se a E e a ES com a mesma afinidade). Eles reduzem a capacidade catalítica da enzima (diminuem a Vmax), mas não alteram a capacidade de ligação do substrato ao sítio ativo (o Km permanece INALTERADO). No gráfico duplo-recíproco de Lineweaver-Burk, as linhas cruzam-se exatamente sobre o eixo X (-1/Km).",
    explicacaoAlternativas: {
      A: "Incorreta. Alterar o eixo X e manter o eixo Y caracteriza inibição competitiva.",
      B: "Correta. A inibição não-competitiva pura reduz a Vmax funcional (eleva 1/Vmax no eixo Y) sem interferir no Km (mantém -1/Km no eixo X).",
      C: "Incorreta. Retas paralelas no gráfico de Lineweaver-Burk correspondem à inibição incompetitiva.",
      D: "Incorreta. Nenhum inibidor eleva a Vmax catalítica."
    },
    conceitoPrincipal: "Diagnóstico gráfico e cinético da inibição não-competitiva (redução da Vmax com preservação do Km)."
  },
  {
    id: 34,
    numero: 34,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    subassunto: "Regulação Alostérica da Fosfofructocinase-1 (PFK-1)",
    dificuldade: "Difícil",
    enunciado: "A Fosfofructocinase-1 (PFK-1) é a enzima chave regulatória e limitante da glicólise. Ela é alostérica e modulada por vários efetores metabólicos. Qual molécula atua como o efetor alostérico positivo MAIS POTENTE da PFK-1, superando a inibição por altos níveis de ATP?",
    alternativas: [
      { id: "A", texto: "Citrato" },
      { id: "B", texto: "Frutose-2,6-bisfosfato (F-2,6-BP)" },
      { id: "C", texto: "Glicose-6-Fosfato" },
      { id: "D", texto: "Ácido Alanina" }
    ],
    respostaCorreta: "B",
    explicacao: "A Frutose-2,6-bisfosfato (sintetizada pela enzima bifuncional PFK-2 sob estimulação insulínica) é o efetor alostérico positivo mais potente da PFK-1. Ela se liga ao sítio alostérico aumentando dramaticamente a afinidade pelo substrato Frutose-6-fosfato e aliviando completamente a inibição alostérica exercida por altas concentrações de ATP.",
    explicacaoAlternativas: {
      A: "Incorreta. O Citrato é um efetor alostérico NEGATIVO (inibitório) da PFK-1, sinalizando abundância energética mitocondrial.",
      B: "Correta. A Frutose-2,6-bisfosfato é o ativador alostérico fisiológico dominante que impulsiona a glicólise hepática.",
      C: "Incorreta. A Glicose-6-fosfato inibe alostericamente a Hexocinase, mas não atua como ativador principal da PFK-1.",
      D: "Incorreta. Alanina é um inibidor alostérico da Piruvato Quinase (sinalizando abundância de blocos proteicos)."
    },
    conceitoPrincipal: "Regulação alostérica da glicólise pelo efetor positivo Frutose-2,6-bisfosfato sobre a PFK-1."
  },
  {
    id: 35,
    numero: 35,
    assunto: "Enzimas, cinética enzimática, regulação e inibidores",
    subassunto: "Modificação Covalente Reversível e Fosforilação",
    dificuldade: "Médio",
    enunciado: "A regulação enzimática por modificação covalente reversível é um mecanismo rápido desencadeado por cascatas hormonais. Qual das opções descreve corretamente o impacto da fosforilação sobre a Glicogênio Sintase e sobre a Glicogênio Fosforilase sob ação do Glucagon / Adrenalina?",
    alternativas: [
      { id: "A", texto: "A fosforilação ATIVA a Glicogênio Sintase e INIBE a Glicogênio Fosforilase." },
      { id: "B", texto: "A fosforilação INIBE a Glicogênio Sintase (desativando a síntese de glicogênio) e ATIVA a Glicogênio Fosforilase (estimulando a glicogenólise)." },
      { id: "C", texto: "A fosforilação destrói irreversivelmente ambas as enzimas no lisossomo." },
      { id: "D", texto: "A fosforilação não altera a atividade enzimática, apenas a localização subcelular." }
    ],
    respostaCorreta: "B",
    explicacao: "O glucagon e a adrenalina ativam a Proteína Quinase A (PKA). A PKA fosforila covalentemente as enzimas reguladoras do glicogênio. A fosforilação DESATIVA a Glicogênio Sintase (inativa na forma b fosforilada) para cessar a estocagem de glicose, e simultaneamente ATIVA a Glicogênio Fosforilase (ativa na forma a fosforilada) para liberar glicose rapidamente na circulação.",
    explicacaoAlternativas: {
      A: "Incorreta. Esse seria o padrão da desfosforilação mediada pela Insulina (via Proteína Fosfatase-1).",
      B: "Correta. A cascata de fosforilação estimulada pelo glucagon/AMPc desliga a via de síntese (Glicogênio Sintase) e liga a via de quebra (Glicogênio Fosforilase).",
      C: "Incorreta. A modificação covalente é perfeitamente reversível por ação de fosfatases, sem proteólise lisossômica.",
      D: "Incorreta. A fosforilação altera drasticamente a conformação e os parâmetros Vmax/Km das enzimas alvo."
    },
    conceitoPrincipal: "Regulação hormonal coordenada do metabolismo do glicogênio por modificação covalente (fosforilação reversível)."
  }
];
