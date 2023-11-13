"use client";

import {
  DarkModeOutlined,
  FileDownloadOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AppBar() {
  const [isClient, setIsClient] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { resolvedTheme, setTheme } = useNextTheme();
  const { palette } = useTheme();
  const router = useRouter();

  useEffect(() => setIsClient(true), []);

  // add scroll listener to change appbar background color
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isClient) return null;

  return (
    <Box style={{ position: "fixed", top: 0, width: "100%" }}>
      <Container maxWidth="md">
        <Paper
          sx={{
            mt: 2,
            py: 2,
            px: 3,
            borderRadius: 24,
            backgroundColor: !isScrolled
              ? "transparent"
              : palette.background.paper,
          }}
          elevation={isScrolled ? 4 : 0}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button onClick={() => router.push("/")}>@thecodeinfluencer</Button>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button
                variant="outlined"
                endIcon={<FileDownloadOutlined />}
                onClick={() => window.open("/assets/Resume-Mark-Aloo.pdf")}
              >
                Resume
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
    </Box>
  );
}
