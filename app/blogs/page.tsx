import BlogsPageClient from "@/client/blogs";
import { appURL } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title: `Blogs | ${profile.name}`,
  description: `A list of blogs written by ${profile.name}.`,
  openGraph: { images: [{ url: `${appURL}/images/blogs.png`, alt: "blogs" }] },
};

export default function BlogsPage() {
  return (
    <main>
      <BlogsPageClient />
    </main>
  );
}
