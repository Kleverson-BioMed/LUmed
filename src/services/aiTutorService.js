// Serviço de Integração do Tutor Inteligente IA (MedBio AI Tutor)
// Arquitetura preparada para integração futura com Supabase Edge Functions ou API LLM (OpenAI / Gemini / Anthropic)

// Ponto de entrada da API de IA (Configurável via Variáveis de Ambiente / Backend Seguro)
const AI_CONFIG = {
  // ATENÇÃO: Nunca exponha chaves secretas no frontend.
  // Em produção, esta URL deve apontar para uma função servidor (Edge Function / Supabase API)
  apiEndpoint: window.MEDBIO_AI_ENDPOINT || null,
  isMockEnabled: true // fallback para simulação didática no MVP
};

/**
 * Envia uma pergunta ao Tutor Inteligente sobre uma questão específica
 */
export async function queryAITutor({ question, promptType, customPrompt, selectedOption }) {
  // Se houver endpoint configurado, faz chamada real
  if (AI_CONFIG.apiEndpoint && !AI_CONFIG.isMockEnabled) {
    try {
      const response = await fetch(AI_CONFIG.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: question.id,
          enunciado: question.enunciado,
          respostaCorreta: question.respostaCorreta,
          conceitoPrincipal: question.conceitoPrincipal,
          promptType,
          customPrompt,
          selectedOption
        })
      });

      if (!response.ok) throw new Error('Falha na resposta do serviço de IA');
      const data = await response.json();
      return data.reply;
    } catch (err) {
      console.warn('Fallback para modo simulado do Tutor IA:', err);
    }
  }

  // MOCK DIDÁTICO INTELIGENTE (MVP)
  // Simula latência de resposta humana da IA (~600ms)
  await new Promise(resolve => setTimeout(resolve, 600));

  return generateMockAIResponse(question, promptType, customPrompt, selectedOption);
}

function generateMockAIResponse(question, promptType, customPrompt, selectedOption) {
  switch (promptType) {
    case 'why_wrong': {
      const optionLetter = selectedOption || 'A';
      const optionData = question.alternativas.find(a => a.id === optionLetter);
      const explanationText = question.explicacaoAlternativas?.[optionLetter] || 
        `A alternativa ${optionLetter} apresenta uma premissa incorreta sobre a fisiopatologia desta questão.`;

      return `🧠 **Tutor Inteligente MedBio**:

Sobre a **Alternativa ${optionLetter}** ("${optionData ? optionData.texto : ''}"):

${explanationText}

💡 **Dica Acadêmica**:
Para fixar este ponto, lembre-se do conceito central:
*"${question.conceitoPrincipal}"*`;
    }

    case 'explain_beginner': {
      return `🩺 **Explicação Simplificada para Iniciantes**:

Vamos imaginar essa questão sem o jargão complexo!

📌 **O Problema da Questão**:
${question.enunciado}

✨ **O Raciocínio Direto**:
${question.explicacao}

🎯 **A Chave da Questão**:
A resposta correta é a **Alternativa ${question.respostaCorreta}**. O segredo está em focar em: *"${question.conceitoPrincipal}"*.`;
    }

    case 'core_concept': {
      return `🔑 **Conceito Chave para Dominar**:

Para acertar esta e outras questões similares em provas de Residência e Fisiologia Médica, você precisa dominar:

**${question.conceitoPrincipal}**

📚 **Resumo Didático**:
1. ${question.assunto} → ${question.subassunto}.
2. Gabarito comentado: **${question.respostaCorreta}**.
3. Raciocínio Clínico: ${question.explicacao}`;
    }

    case 'clinical_example': {
      return `🏥 **Exemplo Clínico Aplicado à Medicina**:

**Caso Clínico Simulado**:
Um paciente dá entrada na emergência com quadro compatível com alterações no assunto **${question.assunto}**.

Ao analisar a bioquímica desse paciente:
- O achado fisiológico crucial corresponde exatamente ao cobrado na questão: *"${question.conceitoPrincipal}"*.
- A conduta médica e a interpretação diagnóstica dependem de reconhecer por que a **Alternativa ${question.respostaCorreta}** é o gabarito correto: ${question.explicacao.slice(0, 150)}...`;
    }

    case 'similar_question': {
      return `📝 **Questão Similar para Treinar**:

**Enunciado Adaptado**:
"Considerando o assunto de *${question.assunto}*, um estudante de medicina investiga a alteração no subassunto *${question.subassunto}*. Qual das alternativas abaixo expressa o conceito fundamental correto?"

A) [Opção incorreta baseada no distrator A]
B) [Opção correta com o mesmo conceito: ${question.conceitoPrincipal}]
C) [Opção incorreta baseada no distrator C]
D) [Opção incorreta baseada no distrator D]

👉 *Gabarito: B. O conceito aplicado permanece sendo: ${question.conceitoPrincipal}.*`;
    }

    case 'custom':
    default: {
      return `👨‍⚕️ **Tutor MedBio**:

Você perguntou: *"${customPrompt || 'Explique esta questão'}"*

Para a Questão ${question.numero} (${question.assunto}):
- **Gabarito**: ${question.respostaCorreta}
- **Explicação**: ${question.explicacao}
- **Ponto Fundamental**: ${question.conceitoPrincipal}`;
    }
  }
}
