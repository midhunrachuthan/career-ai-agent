"use client";

import { useState } from "react";

export default function Home() {
  const [goal, setGoal] = useState("");
  const [skills, setSkills] = useState("");
  const [months, setMonths] = useState(6);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generatePlan = async () => {
    if (!goal.trim() || !skills.trim() || months <= 0) {
      alert("Fill all fields correctly");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      setError("");

      const res = await fetch("http://127.0.0.1:8000/generate-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          goal: goal.trim(),
          current_skills: skills.trim(), // ✅ STRING
          timeframe_months: Number(months),
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText);
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError("Failed to generate plan");
    } finally {
      setLoading(false); // ✅ ALWAYS stops generating
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">
          🎓 Career Mentor AI Agent
        </h1>

        <input
          className="w-full border p-2 mb-3 rounded text-black"
          placeholder="Career Goal (e.g. Full Stack Development)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3 rounded text-black"
          placeholder="Skills (comma separated) e.g. python,react"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4 rounded text-black"
          type="number"
          placeholder="Months"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
        />

        <button
          onClick={generatePlan}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-lg font-semibold"
        >
          {loading ? "Generating..." : "Generate Career Plan"}
        </button>

        {error && (
          <p className="mt-4 text-center text-red-600 font-medium">
            {error}
          </p>
        )}

        {result && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-gray-900 mb-2">
              Roadmap
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              {result.roadmap.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-lg font-bold text-gray-900 mt-4 mb-2">
              Tips
            </h2>
            <ul className="list-disc list-inside text-gray-800">
              {result.tips.map((tip: string, i: number) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
