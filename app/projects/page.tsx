import React from 'react';
import Link from 'next/link';
import PatternBorder from '../components/PatternBorder';

export default function ProjectsIndexPage() {
  const projects = [
    { id: 'pertamina', title: 'Pertamina', category: 'Oil & Gas', image: '#6D6D6D' },
    { id: 'gojek', title: 'Gojek', category: 'Technology', image: '#9C7A54' },
    { id: 'indonesiapower', title: 'Indonesia Power', category: 'Energy', image: '#A3A3A3' },
    { id: 'telkom', title: 'Telkom Indonesia', category: 'Telecommunications', image: '#D7C39E' },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#DBB884] selection:text-white pb-0">

      <div className="w-full h-[41px] flex overflow-hidden mb-8 md:mb-16 opacity-30">
        {Array.from({ length: 6 }).map((_, i) => (
          <PatternBorder key={i} className="flex-shrink-0" />
        ))}
      </div>

      <section className="px-6 md:px-16 w-full max-w-[1400px] mx-auto mb-16 md:mb-24">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-xs font-bold text-[#DBB884] uppercase tracking-widest">Global Portfolio</p>
          <div className="h-[1px] w-12 bg-[#DBB884]"></div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[72px] font-bold text-neutral-900 tracking-tight leading-[1.05] max-w-3xl">
          A curated showcase of our best work.
        </h1>
      </section>

      <section className="px-6 md:px-16 w-full max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {projects.map((project, idx) => (
            <Link
              href={`/projects/${project.id === 'pertamina' ? 'pertamina' : '#'}`}
              key={project.id}
              className={`group flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <div
                className="w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-square mb-6 overflow-hidden bg-neutral-200 relative"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundColor: project.image }}
                >
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                   <img
                     src={`/logo-projects/pjaindonesia-${project.id}.png`}
                     alt={project.title}
                     className="absolute inset-0 m-auto w-1/3 object-contain opacity-40 mix-blend-multiply filter transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 z-20"
                   />
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-neutral-200 pb-5 group-hover:border-[#DBB884] transition-colors duration-500">
                <div>
                  <h3 className="text-3xl font-bold text-neutral-900 tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{project.category}</p>
                </div>
                <div className="relative overflow-hidden w-12 h-12 border border-neutral-300 rounded-full flex items-center justify-center text-neutral-400 group-hover:border-[#DBB884] group-hover:bg-[#DBB884] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[-45deg] flex-shrink-0">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    style={{
                      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"0\" cy=\"0\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"80\" cy=\"0\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"0\" cy=\"80\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"80\" cy=\"80\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3C/svg%3E')",
                      backgroundSize: "28px 28px"
                    }}
                  />
                  <svg className="relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
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
