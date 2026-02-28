import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function LearnPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#1173A9] to-[#0A4D73] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-[1420px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm">Medical Billing Consultancy FAQs</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Why RCM Hub Medical Billing? Get Expert answers to common Billing, Prior Authorization, and RCM questions from providers.
            </p>
          </div>
        </section>

        <Faqs />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
