from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models import CareerInput, CareerPlan

app = FastAPI(title="Career Mentor AI Agent")

# ✅ ADD THIS BLOCK
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.post("/generate_plan")
async def generate_plan(data: CareerInput):
    return await generate_career_plan(data)

    skills = [s.strip() for s in data.current_skills.split(",") if s.strip()]

    roadmap = []
    for i, skill in enumerate(skills, start=1):
        roadmap.append(f"Month {i}: Improve {skill}")

    tips = [
        "Practice daily",
        "Build small projects",
        "Revise fundamentals",
        "Apply what you learn",
    ]

    return {
        "roadmap": roadmap,
        "tips": tips,
    }
