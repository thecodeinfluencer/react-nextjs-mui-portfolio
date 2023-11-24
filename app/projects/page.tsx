import ProjectsPageClient from "@/client/projects";
import { appURL } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title: `Projects | ${profile.name}`,
  description: `A list of projects built by ${profile.name} including project demos and GitHub links where available.`,
  openGraph: {
    images: [{ url: `${appURL}/images/projects.png`, alt: "blogs" }],
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsPageClient />
    </main>
  );
}
