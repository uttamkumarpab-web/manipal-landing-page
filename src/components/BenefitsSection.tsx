const benefits = [
  { icon: "fa-laptop-code", title: "Flexible & convenient schedule", desc: "Learn at your own pace with our flexible online learning platform that fits your busy lifestyle and work commitments." },
  { icon: "fa-graduation-cap", title: "At par with on-campus degrees", desc: "Our online degrees maintain the same academic rigor and quality as our on-campus programs, ensuring you receive world-class education." },
  { icon: "fa-chalkboard-teacher", title: "Experienced faculty & mentors", desc: "Learn from industry experts and experienced faculty members who bring real-world insights to your learning experience." },
  { icon: "fa-network-wired", title: "Prestigious Manipal alumni Network", desc: "Join a network of over 300,000 Manipal alumni worldwide and leverage connections for career growth and opportunities." },
];

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Online Manipal Advantages
        </h2>
        <div className="flex flex-wrap">
          {benefits.map((b, i) => (
            <div key={i} className="w-full md:w-1/2 px-3 mb-6">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="text-3xl md:text-4xl text-[#ff6b35] mt-2"><i className={`fas ${b.icon}`}></i></div>
                <div>
                  <h5 className="font-semibold text-lg mb-1">{b.title}</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
