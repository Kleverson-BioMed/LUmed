// ==========================================
// LUmed - BANCO DE QUESTÕES (PARTE 2)
// Questões Q56 a Q145
// Microbiologia, Virologia, Parasitologia e Propedeutica Médica
// ==========================================

export const QUESTIONS_PART2 = [
  // --------------------------------------------------------------------------
  // MICROBIOLOGIA & VIROLOGIA (Q56 - Q90)
  // --------------------------------------------------------------------------
  {
    id: "q56",
    numero: 56,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "facil",
    enunciado: "As bactérias Gram-positivas e Gram-negativas possuem diferenças fundamentais na composição de sua parede celular. Assinale a alternativa que descreve CORRETAMENTE a estrutura da parede celular de uma bactéria Gram-positiva.",
    alternativas: [
      "A) Apresenta uma fina camada de peptidoglicano revestida externamente por uma membrana dupla rica em lipopolissacarídeo (LPS).",
      "B) Possui uma espessa camada de peptidoglicano associada a ácidos teicoicos e lipoteicoicos, sem membrana externa.",
      "C) É composta exclusivamente por pseudopeptidoglicano e esteróis complexos semelhantes aos das células eucarióticas.",
      "D) Carece de peptidoglicano, sendo constituída apenas por uma cápsula polissacarídica rica em ácido hialurônico."
    ],
    respostaCorreta: 1,
    explicacao: "As bactérias Gram-positivas caracterizam-se por uma parede celular espessa formada por múltiplas camadas de peptidoglicano (mureína), intercalada por ácidos teicoicos e lipoteicoicos. Elas não possuem membrana externa contendo lipopolissacarídeo (LPS), característica exclusiva das Gram-negativas.",
    explicacaoAlternativas: {
      A: "Incorreto. A camada fina de peptidoglicano e a membrana externa com LPS são características de bactérias Gram-negativas.",
      B: "Correto. Bactérias Gram-positivas possuem espessa camada de peptidoglicano com ácidos teicoicos e lipoteicoicos, retendo o complexo cristal violeta-iodo na coloração de Gram.",
      C: "Incorreto. Pseudopeptidoglicano é encontrado em arqueias (Archaea), não em bactérias.",
      D: "Incorreto. Mycoplasma é o gênero que carece de parede celular, mas Gram-positivas típicas têm parede rica em peptidoglicano."
    },
    conceitoPrincipal: "Parede celular de bactérias Gram-positivas: espessa camada de peptidoglicano + ácidos teicoicos.",
    source: "Murray - Microbiologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK7986/",
    sourceYear: 2023
  },
  {
    id: "q57",
    numero: 57,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "media",
    enunciado: "O lipopolissacarídeo (LPS), também conhecido como endotoxina bacteriana, é um componente estrutural crítico de qual grupo de microrganismos e qual a sua porção responsável pela toxicidade sistêmica (choque endotóxico)?",
    alternativas: [
      "A) Bactérias Gram-positivas; porção Antígeno O.",
      "B) Bactérias Gram-negativas; porção Lipídio A.",
      "C) Fungos leveduriformes; porção Beta-glucana.",
      "D) Micobactérias; porção Ácido micólico."
    ],
    respostaCorreta: 1,
    explicacao: "O LPS é encontrado exclusivamente na folheta externa da membrana externa de bactérias Gram-negativas. É composto pelo Antígeno O (polissacarídeo externo), Core (núcleo) e Lipídio A. O Lipídio A é a porção bioativa ancorada na membrana responsável por desencadear a cascata inflamatória maciça, febre, vasodilatação e choque séptico/endotóxico via receptores TLR4.",
    explicacaoAlternativas: {
      A: "Incorreto. Gram-positivas não possuem LPS; o antígeno O é a porção imunogênica externa, não a endotoxina lipídica.",
      B: "Correto. O LPS é característico de Gram-negativas e sua toxicidade reside no Lipídio A.",
      C: "Incorreto. Beta-glucana é componente celular de fungos e ativa respostas imunes, mas não é o LPS.",
      D: "Incorreto. Ácidos micólicos são lipídios complexos da parede de Mycobacterium (BAAR), não LPS."
    },
    conceitoPrincipal: "Lipopolissacarídeo (LPS) em Gram-negativas; toxicidade atribuída ao Lipídio A (endotoxina).",
    source: "Jawetz, Melnick & Adelberg - Microbiologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK8407/",
    sourceYear: 2022
  },
  {
    id: "q58",
    numero: 58,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "media",
    enunciado: "Os endósporos bacterianos são estruturas extraordinariamente resistentes a calor, dessecação, radiação e desinfetantes químicos. Quais gêneros bacterianos de importância médica são classicamente conhecidos por produzir endósporos?",
    alternativas: [
      "A) Staphylococcus e Streptococcus",
      "B) Bacillus e Clostridium",
      "C) Pseudomonas e Escherichia",
      "D) Neisseria e Haemophilus"
    ],
    respostaCorreta: 1,
    explicacao: "Os gêneros Bacillus (ex: B. anthracis, B. cereus) e Clostridium (ex: C. tetani, C. botulinum, C. difficile), ambos bacilos Gram-positivos, são os principais produtores de endósporos de interesse médico. O endósporo é uma forma de resistência dormente contendo dipicolinato de cálcio.",
    explicacaoAlternativas: {
      A: "Incorreto. Cocos Gram-positivos como Staphylococcus e Streptococcus não formam endósporos.",
      B: "Correto. Bacillus e Clostridium são os dois gêneros bacterianos clinicamente relevantes esporulados.",
      C: "Incorreto. Bacilos Gram-negativos como Pseudomonas e E. coli não produzem endósporos.",
      D: "Incorreto. Diplococos e cocobacilos Gram-negativos como Neisseria e Haemophilus não formam endósporos."
    },
    conceitoPrincipal: "Formação de endósporos por espécies dos gêneros Bacillus e Clostridium.",
    source: "Madigan et al. - Brock Biology of Microorganisms",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK8407/",
    sourceYear: 2021
  },
  {
    id: "q59",
    numero: 59,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "facil",
    enunciado: "Na coloração de Gram, técnica fundamental de bacteriologia, qual o reagente utilizado como MORDENTE para fixar o corante primário à parede celular bacteriana?",
    alternativas: [
      "A) Cristal Violeta",
      "B) Lugol (Iodo)",
      "C) Álcool-Acetona",
      "D) Safranina ou Fucsina"
    ],
    respostaCorreta: 1,
    explicacao: "A sequência correta da coloração de Gram é: 1. Cristal violeta (corante primário); 2. Lugol/Iodo (mordente que forma o complexo cristal violeta-iodo insolúvel); 3. Álcool-acetona (descorante); 4. Safranina ou Fucsina básica (corante de fundo/contraste).",
    explicacaoAlternativas: {
      A: "Incorreto. O cristal violeta é o corante primário.",
      B: "Correto. O Lugol atua como mordente, aumentando a afinidade do cristal violeta com o peptidoglicano.",
      C: "Incorreto. O álcool-acetona é o agente descorante diferencial.",
      D: "Incorreto. Safranina/fucsina é o corante secundário de contra-coloração."
    },
    conceitoPrincipal: "Etapas da coloração de Gram: Cristal Violeta -> Lugol (mordente) -> Álcool-Acetona -> Safranina.",
    source: "Manual de Microbiologia Clínica - ANVISA",
    sourceUrl: "https://www.gov.br/anvisa/",
    sourceYear: 2022
  },
  {
    id: "q60",
    numero: 60,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "dificil",
    enunciado: "O mecanismo de ação dos antibióticos beta-lactâmicos (como penicilinas e cefalosporinas) consiste na inibição da síntese da parede celular bacteriana. Qual enzima específica é o alvo desses fármacos?",
    alternativas: [
      "A) DNA girase (Topoisomerase II)",
      "B) Transpeptidase (Proteína Ligante de Penicilina - PBP)",
      "C) RNA polimerase dependente de DNA",
      "D) Dihidrofolato redutase"
    ],
    respostaCorreta: 1,
    explicacao: "Os antibióticos beta-lactâmicos ligam-se covalentemente às Transpeptidases (conhecidas como PBPs - Penicillin-Binding Proteins), inibindo a reação de transpeptidação que forma as pontes cruzadas entre as cadeias de peptidoglicano, fragilizando a parede e levando à lise osmótica bacteriana.",
    explicacaoAlternativas: {
      A: "Incorreto. A DNA girase é inibida pelas quinolonas/fluoroquinolonas.",
      B: "Correto. Transpeptidases (PBPs) catalisam a ligação cruzada dos peptídeos na parede celular e são o alvo direto dos beta-lactâmicos.",
      C: "Incorreto. A RNA polimerase é inibida pela rifampicina.",
      D: "Incorreto. A dihidrofolato redutase é inibida pelo trimetoprim."
    },
    conceitoPrincipal: "Mecanismo de beta-lactâmicos: inibição da transpeptidase (PBP) na síntese do peptidoglicano.",
    source: "Goodman & Gilman - As Bases Farmacológicas da Terapêutica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK8407/",
    sourceYear: 2023
  },
  {
    id: "q61",
    numero: 61,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "media",
    enunciado: "Determinadas bactérias possuem a capacidade de produzir cápsulas polissacarídicas externas. A presença de cápsula constitui um fator de virulência de extrema importância porque:",
    alternativas: [
      "A) Inibe a transcrição do RNA mensageiro na célula hospedeira.",
      "B) Dificulta a opsonização e impede a fagocitose pelos macrófagos e neutrófilos.",
      "C) Degrada a membrana citoplasmática dos eritrócitos provocando hemólise total.",
      "D) Permite a fixação direta aos ribossomos 70S bacterianos para acelerar o crescimento."
    ],
    respostaCorreta: 1,
    explicacao: "A cápsula polissacarídica recobre a bactéria (ex: Streptococcus pneumoniae, Neisseria meningitidis, Haemophilus influenzae tipável), mascarando antígenos de superfície e dificultando o reconhecimento pelos receptores de fagócitos (macrófagos/neutrófilos), conferindo acentuada resistência à fagocitose.",
    explicacaoAlternativas: {
      A: "Incorreto. A cápsula não atua inibindo a transcrição do RNA eucariótico.",
      B: "Correto. A principal função de virulência da cápsula é a antifagocitose por impedimento estérico e inibição da opsonização por complemento.",
      C: "Incorreto. A hemólise é promovida por exotoxinas chamadas hemolisinas, não pela cápsula.",
      D: "Incorreto. Ribossomos são estruturas internas citoplasmáticas."
    },
    conceitoPrincipal: "Cápsula polissacarídica como fator antifagocitário de virulência bacteriana.",
    source: "Murray - Microbiologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK7986/",
    sourceYear: 2023
  },
  {
    id: "q62",
    numero: 62,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "facil",
    enunciado: "Microrganismos procariontes e eucariontes possuem organização celular distinta. Assinale a alternativa que apresenta uma estrutura presente EXCLUSIVAMENTE em células eucarióticas.",
    alternativas: [
      "A) Ribossomos",
      "B) Membrana plasmática",
      "C) Carioteca (envoltório nuclear delimitando o núcleo verdadeiro)",
      "D) Parede celular"
    ],
    respostaCorreta: 2,
    explicacao: "Procariontes (bactérias e arqueias) possuem material genético disperso no citoplasma (nucleoide) sem envoltório nuclear. A carioteca (membrana nuclear dupla com poros) delimitando um núcleo verdadeiro é exclusiva de células eucarióticas (fungos, protozoários, plantas e animais).",
    explicacaoAlternativas: {
      A: "Incorreto. Ribossomos estão presentes em procariontes (70S) e eucariontes (80S).",
      B: "Incorreto. Membrana plasmática envolve todas as células vivas.",
      C: "Correto. Carioteca é organela exclusiva de eucariontes.",
      D: "Incorreto. Parede celular existe em bactérias (peptidoglicano), fungos (quitina) e plantas (celulose)."
    },
    conceitoPrincipal: "Diferença procariontes vs eucariontes: presença de carioteca e organelas membranosas nos eucariontes.",
    source: "Alberts - Biologia Molecular da Célula",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21054/",
    sourceYear: 2022
  },
  {
    id: "q63",
    numero: 63,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "media",
    enunciado: "Os fungos são organismos eucarióticos heterotróficos que se apresentam sob a forma de leveduras ou fungos filamentosos (bolores). Qual o principal componente lipídico da membrana citoplasmática dos fungos, o qual é alvo de antifúngicos azólicos e polienicos?",
    alternativas: [
      "A) Colesterol",
      "B) Ergosterol",
      "C) Esfingomielina",
      "D) Cardiolipina"
    ],
    respostaCorreta: 1,
    explicacao: "A membrana celular fúngica contém ergosterol como seu esterol dominante, diferentemente das células mamíferas que contêm colesterol. Antifúngicos como os azóis (fluconazol, itraconazol) inibem a síntese de ergosterol (inibição da lanosterol 14-alfa-desmetilase), enquanto polienos (anfotericina B) ligam-se ao ergosterol formando poros na membrana.",
    explicacaoAlternativas: {
      A: "Incorreto. Colesterol é o esterol característico de membranas de mamíferos.",
      B: "Correto. O ergosterol é o esterol específico da membrana fúngica e alvo farmacológico clássico.",
      C: "Incorreto. Esfingomielina é um fosfolipídio comum em mamíferos.",
      D: "Incorreto. Cardiolipina é encontrada na membrana mitocondrial interna."
    },
    conceitoPrincipal: "Ergosterol como esterol de membrana fúngica e alvo de antifúngicos (azóis e anfotericina B).",
    source: "San-Blas - Medical Mycology",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK7986/",
    sourceYear: 2021
  },
  {
    id: "q64",
    numero: 64,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "dificil",
    enunciado: "O meio de ágar MacConkey é amplamente utilizado em microbiologia clínica por ser simultaneamente SELETIVO e DIFERENCIAL. Qual ingrediente confere a seletividade e qual propriedade permite a diferenciação de bacilos Gram-negativos?",
    alternativas: [
      "A) Seletivo por Cristal Violeta e Sais Biliares (inibe Gram-positivas); Diferencial pela Fermentação da Lactose.",
      "B) Seletivo por NaCl 7,5% (inibe Gram-negativas); Diferencial pela Fermentação do Manitol.",
      "C) Seletivo por Sangue de Carneiro 5%; Diferencial pela Beta-hemólise.",
      "D) Seletivo por Telurito de Potássio; Diferencial pelo Crescimento em Coagulase."
    ],
    respostaCorreta: 0,
    explicacao: "O Ágar MacConkey contém sais biliares e cristal violeta que inibem o crescimento de bactérias Gram-positivas (seletividade). Contém lactose e indicador de pH vermelho de metila/neutro: bactérias lactose-positivas (ex: E. coli, Klebsiella) produzem ácido e formam colônias cor-de-rosa/vermelhas, enquanto lactose-negativas (ex: Salmonella, Shigella, Pseudomonas) formam colônias incolores.",
    explicacaoAlternativas: {
      A: "Correto. Sais biliares/cristal violeta inibem Gram-positivas; fermentação da lactose diferencia coliformes rosa de não-fermentadores incolores.",
      B: "Incorreto. Essa descrição corresponde ao Ágar Manitol Salgado (seletivo para Staphylococcus).",
      C: "Incorreto. Corresponde ao Ágar Sangue (meio enriquecido e diferencial de hemólise).",
      D: "Incorreto. Telurito é usado no meio de Hoyle/Tinsdale para Corynebacterium diphtheriae."
    },
    conceitoPrincipal: "Ágar MacConkey: seletivo para Gram-negativas (sais biliares/cristal violeta) e diferencial por fermentação da lactose.",
    source: "Koneman - Diagnóstico Microbiológico",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK8407/",
    sourceYear: 2022
  },
  {
    id: "q65",
    numero: 65,
    assunto: "microbiologia",
    subassunto: "Microbiologia Geral",
    dificuldade: "media",
    enunciado: "Bactérias anaeróbias estritas (como Clostridium perfringens e Bacteroides fragilis) morrem na presença de oxigênio livre. Qual é a razão bioquímica principal para essa sensibilidade ao O2?",
    alternativas: [
      "A) Inabilidade de sintetizar peptidoglicano em ambientes oxigenados.",
      "B) Ausência das enzimas protetoras Superóxido Dismutase (SOD) e Catalase para neutralizar EROs (Espécies Reativas de Oxigênio).",
      "C) Bloqueio irreversível da síntese proteica ribossômica pelo O2 dissolvido.",
      "D) Oxidação direta do DNA plasmidial impedindo a replicação celular."
    ],
    respostaCorreta: 1,
    explicacao: "O metabolismo aeróbico gera radicais livres tóxicos de oxigênio (ânion superóxido O2-, peróxido de hidrogênio H2O2). Aeróbios e anaeróbios facultativos possuem as enzimas Superóxido Dismutase (SOD) e Catalase/Peroxidase para inativar essas EROs. Anaeróbios estritos carecem dessas enzimas detoxificantes e sucumbem ao estresse oxidativo.",
    explicacaoAlternativas: {
      A: "Incorreto. A síntese de peptidoglicano não depende da ausência de oxigênio.",
      B: "Correto. Anaeróbios estritos não têm SOD e catalase para inativar superóxido e peróxido de hidrogênio.",
      C: "Incorreto. O oxigênio não atua diretamente bloqueando os ribossomos.",
      D: "Incorreto. O dano ao DNA em anaeróbios é secundário ao acúmulo de EROs por falta de enzimas protetoras."
    },
    conceitoPrincipal: "Anaerobiose estrita: ausência de Superóxido Dismutase (SOD) e Catalase para detoxificar radicais de O2.",
    source: "Madigan et al. - Brock Biology of Microorganisms",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK8407/",
    sourceYear: 2022
  },

  // --------------------------------------------------------------------------
  // VIROLOGIA GERAL (Q66 - Q75)
  // --------------------------------------------------------------------------
  {
    id: "q66",
    numero: 66,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "facil",
    enunciado: "Os vírus são considerados agentes infecciosos acelulares e parasitas intracelulares obrigatórios. A estrutura viral mínima completa e infectante (vírion) é constituída por:",
    alternativas: [
      "A) Genoma de ácido nucleico (DNA ou RNA) envolvido por uma capa proteica denominada capsídeo.",
      "B) Membrana fosfolipídica dupla contendo ribossomos e retículo endoplasmático próprio.",
      "C) Parede celular de peptidoglicano e DNA de fita dupla circular sem proteínas.",
      "D) Núcleo verdadeiro delimitado por carioteca com citoplasma rico em mitocôndrias."
    ],
    respostaCorreta: 0,
    explicacao: "Um vírus em sua forma mais simples (vírus não-envelopado ou nulo) é composto por genoma de ácido nucleico (DNA ou RNA, nunca ambos ativamente funcionais ao mesmo tempo na mesma partícula) protegido por uma capa proteica organizada chamada capsídeo. O conjunto genoma + capsídeo é denominado nucleocapsídeo.",
    explicacaoAlternativas: {
      A: "Correto. O vírion básico consiste no ácido nucleico (DNA ou RNA) protegido pelo capsídeo proteico.",
      B: "Incorreto. Vírus não possuem organelas nem ribossomos próprios.",
      C: "Incorreto. Peptidoglicano é exclusivo de bactérias.",
      D: "Incorreto. Vírus não têm estrutura celular, núcleo ou mitocôndrias."
    },
    conceitoPrincipal: "Estrutura básica do vírion: ácido nucleico (DNA ou RNA) + capsídeo proteico.",
    source: "Fields Virology - 7th Edition",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2023
  },
  {
    id: "q67",
    numero: 67,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "media",
    enunciado: "Alguns vírus possuem uma camada lipídica membranosa externa adquirida durante o brotamento através da membrana da célula hospedeira, conhecida como ENVELOPE VIRAL. Em comparação aos vírus não-envelopados (nus), os vírus envelopados são:",
    alternativas: [
      "A) Extremamente resistentes a sabões, detergentes, álcool, dessecação e pH ácido do estômago.",
      "B) Mais sensíveis a solventes lipídicos (álcool, sabão, éter), calor e dessecação, sendo geralmente transmitidos por fluidos corporais ou gotículas úmidas.",
      "C) Capazes de sobreviver por meses no meio ambiente inanimado sem perder a infectividade.",
      "D) Transmitidos exclusivamente pela via fecal-oral devido à estabilidade no trato gastrointestinal."
    ],
    respostaCorreta: 1,
    explicacao: "O envelope viral é derivado da membrana lipídica da célula hospedeira. Por conter lipídios, é facilmente dissolvido por detergentes, sabão e álcool a 70%, além de desidratar rapidamente e ser destruído pelo ácido gástrico. Portanto, vírus envelopados (Influenza, HIV, SARS-CoV-2) são mais lábeis no ambiente e transmitidos por fluidos/gotículas úmidas, enquanto vírus nus (Norovírus, Rotavírus, Poliovírus) resistem ao meio ambiente e via fecal-oral.",
    explicacaoAlternativas: {
      A: "Incorreto. Essa alta resistência é própria de vírus NÃO-envelopados (nus).",
      B: "Correto. O envelope de bicamada lipídica torna o vírus sensível a desinfetantes lipolíticos, álcool e dessecação.",
      C: "Incorreto. Vírus envelopados degradam-se rapidamente em superfícies secas.",
      D: "Incorreto. A via fecal-oral é típica de vírus nus, pois o ácido gástrico e bile destroem o envelope."
    },
    conceitoPrincipal: "Vírus envelopados são sensíveis a álcool, detergentes e dessecação; vírus nus são mais resistentes.",
    source: "Flint et al. - Principles of Virology",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2021
  },
  {
    id: "q68",
    numero: 68,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "media",
    enunciado: "O ciclo de replicação viral envolve etapas ordenadas. Assinale a alternativa que indica a sequência CORRETA das etapas da infecção viral em uma célula hospedeira.",
    alternativas: [
      "A) Adsorção (ligação a receptores) -> Penetração/Desnudamento -> Expressão gênica e Replicação do genoma -> Montagem -> Liberação (brotamento ou lise).",
      "B) Montagem -> Penetração -> Adsorção -> Replicação do genoma -> Desnudamento.",
      "C) Transcrição reversa -> Tradução ribossômica -> Fusão nuclear -> Lise celular -> Adsorção.",
      "D) Desnudamento -> Adsorção -> Liberação -> Montagem -> Síntese de capsômeros."
    ],
    respostaCorreta: 0,
    explicacao: "As etapas fundamentais da replicação viral são: 1. Adsorção (reconhecimento específico receptor-ligante); 2. Penetração (endocitose ou fusão) e Desnudamento (liberação do ácido nucleico); 3. Biossíntese (transcrição do mRNA, tradução de proteínas virais e replicação do genoma); 4. Montagem ou Maturação (encapsidamento); 5. Liberação (lise celular ou brotamento).",
    explicacaoAlternativas: {
      A: "Correto. Apresenta a ordem lógica e biológica exata das etapas de infecção e replicação viral.",
      B: "Incorreto. Montagem ocorre no final do ciclo, não no início.",
      C: "Incorreto. Transcrição reversa só ocorre em retrovírus e hepadnavírus após a penetração/desnudamento.",
      D: "Incorreto. Adsorção é a primeira etapa obrigatória."
    },
    conceitoPrincipal: "Etapas do ciclo replicativo viral: Adsorção -> Penetração/Desnudamento -> Biossíntese -> Montagem -> Liberação.",
    source: "Murray - Microbiologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2023
  },
  {
    id: "q69",
    numero: 69,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "dificil",
    enunciado: "Os retrovírus (como o HIV) possuem um genoma de RNA de fita simples de polaridade positiva, mas utilizam uma enzima viral única para sintetizar um intermediário de DNA de fita dupla que se integra ao genoma do hospedeiro. Essa enzima é denominada:",
    alternativas: [
      "A) RNA polimerase dependente de RNA",
      "B) Transcriptase Reversa (DNA polimerase dependente de RNA)",
      "C) DNA ligase humana",
      "D) Protease de serina"
    ],
    respostaCorreta: 1,
    explicacao: "A Transcriptase Reversa (RT) é uma DNA polimerase dependente de RNA levada no interior do vírion. Ela converte o RNA genômico viral em DNA complementar (cDNA), que é subsequentemente integrado ao cromossomo da célula hospedeira pela enzima Integrase.",
    explicacaoAlternativas: {
      A: "Incorreto. RNA polimerase dependente de RNA é usada por vírus RNA de fita negativa ou positiva não-retrovirais (como Influenza ou Coronavírus).",
      B: "Correto. A Transcriptase Reversa transcreve o RNA viral em DNA, quebrando o dogma central clássico da biologia molecular.",
      C: "Incorreto. DNA ligase une fragmentos de DNA, não transcreve RNA em DNA.",
      D: "Incorreto. Proteases clivam poliproteínas virais durante a maturação."
    },
    conceitoPrincipal: "Transcriptase Reversa em retrovírus: conversão de RNA genômico viral em DNA fita dupla.",
    source: "Fields Virology - 7th Edition",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2023
  },
  {
    id: "q70",
    numero: 70,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "facil",
    enunciado: "A capacidade de um vírus infectar preferencialmente determinadas espécies de hospedeiros e tipos celulares específicos dentro do organismo é denominada:",
    alternativas: [
      "A) Latência viral",
      "B) Tropismo tecidual/viral",
      "C) Deriva genética",
      "D) Efeito citopático"
    ],
    respostaCorreta: 1,
    explicacao: "Tropismo viral é a seletividade que o vírus apresenta por determinado tipo de célula ou tecido (ex: HIV tem tropismo por linfócitos T CD4+ e macrófagos; vírus Influenza por células epiteliais do trato respiratório). Isso é determinado principalmente pela interação específica entre as glicoproteínas virais e os receptores celulares.",
    explicacaoAlternativas: {
      A: "Incorreto. Latência é o estado de infecção dormente em que o vírus permanece na célula sem produzir novas partículas.",
      B: "Correto. Tropismo viral define a especificidade celular e tecidual de infecção do vírus.",
      C: "Incorreto. Deriva genética é o acúmulo de mutações pontuais no genoma viral.",
      D: "Incorreto. Efeito citopático são as alterações morfológicas induzidas pela infecção na célula hospedeira."
    },
    conceitoPrincipal: "Tropismo viral: especificidade de infecção tecidual e celular mediada por receptores.",
    source: "Jawetz - Microbiologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2022
  },
  {
    id: "q71",
    numero: 70,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "media",
    enunciado: "Vírus pertencentes à família Herpesviridae (como HSV-1, HSV-2, VZV e EBV) caracterizam-se por estabelecer infecções latentes no hospedeiro. Onde o Vírus da Varicela-Zóster (VZV) permanece latente após a infecção primária (catapora)?",
    alternativas: [
      "A) Nos hepatócitos do parênquima hepático.",
      "B) Nos gânglios sensoriais das raízes dorsais dos nervos espinais e cranianos.",
      "C) Nos eritrócitos maduros da circulação periférica.",
      "D) Nas células epiteliais dos túbulos renais."
    ],
    respostaCorreta: 1,
    explicacao: "Após a infecção primária (varicela/catapora), o VZV migra de forma retrógrada pelos axônios sensoriais e estabelece latência vitalícia nos gânglios das raízes dorsais espinais e gânglios de nervos cranianos (ex: gânglio trigeminal). A reativação anos mais tarde manifesta-se como Herpes-Zóster (cobreiro) no dermátomo correspondente.",
    explicacaoAlternativas: {
      A: "Incorreto. Hepatócitos são sítios de replicação de vírus das hepatites (HBV, HCV).",
      B: "Correto. O VZV estabelece latência nos neurônios dos gânglios sensoriais dorsais e trigeminais.",
      C: "Incorreto. Eritrócitos não têm núcleo e não sustentam latência de herpesvírus.",
      D: "Incorreto. Citomegalovírus (CMV) pode persistir nos rins, mas o VZV fica latente em gânglios nervosos."
    },
    conceitoPrincipal: "Latência do Vírus Varicela-Zóster (VZV) em gânglios sensoriais nervosos dorsais e sua reativação como Herpes-Zóster.",
    source: "CDC - Varicella-Zoster Virus Pathogenesis",
    sourceUrl: "https://www.cdc.gov/shingles/",
    sourceYear: 2023
  },
  {
    id: "q72",
    numero: 72,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "media",
    enunciado: "As alterações morfológicas visíveis ao microscópio óptico observadas em células cultivadas ou tecidos infectados por vírus (como formação de sincícios, corpúsculos de inclusão ou lise celular) são chamadas de:",
    alternativas: [
      "A) Recombinação genética",
      "B) Efeito Citopático (ECP)",
      "C) Transdução bacteriana",
      "D) Opsonização tecidual"
    ],
    respostaCorreta: 1,
    explicacao: "O Efeito Citopático (ECP) engloba as modificações estruturais e funcionais induzidas pela infecção viral na célula hospedeira, como arredondamento celular, formação de céluas gigantes multinucleadas (sincícios - ex: RSV, sarampo), corpúsculos de inclusão intranucleares/citoplasmáticos (ex: Negri na raiva) e descolamento/lise.",
    explicacaoAlternativas: {
      A: "Incorreto. Recombinação é a troca de segmentos de ácido nucleico entre vírus.",
      B: "Correto. Efeito Citopático é o termo propedêutico e virológico para danos morfológicos em células infectadas.",
      C: "Incorreto. Transdução é transferência de DNA bacteriano por bacteriófagos.",
      D: "Incorreto. Opsonização é marcação de patógenos por anticorpos/complemento."
    },
    conceitoPrincipal: "Efeito Citopático (ECP): dano estrutural e fusão celular (sincícios) em células infectadas por vírus.",
    source: "Murray - Microbiologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2023
  },
  {
    id: "q73",
    numero: 73,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "dificil",
    enunciado: "De acordo com a Classificação de Baltimore, os vírus são divididos em 7 grupos com base na estrutura de seu genoma e na estratégia utilizada para sintetizar o mRNA. Em qual grupo estão inseridos os vírus de RNA de fita simples de polaridade negativa (ssRNA-), como o vírus Influenza e o vírus da Raiva?",
    alternativas: [
      "A) Grupo I (DNA fita dupla)",
      "B) Grupo IV (ssRNA+)",
      "C) Grupo V (ssRNA-)",
      "D) Grupo VI (ssRNA-RT)"
    ],
    respostaCorreta: 2,
    explicacao: "No sistema de Baltimore, vírus do Grupo V possuem genoma de RNA de fita simples de polaridade negativa (ssRNA-). Como o genoma negativo não pode ser lido diretamente pelos ribossomos celalares, esses vírus obrigatoriamente transportam em seu vírion a enzima RNA polimerase dependente de RNA para transcrever a fita negativa no mRNA complementar de polaridade positiva (mRNA+).",
    explicacaoAlternativas: {
      A: "Incorreto. Grupo I contém vírus de DNA de fita dupla (ex: Herpesvírus, Adenovírus).",
      B: "Incorreto. Grupo IV contém vírus ssRNA+ cujo genoma atua diretamente como mRNA (ex: Dengue, Coronavírus, Poliovírus).",
      C: "Correto. Grupo V compreende vírus ssRNA- (Influenza, Rhabdovirus/Raiva, Paramyxovirus).",
      D: "Incorreto. Grupo VI compreende os Retrovírus (ssRNA-RT) que utilizam transcriptase reversa."
    },
    conceitoPrincipal: "Classificação de Baltimore: Grupo V (ssRNA-) exige RNA polimerase viral virional para gerar mRNA+.",
    source: "Baltimore D. - Expression of animal virus genomes (Bact. Rev.)",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC378387/",
    sourceYear: 2021
  },
  {
    id: "q74",
    numero: 74,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "facil",
    enunciado: "Qual a denominação dada à estrutura proteica tridimensional formada por unidades repetitivas chamadas capsômeros que envolve e protege o material genético viral?",
    alternativas: [
      "A) Capsídeo",
      "B) Peplômero",
      "C) Plasmídeo",
      "D) Mesossomo"
    ],
    respostaCorreta: 0,
    explicacao: "O capsídeo é o revestimento proteico do vírus formado pelo automontagem de subunidades proteicas denominadas capsômeros. Apresenta simetria clássica icosaédrica, helicoidal ou complexa.",
    explicacaoAlternativas: {
      A: "Correto. Capsídeo é a capa proteica virional composta por capsômeros.",
      B: "Incorreto. Peplômeros são as espículas glicoproteicas projetadas a partir do envelope viral.",
      C: "Incorreto. Plasmídeo é um elemento genético extracromossômico bacteriano.",
      D: "Incorreto. Mesossomo é uma invaginação de membrana em bactérias (artefato ou estrutura bacteriana)."
    },
    conceitoPrincipal: "Capsídeo viral: invólucro proteico composto por capsômeros.",
    source: "Flint et al. - Principles of Virology",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK21523/",
    sourceYear: 2021
  },
  {
    id: "q75",
    numero: 75,
    assunto: "microbiologia",
    subassunto: "Virologia Geral",
    dificuldade: "media",
    enunciado: "O vírus da Hepatite B (HBV) é um vírus hepatotrópico de DNA com características replicativas únicas. Embora possua genoma de DNA parcialmente fita dupla (dsDNA-RT), o HBV utiliza uma etapa intermediária de RNA e a enzima transcriptase reversa durante seu ciclo. Por esse motivo, é classificado na família:",
    alternativas: [
      "A) Flaviviridae",
      "B) Hepadnaviridae",
      "C) Picornaviridae",
      "D) Orthomyxoviridae"
    ],
    respostaCorreta: 1,
    explicacao: "O HBV pertence à família Hepadnaviridae (Grupo VII de Baltimore). Seu genoma é um DNA circular fita dupla relaxado e incompleto (rcDNA). No núcleo, ele é convertido em DNA circular fechado covalentemente (cccDNA), que gera o RNA pré-genômico (pgRNA). A transcriptase reversa viral retrotranscreve o pgRNA de volta em DNA dentro do capsídeo.",
    explicacaoAlternativas: {
      A: "Incorreto. Flaviviridae inclui o Vírus da Hepatite C (HCV), vírus da Dengue e Febre Amarela (ssRNA+).",
      B: "Correto. Hepadnaviridae é a família do HBV (DNA com transcrição reversa).",
      C: "Incorreto. Picornaviridae inclui o Vírus da Hepatite A (HAV) e Poliovírus (ssRNA+).",
      D: "Incorreto. Orthomyxoviridae inclui os vírus Influenza A, B e C."
    },
    conceitoPrincipal: "Família Hepadnaviridae (HBV): vírus DNA com etapa de transcriptase reversa via RNA pré-genômico.",
    source: "CDC - Hepatitis B Virus Clinical Overview",
    sourceUrl: "https://www.cdc.gov/hepatitis/hbv/",
    sourceYear: 2023
  },

  // --------------------------------------------------------------------------
  // VÍRUS INFLUENZA (Q76 - Q82)
  // --------------------------------------------------------------------------
  {
    id: "q76",
    numero: 76,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "facil",
    enunciado: "O vírus Influenza, causador da gripe, pertence à família Orthomyxoviridae. Qual é a estrutura e organização de seu material genético?",
    alternativas: [
      "A) Molécula única e contínua de DNA de fita dupla linear.",
      "B) Genoma SEGMENTADO de RNA de fita simples de polaridade negativa (ssRNA-), composto por 8 segmentos no Influenza A e B.",
      "C) RNA de fita dupla não-segmentado em formato circular.",
      "D) Molécula contínua de RNA de fita simples de polaridade positiva associada a um plasmídeo."
    ],
    respostaCorreta: 1,
    explicacao: "Os vírus Influenza A e B possuem genoma segmentado constituído por 8 segmentos distintos de RNA de fita simples de sentido negativo (ssRNA-), envolvidos por ribonucleoproteínas. Essa natureza segmentada é crucial para o fenômeno de reassortimento genético (Shift antigênico).",
    explicacaoAlternativas: {
      A: "Incorreto. Influenza não é um vírus DNA.",
      B: "Correto. O genoma do Influenza A e B é segmentado em 8 fatias de RNA fita simples negativa.",
      C: "Incorreto. O genoma não é fita dupla nem circular.",
      D: "Incorreto. O genoma é de sentido negativo e segmentado, sem plasmídeo."
    },
    conceitoPrincipal: "Genoma do Influenza A/B: 8 segmentos independentes de ssRNA de fita negativa.",
    source: "CDC - Influenza Virus Genome Structure",
    sourceUrl: "https://www.cdc.gov/flu/about/viruses/change.htm",
    sourceYear: 2023
  },
  {
    id: "q77",
    numero: 77,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "media",
    enunciado: "No envelope lipídico do vírus Influenza A sobressaem-se duas glicoproteínas de superfície fundamentais: a Hemaglutinina (HA) e a Neuraminidase (NA). Qual é a função específica da HEMAGLUTININA (HA)?",
    alternativas: [
      "A) Clivar o ácido siálico das mucinas para liberar os vírions recém-formados da superfície celular.",
      "B) Promover a ligação (adsorção) do vírus ao receptor de ácido siálico nas células epiteliais respiratórias e mediar a fusão de membranas.",
      "C) Bombear prótons H+ para dentro do vírion para descompactar o capsídeo.",
      "D) Inibir a produção de interferon-alfa pelas células dendríticas."
    ],
    respostaCorreta: 1,
    explicacao: "A Hemaglutinina (HA) reconhece e liga-se aos resíduos de ácido siálico na superfície das células epiteliais do trato respiratório hospedeiro. Após a endocitose, a acidificação do endossomo altera a conformação da HA, desencadeando a fusão do envelope viral com a membrana endossomal e liberando os nucleocapsídeos no citoplasma.",
    explicacaoAlternativas: {
      A: "Incorreto. A clivagem do ácido siálico para liberação virional é a função da Neuraminidase (NA).",
      B: "Correto. A Hemaglutinina liga-se ao ácido siálico e medeia a fusão de membranas.",
      C: "Incorreto. O bombeamento de prótons H+ para o interior do vírion é realizado pelo canal iônico M2.",
      D: "Incorreto. A proteína não-estrutural NS1 é o principal antagonista da resposta de interferon."
    },
    conceitoPrincipal: "Hemaglutinina (HA): ligação ao ácido siálico do receptor celular e fusão de membrana.",
    source: "Webster RG et al. - Evolution and ecology of influenza A viruses",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC372859/",
    sourceYear: 2022
  },
  {
    id: "q78",
    numero: 78,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "media",
    enunciado: "Antivirais como o OSELTAMIVIR (Tamiflu) e o ZANAMIVIR são utilizados no tratamento precoce da infecção por Influenza. Qual o mecanismo de ação molecular desses fármacos?",
    alternativas: [
      "A) Inibição seletiva da proteína de canal iônico M2, impedindo o desnudamento do vírus.",
      "B) Inibição competitiva da enzima NEURAMINIDASE (NA), impedindo a clivagem do ácido siálico e o desligamento dos novos vírions, promovendo seu aglutinamento na superfície celular.",
      "C) Inativação direta da transcriptase reversa viral.",
      "D) Bloqueio da síntese da parede peptidoglicânica."
    ],
    respostaCorreta: 1,
    explicacao: "Os inibidores da neuraminidase (Oseltamivir e Zanamivir) ligam-se ao sítio ativo da enzima NA. Sem a atividade enzimática da NA, o vírus recém-brotado permanece ancorado ao ácido siálico da célula hospedeira moribunda e aglutina-se em grumos na superfície celular, interrompendo a disseminação para células vizinhas.",
    explicacaoAlternativas: {
      A: "Incorreto. Inibidores do canal M2 são a Amantadina e Rimantadina (ineficazes contra Influenza B).",
      B: "Correto. Oseltamivir/Zanamivir inibem a Neuraminidase, bloqueando a liberação e disseminação das partículas virais.",
      C: "Incorreto. Influenza não possui transcriptase reversa.",
      D: "Incorreto. Peptidoglicano não existe em vírus."
    },
    conceitoPrincipal: "Mecanismo do Oseltamivir: inibição da Neuraminidase (NA), prevenindo a liberação viral.",
    source: "WHO - Guidelines for Pharmacological Management of Pandemic Influenza",
    sourceUrl: "https://www.who.int/publications/i/item/9789241547833",
    sourceYear: 2023
  },
  {
    id: "q79",
    numero: 79,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "dificil",
    enunciado: "O vírus Influenza A pode sofrer duas formas de variação antigênica: Deriva Antigênica (Antigenic Drift) e Shift Antigênico (Antigenic Shift). Qual a diferença fundamental entre esses dois processos e qual deles é o responsável pelas PANDEMIAS globais de gripe?",
    alternativas: [
      "A) Drift é a recombinação entre espécies; Shift são mutações pontuais. O Drift gera pandemias.",
      "B) Drift consiste em mutações pontuais graduais na HA/NA por erros da RNA polimerase (causa epidemias anuais); Shift é o reassortimento genético drástico entre diferentes cepas em um hospedeiro intermediário (ex: suíno), gerando novos subtipos e PANDEMIAS.",
      "C) Drift ocorre apenas no Influenza C; Shift ocorre exclusivamente no Influenza B.",
      "D) Shift é a perda espontânea do envelope lipídico; Drift é a troca de ribossomos virais."
    ],
    respostaCorreta: 1,
    explicacao: "Antigenic Drift (deriva antigênica) resulta de pequenas mutações pontuais aculumadas durante a replicação (ausência de atividade de revisão da RNA polimerase viral), causando variações menores que exigem atualização ANUAL da vacina. Antigenic Shift (desvio antigênico) é a reorganização/reassortimento completo de segmentos de genoma de cepas aviárias, suínas e humanas co-infectando a mesma célula (ex: em porcos 'recipientes de mistura'), criando um subtipo novo (ex: H1N1 em 2009, H5N1) imune na população humana, causando PANDEMIAS.",
    explicacaoAlternativas: {
      A: "Incorreto. Os conceitos e o causador de pandemias estão invertidos.",
      B: "Correto. Drift = mutações pontuais graduais (epidemias sazonais); Shift = reassortimento de segmentos (pandemias globais de Influenza A).",
      C: "Incorreto. Shift antigênico ocorre EXCLUSIVAMENTE no Influenza A devido ao seu amplo reservatório animal.",
      D: "Incorreto. O envelope não é perdido espontaneamente e vírus não têm ribossomos."
    },
    conceitoPrincipal: "Drift antigênico (mutações pontuais -> epidemias anuais) vs Shift antigênico (reassortimento de segmentos -> pandemias por Influenza A).",
    source: "CDC - How Influenza Viruses Change",
    sourceUrl: "https://www.cdc.gov/flu/about/viruses/change.htm",
    sourceYear: 2023
  },
  {
    id: "q80",
    numero: 80,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "media",
    enunciado: "Qual o principal reservatório natural zoonótico e fonte primária de diversidade genética dos vírus da Influenza A na natureza?",
    alternativas: [
      "A) Morcegos frugívoros tropicais",
      "B) Aves aquáticas selvagens (como patos, gansos e marrecos da ordem Anseriformes)",
      "C) Roedores sinantrópicos (ratos e camundongos)",
      "D) Primatas não-humanos das florestas tropicais"
    ],
    respostaCorreta: 1,
    explicacao: "As aves aquáticas selvagens (especialmente ordens Anseriformes e Charadriiformes) são o reservatório natural primário de todos os subtipos conhecidos de Hemaglutinina (H1 a H16) e Neuraminidase (N1 a N9) da Influenza A. Nessas aves, a infecção costuma ser assintomática e entérica.",
    explicacaoAlternativas: {
      A: "Incorreto. Morcegos são reservatórios de Raiva, Ebola, Coronavírus e Henipavírus.",
      B: "Correto. Aves aquáticas migratórias são o grande reservatório natural e mantenedor da diversidade do Influenza A.",
      C: "Incorreto. Roedores são reservatórios de Hantavírus, Leptospira e Arenavírus.",
      D: "Incorreto. Primatas não são o reservatório primário da Influenza."
    },
    conceitoPrincipal: "Reservatório natural do vírus Influenza A: aves aquáticas selvagens.",
    source: "WHO - Influenza (Avian and other zoonotic)",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/influenza-(avian-and-other-zoonotic)",
    sourceYear: 2023
  },
  {
    id: "q81",
    numero: 81,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "facil",
    enunciado: "Qual é a principal via de transmissão interhumana do vírus da Influenza no dia a dia?",
    alternativas: [
      "A) Transmissão vetorial por picada do mosquitos Aedes aegypti.",
      "B) Gotículas respiratórias expelidas ao falar, tossir ou espirrar e contato com superfícies contaminadas (fômites).",
      "C) Ingestão de água e alimentos contaminados por cistos fecais.",
      "D) Contato sexual desprotegido."
    ],
    respostaCorreta: 1,
    explicacao: "A Influenza é transmitida primariamente pela via respiratória através de gotículas aéreas (> 5 micras) projetadas a curta distância por tosse, espirros ou fala, além de aerossóis finos e autocontaminação ao tocar olhos/nariz/boca com as mãos contaminadas por fômites.",
    explicacaoAlternativas: {
      A: "Incorreto. Aedes aegypti transmite arbovírus (Dengue, Zika, Chikungunya, Febre Amarela).",
      B: "Correto. Transmissão por gotículas respiratórias, aerossóis e contato direto/fômites.",
      C: "Incorreto. Caracteriza a via fecal-oral de enteropatógenos.",
      D: "Incorreto. Não é uma infecção sexualmente transmissível."
    },
    conceitoPrincipal: "Transmissão da Influenza: gotículas respiratórias e contato indireto com fômites.",
    source: "Ministério da Saúde - Guia de Vigilância em Saúde",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },
  {
    id: "q82",
    numero: 82,
    assunto: "microbiologia",
    subassunto: "Vírus Influenza",
    dificuldade: "media",
    enunciado: "Qual a função da proteína transmembrana M2 presente exclusivamente no envelope do vírus Influenza A?",
    alternativas: [
      "A) Atuar como canal de prótons (H+) que acidifica o interior do vírion no endossomo, promovendo a dissociação da proteína de matriz M1 dos nucleocapsídeos (desnudamento).",
      "B) Sintetizar a fita complementar de RNA viral no núcleo celular.",
      "C) Clivar anticorpos IgA secretores presentes no moco respiratório.",
      "D) Ancorar o vírus à membrana nuclear da célula hospedeira."
    ],
    respostaCorreta: 0,
    explicacao: "A proteína M2 forma um canal iônico seletivo de prótons H+. Após o vírus ser endocitado, a acidez do endossomo faz com que prótons entrem no vírion via canal M2. A acidificação interna quebra as interações hidrofóbicas entre a matriz M1 e as RNP (ribonucleoproteínas), permitindo a liberação do genoma no citoplasma.",
    explicacaoAlternativas: {
      A: "Correto. O canal M2 acidifica o interior do vírion para permitir a liberação das RNPs (desnudamento). Alvo da amantadina.",
      B: "Incorreto. A síntese do RNA é realizada pelo complexo polimerase viral (PB1, PB2, PA).",
      C: "Incorreto. Clivagem de IgA é feita pela protease de IgA de bactérias como Neisseria e S. pneumoniae.",
      D: "Incorreto. Proteínas de transporte nuclear medeiam o tráfego de RNP ao núcleo."
    },
    conceitoPrincipal: "Proteína M2: canal de prótons H+ necessário para o desnudamento do Influenza A.",
    source: "Pinto LH, Lamb RA - The M2 proton channel of influenza A virus",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1564344/",
    sourceYear: 2022
  },

  // --------------------------------------------------------------------------
  // SÍNDROMES GRIPAIS, DIAGNÓSTICO E PROFILAXIA (Q83 - Q90)
  // --------------------------------------------------------------------------
  {
    id: "q83",
    numero: 83,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "facil",
    enunciado: "Clinicamente, a Síndrome Gripal (SG) diferencia-se do Resfriado Comum pela gravidade e instalação dos sintomas. De acordo com o Ministério da Saúde, a definição clínica operacional de Síndrome Gripal é caracterizada por:",
    alternativas: [
      "A) Coriza leve e espirros sem febre, com duração de 2 dias.",
      "B) Indivíduo com quadro respiratório agudo, caracterizado por pelo menos dois dos seguintes sinais/sintomas: febre (mesmo que referida), calafrios, dor de garganta, dor de cabeça, tosse, coriza, distúrbios olfativos ou gustativos.",
      "C) Diarreia aquosa profusa associada a desidratação grave sem sintomas respiratórios.",
      "D) Lesões maculopapulares pruriginosas disseminadas por todo o corpo acompanhadas de conjuntivite purulenta."
    ],
    respostaCorreta: 1,
    explicacao: "A Síndrome Gripal (SG) é um quadro respiratório agudo de início súbito, com febre (ou sensação febril), tosse ou dor de garganta, acompanhado de mialgia, cefaleia e prostração. O resfriado comum é mais brando, predominando coriza e obstrução nasal com pouca ou nenhuma febre.",
    explicacaoAlternativas: {
      A: "Incorreto. Coriza e espirros afebris definem o resfriado comum (Rinovírus).",
      B: "Correto. Definição oficial de Síndrome Gripal: início agudo de febre/calafrios + sintomas respiratórios e sistêmicos.",
      C: "Incorreto. Corresponde à gastroenterite aguda.",
      D: "Incorreto. Corresponde a exantemas virais (como sarampo ou rubéola)."
    },
    conceitoPrincipal: "Definição de Síndrome Gripal (SG): início súbito com febre, tosse/dor de garganta e sintomas sistêmicos (mialgia, cefaleia).",
    source: "Ministério da Saúde - Protocolo de Manejo Clínico do Influenza",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },
  {
    id: "q84",
    numero: 84,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "media",
    enunciado: "Quando um paciente com Síndrome Gripal evolui com dispneia, desconforto respiratório, saturação de SpO2 < 95% em ar ambiente ou hipotensão, o quadro é reclassificado como Síndrome Respiratória Aguda Grave (SRAG). Qual a complicação bacteriana secundária mais frequente e temida na Influenza?",
    alternativas: [
      "A) Meningite por Neisseria meningitidis",
      "B) Pneumonia bacteriana secundária (especialmente por Streptococcus pneumoniae e Staphylococcus aureus)",
      "C) Pielonefrite por Escherichia coli",
      "D) Colite pseudomembranosa por Clostridium difficile"
    ],
    respostaCorreta: 1,
    explicacao: "A infecção pelo vírus Influenza lesa o epitélio ciliar da árvore traqueobronquial e deprime temporariamente a função dos macrófagos alveolares, predispondo à superinfecção bacteriana secundária. As causas mais comuns de pneumonia pós-gripe graves são Streptococcus pneumoniae e Staphylococcus aureus (incluindo MRSA expressando a toxina Panton-Valentine).",
    explicacaoAlternativas: {
      A: "Incorreto. Meningite meningocócica não é a complicação clássica mais comum da gripe.",
      B: "Correto. Pneumonia por S. pneumoniae e S. aureus é a complicação grave clássica que eleva a mortalidade da Influenza.",
      C: "Incorreto. Pielonefrite é infecção urinária alta sem relação com destruição de epitélio respiratório.",
      D: "Incorreto. C. difficile está associado ao uso prévio de antibióticos de largo espectro."
    },
    conceitoPrincipal: "Complicação grave da Influenza: Pneumonia bacteriana secundária por S. pneumoniae e S. aureus.",
    source: "CDC - Flu Complications",
    sourceUrl: "https://www.cdc.gov/flu/highrisk/index.htm",
    sourceYear: 2023
  },
  {
    id: "q85",
    numero: 85,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "dificil",
    enunciado: "No diagnóstico laboratorial da infecção pelo vírus Influenza, qual método de diagnóstico molecular é considerado o PADRÃO-OURO devido à sua altíssima sensibilidade e especificidade?",
    alternativas: [
      "A) Teste rápido imunocromatográfico de detecção de antígeno (TR-AG).",
      "B) RT-PCR em tempo real (Reação em Cadeia da Polimerase com Transcrição Reversa).",
      "C) Exame direto a fresco ao microscópio de campo escuro.",
      "D) Hemocultura em caldo hiperatônico."
    ],
    respostaCorreta: 1,
    explicacao: "A RT-PCR em tempo real (rRT-PCR) a partir de aspirado ou swab combinado de nasofaringe/orfaringe é o padrão-ouro de diagnóstico da Influenza. Ela amplifica a partir do RNA viral, permitindo não apenas a detecção com máxima sensibilidade, mas também a diferenciação de subtipos (ex: H1N1pdm09, H3N2, Influenza B).",
    explicacaoAlternativas: {
      A: "Incorreto. Testes rápidos de antígeno são úteis pela rapidez (15 min), mas apresentam sensibilidade moderada (50-70%), podendo dar falsos negativos.",
      B: "Correto. RT-PCR em tempo real é o método padrão-ouro absoluto pela sensibilidade e capacidade de subtipagem.",
      C: "Incorreto. Microscopia de campo escuro é usada para espiroquetas (Treponema pallidum).",
      D: "Incorreto. Hemoculturas detectam bactérias/fungos na corrente sanguínea, não vírus."
    },
    conceitoPrincipal: "RT-PCR em tempo real como método padrão-ouro no diagnóstico de Influenza.",
    source: "CDC - Influenza Diagnostic Tests",
    sourceUrl: "https://www.cdc.gov/flu/professionals/diagnosis/index.htm",
    sourceYear: 2023
  },
  {
    id: "q86",
    numero: 86,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "facil",
    enunciado: "As vacinas anuais contra a Influenza distribuídas pelo Programa Nacional de Imunizações (PNI) do Brasil são formuladas com base nas recomendações da OMS. Qual é a composição clássica da vacina da gripe administrada na campanha de vacinação?",
    alternativas: [
      "A) Bactérias vivas atenuadas da espécie Mycobacterium bovis.",
      "B) Vírus inativados (fragmentados/subunitários) contendo cepas de Influenza A (H1N1 e H3N2) e cepas de Influenza B.",
      "C) Toxoides tetânico e diftérico recombinantes.",
      "D) Plasmídeos de DNA autorreplicativos sem proteínas virais."
    ],
    respostaCorreta: 1,
    explicacao: "A vacina Influenza trivalente/quadrivalente utilizada na rede pública é uma vacina inativada (vírus mortos purificados/fragmentados), cultivada em ovos embrionados de galinha. Ela inclui imunógenos para duas cepas de Influenza A (H1N1pdm09 e H3N2) e uma ou duas cepas de Influenza B (linhagens Victoria e Yamagata).",
    explicacaoAlternativas: {
      A: "Incorreto. Corresponde à vacina BCG contra tuberculose.",
      B: "Correto. A vacina é inativada contendo cepas atualizadas de Influenza A e B.",
      C: "Incorreto. Corresponde às vacinas duplas ou triplas bacterianas (dT / DTP).",
      D: "Incorreto. Não é uma vacina de plasmídeo de DNA solto."
    },
    conceitoPrincipal: "Composição da vacina da Influenza: vírus inativados/fragmentados atualizados para Influenza A (H1N1, H3N2) e B.",
    source: "Ministério da Saúde - Manual de Normas e Procedimentos para Vacinação",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },
  {
    id: "q87",
    numero: 87,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "media",
    enunciado: "Por que a vacina contra a gripe precisa ser formulada e administrada ANUALMENTE na população?",
    alternativas: [
      "A) Porque os anticorpos gerados pela vacina desaparecem completamente após 30 dias.",
      "B) Devido ao fenômeno de Deriva Antigênica (Antigenic Drift), em que ocorrem mutações contínuas nas proteínas de superfície (HA e NA) dos vírus Influenza circulantes.",
      "C) Porque a vacina destrói a memória imunológica pré-existente no indivíduo.",
      "D) Devido à degradação do adjuvante de alumínio na corrente sanguínea."
    ],
    respostaCorreta: 1,
    explicacao: "A taxa de mutação por erros da RNA polimerase viral (antigenic drift) altera gradualmente os epítopos da Hemaglutinina e Neuraminidase. Com isso, as cepas virais em circulação a cada ano evadem parcialmente os anticorpos gerados pela vacina anterior, exigindo o monitoramento global pela OMS para atualizar a composição vacinal anualmente.",
    explicacaoAlternativas: {
      A: "Incorreto. Os anticorpos vacinais persistem por meses a cerca de 1 ano.",
      B: "Correto. O Antigenic Drift modifica continuamente as cepas virais em circulação, justificando a atualização anual.",
      C: "Incorreto. A vacina estimula e expande a resposta imune de memória.",
      D: "Incorreto. O adjuvante não é a razão da necessidade de revacinação anual."
    },
    conceitoPrincipal: "Necessidade da vacinação anual da gripe: constante variação antigenic drift do vírus.",
    source: "WHO - Selection of vaccine strains for Influenza",
    sourceUrl: "https://www.who.int/teams/global-influenza-programme/vaccines/strain-selection",
    sourceYear: 2023
  },
  {
    id: "q88",
    numero: 88,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "media",
    enunciado: "Segundo as diretrizes de tratamento da Influenza do Ministério da Saúde e do CDC, em qual janela terapêutica o início do tratamento com Oseltamivir (Tamiflu) apresenta MAIOR eficácia na redução de complicações e tempo de doença?",
    alternativas: [
      "A) Nas primeiras 48 horas após o início dos sintomas.",
      "B) Entre o 7º e o 10º dia de evolução dos sintomas.",
      "C) Apenas se o paciente estiver há mais de 14 dias com febre alta.",
      "D) Exclusivamente antes do aparecimento de qualquer sintoma (fase de incubação)."
    ],
    respostaCorreta: 0,
    explicacao: "O benefício clínico máximo dos inibidores de neuraminidase (Oseltamivir) ocorre quando iniciados precocemente, idealmente nas primeiras 48 horas do início dos sintomas. No entanto, em pacientes com SRAG ou internados em grupo de alto risco, o Oseltamivir deve ser iniciado mesmo após 48 horas.",
    explicacaoAlternativas: {
      A: "Correto. Início dentro das primeiras 48h maximiza a inibição da replicação viral e reduz desfechos graves.",
      B: "Incorreto. O benefício é significativamente reduzido após o pico de replicação viral (3-4 dias).",
      C: "Incorreto. Esperar 14 dias atrasa o tratamento em momento de prováveis complicações graves.",
      D: "Incorreto. Usar antes dos sintomas é quimioprofilaxia post-exposição em situações específicas, não a janela terapêutica de casos suspeitos."
    },
    conceitoPrincipal: "Janela terapêutica ideal do Oseltamivir: nas primeiras 48 horas de início dos sintomas.",
    source: "Ministério da Saúde - Protocolo de Manejo Clínico de Influenza",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },
  {
    id: "q89",
    numero: 89,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "facil",
    enunciado: "Qual dos seguintes grupos populacionais é considerado prioritário para vacinação contra a Influenza devido ao maior risco de complicações graves e hospitalização?",
    alternativas: [
      "A) Adultos jovens saudáveis dos 20 aos 30 anos sem comorbidades.",
      "B) Idosos (>= 60 anos), gestantes, puérperas, crianças de 6 meses a 6 anos e indivíduos com comorbidades crônicas (como cardiopatias, diabetes e pneumopatias).",
      "C) Atletas de alto rendimento estritamente assintomáticos.",
      "D) Indivíduos com história prévia de fratura óssea tratada e consolidada."
    ],
    respostaCorreta: 1,
    explicacao: "Grupos com risco elevado de complicações da gripe incluem idosos, gestantes, puérperas, crianças pequenas, imunocomprometidos e portadores de doenças crônicas (diabetes, insuficiência cardíaca, asma/DPOC). Esses grupos são priorizados na vacinação gratuita do PNI.",
    explicacaoAlternativas: {
      A: "Incorreto. Adultos jovens saudáveis têm baixo risco de complicações severas.",
      B: "Correto. Idosos, gestantes, crianças menores de 6 anos e doentes crônicos compõem o grupo prioritário oficial.",
      C: "Incorreto. Atletas sem comorbidades não são grupo prioritário.",
      D: "Incorreto. Fratura consolidada não constitui fator de risco imune/cardiorrespiratório."
    },
    conceitoPrincipal: "Grupos prioritários para vacinação contra Influenza: extremos de idade, gestantes, puérperas e doentes crônicos.",
    source: "PNI - Plano Nacional de Operacionalização da Vacinação contra Influenza",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },
  {
    id: "q90",
    numero: 90,
    assunto: "microbiologia",
    subassunto: "Síndromes Gripais & Diagnóstico",
    dificuldade: "dificil",
    enunciado: "O Vírus Sincicial Respiratório (VSR) é outro agente viral de grande impacto em pediatria. Diferentemente da Influenza, o VSR é a causa mais frequente de qual entidade clínica grave em lactentes e recém-nascidos?",
    alternativas: [
      "A) Bronquiolite Obliterante Congênita",
      "B) Bronquiolite Aguda (caracterizada por sibilância, taquipneia e tiragem subcostal)",
      "C) Epiglotite aguda bacteriana fulminante",
      "D) Coqueluche paroxística"
    ],
    respostaCorreta: 1,
    explicacao: "O Vírus Sincicial Respiratório (VSR - família Pneumoviridae) é o principal agente etiológico da Bronquiolite Aguda em lactentes (especialmente menores de 2 anos). A infecção leva à necrose do epitélio bronquiolar, edema da mucosa e formação de rolhas de muco com aprisionamento aéreo e sibilos.",
    explicacaoAlternativas: {
      A: "Incorreto. Bronquiolite obliterante é sequela crônica fibrosante pós-infecciosa (geralmente Adenovírus).",
      B: "Correto. O VSR é a causa número 1 de Bronquiolite Aguda e pneumonias em lactentes.",
      C: "Incorreto. Epiglotite é classicamente causada por Haemophilus influenzae tipo b.",
      D: "Incorreto. Coqueluche é causadas pela bactéria Bordetella pertussis."
    },
    conceitoPrincipal: "Vírus Sincicial Respiratório (VSR) como principal causador de Bronquiolite Aguda em lactentes.",
    source: "SBP - Diretrizes de Manejo da Bronquiolite Aguda",
    sourceUrl: "https://www.sbp.com.br/",
    sourceYear: 2023
  },

  // --------------------------------------------------------------------------
  // PARASITOLOGIA (Q91 - Q115)
  // Tricuríase, Ascaridíase e Doença de Chagas
  // --------------------------------------------------------------------------
  {
    id: "q91",
    numero: 91,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "facil",
    enunciado: "O helminto Trichuris trichiura é o agente etiológico da tricuríase. Devido à sua morfologia característica, com uma porção anterior fina e afilada e uma porção posterior mais espessa, ele é vulgarmente conhecido como:",
    alternativas: [
      "A) Verme em formato de fita ou tênia",
      "B) Verme em formato de chicote ('whipworm')",
      "C) Verme em alfinete ('pinworm')",
      "D) Verme do coração"
    ],
    respostaCorreta: 1,
    explicacao: "Trichuris trichiura é conhecido popularmente como 'verme chicote' (whipworm). Ele possui a região anterior delgada (semelhante ao cabo ou ponta fina do chicote) que penetra na mucosa do ceco/cólon e a porção posterior mais calibrosa que fica livre no lúmen intestinal.",
    explicacaoAlternativas: {
      A: "Incorreto. Vermes em fita são os cestódeos (Taenia solium, Taenia saginata).",
      B: "Correto. Trichuris trichiura é o clássico 'verme chicote'.",
      C: "Incorreto. Verme em alfinete é o Enterobius vermicularis (oxiúro).",
      D: "Incorreto. Verme do coração é Dirofilaria immitis."
    },
    conceitoPrincipal: "Morfologia de Trichuris trichiura: verme em formato de chicote.",
    source: "Neves - Parasitologia Humana",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK539824/",
    sourceYear: 2022
  },
  {
    id: "q92",
    numero: 92,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "media",
    enunciado: "No diagnóstico parasitológico de fezes (EPF) da tricuríase, os ovos de Trichuris trichiura são facilmente identificados ao microscópio óptico por apresentarem um formato patognomônico de:",
    alternativas: [
      "A) Esfera perfeita com ganchos internos (oncocerca).",
      "B) Barril ou limão (elíptico com dois tampões/rolhas polares salientes e hialinas).",
      "C) D em plano-convexo assimétrico com larvas visíveis no interior.",
      "D) Halo transparente espesso e cápsula mamilonada castanha."
    ],
    respostaCorreta: 1,
    explicacao: "Os ovos de Trichuris trichiura possuem morfologia inconfundível: formato de barril, limão ou fuso, com casca espessa castanho-amarelada e dois opérculos ou rolhas polares transparentes (hialinas) nas suas extremidades.",
    explicacaoAlternativas: {
      A: "Incorreto. Corresponde a ovos de Taenia spp.",
      B: "Correto. Ovos em barril/limão com rolhas polares hialinas são característicos de Trichuris trichiura.",
      C: "Incorreto. Corresponde a ovos de Enterobius vermicularis.",
      D: "Incorreto. Corresponde aos ovos férteis de Ascaris lumbricoides."
    },
    conceitoPrincipal: "Diagnóstico microscópico de Trichuris trichiura: ovo em formato de barril/limão com rolhas polares hialinas.",
    source: "Rey - Parasitologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK539824/",
    sourceYear: 2022
  },
  {
    id: "q93",
    numero: 93,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "media",
    enunciado: "Qual é a principal complicação clínica grave observada em crianças com infecção maciça (altas cargas parasitárias) por Trichuris trichiura?",
    alternativas: [
      "A) Síndrome de Löffler com infiltrado pulmonar migratório.",
      "B) Prolapso retal acompanhado de tenesmo, diarreia mucossanguinolenta e anemia grave.",
      "C) Elefantíase dos membros inferiores por obstrução linfática.",
      "D) Abscesso hepático amebiano."
    ],
    respostaCorreta: 1,
    explicacao: "Em crianças com infecção intensa por T. trichiura, centenas a milhares de vermes adultos colonizam e inflamam a mucosa do ceco, cólon e reto. A irritação local provoca tenesmo (esforço doloroso constante para evacuar), hiperemia da mucosa e hipotonia da musculatura retal, levando ao PROLAPSO RETAL com visibilidade dos vermes presos à mucosa e diarreia sangrenta.",
    explicacaoAlternativas: {
      A: "Incorreto. T. trichiura NÃO faz ciclo de Loos pulmonar.",
      B: "Correto. Prolapso retal com tenesmo e diarreia mucossanguinolenta é a complicação clássica da tricuríase maciça infantil.",
      C: "Incorreto. Elefantíase é complicação da filariose bancroftiana (Wuchereria bancrofti).",
      D: "Incorreto. Abscesso hepático é provocado por Entamoeba histolytica."
    },
    conceitoPrincipal: "Complicação grave da tricuríase grave em crianças: prolapso retal, tenesmo e anemia.",
    source: "CDC - Trichuriasis Clinical Pearls",
    sourceUrl: "https://www.cdc.gov/parasites/trichuriasis/",
    sourceYear: 2023
  },
  {
    id: "q94",
    numero: 94,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "facil",
    enunciado: "A transmissão da tricuríase ocorre através de qual mecanismo ecológico e epidemiológico?",
    alternativas: [
      "A) Penetração ativa de larvas filarioides L3 através da pele íntegra dos pés descalços.",
      "B) Ingestão de água ou alimentos contaminados com ovos embrionados contendo a larva L3 (geo-helmintíase).",
      "C) Picada de mosquitos do gênero Anopheles.",
      "D) Consumo de carne bovina crua contendo corticercos."
    ],
    respostaCorreta: 1,
    explicacao: "A tricuríase é uma geo-helmintíase clássica. Os ovos não embrionados eliminados nas fezes humanas precisam de semanas no solo quente e úmido para amadurecer e formar a larva infectante no seu interior. A infecção ocorre quando o ser humano ingere esses ovos embrionados via água, hortaliças ou mãos contaminadas.",
    explicacaoAlternativas: {
      A: "Incorreto. Penetração cutânea ativa é o mecanismo de ancilostomídeos e Strongyloides stercoralis.",
      B: "Correto. Ingestão oral de ovos embrionados viáveis presentes no solo/água/alimentos.",
      C: "Incorreto. Anopheles transmite a malária.",
      D: "Incorreto. Transmite Taenia saginata."
    },
    conceitoPrincipal: "Transmissão da tricuríase: ingestão fecal-oral de ovos embrionados do solo (geo-helminto).",
    source: "WHO - Soil-transmitted helminth infections",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections",
    sourceYear: 2023
  },
  {
    id: "q95",
    numero: 95,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "dificil",
    enunciado: "Ao contrário do Ascaris lumbricoides e dos ancilostomídeos, o ciclo biológico do Trichuris trichiura apresenta a seguinte particularidade migratória no hospedeiro humano:",
    alternativas: [
      "A) Realiza migração hepato-pulmonar obrigatória (Ciclo de Loos) antes de atingir o intestino.",
      "B) NÃO realiza o Ciclo de Loos; as larvas eclodem no intestino delgado, migram diretamente para o ceco/cólon e lá se fixam até a fase adulta.",
      "C) Migra para o sistema nervoso central através do plexo venoso de Batson.",
      "D) Encista-se no tecido muscular estriado esquelético sob a forma de cisto hidático."
    ],
    respostaCorreta: 1,
    explicacao: "O Trichuris trichiura possui ciclo monoxênico direto e NÃO realiza migração parenquimatosa pulmonar (não faz ciclo de Loos). Após a ingestão do ovo embrionado, a larva eclode no intestino delgado, penetra temporariamente nas criptas das vilosidades e depois migra para o ceco/cólon ascendente, onde sua extremidade anterior se fixa na mucosa.",
    explicacaoAlternativas: {
      A: "Incorreto. T. trichiura NÃO faz ciclo de Loos (diferente de Ascaris, Ancylostoma e Strongyloides).",
      B: "Correto. O desenvolvimento ocorre integralmente no trato gastrointestinal sem passagem pelos pulmões.",
      C: "Incorreto. Não há migração ao SNC.",
      D: "Incorreto. Cisto hidático é provocado por Echinococcus granulosus."
    },
    conceitoPrincipal: "Ciclo biológico de Trichuris trichiura: ausência de Ciclo de Loos (desenvolvimento restrito ao trato gastrointestinal).",
    source: "Neves - Parasitologia Humana",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK539824/",
    sourceYear: 2022
  },
  {
    id: "q96",
    numero: 96,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "facil",
    enunciado: "Qual a medicação anti-helmíntica de escolha para o tratamento da tricuríase em esquemas de dose única ou curtos de 3 dias?",
    alternativas: [
      "A) Penicilina G Benzatina",
      "B) Mebendazol ou Albendazol",
      "C) Metronidazol",
      "D) Fluconazol"
    ],
    respostaCorreta: 1,
    explicacao: "Os benzimidazóis (Mebendazol 100mg 2x/dia por 3 dias ou Albendazol 400mg 1x/dia por 3 dias) são os medicamentos de primeira linha para a tricuríase. A Ivermectina também pode ser associada em infecções graves.",
    explicacaoAlternativas: {
      A: "Incorreto. Penicilina é um antibacteriano beta-lactâmico.",
      B: "Correto. Mebendazol e Albendazol são os anti-helmínticos padrão contra T. trichiura.",
      C: "Incorreto. Metronidazol trata protozoários (Giardia, Entamoeba, Trichomonas) e anaeróbios.",
      D: "Incorreto. Fluconazol é um antifúngico azólico."
    },
    conceitoPrincipal: "Tratamento da tricuríase: Benzimidazóis (Mebendazol / Albendazol).",
    source: "CDC - Trichuriasis Treatment",
    sourceUrl: "https://www.cdc.gov/parasites/trichuriasis/treatment.html",
    sourceYear: 2023
  },
  {
    id: "q97",
    numero: 97,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "media",
    enunciado: "Por que a tricuríase crônica e grave em crianças pode provocar anemia microcítica e hipocrômica secundária?",
    alternativas: [
      "A) Devido ao consumo direto de vitamina B12 pelo parásito no íleo terminal.",
      "B) Devido à perda sanguínea oculta crônica causada pelo trauma mecânico da fixação da região anterior do verme na mucosa colônica e microlesões sangrantes.",
      "C) Pela secreção de toxinas hemolíticas virais que destroem hemácias no baço.",
      "D) Por inibição da absorção intestinal de cálcio e vitamina D."
    ],
    respostaCorreta: 1,
    explicacao: "Cada verme adulto de T. trichiura fura e fixa sua porção afilada na mucosa do cólon. Embora ingira pouca quantidade de sangue diretamente em comparação aos ancilostomídeos, a presença de centenas de vermes causa ulcerações, exsudação focal de sangue e perda sangrenta contínua nas fezes, drenando as reservas de ferro corporais e levando à anemia ferropriva (microcítica/hipocrômica).",
    explicacaoAlternativas: {
      A: "Incorreto. O consumo de vitamina B12 no íleo terminal é característico da tênia do peixe (Diphyllobothrium latum).",
      B: "Correto. Perda sanguínea crônica intestinal por lesões na mucosa colônica causa anemia ferropriva.",
      C: "Incorreto. T. trichiura é um helminto, não vírus, e não secreta hemolisinas sistêmicas.",
      D: "Incorreto. A deficiência primária é de ferro por perda sangrenta, não de cálcio."
    },
    conceitoPrincipal: "Patogênese da anemia na tricuríase: perda sanguínea fecal oculta por lesões mecânicas na mucosa colônica.",
    source: "Rey - Parasitologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK539824/",
    sourceYear: 2022
  },
  {
    id: "q98",
    numero: 98,
    assunto: "parasitologia",
    subassunto: "Tricuríase (Trichuris trichiura)",
    dificuldade: "media",
    enunciado: "Qual o método de sedimentação espontânea em água amplamente empregado nos laboratórios de análises clínicas para pesquisa de ovos pesados como os de Trichuris trichiura e Schistosoma mansoni?",
    alternativas: [
      "A) Método de Faust (centrifugo-flutuação em sulfato de zinco)",
      "B) Método de Hoffman, Pons e Janer (ou Lutz)",
      "C) Métodos de Graham (fita gomada perianal)",
      "D) Método de Baermann-Moraes"
    ],
    respostaCorreta: 1,
    explicacao: "O método de Hoffman, Pons e Janer (HPJ / Lutz) baseia-se na sedimentação espontânea em água. É um método simples, de baixo custo e excelente para concentrar ovos pesados de helmintos (como Trichuris trichiura, Ascaris lumbricoides e Schistosoma mansoni).",
    explicacaoAlternativas: {
      A: "Incorreto. Faust é um método de flutuação para cistos de protozoários e ovos leves.",
      B: "Correto. Hoffman, Pons e Janer (Lutz) é o método padrão de sedimentação espontânea para ovos pesados.",
      C: "Incorreto. Fita gomada (Graham) é específico para ovos de Enterobius vermicularis na região perianal.",
      D: "Incorreto. Baermann-Moraes pesquisa larvas rhabditoides/filarioides termo-hidrotrópicas (Strongyloides)."
    },
    conceitoPrincipal: "Método de Hoffman, Pons e Janer (Lutz): sedimentação espontânea para pesquisa de ovos pesados de helmintos.",
    source: "De Carli - Diagnóstico Laboratorial das Parasitoses Humanas",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK539824/",
    sourceYear: 2021
  },

  // --------------------------------------------------------------------------
  // ASCARIDIÁSE (Ascaris lumbricoides) (Q99 - Q106)
  // --------------------------------------------------------------------------
  {
    id: "q99",
    numero: 99,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "facil",
    enunciado: "O Ascaris lumbricoides é o maior nematódeo intestinal humano. Qual é o dimorfismo sexual evidente observado nos espécimes adultos desse parásito?",
    alternativas: [
      "A) O macho é significativamente maior que a fêmea e possui cauda reta.",
      "B) A fêmea é maior (20-35 cm) com extremidade posterior cônica reta; o macho é menor (15-30 cm) e possui a extremidade posterior fortemente encurvada ventralmente com espículos copuladores.",
      "C) Ambos têm exatamente o mesmo tamanho e são hermafroditas obrigatórios.",
      "D) O macho possui ventosa oral em formato de gancho e a fêmea é microscópica."
    ],
    respostaCorreta: 1,
    explicacao: "Em Ascaris lumbricoides, as fêmeas adultas medem de 20 a 35 cm e têm a extremidade posterior reta e cônica. Os machos são visivelmente menores (15 a 30 cm) e exibem a cauda curvada em espiral ventralmente com espículos espiculados para cópula.",
    explicacaoAlternativas: {
      A: "Incorreto. A fêmea é maior e o macho possui a cauda curvada, não reta.",
      B: "Correto. Descreve com exatidão o dimorfismo sexual morfológico de Ascaris lumbricoides.",
      C: "Incorreto. Ascaris é dioico (sexos separados), não hermafrodita.",
      D: "Incorreto. Não possuem ventosas orais (possuem 3 lábios característicos)."
    },
    conceitoPrincipal: "Dimorfismo sexual de Ascaris lumbricoides: fêmeas maiores com cauda reta; machos menores com cauda curvada.",
    source: "Neves - Parasitologia Humana",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK431096/",
    sourceYear: 2022
  },
  {
    id: "q100",
    numero: 100,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "media",
    enunciado: "O ciclo biológico do Ascaris lumbricoides envolve obrigatoriamente uma passagem parenquimatosa pelo sistema respiratório do hospedeiro. Essa migração larval pelos pulmões é denominada CICLO DE LOOS. Qual a sequência anátomo-fisiológica dessa migração a partir da eclosão intestinal?",
    alternativas: [
      "A) Intestino -> Ceco -> Rim -> Bexiga -> Uretra -> Intestino.",
      "B) Intestino (eclosão L3) -> Veia Mesentérica / Sistema Porta -> Fígado -> Veia Cava Inferior -> Átrio/Ventrículo Direito -> Artéria Pulmonar -> Capilares Alveolares (ruptura e maturação) -> Árvore Brônquica -> Traqueia -> Laringe (deglutição) -> Intestino Delgado.",
      "C) Pele -> Vasos Linfáticos -> Baço -> Medula Óssea -> Esôfago.",
      "D) Esôfago -> Estômago -> Glândula Salivar -> Corrente arterial sistêmica -> Cérebro."
    ],
    respostaCorreta: 1,
    explicacao: "O Ciclo de Loos do Ascaris inicia-se com a eclosão da larva no intestino delgado. A larva atravessa a mucosa intestinal, ganha a circulação portal, passa pelo FÍGADO, atinge o CORAÇÃO DIREITO via veia cava e chega aos PULMÕES. Nos capilares alveolares, as larvas rompem os alvéolos, sofrem mudas, sobem pela árvore respiratória até a glote, são deglutidas e chegam maduras ao intestino delgado.",
    explicacaoAlternativas: {
      A: "Incorreto. Não envolve rins ou sistema urinário.",
      B: "Correto. Ordem exata do trajeto vascular e pulmonar do Ciclo de Loos.",
      C: "Incorreto. Ascaris não penetra pela pele.",
      D: "Incorreto. Não envolve glândulas salivares nem vasos arteriais sistêmicos."
    },
    conceitoPrincipal: "Ciclo de Loos do Ascaris lumbricoides: Intestino -> Fígado -> Coração Direito -> Pulmões (alvéolos) -> Deglutição -> Intestino Delgado.",
    source: "Rey - Parasitologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK431096/",
    sourceYear: 2022
  },
  {
    id: "q101",
    numero: 101,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "media",
    enunciado: "Durante a fase pulmonar da migração larval de Ascaris lumbricoides (Ciclo de Loos), o paciente pode apresentar uma síndrome alérgica respiratória caracterizada por tosse seca, dispneia, infiltrado pulmonar migratório ao raio-X de tórax e eosinofilia sanguínea elevada. Essa entidade é conhecida como:",
    alternativas: [
      "A) Síndrome de Cushing",
      "B) Síndrome de Löffler",
      "C) Síndrome de Guillain-Barré",
      "D) Síndrome de Zollinger-Ellison"
    ],
    respostaCorreta: 1,
    explicacao: "A Síndrome de Löffler é a pneumonia eosinofílica alérgica transitória causada pela ruptura dos capilares alveolares e reação de hipersensibilidade às larvas de helmintos que realizam o ciclo de Loos (Ascaris lumbricoides, Ancylostoma duodenale, Necator americanus, Strongyloides stercoralis). Caracteriza-se por tosse, sibilos, infiltrados pulmonares fugazes ao raio-X e marcante eosinofilia periférica.",
    explicacaoAlternativas: {
      A: "Incorreto. Síndrome de Cushing é hipercortisolismo.",
      B: "Correto. Síndrome de Löffler é a pneumonite eosinofílica por passagem pulmonar de larvas de helmintos.",
      C: "Incorreto. Guillain-Barré é polineuropatia desmielinizante autoimune.",
      D: "Incorreto. Zollinger-Ellison é gastrinoma com hiperacidez."
    },
    conceitoPrincipal: "Síndrome de Löffler: pneumonia eosinofílica migratória durante a fase pulmonar do Ciclo de Loos.",
    source: "CDC - Ascariasis Clinical Manifestations",
    sourceUrl: "https://www.cdc.gov/parasites/ascariasis/",
    sourceYear: 2023
  },
  {
    id: "q102",
    numero: 102,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "dificil",
    enunciado: "Em crianças com carga parasitária volumosa de Ascaris lumbricoides, o enovelamento de dezenas a centenas de vermes adultos na válvula ileocecal pode causar uma emergência médica obstrutiva. Qual a conduta medicamentosa inicial recomendada na SUBOCLUSÃO INTESTINAL por Ascaris antes de considerar cirurgia?",
    alternativas: [
      "A) Prescrição imediata de Albendazol em dose dobrada isolado.",
      "B) Uso de PIPERAZINA (que causa paralisia flácida dos vermes) associada a ÓLEO MINERAL por sonda nasogástrica, jejum e hidratação venosa.",
      "C) Administração de antibióticos carbapenêmicos e laxantes irritantes osmóticos vigorosos.",
      "D) Realização de enema com formaldeído 10%."
    ],
    respostaCorreta: 1,
    explicacao: "Na suboclusão intestinal por Ascaris, anti-helmínticos convencionais (como Albendazol/Mebendazol) que causam paralisia espástica ou morte do verme podem piorar o bolo de vermes e precipitar perfuração intestinal. A PIPERAZINA é o fármaco de escolha porque atua como agonista GABAergo hiperpolarizando a junção neuromuscular do verme, provocando PARALISIA FLÁCIDA. Os vermes relaxados desatam o nó e são expelidos suavemente impulsionados pelo óleo mineral.",
    explicacaoAlternativas: {
      A: "Incorreto. Albendazol/Mebendazol podem provocar tetania e piorar o nó obstrutivo.",
      B: "Correto. Piperazina (paralisia flácida) + Óleo mineral + Jejum e descompressão por SNG é o protocolo de conservação intestinal.",
      C: "Incorreto. Laxantes vigorosos em alça obstruída aumentam o risco de perfuração.",
      D: "Incorreto. Formaldeído é tóxico e caustica o tecido."
    },
    conceitoPrincipal: "Tratamento da suboclusão por Ascaris: Piperazina (paralisia flácida) + Óleo Mineral + Jejum.",
    source: "MS - Manual de Diagnóstico e Manejo de Helmintíases",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2022
  },
  {
    id: "q103",
    numero: 103,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "facil",
    enunciado: "Como são caracterizados os ovos FÉRTEIS de Ascaris lumbricoides observados no exame parasitológico de fezes?",
    alternativas: [
      "A) Ovais/arredondados, envolvidos por uma espessa casca mamilonada (revestida por camada albuminosa castanha) contendo uma célula-ovo no centro.",
      "B) Formato de barril com rolhas polares hialinas transparente nas pontas.",
      "C) Triangulares com espículo lateral proeminente em forma de espinho.",
      "D) Cistos esféricos com 4 núcleos idênticos e corpos cromatoides."
    ],
    respostaCorreta: 0,
    explicacao: "Os ovos férteis de Ascaris lumbricoides são ovais ou subesféricos (45-75 µm), com casca espessa constituída por três camadas, sendo a mais externa uma camada albuminosa rugosa castanho-escura denominada 'mamilonada'. Ovos inférteis são mais alongados e estreitos.",
    explicacaoAlternativas: {
      A: "Correto. Casca espessa com camada externa rugosa mamilonada marrom é patognomônica de ovos férteis de Ascaris.",
      B: "Incorreto. Descreve ovos de Trichuris trichiura.",
      C: "Incorreto. Descreve ovos de Schistosoma mansoni (espículo lateral).",
      D: "Incorreto. Descreve cistos de Entamoeba histolytica."
    },
    conceitoPrincipal: "Morfologia do ovo fértil de Ascaris lumbricoides: casca espessa mamilonada marrom.",
    source: "Neves - Parasitologia Humana",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK431096/",
    sourceYear: 2022
  },
  {
    id: "q104",
    numero: 104,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "media",
    enunciado: "O Ascaris lumbricoides é conhecido por apresentar comportamento de MIGRAÇÃO ERRÁTICA em situações de estresse (como febre alta, uso de anestésicos ou doses inadequadas de vermífugos). Qual complicação hepatobiliar ou digestiva pode resultar dessa migração errática?",
    alternativas: [
      "A) Colangite, colecistite aguda ou pancreatite aguda por migração e colmatação da ampolla de Vater/colédoco.",
      "B) Glomerulonefrite difusa aguda por deposição de imunocomplexos no néfron.",
      "C) Endocardite bacteriana subaguda da valva mitral.",
      "D) Trombose venosa profunda iliofemoral."
    ],
    respostaCorreta: 0,
    explicacao: "Devido ao hábito tátil de penetrar em orifícios, o Ascaris adulto estimulado pode migrar em sentido retrógrado a partir do duodeno, adentrando a Ampola de Vater e o colédoco. Isso pode causar colangite, icterícia obstrutiva, abscesso hepático ou obstrução do ducto pancreático de Wirsung desencadeando pancreatite aguda.",
    explicacaoAlternativas: {
      A: "Correto. Migração ao colédoco/ducto pancreático gera icterícia obstrutiva, colangite e pancreatite.",
      B: "Incorreto. Não provoca glomerulonefrite primária.",
      C: "Incorreto. Não coloniza as valvas cardíacas.",
      D: "Incorreto. Não migra para veias profundas periféricas."
    },
    conceitoPrincipal: "Migração errática de Ascaris lumbricoides: colangite, abscesso hepático e pancreatite por obstrução biliar.",
    source: "Rey - Parasitologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK431096/",
    sourceYear: 2022
  },
  {
    id: "q105",
    numero: 105,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "facil",
    enunciado: "Qual a profilaxia prioritária mais eficaz no controle comunitário da ascaridíase e outras geo-helmintíases?",
    alternativas: [
      "A) Eliminação de focos de mosquitos vetores com inseticidas de ação residual.",
      "B) Saneamento básico (esgotamento sanitário), tratamento da água para consumo, higienização cuidadosa de hortaliças e lavagem frequente das mãos.",
      "C) Vacinação compulsória na infância com vírus vivo atenuado.",
      "D) Erradicação de caracóis de água doce do gênero Biomphalaria."
    ],
    respostaCorreta: 1,
    explicacao: "A transmissão do Ascaris depende diretamente da contaminação do solo e alimentos por fezes humanas contendo ovos. As medidas preventivas essenciais envolvem saneamento básico universal, acesso a água potável, destinação adequada dos dejetos humanos, lavagem de vegetais e higiene pessoal.",
    explicacaoAlternativas: {
      A: "Incorreto. Ascaris não possui vetor inseto alado.",
      B: "Correto. Saneamento básico, água limpa e lavar as mãos interrompem a cadeia fecal-oral do geo-helminto.",
      C: "Incorreto. Não existem vacinas humanas comercialmente disponíveis contra ascaridíase.",
      D: "Incorreto. Biomphalaria é o hospedeiro intermediário da esquistossomose."
    },
    conceitoPrincipal: "Profilaxia da ascaridíase: saneamento básico, educação sanitária e higiene de alimentos.",
    source: "WHO - Prevention of Helminth Infections",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/soil-transmitted-helminth-infections",
    sourceYear: 2023
  },
  {
    id: "q106",
    numero: 106,
    assunto: "parasitologia",
    subassunto: "Ascaridiase (Ascaris lumbricoides)",
    dificuldade: "media",
    enunciado: "Qual a posologia padrão recomendada do ALBENDAZOL para o tratamento de infecção intestinal não-obstrutiva por Ascaris lumbricoides em adultos e crianças maiores de 2 anos?",
    alternativas: [
      "A) 400 mg por via oral em dose única.",
      "B) 100 mg por via oral de 12 em 12 horas durante 21 dias consecutivos.",
      "C) 10 mg/kg injetável por via intramuscular a cada 8 horas.",
      "D) 2000 mg por via oral divididos em 4 tomadas diárias por 10 dias."
    ],
    respostaCorreta: 0,
    explicacao: "O tratamento padrão não-obstrutivo da ascaridíase é extremamente simples e altamente eficaz: Albendazol 400 mg VO em DOSE ÚNICA (ou Mebendazol 100 mg 2x/dia por 3 dias).",
    explicacaoAlternativas: {
      A: "Correto. Albendazol 400 mg VO em dose única é o esquema de primeira escolha recomendado pela OMS.",
      B: "Incorreto. Esquema excessivamente longo e desnecessário.",
      C: "Incorreto. Albendazol é de administração exclusivamente oral.",
      D: "Incorreto. Dosagem francamente supraterapêutica e tóxica."
    },
    conceitoPrincipal: "Esquema terapêutico contra Ascaris: Albendazol 400 mg VO em dose única.",
    source: "CDC - Ascariasis Treatment",
    sourceUrl: "https://www.cdc.gov/parasites/ascariasis/treatment.html",
    sourceYear: 2023
  },

  // --------------------------------------------------------------------------
  // DOENÇA DE CHAGAS (Trypanosoma cruzi) (Q107 - Q115)
  // --------------------------------------------------------------------------
  {
    id: "q107",
    numero: 107,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "facil",
    enunciado: "A Doença de Chagas (Tripanossomíase Americana) é uma zoonose causada pelo protozoário flagelado Trypanosoma cruzi. Qual o inseto vetor responsável pela transmissão vetorial clássica ao ser humano?",
    alternativas: [
      "A) Mosquito do gênero Aedes (Aedes aegypti)",
      "B) Hemípteros hematófagos da subfamília Triatominae (conhecidos como barbeiro, bicudo ou chupança, ex: Triatoma infestans)",
      "C) Mosquitos flebotomíneos do gênero Lutzomyia (mosquito-palha)",
      "D) Mosca tsé-tsé (Glossina morsitans)"
    ],
    respostaCorreta: 1,
    explicacao: "O vetor clássico da Doença de Chagas é o percevejo triatomíneo hematófago (conhecido popularmente como barbeiro, bicudo, procto ou chupança), destacando-se gêneros como Triatoma, Panstrongylus e Rhodnius.",
    explicacaoAlternativas: {
      A: "Incorreto. Aedes transmite arbovírus.",
      B: "Correto. Insetos triatomíneos (barbeiros) são os vetores de T. cruzi.",
      C: "Incorreto. Lutzomyia transmite a Leishmaniose.",
      D: "Incorreto. Mosca tsé-tsé transmite a Tripanossomíase Africana (Doença do Sono)."
    },
    conceitoPrincipal: "Vetor da Doença de Chagas: Inseto Triatomíneo ('Barbeiro').",
    source: "OPAS/OMS - Doença de Chagas",
    sourceUrl: "https://www.paho.org/pt/topicos/doenca-chagas",
    sourceYear: 2023
  },
  {
    id: "q108",
    numero: 108,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "media",
    enunciado: "Como ocorre o mecanismo EXATO de infecção vetorial humana pelo Trypanosoma cruzi durante a picada do barbeiro?",
    alternativas: [
      "A) O triatomíneo inocula diretamente formas tripomastigotas metacíclicas através de sua saliva durante o ato da picada.",
      "B) O triatomíneo defeca/urina na pele durante ou logo após repasto sanguíneo; as formas TRIPOMASTIGOTAS METACÍCLICAS presentes nas fezes penetram ativamente pela ferida da picada ou pelas mucosas ao serem coçadas pelo hospedeiro.",
      "C) O protozoário encista-se nos folículos pilosos e penetra após fricção mecânica sem fezes.",
      "D) As larvas do parasita são expelidas pelo espirro do inseto."
    ],
    respostaCorreta: 1,
    explicacao: "A transmissão vetorial do T. cruzi NÃO é inoculativa (salivar), mas sim por CONTAMINAÇÃO FECAL (estercorária). Ao sugar o sangue, o triatomíneo ingurgitado defeca/urina perto da picada. As formas infectantes (tripomastigotas metacíclicas) eliminadas nas fezes são atritadas pelo próprio paciente ao coçar o local, penetrando na ferida aberta ou em mucosas intactas (como a conjuntiva ocular).",
    explicacaoAlternativas: {
      A: "Incorreto. A infecção não é por inoculação salivar (diferente da Malária ou Leishmaniose).",
      B: "Correto. Ocorre por contaminação das fezes/urina infectadas do barbeiro no local da picada ou mucosas.",
      C: "Incorreto. A forma de resistência contida nas fezes é o tripomastigota metacíclico.",
      D: "Incorreto. Insetos não espirram parasitas."
    },
    conceitoPrincipal: "Mecanismo de infecção vetorial de T. cruzi: transmissão estercorária (contaminação por fezes/urina do triatomíneo).",
    source: "Neves - Parasitologia Humana",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK544321/",
    sourceYear: 2022
  },
  {
    id: "q109",
    numero: 109,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "media",
    enunciado: "O Trypanosoma cruzi apresenta diferentes formas evolutivas durante seu ciclo de vida. Qual é a forma INTRACELLULAR aflagelada, arredondada e multiplicativa (por divisão binária) encontrada nos tecidos (como miocárdio e plexos mioentéricos) do hospedeiro vertebrado?",
    alternativas: [
      "A) Epimastigota",
      "B) Amastigota",
      "C) Tripomastigota sanguíneo",
      "D) Promastigota"
    ],
    respostaCorreta: 1,
    explicacao: "A forma AMASTIGOTA é a fase intracelular obrigatoriamente sem flagelo livre (possuindo apenas cinetoplasto e núcleo). Ela reside e multiplica-se ativamente por divisão binária no citoplasma das células do hospedeiro humano (especialmente miócitos cardíacos, células musculares lisas e glia), formando os característicos 'ninhos de amastigotas'.",
    explicacaoAlternativas: {
      A: "Incorreto. Epimastigota é a forma de multiplicação no tubo digestivo do inseto vetor.",
      B: "Correto. Amastigotas são as formas teciduais intracelulares aflageladas multiplicativas no homem.",
      C: "Incorreto. Tripomastigotas sanguíneos circulam no sangue periférico e não se dividem.",
      D: "Incorreto. Promastigota é a forma flagelada de Leishmania."
    },
    conceitoPrincipal: "Formas de T. cruzi: Amastigotas (intracelulares/teciduais) vs Tripomastigotas (sanguíneos/infectantes) vs Epimastigotas (vetor).",
    source: "Rey - Parasitologia Médica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK544321/",
    sourceYear: 2022
  },
  {
    id: "q110",
    numero: 110,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "facil",
    enunciado: "Na atualidade epidemiológica do Brasil, surtos surtos agudos de Doença de Chagas na Região Amazônica estão frequentemente associados a qual via de transmissão?",
    alternativas: [
      "A) Transmissão por aerossóis hospitalares.",
      "B) Via Oral (ingestão de alimentos contaminados com triatomíneos triturados ou suas fezes, como açaí ou caldo de cana artesanais não pasteurizados).",
      "C) Picada de carrapatos do gênero Amblyomma.",
      "D) Mordedura de animais silvestres como gambás e tatus."
    ],
    respostaCorreta: 1,
    explicacao: "No Brasil contemporâneo, a VIA ORAL tornou-se a principal forma de transmissão de casos agudos de Chagas (mais de 70% dos casos). Ela ocorre pelo consumo de açaí, caldo de cana ou bacaba processados sem higiene, nos quais triatomíneos ou suas fezes infectadas foram triturados acidentalmente.",
    explicacaoAlternativas: {
      A: "Incorreto. Não há transmissão respiratória por aerossóis.",
      B: "Correto. A transmissão oral por alimentos (açaí/caldo de cana) é a causa dominante de surtos agudos no Brasil.",
      C: "Incorreto. Amblyomma transmite a Febre Maculosa (Rickettsia).",
      D: "Incorreto. Gambás e tatus são reservatórios silvestres, mas o contágio direto por mordedura não ocorre."
    },
    conceitoPrincipal: "Epidemiologia da Doença de Chagas agudizada no Brasil: predomínio da transmissão oral via açaí/caldo de cana.",
    source: "Ministério da Saúde - Boletim Epidemiológico Chagas",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },
  {
    id: "q111",
    numero: 111,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "media",
    enunciado: "Um sinal patognomônico clássico observável na FASE AGUDA da Doença de Chagas vetorial, quando a porta de entrada do parásito é a conjuntiva ocular, é o SINAL DE ROMAÑA. Como ele se caracteriza clinicamente?",
    alternativas: [
      "A) Icterícia intensa com colúria e acolia fecal.",
      "B) Edema bipalpebral unilateral, indolor, de coloração violácea, acompanhado de dacrioadenite e enfartamento do linfonodo pré-auricular.",
      "C) Úlceras cutâneas dolorosas de bordas moldadas em 'emolduramento de cratera'.",
      "D) Exantema maculopapular descamativo palmo-plantar."
    ],
    respostaCorreta: 1,
    explicacao: "O Sinal de Romaña é o complexo oftalmoganglionar agudo de inoculação ocular: edema palpebral unilateral violáceo (olho roxo), indolor, associado a dacrioadenite (inflamação da glândula lacrimal) e enfartamento ganglionar pré-auricular ou submandibular homolateral.",
    explicacaoAlternativas: {
      A: "Incorreto. Caracteriza hepatite grave ou icterícia obstrutiva.",
      B: "Correto. Sinal de Romaña: edema bipalpebral unilateral indolor violáceo + adenopatia pré-auricular.",
      C: "Incorreto. Caracteriza a leishmaniose tegumentar americana.",
      D: "Incorreto. Caracteriza a sífilis secundária."
    },
    conceitoPrincipal: "Sinal de Romaña: complexo oftalmoganglionar unilateral agudo de inoculação de T. cruzi.",
    source: "Pinto Dias JC - História e clínica da Doença de Chagas",
    sourceUrl: "https://www.scielo.br/",
    sourceYear: 2022
  },
  {
    id: "q112",
    numero: 112,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "dificil",
    enunciado: "O diagnóstico laboratorial da Doença de Chagas difere radicalmente entre a Fase Aguda e a Fase Crônica. Qual a estratégia diagnóstica recomendada para a FASE CRÔNICA da doença?",
    alternativas: [
      "A) Pesquisa direta do parásito a fresco ou gota espessa no sangue periférico.",
      "B) Exclusivamente a realização de coprocultura para isolamento em meio de NNN.",
      "C) Realização de pelo menos DOIS testes sorológicos de princípios metodológicos diferentes (ex: ELISA e Imunofluorescência Indireta - IFI) para detecção de anticorpos IgG anti-T. cruzi.",
      "D) Tomografia computadorizada de tórax sem contraste."
    ],
    respostaCorreta: 2,
    explicacao: "Na FASE CRÔNICA, a parassitemia sanguínea é extremamente baixa ou intermitente, tornando os exames diretos parasitológicos ineficazes. O diagnóstico fundamenta-se na sorologia (pesquisa de IgG específica): exige-se a positividade em pelo menos DOIS testes de métodos distintos (ex: ELISA + IFI ou Hemaglutinação) para confirmar o diagnóstico.",
    explicacaoAlternativas: {
      A: "Incorreto. Exame direto a fresco / gota espessa é o método de escolha na FASE AGUDA (alta parassitemia).",
      B: "Incorreto. Coprocultura não se aplica a protozoários sanguíneos.",
      C: "Correto. Fase Crônica: 2 testes sorológicos distintos de IgG positivos (ex: ELISA + IFI).",
      D: "Incorreto. TC não estabelece o diagnóstico etiológico."
    },
    conceitoPrincipal: "Diagnóstico da Doença de Chagas: Fase Aguda (pesquisa direta do parásito) vs Fase Crônica (2 testes sorológicos IgG positivos).",
    source: "Consenso Brasileiro em Doença de Chagas - SBC/SBMT",
    sourceUrl: "https://www.scielo.br/j/rsbmt/",
    sourceYear: 2023
  },
  {
    id: "q113",
    numero: 113,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "dificil",
    enunciado: "A Cardiopatia Chagásica Crônica (CCC) é a complicação mais grave e incapacitante da doença. Quais são os achados ELETROCARDIOGRÁFICOS (ECG) clássicos mais característicos da agressão ao sistema de condução cardíaco pelo T. cruzi?",
    alternativas: [
      "A) Supradesnivelamento do segmento ST em todas as derivações com ondas Q patológicas em V1-V3.",
      "B) Bloqueio de Ramo Direito (BRD) associado a Bloqueio Divisor Anterior Esquerdo (BDAE / BDAG).",
      "C) Síndrome de Wolff-Parkinson-White com onda Delta proeminente.",
      "D) Taquicardia atrial multifocal com intervalo PR curto."
    ],
    respostaCorreta: 1,
    explicacao: "A agressão inflamatória e a fibrose progressiva promovidas pelo T. cruzi destroem o sistema de condução cardíaco. A combinação eletrocardiográfica clássica patognomônica da Cardiopatia Chagásica Crônica é a associação de Bloqueio de Ramo Direito (BRD) com Bloqueio Divisor Anterior Esquerdo (BDAE). Extrassístoles ventriculares polimórficas e aneurisma de ápice do ventrículo esquerdo também são frequentes.",
    explicacaoAlternativas: {
      A: "Incorreto. Corresponde ao Infarto Agudo do Miocárdio de parede anterior.",
      B: "Correto. BRD + BDAE é o par eletrocardiográfico altamente sugestivo da cardiopatia chagásica crônica.",
      C: "Incorreto. Corresponde à pré-excitação ventricular congênita.",
      D: "Incorreto. Típico de doença pulmonar obstrutiva crônica grave."
    },
    conceitoPrincipal: "Achados eletrocardiográficos da Cardiopatia Chagásica Crônica: BRD + BDAE, arritmias ventriculares e aneurisma apical do VE.",
    source: "Diretriz da Sociedade Brasileira de Cardiologia sobre Cardiopatia Chagásica",
    sourceUrl: "https://www.abramede.com.br/",
    sourceYear: 2023
  },
  {
    id: "q114",
    numero: 114,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "media",
    enunciado: "A Forma Digestiva da Doença de Chagas (Megaesôfago e Megacólon) decorre da destruição de qual estrutura histológica do trato gastrointestinal pelo processo inflamatório crônico?",
    alternativas: [
      "A) Glândulas secretoras de gastrina do antro gástrico.",
      "B) Plexos nervosos entéricos (Plexo Mioentérico de Auerbach e Submucoso de Meissner), levando à denervação autonômica e acalásia/aperistaltismo.",
      "C) Microvilosidades em escova do epitélio absortivo duodenal.",
      "D) Células ilhotas pancreáticas secretoras de insulina."
    ],
    respostaCorreta: 1,
    explicacao: "O T. cruzi promove a destruição seletiva (denervação) dos neurônios dos plexos intramurais entéricos de Auerbach (mioentérico) e Meissner (submucoso). A perda do controle motor autônomo impede o relaxamento receptivo dos esfíncteres e extingue o peristaltismo, resultando na dilatação maciça progressiva das vísceras (Megaesôfago com disfagia/regurgitação e Megacólon com constipação obstinada e fecalomas).",
    explicacaoAlternativas: {
      A: "Incorreto. Não há destruição seletiva de gastrinomas antrais.",
      B: "Correto. A denervação dos plexos intramurais de Auerbach e Meissner causa aperistaltismo e megavísceras.",
      C: "Incorreto. Microvilosidades em escova são afetadas na giardíase ou celíaca.",
      D: "Incorreto. Relaciona-se com diabetes mellitus tipo 1."
    },
    conceitoPrincipal: "Patogênese da Forma Digestiva da Doença de Chagas: denervação dos plexos entéricos de Auerbach e Meissner.",
    source: "Rezende JM - Manifestações Digestivas da Doença de Chagas",
    sourceUrl: "https://www.scielo.br/",
    sourceYear: 2022
  },
  {
    id: "q115",
    numero: 115,
    assunto: "parasitologia",
    subassunto: "Doença de Chagas (Trypanosoma cruzi)",
    dificuldade: "facil",
    enunciado: "Qual o fármaco etiológico de primeira escolha disponibilizado pelo SUS para o tratamento da FASE AGUDA da Doença de Chagas?",
    alternativas: [
      "A) BENZNIDAZOL",
      "B) Cloroquina",
      "C) Ivermectina",
      "D) Vancomicina"
    ],
    respostaCorreta: 0,
    explicacao: "O BENZNIDAZOL é o antiparasitário de primeira linha para o tratamento etiológico da Doença de Chagas (o Nifurtimox é a alternativa de segunda linha). O tratamento é altamente eficaz na fase aguda, em infecções congênitas e em acidentes laboratoriais, reduzindo a parassitemia e prevenindo a progressão crônica.",
    explicacaoAlternativas: {
      A: "Correto. Benznidazol é o medicamento antiparasitário específico padronizado contra T. cruzi.",
      B: "Incorreto. Cloroquina é antimalárico.",
      C: "Incorreto. Ivermectina trata helmintos e ectoparasitas.",
      D: "Incorreto. Vancomicina é antibiótico glicopeptídeo contra Gram-positivos."
    },
    conceitoPrincipal: "Tratamento etiológico de Trypanosoma cruzi: BENZNIDAZOL.",
    source: "MS - Guia de Vigilância e Tratamento da Doença de Chagas",
    sourceUrl: "https://www.gov.br/saude/pt-br",
    sourceYear: 2023
  },

  // --------------------------------------------------------------------------
  // PROPEDÊUTICA MÉDICA (Q116 - Q145)
  // Exame Físico Geral, Antropometria, Impressão Geral & Consciência, Segmento Cefálico II
  // --------------------------------------------------------------------------
  {
    id: "q116",
    numero: 116,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "facil",
    enunciado: "As quatro técnicas clássicas de exame físico propedêutico devem ser executadas em uma sequência padronizada. Na maioria dos segmentos corporais (como o tórax), qual é a ordem cronológica CORRETA de execução dessas técnicas?",
    alternativas: [
      "A) Ausculta -> Palpação -> Percussão -> Inspeção.",
      "B) Inspeção -> Palpação -> Percussão -> Ausculta.",
      "C) Percussão -> Inspeção -> Ausculta -> Palpação.",
      "D) Palpação -> Ausculta -> Inspeção -> Percussão."
    ],
    respostaCorreta: 1,
    explicacao: "A sequência clássica e lógica do exame físico geral e torácico é: 1. Inspeção (observação visual); 2. Palpação (tátil); 3. Percussão (acústica por golpamento); 4. Ausculta (estetoscópica). A única exceção marcante é o EXAME ABDOMINAL, onde a ausculta precede a palpação e a percussão para não alterar os ruídos hidroaéreos.",
    explicacaoAlternativas: {
      A: "Incorreto. Ordem invertida; ausculta em primeiro lugar altera os achados táteis.",
      B: "Correto. Inspeção -> Palpação -> Percussão -> Ausculta é a sequência padrão clássica.",
      C: "Incorreto. Percussão antes de inspeção viola os princípios da propedêutica.",
      D: "Incorreto. A inspeção visual sempre deve anteceder o toque."
    },
    conceitoPrincipal: "Sequência padrão do exame físico propedêutico: Inspeção -> Palpação -> Percussão -> Ausculta.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q117",
    numero: 117,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "facil",
    enunciado: "Por convenção internacional e ergonômica da prática médica, em qual lado do paciente deitado em decúbito dorsal o examinador deve preferencialmente posicionar-se para realizar o exame físico?",
    alternativas: [
      "A) À esquerda do paciente.",
      "B) À direita do paciente.",
      "C) Aos pés da cama obrigatoriamente.",
      "D) Indiferentemente em qualquer lado, sem padronização recomendada."
    ],
    respostaCorreta: 1,
    explicacao: "Por convenção propedêutica histórica e prática (facilitando a palpação do fígado, ictus cordis e manobras vasculares), o examinador deve posicionar-se à DIREITA do paciente leito.",
    explicacaoAlternativas: {
      A: "Incorreto. O lado esquerdo é reservado para manobras específicas ou examinadores canhotos quando estritamente necessário.",
      B: "Correto. O posicionamento à direita do paciente é a norma propedêutica estabelecida.",
      C: "Incorreto. Aos pés da cama realiza-se apenas a inspeção panorâmica inicial.",
      D: "Incorreto. Existe padronização clara recomendada pela literatura médica."
    },
    conceitoPrincipal: "Posicionamento do examinador no exame físico: à direita do paciente.",
    source: "Porto & Porto - Exame Físico Propedêutico",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q118",
    numero: 118,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "media",
    enunciado: "Durante a palpação propedêutica, a polpa dos dedos e a face palmar das articulações metacarpofalângicas são mais adequadas para avaliar a tátil de impulsões e vibrações (ex: frêmito tóraco-vocal). Qual região da mão do examinador é a MAIS SENSÍVEL para a percepção da TEMPERATURA cutânea do paciente?",
    alternativas: [
      "A) A ponta dos polegares.",
      "B) A face dorsal da mão ou dos dedos (dorsum manus).",
      "C) A eminência tenar da palma da mão.",
      "D) O bordo ulnar rígido do punho."
    ],
    respostaCorreta: 1,
    explicacao: "A pele da face DORSAL das mãos e dos dedos é significativamente mais fina e possui maior densidade de termorreceptores, tornando-a a região anatomicamente ideal para comparar a temperatura cutânea entre segmentos simétricos do corpo.",
    explicacaoAlternativas: {
      A: "Incorreto. Polegares são usados para palpação profunda ou compressão de edemas (sinal do cacifo).",
      B: "Correto. A face dorsal das mãos/dedos é a região mais sensível para avaliação da temperatura corporal.",
      C: "Incorreto. A eminência tenar é usada para palpação de frêmitos e choques valvares.",
      D: "Incorreto. O bordo ulnar é usado para palpar frêmito tóraco-vocal."
    },
    conceitoPrincipal: "Técnica de palpação: face dorsal da mão para sensibilidade térmica cutânea.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q119",
    numero: 119,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "media",
    enunciado: "Na percussão propedêutica indireta digito-digital, como são denominados o dedo da mão esquerda apoiado firmemente sobre a pele do paciente e o dedo da mão direita que desfere os golpes rápidos e secos?",
    alternativas: [
      "A) Dedo Fixador e Dedo Batedor.",
      "B) Dedo Plessímetro e Dedo Plessor.",
      "C) Dedo Receptor e Dedo Transmissor.",
      "D) Dedo Estático e Dedo Dinâmico."
    ],
    respostaCorreta: 1,
    explicacao: "Na percussão digito-digital clássica: o dedo médio da mão não-dominante apoiado sobre a superfície a ser examinada é o PLESSÍMETRO. O dedo médio flexionado da mão dominante que golpeia a falange média do plessímetro com movimento solto de punho é o PLESSOR.",
    explicacaoAlternativas: {
      A: "Incorreto. Não são os termos propedêuticos formais.",
      B: "Correto. Dedo Plessímetro (apoio) e Dedo Plessor (golpeador).",
      C: "Incorreto. Termos inexistentes na nomenclatura propedêutica.",
      D: "Incorreto. Nomenclatura incorreta."
    },
    conceitoPrincipal: "Percussão digito-digital: dedo plessímetro (apoiado) e dedo plessor (golpeador).",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q120",
    numero: 120,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "media",
    enunciado: "Qual som percutório é fisiologicamente esperado ao se percutir o parênquima pulmonar normal aireado e qual é o som obtido sobre uma víscera oca contendo ar (como a bolha de ar do estômago / Espaço de Traube)?",
    alternativas: [
      "A) Som Maciço no pulmão; Som Claro Pulmonar no estômago.",
      "B) Som Som Claro Pulmonar (Atímpano) no pulmão; Som Tímpânico no estômago.",
      "C) Som Submaciço no pulmão; Som Hiperressonante no estômago.",
      "D) Som Maciço em ambas as estruturas."
    ],
    respostaCorreta: 1,
    explicacao: "O parênquima pulmonar sadio aireado produz o som CLARO PULMONAR (ou ressonante). Uma cavidade oca contendo gás sob tensão (como a bolha gástrica no Espaço de Traube ou alças intestinais) produz o som TIMPÂNICO (musical e de alta tonalidade). Órgãos sólidos (fígado, baço) produzem som MACIÇO.",
    explicacaoAlternativas: {
      A: "Incorreto. Som maciço no pulmão indica consolidação/derrame pleural.",
      B: "Correto. Som claro pulmonar em tórax normal e som timpânico sobre a bolha gástrica.",
      C: "Incorreto. Hiperressonância indica enfisema ou pneumotórax.",
      D: "Incorreto. Estruturas contendo ar não são maciças."
    },
    conceitoPrincipal: "Sons da percussão: Claro Pulmonar (pulmão aerado), Timpânico (bolha gástrica/gás), Maciço (órgão sólido/líquido).",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q121",
    numero: 121,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "facil",
    enunciado: "Ao utilizar a campânula (cupula) e o diafragma (membrana) do estetoscópio durante a ausculta, qual a recomendação propedêutica para a captação de sons de BAIXA frequência (graves, como a 3ª e 4ª bulhas cardíacas e o sopro de estenose mitral)?",
    alternativas: [
      "A) Pressionar o diafragma com muita força contra a pele do paciente.",
      "B) Encostar suavemente a CAMPÂNULA sobre a pele sem exercer pressão excessiva.",
      "C) Utilizar apenas o diafragma com o paciente em pé.",
      "D) Desconectar as olivas auriculares do estetoscópio."
    ],
    respostaCorreta: 1,
    explicacao: "A CAMPÂNULA é projetada para auscultar sons de BAIXA FREQUÊNCIA (graves). Deve ser aplicada suavemente sobre a pele; se for pressionada com força, a própria pele estica-se e atua como um diafragma, filtrando os sons graves. O DIAFRAGMA detecta sons de ALTA FREQUÊNCIA (agudos, como B1, B2 e sopro de insuficiência aórtica).",
    explicacaoAlternativas: {
      A: "Incorreto. Pressionar o diafragma atenua os sons graves.",
      B: "Correto. A campânula pousada suavemente capta sons graves/baixa frequência.",
      C: "Incorreto. O diafragma filtra ruídos agudos.",
      D: "Incorreto. Inviabiliza a condução acústica."
    },
    conceitoPrincipal: "Uso do estetoscópio: Campânula suave (sons graves/baixa frequência) vs Diafragma firme (sons agudos/alta frequência).",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q122",
    numero: 122,
    assunto: "propedeutica",
    subassunto: "Exame Físico Geral",
    dificuldade: "media",
    enunciado: "Qual a única região anatômica do corpo humano onde a sequência propedêutica clássica DEVE ser modificada, realizando-se a AUSCULTA logo após a INSPEÇÃO e ANTES da palpação e percussão?",
    alternativas: [
      "A) Região precordial (coração).",
      "B) Abdome.",
      "C) Segmento Cefálico e Pescoço.",
      "D) Membros inferiores."
    ],
    respostaCorreta: 1,
    explicacao: "No EXAME ABDOMINAL, a ausculta deve preceder a palpação e a percussão. A palpação e a percussão estimulam mecanicamente as alças intestinais, podendo alterar a frequência e o padrão natural dos ruídos hidroaéreos (peristaltismo).",
    explicacaoAlternativas: {
      A: "Incorreto. No precórdio a palpação do ictus precede a ausculta das bulhas.",
      B: "Correto. No abdome: Inspeção -> Ausculta -> Percussão -> Palpação.",
      C: "Incorreto. Não exige ausculta antes da palpação.",
      D: "Incorreto. Segue a sequência clássica."
    },
    conceitoPrincipal: "Exceção do Exame Abdominal: Ausculta antecede Palpação e Percussão para não alterar ruídos hidroaéreos.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },

  // --------------------------------------------------------------------------
  // ANTROPOMETRIA & SINAIS VITAIS (Q123 - Q129)
  // --------------------------------------------------------------------------
  {
    id: "q123",
    numero: 123,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "facil",
    enunciado: "O Índice de Massa Corporal (IMC) é o indicador antropométrico mais utilizado para avaliação do estado nutricional em adultos. Como ele é calculado e qual a faixa de EUTROFIA (peso normal) segundo a OMS?",
    alternativas: [
      "A) IMC = Peso (kg) / Altura (m); Eutrofia de 10 a 15 kg/m².",
      "B) IMC = Peso (kg) / [Altura (m)]²; Eutrofia de 18,5 a 24,9 kg/m².",
      "C) IMC = [Altura (cm)]² / Peso (kg); Eutrofia de 30 a 35 kg/m².",
      "D) IMC = Peso (g) / Altura (cm); Eutrofia de 50 a 60 g/cm."
    ],
    respostaCorreta: 1,
    explicacao: "O IMC é calculado dividindo o peso em quilogramas pelo quadrado da altura em metros: IMC = peso / (altura)². Segundo a Classificação da OMS para adultos: < 18.5 (Baixo peso), 18.5-24.9 (Eutrofia/Peso normal), 25.0-29.9 (Sobrepeso), 30.0-34.9 (Obesidade Grau I), 35.0-39.9 (Obesidade Grau II), >= 40.0 (Obesidade Grau III/Mórbida).",
    explicacaoAlternativas: {
      A: "Incorreto. A altura deve ser elevada ao quadrado.",
      B: "Correto. IMC = Peso / Altura²; faixa eutrófica de 18,5 a 24,9 kg/m².",
      C: "Incorreto. Fórmula invertida e faixa de obesidade grau I.",
      D: "Incorreto. Unidades e fórmula incorretas."
    },
    conceitoPrincipal: "Cálculo e classificação do IMC (OMS): Peso/Altura² (Eutrofia: 18,5-24,9 kg/m²).",
    source: "WHO - Body Mass Index Classification",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
    sourceYear: 2023
  },
  {
    id: "q124",
    numero: 124,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "media",
    enunciado: "Um paciente adulto de 45 anos apresenta peso de 98 kg e altura de 1,75 m. Ao calcular o IMC desse paciente, em qual categoria de classificação nutricional ele se enquadra?",
    alternativas: [
      "A) Eutrofia",
      "B) Sobrepeso",
      "C) Obesidade Grau I",
      "D) Obesidade Grau II"
    ],
    respostaCorreta: 3,
    explicacao: "Cálculo do IMC: Altura² = 1,75 x 1,75 = 3,0625. IMC = 98 / 3,0625 = 32,0 kg/m². A faixa de 30,0 a 34,9 kg/m² corresponde à Obesidade Grau I (ou moderada).",
    explicacaoAlternativas: {
      A: "Incorreto. Eutrofia vai até 24,9 kg/m².",
      B: "Incorreto. Sobrepeso vai de 25,0 a 29,9 kg/m².",
      C: "Correto. IMC de 32,0 kg/m² enquadra-se exatamente na Obesidade Grau I.",
      D: "Incorreto. Obesidade Grau II exige IMC de 35,0 a 39,9 kg/m²."
    },
    conceitoPrincipal: "Aplicação prática do cálculo de IMC: IMC = 32,0 kg/m² = Obesidade Grau I.",
    source: "Diretrizes Brasileiras de Obesidade - ABESO",
    sourceUrl: "https://abeso.org.br/",
    sourceYear: 2022
  },
  {
    id: "q125",
    numero: 125,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "media",
    enunciado: "A aferição da Circunferência Abdominal (CA) é um importante marcador de adiposidade visceral e risco metabólico/cardiovascular. Segundo os critérios da OMS e NCEP-ATPIII, quais são os valores de corte que indicam RISCO AUMENTADO/ELEVADO em homens e mulheres adultos, respectivamente?",
    alternativas: [
      "A) > 70 cm para mulheres e > 80 cm para homens.",
      "B) > 88 cm para mulheres e > 102 cm para homens (ou > 80 cm mulheres / > 94 cm homens para risco aumentado pela IDF).",
      "C) > 110 cm para ambos os sexos.",
      "D) > 50 cm para mulheres e > 60 cm para homens."
    ],
    respostaCorreta: 1,
    explicacao: "A gordura visceral abdominal está diretamente associada ao risco cardiovascular e síndrome metabólica. Pelos critérios clássicos da NCEP-ATP III / OMS: Circunferência Abdominal > 88 cm em mulheres e > 102 cm em homens indicam risco cardiovascular MUITO ELEVADO. (Pela IDF, > 80 cm em mulheres e > 94 cm em homens).",
    explicacaoAlternativas: {
      A: "Incorreto. Valores muito baixos.",
      B: "Correto. Corte NCEP/OMS de risco elevado: CA > 88 cm (mulheres) e > 102 cm (homens).",
      C: "Incorreto. Corte excessivamente alto.",
      D: "Incorreto. Incompatível com adultos."
    },
    conceitoPrincipal: "Valores de corte da Circunferência Abdominal para risco cardiovascular: > 88 cm (mulheres) e > 102 cm (homens).",
    source: "NCEP-ATPIII / ABESO",
    sourceUrl: "https://abeso.org.br/",
    sourceYear: 2022
  },
  {
    id: "q126",
    numero: 126,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "media",
    enunciado: "Na aferição da temperatura corporal axilar, qual é o intervalo considerado de NORMOTERMIA e a partir de qual valor de temperatura axilar define-se FEBRE no adulto?",
    alternativas: [
      "A) Normotermia: 32,0 - 34,0 ºC; Febre > 35,0 ºC.",
      "B) Normotermia: 35,5 - 37,0 ºC; Febre > 37,8 ºC (sendo 37,3 a 37,7 ºC considerado estado subfebril/febrícula).",
      "C) Normotermia: 37,5 - 39,0 ºC; Febre > 41,0 ºC.",
      "D) Normotermia: 38,0 - 38,5 ºC; Febre > 40,0 ºC."
    ],
    respostaCorreta: 1,
    explicacao: "A temperatura axilar fisiológica normal oscila entre 35,5 ºC e 37,0 ºC. Valores entre 37,3 ºC e 37,7 ºC são classificados como estado subfebril ou febrícula. Temperatura axilar >= 37,8 ºC (ou 38,0 ºC) define FEBRE. Hiperpirexia é > 41,0 ºC.",
    explicacaoAlternativas: {
      A: "Incorreto. 32-34 ºC indica hipotermia moderada.",
      B: "Correto. Normotermia axilar de 35,5 a 37,0 ºC; febre >= 37,8 ºC.",
      C: "Incorreto. Valores de febre/hiperpirexia.",
      D: "Incorreto. Faixas alteradas."
    },
    conceitoPrincipal: "Sinais vitais: temperatura axilar normal (35,5 - 37,0 ºC) vs febrícula (37,3 - 37,7 ºC) vs febre (>= 37,8 ºC).",
    source: "Porto & Porto - Exame Físico Propedêutico",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q127",
    numero: 127,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "dificil",
    enunciado: "Na aferição da Pressão Arterial (PA) pelo método auscultatório com esfigmomanômetro aneroide e estetoscópio, o que representam os Ruídos de Korotkoff de FASE I e FASE V, respectivamente?",
    alternativas: [
      "A) Fase I = Pressão Diastólica; Fase V = Pressão Sistólica.",
      "B) Fase I = Aparecimento dos primeiros sons batentes claros (Pressão Arterial Sistólica - PAS); Fase V = Desaparecimento completo dos sons (Pressão Arterial Diastólica - PAD).",
      "C) Fase I = Sopros contínuos; Fase V = Abafamento dos sons.",
      "D) Fase I = Pressão Média; Fase V = Hiato Auscultatório."
    ],
    respostaCorreta: 1,
    explicacao: "Os Sons de Korotkoff possuem 5 fases: Fase I: primeiro som rítmico e nítido que surge ao desinflar o manguito, determinando a PRESSÃO ARTERIAL SISTÓLICA (PAS); Fases II e III: sons mais suaves e depois mais intensos; Fase IV: abafamento dos sons; Fase V: desaparecimento total dos sons, determinando a PRESSÃO ARTERIAL DIASTÓLICA (PAD) em adultos.",
    explicacaoAlternativas: {
      A: "Incorreto. A ordem das pressões está invertida.",
      B: "Correto. Fase I de Korotkoff = PAS; Fase V = PAD.",
      C: "Incorreto. Descrição imprecisa.",
      D: "Incorreto. O hiato auscultatório é o desaparecimento temporário anormal dos sons entre Fase I e II."
    },
    conceitoPrincipal: "Ruídos de Korotkoff: Fase I (Pressão Sistólica) e Fase V (Pressão Diastólica).",
    source: "7ª Diretriz Brasileira de Hipertensão Arterial - SBC",
    sourceUrl: "https://www.scielo.br/j/abc/",
    sourceYear: 2022
  },
  {
    id: "q128",
    numero: 128,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "facil",
    enunciado: "Como é classificada a frequência respiratória (FR) em um adulto em repouso quando apresenta 26 incursões respiratórias por minuto (irpm)? (Valores de referência: 12 a 20 irpm).",
    alternativas: [
      "A) Bradipneia",
      "B) Eupneia",
      "C) Taquipneia",
      "D) Apneia"
    ],
    respostaCorreta: 2,
    explicacao: "A frequência respiratória normal (Eupneia) no adulto em repouso varia de 12 a 20 irpm. Frequência abaixo de 12 irpm é Bradipneia; acima de 20 irpm é TAQUIPNEIA. A ausência de respiração é Apneia.",
    explicacaoAlternativas: {
      A: "Incorreto. Bradipneia é FR < 12 irpm.",
      B: "Incorreto. Eupneia é a FR normal (12-20 irpm).",
      C: "Correto. 26 irpm caracteriza TAQUIPNEIA (frequência respiratória elevada).",
      D: "Incorreto. Apneia é parada respiratória."
    },
    conceitoPrincipal: "Nomenclatura respiratória: Eupneia (12-20 irpm), Taquipneia (> 20 irpm), Bradipneia (< 12 irpm).",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q129",
    numero: 129,
    assunto: "propedeutica",
    subassunto: "Antropometria & Sinais Vitais",
    dificuldade: "media",
    enunciado: "Ao palpar o pulso arterial radial para avaliar o ritmo e a frequência cardíaca (FC), qual o intervalo normal de pulsações por minuto em um adulto em repouso (Eucardia)?",
    alternativas: [
      "A) 30 a 50 bpm",
      "B) 60 a 100 bpm",
      "C) 110 a 150 bpm",
      "D) 160 a 200 bpm"
    ],
    respostaCorreta: 1,
    explicacao: "Em adultos de repouso, a frequência cardíaca fisiológica (Eucardia) varia de 60 a 100 batimentos por minuto (bpm). FC < 60 bpm é Bradicardia; FC > 100 bpm é Taquicardia.",
    explicacaoAlternativas: {
      A: "Incorreto. Bradicardia intensa.",
      B: "Correto. Eucardia no adulto é de 60 a 100 bpm.",
      C: "Incorreto. Taquicardia moderada.",
      D: "Incorreto. Taquicardia severa."
    },
    conceitoPrincipal: "Frequência cardíaca fisiológica no adulto: Eucardia (60 a 100 bpm).",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },

  // --------------------------------------------------------------------------
  // IMPRESSÃO GERAL, ESTADO GERAL & CONSCIÊNCIA (Q130 - Q137)
  // --------------------------------------------------------------------------
  {
    id: "q130",
    numero: 130,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "facil",
    enunciado: "O Estado Geral do paciente (EGG) é uma avaliação subjetiva global realizada pelo examinador na ectoscopia. Como ele é classicamente sumariado no prontuário médico?",
    alternativas: [
      "A) Apenas pela nota do IMC em kg/m².",
      "B) Bom Estado Geral (BEG), Regular Estado Geral (REG) ou Mau Estado Geral (MEG).",
      "C) Positivo, Neutro ou Negativo.",
      "D) Estágio 1, Estágio 2 ou Estágio 3."
    ],
    respostaCorreta: 1,
    explicacao: "O Estado Geral traduz a impressão de conjunto sobre a gravidade ou aparente higidez do paciente. É classificado na anamnese e ectoscopia em: BEG (Bom Estado Geral), REG (Regular Estado Geral) ou MEG (Mau Estado Geral).",
    explicacaoAlternativas: {
      A: "Incorreto. O IMC é um dado antropométrico numérico isolado.",
      B: "Correto. O estado geral é sumariado formalmente em BEG, REG ou MEG.",
      C: "Incorreto. Não são termos propedêuticos.",
      D: "Incorreto. Não se utiliza estadiamento numérico no estado geral."
    },
    conceitoPrincipal: "Avaliação do Estado Geral (EGG): BEG, REG e MEG.",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q131",
    numero: 131,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "media",
    enunciado: "A Escala de Coma de Glasgow Atualizada (GCS-P) avalia o nível de consciência através de 3 respostas comportamentais, acrescida da reação pupilar. Quais são os 3 parâmetros comportamentais avaliados e qual a pontuação MÍNIMA e MÁXIMA da parte comportamental?",
    alternativas: [
      "A) Reflexo córneo, Frequência respiratória e Pressão arterial; Pontuação de 0 a 10.",
      "B) Abertura Ocular (1-4), Resposta Verbal (1-5) e Resposta Motora (1-6); Pontuação de 3 a 15.",
      "C) Força muscular, Sensibilidade tátil e Marcha; Pontuação de 1 a 100.",
      "D) Diâmetro pupilar, Frequência cardíaca e Tônus muscular; Pontuação de 0 a 15."
    ],
    respostaCorreta: 1,
    explicacao: "A Escala de Coma de Glasgow avalia: 1. Abertura Ocular (1 a 4 pontos); 2. Resposta Verbal (1 a 5 pontos); 3. Resposta Motora (1 a 6 pontos). A soma comportamental varia de um MÍNIMO de 3 pontos (coma profundo sem resposta) até o MÁXIMO de 15 pontos (lucidez completa). Na versão atualizada, subtrai-se a Reatividade Pupilar (0 a 2 pontos).",
    explicacaoAlternativas: {
      A: "Incorreto. Não inclui reflexos de tronco ou sinais vitais.",
      B: "Correto. Abertura ocular (1-4), Resposta verbal (1-5) e Resposta motora (1-6); variação de 3 a 15.",
      C: "Incorreto. Não são os itens de Glasgow.",
      D: "Incorreto. Tônus isolado e diâmetro não compõem a pontuação comportamental base."
    },
    conceitoPrincipal: "Escala de Coma de Glasgow: Abertura Ocular (1-4) + Resposta Verbal (1-5) + Resposta Motora (1-6) = 3 a 15 pontos.",
    source: "Teasdale G et al. - Glasgow Coma Scale Update",
    sourceUrl: "https://www.glasgowcomascale.org/",
    sourceYear: 2023
  },
  {
    id: "q132",
    numero: 132,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "dificil",
    enunciado: "Ao avaliar a Resposta Motora de um paciente com rebaixamento do nível de consciência, o examinador aplica um estímulo doloroso central. O paciente responde com extensão anormal dos membros superiores com adução e pronação dos punhos ('postura de decerebração'). Quantos pontos ele recebe na Resposta Motora da Escala de Glasgow?",
    alternativas: [
      "A) 6 pontos (obedece a comandos)",
      "B) 4 pontos (flexão normal/localiza a dor)",
      "C) 2 pontos (extensão anormal / decerebração)",
      "D) 1 ponto (nenhuma resposta motora)"
    ],
    respostaCorreta: 2,
    explicacao: "Na pontuação da Resposta Motora da Escala de Glasgow: 6 = Obedece a comandos; 5 = Localiza a dor; 4 = Flexão normal de retirada; 3 = Flexão anormal à dor (postura de decorticação); 2 = Extensão anormal à dor (postura de decerebração); 1 = Nenhuma resposta motora.",
    explicacaoAlternativas: {
      A: "Incorreto. 6 é quando obedece a ordens verbais.",
      B: "Incorreto. 4 é retirada em flexão normal.",
      C: "Correto. Postura em extensão anormal (decerebração) vale 2 pontos na resposta motora.",
      D: "Incorreto. 1 é arreflexia motora total."
    },
    conceitoPrincipal: "Pontuação motora em Glasgow: Flexão anormal / Decorticação (3 pontos) vs Extensão anormal / Decerebração (2 pontos).",
    source: "Teasdale G - Glasgow Coma Scale",
    sourceUrl: "https://www.glasgowcomascale.org/",
    sourceYear: 2023
  },
  {
    id: "q133",
    numero: 133,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "media",
    enunciado: "Em relação aos Biotipos ou Tipos Constitucionais do corpo humano, como se caracteriza o indivíduo BREVILÍNEO (ou pícnico) em relação ao Ângulo de Charpy (ângulo inframamário/costal formado pelo apêndice xifoide e cartilagens costais)?",
    alternativas: [
      "A) Ângulo de Charpy menor que 90º (agudo), com tórax longo e pescoço afilado.",
      "B) Ângulo de Charpy maior que 90º (obtuso), com pescoço curto e largo, tórax largo e abdome proeminente.",
      "C) Ângulo de Charpy exatamente reto a 90º em todos os momentos.",
      "D) Ausência completa de ângulo costal."
    ],
    respostaCorreta: 1,
    explicacao: "Os biotipos estruturais dividem-se em: 1. Brevilíneo (pícnico): pescoço curto/grosso, tórax largo/abobadado, manguito muscular denso e ÂNGULO DE CHARPY > 90º (obtuso); 2. Longilíneo (astênico): estipulado por tórax delgado, membros longos e ÂNGULO DE CHARPY < 90º (agudo); 3. Normolíneo (atlético): proporções intermediárias com Ângulo de Charpy de cerca de 90º.",
    explicacaoAlternativas: {
      A: "Incorreto. Ângulo de Charpy agudo (< 90º) define o indivíduo LONGILÍNEO.",
      B: "Correto. Brevilíneo possui Ângulo de Charpy obtuso (> 90º), pescoço curto e tronco avantajado.",
      C: "Incorreto. Define o normolíneo.",
      D: "Incorreto. Anatomicamente impossível em indivíduos hígidos."
    },
    conceitoPrincipal: "Biotipos constitucionais: Brevilíneo (Ângulo de Charpy > 90º) vs Longilíneo (Ângulo de Charpy < 90º) vs Normolíneo (~ 90º).",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q134",
    numero: 134,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "facil",
    enunciado: "Qual a denominação dada à atitude ou posição antálgica assumida espontaneamente no leito por pacientes com pericardite aguda ou grandes derrames pericárdicos, na qual o paciente debruça o tórax sobre os joelhos dobrados para aliviar a dor?",
    alternativas: [
      "A) Posição Ortopneica",
      "B) Posição Genupeitoral (ou da 'Prece Maometana')",
      "C) Opistótono",
      "D) Decúbito lateral em gatilho de espingarda"
    ],
    respostaCorreta: 1,
    explicacao: "A atitude Genupeitoral (ou posição da 'prece maometana') consiste em ajoelhar-se no leito encostando o peito no colchão ou debruçar-se para a frente sobre travesseiros. É típica da pericardite aguda e derrame pericárdico, pois reduz o atrito e a tensão sobre o pericárdio inflamado.",
    explicacaoAlternativas: {
      A: "Incorreto. Ortopneica é sentar-se à beira do leito apoiando as mãos para usar musculatura acessória na insuficiência cardíaca/asma.",
      B: "Correto. Posição Genupeitoral (prece maometana) é clássica da pericardite aguda.",
      C: "Incorreto. Opistótono é contratura espástica em arco dorsal típica do tétano e meningite grave.",
      D: "Incorreto. Posicão em gatilho é hiperextensão do pescoço com flexão de pernas na irritação meningocócica."
    },
    conceitoPrincipal: "Atitude no leito: Posição Genupeitoral (prece maometana) para alívio de pericardite.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q135",
    numero: 135,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "media",
    enunciado: "A observação das feições faciais (fácies) pode fornecer pistas diagnósticas imediatas na ectoscopia. Qual fácies é caracterizada por mímica facial congelada/ausente ('fácies em máscara' ou inexpressiva), pouca frequência de piscar de olhos e olhar fixo?",
    alternativas: [
      "A) Fácies Cushingóide ou em 'Lua Cheia'",
      "B) Fácies Basedowiana (ou Hipertiroideia)",
      "C) Fácies Parkinsoniana",
      "D) Fácies Hipocrática"
    ],
    respostaCorreta: 2,
    explicacao: "A Fácies Parkinsoniana (típica da Doença de Parkinson) é consequência da acinesia e hipocinesia dos músculos da mímica facial. O rosto perde a expressividade emocional (fácies em máscara/imóvel), os olhos piscam raramente e a boca pode permanecer ligeiramente entreaberta com sialorreia.",
    explicacaoAlternativas: {
      A: "Incorreto. Fácies Cushingóide apresenta arredondamento facial ('lua cheia'), giba dorsal e acne por excesso de corticoides.",
      B: "Incorreto. Fácies Basedowiana apresenta exoftalmia (olhos salientes), retração palpebral e olhar assustado.",
      C: "Correto. Fácies Parkinsoniana é a fácies inexpressiva 'em máscara'.",
      D: "Incorreto. Fácies Hipocrática indica gravidade extrema/peritonite (olhos afundados, nariz afilado, suor frio)."
    },
    conceitoPrincipal: "Fácies características: Parkinsoniana (em máscara/inexpressiva) vs Basedowiana (exoftalmia) vs Cushingóide (lua cheia).",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q136",
    numero: 136,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "media",
    enunciado: "Qual fácies endócrina é caracterizada por bochechas rubicundas, acúmulo de gordura facial dando aspecto arredondado em 'lua cheia', associada a estrias violáceas no abdome e giba dorsal?",
    alternativas: [
      "A) Fácies Acromegálica",
      "B) Fácies Cushingóide",
      "C) Fácies Myxedematosa",
      "D) Fácies Renal"
    ],
    respostaCorreta: 1,
    explicacao: "A Fácies Cushingóide decorre do excesso prolongado de glicocorticoides (Síndrome ou Doença de Cushing). Há redistribuição centrípeta da gordura com fácies arredondada em 'lua cheia', eritema malar, hirsutismo e giba gordurosa dorsocervical.",
    explicacaoAlternativas: {
      A: "Incorreto. Acromegálica tem acentuado crescimento dos arcos supraorbitários, proeminência da mandíbula (prognatismo) e macroglossia.",
      B: "Correto. Fácies Cushingóide traduz a fácies em 'lua cheia'.",
      C: "Incorreto. Myxedematosa (hipotireoidismo grave) apresenta rosto edemaciado, sem expressão, cabelos secos e perda da cauda da sobrancelha.",
      D: "Incorreto. Fácies Renal apresenta palidez cutânea e edema periorbital matutino."
    },
    conceitoPrincipal: "Fácies Cushingóide: aspecto em 'lua cheia', pletora facial e acúmulo de gordura centrípeta.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q137",
    numero: 137,
    assunto: "propedeutica",
    subassunto: "Impressão Geral & Consciência",
    dificuldade: "dificil",
    enunciado: "O achado de icterícia (coloração amarelada da pele e mucosas) torna-se clinicamente visível ao exame físico da esclera e freio da língua quando os níveis sanguíneos de Bilirrubina Total ultrapassam aproximadamente:",
    alternativas: [
      "A) 0,2 mg/dL",
      "B) 2,0 a 2,5 mg/dL",
      "C) 15,0 mg/dL",
      "D) 50,0 mg/dL"
    ],
    respostaCorreta: 1,
    explicacao: "O valor normal da bilirrubina total plasmática é até 1,0-1,2 mg/dL. A icterícia subclínica não é visível a olho nu. A icterícia torna-se manifesta ao exame físico (detectada primeiramente na esclera e mucosa sublingual devido à alta afinidade da elastina por bilirrubina) quando os níveis séricos ultrapassam 2,0 a 2,5 mg/dL.",
    explicacaoAlternativas: {
      A: "Incorreto. Nível fisiológico normal.",
      B: "Correto. Icterícia clínica surge quando Bilirrubina Total é > 2,0 - 2,5 mg/dL.",
      C: "Incorreto. Nível de icterícia severa/grave.",
      D: "Incorreto. Nível de hiperbilirrubinemia extrema."
    },
    conceitoPrincipal: "Ponto de corte da icterícia clínica no exame físico: Bilirrubina Total > 2,0 a 2,5 mg/dL.",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },

  // --------------------------------------------------------------------------
  // SEGMENTO CEFÁLICO II (Q138 - Q145)
  // Olhos, Ouvidos, Nariz, Boca, Pescoço/Tireoide
  // --------------------------------------------------------------------------
  {
    id: "q138",
    numero: 138,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "facil",
    enunciado: "Na avaliação das pupilas durante o exame neurológico dos pares cranianos (Nervo Óptico NC II e Nervo Oculomotor NC III), como são denominadas as pupilas que se apresentam com diâmetros ASSIMÉTRICOS (uma dilatada e outra contraída)?",
    alternativas: [
      "A) Isocóricas",
      "B) Mióticas simétricas",
      "C) Midriáticas simétricas",
      "D) Anisocóricas"
    ],
    respostaCorreta: 3,
    explicacao: "A nomenclatura do diâmetro pupilar é: 1. Isocóricas (pupilas de tamanhos iguais em ambos os olhos); 2. Miótica (pupilas contraídas < 2mm); 3. Midriática (pupilas dilatadas > 5mm); 4. ANISOCÓRICAS (pupilas com diâmetros desiguais/assimétricos, sugerindo lesão do NC III ou síndrome de Horner).",
    explicacaoAlternativas: {
      A: "Incorreto. Isocóricas indica tamanhos iguais.",
      B: "Incorreto. Miótica indica contração bilateral.",
      C: "Incorreto. Midriática indica dilatação bilateral.",
      D: "Correto. Pupilas com tamanhos assimétricos são classificadas como ANISOCÓRICAS."
    },
    conceitoPrincipal: "Avaliação pupilar: Isocoria (tamanhos iguais) vs Anisocoria (diâmetros assimétricos/desiguais).",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q139",
    numero: 139,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "media",
    enunciado: "Ao incidir o feixe de luz de uma lanterna diretamente sobre a pupila do olho direito de um paciente hígido, observa-se a contração imediata da pupila direita (Reflexo Fotomotor Direto) e TAMBÉM a contração simultânea da pupila do olho esquerdo não-iluminado. Como se chama a contração da pupila contralateral?",
    alternativas: [
      "A) Reflexo de Acomodação",
      "B) Reflexo Fotomotor Consensual",
      "C) Reflexo Córneo-palpebral",
      "D) Reflexo Cilioespinal"
    ],
    respostaCorreta: 1,
    explicacao: "O Reflexo Fotomotor Consensual é a constrição da pupila do olho oposto ao que recebeu o estímulo luminoso. Isso ocorre porque as fibras aferentes do nervo óptico (NC II) cruzam parcialmente no quiasma óptico e fazem sinapse nos núcleos de Edinger-Westphal em ambos os lados do mesencéfalo, enviando eferência parassimpática bilatetal via nervo oculomotor (NC III).",
    explicacaoAlternativas: {
      A: "Incorreto. Reflexo de acomodação ocorre ao focar objeto próximo (miose + convergência).",
      B: "Correto. Reflexo Fotomotor Consensual é a resposta contrátil da pupila contralateral não-iluminada.",
      C: "Incorreto. Reflexo córneo-palpebral testa NC V (aferência) e NC VII (eferência - piscar).",
      D: "Incorreto. Reflexo cilioespinal medeia dilatação pupilar dolorosa."
    },
    conceitoPrincipal: "Reflexos pupilares: Fotomotor Direto (olho iluminado) vs Fotomotor Consensual (olho contralateral).",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q140",
    numero: 140,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "media",
    enunciado: "Na otoscopia propedêutica, a membrana timpânica normal e sadia apresenta ao exame visual com otoscópio a seguinte característica morfológica e reflexo luminoso:",
    alternativas: [
      "A) Membrana opaca, abaulada, hiperemiada e com vesículas purulentas.",
      "B) Membrana translúcida, cinza-perlácea, com visualização do cabo do martelo e o 'Triângulo Luminoso' (Cone de Luz) projetado no quadrante anteroinferior.",
      "C) Membrana completamente enegrecida e perfurada com restos vegetais.",
      "D) Membrana amarelada retroflexa sem qualquer reflexo luminoso."
    ],
    respostaCorreta: 1,
    explicacao: "A membrana timpânica íntegra normal é semi-transparente, de cor cinza-perlácea (ou brilhante), côncava. Ao foco do otoscópio, é possível identificar a proeminência e o cabo do martelo, além do TRIÂNGULO LUMINOSO (cone de luz de Politzer) refletido no quadrante anteroinferior.",
    explicacaoAlternativas: {
      A: "Incorreto. Caracteriza a Otite Média Aguda (OMA) supurativa.",
      B: "Correto. Membrana cinza-perlácea translúcida com triângulo luminoso anteroinferior é a imagem timpânica fisiológica.",
      C: "Incorreto. Caracteriza otomicose severa ou perfuração timpânica antiga.",
      D: "Incorreto. Indica otite média serosa/secretora."
    },
    conceitoPrincipal: "Otoscopia normal: Membrana timpânica cinza-perlácea, translúcida, com Triângulo Luminoso anteroinferior.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q141",
    numero: 141,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "facil",
    enunciado: "Na palpação bimanual da glândula tireoide pela abordagem posterior (Manobra de Quervain), o examinador posiciona-se atrás do paciente sentado. Qual orientação deve ser dada ao paciente durante a palpação para facilitar a identificação dos lobos e do istmo tireoidiano?",
    alternativas: [
      "A) Realizar uma inspiração profunda e segurar o ar.",
      "B) Deglutir (engolir um gole de água ou saliva).",
      "C) Tossir com força enquanto gira a cabeça para a esquerda.",
      "D) Manter a boca aberta emitindo o som 'Á'."
    ],
    respostaCorreta: 1,
    explicacao: "A glândula tireoide e a cartilagem cricoide estão fixadas à traqueia e à fáscia pré-traqueal. Durante o ato de DEGLUTIR, a traqueia e a tireoide sobem temporariamente. Essa mobilidade à deglutição permite ao examinador sentir a estrutura deslizar sob os dedos, diferenciando a tireoide de massas fixas do pescoço.",
    explicacaoAlternativas: {
      A: "Incorreto. A inspiração não mobiliza verticalmente as estruturas laríngeas.",
      B: "Correto. Pedir para o paciente deglutir eleva a tireoide e facilita a identificação de nódulos ou bócio.",
      C: "Incorreto. A tosse tensiona a musculatura esternocleidomastóidea impedindo a palpação.",
      D: "Incorreto. Usado na oroscopia para observar o palato mole e úvula."
    },
    conceitoPrincipal: "Palpação da tireoide: mobilidade vertical da glândula durante a deglutição.",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q142",
    numero: 142,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "dificil",
    enunciado: "O achado de um linfonodo supraclavicular esquerdo endurecido, indolor e aumentado de volume durante o exame do pescoço é clinicamente conhecido como LINFONODO DE VIRCHOW (ou Sinal de Troisier). Qual a sua suspeita diagnóstica clássica?",
    alternativas: [
      "A) Otite externa bacteriana por Pseudomonas aeruginosa.",
      "B) Neoplasia maligna intra-abdominal ou gástrica metastática (via ducto torácico).",
      "C) Amigdalite estreptocócica aguda exsudativa.",
      "D) Cisto tireoglosso congênito infectado."
    ],
    respostaCorreta: 1,
    explicacao: "O Linfonodo de Virchow (Sinal de Troisier) é o enfartamento ganglionar na fossa supraclavicular esquerda. Como o ducto torácico drena a linfa de quase todo o abdome (incluindo estômago, pâncreas e cólon) e deságua no ângulo venoso jugulossubclávio esquerdo, este linfonodo é um sítio sentinela clássico de metástase de adenocarcinoma gástrico ou abdominal.",
    explicacaoAlternativas: {
      A: "Incorreto. Otite externa drena para linfonodos pré e retroauriculares.",
      B: "Correto. Linfonodo de Virchow supraclavicular esquerdo sinaliza metástase de câncer abdominal (ex: gástrico).",
      C: "Incorreto. Amigdalite drena para linfonodos jugulodigástricos/submandibulares.",
      D: "Incorreto. Cisto tireoglosso é massa mediana anterior da linha média do pescoço."
    },
    conceitoPrincipal: "Sinal de Troisier / Linfonodo de Virchow: linfonodopatia supraclavicular esquerda sugestiva de neoplasia abdominal/gástrica.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q143",
    numero: 143,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "media",
    enunciado: "Durante a inspecao do pescoço a 45º, a observação de Turgência Jugular (distensão das veias jugulares externas acima de 3 a 4 cm do ângulo esternal de Louis) indica o aumento de qual parâmetro hemodinâmico?",
    alternativas: [
      "A) Pressão Venosa Central (PVC) e pressão de enchimento do Átrio Direito (ex: Insuficiência Cardíaca Direita, Pericardite Constritiva ou Tamponamento Cardiaco).",
      "B) Pressão parcial de oxigênio arterial (PaO2).",
      "C) Filtração glomerular renal.",
      "D) Resistência vascular periférica exclusiva dos membros inferiores."
    ],
    respostaCorreta: 0,
    explicacao: "A turgência jugular patológica reflete a transmissão direta da hipertensão venosa atrial direita para as veias jugulares (sem valvas funcionais diretas na cava). É um sinal clássico de sobrecarga de volume ventricular direito, insuficiência cardíaca congestiva, hipertensão pulmonar ou restrição pericárdica.",
    explicacaoAlternativas: {
      A: "Correto. Turgência jugular jugular reflete aumento da Pressão Venosa Central (PVC) e estase em átrio direito.",
      B: "Incorreto. A turgência venosa é um parâmetro pressórico hemodinâmico venoso, não gasométrico.",
      C: "Incorreto. Sem relação direta com ritmo de filtração glomerular.",
      D: "Incorreto. Reflete hemodinâmica central/cavitária direita."
    },
    conceitoPrincipal: "Turgência jugular a 45º: indicador de aumento da Pressão Venosa Central (PVC) e disfunção cardíaca direita.",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  },
  {
    id: "q144",
    numero: 144,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "facil",
    enunciado: "Ao inspecionar a cavidade oral (oroscopia) utilizando um abaixador de língua, o examinador observa palato, úvula e pilares amigdalianos. A hiperemia intensa das amígdalas acompanhada de exsudato purulento esbranquiçado em placas e adenopatia submandibular dolorosa é sugestiva de:",
    alternativas: [
      "A) Amigdalite/Faringite Bacteriana Aguda (ex: por Streptococcus pyogenes / Ecto-B-hemolítico do Grupo A).",
      "B) Carcinoma basocelular do lábio inferior.",
      "C) Leucoplasia pilosa orofaríngea assintomática.",
      "D) Torus palatino fisiológico."
    ],
    respostaCorreta: 0,
    explicacao: "A faringoamigdalite bacteriana exsudativa (causada classicamente pelo Streptococcus pyogenes) manifesta-se por eritema amigdaliano, exsudato pultáceo/purulento nas criptas, petéquias em palato, febre alta e enfartamento de linfonodos submandibulares/cervicais anteriores.",
    explicacaoAlternativas: {
      A: "Correto. Amigdalite bacteriana purulenta por S. pyogenes.",
      B: "Incorreto. Carcinoma no lábio é úlcera crostosa crônica induzida por sol.",
      C: "Incorreto. Leucoplasia pilosa é lesão esbranquiçada lateral da língua por EBV em imunodeficientes.",
      D: "Incorreto. Torus palatino é uma exostose óssea benigna na linha média do palato duro."
    },
    conceitoPrincipal: "Oroscopia: Amigdalite bacteriana purulenta por Streptococcus pyogenes.",
    source: "Bates - Guia de Exame Físico e História Clínica",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/books/NBK321/",
    sourceYear: 2023
  },
  {
    id: "q145",
    numero: 145,
    assunto: "propedeutica",
    subassunto: "Segmento Cefálico II",
    dificuldade: "media",
    enunciado: "Na palpação das cadeias linfáticas da cabeça e do pescoço, qual é a localização anatômica exata do grupo de LINFONODOS SUBMANDIBULARES?",
    alternativas: [
      "A) Na fossa supraclavicular, atrás do músculo esternocleidomastóideo.",
      "B) A meio caminho entre o ângulo da mandíbula e o ápice do mento (queixo), sob a borda inferior do corpo da mandíbula.",
      "C) Logo abaixo do lobo da orelha sobre o processo mastoide.",
      "D) Na linha média anterior sobre o osso hioide."
    ],
    respostaCorreta: 1,
    explicacao: "Os linfonodos submandibulares situam-se medialmente à borda inferior do corpo da mandíbula, entre o ângulo mandibular e a sínfise mentoniana. Eles drenam a mucosa oral, dentes, língua anterior, lábios e bochechas.",
    explicacaoAlternativas: {
      A: "Incorreto. Descrição da cadeia supraclavicular ou cervical posterior.",
      B: "Correto. Linfonodos submandibulares situam-se sob a borda inferior do corpo da mandíbula.",
      C: "Incorreto. Descrição dos linfonodos retroauriculares/mastóideos.",
      D: "Incorreto. Descrição dos linfonodos submentonianos (abaixo do queixo na linha média)."
    },
    conceitoPrincipal: "Anatomia propedêutica das cadeias linfonodais do pescoço: Linfonodos Submandibulares.",
    source: "Porto & Porto - Propedêutica Médica",
    sourceUrl: "https://www.guanabarabook.com.br/",
    sourceYear: 2022
  }
];
