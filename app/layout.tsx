import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";
import { profile } from "@/utilities/content";
import { NextThemeProvider } from "@/providers/next-theme";
import { MUIThemeProvider } from "@/providers/mui-theme";

const inter = Inter({ subsets: ["latin"] });
const { title, description } = profile;
export const metadata: Metadata = { title, description };

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
