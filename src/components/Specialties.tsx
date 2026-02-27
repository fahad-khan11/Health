import {
  Stethoscope, Activity, Baby, Pill, Thermometer, Scissors, Radiation,
  Ear, Shield, Eye, Dna, Heart, Brain, Bone, Syringe,
  FlaskConical, Scan, Clipboard, HeartPulse, Microscope, LineChart
} from "lucide-react";

const specialtiesLeft = [
  { name: "Gastroenterology Billing Services", icon: Stethoscope },
  { name: "Physical Therapy Billing Services", icon: Activity },
  { name: "Pediatric Medical Billing Services", icon: Baby },
  { name: "Pain Management Billing Services", icon: Pill },
  { name: "Internal Medicine Billing Services", icon: Thermometer },
  { name: "Plastic Surgery Billing Services", icon: Scissors },
  { name: "Radiation Oncology Billing Services", icon: Radiation },
  { name: "Otolaryngology Billing Services", icon: Ear },
  { name: "Dermatology Billing Services", icon: Shield },
  { name: "Ophthalmology Billing Services", icon: Eye },
  { name: "Oncology Billing Services", icon: Dna },
];

const specialtiesRight = [
  { name: "Cardiology Billing Services", icon: Heart },
  { name: "Neurosurgery Billing Services", icon: Brain },
  { name: "Chiropractic Billing Services", icon: Bone },
  { name: "Behavioral Health Billing", icon: Microscope },
  { name: "Orthopedic Billing Services", icon: Activity },
  { name: "Vascular Surgery Billing Services", icon: Syringe },
  { name: "Urology Billing Services", icon: FlaskConical },
  { name: "Radiology Billing Services", icon: Scan },
  { name: "Anesthesiology Billing Services", icon: Clipboard },
  { name: "General Surgery Billing Services", icon: HeartPulse },
  { name: "Colon and Rectal Billing Services", icon: LineChart },
];

const expertiseList = [
  "Patient Scheduling & Registration",
  "Verification of Benefits",
  "Authorization & Referral",
  "Medical Billing",
  "Medical Coding",
  "Medical Billing Financial Audit",
  "Charge Entry & Payment Posting",
  "Billing & Coding Audit",
  "Denial Management",
  "AR Management",
  "Revenue Cycle Optimization",
  "Old AR Management",
  "Patient Billing & Statements",
  "Collections Services",
  "Patient Help 24/7"
];

export default function Specialties() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side Content */}
          <div className="lg:w-2/3">
            <h3 className="text-[#1173A9] text-[20px] md:text-[22px] font-medium leading-relaxed mb-6">
              Here are the top specialties, we are helping healthcare providers throughout the United States to address their Medical Billing and Coding Services' challenges.
            </h3>
            
            <p className="text-[#828282] text-[15px] leading-relaxed mb-6">
              Our Certified Billing & Coding teams ensure accuracy, compliance, and maximum reimbursements, giving you confidence in every claim. With advanced technology and streamlined processes, we reduce errors, accelerate reimbursements, and optimize your revenue cycle.
            </p>
            
            <p className="text-[#2a3b4c] text-[15px] font-bold leading-relaxed mb-10">
              Choose us for Medical Billing and Coding Solutions that turn complexities into opportunities and transform challenges into opportunities and elevate your practice to new heights.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              
              {/* Left Column Specialties */}
              <div className="space-y-6">
                {specialtiesLeft.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-[50px] h-[50px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_4px_15px_rgba(17,115,169,0.2)]">
                        <Icon className="text-[#E76169] group-hover:text-[#1173A9] transition-colors duration-300" size={22} strokeWidth={1.5} />
                      </div>
                      <span className="text-[#2a3b4c] text-[15px] font-medium group-hover:text-[#1173A9] transition-colors">{spec.name}</span>
                    </div>
                  );
                })}
              </div>

              {/* Right Column Specialties */}
              <div className="space-y-6">
                {specialtiesRight.map((spec, i) => {
                  const Icon = spec.icon;
                  return (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-[50px] h-[50px] rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_4px_15px_rgba(17,115,169,0.2)]">
                        <Icon className="text-[#E76169] group-hover:text-[#1173A9] transition-colors duration-300" size={22} strokeWidth={1.5} />
                      </div>
                      <span className="text-[#2a3b4c] text-[15px] font-medium group-hover:text-[#1173A9] transition-colors">{spec.name}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Side 'Our Expertise' */}
          <div className="lg:w-1/3">
            <div className="rounded-[6px] overflow-hidden shadow-xl border border-gray-100 sticky top-28">
              <div className="bg-[#E76169] text-white py-[18px] px-6 font-bold text-[18px] tracking-wide">
                Our Expertise
              </div>
              <ul className="flex flex-col bg-[#1173A9]">
                {expertiseList.map((item, index) => (
                  <li 
                    key={index} 
                    className="text-white/90 py-3.5 px-6 text-[14px] font-medium border-b border-white/10 last:border-0 hover:bg-[#0A4D73] hover:text-white transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span className="opacity-70">-</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
