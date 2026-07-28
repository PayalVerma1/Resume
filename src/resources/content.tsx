import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Payal",
  lastName: "Verma",
  name: `Payal Verma`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "payal.codes@gmail.com",
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
    link: "https://x.com/payal_codes",
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
  
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey! I’m a full stack developer and currently pursuing my B.Tech in Information Technology. I’m based in India and have a strong passion for web development.
        I got into web dev because I love creating things, it’s fun to bring ideas to life and see them turn into real projects. That passion has pushed me to explore full stack development and gain hands-on experience with different technologies.
        <br />
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=PayalVerma1&theme=tokyonight" />

      </>
    ),
  },


  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Programming Languages",
        description: <>Writing reliable applications with strongly typed, object-oriented, and systems programming languages.</>,
        tags: [{ name: "TypeScript" }, { name: "Java" }, { name: "Rust" }],
        images: [],
      },
      {
        title: "Frontend",
        description: <>Building responsive, interactive user interfaces with modern React-based tools and state management.</>,
        tags: [{ name: "Next.js" }, { name: "React.js" }, { name: "Redux Toolkit" }, { name: "Tailwind CSS" }, { name: "Zustand" }],
        images: [],
      },
      {
        title: "Backend",
        description: <>Developing APIs, real-time services, and data layers with scalable server-side technologies.</>,
        tags: [{ name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }, { name: "PostgreSQL" }, { name: "Prisma" }, { name: "Redis" }],
        images: [],
      },
      {
        title: "DevOps",
        description: <>Deploying and automating applications across cloud platforms and continuous delivery workflows.</>,
        tags: [{ name: "AWS EC2" }, { name: "AWS S3" }, { name: "Azure App Service" }, { name: "GitHub Actions" }, { name: "CI/CD" }],
        images: [],
      },
      {
        title: "AI Tools",
        description: <>Using AI coding assistants to accelerate research, implementation, and iteration.</>,
        tags: [{ name: "Codex" }, { name: "Claude" }, { name: "GitHub Copilot" }],
        images: [],
      },
      {
        title: "Other",
        description: <>Working comfortably with version control and Linux development environments.</>,
        tags: [{ name: "Git" }, { name: "GitHub" }, { name: "Linux" }],
        images: [],
      },
    ],
  },
// studies section removed
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
