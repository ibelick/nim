type Project = {
  name: string
  description: string
  link: string
  // video: string
  image: string
  id: string
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

// export const PROJECTS: Project[] = [
//   {
//     name: 'Token Traveler',
//     description: 'Augmented Reality Android mobile app where players collect beer, park, and coffee tokens.',
//     link: 'https://github.com/odowdbrendan/TokenTraveler',
//     video:
//       'https://github.com/odowdbrendan/TokenTraveler',
//     id: 'project1',
//   },
//   {
//     name: 'Fantasy Football Helper',
//     description:
//       'Data-driven fantasy football companion that uses predictive analytics and AI to guide your team management decisions.',
//     link: 'https://www.google.com',
//     video:
//       'https://github.com/odowdbrendan/',
//     id: 'project2',
//   },
// ]

export const PROJECTS: Project[] = [
  {
    name: 'Token Traveler',
    description: 'Augmented Reality Android mobile app where players collect beer, park, and coffee tokens.',
    link: 'https://github.com/odowdbrendan/TokenTraveler',
    image:'/avl.jpg',
    id: 'project1',
  },
  {
    name: 'Fantasy Football Helper',
    description:
      'Data-driven fantasy football companion that uses predictive analytics and AI to guide your team management decisions.',
    link: 'https://www.google.com',
    image:'/avl.jpg',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Amazon',
    title: 'Data Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://health.amazon.com/onemedical',
    id: 'work1',
  },
  {
    company: 'PwC',
    title: 'Data Engineer',
    start: '2023',
    end: '2023',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Amazon',
    title: 'Business Intelligence Engineer',
    start: '2021',
    end: '2023',
    link: 'https://pharmacy.amazon.com/',
    id: 'work3',
  },
  {
    company: 'Farragut Systems',
    title: 'SQL Developer',
    start: '2021',
    end: '2021',
    link: 'https://farragut.com/',
    id: 'work4',
  },
  {
    company: 'HomeTrust Bank',
    title: 'Business Intelligence Developer',
    start: '2019',
    end: '2021',
    link: 'https://htb.com/',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Journey Working at Amazon',
    description: 'My experience working in data roles at Amazon.',
    link: '/blog/my-journey-at-amazon',
    uid: 'blog-1',
  },
  {
    title: 'FAANG Data Engineering Interview Guide',
    description: 'Get help passing FAANG data interviews',
    link: '/blog/faang-interview-guide',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/odowdbrendan',
  },
  {
    label: 'X',
    link: 'https://x.com/brendanodowd16',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/brendanodowd/',
  },
]

export const EMAIL = 'brendan.pp.odowd@gmail.com'
