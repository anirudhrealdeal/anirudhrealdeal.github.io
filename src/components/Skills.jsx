import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";
import { 
  FaCode, 
  FaDatabase, 
  FaJava,
  FaGithub
} from "react-icons/fa";
import {
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiPostman,
  SiGooglecloud,
  SiFirebase,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiNvidia,
  SiPytorch,
  SiNumpy,
  SiMysql,
} from "react-icons/si";

const iconMap = {
  FaCode,
  FaDatabase,
  FaJava,
  FaGithub,
  SiJavascript,
  SiCplusplus,
  SiReact,
  SiPostman,
  SiGooglecloud,
  SiFirebase,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiNvidia,
  SiPytorch,
  SiNumpy,
  SiMysql,
};

const SkillCategory = ({ title, items, showIcons = true }) => (
  <div className="w-full">
    <h3 className="text-2xl md:text-3xl font-semibold text-accent-1 mb-8 flex items-center gap-4">
      <span className="h-[2px] w-12 bg-accent-1/50 inline-block"></span>
      {title}
    </h3>

    <div className="flex flex-wrap gap-5">
      {items.map((skill, index) => {
        const IconComponent = showIcons ? iconMap[skill.icon] : null;
        return (
          <div
            key={index}
            className="flex items-center gap-4 bg-secondary-bg px-6 py-4 rounded-md border border-white/5 hover:border-accent-2/50 hover:shadow-[0_4px_20px_rgba(233,69,96,0.15)] transition-all duration-300 cursor-default"
          >
            {IconComponent && (
              <span className="text-3xl text-accent-1">
                <IconComponent />
              </span>
            )}
            <span className="text-text-primary text-lg font-medium">
              {skill.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-primary-bg relative">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle>Technologies I Work With</SectionTitle>

        <div className="max-w-7xl mx-auto mt-20">
          {/* Vertical Stack Layout (Separate Rows) with large gaps */}
          <div className="flex flex-col gap-16">
            <SkillCategory
              title="Languages"
              items={skills.languages}
            />
            <SkillCategory
              title="Frameworks & Libraries"
              items={skills.frameworksAndLibraries}
              showIcons={false}
            />
            <SkillCategory
              title="Tools & Platforms"
              items={skills.toolsAndPlatforms}
            />
          </div>

          {/* Core Competencies as Tags */}
          <div className="mt-24 text-center">
            <h3 className="text-lg font-mono text-accent-2 mb-8 tracking-widest uppercase">
              Core Competencies
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {skills.coreCompetencies.map((comp, i) => (
                <span
                  key={i}
                  className="text-text-secondary text-base md:text-lg border border-text-secondary/20 px-6 py-2 rounded-full hover:text-white hover:border-accent-1 transition-colors duration-300"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
