import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Thesis: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning and Text Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        }
      });

      // Staggered reveal of words with blurring
      tl.from(wordsRef.current, {
        opacity: 0.1,
        filter: "blur(10px)",
        y: 20,
        stagger: 0.1,
        duration: 1
      });

      // Background color shift
      tl.to(containerRef.current, {
        backgroundColor: "#0A0A0A",
        color: "#EBE5CE",
        duration: 0.5,
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const text = "ДАЛА – ТЕК ЖЕР ЕМЕС. БҰЛ – ТАЛАНТ ПЕН ТАРИХТЫҢ МИКРОСХЕМАСЫ. ЕЖЕЛГІ ШЕШЕНДІКТЕН КВАНТТЫҚ ФИЗИКАҒА ДЕЙІН, КӨШПЕНДІ САНА ЖАҢА КӨКЖИЕККЕ ҰМТЫЛАДЫ.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center p-8 md:p-20 border-b-2 border-black transition-colors">
      <div ref={textRef} className="max-w-6xl mx-auto text-center">
        <p className="text-3xl md:text-5xl lg:text-7xl font-serif leading-tight">
          {words.map((word, i) => (
            <span 
              key={i} 
              ref={el => { if(el) wordsRef.current[i] = el; }}
              className="inline-block mr-3 md:mr-6"
            >
              {word === "МИКРОСХЕМАСЫ." || word === "ФИЗИКАҒА" || word === "КӨШПЕНДІ" ? (
                <span className="font-display font-bold uppercase tracking-widest text-[#00FFFF]">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </p>
        
        <div className="mt-12 w-full h-[1px] bg-current opacity-30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-current animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
        </div>
        
        <div className="flex justify-between mt-4 font-mono text-xs opacity-50 uppercase">
          <span>Сілтеме: KZ.ZIYAT</span>
          <span>Manifesto.sys</span>
        </div>
      </div>
    </section>
  );
};

export default Thesis;