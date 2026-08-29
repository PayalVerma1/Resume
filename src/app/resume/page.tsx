import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import styles from "./resume.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: `Resume – ${person.name}`,
    description: "Work experience, technical skills, development setup, and background of Payal Verma.",
    baseURL,
    path: "/resume",
  });
}

const experiences = [
  {
    company: "Full Stack Developer",
    status: "Working",
    period: "2024 – Present",
    location: "India [Remote]",
    role: "Software Engineer & Web Applications Developer",
    tech: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Git"],
    bulletPoints: [
      "Architected and built modern full-stack web applications with Next.js App Router, TypeScript, and Prisma ORM.",
      "Developed high-performance UI components with seamless animations, responsive grid rails, and accessibility best practices.",
      "Integrated real-time database models, backend API routes, and cloud deployment pipelines on Vercel.",
      "Optimized frontend bundle sizes and assets to achieve sub-second page loads and top-tier core web vitals."
    ]
  },
  {
    company: "Keo Observability Platform",
    status: "Featured Project",
    period: "2025",
    location: "Personal Project",
    role: "Creator & Lead Developer",
    tech: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma", "AI Detection"],
    bulletPoints: [
      "Engineered an observability platform for tracking real-time metrics, system logs, and deployment states.",
      "Implemented AI-assisted anomaly detection algorithms to highlight metric spikes and operational failures."
    ]
  },
  {
    company: "TOTO-AI Chat Application",
    status: "Featured Project",
    period: "2025",
    location: "Personal Project",
    role: "Creator & Full Stack Engineer",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    bulletPoints: [
      "Built a multi-model AI chat interface supporting streaming completions, conversation history, and user authentication.",
      "Designed a sleek dark-mode user interface with custom code indexing and persistent context."
    ]
  }
];

const developmentCards = [
  {
    id: "gears",
    title: "Gears",
    description: "Tools, devices, and software I use to get work done.",
    pills: ["MacBook Pro", "Keychron K2", "VSCode", "Raycast", "Arc Browser"]
  },
  {
    id: "setup",
    title: "Setup",
    description: "VSCode / Cursor configuration and extensions guide.",
    pills: ["Tokyo Night Theme", "JetBrains Mono Font", "Prettier", "ESLint", "Biome"]
  },
  {
    id: "terminal",
    title: "Terminal",
    description: "Zsh, Starship, Fastfetch, and shell configuration.",
    pills: ["Zsh + Oh My Zsh", "Starship Cross-Shell Prompt", "Fastfetch", "Alacritty / Terminal"]
  }
];

const personalCards = [
  {
    id: "books",
    title: "Books",
    description: "Books that have influenced my thinking and growth.",
    pills: ["Designing Data-Intensive Applications", "Clean Code", "Atomic Habits", "The Pragmatic Programmer"]
  },
  {
    id: "movies",
    title: "Movies",
    description: "Films and shows that have inspired and entertained me.",
    pills: ["Interstellar", "Silicon Valley", "Mr. Robot", "Oppenheimer", "The Social Network"]
  }
];

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Java", "C++", "HTML5", "CSS3 / SCSS"]
  },
  {
    title: "Frontend Frameworks",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Zustand"]
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Linux", "AWS (EC2, S3)", "Vercel", "Docker"]
  }
];

