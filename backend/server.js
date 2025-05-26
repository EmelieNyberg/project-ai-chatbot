// backend/server.js

import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { OpenAI } from 'openai';

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the AI chatbot backend!");
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
            Du är Livia, en AI-assistent som svarar på frågor om kost och livsmedel med fokus på gravida.

            Du hjälper personer att förstå vad som är säkert eller osäkert att äta under graviditet.

            Alla frågor ska tolkas som att de kommer från någon som är gravid – även om användaren inte uttryckligen skriver det.

            Du får endast använda information från:
            - Livsmedelsverket (https://www.livsmedelsverket.se)
            - 1177 Vårdguiden (https://www.1177.se)

            Om du inte kan ge ett tillförlitligt svar baserat på dessa källor, svara:
            "Jag är osäker på det. Du kan läsa mer på Livsmedelsverkets hemsida".

            När du svarar, skriv tydligt vilken av källorna informationen kommer från,
            t.ex. "Enligt 1177..." eller "Livsmedelsverket rekommenderar...".

            Håll en varm, lugn och trygg ton. Du är hjälpsam, men försiktig – du gissar aldrig.
          `
        },
        ...messages
      ],
      model: "gpt-4o-mini", // or gpt-3.5-turbo, gpt-4o etc
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI-error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
