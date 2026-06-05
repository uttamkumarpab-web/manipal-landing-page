"use client";

import Header from "./Header";
import InquiryForm from "./InquiryForm";

export default function HeroSection({
  onApply,
}: {
  onApply: () => void;
}) {
  const badges = [
    { img: "ugc.webp", text: "UGC Entitled" },
    { img: "aicte.png", text: "AICTE Approved" },
    { img: "naac.webp", text: "NAAC A+ Accredited" },
    { img: "wes.png", text: "WES Recognized" },
  ];

  return (
    <section
      className="relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url(/landing/degree-admission.co.in/assets/images/heroImage.png)",
      }}
    >
      <Header onApply={onApply} />

      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-14">
        <div className="grid lg:grid-cols-12 gap-4 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8">
            <p className="text-gray-700 font-medium mb-4">
              UGC-Entitled | NAAC A+ Accredited
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Online MBA from
              <span className="block text-[#ff6b35]">
                Manipal University
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-5 max-w-lg">
              Advance your career with a globally recognized degree from a
              trusted university.
            </p>

           <div className="mt-8 bg-white rounded-2xl p-2 max-w-lg shadow-sm">
  <div className="grid grid-cols-4 gap-2">
    {badges.map((item, i) => (
      <div
        key={i}
        className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2 text-center md:text-left"
      >
        <img
          src={`/landing/degree-admission.co.in/assets/images/${item.img}`}
          alt={item.text}
          className="w-7 h-7 md:w-8 md:h-8 object-contain flex-shrink-0"
        />

        <span className="leading-tight text-[10px] md:text-xs text-gray-700">
          {(() => {
            const words = item.text.split(" ");
            const lastWord = words.pop();

            return (
              <>
                {words.join(" ")}
                <br />
                {lastWord}
              </>
            );
          })()}
        </span>
      </div>
    ))}
  </div>
</div>

         <div className="flex flex-nowrap max-w-lg gap-3 mt-8">
  <button
    onClick={onApply}
    className="w-1/2 bg-[#ff6b35] hover:bg-[#e95a26] text-white px-3 md:px-6 py-3 md:py-4 rounded-lg font-semibold transition text-sm md:text-base flex items-center justify-center gap-1 md:gap-2"
  >
    <span>Get Free Counselling</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  </button>

  <button
    onClick={onApply}
    className="w-1/2 bg-[#ff6b35] hover:bg-[#e95a26] text-white px-3 md:px-6 py-3 md:py-4 rounded-lg font-semibold transition text-sm md:text-base flex items-center justify-center gap-1 md:gap-2"
  >
    <span>Download Brochure</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-4 h-4 md:w-5 md:h-5 text-white shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </button>
</div>

            {/* Admission Card */}
            <div className="mt-8 bg-white rounded-xl shadow-sm border p-4 max-w-md">
              <div className="flex items-center gap-3">
                <div className="text-[#ff6b35] text-xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Admissions Open for 2026 Batch
                  </h4>
                  <p className="text-sm text-gray-500">
                    Limited Seats | Enroll Now
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-[#ff6b35] text-center text-2xl font-bold mb-5">
                Check Eligibility Now
              </h3>

              <InquiryForm id="mainFormOne" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}