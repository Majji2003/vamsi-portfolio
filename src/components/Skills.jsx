import { motion } from "framer-motion";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaRobot,
  FaMicrochip,
  FaTools,
} from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaPython />,
      skills: ["Embedded C", "Python", "MicroPython"],
    },
    {
      title: "AI & Automation",
      icon: <FaRobot />,
      skills: [
        "AI Agents",
        "AI Tools",
        "n8n Automation",
        "Workflow Automation",
        "CNN",
        "OpenCV",
        "NumPy",
      ],
    },
    {
      title: "IoT & Embedded",
      icon: <FaMicrochip />,
      skills: [
        "ESP32",
        "Arduino",
        "Sensors",
        "Embedded Systems",
        "MQTT",
        "HTTP",
        "Blynk",
        "ThingSpeak",
      ],
    },
    {
      title: "Web Technologies",
      icon: (
        <div className="flex gap-2">
          <FaHtml5 />
          <FaCss3Alt />
        </div>
      ),
      skills: ["HTML", "CSS"],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: ["SQL", "Oracle"],
    },
    {
      title: "Development Tools",
      icon: <FaTools />,
      skills: [
        "VS Code",
        "Arduino IDE",
        "Thonny IDE",
        "Cisco Packet Tracer",
        "Canva",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-2">
            WHAT I WORK WITH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >
              <div className="text-4xl text-blue-400 mb-4">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-blue-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;