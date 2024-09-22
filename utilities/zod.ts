import { z } from "zod";

const ZBaseFeed = z.object({
  id: z.string(),
  title: z.string(),
  summary: z.string(),
  featured: z.boolean(),
  image: z.string(),
  tags: z.array(z.string()),
});

export const ZProjectFeed = ZBaseFeed.merge(
  z.object({
    bgTheme: z.string(),
    description: z.string(),
    githubLink: z.string(),
    productLink: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string() })),
    details: z.object({
      startDate: z.string(),
      endDate: z.string(),
      releasedDate: z.string(),
      projectType: z.enum(["Personal", "Client", "Workplace"]),
    }),
  })
);

export const ZTalkFeed = ZBaseFeed.merge(
  z.object({
    bgTheme: z.string(),
    description: z.string(),
    slidesLink: z.string(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })),
    details: z.object({
      event: z.string(),
      location: z.string(),
      community: z.string(),
      date: z.string(),
    }),
  })
);

export const ZBlogFeed = ZBaseFeed.merge(
  z.object({
    blogLink: z.string().url(),
    details: z.object({ date: z.string() }),
  })
);
