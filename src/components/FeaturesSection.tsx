const features = [
  {
    icon: "fa-graduation-cap",
    title: "UGC-Entitled Degree",
    desc: "Earn a prestigious degree that is UGC-entitled and widely accepted.",
  },
  {
    icon: "fa-briefcase",
    title: "Placement Assistance",
    desc: "Dedicated placement support to help you achieve your career goals.",
  },
  {
    icon: "fa-indian-rupee-sign",
    title: "Scholarships up to 30%",
    desc: "Merit-based scholarships available for eligible candidates.",
  },
  {
    icon: "fa-users",
    title: "Global Alumni Network",
    desc: "Connect with a strong network of alumni across the world.",
  },
  {
    icon: "fa-clock",
    title: "Flexible Learning",
    desc: "Learn at your own pace with recorded sessions and live classes.",
  },
  {
    icon: "fa-book",
    title: "Industry Relevant Curriculum",
    desc: "Updated curriculum designed with industry insights.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 bg-[#faf8f6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
          Why Choose{" "}
          <span className="text-[#ff6b35]">Online MBA</span> from Manipal
          University?
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm pt-5 px-2 text-center hover:shadow-md transition"
            >
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                <i
                  className={`fas ${item.icon} text-[#ff6b35] text-3xl`}
                ></i>
              </div>

              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-3 min-h-[48px]">
                {item.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}