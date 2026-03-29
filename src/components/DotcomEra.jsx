import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FlipCard } from './ui/FlipCard';
import { Globe, Search, ShoppingCart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function DotcomEra() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax for floating elements
      gsap.to(".floating-shape", {
        y: (i, el) => -100 * (i + 1),
        rotation: (i, el) => 45 * (i + 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Staggered cards reveal
      gsap.from(".dotcom-card", {
        y: 100,
        opacity: 0,
        rotationX: -45,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const cards = [
    {
      icon: <Globe size={40} className="text-dotcom-blue mb-4" />,
      title: "World Wide Web",
      year: "1991",
      backContent: "Tim Berners-Lee introduces the World Wide Web to the public, fundamentally changing how information is shared globally."
    },
    {
      icon: <ShoppingCart size={40} className="text-dotcom-accent mb-4" />,
      title: "eCommerce Boom",
      year: "1995",
      backContent: "Amazon and eBay launch, marking the beginning of the commercial internet and the massive dot-com speculation bubble."
    },
    {
      icon: <Search size={40} className="text-dotcom-yellow mb-4" />,
      title: "Search Engines",
      year: "1998",
      backContent: "Google launches, revolutionizing how we find information with its PageRank algorithm, organizing the chaotic web."
    }
  ];

  return (
    <section ref={sectionRef} className="era-section bg-black text-white overflow-hidden relative min-h-screen py-32">
      {/* Dark Matrix / Grid Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80" 
          alt="Dark Matrix Code Base"
          className="w-full h-full object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 w-full h-full flex flex-col justify-center items-center">
        <div className="text-center mb-16 max-w-5xl mx-auto px-4 z-20 w-full">
          <h2 className="dotcom-title text-5xl md:text-8xl lg:text-[8vw] leading-[1] font-black uppercase mb-6 tracking-tighter flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-outline">The</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-yellow-400">Dot-Com</span>
            <span className="text-white">Era</span>
          </h2>
        </div>

        <div className="cards-container grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl px-4 z-20">
          {cards.map((card, idx) => (
            <div key={idx} className="dotcom-card">
              <FlipCard 
                className="hover:shadow-[0_20px_50px_rgba(255,107,107,0.3)]"
                frontContent={
                  <>
                    {card.icon}
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-xl font-mono text-gray-500">{card.year}</p>
                    <p className="mt-4 text-sm text-gray-400 font-medium">Hover / Click to explore</p>
                  </>
                }
                backContent={
                  <>
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-base text-gray-700 leading-relaxed">{card.backContent}</p>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