const renderTechBadge = (techName: string) => {
  switch (techName.toLowerCase()) {
    case "next.js":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techNext}`}><SiNextdotjs /> Next.js</span>;
    case "react.js":
    case "react":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techReact}`}><SiReact /> React.js</span>;
    case "typescript":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techTS}`}><SiTypescript /> TypeScript</span>;
    case "node.js":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techNode}`}><SiNodedotjs /> Node.js</span>;
    case "postgresql":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techPostgres}`}><SiPostgresql /> PostgreSQL</span>;
    case "tailwind css":
    case "tailwind":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techTailwind}`}><SiTailwindcss /> Tailwind CSS</span>;
    case "prisma":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techPrisma}`}><SiPrisma /> Prisma</span>;
    case "mongodb":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techMongo}`}><SiMongodb /> MongoDB</span>;
    case "git":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techGit}`}><SiGit /> Git</span>;
    case "docker":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techNext}`}><SiDocker /> Docker</span>;
    case "aws":
    case "aws (ec2, s3)":
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techNext}`}><FaAws /> AWS</span>;
    default:
      return <span key={techName} className={`${styles.coloredTechBadge} ${styles.techDefault}`}>{techName}</span>;
  }
};

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={`Resume – ${person.name}`}
        description="Work experience, technical skills, development setup, and background."
        path="/resume"
      />

      <div className={styles.header}>
        <div>
          <h1 className={styles.headerTitle}>Work Experience</h1>
          <p className={styles.headerSubtitle}>
            My work experiences across different companies and roles.
          </p>
        </div>
        <a href="/resume.pdf" download className={styles.downloadBtn} target="_blank" rel="noreferrer">
          Download PDF <span>↓</span>
        </a>
      </div>

      {/* Experience Section */}
      <section className={styles.section} aria-label="Work Experience">
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.boxedCard}>
              <div className={styles.cardHeader}>
                <div className={styles.companyRow}>
                  <span className={styles.companyName}>{exp.company}</span>
                  {exp.status === "Working" ? (
                    <span className={styles.workingBadge}>
                      <span className={styles.badgeDotGreen} />
                      {exp.status}
                    </span>
                  ) : (
                    <span className={styles.featuredBadge}>
                      <span className={styles.badgeDotPurple} />
                      {exp.status}
                    </span>
                  )}
                </div>
                <div className={styles.metaRight}>
                  {exp.period} · {exp.location}
                </div>
              </div>

              <div className={styles.roleTitle}>{exp.role}</div>

              <div className={styles.techSection}>
                <span className={styles.techLabel}>Technologies & Tools</span>
                <div className={styles.techList}>
                  {exp.tech.map((t) => renderTechBadge(t))}
                </div>
              </div>

              <div className={styles.bulletSection}>
                <span className={styles.bulletLabel}>What I&apos;ve Done</span>
                <ul className={styles.bulletList}>
                  {exp.bulletPoints.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Section (Reference Image 2) */}
      <section className={styles.section} aria-label="Development">
        <h2 className={styles.sectionTitle}>Development</h2>
        <div className={styles.cardsStack}>
          {developmentCards.map((card) => (
            <div key={card.id} id={card.id} className={styles.boxedCard}>
              <div className={styles.cardTitleRow}>
                <h3 className={styles.cardItemTitle}>{card.title}</h3>
              </div>
              <p className={styles.cardItemDesc}>{card.description}</p>
              <div className={styles.pillTags}>
                {card.pills.map((pill, idx) => (
                  <span key={idx} className={styles.tagPill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Section (Reference Image 2) */}
      <section className={styles.section} aria-label="Personal">
        <h2 className={styles.sectionTitle}>Personal</h2>
        <div className={styles.cardsStack}>
          {personalCards.map((card) => (
            <div key={card.id} id={card.id} className={styles.boxedCard}>
              <div className={styles.cardTitleRow}>
                <h3 className={styles.cardItemTitle}>{card.title}</h3>
              </div>
              <p className={styles.cardItemDesc}>{card.description}</p>
              <div className={styles.pillTags}>
                {card.pills.map((pill, idx) => (
                  <span key={idx} className={styles.tagPill}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className={styles.section} aria-label="Technical Skills">
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillsGrid}>
          {skillCategories.map((cat, index) => (
            <div key={index} className={styles.skillCategoryCard}>
              <h3 className={styles.skillCatTitle}>{cat.title}</h3>
              <div className={styles.techList}>
                {cat.skills.map((skill) => renderTechBadge(skill))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bhagavad Gita Quote Box (Reference Image 2 & 3) */}
      <section className={styles.section} aria-label="Quote">
        <div className={styles.quoteContainer}>
          <div className={styles.quoteSvgMark}>“</div>
          <div className={styles.quoteContent}>
            <div className={styles.quoteText}>
              &quot;Man is made by his belief. As he believes, so he is.&quot;
            </div>
            <div className={styles.quoteAuthor}>— Bhagavad Gita</div>
          </div>
        </div>
      </section>
    </main>
  );
}
