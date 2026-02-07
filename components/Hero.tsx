import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scriptRef = useRef<HTMLSpanElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Effects
      gsap.to(titleRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to(scriptRef.current, {
        yPercent: -100,
        xPercent: 20,
        rotation: -5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to(orbRef.current, {
        scale: 1.5,
        yPercent: 30,
        opacity: 0,
        ease: "power1.in",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.to(gridRef.current, {
        rotationX: 60,
        yPercent: 20,
        scale: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b-2 border-black">
      {/* Background Grid */}
      <div ref={gridRef} className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [transform-style:preserve-3d] origin-bottom"></div>

      {/* Holographic Orb - Gold and Turquoise for Kazakhstan */}
      <div ref={orbRef} className="absolute w-[40vmax] h-[40vmax] rounded-full blur-[80px] z-10 opacity-80 mix-blend-multiply bg-gradient-to-tr from-[#00FFFF] via-[#FFD700] to-[#CCFF00]"></div>

      {/* Main Content */}
      <div className="relative z-20 text-center w-full px-4">
        <div className="flex flex-col items-center justify-center relative">
          {/* Schematic Markings */}
          <div className="absolute -top-20 -left-10 md:left-20 font-mono text-xs md:text-sm tracking-widest opacity-60">
            1.0-СУРЕТ // КӨШПЕНДІ ГЕНОМ
            <br />
            БАСТАУ: ҰЛЫ ДАЛА
          </div>

          <h1 ref={titleRef} className="text-[18vw] leading-[0.8] font-display font-bold tracking-tighter uppercase mix-blend-exclusion text-black/90 relative z-10">
            QAZAQ
          </h1>
          <span ref={scriptRef} className="block text-[15vw] leading-[0.5] font-script text-[#00FFFF] mix-blend-difference absolute top-[55%] z-20 pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Ruhaniyat
          </span>
          
          <div className="mt-32 md:mt-48 max-w-md mx-auto font-mono text-xs md:text-sm uppercase tracking-widest border-t border-black pt-4 flex justify-between w-full">
            <span>[ ЗИЯТ: ЖҮКТЕЛУДЕ ]</span>
            <span>[ КОД: ТЕКТІЛІК ]</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 opacity-50">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;