import React from 'react';

export default function WayangSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M100 0 C140 60, 200 150, 200 300 L0 300 C0 150, 60 60, 100 0 Z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M100 40 C100 40, 110 70, 130 90 C110 100, 100 120, 100 150 C100 120, 90 100, 70 90 C90 70, 100 40, 100 40 Z"
        fillRule="evenodd" clipRule="evenodd" fill="white"
      />
      <path
        d="M60 300 L60 220 L80 220 L80 240 C90 230, 110 230, 120 240 L120 220 L140 220 L140 300 Z"
        fill="white"
      />
      <path d="M30 260 C 10 210, 30 160, 60 140 C 25 170, 20 230, 40 280 C35 270, 30 260, 30 260 Z" fill="white"/>
      <path d="M170 260 C 190 210, 170 160, 140 140 C 175 170, 180 230, 160 280 C165 270, 170 260, 170 260 Z" fill="white"/>
      <path d="M100 190 L95 180 L85 185 L90 195 L80 200 L95 205 L100 215 L105 205 L120 200 L110 195 L115 185 L105 180 Z" fill="white" />
      <path d="M80 130 C 60 120, 70 90, 90 100" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M120 130 C 140 120, 130 90, 110 100" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
