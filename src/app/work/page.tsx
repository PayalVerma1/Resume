import { Projects } from "@/components/work/Projects";
import { about, baseURL, person, social, work } from "@/resources";
import { Button, Column, Heading, Meta, Row, Schema, Text } from "@once-ui-system/core";
import Image from "next/image";
import React from "react";
import styles from "./work.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="0" gap="xl" style={{ maxWidth: "640px" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <div className={styles.projectsHeading}>
        <p className={styles.eyebrow}>Portfolio</p>
        <Heading as="h2" variant="heading-strong-l">
          Featured projects
        </Heading>
      </div>
      <Projects />
    </Column>
  );
}
