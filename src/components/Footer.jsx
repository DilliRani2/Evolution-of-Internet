import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Briefcase, Mail, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Huge scaling reveal on footer
      gsap.from(".footer-huge-text", {
        scale: 0.5,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: true
        }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-black text-white relative border-t border-white/10 pt-32 pb-10 overflow-hidden flex flex-col items-center justify-end min-h-[70vh]">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black_100%)] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        
        <p className="text-center text-gray-400 max-w-xl mb-8 font-mono text-sm leading-relaxed uppercase tracking-widest">
          Built for <strong className="text-white">Frontend Odyssey Hackathon</strong>. <br/><br/>
          The internet is not a finished product, but a continuous evolution driven by human ingenuity.
        </p>

        <div className="flex gap-6 mb-16">
          <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/40 transition-all hover:-translate-y-2 hover:scale-110">
            <Code size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/40 transition-all hover:-translate-y-2 hover:scale-110">
            <Briefcase size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="p-4 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 hover:border-white/40 transition-all hover:-translate-y-2 hover:scale-110">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm font-mono text-white hover:text-emerald-400 transition-colors group mb-20 px-8 py-4 border border-white/20 rounded-full bg-white/5 backdrop-blur-md"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-2 transition-transform" />
          BACK TO START
        </button>

      </div>

      <div className="w-full overflow-hidden mt-auto px-4 flex justify-center">
        <h2 className="footer-huge-text text-[15vw] leading-none font-black text-center text-outline whitespace-nowrap opacity-20 hover:opacity-100 transition-opacity duration-500 cursor-default">
          THE FUTURE
        </h2>
      </div>
    </footer>
  );
}
