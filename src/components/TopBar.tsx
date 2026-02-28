import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#1173A9] text-white py-2 text-[13px] sm:text-[14px]">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-6">
          <a href="tel:+16405007848" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone size={14} className="sm:w-4 sm:h-4" /> +1 (640) 500-7848
          </a>
          <a href="tel:+13362236989" className="flex items-center gap-2 hover:opacity-80 transition-opacity hidden sm:flex">
            <Phone size={14} className="sm:w-4 sm:h-4" /> +1 (336) 223-6989
          </a>
        </div>
        <a href="mailto:info@rcmhubmedicalbilling.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail size={14} className="sm:w-4 sm:h-4" /> info@rcmhubmedicalbilling.com
        </a>
      </div>
    </div>
  );
}
