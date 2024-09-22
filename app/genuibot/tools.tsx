import ContributionCard from "@/components/contribution-card";
import FeedCard from "@/components/feed-card";
import ListeningCard from "@/components/listening-card";
import { Message } from "@/components/message";
import TestimonialCard from "@/components/testimonial-card";
import WorkTimeline from "@/components/work-timeline";
import { TypoLink } from "@/sections/footer-section";
import { contributing, feed, profile, testimonials } from "@/utilities/content";
import { Card, Chip, Grid2, Paper, Stack } from "@mui/material";
import { CoreMessage, generateId } from "ai";
import { z } from "zod";

const projects = feed.filter((feed) => feed.type == "project");
const talks = feed.filter((feed) => feed.type == "talk");
const blogs = feed.filter((feed) => feed.type == "blog");

export const viewWork = (messages: any) => ({
  description: "view work history",
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          {
            type: "tool-call",
            toolCallId,
            toolName: "viewWork",
            args: {},
          },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewWork",
            toolCallId,
            result: `The work history is currently displayed`,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Paper>
            <WorkTimeline />
          </Paper>
        }
      />
    );
  },
});

export const viewProjects = (messages: any) => ({
  description: `
      - view a list of ${profile.name}'s projects
    `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          { type: "tool-call", toolCallId, toolName: "viewProjects", args: {} },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewProjects",
            toolCallId,
            result: projects,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Grid2 container spacing={1}>
            {projects.map((feed) => (
              <Grid2 key={feed?.title} size={{ xs: 12, md: 6 }}>
                <FeedCard feed={feed} />
              </Grid2>
            ))}
          </Grid2>
        }
      />
    );
  },
});

export const viewTalks = (messages: any) => ({
  description: `
        - view a list of ${profile.name}'s talks
      `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          { type: "tool-call", toolCallId, toolName: "viewTalks", args: {} },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewTalks",
            toolCallId,
            result: talks,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Grid2 container spacing={1}>
            {talks.map((feed) => (
              <Grid2 key={feed?.title} size={{ xs: 12, md: 6 }}>
                <FeedCard feed={feed} />
              </Grid2>
            ))}
          </Grid2>
        }
      />
    );
  },
});

export const viewBlogs = (messages: any) => ({
  description: `
        - view a list of ${profile.name}'s blogs
      `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          { type: "tool-call", toolCallId, toolName: "viewBlogs", args: {} },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewBlogs",
            toolCallId,
            result: blogs,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Grid2 container spacing={1}>
            {blogs.map((feed) => (
              <Grid2 key={feed?.title} size={{ xs: 12, md: 6 }}>
                <FeedCard feed={feed} />
              </Grid2>
            ))}
          </Grid2>
        }
      />
    );
  },
});

export const viewTestimonials = (messages: any) => ({
  description: `
        - view a list of testimonials given to ${profile.name} 
      `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          {
            type: "tool-call",
            toolCallId,
            toolName: "viewTestimonials",
            args: {},
          },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewTestimonials",
            toolCallId,
            result: testimonials,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Grid2 container spacing={1}>
            {testimonials.map((tmn) => (
              <Grid2 key={tmn?.name} size={{ xs: 12, lg: 6 }}>
                <TestimonialCard testimonial={tmn} />
              </Grid2>
            ))}
          </Grid2>
        }
      />
    );
  },
});

export const viewContributions = (messages: any) => ({
  description: `
        - view a list of ${profile.name}'s contributions
      `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          {
            type: "tool-call",
            toolCallId,
            toolName: "viewContributions",
            args: {},
          },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewContributions",
            toolCallId,
            result: contributing,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Grid2 container spacing={1}>
            {contributing.map((cbn) => (
              <Grid2 key={cbn.project} size={{ xs: 12, lg: 6 }}>
                <Card variant="outlined">
                  <ContributionCard contribution={cbn} />
                </Card>
              </Grid2>
            ))}
          </Grid2>
        }
      />
    );
  },
});

export const viewSkills = (messages: any) => ({
  description: `
        - view a list of ${profile.name}'s skills. 
        - infer them from my work history, projects, talks, blogs and testimonials and from these: ${profile.skills
          .map((s) => `${s.label}`)
          .join(", ")}
      `,
  parameters: z.object({ skills: z.array(z.string()) }),
  generate: async function* ({ skills }: { skills: string[] }) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          {
            type: "tool-call",
            toolCallId,
            toolName: "viewSkills",
            args: { skills },
          },
        ],
      },
      {
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolName: "viewSkills",
            toolCallId,
            result: `A list of ${profile.name}'s skills (${skills}) is displayed on the screen`,
          },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Stack direction="row" flexWrap="wrap" gap={0.5}>
            {skills.map((skill: string) => (
              <Chip key={skill} label={skill} />
            ))}
          </Stack>
        }
      />
    );
  },
});

export const viewSocials = (messages: any) => ({
  description: `
          - view a list of ${profile.name}'s socials
        `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          { type: "tool-call", toolCallId, toolName: "viewSocials", args: {} },
        ],
      },
      {
        role: "tool",
        content: [{ type: "tool-result", toolName: "viewSocials", toolCallId }],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <>
            {Object.entries(profile.socials).map(([title, link]) => (
              <TypoLink key={link} href={link}>
                {title}
              </TypoLink>
            ))}
          </>
        }
      />
    );
  },
});

export const viewListening = (messages: any) => ({
  description: `
            - what music item ${profile.name} is listening to
          `,
  parameters: z.object({}),
  generate: async function* ({}) {
    const toolCallId = generateId();

    messages.done([
      ...(messages.get() as CoreMessage[]),
      {
        role: "assistant",
        content: [
          {
            type: "tool-call",
            toolCallId,
            toolName: "viewListening",
            args: {},
          },
        ],
      },
      {
        role: "tool",
        content: [
          { type: "tool-result", toolName: "viewListening", toolCallId },
        ],
      },
    ]);

    return (
      <Message
        role="assistant"
        content={
          <Card variant="outlined">
            <ListeningCard />
          </Card>
        }
      />
    );
  },
});
