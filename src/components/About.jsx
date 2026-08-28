import { motion } from "framer-motion";
import { FaCode, FaMicrochip, FaRobot } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaMicrochip />,
      title: "IoT & Embedded Systems",
      description: "Building real-world solutions using ESP32, Arduino, sensors, MQTT, and cloud IoT.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Automation",
      description: "Exploring AI Agents, n8n automation, AI tools, and intelligent workflows.",
    },
    {
      icon: <FaCode />,
      title: "Problem Solving",
      description: "Passionate about combining hardware, software, and automation to solve real-world problems.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold mb-2">GET TO KNOW ME</p>

          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-blue-500">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              MCA Student & Technology Enthusiast
            </h3>

            <p className="text-gray-400 leading-relaxed mb-5">
              I am Majji Vamsi Sai Kumar, an MCA student and IoT Trainer Intern
              with a strong interest in IoT, Embedded Systems, Artificial
              Intelligence, and Automation.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy building practical projects that combine hardware,
              software, AI, and automation. My journey includes working with
              ESP32, Arduino, sensors, MQTT, MicroPython, AI Agents, and n8n
              Automation.
            </p>
          </motion.div>

          <div className="grid gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gray-950 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition"
              >
                <div className="flex gap-5">
                  <div className="text-3xl text-blue-400">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h4>

                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;