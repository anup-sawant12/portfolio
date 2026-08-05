import React from "react";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full select-none">
      <SectionHeader
        number="02 / SELECTED WORK"
        title="EXPERIMENTING & BUILDING SYSTEMS."
      />

      {/* Spaced stack of project cards */}
      <div className="space-y-16 md:space-y-28">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
