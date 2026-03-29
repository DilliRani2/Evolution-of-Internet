import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Timeline } from './ui/Timeline';

gsap.registerPlugin(ScrollTrigger);

export function ArpanetEra() {
  const sectionRef = useRef(null);
  
  const timelineData = [
    { year: '1969', event: 'ARPANET Created', description: 'The first message is sent from UCLA to Stanford. The system crashed on the "G" in "LOGIN".', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=80&w=400' },
    { year: '1971', event: 'Email Invented', description: 'Ray Tomlinson implements the first email program. The "@" symbol is chosen to separate user and host.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=80&w=400' },
    { year: '1983', event: 'TCP/IP Protocol', description: 'ARPANET standardizes on TCP/IP protocol suite, considered the birth of the modern internet architecture.', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&q=80&w=400' }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Massive image scale down like Webflow Awwwards
      gsap.fromTo(".arpanet-bg-img", 
        { scale: 1.5, filter: "brightness(0.2) contrast(1.2)" },
        {
          scale: 1,
          filter: "brightness(0.5) contrast(1)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
      
      // Title reveal
      gsap.from(".arpanet-title span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: ".arpanet-title",
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="era-section bg-black text-white relative min-h-[150vh] flex flex-col pt-32">
      {/* Massive Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1614316335359-002d416b71b3?auto=format&fit=crop&q=80" 
          alt="Vintage Supercomputer Mainframe" 
          className="arpanet-bg-img w-full h-full object-cover origin-center opacity-60"
        />
        {/* Gradients blending the era container natively */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-arpanet-bg/70 to-black mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 w-full px-4 mb-24">
        <h2 className="arpanet-title text-[8vw] leading-[0.8] font-black uppercase text-center flex flex-col items-center">
          <span className="block text-outline">ARPANET</span>
          <span className="block text-arpanet-accent mt-2 tracking-widest text-[4vw]">Generation Zero</span>
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full flex-grow">
        <Timeline items={timelineData} eraColor="text-arpanet-accent border-arpanet-accent shadow-arpanet-accent" />
      </div>
    </section>
  );
}
