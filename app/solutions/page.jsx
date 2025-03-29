"use client";
import { motion } from 'motion/react'

import { useEffect, useState } from "react";
import {  FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function ProjectsPage() {
    const TRANSITION_SECTION = {
        duration: 0.3,
      }

      const VARIANTS_SECTION = {
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/solutions/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  return (
    <motion.section
    variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        >
 <h3 className="mb-5 text-lg font-medium">Solutions</h3>
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </motion.section>

  );
}

function ProjectItem({ project }) {
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX + 15, y: event.clientY + 15 });
  };

  return (
    <div
      className="flex justify-between items-center gap-4 p-4 rounded-lg  border-zinc-200 dark:border-zinc-700 transition hover:bg-zinc-100 dark:hover:bg-zinc-800 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Project Info */}
      <div className="flex gap-2">
      <span className="font-medium text-zinc-900 dark:text-zinc-50">
        {project.name}
      </span>
      <span className="text-zinc-600 dark:text-zinc-400">&nbsp;&#8226;&nbsp; {project.description}</span>
      </div>


      {/* Icons */}
      <div className="flex gap-2">
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <CgWebsite
          size={18}
          className="text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition justify-self-end
"
        />
      </a>

      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <FaGithub
          size={20}
          className="text-zinc-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-gray-100 transition  justify-self-end"
        />
      </a>

      </div>


      {/* Floating Image Next to Cursor */}
      {hovered && (
        <img
          src={project.image}
          alt={project.name}
          className="fixed w-40 h-40 object-cover rounded-lg shadow-lg border border-zinc-300 dark:border-zinc-700 pointer-events-none z-10"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        />
      )}
    </div>
  );
}
