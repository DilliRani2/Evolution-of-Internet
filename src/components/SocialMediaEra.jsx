import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Share2, Smartphone, Users, ThumbsUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function SocialMediaEra() {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);

  const events = [
    { icon: <Users size={48} />, year: '2004', title: 'The Social Network', desc: 'Facebook launches, connecting college students and eventually the world.' },
    { icon: <Smartphone size={48} />, year: '2007', title: 'Mobile Revolution', desc: 'The iPhone is released. The web goes into our pockets.' },
    { icon: <Share2 size={48} />, year: '2010s', title: 'Viral Culture', desc: 'Twitter and Instagram define real-time news and visual communication.' }
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => "+=" + (wrapperRef.current.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true
        }
      });

      // Move the container horizontally
      tl.to(wrapperRef.current, {
        x: () => -(wrapperRef.current.scrollWidth - window.innerWidth),
        ease: "none"
      });

      // Node connection lines drawing (they draw as you scroll horizontally)
      gsap.utils.toArray('.connection-line').forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: line,
            containerAnimation: tl,
            start: "left center",
            end: "right center",
            scrub: true
          }
        });
      });

      // Nodes popping up as they come into view horizontally
      gsap.utils.toArray('.social-node').forEach((node) => {
        gsap.from(node, {
          y: 100,
          opacity: 0,
          scale: 0.5,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: node,
            containerAnimation: tl,
            start: "left 80%",
          }
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-black text-white overflow-hidden relative">
      
      {/* Dark Globar Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Global Network"
          className="w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none"></div>
      </div>

      <div className="absolute top-10 left-10 md:top-20 md:left-20 z-10 pointer-events-none w-full max-w-3xl">
        <h2 className="social-title text-5xl md:text-8xl lg:text-[8vw] leading-[1] font-black uppercase tracking-tighter mix-blend-difference opacity-90 drop-shadow-2xl flex flex-col">
          <span className="text-outline">Social</span>
          <span className="text-blue-400">&amp; Mobile</span>
        </h2>
        <p className="text-lg md:text-2xl mt-6 opacity-80 max-w-md font-mono leading-relaxed bg-black/50 p-4 rounded-xl backdrop-blur-md border border-white/10 text-white">
          Scroll to explore the real-time, pocket-sized network connecting billions.
        </p>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div ref={wrapperRef} className="h-full flex items-center pt-32 px-[10vw] relative z-20 w-[300vw] lg:w-[200vw]">
        
        {events.map((evt, idx) => (
          <div key={idx} className="flex items-center shrink-0 w-[80vw] lg:w-[40vw] justify-center relative">
            
            {/* Event Node */}
            <div className="social-node flex flex-col items-center relative z-10 w-[300px]">
              <div className="w-32 h-32 rounded-full bg-white shadow-2xl shadow-social-blue/20 flex justify-center items-center text-social-blue mb-8 transition-transform duration-300 hover:scale-110 cursor-pointer border-4 border-transparent hover:border-social-blue">
                {evt.icon}
              </div>
              <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/60 text-center w-full">
                <h3 className="text-3xl font-black mb-2 text-social-blue">{evt.year}</h3>
                <h4 className="text-xl font-bold mb-4">{evt.title}</h4>
                <p className="text-gray-600 font-mono text-sm">{evt.desc}</p>
              </div>
            </div>

            {/* Connecting Line to next node */}
            {idx < events.length - 1 && (
              <div className="absolute top-1/2 -translate-y-20 left-1/2 w-full ml-10 -z-10 px-10">
                <div className="connection-line h-2 bg-gradient-to-r from-social-blue to-social-accent w-full rounded-full shadow-[0_0_15px_rgba(29,161,242,0.5)]"></div>
              </div>
            )}
          </div>
        ))}

        {/* Final CTA Node in horizontal scroll */}
        <div className="flex items-center shrink-0 w-[50vw] lg:w-[30vw] justify-center relative">
          <div className="social-node flex flex-col items-center group cursor-pointer">
            <button className="flex items-center justify-center w-24 h-24 bg-social-blue text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
              <ThumbsUp size={32} className="group-hover:-rotate-12 transition-transform" />
            </button>
            <div className="mt-6 font-bold text-social-blue tracking-widest uppercase text-sm group-hover:underline">
              Like &amp; Continue
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
