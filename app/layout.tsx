import { MUIThemeProvider } from "@/providers/mui-theme";
import { NextThemeProvider } from "@/providers/next-theme";
import "@/styles/global.css";
import { profile } from "@/utilities/content";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const { title, description } = profile;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      { url: `/images/hero.png`, width: 1200, height: 630, alt: "Mark Aloo" },
    ],
    type: "website",
    siteName: title,
  },
  twitter: { card: "summary_large_image", creator: "@codeinfluencer" },
  authors: [{ name: "Code Influencer", url: "https://thecodeinfluencer.dev/" }],
};

type Props = { children: React.ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MUIThemeProvider>{children}</MUIThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
