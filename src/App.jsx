import React, { useEffect, useLayoutEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './components/Hero';
import { ArpanetEra } from './components/ArpanetEra';
import { DotcomEra } from './components/DotcomEra';
import { SocialMediaEra } from './components/SocialMediaEra';
import { Web3Era } from './components/Web3Era';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  useLenis((lenis) => {
    ScrollTrigger.update();
  });

  return (
    <div className="bg-black text-white selection:bg-web3-accent selection:text-white font-sans w-full overflow-clip">
      <div className="noise-overlay"></div>
      <CustomCursor />
      <main>
        {/* Narrative Section 1 */}
        <Hero />
        
        {/* Narrative Section 2 */}
        <ArpanetEra />
        
        {/* Narrative Section 3 */}
        <DotcomEra />
        
        {/* Narrative Section 4 */}
        <SocialMediaEra />
        
        {/* Narrative Section 5 */}
        <Web3Era />
      </main>
      
      {/* Conclusion */}
      <Footer />
    </div>
  );
}

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <AppContent />
    </ReactLenis>
  );
}

export default App;
