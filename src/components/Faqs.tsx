"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqsData = [
  {
    question: "What does RCM Hub Medical Billing Do?",
    answer: "RCM Hub Medical Billing is a medical billing company that provides revenue cycle management services to healthcare providers. The company offers end-to-end billing solutions to help healthcare providers manage their billing process, including insurance verification, charge capture, claims submission, payment posting, denial management, and collections."
  },
  {
    question: "What types of healthcare providers do RCM Hub Medical Billing work with?",
    answer: "RCM Hub Medical Billing works with a wide range of healthcare providers, including physicians, dentists, chiropractors, mental health providers, and more. We have experience working with providers in various specialties and can provide customized billing solutions to meet each client's specific needs."
  },
  {
    question: "What services does RCM Hub Medical Billing offer?",
    answer: "RCM Hub Medical Billing offers a wide range of billing services, including medical billing and coding, revenue cycle management, AR and denial management, verification and prior authorization services, and more. We also offer customized solutions to meet the specific needs of each client."
  },
  {
    question: "How does RCM Hub Medical Billing help healthcare providers maximize their revenue?",
    answer: "RCM Hub Medical Billing uses advanced technology and industry best practices to help healthcare providers maximize their revenue. We will analyze your billing processes and identify areas for improvement, then work with you to implement changes that can help you maximize your revenue and minimize revenue loss."
  },
  {
    question: "Is my data secure with RCM Hub Medical Billing?",
    answer: "Yes, RCM Hub Medical Billing takes data security very seriously. We use advanced security measures to protect your data, including secure servers, data encryption, and secure data transfer protocols. We are fully compliant with HIPAA regulations and other industry standards for data security."
  },
  {
    question: "How quickly does RCM Hub Medical Billing file claims?",
    answer: "RCM Hub Medical Billing files claims as quickly as possible to ensure that you receive payment in a timely manner. Our goal is to submit claims within 24-48 hours of receiving the necessary information from your practice."
  },
  {
    question: "Can RCM Hub Medical Billing submit claims to all insurance providers?",
    answer: "RCM Hub Medical Billing can submit claims to most insurance providers, including Medicare, Medicaid, and private insurance providers. Our team stays current on industry changes and requirements to ensure that we can submit claims to any insurance provider you work with."
  },
  {
    question: "How does RCM Hub Medical Billing handle denied claims?",
    answer: "RCM Hub Medical Billing has a team of experts who specialize in managing denied claims. We will review the reason for the denial, determine the appropriate course of action, and work with insurance providers to resolve the issue and resubmit the claim if necessary."
  },
  {
    question: "Does RCM Hub Medical Billing provide real-time claim status updates?",
    answer: "Yes, RCM Hub Medical Billing provides real-time claim status updates so that our clients can stay informed about the status of their claims. We use advanced technology to track claims and provide timely updates on their status."
  },
  {
    question: "How does RCM Hub Medical Billing ensure that claims are accurate?",
    answer: "RCM Hub Medical Billing uses advanced technology and industry best practices to ensure that claims are accurate before submission. We review all claim information for accuracy, including patient information, procedure codes, and insurance information. If we identify any issues, we will work with your practice to correct them before submitting the claim."
  },
  {
    question: "How can RCM Hub Medical Billing assist with physician credentialing?",
    answer: "RCM Hub Medical Billing has a team of experts who specialize in physician credentialing. We can assist with all aspects of the credentialing process, including gathering and verifying all necessary documentation, completing and submitting applications, and following up with insurance providers and other organizations to ensure that the credentialing process is completed as quickly and efficiently as possible."
  },
  {
    question: "How long does physician credentialing take?",
    answer: "The length of the physician credentialing process can vary depending on the provider, the insurance provider, and other factors. However, the process can often take several months to complete. RCM Hub Medical Billing works to expedite the credentialing process as much as possible by staying on top of deadlines and following up with insurance providers and other organizations."
  },
  {
    question: "How does RCM Hub Medical Billing ensure the accuracy of credentialing information?",
    answer: "RCM Hub Medical Billing uses advanced technology and industry best practices to ensure the accuracy of credentialing information. We carefully review all documentation to ensure that it is complete and accurate, and we follow up with insurance providers and other organizations to confirm that all information is correct."
  },
  {
    question: "What are the benefits of outsourcing revenue cycle management to RCM Hub Medical Billing?",
    answer: "Outsourcing revenue cycle management to RCM Hub Medical Billing can help healthcare providers reduce administrative burdens, minimize revenue cycle errors, improve cash flow, and increase revenue. Our team of experts has the knowledge and experience to handle all aspects of revenue cycle management, allowing healthcare providers to focus on delivering quality patient care."
  },
  {
    question: "How can RCM Hub Medical Billing help healthcare providers improve their financial performance?",
    answer: "RCM Hub Medical Billing can help healthcare providers improve their financial performance by streamlining revenue cycle management processes, reducing denials and rejections, improving cash flow, and increasing revenue. Our team of experts works closely with healthcare providers to identify areas for improvement and implement strategies to optimize financial performance."
  },
  {
    question: "What specific practice management services does RCM Hub Medical Billing offer?",
    answer: "RCM Hub Medical Billing offers a wide range of practice management services, including patient scheduling, claims management, physician credentialing, verification and prior authorization, financial reporting, and more. Our solutions are customizable and scalable to meet the unique needs of your practice."
  },
  {
    question: "How can RCM Hub Medical Billing help me grow my healthcare practice?",
    answer: "By helping you achieve financial freedom and improving your practice management processes, RCM Hub Medical Billing can help you invest in new technologies, hire more staff, expand your services, and enhance patient experiences. We also provide ongoing support, training, and strategic guidance to help you grow and thrive in today's competitive healthcare landscape."
  },
  {
    question: "How does data move from my practice to RCM Hub Medical Billing?",
    answer: "RCM Hub Medical Billing uses secure data transfer protocols to protect your data during transfer. You can upload your data to our secure servers, or we can work with you to set up a secure data transfer process that meets your needs."
  },
  {
    question: "Does RCM Hub Medical Billing provide training on billing processes?",
    answer: "Yes, RCM Hub Medical Billing provides training on billing processes for healthcare providers and their staff. Our training sessions are designed to help you understand the billing process and learn best practices for managing your revenue cycle."
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mx-auto mb-16">
          <h2 className="text-[#E76169] font-bold text-[18px] uppercase tracking-[0.15em] mb-4">FREQUENTLY ASKED QUESTIONS</h2>
          <h3 className="text-[28px] md:text-[32px] font-extrabold text-[#054366] leading-tight">
            Focus On Patients We Will Do The Rest
          </h3>
          <div className="w-16 h-[3px] bg-[#1173A9] mx-auto mt-5 rounded-none"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqsData.map((faq, index) => (
            <div 
              key={index}
              className={`border border-gray-200 rounded-[5px] overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-[#1173A9]/30' : 'hover:border-gray-300'}`}
            >
              <button
                className={`w-full flex items-center justify-between p-5 text-left transition-colors duration-300 ${openIndex === index ? 'bg-[#F0F7FB]' : 'bg-white'}`}
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold text-[16px] md:text-[18px] ${openIndex === index ? 'text-[#1173A9]' : 'text-[#054366]'}`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${openIndex === index ? 'bg-[#1173A9] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 bg-[#F0F7FB] border-t border-[#1173A9]/10">
                  <p className="text-[#828282] text-[15px] leading-relaxed mt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
