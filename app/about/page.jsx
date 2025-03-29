"use client";

import { motion } from "framer-motion";
import {  FaGithub } from "react-icons/fa";

import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.main className="space-y-16 px-6 py-12" initial="hidden" animate="visible">
      {/* 🌟 About Me Section */}
      <motion.section className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          About Me
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-lg">
          Hey, I'm Khalil! I love building intuitive and performant web experiences.
          My focus is on bridging design and development, ensuring that every digital
          product I create is smooth, functional, and visually appealing.
        </p>
      </motion.section>

      {/* 🔥 Now Section */}
      <motion.section className="space-y-4">
        <h2 className="mb-3 text-lg font-medium">
          Now
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
        I'm building tools that leverage DevOps to optimize software engineering workflows, exploring cloud computing to enhance scalability, and diving into distributed ledgers to push the boundaries of secure and decentralized systems. Through tackling complex logic challenges, I continuously refine my problem-solving skills, bridging the gap between infrastructure and innovation.
        </p>

      </motion.section>

      {/* 🎉 Fun Facts Section */}
<motion.section className="space-y-4">
  <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
    Fun Facts
  </h2>
  <div className="grid gap-4 sm:grid-cols-2">
    <div className="rounded-lg border p-4 dark:border-zinc-700">
      <h3 className="text-lg font-medium">🔥 Night Owl Coder</h3>
      <p className="text-sm text-zinc-500">
        I do my best work late at night with a cup of coffee.
      </p>
    </div>
    <div className="rounded-lg border p-4 dark:border-zinc-700">
      <h3 className="text-lg font-medium">🎮 Gamer at Heart</h3>
      <p className="text-sm text-zinc-500">
        I enjoy playing strategy and open-world games in my free time.
      </p>
    </div>
  </div>
</motion.section>
<motion.section

>
  <h3 className="mb-3 text-lg font-medium">More</h3>
  <p className="text-zinc-600 dark:text-zinc-400">
    Once, I heard <i>"software is just code."</i> But then I realized—it really is just code.
    The magic isn’t in the lines themselves, but in how you put them together.
  </p>
  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
    Check out my <a
    href="https://github.com/0xquirkai"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block font-medium text-dark-600 hover:underline dark:text-dark-400"
  >
<FaGithub/>  </a>  I keep it updated with projects, experiments, and things I break on purpose.
    You might find something useful or at least interesting.
  </p>

</motion.section>

    </motion.main>
  );
}
