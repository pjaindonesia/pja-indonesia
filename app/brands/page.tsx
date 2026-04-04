import React from 'react';
import PatternBorder from '../components/PatternBorder';

export default function BrandsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#DBB884] selection:text-white">

      <div className="w-full h-[41px] flex overflow-hidden mb-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <PatternBorder key={i} className="flex-shrink-0" />
        ))}
      </div>

      <section className="px-6 md:px-16 w-full max-w-[1400px] mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Brands</p>
          <div className="h-[1px] w-12 bg-[#DBB884]"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">Lorem ipsum dolor sit amet</h1>
      </section>

      <div className="w-full max-w-[1400px] mx-auto mb-12 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#E5E5E5] w-full aspect-[4/3] md:aspect-auto md:min-h-[600px] flex items-center justify-center">
            <span className="font-bold text-lg text-neutral-500 tracking-wide">Photo</span>
          </div>
          <div className="bg-white flex flex-col justify-center p-8 md:p-16 lg:p-24">
            <h2 className="text-3xl sm:text-[38px] font-bold text-neutral-900 mb-6 leading-tight">Lorem ipsum dolor<br/>sit amet</h2>
            <p className="text-neutral-600 mb-12 text-sm leading-relaxed max-w-sm font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex flex-wrap gap-4 mt-auto pt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-14 h-14 bg-[#E5E5E5] flex items-center justify-center text-[9px] text-center font-bold text-neutral-500 leading-none">
                  Logo<br/>Bra<br/>nds
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white flex flex-col justify-center p-8 md:p-16 lg:p-24 md:order-1 order-2">
            <h2 className="text-3xl sm:text-[38px] font-bold text-neutral-900 mb-6 leading-tight">Lorem ipsum dolor<br/>sit amet</h2>
            <p className="text-neutral-600 mb-12 text-sm leading-relaxed max-w-sm font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex flex-wrap gap-4 mt-auto pt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-14 h-14 bg-[#E5E5E5] flex items-center justify-center text-[9px] text-center font-bold text-neutral-500 leading-none">
                  Logo<br/>Bra<br/>nds
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#E5E5E5] w-full aspect-[4/3] md:aspect-auto md:min-h-[600px] flex items-center justify-center md:order-2 order-1">
            <span className="font-bold text-lg text-neutral-500 tracking-wide">Photo</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#E5E5E5] w-full aspect-[4/3] md:aspect-auto md:min-h-[600px] flex items-center justify-center">
            <span className="font-bold text-lg text-neutral-500 tracking-wide">Photo</span>
          </div>
          <div className="bg-white flex flex-col justify-center p-8 md:p-16 lg:p-24">
            <h2 className="text-3xl sm:text-[38px] font-bold text-neutral-900 mb-6 leading-tight">Lorem ipsum dolor<br/>sit amet</h2>
            <p className="text-neutral-600 mb-12 text-sm leading-relaxed max-w-sm font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex flex-wrap gap-4 mt-auto pt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-14 h-14 bg-[#E5E5E5] flex items-center justify-center text-[9px] text-center font-bold text-neutral-500 leading-none">
                  Logo<br/>Bra<br/>nds
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white flex flex-col justify-center p-8 md:p-16 lg:p-24 md:order-1 order-2">
            <h2 className="text-3xl sm:text-[38px] font-bold text-neutral-900 mb-6 leading-tight">Lorem ipsum dolor<br/>sit amet</h2>
            <p className="text-neutral-600 mb-12 text-sm leading-relaxed max-w-sm font-medium">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex flex-wrap gap-4 mt-auto pt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-14 h-14 bg-[#E5E5E5] flex items-center justify-center text-[9px] text-center font-bold text-neutral-500 leading-none">
                  Logo<br/>Bra<br/>nds
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#E5E5E5] w-full aspect-[4/3] md:aspect-auto md:min-h-[600px] flex items-center justify-center md:order-2 order-1">
            <span className="font-bold text-lg text-neutral-500 tracking-wide">Photo</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[41px] flex overflow-hidden bg-[#202020]">
        {Array.from({ length: 6 }).map((_, i) => (
          <PatternBorder key={i} className="flex-shrink-0 opacity-80" />
        ))}
      </div>

    </div>
  );
}
