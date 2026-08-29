import { Meta, Schema } from "@once-ui-system/core";
import { baseURL, blog, person } from "@/resources";
import styles from "./blog.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <main className={styles.page}>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <header className={styles.heading}>
        <p>Notes &amp; articles</p>
        <h1>Writing</h1>
        <span>Things I am learning about product, engineering, and the web.</span>
      </header>
      <section className={styles.list} aria-label="Articles">
        <article className={styles.card}>
          <div>
            <p className={styles.source}>X / Twitter</p>
            <h2>The HTTP Streaming Trick Airbnb Used to Kill the Waterfall</h2>
            <p className={styles.description}>A look at the streaming pattern behind faster, more resilient page loads.</p>
          </div>
          <a href="https://x.com/payal_codes/status/2086135051788677436" target="_blank" rel="noreferrer">
            Read article <span aria-hidden="true">↗</span>
          </a>
        </article>
        <article className={styles.card}>
          <div>
            <p className={styles.source}>Medium</p>
            <h2>Designing a Monitoring Platform Developers Actually Want to Use</h2>
            <p className={styles.description}>Keo is an observability platform for monitoring metrics, logs, and deployments with AI-powered anomaly detection. This article covers the product decisions behind making that workflow practical for developers.</p>
          </div>
          <a href="https://medium.com/@payal.codes/designing-a-monitoring-platform-developers-actually-want-to-use-e27b7e2d07d4" target="_blank" rel="noreferrer">
            Read article <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>
    </main>
  );
}
