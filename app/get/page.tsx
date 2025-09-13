"use client";

import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { appURL } from "@/utilities/constants";
import { ArrowBackRounded } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { useEffect, useState } from "react";

export default function GetPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <>
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Stack
            sx={{ mb: 8 }}
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="space-between"
          >
            <Button
              startIcon={<ArrowBackRounded />}
              LinkComponent={NextLink}
              href="/"
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
              bgcolor: ({ palette }) => palette.background.paper,
              backgroundImage: `url(${appURL}/images/hero.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography sx={{ mt: 2 }}>
            Feel free to <b></b>fork this template on <b></b>GitHub! Just a
            gentle request to give it a <b></b>star. I&apos;d be delighted if
            you added your{" "}
            <Link href="https://github.com/thecodeinfluencer/react-nextjs-mui-portfolio/blob/main/CONTRIBUTING.md">
              contributions
            </Link>
            . For those looking to show some extra love, you can even snag this
            template on{" "}
            <Link href="https://codeinfluencer.gumroad.com/l/nextjs-mui-framer-portfolio">
              Gumroad
            </Link>{" "}
            to support my caffeinated coding sessions. Many thanks in advance!
          </Typography>
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
