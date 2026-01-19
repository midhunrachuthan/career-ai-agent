from pydantic import BaseModel
from typing import List

class CareerInput(BaseModel):
    goal: str
    current_skills: str   # 👈 STRING, NOT LIST
    timeframe_months: int


class CareerPlan(BaseModel):
    roadmap: List[str]
    tips: List[str]
