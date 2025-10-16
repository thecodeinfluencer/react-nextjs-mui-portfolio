import { appURL } from "@/utilities/constants";
import { feed, profile } from "@/utilities/content";
import { SlugPage } from "@/utilities/definitions";
import ViewProject from "./projects_slug";

export async function generateMetadata(props: SlugPage) {
  const params = await props.params;
  const thisFeed = feed.find((feed) => `${feed.id}` == params.slug);

  return {
    metadataBase: new URL(appURL),
    title: `Project - ${thisFeed?.title} | ${profile.name}`,
    description: `${thisFeed?.summary}`,
    openGraph: { images: [{ url: thisFeed?.image, alt: thisFeed?.title }] },
    twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
  };
}

export default async function ViewProjectPage(props: SlugPage) {
  const params = await props.params;
  return (
    <main>
      <ViewProject params={params} />
    </main>
  );
}
