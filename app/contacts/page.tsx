import React from 'react';

export default function Contacts() {
  return (
    <div className="w-full bg-white relative pb-32">
      <section 
        className="w-full pt-32 pb-48 md:pb-64 relative flex items-center justify-center bg-[#CEAB7D] overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 4vw), 0 100%)" }}
      >
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{ 
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"0\" cy=\"0\" r=\"40\" stroke=\"%23000000\" stroke-width=\"1.5\" fill=\"none\"%2F%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"40\" stroke=\"%23000000\" stroke-width=\"1.5\" fill=\"none\"%2F%3E%3Ccircle cx=\"80\" cy=\"0\" r=\"40\" stroke=\"%23000000\" stroke-width=\"1.5\" fill=\"none\"%2F%3E%3Ccircle cx=\"0\" cy=\"80\" r=\"40\" stroke=\"%23000000\" stroke-width=\"1.5\" fill=\"none\"%2F%3E%3Ccircle cx=\"80\" cy=\"80\" r=\"40\" stroke=\"%23000000\" stroke-width=\"1.5\" fill=\"none\"%2F%3E%3C/svg%3E')",
            backgroundSize: "80px 80px",
            backgroundPosition: "center top"
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 mt-10 md:mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white mb-6 md:mb-8 tracking-tight">
            Feel free to get in touch
          </h1>
          <p className="text-white/90 text-sm md:text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
            Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with <a href="#" className="underline decoration-white/50 underline-offset-4 hover:text-white transition-colors">unicode;</a> an
          </p>
        </div>
      </section>

      <section className="w-full max-w-[1200px] mx-auto px-6 -mt-32 md:-mt-48 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <div className="w-full lg:w-[45%] flex-shrink-0">
            <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-8">Leave your messages</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="text-[11px] font-bold text-neutral-900">Names</label>
                    <input type="text" placeholder="Your Names" className="w-full h-[46px] bg-[#F4F4F4] rounded-[5px] px-4 text-[13px] font-medium text-neutral-800 placeholder:text-neutral-400 outline-none transition-all shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)] focus:ring-1 focus:ring-black/10" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[11px] font-bold text-neutral-900">Email</label>
                    <input type="email" placeholder="Your Email" className="w-full h-[46px] bg-[#F4F4F4] rounded-[5px] px-4 text-[13px] font-medium text-neutral-800 placeholder:text-neutral-400 outline-none transition-all shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)] focus:ring-1 focus:ring-black/10" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold text-neutral-900">Subject</label>
                  <input type="text" placeholder="Subject" className="w-full h-[46px] bg-[#F4F4F4] rounded-[5px] px-4 text-[13px] font-medium text-neutral-800 placeholder:text-neutral-400 outline-none transition-all shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)] focus:ring-1 focus:ring-black/10" />
                </div>

                <div className="space-y-2.5">
                  <label className="text-[11px] font-bold text-neutral-900">Message</label>
                  <textarea placeholder="Message" rows={5} className="w-full bg-[#F4F4F4] rounded-[5px] p-4 text-[13px] font-medium text-neutral-800 placeholder:text-neutral-400 outline-none transition-all resize-none shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)] focus:ring-1 focus:ring-black/10" />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 gap-6">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center w-[14px] h-[14px]">
                      <input type="checkbox" className="peer appearance-none w-[14px] h-[14px] border border-neutral-300 rounded-[3px] checked:bg-[#DBB884] checked:border-[#DBB884] transition-all cursor-pointer" />
                      <svg className="absolute w-[8px] h-[8px] pointer-events-none opacity-0 peer-checked:opacity-100 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-[11px] text-neutral-600 font-bold group-hover:text-neutral-900 transition-colors">I Agree to privacy policy</span>
                  </label>
                  <button type="submit" className="relative overflow-hidden group w-full sm:w-[206px] h-[39px] flex items-center justify-center bg-[#2E3A36]/90 backdrop-blur-[17.5px] text-white text-[10px] font-bold uppercase rounded-[99px] transition-all duration-500 shrink-0 shadow-[inset_0px_4px_4px_#B2B2B2] hover:-translate-y-0.5">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                      style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"0\" cy=\"0\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"40\" cy=\"40\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"80\" cy=\"0\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"0\" cy=\"80\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3Ccircle cx=\"80\" cy=\"80\" r=\"40\" stroke=\"%23ffffff\" stroke-width=\"4\" fill=\"none\"%2F%3E%3C/svg%3E')",
                        backgroundSize: "24px 24px"
                      }}
                    />
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <span className="relative z-10 tracking-[0.15em] group-hover:tracking-[0.2em] transition-all duration-500 block w-full text-center">SHOW MORE</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-[55%] lg:pt-48 pb-10">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 leading-[1.1] mb-6 tracking-tight">
              Dont hesitate to contact us
            </h2>
            <p className="text-neutral-600 text-sm md:text-[15px] leading-relaxed mb-10 max-w-lg font-medium">
              Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with <a href="#" className="underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 transition-colors">unicode;</a> an
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14 lg:max-w-lg lg:ml-0 lg:mr-auto">
              <div className="bg-[#F4F4F4] rounded-[5px] p-5 flex items-center gap-4 transition-all duration-300 group cursor-default shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)]">
                <div className="w-9 h-9 rounded-full bg-neutral-200/80 flex items-center justify-center shrink-0 group-hover:bg-neutral-300 transition-colors shadow-sm">
                  <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-neutral-900 mb-0.5">Office</h4>
                  <p className="text-[11px] text-neutral-500 font-medium">JL bandung cibogobawah</p>
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-[5px] p-5 flex items-center gap-4 transition-all duration-300 group cursor-default shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)]">
                <div className="w-9 h-9 rounded-full bg-[#f6ebdf] flex items-center justify-center shrink-0 group-hover:bg-[#f1e0ce] transition-colors shadow-sm">
                  <svg className="w-4 h-4 text-[#ba8e66]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-neutral-900 mb-0.5">Phone</h4>
                  <p className="text-[11px] text-neutral-500 font-medium">+62 888 900 222</p>
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-[5px] p-5 flex items-center gap-4 transition-all duration-300 group cursor-default shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)]">
                <div className="w-9 h-9 rounded-full bg-[#fdf5eb] flex items-center justify-center shrink-0 group-hover:bg-[#faeedb] transition-colors shadow-sm">
                  <svg className="w-4 h-4 text-[#e0b07b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-neutral-900 mb-0.5">Work Hours</h4>
                  <p className="text-[11px] text-neutral-500 font-medium">08:00 - 17:00 WIB</p>
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-[5px] p-5 flex items-center gap-4 transition-all duration-300 group cursor-default shadow-[0px_4px_4px_rgba(0,0,0,0.1),inset_0px_4px_4px_rgba(0,0,0,0.1)]">
                <div className="w-9 h-9 rounded-full bg-neutral-200/80 flex items-center justify-center shrink-0 group-hover:bg-neutral-300 transition-colors shadow-sm">
                  <svg className="w-4 h-4 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-neutral-900 mb-0.5">Email</h4>
                  <p className="text-[11px] text-neutral-500 font-medium">pjaindonesia@pjaindo.com</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-neutral-900">Social Media</h3>
              <div className="flex items-center gap-2">
                {[
                  { id: 'insta', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                  { id: 'linkedin', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.606 0 4.267 2.372 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  { id: 'twitter', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
                  { id: 'fb', path: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z' }
                ].map((icon) => (
                  <a key={icon.id} href="#" className="w-8 h-8 rounded-[6px] bg-[#d9bd9a] hover:bg-[#A48259] flex items-center justify-center transition-colors shadow-sm">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d={icon.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
