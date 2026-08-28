import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="flex flex-col items-center text-center">

            {/* Name */}
            <h2 className="text-2xl font-bold">
              Majji <span className="text-blue-500">Vamsi Sai Kumar</span>
            </h2>

            <p className="text-gray-400 mt-3 max-w-xl">
              IoT Trainer | AI & Automation Enthusiast | MCA Graduate
            </p>

            {/* Social Links */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://github.com/MAJJI2003"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/majjivamsi1111"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                aria-label="Email"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8 text-sm text-gray-400">
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#certificates" className="hover:text-blue-400 transition">
                Certificates
              </a>

              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-10 pt-6 w-full">
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                © 2026 Majji Vamsi Sai Kumar. Made with
                <FaHeart className="text-blue-500" />
                using React.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center transition hover:-translate-y-1"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Footer;