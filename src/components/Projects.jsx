import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Smart Home Automation System",
      category: "IoT & Embedded Systems",
      description:
        "A smart home system designed to control appliances and monitor environmental conditions using IoT technologies.",
      technologies: [
        "IoT",
        "Embedded Systems",
        "MQTT",
        "HTTP",
        "Blynk",
        "ThingSpeak",
      ],
      components: ["ESP32", "Arduino", "Sensors"],
    },

    {
      number: "02",
      title: "Smart Warehouse Monitoring System",
      category: "IoT & Security",
      description:
        "An IoT-based warehouse monitoring system with RFID access control, environmental monitoring, and safety features.",
      technologies: [
        "IoT",
        "Embedded Systems",
        "RFID Technology",
      ],
      components: [
        "ESP32",
        "RFID Module",
        "Sensors",
        "Flame Sensor",
      ],
    },

    {
      number: "03",
      title: "Footstep Power Generation",
      category: "Embedded Systems",
      description:
        "A system that generates electrical energy from human footsteps using piezoelectric sensors and ESP32.",
      technologies: [
        "Embedded Systems",
        "IoT",
      ],
      components: [
        "ESP32",
        "Piezoelectric Sensors",
        "LED",
      ],
    },

    {
      number: "04",
      title: "Cats vs Dogs Image Classification",
      category: "AI & Machine Learning",
      description:
        "A CNN-based image classification project that identifies whether an image contains a cat or a dog.",
      technologies: [
        "Python",
        "CNN",
        "OpenCV",
        "NumPy",
        "Machine Learning",
      ],
    },

    {
      number: "05",
      title: "Sign Language Detection using CNN",
      category: "AI & Computer Vision",
      description:
        "A computer vision project that detects and classifies sign language gestures using Convolutional Neural Networks.",
      technologies: [
        "Python",
        "CNN",
        "OpenCV",
        "NumPy",
        "Machine Learning",
      ],
    },

    {
      number: "06",
      title: "Gesture Virtual Drawing Board",
      category: "Computer Vision",
      description:
        "An interactive virtual drawing application that allows users to draw on screen using hand gestures.",
      technologies: [
        "Python",
        "OpenCV",
        "Computer Vision",
        "Hand Gesture Detection",
      ],
    },

    {
      number: "07",
      title: "Smart Cart System",
      category: "IoT & Web-Based Automation",
      description:
        "A smart shopping cart system that scans products using a barcode reader and automatically displays the total number of items and total bill on a web page. The system combines IoT hardware with a web-based interface to improve the shopping experience.",
      technologies: [
        "IoT",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      components: [
        "NodeMCU",
        "Arduino Uno",
        "Barcode Reader",
        "Load Cell",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold mb-2">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-blue-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects exploring IoT, Embedded Systems,
            Artificial Intelligence, Machine Learning, and Computer Vision.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
            >
              {/* Project Number and Icons */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-bold text-blue-500/70">
                  {project.number}
                </span>

                <div className="flex gap-4 text-gray-400">
                  <button
                    className="hover:text-blue-400 transition"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </button>

                  <button
                    className="hover:text-blue-400 transition"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </button>
                </div>
              </div>

              {/* Category */}
              <p className="text-blue-400 text-sm mb-2">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div>
                <p className="text-sm font-semibold text-blue-400 mb-2">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Components */}
              {project.components && (
                <div className="mt-5">
                  <p className="text-sm font-semibold text-blue-400 mb-2">
                    Main Components
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.components.map((component) => (
                      <span
                        key={component}
                        className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;