import React from 'react';
import PatternBorder from '../components/PatternBorder';

export default function AboutPage() {
  const teamMembers = [
    { name: "Yuka Ananta", title: "CEO" },
    { name: "Iwan Setiawan", title: "President Director" },
    { name: "Andre Wijaya", title: "Board of Advisor" },
    { name: "Opick", title: "Chief Inovation" },
    { name: "Ariel", title: "Sr President" },
    { name: "Vincent", title: "Director of Marketing" },
    { name: "Desta", title: "Market Expansion" },
    { name: "Apung", title: "HR Director" }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#DBB884] selection:text-white pb-0">

      <section className="w-full bg-[#E5E5E5] h-[350px] md:h-[500px] relative flex flex-col justify-end p-8 md:p-20 max-w-[1920px] mx-auto border-t border-neutral-200">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-bold text-xs md:text-sm text-neutral-800 tracking-widest uppercase">Photo</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white relative z-10 tracking-tight">Our Story</h1>
      </section>

      <div className="w-full max-w-[1400px] mx-auto mt-12 mb-8 hidden md:block">
         <div className="w-full h-[41px] flex overflow-hidden opacity-30">
          {Array.from({ length: 6 }).map((_, i) => (
            <PatternBorder key={i} className="flex-shrink-0" />
          ))}
        </div>
      </div>

      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-8 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">Vision & Mission</h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8">
            <p className="text-[13px] font-medium text-neutral-700 leading-relaxed max-w-md">
              So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos
            </p>
            <p className="text-[13px] font-medium text-neutral-700 leading-relaxed max-w-md">
              So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos
            </p>
            <p className="text-[13px] font-medium text-neutral-700 leading-relaxed max-w-md">
              So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#E5E5E5] py-24 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
             <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">Management Team</h2>
             <p className="text-sm text-neutral-800 tracking-wide">
               Meet the team <span className="font-bold ml-1">PJA INDONESIA</span>
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {teamMembers.map((m, idx) => (
               <div key={idx} className="relative w-full aspect-[3/4] p-6 lg:p-8 flex flex-col justify-end group cursor-pointer transform hover:-translate-y-2 transition-all duration-500">

                 <div
                   className="absolute inset-[2px] bg-[#999999] transition-all duration-700 group-hover:bg-[#888888] overflow-hidden"
                   style={{
                     WebkitMaskImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 300 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 400 L300 400 L300 350 C300 200, 230 150, 150 0 C70 150, 0 200, 0 350 Z\" fill=\"black\"%2F%3E%3C/svg%3E')",
                     WebkitMaskSize: "100% 100%",
                     WebkitMaskRepeat: "no-repeat",
                     maskImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 300 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 400 L300 400 L300 350 C300 200, 230 150, 150 0 C70 150, 0 200, 0 350 Z\" fill=\"black\"%2F%3E%3C/svg%3E')",
                     maskSize: "100% 100%",
                     maskRepeat: "no-repeat"
                   }}
                 >
                 </div>

                 <div
                   className="absolute inset-0 bg-[#DBB884] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-105 group-hover:scale-100"
                   style={{
                     WebkitMaskImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 300 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 400 L300 400 L300 350 C300 200, 230 150, 150 0 C70 150, 0 200, 0 350 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"4\"%2F%3E%3C/svg%3E')",
                     WebkitMaskSize: "100% 100%",
                     WebkitMaskRepeat: "no-repeat",
                     maskImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 300 400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 400 L300 400 L300 350 C300 200, 230 150, 150 0 C70 150, 0 200, 0 350 Z\" fill=\"none\" stroke=\"black\" stroke-width=\"4\"%2F%3E%3C/svg%3E')",
                     maskSize: "100% 100%",
                     maskRepeat: "no-repeat"
                   }}
                 />

                 <div className="relative z-10 flex flex-col justify-end h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent -mx-6 lg:-mx-8 -mb-6 lg:-mb-8 px-6 lg:px-8 pb-6 lg:pb-8">
                   <h3 className="text-white font-bold text-xl mb-1.5 tracking-tight group-hover:translate-x-1 transition-transform drop-shadow-md">{m.name}</h3>
                   <p className="text-[#DBB884] text-[9px] font-bold uppercase tracking-widest drop-shadow-md">{m.title}</p>
                 </div>
               </div>
            ))}
          </div>

        </div>
      </section>

      <div className="w-full h-[41px] flex overflow-hidden bg-[#202020] pt-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <PatternBorder key={i} className="flex-shrink-0 opacity-80" />
        ))}
      </div>

    </div>
  );
}
