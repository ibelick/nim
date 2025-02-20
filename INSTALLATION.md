# Nim - Installation Guide

## Prerequisites

- Node.js 20.x or later
- Git

## Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/ibelick/nim.git
   cd nim
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Update the template data**

   Update the template data in the `app/data.ts` file.

   ```ts
   export const EMAIL = 'ridadesigner12@gmail.com'

   export const SOCIAL_LINKS = [
     {
       label: 'Github',
       link: 'your-github-url',
     },
     // Add your social links
   ]

   ...
   ```

5. **Add your blog posts**

Create a new .mdx file for each blog post inside the app/blog folder. For example:
app/blog/your-article-slug/page.mdx.

Example blog post structure in .mdx:

```mdx
# Your Article Title

Introduction

Your content here...

## Code Examples

// Example code block here...
```

**Note:** You can use all MDX features, including React components, in your blog posts.

6. **Project Structure**

For a better understanding of the Next.js project structure, refer to the [Next.js](https://nextjs.org/docs/app/getting-started/project-structure) documentation.

7. **Additional Features**

Want to add more animated components?
Check out [Motion-Primitives](https://motion-primitives.com/) for additional animation components and templates. If you want something else DM on [X](https://x.com/Ibelick).

8.  **Deployment**

You can deploy your site to any hosting platform that supports Next.js. For the easiest deployment experience, consider using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fibelick%2Fnim&env=NEXT_PUBLIC_SITE_URL&project-name=nim&repository-name=nim&redirect-url=https%3A%2F%2Ftwitter.com%2Fibelick&demo-title=Nim&demo-description=Nim%20is%20a%20free%20and%20open-source%20minimal%20personal%20website%20template%20built%20with%20Next.js%2015%2C%20React%2019%2C%20and%20Motion-Primitives.&demo-url=https%3A%2F%2Fnim.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fibelick%2Fnim%2Frefs%2Fheads%2Fmain%2F.github%2Fassets%2Freadme.png&teamSlug=ibelick)
