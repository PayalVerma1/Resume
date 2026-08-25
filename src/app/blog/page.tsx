import { Column, Heading, Meta, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, blog, person} from "@/resources";

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
    <Column maxWidth="m" paddingTop="0" gap="xl" paddingX="l" style={{ maxWidth: "640px", width: "100%" }}>
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
      <Column gap="32" fillWidth>
        <Column gap="s" fillWidth>
          <Heading variant="heading-strong-xl">
            The HTTP Streaming Trick Airbnb Used to Kill the Waterfall
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            A look at the streaming pattern behind faster, more resilient page loads.
          </Text>
          <SmartLink
            href="https://x.com/payal_codes/status/2086135051788677436"
            suffixIcon="arrowUpRightFromSquare"
          >
            <Text variant="body-default-m">Read on X / Twitter</Text>
          </SmartLink>
        </Column>

        <Column gap="s" fillWidth>
          <Heading variant="heading-strong-xl">
            Designing a Monitoring Platform Developers Actually Want to Use
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Keo is an observability platform for monitoring metrics, logs, and deployments with
            AI-powered anomaly detection. This article covers the product decisions behind making
            that workflow practical for developers.
          </Text>
          <SmartLink
            href="https://medium.com/@payal.codes/designing-a-monitoring-platform-developers-actually-want-to-use-e27b7e2d07d4"
            suffixIcon="arrowUpRightFromSquare"
          >
            <Text variant="body-default-m">Read the Keo article on Medium</Text>
          </SmartLink>
        </Column>
      </Column>
    </Column>
  );
}
