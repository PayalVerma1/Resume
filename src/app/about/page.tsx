import Image from "next/image";
import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import styles from "./home.module.scss";

export async function generateMetadata() {
  return Meta.generate({ title: `Home – ${person.name}`, description: "Full stack developer building thoughtful digital products.", baseURL, path: "/" });
}

const experience = [
  ["Open to work", "Full-stack developer · Remote / India", "Now"],
  ["Independent projects", "Product-minded web experiences", "2024 — now"],
  ["B.Tech, Information Technology", "Building a strong engineering foundation", "2022 — 2026"],
];
const writing = [
  ["Building interfaces that feel calm", "Notes on small details that make digital products easier to use."],
  ["From an idea to a working product", "A practical approach to shipping the first version without losing the thread."],
  ["What I am learning this month", "A running list of tools, patterns, and engineering lessons."],
];

export default function About() {
  return (
    <main className={styles.page}>
      <Schema as="webPage" baseURL={baseURL} title={`Home – ${person.name}`} description="Full stack developer building thoughtful digital products." path="/" author={{ name: person.name, url: baseURL, image: `${baseURL}${person.avatar}` }} />
      <section className={styles.intro} aria-labelledby="intro-heading">
        <Image className={styles.avatar} src={person.avatar} alt={`Portrait of ${person.name}`} width={92} height={92} priority />
        <div><p className={styles.eyebrow}>Hello, I’m</p><h1 id="intro-heading">Payal Verma</h1><p className={styles.role}>Full stack developer · India</p></div>
      </section>
      <section className={styles.about} aria-label="Introduction">
        <p>I build clean, useful web experiences from the first sketch to production. I enjoy turning complex ideas into interfaces that feel simple.</p>
        <div className={styles.status}><span aria-hidden="true" /> Available for thoughtful collaborations</div>
        <nav className={styles.socials} aria-label="Social links">
          <a href="https://github.com/PayalVerma1" target="_blank" rel="noreferrer">GitHub <b>↗</b></a><a href="https://x.com/payal_codes" target="_blank" rel="noreferrer">X / Twitter <b>↗</b></a><a href="mailto:payal.codes@gmail.com">Email <b>↗</b></a>
        </nav>
      </section>
      <section className={styles.section} aria-labelledby="experience-heading">
        <div className={styles.sectionTitle}><h2 id="experience-heading">Experience</h2><Link href="/work">View work <span>→</span></Link></div>
        <div className={styles.timeline}>{experience.map(([title, detail, date]) => <article key={title} className={styles.timelineItem}><div><h3>{title}</h3><p>{detail}</p></div><time>{date}</time></article>)}</div>
      </section>
      <section className={styles.section} aria-labelledby="writing-heading">
        <div className={styles.sectionTitle}><h2 id="writing-heading">Writing</h2><Link href="/blog">All notes <span>→</span></Link></div>
        <div className={styles.posts}>{writing.map(([title, description]) => <Link href="/blog" key={title} className={styles.post}><div><h3>{title}</h3><p>{description}</p></div><span aria-hidden="true">→</span></Link>)}</div>
      </section>
      <aside className={styles.quote}><span aria-hidden="true">“</span><p>Make it work, make it right, make it feel inevitable.</p></aside>
    </main>
  );
}
