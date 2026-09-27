// LUmed — Plataforma Inteligente de Estudos Médicos (Autocontido Sem Dependência de Server HTTP / CORS)
// Funciona 100% nativamente abrindo o index.html direto no navegador

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
    "Módulo 1: Introdução à Microbiologia",
    "Módulo 2: Introdução à Virologia",
    "Módulo 3: Vírus Influenza (Gripe)",
    "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios"
  ];

  // Importar banco de questões do arquivo de dados ou utilizar lista consolidada
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
      id: 36, numero: 36, assunto: "Módulo 1: Introdução à Microbiologia", subassunto: "Diferenciação Celular dos Microrganismos", dificuldade: "Fácil",
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
      id: 37, numero: 37, assunto: "Módulo 1: Introdução à Microbiologia", subassunto: "Microbiota Humana e Proteção contra Patógenos", dificuldade: "Médio",
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
      id: 41, numero: 41, assunto: "Módulo 2: Introdução à Virologia", subassunto: "Envelope Lipídico Viral e Sensibilidade", dificuldade: "Médio",
      enunciado: "Os vírus são agentes acelulares considerados parasitas intracelulares obrigatórios. Em relação aos vírus ENVELOPADOS quando comparados aos NÃO ENVELOPADOS (nua), qual propriedade físico-química é verdadeira?",
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
      id: 42, numero: 42, assunto: "Módulo 2: Introdução à Virologia", subassunto: "Vacinas de Poliomielite: Salk vs. Sabin", dificuldade: "Médio",
      enunciado: "O Programa Nacional de Imunizações (PNI) utilizou historicamente duas vacinas fundamentais contra a Poliomielite: Salk e Sabin. Qual a diferença biológica crucial entre a Vacina Salk e a Sabin?",
      alternativas: [
        { id: "A", texto: "Salk é vírus vivo atenuado oral (OPV); Sabin é poliovírus inativado injetável (IPV)." },
        { id: "B", texto: "Salk utiliza poliovírus inativado (IPV - injetável); Sabin utiliza poliovírus vivo atenuado (OPV - oral / gotinha)." },
        { id: "C", texto: "Ambas utilizam vetores adenovirais não replicantes." },
        { id: "D", texto: "Sabin utiliza vacina de mRNA mensageiro." }
      ],
      respostaCorreta: "B",
      explicacao: "Jonas Salk desenvolveu a vacina de vírus inativados/mortos por formaldeído (IPV - injetável). Albert Sabin desenvolveu a vacina de vírus vivo atenuado (OPV - oral / 'gotinha').",
      explicacaoAlternativas: { A: "Incorreta.", B: "Correta. Salk = Inativada Injetável (IPV); Sabin = Oral Atenuada (OPV).", C: "Incorreta.", D: "Incorreta." },
      conceitoPrincipal: "Diferenciação metodológica entre a vacina inativada Salk (IPV) e a vacina atenuada Sabin (OPV)."
    },

    // Módulo 3: Vírus Influenza (Gripe) (Q46 - Q50)
    {
      id: 46, numero: 46, assunto: "Módulo 3: Vírus Influenza (Gripe)", subassunto: "Hemaglutinina e Neuraminidase", dificuldade: "Difícil",
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
      id: 47, numero: 47, assunto: "Módulo 3: Vírus Influenza (Gripe)", subassunto: "Antigenic Drift vs. Antigenic Shift", dificuldade: "Difícil",
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
      id: 48, numero: 48, assunto: "Módulo 3: Vírus Influenza (Gripe)", subassunto: "Tratamento Antiviral com Oseltamivir", dificuldade: "Médio",
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
      id: 51, numero: 51, assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "Rinovírus e Tropismo Térmico", dificuldade: "Médio",
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
      id: 52, numero: 52, assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "VSR e Formação de Sincícios via Proteína F", dificuldade: "Difícil",
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
      id: 53, numero: 53, assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios", subassunto: "SARS-CoV-2: Receptor ACE2 e Protease TMPRSS2", dificuldade: "Difícil",
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

  // 2. GUIAS DE ESTUDO LUmed (Bioquímica + Microbiologia/Virologia)
  const STUDY_MATERIALS = [
    {
      id: 1, assunto: "Introdução às biomoléculas e ao metabolismo", descricao: "Bioenergética, acoplamento de ATP, compartimentação celular e regulação por insulina/glucagon.",
      resumo: "O metabolismo celular se divide em catabolismo e anabolismo. O acoplamento com a hidrólise de ATP impulsiona reações endergônicas desfavoráveis.",
      conceitosFundamentais: ["Fluxo metabólico expressa a rotatividade real da via.", "ATP atua como moeda energética acopladora.", "AMPK é o sensor metabólico de depleção energética."],
      relacaoMedicina: "Fundamental no acompanhamento da Síndrome Metabólica e mecanismo da Metformina.",
      errosComuns: ["Achar que enzimas alteram o Keq ou o ΔG."], questoesRelacionadas: [1, 2, 3, 4, 5]
    },
    {
      id: 8, assunto: "Módulo 1: Introdução à Microbiologia", descricao: "Conceito, escopo, diferenciação celular dos microrganismos (bactérias, fungos, protozoários, vírus) e microbiota humana.",
      resumo: "A Microbiologia é a ciência dedicada ao estudo dos organismos microscópicos. Compreende a diferenciação entre procariontes (bactérias com peptidoglicano), eucariontes (fungos com quitina, protozoários) e agentes acelulares (vírus). A microbiota humana atua na exclusão competitiva de patógenos e síntese de vitaminas K e B12.",
      conceitosFundamentais: ["Bactérias: Procariontes com parede de peptidoglicano.", "Fungos: Eucariontes com parede de quitina.", "Microbiota: Proteção por exclusão competitiva."],
      relacaoMedicina: "Diagnóstico infeccioso, antibiogramas e prevenção de infecções hospitalares.",
      errosComuns: ["Confundir bactérias (procariontes) com fungos (eucariontes)."], questoesRelacionadas: [36, 37]
    },
    {
      id: 9, assunto: "Módulo 2: Introdução à Virologia", descricao: "Propriedades virais, genoma, capsídeo, simetrias, envelope lipídico, marcos históricos e vacinas de Poliomielite (Salk vs. Sabin).",
      resumo: "Vírus são elementos genéticos acelulares. Vírus envelopados possuem bicamada lipídica da célula hospedeira, tornando-se altamente sensíveis a detergentes, sabão, álcool 70% e calor. Destacam-se as vacinas de pólio: Salk (IPV - inativada injetável) e Sabin (OPV - atenuada oral).",
      conceitosFundamentais: ["Vírion: Partícula viral madura infectante.", "Envelope lipídico: Confere alta sensibilidade a álcool 70% e sabão.", "Salk = IPV (inativada); Sabin = OPV (atenuada oral)."],
      relacaoMedicina: "Base para higienização de mãos e entendimento do PNI.",
      errosComuns: ["Achar que vírus envelopados são mais resistentes que não envelopados."], questoesRelacionadas: [41, 42]
    },
    {
      id: 10, assunto: "Módulo 3: Vírus Influenza (Gripe)", descricao: "Orthomyxoviridae, Hemaglutinina, Neuraminidase, Canal M2, Antigenic Drift vs. Shift e Oseltamivir.",
      resumo: "O vírus Influenza A/B possui genoma -ssRNA segmentado. A Hemaglutinina (HA) medeia a entrada. A Neuraminidase (NA) cliva o ácido siálico para liberação. Deriva Antigênica (Drift) por mutações pontuais causa epidemias sazonais. Salto Antigênico (Shift) por rearranjo genético causa PANDEMIAS. Oseltamivir inibe a Neuraminidase.",
      conceitosFundamentais: ["HA = Ligação e fusão; NA = Liberar vírions.", "Antigenic Drift = Mutações sazonais; Antigenic Shift = Rearranjo pandêmico.", "Oseltamivir = Inibidor da Neuraminidase."],
      relacaoMedicina: "Manejo da Síndrome Gripal e prescrição de Tamiflu nas primeiras 48h.",
      errosComuns: ["Confundir Drift (sazonal) com Shift (rearranjo pandêmico)."], questoesRelacionadas: [46, 47, 48]
    },
    {
      id: 11, assunto: "Módulo 4: Síndromes Gripais e Principais Vírus Respiratórios", descricao: "Síndrome Gripal, Rinovírus (ICAM-1/33-35°C), Adenovírus, VSR (Proteína F/Sincícios/Abrysvo/Palivizumabe) e SARS-CoV-2 (Spike/ACE2/TMPRSS2).",
      resumo: "Rinovírus causa resfriado replicando a 33-35°C no nariz. VSR causa Bronquiolite em lactentes via Proteína F que forma SINCÍCIOS multinucleados. SARS-CoV-2 liga a proteína Spike (S) ao receptor ACE2 com clivagem por TMPRSS2, gerando tempestade inflamatória.",
      conceitosFundamentais: ["Rinovírus: Replicação otimizada a 33-35°C no nariz.", "VSR: Proteína F gera Sincícios multinucleados.", "SARS-CoV-2: Spike -> Receptor ACE2 + Protease TMPRSS2."],
      relacaoMedicina: "Abordagem da Bronquiolite Pediátrica, profilaxia com anticorpos monoclonais e manejo da COVID-19.",
      errosComuns: ["Esquecer a formação de sincícios pelo VSR."], questoesRelacionadas: [51, 52, 53]
    }
  ];

  // 3. ARMAZENAMENTO LOCAL (STORAGE)
  const STORAGE_KEYS = {
    USER_ANSWERS: 'lumed_user_answers_v2',
    REVISION_ITEMS: 'lumed_revision_items_v2',
    SIMULATED_EXAMS: 'lumed_simulated_exams_v2'
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
        return { hasWeakPoints: false, title: "Nenhum ponto fraco detectado ainda", message: "Comece a praticar para mapear seus tópicos prioritários no LUmed.", sugestao: "Inicie por Microbiologia ou Bioquímica." };
      }
      return { hasWeakPoints: false, title: "Excelente aproveitamento!", message: "Seus acertos estão elevados em todas as matérias praticadas.", sugestao: "Mantenha a rotina de repetição espaçada." };
    }

    const worst = [...weakTopics].sort((a, b) => a.percentual - b.percentual)[0];
    const mat = STUDY_MATERIALS.find(m => m.assunto === worst.assunto);
    return { hasWeakPoints: true, title: `Ponto de atenção: ${worst.assunto}`, message: `Aproveitamento de ${worst.percentual}% (${worst.erros} erro(s) em ${worst.totalRespondidas} questões).`, sugestao: mat ? `Sugestão: Revise ${mat.conceitosFundamentais[0]}` : "Revise este módulo no guia." };
  }

  // 4. TUTOR INTELIGENTE IA MOCK (LUmed AI)
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

  // 5. ESTADO GLOBAL LUmed
  const state = {
    activeTab: 'dashboard',
    questionState: { currentFilter: 'all', currentQuestionIndex: 0, selectedOption: null, isConfirmed: false, confirmedResult: null },
    examState: { isRunning: false, isFinished: false, selectedTopic: 'all', questionCount: 10, questions: [], currentIndex: 0, answers: {} },
    studyState: { selectedTopicId: 8 },
    aiTutorState: { isOpen: false, activeQuestion: null, selectedOption: null, chatHistory: [], isLoading: false }
  };

  // 6. RENDERIZADORES DE COMPONENTES HTML (Com type="button" explícito)

  function renderNavbarHTML() {
    const stats = getPerformanceStats();
    const pendingCount = getPendingRevisions().length;

    return `
      <header class="sticky top-0 z-30 glass-panel border-b border-slate-200">
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
            <button type="button" onclick="window.medbioNav('review')" class="relative px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'review' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i> Revisão
              ${pendingCount > 0 ? `<span class="px-1.5 py-0.5 text-xs bg-amber-500 text-white rounded-full font-bold">${pendingCount}</span>` : ''}
            </button>
            <button type="button" onclick="window.medbioNav('exam')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'exam' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="file-text" class="w-4 h-4"></i> Simulado
            </button>
            <button type="button" onclick="window.medbioNav('study')" class="px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2 ${state.activeTab === 'study' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}">
              <i data-lucide="book-open" class="w-4 h-4"></i> Estudar
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
        <button type="button" onclick="window.medbioNav('review')" class="relative flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'review' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="rotate-ccw" class="w-5 h-5 mb-0.5"></i><span>Revisão</span>
          ${pendingCount > 0 ? `<span class="absolute top-0 right-2 w-2 h-2 bg-amber-500 rounded-full"></span>` : ''}
        </button>
        <button type="button" onclick="window.medbioNav('exam')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'exam' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="file-text" class="w-5 h-5 mb-0.5"></i><span>Simulado</span>
        </button>
        <button type="button" onclick="window.medbioNav('study')" class="flex flex-col items-center justify-center w-14 py-1 text-xs ${state.activeTab === 'study' ? 'text-blue-600 font-bold' : 'text-slate-500'}">
          <i data-lucide="book-open" class="w-5 h-5 mb-0.5"></i><span>Estudar</span>
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
                Bioquímica Médica, Microbiologia, Virologia e Síndromes Gripais com tutor inteligente, correções passo a passo e repetição espaçada.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button type="button" onclick="window.medbioNav('questions')" class="px-5 py-3 rounded-2xl bg-white text-blue-700 font-bold text-sm hover:bg-blue-50 transition-all shadow-md flex items-center gap-2">
                <i data-lucide="play-circle" class="w-4 h-4 text-blue-600"></i><span>Resolver questões</span>
              </button>
              <button type="button" onclick="window.medbioNav('study')" class="px-5 py-3 rounded-2xl bg-blue-800/60 hover:bg-blue-800/80 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2">
                <i data-lucide="book-open" class="w-4 h-4"></i><span>Guias Teóricos</span>
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase">Questões Feitas</span>
              <div class="p-2 rounded-xl bg-blue-50 text-blue-600"><i data-lucide="file-check-2" class="w-5 h-5"></i></div>
            </div>
            <div class="mt-3 flex items-baseline gap-2">
              <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${stats.questoesUnicasRespondidas}</span>
              <span class="text-xs text-slate-500">/ ${QUESTIONS.length} totais</span>
            </div>
            <div class="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div class="bg-blue-600 h-full rounded-full" style="width: ${Math.round((stats.questoesUnicasRespondidas / QUESTIONS.length) * 100)}%"></div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase">Precisão</span>
              <div class="p-2 rounded-xl bg-emerald-50 text-emerald-600"><i data-lucide="award" class="w-5 h-5"></i></div>
            </div>
            <div class="mt-3 flex items-baseline gap-2">
              <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${stats.percentualGeral}%</span>
              <span class="text-xs text-emerald-600 font-medium">${stats.totalAcertos} acerto(s)</span>
            </div>
            <div class="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div class="bg-emerald-500 h-full rounded-full" style="width: ${stats.percentualGeral}%"></div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase">Questões Erradas</span>
              <div class="p-2 rounded-xl bg-red-50 text-red-600"><i data-lucide="x-circle" class="w-5 h-5"></i></div>
            </div>
            <div class="mt-3 flex items-baseline gap-2">
              <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${stats.totalErros}</span>
              <span class="text-xs text-slate-500">para revisar</span>
            </div>
            <p class="mt-3 text-xs text-slate-500">${stats.totalErros > 0 ? 'Foque nestas falhas para evoluir' : 'Nenhuma pendente!'}</p>
          </div>

          <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-slate-500 uppercase">Revisão Hoje</span>
              <div class="p-2 rounded-xl bg-amber-50 text-amber-600"><i data-lucide="rotate-ccw" class="w-5 h-5"></i></div>
            </div>
            <div class="mt-3 flex items-baseline gap-2">
              <span class="text-2xl md:text-3xl font-extrabold text-slate-900">${pendingRevisions.length}</span>
              <span class="text-xs text-amber-600 font-bold">conceitos</span>
            </div>
            <button type="button" onclick="window.medbioNav('review')" class="mt-3 text-xs font-bold text-blue-600 flex items-center gap-1">
              <span>Acessar fila</span><i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>

        <!-- Seus Pontos Fracos -->
        <div class="bg-white rounded-3xl p-6 border ${weakPoints.hasWeakPoints ? 'border-amber-300 bg-amber-50/20' : 'border-slate-200'} shadow-sm">
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-2xl ${weakPoints.hasWeakPoints ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'} shrink-0">
              <i data-lucide="${weakPoints.hasWeakPoints ? 'alert-triangle' : 'sparkles'}" class="w-6 h-6"></i>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-bold uppercase ${weakPoints.hasWeakPoints ? 'text-amber-700' : 'text-blue-700'}">Diagnóstico LUmed</span>
                ${weakPoints.hasWeakPoints ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-200 text-amber-900">Atenção</span>` : ''}
              </div>
              <h3 class="text-lg font-bold text-slate-900 mt-1">${weakPoints.title}</h3>
              <p class="text-sm text-slate-600 mt-1 leading-relaxed">${weakPoints.message}</p>
              <div class="mt-3 p-3 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 flex items-center justify-between gap-3">
                <span>${weakPoints.sugestao}</span>
                <button type="button" onclick="window.medbioNav('questions')" class="shrink-0 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                  Praticar agora
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Desempenho por Assunto -->
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-lg font-bold text-slate-900">Desempenho por Módulo</h2>
              <p class="text-xs text-slate-500">Bioquímica, Microbiologia, Virologia e Síndromes Gripais</p>
            </div>
            <button type="button" onclick="window.medbioNav('questions')" class="text-xs font-bold text-blue-600 flex items-center gap-1">
              <span>Ver todas</span><i data-lucide="chevron-right" class="w-4 h-4"></i>
            </button>
          </div>
          <div class="space-y-4">
            ${stats.desempenhoPorAssunto.map(t => {
              let color = 'bg-slate-300';
              let textC = 'text-slate-500';
              if (t.totalRespondidas > 0) {
                if (t.percentual >= 80) { color = 'bg-emerald-500'; textC = 'text-emerald-700'; }
                else if (t.percentual >= 60) { color = 'bg-blue-600'; textC = 'text-blue-700'; }
                else { color = 'bg-red-500'; textC = 'text-red-700'; }
              }
              return `
                <div class="space-y-1.5">
                  <div class="flex justify-between text-xs md:text-sm">
                    <span class="font-semibold text-slate-800 truncate max-w-md">${t.assunto}</span>
                    <span class="font-bold ${textC}">${t.totalRespondidas > 0 ? `${t.percentual}% (${t.acertos}/${t.totalRespondidas})` : 'Não iniciado'}</span>
                  </div>
                  <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                    <div class="${color} h-full rounded-full" style="width: ${t.totalRespondidas > 0 ? t.percentual : 0}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  function renderQuestionsHTML() {
    const { currentFilter, currentQuestionIndex, selectedOption, isConfirmed, confirmedResult } = state.questionState;
    const userAns = getUserAnswers();

    let filtered = QUESTIONS;
    if (currentFilter === 'wrong') {
      const wrongIds = userAns.filter(a => !a.isCorrect).map(a => a.questionId);
      filtered = QUESTIONS.filter(q => wrongIds.includes(q.id));
    } else if (currentFilter === 'unanswered') {
      const ansIds = userAns.map(a => a.questionId);
      filtered = QUESTIONS.filter(q => !ansIds.includes(q.id));
    } else if (currentFilter !== 'all') {
      filtered = QUESTIONS.filter(q => q.assunto === currentFilter);
    }

    if (filtered.length === 0) {
      return `
        <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center max-w-xl mx-auto my-12 animate-fade-in">
          <div class="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <i data-lucide="check-circle-2" class="w-8 h-8"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Nenhuma questão nesta categoria!</h3>
          <p class="text-sm text-slate-500 mt-2">Você respondeu todas as questões desta seção ou não há erros registrados.</p>
          <button type="button" onclick="window.medbioSetQuestionFilter('all')" class="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm">
            Ver todas as questões
          </button>
        </div>
      `;
    }

    const safeIdx = Math.min(Math.max(currentQuestionIndex, 0), filtered.length - 1);
    const q = filtered[safeIdx];
    const isCorrect = selectedOption === q.respostaCorreta;

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <i data-lucide="filter" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs font-bold text-slate-500 uppercase">Filtrar:</span>
            <select onchange="window.medbioSetQuestionFilter(this.value)" class="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700">
              <option value="all" ${currentFilter === 'all' ? 'selected' : ''}>Todos os tópicos (${QUESTIONS.length})</option>
              <option value="unanswered" ${currentFilter === 'unanswered' ? 'selected' : ''}>Não respondidas</option>
              <option value="wrong" ${currentFilter === 'wrong' ? 'selected' : ''}>Questões que errei</option>
              <optgroup label="Por Módulo Específico">
                ${TOPICS.map(topic => `<option value="${topic}" ${currentFilter === topic ? 'selected' : ''}>${topic}</option>`).join('')}
              </optgroup>
            </select>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-xs font-semibold text-slate-500">Questão ${safeIdx + 1} de ${filtered.length}</span>
            <div class="flex items-center gap-1">
              <button type="button" onclick="window.medbioPrevQuestion()" ${safeIdx === 0 ? 'disabled class="p-1.5 rounded-lg bg-slate-100 text-slate-300 cursor-not-allowed"' : 'class="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"'}>
                <i data-lucide="chevron-left" class="w-4 h-4"></i>
              </button>
              <button type="button" onclick="window.medbioNextQuestion()" ${safeIdx === filtered.length - 1 ? 'disabled class="p-1.5 rounded-lg bg-slate-100 text-slate-300 cursor-not-allowed"' : 'class="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"'}>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
          <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">Questão ${q.numero || q.id}</span>
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs">${q.subassunto}</span>
              <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${q.dificuldade === 'Fácil' ? 'bg-emerald-50 text-emerald-700' : q.dificuldade === 'Médio' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}">${q.dificuldade}</span>
            </div>
            <button type="button" onclick="window.medbioOpenAITutorForQuestion(${q.id})" class="px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-xs border border-indigo-200 flex items-center gap-1.5">
              <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-600"></i><span>Tutor LUmed</span>
            </button>
          </div>

          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Enunciado</span>
            <p class="text-base md:text-lg font-semibold text-slate-900 leading-relaxed">${q.enunciado}</p>
          </div>

          <div class="space-y-3 pt-2">
            ${q.alternativas.map(alt => {
              let cardStyle = 'border-slate-200 hover:border-blue-400 bg-white';
              let badgeStyle = 'bg-slate-100 text-slate-700';

              if (selectedOption === alt.id) {
                cardStyle = 'border-blue-600 bg-blue-50/60 shadow-sm';
                badgeStyle = 'bg-blue-600 text-white font-bold';
              }

              if (isConfirmed) {
                if (alt.id === q.respostaCorreta) {
                  cardStyle = 'border-emerald-500 bg-emerald-50/80 shadow-sm';
                  badgeStyle = 'bg-emerald-600 text-white font-bold';
                } else if (alt.id === selectedOption && !isCorrect) {
                  cardStyle = 'border-red-500 bg-red-50/80 shadow-sm';
                  badgeStyle = 'bg-red-600 text-white font-bold';
                }
              }

              return `
                <div 
                  type="button"
                  onclick="${isConfirmed ? '' : `window.medbioSelectOption('${alt.id}')`}" 
                  class="option-card p-4 rounded-2xl border ${cardStyle} ${isConfirmed ? 'cursor-default' : 'cursor-pointer'} flex items-start gap-3.5">
                  <span class="w-8 h-8 rounded-xl ${badgeStyle} flex items-center justify-center font-bold text-sm shrink-0">${alt.id}</span>
                  <p class="text-sm md:text-base text-slate-800 font-medium pt-1">${alt.texto}</p>
                </div>
              `;
            }).join('')}
          </div>

          ${!isConfirmed ? `
            <div class="pt-4 flex justify-end">
              <button 
                type="button"
                onclick="window.medbioConfirmAnswer()" 
                ${!selectedOption ? 'disabled class="px-6 py-3 rounded-2xl bg-slate-200 text-slate-400 font-bold text-sm cursor-not-allowed"' : 'class="px-8 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md flex items-center gap-2"'}>
                <i data-lucide="check" class="w-4 h-4"></i><span>Confirmar resposta</span>
              </button>
            </div>
          ` : ''}
        </div>

        ${isConfirmed ? `
          <div class="bg-white rounded-3xl p-6 md:p-8 border ${isCorrect ? 'border-emerald-300' : 'border-red-300'} shadow-lg space-y-6 animate-fade-in">
            <div class="flex items-center gap-4 p-4 rounded-2xl ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-red-50 text-red-900 border border-red-200'}">
              <div class="w-12 h-12 rounded-2xl ${isCorrect ? 'bg-emerald-500' : 'bg-red-500'} text-white flex items-center justify-center shrink-0">
                <i data-lucide="${isCorrect ? 'check-circle-2' : 'x-circle'}" class="w-7 h-7"></i>
              </div>
              <div>
                <h3 class="text-lg font-extrabold">${isCorrect ? 'Resposta Correta! 🎉' : 'Resposta Incorreta.'}</h3>
                <p class="text-xs font-semibold mt-0.5">Sua opção: <span class="font-bold">${selectedOption}</span> • Gabarito Oficial: <span class="font-bold underline">${q.respostaCorreta}</span></p>
              </div>
            </div>

            <div class="space-y-3">
              <h4 class="text-base font-bold text-slate-900">Raciocínio Didático</h4>
              <p class="text-sm md:text-base text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200 leading-relaxed">${q.explicacao}</p>
            </div>

            <div class="space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500">Análise Item por Item</h4>
              <div class="space-y-2">
                ${q.alternativas.map(alt => `
                  <div class="p-3 rounded-xl border ${alt.id === q.respostaCorreta ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-100 bg-slate-50'} text-xs">
                    <span class="font-bold ${alt.id === q.respostaCorreta ? 'text-emerald-700' : 'text-slate-700'}">Alternativa ${alt.id}:</span>
                    <span class="text-slate-600 ml-1">${q.explicacaoAlternativas[alt.id] || ''}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex items-start gap-3">
              <i data-lucide="key" class="w-5 h-5 text-indigo-600 shrink-0 mt-0.5"></i>
              <div>
                <span class="text-xs font-bold uppercase text-indigo-700">Conceito Principal Cobrado</span>
                <p class="text-sm font-semibold mt-1">${q.conceitoPrincipal}</p>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button type="button" onclick="window.medbioOpenAITutorForQuestion(${q.id})" class="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm flex items-center gap-2">
                <i data-lucide="sparkles" class="w-4 h-4"></i><span>Tirar dúvida no Tutor LUmed</span>
              </button>

              <div class="flex items-center gap-2">
                <button type="button" onclick="window.medbioNav('study')" class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs">Revisar este assunto</button>
                <button type="button" onclick="window.medbioNextQuestion()" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-1.5">
                  <span>Próxima questão</span><i data-lucide="arrow-right" class="w-4 h-4"></i>
                </button>
              </div>
            </div>
          </div>
        ` : ''}
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
          <div class="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm text-center max-w-xl mx-auto my-6">
            <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <i data-lucide="sparkles" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900">Sua fila de revisão está limpa! 🎉</h3>
            <p class="text-sm text-slate-500 mt-2">Você revisou todos os conceitos agendados para hoje.</p>
            <button type="button" onclick="window.medbioNav('questions')" class="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm">Resolver novas questões</button>
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

            <button type="button" onclick="window.medbioStartExam()" class="w-full py-4 rounded-2xl bg-blue-600 text-white font-extrabold text-base shadow-lg flex items-center justify-center gap-2">
              <i data-lucide="play" class="w-5 h-5"></i><span>Começar Simulado</span>
            </button>
          </div>
        </div>
      `;
    }

    if (isRunning) {
      const q = questions[currentIndex];
      return `
        <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
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

  function renderStudyHTML() {
    const activeMat = STUDY_MATERIALS.find(m => m.id === state.studyState.selectedTopicId) || STUDY_MATERIALS[0];

    return `
      <div class="space-y-6 animate-fade-in pb-16 md:pb-8">
        <div class="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-2">
              <i data-lucide="book-open" class="w-3.5 h-3.5"></i><span>Conteúdo Programático & Fisiopatologia</span>
            </div>
            <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">Guia Acadêmico LUmed</h1>
          </div>
          <button type="button" onclick="window.medbioSetQuestionFilter('${activeMat.assunto}')" class="px-5 py-3 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-md">
            Praticar questões deste módulo
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div class="lg:col-span-4 space-y-2">
            ${STUDY_MATERIALS.map(mat => `
              <button type="button" onclick="window.medbioSelectStudyTopic(${mat.id})" class="w-full text-left p-4 rounded-2xl border ${mat.id === activeMat.id ? 'border-blue-600 bg-blue-50 font-bold text-blue-900' : 'border-slate-200 bg-white text-slate-700'}">
                <h4 class="text-xs md:text-sm font-bold">${mat.assunto}</h4>
                <p class="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">${mat.descricao}</p>
              </button>
            `).join('')}
          </div>

          <div class="lg:col-span-8 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 class="text-xl md:text-2xl font-extrabold text-slate-900">${activeMat.assunto}</h2>
            
            <div class="space-y-2">
              <span class="text-xs font-bold uppercase text-slate-400">Resumo Acadêmico</span>
              <div class="p-4 bg-slate-50 rounded-2xl text-sm text-slate-700 leading-relaxed">${activeMat.resumo}</div>
            </div>

            <div class="space-y-2">
              <span class="text-xs font-bold uppercase text-slate-400">Conceitos Fundamentais</span>
              <div class="space-y-2">
                ${activeMat.conceitosFundamentais.map(c => `
                  <div class="p-3 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 flex items-start gap-2">
                    <span class="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1"></span>
                    <span>${c}</span>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium text-sm">
              <strong class="block uppercase text-xs text-emerald-700 mb-1">Relação com a Prática Médica:</strong>
              ${activeMat.relacaoMedicina}
            </div>

            ${activeMat.errosComuns && activeMat.errosComuns.length > 0 ? `
              <div class="p-5 rounded-2xl bg-red-50 border border-red-200 text-red-950 text-xs">
                <strong class="block uppercase text-xs text-red-700 mb-1">Erros Comuns e Pegadinhas:</strong>
                <ul class="list-disc list-inside space-y-1">
                  ${activeMat.errosComuns.map(e => `<li>${e}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  function renderAITutorModalHTML() {
    const { isOpen, chatHistory, isLoading } = state.aiTutorState;
    if (!isOpen) return '';

    return `
      <div class="fixed inset-0 z-50 flex justify-end animate-fade-in">
        <div onclick="window.medbioCloseAITutor()" class="ai-drawer-overlay fixed inset-0"></div>
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
              <div class="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
                <p class="font-bold text-indigo-600 mb-1">Como posso te ajudar no LUmed?</p>
                <p>Tire dúvidas sobre Bioquímica, Microbiologia, Virologia ou Síndromes Gripais.</p>
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
              <button type="button" onclick="window.medbioAskAITutor('similar_question')" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 text-slate-700 font-semibold text-xs border">"Questão parecida"</button>
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

  // 7. RENDERIZADOR PRINCIPAL LUmed
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

  // 8. HANDLERS GLOBAIS DE EVENTOS (window.medbio*)
  window.medbioNav = function(tab) { state.activeTab = tab; renderApp(); };
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

  window.medbioSelectStudyTopic = function(id) { state.studyState.selectedTopicId = id; renderApp(); };
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

  // 9. MONTAGEM INICIAL
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp);
  } else {
    renderApp();
  }
})();
