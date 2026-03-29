import React, { useState } from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function FlipCard({ frontContent, backContent, className }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn("relative w-full h-[300px] perspective-1000 cursor-pointer group", className)}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div 
        className={cn(
          "w-full h-full transition-transform duration-700 transform-style-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden glass-card flex flex-col justify-center items-center p-6 text-center group-hover:scale-105 transition-transform duration-300">
          {frontContent}
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden glass-card rotate-y-180 flex flex-col justify-center items-center p-6 text-center group-hover:scale-105 transition-transform duration-300 overflow-y-auto">
          {backContent}
        </div>
      </div>
    </div>
  );
}
