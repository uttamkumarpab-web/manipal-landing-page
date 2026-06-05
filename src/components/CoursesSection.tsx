"use client";

export default function CoursesSection({ onApply }: { onApply: () => void }) {
  const courses = [
    {
      code: "Online MBA",
      title: "Master of Business Administration",
      duration: "24 months",
      points: ["UGC-entitled online degree", "NAAC A+ rated university"],
    },
    {
      code: "Online MA–JMC",
      title: "MA in Journalism & Mass Comm.",
      duration: "24 months",
      points: ["UGC-entitled online degree", "NAAC A+ accredited"],
    },
    {
      code: "Online MCA",
      title: "Master of Computer Applications",
      duration: "24 months",
      points: ["UGC-entitled online degree", "NAAC A+ accredited"],
    },
  ];

  return (
    <section className="w-full bg-[#FBF5EF] py-16 flex flex-col items-center" id="courses">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#0C1446] text-center mb-12">
        Courses <span className="text-[#F15A29]">Offered</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full px-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#F4E9DD] rounded-3xl shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <h4 className="text-[#0C1446] text-lg font-bold mb-1">{course.code}</h4>
              <h3 className="text-lg font-extrabold text-[#121212] leading-snug mb-3">{course.title}</h3>

              <div className="flex items-center text-gray-600 mb-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-medium">{course.duration}</span>
              </div>

              <ul className="text-gray-800 font-semibold space-y-2 mb-6">
                {course.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              <img
                src="/landing/degree-admission.co.in/assets/images/logo.webp"
                alt="Manipal University Jaipur"
                className="w-40 h-auto mb-6"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={onApply}
                className="bg-[#F15A29] text-white font-bold px-5 py-2 rounded-md shadow-md hover:bg-[#d94c1f] transition"
              >
                ENQUIRE NOW
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="text-[#0C1446] font-semibold hover:text-[#F15A29] transition"
              >
                VIEW COURSE &gt;
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onApply}
        className="mt-12 bg-[#F15A29] text-white font-extrabold px-10 py-3 rounded-full text-lg shadow-md hover:bg-[#d94c1f] transition-all"
      >
        Talk To Expert
      </button>
    </section>
  );
}
