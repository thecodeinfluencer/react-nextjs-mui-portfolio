import TalksPageClient from "@/client/talks";
import { appURL } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title: `Talks | ${profile.name}`,
  description: `A list of talks given by ${profile.name} including downloadable slides.`,
  openGraph: { images: [{ url: `${appURL}/images/talks.png`, alt: "blogs" }] },
};

export default function TalksPage() {
  return (
    <main>
      <TalksPageClient />
    </main>
  );
}
