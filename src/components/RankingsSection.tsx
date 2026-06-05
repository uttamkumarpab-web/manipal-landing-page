

const rankings = [
  {
    img: "naac.webp",
    title: "NAAC",
    text: "National Assessment and Accreditation Council",
  },
  {
    img: "ugc.webp",
    title: "UGC",
    text: "University Grants Commission",
  },
  {
    img: "AICTE.jpg.webp",
    title: "AICTE",
    text: "All India Council for Technical Education",
  },
  {
    img: "WES-2.webp",
    title: "WES",
    text: "World Education Services",
  },
];

export default function RankingsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl  mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">
            Recognized & <span className="text-[#F15A29]">Accredited By</span>
           
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 md:gap-6">
          {rankings.map((r, i) => (
            <div
              key={i}
              className="text-center p-4 md:p-5 bg-[#F4E9DD] rounded-2xl shadow-md hover:-translate-y-1 transition-transform"
            >
              <div className="w-[70px] md:w-[90px] mx-auto mb-4">
                <img
                  src={`/landing/degree-admission.co.in/assets/images/${r.img}`}
                  alt={r.title}
                  className="w-full h-auto rounded-full"
                />
              </div>

              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2">
                {r.title}
              </h3>

              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}