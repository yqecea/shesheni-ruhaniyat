import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Logic: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<SVGPathElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Draw paths on scroll
      pathRefs.current.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1
          }
        });
      });

      // Rotate the main diagram
      gsap.to(diagramRef.current, {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full relative bg-[#EBE5CE] overflow-hidden flex flex-col md:flex-row border-b-2 border-black">
      {/* Text Content */}
      <div className="w-full md:w-1/3 p-10 border-r-2 border-black flex flex-col justify-center z-10 bg-[#EBE5CE]/90 backdrop-blur-sm">
        <h2 className="font-display text-5xl lg:text-6xl mb-6 uppercase leading-none">Зият<br/>(Intellect)</h2>
        <p className="font-serif text-xl italic mb-8">
          Технократтық және Креативті толқынның жаңа дәуірі. SOTA зерттеулері мен шахмат стратегиясының симбиозы.
        </p>
        <ul className="font-mono text-xs space-y-4 border-t border-black pt-4">
          <li className="flex justify-between">
            <span>ШАХМАТ:</span>
            <span className="font-bold text-[#009900]">БИБІСАРА_АСАУБАЕВА</span>
          </li>
          <li className="flex justify-between">
            <span>РОБОТ:</span>
            <span className="font-bold">FIRST_GLOBAL_CHAMPIONS</span>
          </li>
          <li className="flex justify-between">
            <span>ӘУЕН:</span>
            <span className="font-bold text-[#FF00FF]">ДИМАШ_ҚҰДАЙБЕРГЕН</span>
          </li>
        </ul>
      </div>

      {/* Interactive Diagram Area */}
      <div className="w-full md:w-2/3 relative flex items-center justify-center p-10">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(#0A0A0A10_1px,transparent_1px),linear-gradient(90deg,#0A0A0A10_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        <svg ref={diagramRef} viewBox="0 0 500 500" className="w-full max-w-xl max-h-xl text-black overflow-visible">
            {/* Outer Ring - Representation of Global Reach */}
            <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
            <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
            
            {/* Geometric Inner Shapes - The "Syncretism" of Science and Music */}
            <path ref={el => {if(el) pathRefs.current[0] = el}} d="M250 50 L423 150 L423 350 L250 450 L77 350 L77 150 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path ref={el => {if(el) pathRefs.current[1] = el}} d="M250 50 L250 450 M77 150 L423 350 M423 150 L77 350" fill="none" stroke="currentColor" strokeWidth="1" />
            
            {/* Floating Nodes */}
            <circle cx="250" cy="50" r="8" fill="#FF00FF" />
            <text x="265" y="55" fontSize="10" fontFamily="Space Mono">СТРАТЕГИЯ</text>
            
            <circle cx="423" cy="150" r="8" fill="#00FFFF" />
            <text x="440" y="155" fontSize="10" fontFamily="Space Mono">ФИЗИКА</text>
            
            <circle cx="423" cy="350" r="8" fill="#CCFF00" />
            <text x="440" y="355" fontSize="10" fontFamily="Space Mono">ГАРМОНИЯ</text>
        </svg>

        {/* Floating Labels */}
        <div className="absolute top-1/4 right-10 bg-black text-[#EBE5CE] px-2 py-1 font-mono text-xs border border-[#CCFF00] -rotate-12 shadow-[4px_4px_0px_#CCFF00]">
          ТОЛҚЫН.КРЕАТИВ
        </div>
        <div className="absolute bottom-1/4 left-10 bg-[#EBE5CE] text-black px-2 py-1 font-mono text-xs border border-black rotate-6">
          СИНАПС.БАЙЛАНЫС
        </div>
      </div>
    </section>
  );
};

export default Logic;