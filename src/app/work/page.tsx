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
    <Column maxWidth="m" paddingTop="24" gap="xl">
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
      <section className={styles.profileWall} aria-labelledby="work-profile-title">
        <div className={styles.avatarFrame}>
          <Image
            alt={`Portrait of ${person.name}`}
            className={styles.avatar}
            height={3120}
            priority
            src={person.avatar}
            width={3120}
          />
        </div>
        <div className={styles.profileContent}>
          <p className={styles.eyebrow}>Selected work</p>
          <Heading as="h1" id="work-profile-title" variant="heading-strong-xl">
            {person.name}
          </Heading>
          <Text className={styles.role} variant="heading-default-l" onBackground="neutral-weak">
            {person.role}
          </Text>
          <Row className={styles.socials} gap="8" wrap>
            {social.map(
              (item) =>
                item.link && (
                  <Button
                    key={item.name}
                    href={item.link}
                    label={item.name}
                    prefixIcon={item.icon}
                    size="s"
                    variant="secondary"
                    weight="default"
                  />
                ),
            )}
          </Row>
          <Text className={styles.summary} variant="body-default-l">
            I’m a full stack developer and B.Tech Information Technology student based in India. I
            build thoughtful web experiences that turn practical ideas into reliable products.
          </Text>
        </div>
      </section>
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
