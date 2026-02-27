import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#1173A9] to-[#0A4D73] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-[1420px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We're available 24/7. Get in touch with our experts to discuss how we can maximize your revenue cycle management.
            </p>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
