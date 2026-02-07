import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Lens: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      
      // Horizontal Scroll
      gsap.to(slider, {
        x: () => -(slider!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + slider!.scrollWidth,
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const slides = [
    { id: 1, color: "from-cyan-500 to-blue-500", text: "СТРАТЕГИЯ", sub: "ШАХМАТ & ЛОГИКА" },
    { id: 2, color: "from-purple-500 to-pink-500", text: "КӨЗҚАРАС", sub: "ҚАСТЕЕВ СТИЛІ" },
    { id: 3, color: "from-yellow-400 to-orange-500", text: "ДАУЫС", sub: "6 ОКТАВА" },
    { id: 4, color: "from-green-400 to-emerald-600", text: "ӘДІЛДІК", sub: "БИЛЕР ЗАҢЫ" },
  ];

  return (
    <section ref={containerRef} className="h-screen w-full overflow-hidden bg-[#0A0A0A] border-b-2 border-white/20 relative">
      
      <div className="absolute top-10 left-10 z-20 text-white mix-blend-difference pointer-events-none">
        <h2 className="font-display text-5xl">КӨЗҚАРАС</h2>
        <p className="font-mono text-xs mt-2">КӨКЖИЕКТІ_КЕҢЕЙТУ // X-AXIS-SCROLL</p>
      </div>

      <div ref={sliderRef} className="h-full flex w-[400vw]">
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-full flex items-center justify-center relative border-r border-white/10">
            {/* Background Gradient Blob */}
            <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${slide.color} blur-[100px]`}></div>
            
            {/* Card Content */}
            <div className="relative z-10 w-[60vw] h-[60vh] border border-white/30 bg-white/5 backdrop-blur-md overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="absolute top-4 left-4 font-mono text-xs text-white/70 border border-white/30 px-2 rounded-full">
                АРХЕТИП_00{slide.id}
              </div>

              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="font-script text-[10vw] text-white mix-blend-overlay group-hover:scale-110 transition-transform duration-1000">
                  {slide.text}
                </h3>
                <p className="font-mono text-xs tracking-widest text-[#00FFFF] mt-4">{slide.sub}</p>
              </div>

              {/* Holographic lines */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lens;