# Livia – AI Chatbot for Pregnancy Nutrition
This is a project I created independently outside of my bootcamp. I wanted to challenge myself and learn a few new things: working with OpenAI's API, creating a dark mode/light mode toggle, building a side panel component, and giving users the ability to select and save an avatar (persisted in localStorage to survive page reloads).

The chatbot, Livia, is designed to assist pregnant individuals with quick and accurate information about what foods are safe to eat during pregnancy — a topic I personally found confusing when I was pregnant. Official information from the Swedish National Food Agency (Livsmedelsverket) was sometimes contradictory or difficult to navigate. I built Livia to make it easier to access trustworthy, up-to-date information from Livsmedelsverket — and nowhere else — avoiding misinformation from random internet sources.

The result is a friendly chatbot that answers food-related questions for pregnant users, in a warm and reliable tone, always based on official recommendations.

## The Problem

I wanted to build a project where I could:

**Learn to use OpenAI's API** — specifically how to control and restrict what the AI can and cannot say.

**Implement a theme switcher** — allowing users to toggle between light and dark mode.

**Build a side panel** — a reusable UI component that can slide in and out.

**Let users pick and save avatars** — the avatar choice is saved in localStorage so users don't lose their selection after refreshing the page.

**Solve a real-world problem** — providing an easier way for pregnant individuals to access official food guidelines without navigating complex websites.

### Technologies Used

**Frontend:** React.js

**Backend:** Node.js, Express

**API:** OpenAI API (gpt-4o-mini model)

**State Management:** React Hooks (useState, useEffect, useRef)

**Persistence:** localStorage

**Styling:** CSS, responsive design

**Accessibility:** Focus trapping in the side panel (using focus-trap-react)

**Deployment:** Netlify (for frontend) and Render (for the backend)

### Learnings and Reflections

🧠 Controlling the sources GPT uses:
ChatGPT models don’t have direct access to the web unless you use services like ChatGPT Enterprise with the retrieval with web browsing feature.

Other alternatives to limit and control the information the AI uses could be:

Scrape or import content yourself (for example using Puppeteer or RSS feeds), and feed the relevant texts into the prompt context.

Store your own curated information sources and supply them to the model during each query.

If I were to do this project again, I would explore those options instead of relying on the system message alone to control the model. That would give much better control over exactly what information the AI is using.

If I had more time, I would also implement a login system where users could create accounts and save their previous chat history.

## View it live

Frontend: https://livia-chatbot-project.netlify.app/
Backend: https://project-ai-chatbot-backend.onrender.com