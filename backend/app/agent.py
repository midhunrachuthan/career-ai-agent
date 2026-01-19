from dotenv import load_dotenv
load_dotenv()  # 👈 MUST be here before Agent is created

from pydantic_ai import Agent
from app.models import CareerPlan

agent = Agent(
    model="openrouter:mistralai/mistral-7b-instruct",
    system_prompt=(
        "You are an expert career mentor for computer science students. "
        "Generate a practical month-by-month learning roadmap."
    )
)
