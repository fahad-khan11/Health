"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-[80px] items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-extrabold text-[#1173A9]">PRO</span>
              <span className="text-3xl font-light text-[#E76169]">MBS</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-10 items-center font-bold text-[16px] text-[#2a3b4c]">
            <Link href="/" className="hover:text-[#1173A9] transition-colors">Home</Link>
            <Link href="/solutions" className="hover:text-[#1173A9] transition-colors">Solutions</Link>
            <Link href="/specialties" className="hover:text-[#1173A9] transition-colors">Specialties</Link>
            <Link href="/learn" className="hover:text-[#1173A9] transition-colors">Faqs</Link>
            <Link href="/contact" className="hover:text-[#1173A9] transition-colors">Contact</Link>
          </div>

          {/* Desktop Call to Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <button className="bg-[#1173A9] text-white px-5 py-2.5 rounded-[5px] font-semibold text-[14px] hover:bg-opacity-90 transition-all shadow-sm">
                Let's Connect
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-[#1173A9] hover:text-[#0A4D73] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg border-b border-gray-100 transition-all duration-300 ease-in-out origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col font-bold text-[16px] text-[#2a3b4c]">
          <Link href="/" onClick={toggleMobileMenu} className="block hover:text-[#1173A9] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">Home</Link>
          <Link href="/solutions" onClick={toggleMobileMenu} className="block hover:text-[#1173A9] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">Solutions</Link>
          <Link href="/specialties" onClick={toggleMobileMenu} className="block hover:text-[#1173A9] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">Specialties</Link>
          <Link href="/learn" onClick={toggleMobileMenu} className="block hover:text-[#1173A9] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">Faqs</Link>
          <Link href="/contact" onClick={toggleMobileMenu} className="block hover:text-[#1173A9] hover:bg-gray-50 px-3 py-2 rounded-md transition-colors">Contact</Link>
          
          <div className="pt-4 border-t border-gray-100">
            <Link href="/contact" onClick={toggleMobileMenu} className="block w-full text-center">
              <button className="w-full bg-[#1173A9] text-white px-5 py-3 rounded-[5px] font-semibold text-[15px] hover:bg-opacity-90 transition-all shadow-sm">
                Let's Connect
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
