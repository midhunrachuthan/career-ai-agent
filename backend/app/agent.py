from pydantic_ai.exceptions import ModelError

async def generate_career_plan(data):
    try:
        result = await agent.run(
            f"""
            Career goal: {data.goal}
            Skills: {data.current_skills}
            Timeframe: {data.timeframe_months} months
            """
        )
        return result.data

    except Exception as e:
        # 🔒 FALLBACK (VERY IMPORTANT)
        months = data.timeframe_months
        skills = data.current_skills.split(",")

        roadmap = []
        for i in range(1, months + 1):
            skill = skills[(i - 1) % len(skills)]
            roadmap.append(f"Month {i}: Focus on {skill.strip()}")

        return {
            "roadmap": roadmap,
            "tips": [
                "Practice daily",
                "Build small projects",
                "Revise fundamentals",
                "Apply what you learn"
            ],
            "note": "Fallback plan used due to model unavailability"
        }
