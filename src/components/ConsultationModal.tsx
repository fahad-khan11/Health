import { X } from "lucide-react";
import ContactForm from "./ContactForm";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-[1200px] my-8 flex justify-center" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-2 md:-top-6 md:-right-6 z-10 text-gray-500 hover:text-black transition-colors bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg"
        >
          <X size={24} />
        </button>
        <div className="w-full">
          <ContactForm isModal={true} />
        </div>
      </div>
    </div>
  );
}
