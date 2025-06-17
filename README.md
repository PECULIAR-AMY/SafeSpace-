# SafeSpace-

SafeSpace is a web application built for employees for their mental health 
checks to improve their work by 50% and to increase efficiency there by helping
them ,aintain sanity in their workplace and maintaining work life balance.

 
 Tech Stack (Fullstack)
Frontend: React + TypeScript + Tailwind CSS
Backend: Node.js + Express.js
Database: MongoDB or PostgreSQL
Authentication: Firebase Auth or Auth0
Chatbot Intelligence: OpenAI API (GPT) or Rasa (if you want it local and rule-based)
Hosting: Vercel (frontend), Render/Heroku (backend), MongoDB Atlas/PostgreSQL DB


 Core Features (MVP)
Anonymous Onboarding / Login

Simple sign-in with email or anonymous login (for privacy)

Option to create a user profile with nickname only

Chatbot Interface

React-based chat UI

Backend fetches responses from OpenAI API (or your own NLP rules)

User input sent to backend → processed → response returned

Mental Health Check-in

Daily/weekly mood tracker

Emojis or slider-based mood selection

Prompts like “Tell me how you feel today”

Resources Section

Breathing exercises

Video or blog recommendations

Helpline directory for escalation

Escalation Handling

If user inputs keywords like “depressed”, “anxious”, “overwhelmed” → show support resources or alert system (optional)

Admin Dashboard (Optional)

HR view with anonymous aggregated mood stats (charts)

Track engagement, usage trend (but never individual identity)

2. Frontend (React)
Pages:

/ - Welcome & Login

/chat - Chat UI

/resources - Mental health tools

/admin - (Optional HR dashboard)

Components:

ChatWindow, MessageBubble, MoodTracker, ResourceCard

3. Backend (Node.js + Express)
Routes:

POST /chat → handles messages to chatbot

GET /resources → returns curated mental health tools

POST /mood → saves mood rating to DB

GET /admin/mood-stats → returns aggregated mood data

Integrate OpenAI API or rule-based NLP

4. Database Schema Example (MongoDB)
js
Copy
Edit
User: {
  id, nickname, email (optional), createdAt
}

ChatMessage: {
  userId, message, response, timestamp
}

MoodEntry: {
  userId, moodLevel (1–5), note, timestamp
}
5. Deployment
Frontend: Vercel

Backend: Render or Railway

DB: MongoDB Atlas

Add environment variables securely (OpenAI key, DB URI, etc.)

