import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#EBE5CE] text-[#0A0A0A] py-20 px-4 border-t-4 border-black relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Col 1: Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-display text-8xl leading-none tracking-tighter mb-4">QAZAQ<br/>RUKH</h2>
          <p className="font-serif italic text-xl max-w-md">
            Даусымыз кеңістікті тіледі. Қылқалам уақытты тоқтатады. Сана болашақты құрайды.
          </p>
        </div>

        {/* Col 2: Schematic Info */}
        <div className="col-span-1 font-mono text-xs space-y-4">
          <div className="border border-black p-4 bg-white/50 relative">
            <div className="absolute -top-2 left-4 bg-[#EBE5CE] px-1 font-bold">СТАТУС</div>
            <ul className="space-y-2">
              <li className="flex justify-between"><span>РУХ:</span> <span>ОЯНДЫ</span></li>
              <li className="flex justify-between"><span>ТАМЫР:</span> <span>ТЕРЕҢ</span></li>
              <li className="flex justify-between"><span>БОЛАШАҚ:</span> <span>2050</span></li>
            </ul>
          </div>
          
          <div className="flex gap-2">
             <div className="w-8 h-8 rounded-full bg-black"></div>
             <div className="w-8 h-8 rounded-full border border-black"></div>
             <div className="w-8 h-8 rounded-full bg-[#00FFFF] border border-black"></div>
          </div>
        </div>

        {/* Col 3: Links */}
        <div className="col-span-1 flex flex-col justify-end">
           <ul className="font-display text-2xl uppercase space-y-2 text-right">
             <li><a href="#" className="hover:text-[#FF00FF] transition-colors hover:underline decoration-wavy">Тарих</a></li>
             <li><a href="#" className="hover:text-[#00FFFF] transition-colors hover:underline decoration-wavy">Өнер</a></li>
             <li><a href="#" className="hover:text-[#CCFF00] transition-colors hover:underline decoration-wavy">Ғылым</a></li>
             <li><a href="#" className="hover:text-[#FF00FF] transition-colors hover:underline decoration-wavy">Байланыс</a></li>
           </ul>
        </div>

      </div>

      <div className="mt-20 pt-8 border-t border-black/20 flex flex-col md:flex-row justify-between items-center font-mono text-[10px] uppercase tracking-widest">
        <span>© 2026 DIGITAL STEPPE ARCHIVE.</span>
        <span>АЛГОРИТМ АВТОРЛЫҒЫМЕН</span>
        <span>LAT: 51.1605° N / LONG: 71.4704° E</span>
      </div>
    </footer>
  );
};

export default Footer;