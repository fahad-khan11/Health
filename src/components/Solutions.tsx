import { 
  Stethoscope, FileText, HeartPulse, 
  BarChart4, ClipboardCheck, ShieldCheck, 
  Activity, PhoneCall 
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Medical Billing & Coding Services",
    description: "Commit to validating your financial success with our Medical Billing and Coding Services.",
    icon: Stethoscope
  },
  {
    title: "Physicians Credentialing Services",
    description: "Enhance Your Practice through seamless enrollment with our Insurance Credentialing Services.",
    icon: HeartPulse
  },
  {
    title: "Revenue Cycle Management",
    description: "Experience our RCM solutions and methodical processes to meet your clinic's requirements.",
    icon: Activity
  },
  {
    title: "AR & Denial Management Services",
    description: "Recover your lost income and supercharge revenue with our A/R Denial Management Services.",
    icon: BarChart4
  },
  {
    title: "Medical Billing and Coding Audit",
    description: "Make data informed decisions and ensure compliance through our Medical Billing and Coding Audit.",
    icon: ClipboardCheck
  },
  {
    title: "Verification & Prior Authorization",
    description: "Reduce your claim denials with our prompt Verification and Prior Authorization Services.",
    icon: ShieldCheck
  },
  {
    title: "Ambulatory Surgical Center Billing",
    description: "Experience our reliable billing system to keep up with the demands of Ambulatory Surgical Centers.",
    icon: FileText
  },
  {
    title: "Contact Center & Patient Scheduling",
    description: "Increase your patient satisfaction through our 24/7 Contact Center and Patient Scheduling Services.",
    icon: PhoneCall
  }
];

export default function Solutions() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-[#E76169] font-bold text-[18px] uppercase tracking-[0.15em] mb-4">OUR SOLUTIONS</h2>
          <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#054366] leading-tight flex flex-col items-center justify-center">
            <span>Comprehensive Medical Billing Solutions</span>
            <span>Tailored for You</span>
          </h3>
          <div className="w-16 h-[3px] bg-[#1173A9] mx-auto mt-5 rounded-none"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Link 
                href="/contact"
                key={index} 
                className="group relative bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer block"
              >
                {/* Hover effect gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1173A9] to-[#0A4D73] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-[#F0F7FB] group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                    <Icon className="text-[#1173A9] group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-[#054366] group-hover:text-white mb-4 transition-colors duration-300 leading-tight">
                    {solution.title}
                  </h4>
                  <p className="text-[#828282] group-hover:text-white/90 text-[15px] leading-relaxed transition-colors duration-300 flex-grow">
                    {solution.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-white/20 transition-colors duration-300">
                     <span className="text-[#E76169] group-hover:text-white font-semibold text-[14px] flex items-center gap-2">
                        Contact Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                     </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
