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
    // We use a template literal (backticks) to inject our dynamic color class.
    // 'transition-all duration-700' makes the color change smooth and dreamy.
    <div className={`h-screen transition-all duration-700 flex flex-col items-center justify-center p-6 ${currentVibe.color}`}>
      
      {/* Centered Mood Display */}
      <div className="text-center mb-12">
        {/* We display the current emoji in a massive size */}
        <h1 className="text-9xl mb-4 drop-shadow-2xl">
          {currentVibe.emoji}
        </h1>
        {/* We display the advice text and dynamically change its color for contrast */}
        <p className={`text-2xl font-bold tracking-tight ${currentVibe.textColor}`}>
          {currentVibe.advice}
        </p>
      </div>

      {/* Button Selection Area */}
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        {/* We turn our VIBES object into an array so we can 'map' through it. */}
        {/* This creates one VibeButton for every single vibe we defined earlier! */}
        {Object.entries(VIBES).map(([key, vibe]) => (
          <VibeButton
            key={key} // React needs a unique key for list items
            label={key} // The name of the vibe (productive, chilled, etc.)
            emoji={vibe.emoji} // The emoji for that vibe
            textColor={currentVibe.textColor} // Pass the color that matches the current background!
            onClick={() => handleVibeChange(vibe)} // When clicked, tell the brain to change!
          />
        ))}
      </div>

    </div>
  )
}

export default App