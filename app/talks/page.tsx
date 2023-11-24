import TalksPageClient from "@/client/talks";
import { appURL } from "@/utilities/constants";
import { feed, profile } from "@/utilities/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title: `Talks | ${profile.name}`,
  description: `A list of talks given by ${profile.name} including downloadable slides.`,
  openGraph: {
    images: feed
      .filter((feed) => feed.type == "talk")
      .map((feed) => ({ url: feed.image, alt: feed.title })),
  },
};

export default function TalksPage() {
  return (
    <main>
      <TalksPageClient />
    </main>
  );
}
