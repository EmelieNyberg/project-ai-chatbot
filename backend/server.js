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
  res.send("Welcome to the AI chatbot beckend!");
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
            Du är en kunnig AI som hjälper användare.
          `
        },
        ...messages
      ],
      model: "gpt-4o-mini", // or gpt-3.5-turbo, gpt-4o etc
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error("OpenAI-fel:", err);
    res.status(500).json({ error: "Något gick fel." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
