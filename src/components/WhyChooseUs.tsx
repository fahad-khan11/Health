export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div className="relative w-full h-[400px] md:h-[550px] flex items-center justify-center lg:justify-start">
                    {/* The main background image (Screenshot 1) perfectly replicated in CSS */}
                    <div className="w-full md:w-[85%] h-[95%] md:h-[90%] rounded-[30px] bg-gradient-to-br from-[#45A39E] to-[#2BAE9F] overflow-hidden relative shadow-xl">
                        {/* Gradient flare / bokeh effects */}
                        <div className="absolute top-10 left-10 w-32 md:w-48 h-32 md:h-48 bg-white/20 blur-[50px] rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-32 md:w-48 h-32 md:h-48 bg-black/10 blur-[50px] rounded-full"></div>
                        
                        {/* +30% glass overlay box */}
                        <div className="absolute inset-0 flex items-center justify-center pb-12 md:pb-0">
                            <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl px-8 md:px-12 py-6 md:py-8 flex flex-col items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                                <span className="text-white text-[36px] md:text-[48px] font-bold mb-1 drop-shadow-md tracking-tight">+30%</span>
                                <span className="text-white/95 text-[11px] md:text-[14px] tracking-[0.15em] font-medium uppercase drop-shadow-sm">REVENUE GROWTH</span>
                            </div>
                        </div>
                    </div>

                    {/* The Floating 'Maximizing ROI' Card (Screenshot 2) */}
                    <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:bottom-8 md:-right-4 bg-white rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.12)] p-6 md:p-10 w-[90%] max-w-[320px] md:max-w-none md:w-[360px] flex flex-col items-center overflow-hidden border border-[rgba(17,115,169,0.1)] relative group">
                        {/* RCM Watermark */}
                        <div className="absolute bottom-0 right-2 text-[60px] md:text-[80px] font-black text-[#F4F8FB] uppercase tracking-tighter z-0 pointer-events-none select-none leading-none">RCM</div>
                        
                        <div className="relative z-10 flex flex-col items-center text-center w-full">
                            <div className="w-16 md:w-20 h-16 md:h-20 bg-[#F0F7FB] rounded-full flex items-center justify-center mb-4 md:mb-6">
                                <svg className="w-6 md:w-8 h-6 md:h-8 text-[#1173A9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h4 className="text-[18px] md:text-[22px] font-bold text-[#054366] mb-2 md:mb-3">Maximizing ROI</h4>
                            <p className="text-[#828282] text-[13px] md:text-[14px] leading-relaxed">
                                Ensuring consistent growth and minimized claim denials across the board.
                            </p>
                        </div>
                        
                        {/* Decorative gradient border effect matched specifically from the screenshot */}
                        <div className="absolute top-0 left-0 w-[5px] h-full bg-gradient-to-b from-[#1173A9] to-[#E76169] rounded-l-2xl"></div>
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br from-[#1173A9] to-[#E76169] opacity-[0.15]" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }}></div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div>
                        <h2 className="text-[#5DBDA3] font-bold text-lg uppercase tracking-wider mb-2">Why Choose Us</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-[#054366] leading-tight drop-shadow-sm">
                            Why Our Medical Billing and Coding Services Stand Out?
                        </h3>
                    </div>

                    <p className="text-[16px] text-[#828282] leading-relaxed">
                        As an industry-leading Medical Billing organization with exceptional achievements, we are committed to delivering exceptional Medical Billing and Coding services with unwavering dedication, translating vision into accelerated revenue growth. Keeping in view the sensitivities and complications involved in the process, we have trained and certified billing and coding experts who have the skills, experience, and knowledge to effectively navigate the challenges.
                    </p>
                    
                    <p className="text-[16px] text-[#828282] leading-relaxed">
                        With a deep understanding of the challenges faced by healthcare providers, we ensure that every aspect of the billing and coding process is handled with precision and care. Our team focuses on reducing errors, speeding up reimbursements, and maximizing revenue. All our incredibly talented and skilled professionals work with unwavering dedication and commitment to achieve the set targets through our end-to-end Medical Billing and Coding Solutions.
                    </p>
                    
                    <div className="pt-4 flex gap-4">
                        <div className="border-l-4 border-[#1173A9] pl-6 bg-[#F0F7FB] py-4 pr-4 rounded-r-lg w-full">
                           <h5 className="font-bold text-[#054366] mb-1">Trusted Partner</h5>
                           <p className="text-sm text-[#828282]">Over 500+ clinics rely on our tailored Revenue Cycle Management system.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
