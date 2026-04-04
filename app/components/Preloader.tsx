"use client";

import React, { useState, useEffect } from 'react';
import PatternBorder from './PatternBorder';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const duration = 2500;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(hideTimer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#111111] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
        isLoading ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center animate-pulse">
        <div className="flex flex-col items-center gap-4">
          <img src="/pjaindonesia-preloader.png" alt="PJA Indonesia Symbol" className="h-20 w-auto object-contain" />
          <div className="font-extrabold text-2xl tracking-tight text-white">
            PJA<span className="font-medium text-neutral-400">INDONESIA</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full mb-4 md:mb-8">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16">
          <div className="relative w-full h-[41px] overflow-hidden opacity-50">
            <div className="absolute inset-0 flex opacity-20 filter grayscale">
              {Array.from({ length: 6 }).map((_, i) => (
                <PatternBorder key={i} className="flex-shrink-0 min-w-full md:min-w-0" />
              ))}
            </div>

            <div
              className="absolute inset-0 flex transition-all duration-75 ease-linear"
              style={{
                WebkitMaskImage: `linear-gradient(to right, black ${progress / 2}%, transparent ${progress / 2}%, transparent ${100 - progress / 2}%, black ${100 - progress / 2}%)`,
                maskImage: `linear-gradient(to right, black ${progress / 2}%, transparent ${progress / 2}%, transparent ${100 - progress / 2}%, black ${100 - progress / 2}%)`
              }}
            >
              <div className="flex w-full min-w-max">
                {Array.from({ length: 6 }).map((_, i) => (
                  <PatternBorder key={i} className="flex-shrink-0" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
