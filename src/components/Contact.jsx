import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 bg-secondary-bg flex items-center justify-center text-center relative overflow-hidden"
    >
      {/* Glowing circle behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-1/5 rounded-full blur-[100px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 max-w-2xl relative z-10"
      >
        <p className="text-accent-1 font-mono mb-4 text-lg">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
          Get In Touch
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          I am currently looking for Summer 2026 AI/ML engineering, Software Engineering, or research internships in the US. Whether you have an opportunity or just want to say hi, my inbox is always open!
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-10 py-4 border-2 border-accent-1 text-accent-1 font-bold rounded-md hover:bg-accent-1/10 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-accent-1/20 mb-10"
        >
          Say Hello
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 text-text-secondary hover:text-accent-1 transition-colors font-mono text-sm"
          >
            <FaEnvelope size={16} className="text-accent-1" />
            {personalInfo.email}
          </a>
          {personalInfo.phone && (
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 text-text-secondary hover:text-accent-1 transition-colors font-mono text-sm"
            >
              <FaPhone size={16} className="text-accent-1" />
              {personalInfo.phone}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
