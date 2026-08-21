import Image from "next/image";
import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import styles from "./home.module.scss";

export async function generateMetadata() {
  return Meta.generate({ title: `Home – ${person.name}`, description: "Full stack developer building thoughtful digital products.", baseURL, path: "/" });
}

const projects = [
  ["Keo", "Observability platform for metrics, logs, deployments, and AI-powered anomaly detection.", "Next.js · PostgreSQL", "/work/keo-observability-platform"],
  ["TOTO-AI", "Multi-model AI chat with conversations, authentication, and persistent history.", "Next.js · Prisma", "/work/building-once-ui-a-customizable-design-system"],
  ["YouSee", "Responsive multi-section landing page with fluid navigation and reusable components.", "React · Tailwind", "/work/automate-design-handovers-with-a-figma-to-code-pipeline"],
];
const writing = [
  ["The HTTP Streaming Trick Airbnb Used to Kill the Waterfall", "A look at the streaming pattern behind faster, more resilient page loads.", "X / Twitter", "https://x.com/payal_codes/status/2086135051788677436"],
  ["Designing a Monitoring Platform Developers Actually Want to Use", "How to make observability tooling clear, useful, and built around developer workflows.", "Medium", "https://medium.com/@payal.codes/designing-a-monitoring-platform-developers-actually-want-to-use-e27b7e2d07d4"],
];

export default function About() {
  return (
    <main className={styles.page}>
      <Schema as="webPage" baseURL={baseURL} title={`Home – ${person.name}`} description="Full stack developer building thoughtful digital products." path="/" author={{ name: person.name, url: baseURL, image: `${baseURL}${person.avatar}` }} />
      <section className={styles.intro} aria-labelledby="intro-heading">
        <Image className={styles.avatar} src={person.avatar} alt={`Portrait of ${person.name}`} width={92} height={92} priority />
        <div><h1 id="intro-heading">Payal Verma</h1><p className={styles.role}>Full stack developer · India · <a href="mailto:payal.codes@gmail.com">payal.codes@gmail.com</a></p></div>
      </section>
      <section className={styles.about} aria-label="Introduction">
        <p>I build clean, useful web experiences from the first sketch to production. I enjoy turning complex ideas into interfaces that feel simple.</p>
        <nav className={styles.socials} aria-label="Social links">
          <a href="https://github.com/PayalVerma1" target="_blank" rel="noreferrer">GitHub <b>↗</b></a><a href="https://x.com/payal_codes" target="_blank" rel="noreferrer">X / Twitter <b>↗</b></a><a href="mailto:payal.codes@gmail.com">Email <b>↗</b></a>
        </nav>
      </section>
      <section className={styles.section} aria-labelledby="projects-heading">
        <div className={styles.sectionTitle}><h2 id="projects-heading">Projects</h2><Link href="/work">All projects <span>→</span></Link></div>
        <div className={styles.projects}>{projects.map(([title, detail, stack, href]) => <Link href={href} key={title} className={styles.project}><div><h3>{title}</h3><p>{detail}</p></div><div className={styles.projectMeta}><span>{stack}</span><b aria-hidden="true">↗</b></div></Link>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="writing-heading">
        <div className={styles.sectionTitle}><h2 id="writing-heading">Writing</h2><Link href="/blog">All notes <span>→</span></Link></div>
        <div className={styles.posts}>{writing.map(([title, description, source, href]) => <a href={href} key={title} className={styles.post} target="_blank" rel="noreferrer"><div><h3>{title}</h3><p>{description}</p><small>{source}</small></div><span>Read article <b aria-hidden="true">→</b></span></a>)}</div>
      </section>
    </main>
  );
}
