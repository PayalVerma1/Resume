import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Payal",
  lastName: "Verma",
  name: `Payal Verma`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "payalvermaseema@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
 
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: <>My weekly newsletter about creativity and engineering</>,
// };

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PayalVerma1",
  },
  // {
  //   name: "LinkedIn",
  //   icon: "linkedin",
  //   link: "https://www.linkedin.com/company/once-ui/",
  // },
  {
    name: "x",
    icon: "threads",
    link: "https://x.com/Payalverma73",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];



const about: About = {
  path: "/",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey! I’m a full stack developer and currently pursuing my B.Tech in Information Technology. I’m based in India and have a strong passion for web development.
        I got into web dev because I love creating things, it’s super satisfying to bring ideas to life and see them turn into real projects. That passion has pushed me to explore full stack development and gain hands-on experience with different technologies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "TOTO-AI",
        timeframe: "2025 - Present",
        role: "Multi-Model AI Chat Platform",
        achievements: [
          <>
            This was my first Next.js project, so basically it is a multi-model AI chat platform which consists of OpenAI, Gemini, Groq, Claude, etc. models, with Grok and Gemini as free default models and others accessible via a payment gateway.
          </>,
          <>
            Developed it using Next.js, TypeScript, Prisma, and PostgreSQL, and also implemented Google Authentication (NextAuth), dynamic chat titles, theme switching, etc.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "YouSee",
        timeframe: "2025",
        role: "Assistive Web App",
        achievements: [
          <>
            Built a React.js web app that helps visually challenged individuals identify and describe items using picture recognition. This was a collaborative project we created for HackHazards’25.
          </>,
          <>
            Added features like webcam capture, voice command (“capture”) for interaction, and text-to-speech to read the descriptions out loud.
          </>,
        ],
        images: [],
      },
    ],
  },
  
  technical: {
      display: true, // set to false to hide this section
  title: "Technical Skills",
  skills: [
    {
      title: "Frontend",
      description: (
        <>Experienced in building responsive and interactive UIs using React.js, Next.js, Tailwind CSS, and animation libraries like Framer Motion and GSAP.</>
      ),
      tags: [
        {
          name: "React.js",
          icon: "react",
        },
        {
          name: "Next.js",
          icon: "nextjs",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwind",
        },
        
        {
          name: "GSAP",
          icon: "gsap",
        },
      ],
      images: [],
    },
    {
      title: "Backend",
      description: (
        <>Building full stack apps using Node.js, Express.js, and Next.js with databases like MongoDB and PostgreSQL, along with Prisma ORM and authentication (NextAuth).</>
      ),
      tags: [
        {
          name: "Node.js",
          icon: "nodejs",
        },
        {
          name: "Express.js",
          icon: "express",
        },
        {
          name: "MongoDB",
          icon: "mongodb",
        },
        {
          name: "PostgreSQL",
          icon: "postgresql",
        },
        {
          name: "Prisma",
          icon: "prisma",
        },
        {
          name: "NextAuth",
          icon: "auth",
        },
      ],
      images: [],
    },
    {
      title: "AI & Tools",
      description: (
        <>Integrated multiple AI models (OpenAI, Gemini, Groq, Claude, Grok) into chat platforms with features like streaming, Google Auth, and payment gateways.</>
      ),
      tags: [
        {
          name: "OpenAI",
          icon: "openai",
        },
        {
          name: "Gemini",
          icon: "gemini",
        },
        {
          name: "Groq",
          icon: "groq",
        },
        {
          name: "Claude",
          icon: "claude",
        },
      ],
      images: [],
    },
  ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, about, blog, work, gallery };
