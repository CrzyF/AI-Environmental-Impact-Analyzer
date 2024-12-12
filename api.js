import { Configuration, OpenAIApi } from "openai";

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

export async function analyzeProduct(data) {
  const prompt = `
    Analyze the following product details for environmental impact:
    - Description: ${data.description}
    - Manufacturing: ${data.manufacturing}
    - Supply Chain: ${data.supplyChain}

    Provide a detailed environmental impact report and a footprint score (1-100).
  `;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 300,
  });

  return response.data.choices[0].text;
}
