import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTimes, FaExpand } from "react-icons/fa";

import aimlWorkshop from "../assets/certificates/aiml-workshop.png";
import roboticsWorkshop from "../assets/certificates/robotics-workshop.png";
import awsAcademy from "../assets/certificates/aws-academy-cloud-developing.jpg";
import awsGettingStarted from "../assets/certificates/aws-getting-started.jpg";
import awsJobSimulation from "../assets/certificates/aws-job-simulation.jpg";
import brixCosmos from "../assets/certificates/brix-cosmos.png";
import cprAwareness from "../assets/certificates/cpr-awareness.png";
import cyberTrace from "../assets/certificates/cyber-trace.jpg";
import cybersecurity from "../assets/certificates/cybersecurity-certificate.jpg";
import dataScience from "../assets/certificates/data-science-job-simulation.jpg";
import nptelEthicalHacking from "../assets/certificates/nptel-ethical-hacking.jpg";
import powerBI from "../assets/certificates/powerbi-certificate.jpg";
import pythonDSA from "../assets/certificates/python-dsa.jpeg";
import viksitBharat from "../assets/certificates/viksit-bharat.jpg";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "AI/ML Workshop",
      organization: "Teckybot",
      category: "Artificial Intelligence",
      year: "2026",
      image: aimlWorkshop,
    },
    {
      title: "Robotics Workshop",
      organization: "Teckybot",
      category: "Robotics",
      year: "2026",
      image: roboticsWorkshop,
    },
    {
      title: "AWS Academy Graduate",
      organization: "AWS Academy",
      category: "Cloud Computing",
      year: "2025",
      image: awsAcademy,
    },
    {
      title: "Getting Started with AWS IoT",
      organization: "AWS Training & Certification",
      category: "Cloud & IoT",
      year: "2026",
      image: awsGettingStarted,
    },
    {
      title: "AWS Solutions Architecture Job Simulation",
      organization: "Forage",
      category: "Cloud Computing",
      year: "2025",
      image: awsJobSimulation,
    },
    {
      title: "Career Essentials Workshop",
      organization: "BRIX COSMOS",
      category: "Professional Development",
      year: "2025",
      image: brixCosmos,
    },
    {
      title: "CPR Awareness Week",
      organization: "MY Bharat",
      category: "Awareness & Social Responsibility",
      year: "2025",
      image: cprAwareness,
    },
    {
      title: "Cyber Trace National-Level Symposium",
      organization: "GVP College of Engineering",
      category: "Cybersecurity",
      year: "2026",
      image: cyberTrace,
    },
    {
      title: "Cybersecurity Training",
      organization: "Cybertriya",
      category: "Cybersecurity",
      year: "2026",
      image: cybersecurity,
    },
    {
      title: "Data Science Job Simulation",
      organization: "Forage",
      category: "Data Science",
      year: "2025",
      image: dataScience,
    },
    {
      title: "Ethical Hacking Course",
      organization: "NPTEL",
      category: "Cybersecurity & Ethical Hacking",
      year: "2026",
      image: nptelEthicalHacking,
    },
    {
      title: "Power BI Micro Course",
      organization: "Microsoft",
      category: "Data Analytics",
      year: "2025",
      image: powerBI,
    },
    {
      title: "Data Structures and Algorithms Using Python",
      organization: "Madhu Tech Skills",
      category: "Programming",
      year: "2025",
      image: pythonDSA,
    },
    {
      title: "Viksit Bharat Youth Dialogue",
      organization: "Government of India",
      category: "National Development",
      year: "2025",
      image: viksitBharat,
    },
  ];

  return (
    <section id="certificates" className="py-24 bg-gray-950 text-white">
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
            PROFESSIONAL LEARNING
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Certificates</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            A collection of certifications and learning experiences across
            Artificial Intelligence, IoT, Cloud Computing, Cybersecurity,
            Data Analytics, Programming, Robotics, and Professional Development.
          </p>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              {/* Certificate Image */}
              <button
                onClick={() => setSelectedCertificate(certificate)}
                className="relative w-full h-52 bg-white overflow-hidden cursor-pointer"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <FaExpand className="text-white text-3xl" />
                </div>
              </button>

              {/* Certificate Details */}
              <div className="p-6">
                <p className="text-blue-400 text-sm mb-2">
                  {certificate.category}
                </p>

                <h3 className="text-lg md:text-xl font-bold mb-3">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {certificate.organization}
                </p>

                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <span className="text-sm text-gray-500">
                    {certificate.year}
                  </span>

                  <FaCertificate className="text-blue-400 text-lg" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-blue-400 transition"
                aria-label="Close certificate"
              >
                <FaTimes />
              </button>

              {/* Certificate Title */}
              <h3 className="text-center text-white text-xl md:text-2xl font-bold mb-4">
                {selectedCertificate.title}
              </h3>

              {/* Full Certificate Image */}
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-w-full max-h-[75vh] rounded-lg object-contain bg-white"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;