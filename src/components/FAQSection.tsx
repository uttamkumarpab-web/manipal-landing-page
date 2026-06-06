"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the Online MBA degree from Manipal University valid?",
    answer:
      "Yes, the Manipal Online MBA is UGC-entitled and widely recognized, making it valid for private and government job opportunities in India.",
  },
  {
    question: "What is the duration of the Online MBA program?",
    answer:
      "The program is designed to be completed in 24 months, allowing students to balance their studies with work and personal commitments.",
  },
  {
    question: "What are the eligibility criteria for admission?",
    answer:
      "Candidates must have a bachelor's degree from a recognized university. This program is suitable for both fresh graduates and working professionals looking for a flexible online MBA in India.",
  },
  {
    question: "Are there any EMI or financing options available?",
    answer:
      "Yes, we offer flexible EMI and financing options to make the program accessible to a wider range of students.",
  },
  {
    question: "Does Manipal Online MBA provide placement assistance?",
    answer:
      "Yes, students get access to placement assistance, career services, resume building, and interview preparation, making it a good choice for an online MBA with placement support.",
  },
  {
    question: "Can working professionals pursue this program?",
    answer:
      "Yes, the program is designed to be flexible and accommodate the schedules of working professionals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-[#f8f8f8]">
      <div className="max-w-6xl mx-auto px-4">
         <h2 className="text-2xl md:text-4xl font-extrabold text-[#0C1446] text-center mb-3">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Find answers to the most commonly asked questions about the Online MBA
          program.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-2 md:p-4"
                >
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg pr-4">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="text-[#ff6b35] text-xl font-medium">
                      +
                    </span>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}