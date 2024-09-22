import Work from "@/app/work/work";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { appURL } from "@/utilities/constants";
import { profile } from "@/utilities/content";

export async function generateMetadata() {
  return {
    metadataBase: new URL(appURL),
    title: `Work History | ${profile.name}`,
    description: `${profile.work} - ${profile.description}`,
    openGraph: {
      images: [{ url: `${appURL}/images/work.png`, alt: profile.work }],
    },
    twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
  };
}

export default function WorkPage() {
  return (
    <main>
      <Work />
      <FooterSection />
      <CTASection />
    </main>
  );
}
