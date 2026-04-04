import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PatternBorder from '../../components/PatternBorder';
import { projects, getProjectById } from '../../data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.metaKeywords,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      images: [{ url: project.logo }],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  const currentIdx  = projects.findIndex((p) => p.id === slug);
  const prevProject = projects[(currentIdx - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#DBB884] selection:text-white pb-0">

      <section className="px-6 md:px-16 w-full max-w-[1400px] mx-auto mt-6 mb-16">
        <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
          <Link href="/" className="hover:text-[#DBB884] transition-colors">Home</Link>
          {' '}·{' '}
          <Link href="/projects" className="hover:text-[#DBB884] transition-colors">Projects</Link>
          {' '}·{' '}
          <span className="text-neutral-600">{project.clientName}</span>
        </p>
      </section>

      <section
        className="w-full max-w-[1920px] mx-auto mb-0 relative h-[300px] md:h-[440px] flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: project.bgColor }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 20 }).map((_, i) => (
            <line key={i} x1={i * 10 - 20} y1="0" x2={i * 10 + 20} y2="100" stroke="white" strokeWidth="0.5"/>
          ))}
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={project.logo}
            alt={project.logoAlt}
            className="h-16 md:h-28 w-auto object-contain filter brightness-0 invert opacity-25"
          />
        </div>

        <div className="relative z-10 px-6 md:px-16 pb-10 md:pb-14">
          <p className="text-[10px] font-bold text-[#DBB884] tracking-[0.25em] uppercase mb-2">{project.industry}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-2xl">
            {project.headline}
          </h1>
        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          <div className="md:col-span-5 flex flex-col gap-10">
            <div className="h-10">
              <img src={project.logo} alt={project.logoAlt} className="h-full w-auto object-contain" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-3">About</p>
              <p className="text-sm text-neutral-700 leading-relaxed font-medium max-w-sm">{project.about}</p>
            </div>
          </div>

          <div className="md:col-start-8 md:col-span-5 flex flex-col gap-8">
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Client</p>
              <p className="text-sm font-bold text-neutral-900">{project.clientFullName}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Industry</p>
              <p className="text-sm font-bold text-neutral-900">{project.industry}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Year</p>
              <p className="text-sm font-bold text-neutral-900">{project.year}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Location</p>
              <p className="text-sm font-bold text-neutral-900">{project.location}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest mb-3">Services</p>
              <ul className="flex flex-col gap-2">
                {project.services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-xs font-bold text-neutral-900">
                    <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="8" height="8" transform="rotate(45 5 5)" fill="#DBB884"/>
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 mb-16 md:mb-24">
        <div className="w-full h-[41px] flex overflow-hidden opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <PatternBorder key={i} className="flex-shrink-0" />
          ))}
        </div>
      </div>

      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-y-0 md:gap-x-8">

          <div
            className="md:col-start-1 md:col-span-6 h-[300px] md:h-[520px] relative overflow-hidden"
            style={{ backgroundColor: project.bgColor }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={project.logo} alt={project.logoAlt} className="h-16 w-auto object-contain filter brightness-0 invert opacity-20" />
            </div>
          </div>

          <div className="md:col-start-8 md:col-span-5 md:mt-20 md:pl-4 flex flex-col justify-center">
            <p className="text-[9px] font-bold text-[#DBB884] mb-4 uppercase tracking-widest">Background</p>
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-5 leading-snug tracking-tight">
              {project.backgroundTitle}
            </h2>
            <p className="text-xs md:text-[13px] text-neutral-600 font-medium leading-relaxed">{project.backgroundBody}</p>
          </div>

          <div
            className="md:col-start-1 md:col-span-9 h-[200px] md:h-[360px] md:-mt-28 z-10 relative"
            style={{ backgroundColor: project.bgColor, opacity: 0.6 }}
          >
          </div>

          <div className="md:col-start-2 md:col-span-5 md:mt-12 z-20 relative">
            <p className="text-[9px] font-bold text-[#DBB884] mb-4 uppercase tracking-widest">{project.solutionLabel}</p>
            <p className="text-sm md:text-[13px] text-neutral-700 font-medium leading-relaxed">{project.solutionBody}</p>
          </div>

          <div
            className="md:col-start-8 md:col-span-5 h-[220px] md:h-[420px] md:-mt-16"
            style={{ backgroundColor: project.accentColor, opacity: 0.2 }}
          />

        </div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-16 border-t border-neutral-100">
        <div className="grid grid-cols-2 gap-8">
          <Link href={`/projects/${prevProject.id}`} className="group flex flex-col gap-3">
            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">← Previous</p>
            <div className="flex items-center gap-3">
              <img src={prevProject.logo} alt={prevProject.logoAlt} className="h-5 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <p className="text-xs font-bold text-neutral-700 group-hover:text-[#DBB884] transition-colors">{prevProject.headline}</p>
          </Link>
          <Link href={`/projects/${nextProject.id}`} className="group flex flex-col gap-3 items-end text-right">
            <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Next →</p>
            <div className="flex items-center gap-3">
              <img src={nextProject.logo} alt={nextProject.logoAlt} className="h-5 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <p className="text-xs font-bold text-neutral-700 group-hover:text-[#DBB884] transition-colors">{nextProject.headline}</p>
          </Link>
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
