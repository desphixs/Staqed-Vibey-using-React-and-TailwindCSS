import React, { useState } from 'react'
// Import our reusable VibeButton component from its own file
import VibeButton from './components/VibeButton'

const VIBES = {
  neutral: {
    emoji: "🧘",
    color: "bg-slate-100",
    advice: "How are you feeling right now?",
    textColor: "text-slate-600",
  },
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
  // We use 'useState' to give our app a memory!
  // 'currentVibe' holds the current mood data, and 'setCurrentVibe' is the function to change it.
  // We start with the 'neutral' vibe from our VIBES object.
  const [currentVibe, setCurrentVibe] = useState(VIBES.neutral);

  // This function handles changing the vibe. 
  // It takes the new vibe data and updates our state.
  const handleVibeChange = (vibeData) => {
    // We log the change to the console so we can see it working in the background!
    console.log("Vibe changed to:", vibeData.emoji);
    // Update the state with the new vibe information
    setCurrentVibe(vibeData);
  };

  return (
    <div className="text-indigo-500 text-4xl font-bold text-center w-full h-screen flex items-center justify-center">Project</div>
  )
}

export default App