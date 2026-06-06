import Image from "next/image";

const advantages = [
  {
    icon: "fa-clock",
    title: "Duration",
    value: "2 Years",
  },
  {
    icon: "fa-desktop",
    title: "Mode",
    value: "100% Online",
  },
  {
    icon: "fa-clipboard-check",
    title: "Eligibility",
    value: "Bachelor's Degree",
  },
  {
    icon: "fa-file-invoice-dollar",
    title: "EMI Options",
    value: "Starting ₹4,167/month*",
  },
  {
    icon: "fa-users",
    title: "Specializations",
    value: "Finance | HR | Marketing\nData Science & more",
  },
];

export default function AdvantageSection({ onApply }: { onApply: () => void }) {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Program <span className="text-[#F15A29]">Highlights</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`
                flex items-start gap-4 py-4 px-2
                ${index !== advantages.length - 1 ? "lg:border-r lg:border-gray-200" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <i
                  className={`fas ${item.icon} text-[#ff6b35] text-xl`}
                ></i>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-700">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

         <h2 className="text-2xl md:text-4xl font-extrabold text-[#0C1446] text-center mt-10 mb-8">
        Our <span className="text-[#F15A29]">Partner Companies</span>
      </h2>

        <div className="w-full flex justify-center">
  <Image
    src="/landing/degree-admission.co.in/assets/images/partners.png"
    alt="Hiring Partners"
    width={1400}
    height={400}
    className="w-full max-w-6xl h-auto object-contain"
    priority
  />
</div>


        <div className="flex justify-center mt-8">
          <button onClick={onApply} className="bg-[#ff6b35] text-white font-semibold px-10 py-3 rounded-xl hover:bg-[#e55a2b] transition">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}