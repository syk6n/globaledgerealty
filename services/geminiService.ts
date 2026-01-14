import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'FAKE_API_KEY_FOR_DEVELOPMENT' });

export const askInvestmentAdvisor = async (question: string): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    const systemInstruction = `
      You are an expert Real Estate Investment Advisor for 'Global Edge Realty', a premium agency founded by Mohd. Shaukat Ali.
      Your tone is professional, luxurious, encouraging, yet factual.
      Target audience: Investors from India and Dubai.
      Key selling points to mention when relevant:
      - High ROI (6-10% rental yields).
      - Tax-free income.
      - 10-year Golden Visa opportunities.
      - Safety and stability of the UAE.
      - Future growth projections (2030 vision).
      
      Keep answers concise (under 150 words) and persuasive.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I apologize, but I am currently unable to access the latest market data. Please contact our team directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI advisor is momentarily offline. Please fill out the contact form for a personalized consultation.";
  }