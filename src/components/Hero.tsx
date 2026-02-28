"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-[#F0F7FB] py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-[#1173A9] font-bold text-lg uppercase tracking-wider">
                RCM Hub Medical Billing Solutions
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#054366] leading-tight drop-shadow-sm">
                Speeds Up the <br />
                <span className="text-[#1173A9]">Revenue Cycle</span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-[#828282] leading-relaxed max-w-xl">
                End-to-End Medical Billing Solutions for Healthcare Physicians. Our advanced infrastructure and strategies are designed to resolve issues in your Revenue Cycle Management.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 pt-4 pb-6">
                {[
                  "Increase Revenue Upto 30%",
                  "Secure and HIPAA Compliant",
                  "Dedicated Credentialing Team",
                  "24/7 Ongoing Reporting & Support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="text-[#5DBDA3] shrink-0" size={20} />
                    <span className="text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#E76169] text-white px-8 py-4 rounded-[5px] font-medium text-[16px] hover:bg-opacity-90 transition-all shadow-md mt-4 hover:scale-105 transform"
              >
                Get a Free Consultation
              </button>
            </div>

            {/* Right Image/Graphic area */}
            <div className="relative flex w-full h-full min-h-[300px] md:min-h-[400px] items-center justify-center lg:justify-end mt-8 md:mt-0">
               <img 
                  src="/doctor_phone_billing.png" 
                  alt="Medical Billing Services on Smartphone" 
                  className="w-full max-w-[350px] md:max-w-[550px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </div>
        
        {/* Background Decorative blob */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5DBDA3]/10 rounded-full blur-3xl z-0"></div>
      </section>

      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
