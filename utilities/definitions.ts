export type Feed =
  | {
      id: number | string;
      title: string;
      summary: string;
      description: string;
      featured: boolean;
      type: "project";
      image: string;
      tags?: string[];
      blogLink?: string;
      slidesLink?: string;
      githubLink?: string;
      productLink?: string;
      details?: { event: string; location: string; community: string };
    }
  | {
      id: number | string;
      title: string;
      summary: string;
      description: string;
      featured: boolean;
      type: "talk";
      image: string;
      tags?: string[];
      blogLink?: string;
      slidesLink?: string;
      githubLink?: string;
      productLink?: string;
      links: { label: string; url: string }[];
      details?: { event: string; location: string; community: string };
    }
  | {
      id: number | string;
      title: string;
      summary: string;
      featured: boolean;
      type: "blog";
      image: string;
      tags?: string[];
      blogLink?: string;
      slidesLink?: string;
      githubLink?: string;
      productLink?: string;
      details?: { event: string; location: string; community: string };
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
  name: string;
  title: string;
  tagline: string;
  description: string;
  work: string;
  gravatarUrl: string;
  skills: Skill[];
  socials: {
    twitter: string;
    github: string;
    linkedIn: string;
    devto: string;
    medium: string;
    hashnode: string;
    telegram: string;
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
