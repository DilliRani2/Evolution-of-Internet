import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  useEffect(() => {
    // Hide default cursor in CSS but we'll add a class to body just in case
    document.body.classList.add('hide-cursor-global');

    const updatePosition = (e) => {
      // Dot follows exactly
      gsap.to(cursorDot.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      // Outline follows with slight delay
      gsap.to(cursorOutline.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out"
      });
    };

    const handleHoverStart = (e) => {
      const target = e.target.closest('a, button, .cursor-pointer');
      if (target) {
        gsap.to(cursorOutline.current, { scale: 1.5, opacity: 0.5, duration: 0.3 });
        gsap.to(cursorDot.current, { scale: 0, duration: 0.3 });
      } else {
        gsap.to(cursorOutline.current, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(cursorDot.current, { scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleHoverStart);

    return () => {
      document.body.classList.remove('hide-cursor-global');
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleHoverStart);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorOutline}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" 
      />
      <div 
        ref={cursorDot}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block" 
      />
    </>
  );
}
