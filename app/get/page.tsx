"use client";

import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { appURL } from "@/utilities/constants";
import { ArrowBackRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetPage() {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <>
      <Box
        sx={{
          py: 10,
          backgroundColor:
            resolvedTheme == "light" ? "#f8f8f8" : palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Stack
            sx={{ mb: 8 }}
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="space-between"
          >
            <Button
              startIcon={<ArrowBackRounded />}
              onClick={() => router.replace("/")}
            >
              Home
            </Button>
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Get Template
            </Typography>
            <Box />
          </Stack>
          <Box
            sx={{
              mt: 2,
              borderRadius: 1,
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              backgroundColor: palette.background.paper,
              backgroundImage: `url(${appURL}/images/hero.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography sx={{ mt: 2 }} variant="h6">
            This template is available to <b>fork </b>
            on GitHub! I only ask that you <b>star</b> it. I would love if you{" "}
            <Link href="https://github.com/thecodeinfluencer/react-nextjs-mui-portfolio/CONTRIBUTING.md">
              contributed
            </Link>{" "}
            to it. You can also buy this template on{" "}
            <Link href="https://codeinfluencer.gumroad.com/l/nextjs-mui-framer-portfolio">
              Gumroad{" "}
            </Link>{" "}
            to support me. Thanks!
          </Typography>
          {/* <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
            {feed
              .filter((feed) => feed.type == "project")
              .map((feed) => (
                <FeedCard key={feed.title} feed={feed} />
              ))}
          </Masonry> */}
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </>
  );
}

type Props = { href: string; children: React.ReactNode };

const Link = ({ href, children }: Props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Typography
      variant="h6"
      color="primary.main"
      component="span"
      sx={{ cursor: "pointer", textDecoration: isShown ? "underline" : "none" }}
      onClick={() => window.open(href, "_blank")}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {children}
    </Typography>
  );
};
