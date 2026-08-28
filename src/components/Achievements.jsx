import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaUsers,
  FaChalkboardTeacher,
  FaRocket,
  FaMedal,
} from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      icon: <FaChalkboardTeacher />,
      title: "IoT Trainer",
      description:
        "Worked as an IoT Trainer at Huebits Tech Pvt. Ltd., delivering training and practical guidance on IoT, ESP32, sensors, and embedded systems.",
    },
    {
      icon: <FaUsers />,
      title: "Generative AI Internship Training",
      description:
        "Conducted Generative AI internship training for 91 CSE students at Sasi Institute.",
    },
    {
      icon: <FaCertificate />,
      title: "Multiple Professional Certifications",
      description:
        "Completed certifications and workshops across IoT, AI/ML, AWS, Cybersecurity, Power BI, Python, Robotics, and Professional Development.",
    },
    {
      icon: <FaTrophy />,
      title: "Technical Workshops",
      description:
        "Participated in and contributed to multiple technical workshops involving IoT, Artificial Intelligence, Robotics, and emerging technologies.",
    },
    {
      icon: <FaRocket />,
      title: "Hands-On Project Development",
      description:
        "Built multiple practical projects in IoT, Computer Vision, AI, Embedded Systems, and Automation.",
    },
    {
      icon: <FaMedal />,
      title: "Continuous Learning",
      description:
        "Continuously expanding technical skills in AI Agents, n8n Automation, IoT, Computer Vision, and modern cloud technologies.",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold mb-2">
            RECOGNITION & GROWTH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Achievements</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Highlights from my journey in technology, training, project
            development, continuous learning, and professional growth.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-gray-950 border border-gray-800 rounded-2xl p-7 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition">
                {achievement.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4">
                {achievement.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;