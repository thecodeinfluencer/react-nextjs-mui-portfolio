import ViewTalkPageClient from "@/client/talks_slug";
import { appURL } from "@/utilities/constants";
import { feed, profile } from "@/utilities/content";
import { SlugPage } from "@/utilities/definitions";

export async function generateMetadata({ params }: SlugPage) {
  const thisFeed = feed.find((feed) => `${feed.id}` == params.slug);

  return {
    metadataBase: new URL(appURL),
    title: `Talk - ${thisFeed?.title} | ${profile.name}`,
    description: `${thisFeed?.summary}`,
    openGraph: { images: [{ url: thisFeed?.image, alt: thisFeed?.title }] },
    twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
  };
}

export default function ViewProjectPage({ params }: SlugPage) {
  return (
    <main>
      <ViewTalkPageClient params={params} />
    </main>
  );
}
