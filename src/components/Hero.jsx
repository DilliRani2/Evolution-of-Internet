import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // OSOS Master reveal - Target the word containers individually to preserve line breaks
      const splitTitle = new SplitType('.hero-word', { types: 'chars' });
      
      gsap.from(splitTitle.chars, {
        y: 150,
        opacity: 0,
        rotationZ: 15,
        stagger: 0.05,
        duration: 1.5,
        ease: "power4.out",
      });

      gsap.from(".hero-subreveal", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power4.out",
      });

      // Extreme Parallax Scale on Scroll
      gsap.to(".hero-video-wrapper", {
        scale: 1.5,
        yPercent: 30,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.to(".hero-content-wrapper", {
        yPercent: 50,
        opacity: 0,
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Mouse move parallax for background
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;
        gsap.to(videoRef.current, { x, y, duration: 1, ease: "power2.out" });
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="era-section bg-black text-white px-4 min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Video Background Wrapper */}
      <div className="hero-video-wrapper absolute inset-0 opacity-80 z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-[110%] h-[110%] max-w-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/04/83866-584742460_large.mp4" type="video/mp4" />
        </video>
        {/* Extreme Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-90" />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      <div className="hero-content-wrapper relative z-10 flex flex-col items-center justify-center text-center w-full mt-20">
        <div className="mb-8 w-full">
          <h1 className="text-5xl md:text-8xl lg:text-[9vw] leading-[1] font-black tracking-tighter uppercase w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="hero-word text-outline transition-colors duration-500 hover:text-white pb-2">Evolution</div>
            <div className="hero-word text-white">of Internet</div>
          </h1>
        </div>
        
        <p className="hero-subreveal text-sm md:text-2xl text-gray-300 max-w-3xl font-mono uppercase tracking-widest bg-black/50 p-4 md:p-6 rounded-3xl backdrop-blur-md border border-white/10 mt-6">
          The ultimate journey through digital space.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 z-20">
        <span className="text-xs tracking-[0.5em] uppercase mb-4 font-mono text-center">Scroll</span>
        <ChevronDown size={32} className="opacity-50" />
      </div>
    </section>
  );
}
