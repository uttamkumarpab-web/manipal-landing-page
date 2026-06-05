import Image from "next/image";

export default function DegreeSection({ onApply }: { onApply: () => void }) {
  const benefits = [
    "UGC-entitled degree equivalent to on-campus programs",
    "Globally recognized and widely accepted",
    "Enhance your career prospects with a prestigious degree",
  ];

  return (
    <section className="py-12 md:py-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#ff7a45] to-[#ff6b35] rounded-3xl overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-6 md:p-10 lg:p-12">
            
            {/* Certificate Image */}
            <div className="flex justify-center">
              <div className="bg-white p-2 md:p-3 rounded-lg shadow-xl max-w-xl w-full">
                <Image
                  src="/landing/degree-admission.co.in/assets/images/certificate.png"
                  alt="Manipal Online MBA Degree Certificate"
                  width={900}
                  height={650}
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
                Earn a UGC-Entitled Online MBA Degree from Manipal University
              </h2>

              <ul className="space-y-5">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <span className="text-base md:text-xl font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button onClick={onApply} className="bg-white text-[#ff6b35] font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
                  Download Brochure
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}