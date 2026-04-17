import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateLandingPageCopy() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Você é um redator publicitário de alto nível. Crie o conteúdo para uma landing page do "Yolo Group" em Português (Brasil). 
    O Yolo Group é uma empresa focada em inovação em gaming, fintech e blockchain.
    
    Baseie-se nestas seções:
    1. Hero: Título impactante (ex: "Faça a diferença") e subtítulo sobre inovação.
    2. Estatísticas: 4 cartões. 
       - Hubs (7+ locais, sede na Estônia)
       - Fundação (2014)
       - Produtos (30+)
       - Clientes (Milhões)
    3. Ecossistema: Introdução sobre o ecossistema Yolo, focando no cliente como centro do universo.
    4. Marcas: Nomes e uma frase curta para cada: Sportsbet.io, Bitcasino.io, Yolo Investments, Partners.io, Bombay, Hub88, Slots.io, Live88.
    5. Carreiras: Título "Junte-se ao Yoloverse" e convite para ver vagas.
    6. Rodapé: Links institucionais.

    Retorne apenas o JSON com os campos: hero, stats, ecosystem, brands, careers, footer.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          hero: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING }
            },
            required: ["title", "subtitle"]
          },
          stats: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                value: { type: Type.STRING },
                label: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["value", "label", "description"]
            }
          },
          ecosystem: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING }
            },
            required: ["title", "description"]
          },
          brands: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                tagline: { type: Type.STRING }
              },
              required: ["name", "tagline"]
            }
          },
          careers: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              subtitle: { type: Type.STRING },
              buttonText: { type: Type.STRING }
            },
            required: ["title", "subtitle", "buttonText"]
          },
          footer: {
            type: Type.OBJECT,
            properties: {
              links: { type: Type.ARRAY, items: { type: Type.STRING } },
              social: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["links", "social"]
          }
        },
        required: ["hero", "stats", "ecosystem", "brands", "careers", "footer"]
      }
    }
  });

  return JSON.parse(response.text);
}
