"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatedBackground } from '@/components/ui/animated-background'
import {

    BLOG_POSTS,

  } from '../data'
const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const TRANSITION_SECTION = { duration: 0.3, ease: "easeInOut" };

export default function BlogPage() {
  const [posts, setPosts] = useState([]);


  return (
    <motion.section
      variants={VARIANTS_SECTION}
      initial="hidden"
      animate="visible"
      transition={TRANSITION_SECTION}
    >
      <h3 className="mb-3 text-lg font-medium">Blog</h3>
      <div className="flex flex-col space-y-0">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80 -z-10"
          transition={{ type: "spring", bounce: 0, duration: 0.2 }}
        >
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              className="-mx-3 rounded-xl px-3 py-3 block"
              href={post.link}
              data-id={post.uid}
            >
              <div className="flex flex-col space-y-1">
                <h4 className="font-normal dark:text-zinc-100">{post.title}</h4>
                <p className="text-black-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </motion.section>
  );
}
