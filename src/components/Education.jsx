import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Gayatri Vidya Parishad College for Degree and PG Courses (A)",
      period: "2024 - 2026",
      score: "CGPA: 8.01",
    },
    {
      degree: "Bachelor of Computer Science (Electronics)",
      institution: "Prism Degree and PG College, Affiliated to Andhra University",
      period: "2021 - 2024",
      score: "CGPA: 7.23",
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Chaitanya Junior College",
      period: "2019 - 2021",
      score: "Percentage: 74.1%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Saraswathi Vidya Vihar",
      period: "2018 - 2019",
      score: "Percentage: 97%",
    },
  ];

  return (
    <section id="education" className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-2">
            MY ACADEMIC JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Education & <span className="text-blue-500">Learning</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-blue-500 transition"
            >
              <div className="flex flex-col md:flex-row gap-5 md:items-center">

                {/* Icon */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-2xl">
                  <FaGraduationCap />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

                    <div>
                      <h3 className="text-xl md:text-2xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="text-blue-400 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="mt-4 inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-lg font-semibold">
                    {item.score}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;