"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { projects } from '../data/projects';

export default function ProjectsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 400);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % projects.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + projects.length) % projects.length);
  }, [current, goTo]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(autoSlide);
  }, [next]);

  const project = projects[current];

  return (
    <div className="relative w-full overflow-hidden">

      <div
        className={`relative w-full flex flex-col md:flex-row items-stretch transition-opacity duration-400 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transition: 'opacity 0.4s ease-in-out' }}
      >

        <Link
          href={`/projects/${project.id}`}
          className="block w-full md:w-8/12 lg:w-9/12 h-[300px] sm:h-[420px] md:h-[560px] relative overflow-hidden group cursor-pointer"
          style={{ backgroundColor: project.bgColor }}
          aria-label={`Lihat detail proyek ${project.clientName}`}
        >
          <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105" style={{ backgroundColor: project.bgColor }} />

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src={project.logo}
              alt={project.logoAlt}
              title={project.metaTitle}
              className="h-16 md:h-24 w-auto object-contain filter brightness-0 invert opacity-30"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/90 z-10 hidden md:block" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 to-transparent z-10" />
        </Link>

        <div
          className="w-11/12 md:w-6/12 lg:w-5/12 bg-[#F5F1E7] p-8 md:p-10 lg:p-14 relative z-20 mx-auto md:mx-0 -mt-14 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden group/card border border-[#DBB884]/20"
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='0' cy='0' r='40' stroke='%23333' stroke-width='3' fill='none'/%3E%3Ccircle cx='40' cy='40' r='40' stroke='%23333' stroke-width='3' fill='none'/%3E%3Ccircle cx='80' cy='0' r='40' stroke='%23333' stroke-width='3' fill='none'/%3E%3Ccircle cx='0' cy='80' r='40' stroke='%23333' stroke-width='3' fill='none'/%3E%3Ccircle cx='80' cy='80' r='40' stroke='%23333' stroke-width='3' fill='none'/%3E%3C/svg%3E\")",
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative z-10 flex flex-col items-start text-left w-full h-full">

            <p className="text-[#DBB884] text-[10px] font-bold tracking-[0.2em] uppercase mb-5">
              {project.industry} · Featured Project
            </p>

            <div className="mb-6 h-8">
              <img
                src={project.logo}
                alt={project.logoAlt}
                title={project.metaTitle}
                className="h-full w-auto object-contain"
              />
            </div>

            <h3 className="text-neutral-900 font-bold text-lg md:text-xl leading-snug tracking-tight mb-4 max-w-xs">
              {project.headline}
            </h3>

            <div className="w-full h-px bg-neutral-200 mb-5 group-hover/card:bg-[#DBB884] transition-colors duration-700" />

            <p className="text-neutral-600 text-xs sm:text-[13px] leading-relaxed font-medium mb-6 max-w-sm line-clamp-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="text-[9px] font-bold uppercase tracking-widest border border-neutral-300 text-neutral-500 px-3 py-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-auto">
              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-3 text-neutral-900 font-bold text-[10px] tracking-widest uppercase hover:text-[#DBB884] transition-colors group/btn"
                aria-label={`Lihat detail proyek ${project.clientName}`}
              >
                View Detail
                <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center group-hover/btn:border-[#DBB884] group-hover/btn:bg-[#DBB884] group-hover/btn:text-white transition-all transform group-hover/btn:rotate-[-45deg] duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
              <span className="w-px h-6 bg-neutral-200" />
              <Link href="/projects" className="text-neutral-400 font-bold text-[10px] tracking-widest uppercase hover:text-neutral-800 transition-colors">
                All Projects
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-8 flex items-center gap-3 pl-1 md:pl-0">

        <button
          onClick={prev}
          aria-label="Proyek sebelumnya"
          className="relative w-12 h-12 flex-shrink-0 group overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 2 L40 2 L46 8 L46 40 L40 46 L8 46 L2 40 L2 8 Z"
              className="stroke-neutral-300 group-hover:stroke-[#DBB884] transition-colors duration-400"
              strokeWidth="1.2" fill="none"
            />
            <line x1="10" y1="2" x2="2" y2="10" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="20" y1="2" x2="2" y2="20" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="30" y1="2" x2="2" y2="30" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="40" y1="2" x2="2" y2="40" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="46" y1="10" x2="10" y2="46" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="46" y1="20" x2="20" y2="46" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="46" y1="30" x2="30" y2="46" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
          </svg>
          <svg className="absolute inset-0 m-auto w-4 h-4 text-neutral-500 group-hover:text-[#DBB884] transition-colors duration-300 transform group-hover:-translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Proyek berikutnya"
          className="relative w-12 h-12 flex-shrink-0 group overflow-hidden"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 2 L40 2 L46 8 L46 40 L40 46 L8 46 L2 40 L2 8 Z"
              className="stroke-neutral-300 group-hover:stroke-[#DBB884] transition-colors duration-400"
              strokeWidth="1.2" fill="none"
            />
            <line x1="10" y1="2" x2="2" y2="10" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="20" y1="2" x2="2" y2="20" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="30" y1="2" x2="2" y2="30" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="40" y1="2" x2="2" y2="40" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="46" y1="10" x2="10" y2="46" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="46" y1="20" x2="20" y2="46" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
            <line x1="46" y1="30" x2="30" y2="46" className="stroke-neutral-200 group-hover:stroke-[#DBB884]/30 transition-colors duration-400" strokeWidth="0.8"/>
          </svg>
          <svg className="absolute inset-0 m-auto w-4 h-4 text-neutral-500 group-hover:text-[#DBB884] transition-colors duration-300 transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="flex items-center gap-3 ml-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="relative flex items-center justify-center w-6 h-6 group/dot"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full transition-all duration-500"
              >
                {i === current ? (
                  <>
                    <rect x="7" y="7" width="10" height="10" rx="0" transform="rotate(45 12 12)" fill="#DBB884" />
                    <rect x="9.5" y="9.5" width="5" height="5" rx="0" transform="rotate(45 12 12)" fill="none" stroke="white" strokeWidth="0.8" />
                  </>
                ) : (
                  <>
                    <rect x="7" y="7" width="10" height="10" rx="0" transform="rotate(45 12 12)" fill="none" stroke="#D4D4D4" strokeWidth="1.2" className="group-hover/dot:stroke-[#DBB884] transition-colors duration-300" />
                    <circle cx="12" cy="12" r="1.5" fill="#D4D4D4" className="group-hover/dot:fill-[#DBB884] transition-colors duration-300" />
                  </>
                )}
              </svg>
            </button>
          ))}
        </div>

        <span className="ml-auto text-[10px] text-neutral-400 font-bold tracking-widest tabular-nums hidden sm:inline">
          {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
