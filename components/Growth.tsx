import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Growth: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Line grows down
      gsap.fromTo(lineRef.current, 
        { height: 0 },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      // Nodes animate in
      nodesRef.current.forEach((node) => {
        gsap.from(node, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: "БАСТАУ", title: "Майқы Би", desc: "Түгел сөздің түбі бір. Мемлекет құру идеологиясы." },
    { year: "АЛТЫН", title: "Үш Би", desc: "Қазақ дипломатиясының шыңы. Қазыбек, Төле, Әйтеке." },
    { year: "ЗАР", title: "Зар Заман", desc: "Қарсылық поэзиясы. Экологиялық және рухани дабыл." },
    { year: "ДАТ", title: "Дала Демократиясы", desc: "Сөз бостандығы. Жазылмаған Конституция." },
  ];

  return (
    <section ref={containerRef} className="py-32 w-full min-h-screen relative bg-[#EBE5CE] border-b-2 border-black">
       <div className="container mx-auto px-4 relative">
         <h2 className="text-center font-display text-4xl mb-20 uppercase tracking-widest">СӨЗ ҚҰДІРЕТІ</h2>
         <p className="text-center font-serif italic mb-20 max-w-2xl mx-auto">"Сөз – сүйектен өтеді." — Дала парламентінің синкретті өнері.</p>
         
         <div className="relative max-w-3xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-black/20 h-full"></div>
            <div ref={lineRef} className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-[#0A0A0A] max-h-full"></div>

            {milestones.map((item, i) => (
              <div key={i} className={`flex items-center justify-between mb-32 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                
                {/* Text Side */}
                <div className={`w-[40%] ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-2">{item.title}</h3>
                  <p className="font-serif italic text-lg opacity-80">{item.desc}</p>
                </div>

                {/* Node Center */}
                <div 
                  ref={el => { if(el) nodesRef.current[i] = el; }}
                  className="w-[10%] flex justify-center relative z-10"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-black bg-[#EBE5CE] flex items-center justify-center font-mono text-xs font-bold shadow-[0_0_15px_rgba(204,255,0,0.6)]">
                    {i + 1}
                  </div>
                </div>

                {/* Year/Label Side */}
                <div className={`w-[40%] ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <span className="font-mono text-sm tracking-[0.3em] bg-black text-white px-2 py-1">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default Growth;