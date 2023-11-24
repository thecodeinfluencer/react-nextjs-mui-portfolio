import WorkPageClient from "@/client/work";
import { profile } from "@/utilities/content";

export async function generateMetadata() {
  return {
    title: `Work History | ${profile.name}`,
    description: `${profile.work} - ${profile.description}`,
    openGraph: { images: [{ url: "/images/work.png", alt: profile.work }] },
    twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
  };
}

export default function WorkPage() {
  return (
    <main>
      <WorkPageClient />
    </main>
  );
}
