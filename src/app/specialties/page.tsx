import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Specialties from "@/components/Specialties";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar />
      <Navbar />
      
      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-[#1173A9] to-[#0A4D73] py-20 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-[1420px] mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm">Specialty Billing & Maximum Reimbursement</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Medical Coding Specialties designed for U.S. practices. Ensure compliance and accuracy with our expert coders, reducing errors and improving revenue cycle.
            </p>
          </div>
        </section>

        <Specialties />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
