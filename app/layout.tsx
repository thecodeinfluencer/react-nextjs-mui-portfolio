import { CssVarsProvider } from "@/providers/css-vars";
import MUICacheProvider from "@/providers/mui-cache";
import "@/styles/global.css";
import { analyticsID, appURL } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { CssBaseline } from "@mui/material";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const prompt = Nunito({
  variable: "--font-prompt",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const { title, description } = profile;

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title,
  description,
  openGraph: {
    images: [
      {
        url: `${appURL}/images/hero.png`,
        width: 1200,
        height: 630,
        alt: "Mark Aloo",
      },
    ],
    type: "website",
    siteName: title,
  },
  twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
  authors: [{ name: "Mark Aloo", url: "https://thecodeinfluencer.dev/" }],
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={prompt.className}>
        <InitColorSchemeScript />
        <MUICacheProvider>
          <CssVarsProvider>
            <CssBaseline />
            <Analytics />
            <SpeedInsights />
            <GoogleTagManager gtmId={analyticsID} />
            {children}
          </CssVarsProvider>
        </MUICacheProvider>
      </body>
    </html>
  );
}
