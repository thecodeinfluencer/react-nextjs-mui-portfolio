import BlogsPageClient from "@/client/blogs";
import { appURL } from "@/utilities/constants";
import { feed, profile } from "@/utilities/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title: `Blogs | ${profile.name}`,
  description: `A list of blogs written by ${profile.name}.`,
  openGraph: {
    images: feed
      .filter((feed) => feed.type == "blog")
      .map((feed) => ({ url: feed.image, alt: feed.title })),
  },
};

export default function BlogsPage() {
  return (
    <main>
      <BlogsPageClient />
    </main>
  );
}
