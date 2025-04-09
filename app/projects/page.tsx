'use client'

import { Github, Link as ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const projects = [
  {
    title: 'GangstaBet',
    description:
      'A blockchain-based sports betting platform with NFT characters. Developed features such as real-time bet tracking and integrated cryptocurrency payments.',
    techStack: ['React', 'Redux', 'Node.js', 'Blockchain', 'CI/CD'],
    github: 'https://github.com/sushilsubedi/gangsta-bet',
    liveUrl: 'https://www.gangstabet.com',
  },
  {
    title: 'PBX Cloud Admin Panel',
    description:
      'A real-time admin dashboard for managing user profiles, call logs, and system configurations using React, Redux, and Bootstrap.',
    techStack: ['React', 'Redux', 'Bootstrap', 'Node.js'],
    github: 'https://github.com/sushilsubedi/pbx-cloud-admin',
    liveUrl: 'https://www.pbxcloud.com/admin',
  },
  {
    title: 'Leave Management System',
    description:
      'An employee leave tracking system with real-time notifications and an intuitive dashboard for leave requests, built with Ruby on Rails.',
    techStack: ['Ruby on Rails', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/sushilsubedi/leave-management-system',
    liveUrl: 'https://www.leave-system.com',
  },
  {
    title: 'Customer Support Dashboard',
    description:
      'A customizable customer support dashboard designed to handle service, sales, support, and collections across voice and chat channels.',
    techStack: ['React', 'Node.js', 'Docker', 'Redis'],
    github: 'https://github.com/sushilsubedi/customer-support-dashboard',
    liveUrl: 'https://www.support-dashboard.com',
  },
]

const ProjectsPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-8">
      <h1 className="mb-10 text-4xl font-bold text-zinc-900 dark:text-white">
        Projects
      </h1>

      {/* Project List */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="border-b pb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-300">
              <span className="font-medium">Tech Stack:</span>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded bg-zinc-200 px-3 py-1 dark:bg-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                <Github size={18} />
                GitHub
              </Link>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                <ExternalLink size={18} />
                Live Demo
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
