import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactForm({ isModal = false }: { isModal?: boolean }) {
  const innerContent = (
    <div className={`grid grid-cols-1 md:grid-cols-2 bg-white ${isModal ? '' : 'gap-12 rounded-2xl shadow-xl border border-gray-100'} overflow-hidden`}>
          
          <div className="p-8 md:p-14 bg-gradient-to-br from-[#1173A9] to-[#0A4D73] text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Talk to an Expert</h2>
            <p className="text-[#F0F7FB] text-base md:text-lg mb-8 opacity-90 leading-relaxed">
              We're available 24/7. Schedule a call with one of our experts now to see how we can assist in maximizing your revenue.
            </p>
            
            <div className="space-y-4 md:space-y-6 mt-2 md:mt-4">
              <a href="tel:+16405007848" className="flex items-center gap-4 md:gap-5 hover:bg-white/10 p-3 md:p-4 -ml-3 md:-ml-4 rounded-xl transition-all duration-300 group cursor-pointer w-fit border border-transparent hover:border-white/10">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 group-hover:bg-[#E76169] group-hover:scale-110 shadow-sm rounded-full flex items-center justify-center transition-all shrink-0 duration-300">
                    <Phone className="text-white w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-lg md:text-xl text-white group-hover:text-[#F0F7FB] transition-colors">Call Us Directly</h4>
                    <p className="text-[14px] md:text-[15px] text-white/80 mt-1 flex flex-col gap-0.5"><span>+1 (640) 500-7848</span><span>+1 (336) 223-6989</span></p>
                 </div>
              </a>
              
              <a href="mailto:info@rcmhubmedicalbilling.com" className="flex items-center gap-4 md:gap-5 hover:bg-white/10 p-3 md:p-4 -ml-3 md:-ml-4 rounded-xl transition-all duration-300 group cursor-pointer w-fit border border-transparent hover:border-white/10">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 group-hover:bg-[#E76169] group-hover:scale-110 shadow-sm rounded-full flex items-center justify-center transition-all shrink-0 duration-300">
                    <Mail className="text-white w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-lg md:text-xl text-white group-hover:text-[#F0F7FB] transition-colors">Email Us</h4>
                    <p className="text-[14px] md:text-[15px] text-white/80 mt-1">info@rcmhubmedicalbilling.com</p>
                 </div>
              </a>

              <a href="https://wa.me/16405007848" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-5 hover:bg-white/10 p-3 md:p-4 -ml-3 md:-ml-4 rounded-xl transition-all duration-300 group cursor-pointer w-fit border border-transparent hover:border-white/10">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 group-hover:bg-[#E76169] group-hover:scale-110 shadow-sm rounded-full flex items-center justify-center transition-all shrink-0 duration-300">
                    <MessageCircle className="text-white w-5 h-5 md:w-6 md:h-6" />
                 </div>
                 <div>
                    <h4 className="font-semibold text-lg md:text-xl text-white group-hover:text-[#F0F7FB] transition-colors">WhatsApp Us</h4>
                    <p className="text-[14px] md:text-[15px] text-white/80 mt-1">+1 (640) 500-7848</p>
                 </div>
              </a>
            </div>
          </div>

          <div className="p-8 md:p-14">
            <h3 className="text-2xl font-bold text-[#054366] mb-6">Request a Callback</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">First Name <span className="text-[#E76169]">*</span></label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1173A9]/50 focus:border-[#1173A9] transition-all" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1173A9]/50 focus:border-[#1173A9] transition-all" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-[#E76169]">*</span></label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1173A9]/50 focus:border-[#1173A9] transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-[#E76169]">*</span></label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1173A9]/50 focus:border-[#1173A9] transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Select Title <span className="text-[#E76169]">*</span></label>
                <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1173A9]/50 focus:border-[#1173A9] transition-all text-gray-600">
                  <option>Please Select</option>
                  <option>Physician</option>
                  <option>Healthcare Provider</option>
                  <option>Practice Management</option>
                  <option>Administrative</option>
                  <option>Billing Service Provider</option>
                  <option>Hospital Staff</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea className="w-full bg-gray-50 border border-gray-200 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1173A9]/50 focus:border-[#1173A9] transition-all h-24 resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-[#C82333] text-white py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-opacity shadow-md mt-2">
                Submit Request
              </button>
            </form>
          </div>
    </div>
  );

  if (isModal) {
    return innerContent;
  }

  return (
    <section className="bg-[#F0F7FB] py-16">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        {innerContent}
      </div>
    </section>
  );
}
