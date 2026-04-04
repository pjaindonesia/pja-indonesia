"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Brands', path: '/brands' },
    { name: 'Projects', path: '/projects' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '#' },
  ];

  return (
    <header className="relative z-50 flex justify-between items-center py-6 md:py-8 px-6 md:px-16 w-full max-w-[1400px] mx-auto bg-transparent">

      <Link href="/" className="flex items-center gap-3 relative z-50">
        <div className="bg-[#D6B98C] w-8 h-8 md:w-9 md:h-9 rounded flex items-center justify-center p-1.5 shadow-sm">
          <img src="/logo-pja.png" alt="PJA Logo" className="w-full h-full object-contain" />
        </div>
        <div className="font-extrabold text-xl md:text-2xl tracking-tight text-neutral-800">
          PJA<span className="font-medium text-neutral-500">INDONESIA</span>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-10 font-bold text-xs text-neutral-600">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`transition-colors relative ${isActive ? 'text-[#DBB884] after:content-[""] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#DBB884]' : 'hover:text-neutral-900'}`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      <button
        className="md:hidden relative z-50 ml-4 w-10 h-10 flex items-center justify-center text-neutral-800 focus:outline-none bg-white/50 backdrop-blur-sm rounded-full"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle Menu"
      >
        <div className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 scale-50 rotate-90" : "opacity-100 scale-100 rotate-0"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 8H20M4 16H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-90"}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-[#F9F9F9] z-40 flex flex-col pt-32 px-10 md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8 text-[32px] font-black tracking-tighter text-neutral-800">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`transition-all duration-500 delay-[50ms] ${pathname === '/' ? 'text-[#DBB884]' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>Home</Link>
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`transition-all duration-500 ${pathname === link.path ? 'text-[#DBB884]' : ''} ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${(index + 2) * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
