import React from 'react'

const VIBES = {
  productive: {
    emoji: "⚡",
    color: "bg-amber-400",
    advice: "Time to crush that to-do list!",
    textColor: "text-slate-900",
  },
  chilled: {
    emoji: "☕",
    color: "bg-sky-300",
    advice: "Take a deep breath and relax.",
    textColor: "text-slate-900",
  },
  energetic: {
    emoji: "🔥",
    color: "bg-rose-500",
    advice: "Let's get moving! You've got this!",
    textColor: "text-white",
  }
};

const App = () => {
  return (
    <div className="text-indigo-500 text-4xl font-bold text-center w-full h-screen flex items-center justify-center">Project</div>
  )
}

export default App