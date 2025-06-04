// backend/server.js

// Import necessary libraries
import express from "express"; // Express helps us create the server
import cors from "cors"; // CORS allows our frontend to connect to the server
import dotenv from 'dotenv'; // dotenv loads secret keys from a .env file
import { OpenAI } from 'openai'; // Import OpenAI to use the AI chatbot

// Load the environment variables (like my API key)
dotenv.config();

// Set the port where the server will run (use 8080 if no PORT is set)
const port = process.env.PORT || 8080;

// Create a new Express application
const app = express();

// Use CORS so different origins (like frontend and backend) can talk to each other
app.use(cors());

// Let the server understand JSON data
app.use(express.json());

// Create a basic route for the home page (optional but nice for testing)
app.get("/", (req, res) => {
  res.send("Welcome to the AI chatbot backend!");
});

// Connect to OpenAI using your secret API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Create a route that will handle chat messages
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body; // Get the chat history from the frontend

  try {
    // Ask OpenAI to create a response based on the messages
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

            Om du inte kan ge ett tillförlitligt svar baserat på dessa källor, svara:
            "Jag är osäker på det. Du kan läsa mer på Livsmedelsverkets hemsida".

            När du svarar, skriv tydligt vilken av källorna informationen kommer från,
            t.ex. "Enligt Livsmedelsverket..." eller "Livsmedelsverket rekommenderar...".

            Håll en varm, lugn och trygg ton. Du är hjälpsam, men försiktig – du gissar aldrig.
          `
        },
        ...messages // Add the user's chat messages after the system instruction
      ],
      model: "gpt-4o-mini", // Choose which AI model to use (you can change this to gpt-3.5-turbo, gpt-4o etc)
    });

    // Send the AI's reply back to the frontend
    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    // If something goes wrong, show an error and send an error response
    console.error("OpenAI-error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
});

// Start the server and listen for requests on the chosen port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
