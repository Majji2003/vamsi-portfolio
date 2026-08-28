import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "IoT Trainer Intern",
      company: "Huebits Tech Pvt. Ltd.",
      period: "2026 - Present",
      icon: <FaBriefcase />,
      description:
        "Working as an IoT Trainer Intern, gaining hands-on experience in ESP32, Arduino, sensors, embedded systems, MQTT, and IoT project development.",
    },
    {
      title: "AI/ML Internship",
      company: "HMI Institution",
      period: "Internship",
      icon: <FaGraduationCap />,
      description:
        "Gained exposure to Artificial Intelligence and Machine Learning concepts while working on AI-based projects and practical applications.",
    },
    {
      title: "Short-Term Internship",
      company: "Wadhwani Institute",
      period: "Internship",
      icon: <FaBriefcase />,
      description:
        "Completed a short-term internship focused on professional skill development and practical learning.",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-2">
            MY JOURNEY
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Work <span className="text-blue-500">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-500/40 ml-4 md:ml-0">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="relative pl-10 pb-10"
            >
              {/* Timeline Icon */}
              <div className="absolute -left-5 top-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                {experience.icon}
              </div>

              {/* Card */}
              <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold">
                      {experience.title}
                    </h3>

                    <p className="text-blue-400">
                      {experience.company}
                    </p>
                  </div>

                  <span className="text-sm bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full w-fit">
                    {experience.period}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;