"use client";

import {
  ArrowForwardRounded,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import {
  Button,
  Container,
  IconButton,
  AppBar as MuiAppBar,
  Paper,
  Stack,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AppBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const { resolvedTheme, setTheme } = useNextTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 5) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <MuiAppBar sx={{ backgroundColor: "transparent" }} elevation={0}>
      <Container maxWidth="md">
        <Paper
          sx={{
            mt: 2,
            py: 2,
            px: 3,
            borderRadius: 24,
            bgcolor: ({ palette }) =>
              !isScrolled ? "transparent" : palette.background.paper,
          }}
          elevation={isScrolled ? 4 : 0}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              LinkComponent={Link}
              href="/"
            >
              @thecodeinfluencer
            </Button>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent={{ xs: "space-between", sm: "flex-start" }}
              sx={{ width: { xs: "100%", sm: "inherit" } }}
            >
              <Button
                variant="outlined"
                endIcon={<ArrowForwardRounded />}
                LinkComponent={Link}
                href="/work"
              >
                Work & CV
              </Button>
              <IconButton
                onClick={() =>
                  setTheme(resolvedTheme == "dark" ? "light" : "dark")
                }
              >
                {resolvedTheme == "dark" ? (
                  <LightModeOutlined />
                ) : (
                  <DarkModeOutlined />
                )}
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </MuiAppBar>
  );
}
