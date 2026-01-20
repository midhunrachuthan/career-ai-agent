# 🎓 Career Mentor AI Agent

A full-stack Generative AI application that helps users create a **personalized career roadmap** based on their career goal, current skills, and available time.  
The system uses a **Pydantic AI–powered agent** to generate structured, validated, and actionable career guidance.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://<your-frontend-url>.vercel.app  
- **Backend API (Render):** https://<your-backend-url>.onrender.com  
- **API Docs (Swagger):** https://<your-backend-url>.onrender.com/docs  

---

## 🧠 Problem Statement

Many students and early professionals struggle to decide:
- *What should I learn next?*
- *How do I plan my learning over time?*
- *How do I turn my current skills into a clear career roadmap?*

Generic advice online is often unstructured, overwhelming, or not personalized.

---

## 💡 Solution

**Career Mentor AI Agent** solves this by:
- Taking a user’s **career goal**
- Understanding their **current skills**
- Respecting their **available time (months)**
- Generating a **clear, step-by-step roadmap and practical tips**

The AI agent ensures:
- Structured outputs
- Strong validation
- Reliable and repeatable responses

---

## 🏗️ System Architecture

### Frontend
- **Next.js (App Router)**
- Clean, minimal UI
- Proper loading and error states
- User-friendly form and results display

### Backend
- **FastAPI**
- **Pydantic AI** for agent orchestration
- OpenRouter free model usage
- Strict request validation using Pydantic models

### AI Layer
- Built using **Pydantic AI**
- Uses an OpenRouter-hosted free LLM
- Produces deterministic, structured outputs

---

## 🔁 User Flow

1. User enters:
   - Career goal (e.g., Full Stack Development)
   - Current skills (e.g., Python, React)
   - Timeframe in months
2. Frontend sends validated request to backend
3. Pydantic AI agent processes the input
4. Backend returns:
   - Monthly learning roadmap
   - Practical career tips
5. Frontend displays results clearly

---

## 📦 Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- Python
- FastAPI
- Pydantic
- Pydantic AI
- Uvicorn

### AI Provider
- OpenRouter (Free Model)

---

## 🧪 API Example

**POST** `/generate-plan`

### Request Body
```json
{
  "goal": "Full Stack Development",
  "skills": ["python", "react"],
  "timeframe_months": 6
}
