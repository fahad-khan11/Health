import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1173A9] text-white py-2 text-[13px] sm:text-[14px]">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-6">
        <a href="tel:7252372757" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Phone size={14} className="sm:w-4 sm:h-4" /> (725) 237-2757
        </a>
        <a href="mailto:info@prombs.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail size={14} className="sm:w-4 sm:h-4" /> info@prombs.com
        </a>
      </div>
    </div>
  );
}
