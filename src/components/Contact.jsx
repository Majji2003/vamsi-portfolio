import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 text-white">
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
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Contact <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project, opportunity, or collaboration in mind? Feel free
            to get in touch with me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              Let's <span className="text-blue-500">Connect</span>
            </h3>

            <div className="space-y-5">
              {/* Email */}
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 transition"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold">majjivamsi1111@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 transition"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-semibold">+91 8985545682</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/majjivamsi1111"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 transition"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                  <FaLinkedin />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/majjivamsi1111</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/majji2003"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-blue-500 transition"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 text-xl">
                  <FaGithub />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="font-semibold">github.com/majji2003</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const formData = new FormData(e.target);
                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");

                const subject = encodeURIComponent(
                  `Portfolio Contact from ${name}`
                );

                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                );

                window.location.href =
                  `mailto:YOUR_EMAIL@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="7"
                required
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
              />

              <button
                type="submit"
                className="mt-5 w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;