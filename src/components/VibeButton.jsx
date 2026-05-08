import React from 'react';

// The VibeButton is a reusable "Lego" piece. 
// We define it once and can use it many times with different data!
const VibeButton = ({ label, emoji, onClick }) => {
  return (
    <button
      // We pass the onClick function so the button knows what to do when clicked
      onClick={onClick}
      // Tailwind classes to create a modern, glass-morphism pill button
      // px-6 py-3: adds space inside the button
      // rounded-full: gives it the "pill" shape
      // bg-white/10: semi-transparent background
      // backdrop-blur-md: creates a frosted glass effect
      // border: adds a subtle thin outline
      // hover:scale-105: makes the button grow slightly when hovered
      // transition-all: ensures all changes (like scale) happen smoothly
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl font-medium"
    >
      {/* Show the emoji passed into this button */}
      <span className="text-xl">{emoji}</span>
      {/* Show the label text, capitalized automatically */}
      <span className="capitalize">{label}</span>
    </button>
  );
};

// We export the component so it can be imported and used in other files
export default VibeButton;
