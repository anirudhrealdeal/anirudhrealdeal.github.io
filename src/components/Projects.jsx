import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";
import { FaGithub, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-primary-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionTitle>Some Things I've Built</SectionTitle>

        <div className="flex flex-col gap-24 mt-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                project.image && index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section - only rendered if project has an image */}
              {project.image && (
                <div className="w-full lg:w-3/5 relative group">
                  <div className="relative rounded-md overflow-hidden shadow-2xl border border-white/10 group-hover:border-accent-1/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-secondary-bg/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover transform transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  {/* Additional images gallery */}
                  {project.additionalImages && project.additionalImages.length > 0 && (
                    <div className="flex gap-3 mt-3">
                      {project.additionalImages.map((img, i) => (
                        <div key={i} className="flex-1 rounded-md overflow-hidden border border-white/10 hover:border-accent-1/30 transition-all duration-300">
                          <img src={img} alt={`${project.title} ${i + 2}`} className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                      ))}
                    </div>
                  )}
                  <div
                    className={`absolute -inset-4 bg-accent-1/20 rounded-md blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      index % 2 === 1 ? "right-0" : "left-0"
                    }`}
                  ></div>
                </div>
              )}

              {/* Text Section — full width when no image */}
              <div className={`w-full ${project.image ? "lg:w-2/5" : "lg:w-full max-w-3xl mx-auto"} flex flex-col items-start relative z-20`}>
                <p className="font-mono text-accent-1 text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-3xl font-bold text-text-primary mb-6 hover:text-accent-1 transition-colors cursor-pointer">
                  {project.title}
                </h3>

                {/* Description Box - Updated to support list */}
                <div className="bg-secondary-bg p-6 rounded-md shadow-xl border border-white/5 mb-6 hover:shadow-2xl transition-shadow">
                  <ul className="list-none space-y-2 text-text-secondary leading-relaxed">
                    {project.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-1 mr-2 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <ul className="flex flex-wrap gap-4 mb-8 text-sm font-mono text-text-secondary/80">
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="hover:text-accent-1 transition-colors"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Links - Redesigned as Buttons */}
                <div className="flex items-center gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-text-secondary/30 text-text-primary text-sm font-medium hover:border-accent-1 hover:text-accent-1 transition-all duration-300 group"
                    >
                      <FaGithub
                        size={18}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-text-secondary/30 text-text-primary text-sm font-medium hover:border-accent-1 hover:text-accent-1 transition-all duration-300 group"
                    >
                      <FaExternalLinkAlt
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.paperLink && (
                    <a
                      href={project.paperLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-text-secondary/30 text-text-primary text-sm font-medium hover:border-accent-1 hover:text-accent-1 transition-all duration-300 group"
                    >
                      <FaFileAlt
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span>Paper</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
