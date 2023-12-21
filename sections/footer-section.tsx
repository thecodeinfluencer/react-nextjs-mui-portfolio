"use client";

import { spotifySVG } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import {
  ArrowForwardRounded,
  OpenInNew,
  OpenInNewRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [isClient, setIsClient] = useState(false);

  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 5,
        backgroundColor:
          resolvedTheme == "dark"
            ? palette.grey[900]
            : palette.background.default,
      }}
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
          <Grid item xs={12} sm={8} md={6} sx={{ my: 2 }}>
            <Card>
              <ListItem
                button
                onClick={() => window.open(profile.spotify.track, "_blank")}
                sx={{
                  borderWidth: 1,
                  borderColor: palette.divider,
                  borderRadius: 1,
                }}
                secondaryAction={
                  <IconButton disabled aria-label="delete">
                    <OpenInNewRounded />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar sx={{ background: "transparent" }}>
                    <svg
                      width="41"
                      height="40"
                      viewBox="0 0 41 40"
                      fill={profile.primaryColor}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={spotifySVG}></path>
                    </svg>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${profile.spotify.album} - ${profile.spotify.artist}`}
                  secondary="Currently Listening (On Repeat)"
                />
              </ListItem>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

type Props = {
  href: string;
  children: React.ReactNode;
  internal?: boolean;
  color?: boolean;
};

const TypoLink = ({ href, children, internal, color }: Props) => {
  const [isShown, setIsShown] = useState(false);

  const router = useRouter();

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ mb: 1, textDecoration: isShown ? "underline" : "none" }}
    >
      <Typography
        color={color ? "primary.main" : "text.primary"}
        sx={{ cursor: "pointer" }}
        onClick={() =>
          internal ? router.replace(`${href}`) : window.open(href, "_blank")
        }
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
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
