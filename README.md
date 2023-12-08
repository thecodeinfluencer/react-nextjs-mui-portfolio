# Developer Portfolio

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, custom Google Fonts.

## Customization

Create a file `utilities/constants.ts` and add your content there. The file should look something like this:

```javascript
import { Experience, Feed, Profile, Testimonial } from "./definitions";

export const testimonials: Testimonial[] = [
  {
    name: "Jack Doe",
    role: "Team Lead, Company X",
    linkedIn: "https://www.linkedin.com/in/jdoe/",
    image: "https://imagelink.com/user.png",
    comment: "Bluh Bluh",
  },
];

export const profile: Profile = {
  url: "yoursiteurl.dev",
  name: "John Doe",
  title: "John Doe - Portfolio",
  tagline: "Frontend developer and Designer",
  work: "Engineer at Company Z",
  description: "I do bluh bluh",
  gravatarUrl: "https://gravatar.com/avatar/7a7...",
  socials: {
    twitter: "",
    linkedIn: "",
    github: "",
    medium: "",
    hashnode: "",
    devto: "",
    telegram: "",
    sessionize: "",
  },
  skills: [
    { label: "React", category: "frameworks" },
    { label: "Git", category: "tools" },
    { label: "JavaScript", category: "languages" },
  ],
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Company Z",
    startDate: "Jan 2023",
    endDate: "Present",
    duration: "3 Mos",
    type: "Contract",
    location: "Place, Country",
    highlights: ["Built xyz", "Built abc"],
    tags: ["React", "Next.js", "Typescript", "OpenShift", "UIPath"],
    links: [{ label: "Company Website", url: "https://x.com/" }],
  },
];

export const feed: Feed[] = [
  {
    id: "project-bluh-bluh",
    featured: true,
    title: "Bluh App",
    githubLink: "",
    productLink: "https://play.google.com/store/apps/details?id=com.bluh.bluh",
    summary: "An android app built with React Native to bluh bluh",
    description: "Bluh bluh...",
    type: "project",
    image: "https://example.com/bluh.png",
    links: [
      {
        label: "PlayStore ",
        url: "https://play.google.com/store/apps/details?id=com.bluh.bluh",
      },
    ],
    tags: ["React Native", "JavaScript", "Typescript", "Android", "Expo"],
    details: {
      startDate: "Nov 2023",
      endDate: "Nov 2023",
      releasedDate: "Nov 22, 2023",
      projectType: "Personal",
    },
  },
  {
    id: "blog-bluh-bluh",
    featured: false,
    title: "Blog Title.",
    summary: "Bit of description.",
    type: "blog",
    image: "https://images.pexels.com/photos/",
    blogLink: "https://dev.to/thecodeinfluencer",
    tags: ["React", "Next.js", "Veracode", "Security", "Vulnerability"],
    details: { date: "Nov 10, 2023" },
  },
  {
    id: "talk-bluh-bluh",
    featured: true,
    title: "Talk Title",
    summary: "Talk summary.",
    description: "Talk summary.",
    type: "talk",
    slidesLink: "https://docs.google.com/presentation/d/...",
    image: "https://lh3.googleusercontent.com/d/...",
    tags: ["Firebase", "Google Cloud", "Databases", "NoSQL", "Firestore"],
    details: {
      event: "Devfest Mt. Kenya",
      location: "Dedan Kimathi University, Nyeri, Kenya",
      community: "Google Developer Groups, Mt. Kenya",
      date: "Nov 11, 2023",
    },
    links: [{ label: "Wrap Up - Twitter (X)", url: "https://example.com/" }],
  },
];
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
