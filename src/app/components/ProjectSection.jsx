"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "Random Quote Generator",
    description: "Quote generator with api",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/senz34/quote-generator/tree/main/quote",
    previewUrl: "https://github.com/senz34/quote-generator/tree/main/quote",
  },
  {
    id: "2",
    title: "ToDo App",
    description: "Basic todo app",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/senz34/todo-app/tree/main/todo",
    previewUrl: "https://github.com/senz34/todo-app/tree/main/todo",
  },
  {
    id: "3",
    title: "Calculator",
    description: "Calculator app",
    image: "/images/projects/3.png",
    gitUrl: "https://github.com/senz34/calculator/tree/main/calculator",
    previewUrl: "https://github.com/senz34/calculator/tree/main/calculator",
  },
];

function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    inital: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <motion.div 
              initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <li
            key={index}
            variants={cardVariants}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ProjectSection;
