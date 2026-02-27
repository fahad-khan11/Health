import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1173A9] text-white pt-20">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-extrabold text-white">PRO</span>
              <span className="text-3xl font-light text-[#E76169]">MBS</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              Professional Medical Billing Solutions designed to resolve issues in your Revenue Cycle Management, accelerating financial results through intelligent processes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E76169] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E76169] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E76169] transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E76169] transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#E76169] -mb-2 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Home</Link></li>
              <li><Link href="/about" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Services</Link></li>
              <li><Link href="/specialties" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Specialties</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#E76169] -mb-2 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Revenue Cycle Management</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Medical Billing & Coding</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Physicians Credentialing</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">AR & Denial Management</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-transform">Verification & Prior Auth</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#E76169] -mb-2 rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#5DBDA3] shrink-0 mt-1" size={20} />
                <span className="text-white/80 text-sm">Head Office | Houston, Nevada Office, Colorado Office, Las Vegas Office, Virginia Office</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#5DBDA3] shrink-0" size={20} />
                <a href="tel:7252372757" className="text-white/80 hover:text-white">(725) 237-2757</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#5DBDA3] shrink-0" size={20} />
                <a href="mailto:info@prombs.com" className="text-white/80 hover:text-white">info@prombs.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="bg-[#054366] py-6">
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} PRO-MBS. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
