import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Cpu, Link2, Hexagon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Web3Era() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 3D Hexagon rotation
      gsap.to(".hexa-bg", {
        rotation: 360,
        ease: "none",
        duration: 40,
        repeat: -1
      });

      // Parallax content
      gsap.from(".web3-content", {
        y: 150,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "center center",
          scrub: 1
        }
      });

      // Tech grid staggered reveal
      gsap.from(".tech-box", {
        scale: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const technologies = [
    { icon: <Box size={24} />, name: "Blockchain", desc: "Decentralized ledgers." },
    { icon: <Link2 size={24} />, name: "Smart Contracts", desc: "Programmable trust." },
    { icon: <Cpu size={24} />, name: "AI Integration", desc: "Intelligent agents." },
    { icon: <Hexagon size={24} />, name: "Metaverse", desc: "Spatial web." }
  ];

  return (
    <section ref={sectionRef} className="era-section bg-web3-bg text-web3-text relative">
      <div className="hexa-bg absolute inset-0 opacity-30 flex items-center justify-center pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover mix-blend-screen opacity-50"
        >
          <source src="https://cdn.pixabay.com/video/2021/08/04/83866-584742460_large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-web3-bg/80 to-black pointer-events-none"></div>

      <div className="web3-content relative z-10 container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-web3-accent to-web3-cyan">
              Web3
            </span> &amp;<br/> Beyond
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono">
            Decentralization. True ownership. Artificial Intelligence. The internet re-architected.
          </p>
          <div className="inline-flex items-center gap-2 text-web3-cyan animate-pulse-glow font-mono text-sm tracking-widest uppercase bg-web3-cyan/10 px-4 py-2 rounded-full border border-web3-cyan/30">
            <div className="w-2 h-2 rounded-full bg-web3-cyan animate-ping"></div>
            System Online
          </div>
        </div>

        <div className="w-full md:w-1/2 tech-grid grid grid-cols-2 gap-6">
          {technologies.map((tech, i) => (
            <div key={i} className="tech-box bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:border-web3-accent/50 transition-colors duration-300 group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-web3-accent to-web3-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-web3-accent mb-4 group-hover:scale-110 transition-transform origin-left">
                {tech.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-500 font-mono">{tech.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
