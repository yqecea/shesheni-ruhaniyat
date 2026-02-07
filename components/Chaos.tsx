import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Chaos: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Glitch Shake Effect on Title
      const shake = gsap.timeline({ repeat: -1, repeatDelay: 2 });
      shake.to(titleRef.current, { x: -5, duration: 0.1 })
           .to(titleRef.current, { x: 5, duration: 0.1 })
           .to(titleRef.current, { x: -5, duration: 0.1 })
           .to(titleRef.current, { x: 0, duration: 0.1 });

      // Displace Grid Blocks
      blocksRef.current.forEach((block, i) => {
        gsap.to(block, {
          xPercent: gsap.utils.random(-50, 50),
          yPercent: gsap.utils.random(-50, 50),
          rotation: gsap.utils.random(-15, 15),
          scale: gsap.utils.random(0.8, 1.2),
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden bg-[#0A0A0A] text-[#EBE5CE] py-20 border-b-2 border-[#EBE5CE]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <h2 ref={titleRef} className="font-display text-[12vw] leading-none uppercase text-transparent tracking-tighter" style={{ WebkitTextStroke: "2px #EBE5CE" }}>
            DALA BOYAUY
          </h2>
          <p className="font-mono text-[#00FFFF] mt-[-2vw] bg-black px-4 rotate-2">
            [ ДАЛА ЖЫЛНАМАСЫ ]
          </p>
        </div>

        {/* Broken Grid Layout representing the fracture between old nomadism and new realism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[80vh]">
          {/* Block 1: Kasteev */}
          <div ref={el => { if(el) blocksRef.current[0] = el; }} className="relative border border-[#EBE5CE]/30 p-6 flex flex-col justify-between bg-[#1a1a1a]">
            <div className="font-mono text-xs text-[#FF00FF]">ӨНЕР_ID: ҚАСТЕЕВ</div>
            <div className="font-serif italic opacity-70">"Ұлттық шежіреші."</div>
            <div className="text-right font-display text-4xl">1904</div>
          </div>

          {/* Block 2: Decoration */}
          <div ref={el => { if(el) blocksRef.current[1] = el; }} className="relative border border-[#EBE5CE]/30 p-6 flex items-center justify-center">
             <div className="w-full h-[1px] bg-[#EBE5CE] rotate-45"></div>
          </div>

          {/* Block 3: Turksib */}
          <div ref={el => { if(el) blocksRef.current[2] = el; }} className="relative border border-[#EBE5CE]/30 p-6 bg-[#1a1a1a] flex flex-col">
             <div className="font-mono text-xs text-[#00FFFF]">ТҮРКСІБ</div>
             <p className="font-serif text-sm mt-4">Темір тұлпар және Түйе. Философиялық трактат.</p>
          </div>

           {/* Block 4: Main Quote */}
           <div ref={el => { if(el) blocksRef.current[3] = el; }} className="relative border border-[#EBE5CE]/30 p-6 col-span-2 row-span-2 flex items-center justify-center text-center bg-black/50 backdrop-blur-md">
              <div className="font-serif text-3xl md:text-5xl italic leading-tight">
                "Алғашқы суретшілердің миссиясы – көшпенділер әлемін еуропалық реализм тілімен сөйлету болды."
              </div>
              <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-[#CCFF00]"></div>
           </div>

           {/* Block 5: Ismayilov */}
           <div ref={el => { if(el) blocksRef.current[4] = el; }} className="relative border border-[#EBE5CE]/30 p-6 bg-[#1a1a1a]">
              <div className="font-mono text-xs text-[#FF00FF]">ӨНЕР_ID: ЫСМАЙЫЛОВ</div>
              <p className="mt-2 font-display text-xl">РЕЖИССЕР ҚЫЛҚАЛАМЫ</p>
           </div>

           {/* Block 6: Gulfairus */}
           <div ref={el => { if(el) blocksRef.current[5] = el; }} className="relative border border-[#EBE5CE]/30 p-6">
              <div className="font-mono text-xs text-[#CCFF00]">ӨНЕР_ID: ИСМАИЛОВА</div>
              <p className="mt-2 font-display text-xl">ОПЕРА & БОЯУ</p>
           </div>
           
           {/* Block 7: Empty */}
           <div ref={el => { if(el) blocksRef.current[6] = el; }} className="relative border border-[#EBE5CE]/30 p-6 bg-[#1a1a1a] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-12 h-12 animate-spin duration-[10s]">
                 <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" />
              </svg>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Chaos;