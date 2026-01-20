🚀 Career Mentor AI Agent

Full-Stack Generative AI Agent built with Pydantic AI + Next.js

🔍 Problem Statement

Students and early-career professionals often struggle to create a clear, structured career roadmap tailored to their goals, current skills, and available time. Most resources are generic and lack personalization.

💡 Solution

Career Mentor AI Agent is a full-stack generative AI application that acts as a personalized career planning agent.
Users input their career goal, existing skills, and timeframe, and the agent generates a custom learning roadmap and actionable tips.

This project demonstrates:

A real-world AI agent use case

Clean full-stack architecture

Strong validation and API design

End-to-end user flow

🧠 How the AI Agent Works

The backend uses Pydantic AI to define structured inputs and outputs.

User inputs are validated using Pydantic models.

The agent orchestrates reasoning to generate:

A month-wise learning roadmap

Practical career tips

The agent is designed to be extensible for future model upgrades.

🛠 Tech Stack
Frontend

Next.js 14

React

Tailwind CSS

Fetch API for backend communication

Backend

FastAPI

Pydantic

Pydantic AI

Python 3.12+

Model Provider

Compatible with OpenRouter free models

Environment-based API key configuration

🧪 Key Features

✅ Clean form-based user input

✅ Real-time validation

✅ Clear roadmap generation

✅ Structured AI outputs

✅ Proper loading & error states

✅ Modular backend architecture

✅ Ready for deployment

📂 Project Structure
career-ai-agent/
│
├── backend/
│   ├── app/
│   │   ├── main.py        # FastAPI entry point
│   │   ├── agent.py       # Pydantic AI agent logic
│   │   ├── models.py      # Pydantic schemas
│   │   └── __init__.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── package.json
│
└── .gitignore

⚙️ Local Setup Instructions
1️⃣ Backend Setup
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload


Backend runs at:

http://127.0.0.1:8000

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:3000

🌐 Deployment

Frontend: Vercel / Netlify

Backend: Render / Railway / Fly.io

Environment variables securely configured
