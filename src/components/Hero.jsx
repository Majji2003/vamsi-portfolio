import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full px-6 pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            MAJJI VAMSI 
            <span className="text-blue-500"> SAI KUMAR</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            MCA Student | IoT Trainer Intern |
            <br />
            AI & Automation Enthusiast
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
            I am an MCA student and IoT Trainer Intern with a strong interest
            in IoT, Embedded Systems, Artificial Intelligence, and Automation.
            I enjoy building practical solutions using ESP32, AI, AI Agents,
            and n8n Automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/majjivamsi1111"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Profile Area */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-500 bg-gray-900 flex items-center justify-center overflow-hidden">
              <img
               src="/profile.jpg"
                alt="Majji Vamsi Sai Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
      >
        <FaArrowDown className  ="text-2xl" />
      </a>
    </section>
  );
}

export default Hero;