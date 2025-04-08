'use client'

import { Briefcase, GraduationCap, Github, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutMePage = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="mb-2 text-4xl font-bold text-zinc-900 dark:text-white">
          Sushil Subedi
        </h1>
        <p className="mb-1 text-lg text-zinc-600 dark:text-zinc-400">
          Software Engineer • React | Next.js | Rails | Tailwind
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            Kathmandu, Nepal
          </span>
          <Link
            href="mailto:sushil@example.com"
            className="flex items-center gap-1 hover:underline"
          >
            <Mail size={16} />
            sushil@example.com
          </Link>
          <Link
            href="https://github.com/sushilsubedi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Github size={16} />
            GitHub
          </Link>
        </div>
      </div>

      {/* Brief Summary */}
      <section className="mb-12">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Hi, I'm Sushil! I'm a software engineer with over 4 years of
          experience building scalable and user-friendly web applications. My
          expertise lies in frontend technologies like React and Next.js, as
          well as backend development with Ruby on Rails. I have a strong
          passion for crafting accessible products, solving complex problems,
          and continuously learning new technologies to enhance user
          experiences.
        </p>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          <Briefcase size={20} />
          Experience
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
              Full Stack Developer · GangstaBet
            </h3>
            <p className="text-sm text-zinc-500">2021 – 2023</p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Built web app features for NFT-based sports betting, integrated
              blockchain mechanics, and CI/CD pipelines.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">
              Frontend Developer · PBX Cloud
            </h3>
            <p className="text-sm text-zinc-500">2019 – 2021</p>
            <p className="mt-1 text-zinc-600 dark:text-zinc-400">
              Led frontend development of a real-time admin panel using React,
              Redux, and Bootstrap.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          <GraduationCap size={20} />
          Education
        </h2>
        <div>
          <p className="text-lg font-medium text-zinc-900 dark:text-white">
            Bachelor in Computer Engineering
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Tribhuvan University, Nepal – 2019
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          🛠 Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-300">
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            React
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            Next.js
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            Tailwind CSS
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            Ruby on Rails
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            PostgreSQL
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            GitLab CI/CD
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            Docker
          </span>
          <span className="rounded bg-zinc-200 px-2 py-1 dark:bg-zinc-700">
            Redis
          </span>
        </div>
      </section>
    </div>
  )
}

export default AboutMePage
