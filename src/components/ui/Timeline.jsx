import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from './FlipCard';
import { Circle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Timeline({ items, eraColor }) {
  const timelineRef = useRef(null);
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.timeline-item');
      
      items.forEach((item, i) => {
        gsap.fromTo(item, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1, 
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto py-10" ref={timelineRef}>
      {/* Central Line */}
      <div className={cn("absolute left-1/2 transform -translate-x-1/2 w-1 h-full opacity-30", eraColor)} />

      {items.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <div key={index} className={cn("timeline-item relative flex items-center justify-between w-full mb-12", isEven ? "flex-row-reverse" : "")}>
            <div className="w-5/12" />
            
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <div className={cn("w-6 h-6 rounded-full border-4 z-10 flex items-center justify-center transition-transform hover:scale-150 cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.5)] bg-black", eraColor)}>
                <Circle size={8} className="fill-current" />
              </div>
            </div>

            <div className={cn("w-5/12 glass-card border-l-4 overflow-hidden group/card shadow-2xl", eraColor, "hover:scale-105 transition-all duration-300 font-sans p-0 flex flex-col")}>
              {item.image && (
                <div className="w-full h-32 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/0 transition-colors z-10" />
                  <img src={item.image} alt={item.event} className="w-full h-full object-cover transform scale-100 group-hover/card:scale-110 transition-transform duration-700" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-mono">{item.year}</h3>
                <h4 className="text-xl font-semibold mb-2">{item.event}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
