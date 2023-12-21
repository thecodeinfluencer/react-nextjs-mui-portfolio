export type Feed =
  | {
      type: "project";
      bgTheme: string;
      id: number | string;
      title: string;
      summary: string;
      description: string;
      featured: boolean;
      image: string;
      tags: string[];
      githubLink: string;
      productLink: string;
      links: { label: string; url: string }[];
      details: {
        startDate: string;
        endDate: string;
        releasedDate?: string;
        projectType: "Personal" | "Client" | "Workplace";
      };
    }
  | {
      type: "talk";
      bgTheme: string;
      id: number | string;
      title: string;
      summary: string;
      description: string;
      featured: boolean;
      image: string;
      tags: string[];
      slidesLink: string;
      links: { label: string; url: string }[];
      details: {
        event: string;
        location: string;
        community: string;
        date: string;
      };
    }
  | {
      type: "blog";
      id: number | string;
      title: string;
      summary: string;
      featured: boolean;
      image: string;
      tags: string[];
      blogLink: string;
      details: { date: string };
    };

export type Skill = {
  label: string;
  category: "tools" | "languages" | "frameworks";
};

export type Testimonial = {
  name: string;
  linkedIn: string;
  comment: string;
  role: string;
  image: string;
};

export type Profile = {
  primaryColor: string;
  url: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  work: string;
  gravatarUrl: string;
  skills: Skill[];
  spotify: { track: string; artist: string; album: string };
  socials: {
    twitter: string;
    github: string;
    linkedIn: string;
    devto: string;
    medium: string;
    hashnode: string;
    telegram: string;
    sessionize: string;
    figma: string;
  };
};

export type SlugPage = {
  params: { slug: string };
};

export type ExpLink = { label: string; url: string };

export type Experience = {
  company: string;
  role: string;
  duration: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
  tags: string[];
  links: ExpLink[];
};
