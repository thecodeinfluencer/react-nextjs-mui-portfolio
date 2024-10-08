"use client";

import ListeningCard from "@/components/listening-card";
import { profile } from "@/utilities/content";
import { ArrowForwardRounded, OpenInNew } from "@mui/icons-material";
import { Card, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <Paper
      square
      sx={{ py: 5, borderTop: ({ palette }) => `2px solid ${palette.divider}` }}
    >
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} sx={{ my: 2 }}>
            <Stack sx={{ px: 2 }}>
              <TypoLink internal href="/projects">
                Projects
              </TypoLink>
              <TypoLink internal href="/talks">
                Talks
              </TypoLink>
              <TypoLink internal href="/blogs">
                Blogs
              </TypoLink>
              <TypoLink internal href="/work">
                Work
              </TypoLink>
              <TypoLink internal href="/contributing">
                Contributing
              </TypoLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ my: 2 }}>
            <Stack sx={{ px: 2 }}>
              <TypoLink href={profile.socials.twitter}>X (Twitter)</TypoLink>
              <TypoLink href={profile.socials.linkedIn}>LinkedIn</TypoLink>
              <TypoLink href={profile.socials.github}>GitHub</TypoLink>
              <TypoLink href={profile.socials.figma}>Figma</TypoLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={4} sx={{ my: 2 }}>
            <Stack sx={{ px: 2 }}>
              <TypoLink href={profile.socials.devto}>Dev.to</TypoLink>
              <TypoLink href={profile.socials.medium}>Medium</TypoLink>
              <TypoLink href={profile.socials.hashnode}>Hashnode</TypoLink>
              <TypoLink href={profile.socials.sessionize}>Sessionize</TypoLink>
              <TypoLink color internal href="/get">
                Get Free Template
              </TypoLink>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sx={{ my: 2 }}>
            <Card variant="outlined">
              <ListeningCard />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  internal?: boolean;
  color?: boolean;
};

export const TypoLink = ({ href, children, internal, color }: Props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ mb: 1, textDecoration: isShown ? "underline" : "none" }}
    >
      <Typography
        href={href}
        component={Link}
        aria-label={href}
        sx={{ cursor: "pointer" }}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        target={internal ? undefined : "_blank"}
        color={color ? "primary.main" : "text.primary"}
      >
        {children}
      </Typography>
      {internal ? (
        <ArrowForwardRounded
          sx={{
            width: 20,
            height: 20,
            color: color ? "primary.main" : "inherit",
          }}
        />
      ) : (
        <OpenInNew sx={{ width: 16, height: 16 }} />
      )}
    </Stack>
  );
};
