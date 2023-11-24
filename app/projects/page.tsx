import ProjectsPageClient from "@/client/projects";
import { feed, profile } from "@/utilities/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: `A list of projects built by ${profile.name} including project demos and GitHub links where available.`,
  openGraph: {
    images: feed
      .filter((feed) => feed.type == "project")
      .map((feed) => ({ url: feed.image, alt: feed.title })),
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsPageClient />
    </main>
  );
}
