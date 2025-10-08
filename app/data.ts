type Project = {
  name: string
  description: string
  link: string
  blogLink: string
  video: string
  id: string
  requiresPassword?: boolean
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Broadband labels for Comcast Business',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    blogLink: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    video: '/broadband-labels-hero.jpg',
    id: 'project1',
  },
  {
    name: 'Chase Investor Portal - Help requests',
    description: 'Helping Correspondents raise tickets.',
    link: 'https://motion-primitives.com/',
    blogLink: '/blog/example-mdx-metadata',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
    requiresPassword: true,
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'JP Morgan Chase & Co.',
    title: 'UX Associate',
    start: '2025',
    end: 'Present',
    link: 'https://www.chase.com/',
    id: 'work1',
  },
  {
    company: 'EY Studio +',
    title: 'Sr. UX Design Consultant',
    start: '2021',
    end: '2025',
    link: 'https://www.studio.ey.com/en_gl',
    id: 'work2',
  },
  {
    company: 'UXReactor',
    title: 'Sr. Visual Designer',
    start: '2020',
    end: '2021',
    link: 'https://uxreactor.com/',
    id: 'work3',
  },
  {
    company: 'Infosys',
    title: 'Systems Engineer',
    start: '2018',
    end: '2020',
    link: 'https://www.infosys.com/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/IpshitaChatterjee',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/IpshitaChatter2',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ipshita-ch/',
  },
]

export const EMAIL = 'ipshita.chatterjee02@gmail.com'
