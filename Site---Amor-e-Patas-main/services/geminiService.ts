import { GoogleGenerativeAI } from "@google/generative-ai";

// CORREÇÃO AQUI: Use o nome completo 'GoogleGenerativeAI'
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || process.env.API_KEY);

export const getPetAdvice = async (userPrompt: string) => {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-pro" }); // Use 'gemini-pro' ou 'gemini-1.5-flash'
    
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      // A config de systemInstruction varia por modelo, mas vamos simplificar o envio
    });
    
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Desculpe, tive um problema ao processar seu pedido. Como posso ajudar com seu pet hoje?";
  }
};
