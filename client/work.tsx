"use client";

import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { experience, profile } from "@/utilities/content";
import {
  ArrowBackRounded,
  FileDownloadOutlined,
  OpenInNew,
} from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export default function WorkPageClient() {
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
              Work
            </Typography>
            <Box />
          </Stack>
          <Timeline
            sx={{
              [`& .${timelineOppositeContentClasses.root}`]: {
                flex: 0.2,
              },
            }}
          >
            <TimelineItem>
              <TimelineOppositeContent
                color="textSecondary"
                sx={{ minWidth: 200, display: { xs: "none", sm: "block" } }}
              >
                Summary
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" sx={{ mb: 0 }}>
                  {profile.name}
                </Typography>
                <Typography>{profile.work}</Typography>
                <Typography color="textSecondary">
                  {profile.description}
                </Typography>
                <Button
                  sx={{ mb: 2, mt: 1.5 }}
                  variant="contained"
                  endIcon={<FileDownloadOutlined />}
                  onClick={() =>
                    window.open("/assets/Resume-Mark-Aloo.pdf", "_blank")
                  }
                >
                  Resume
                </Button>
              </TimelineContent>
            </TimelineItem>
            {experience.map((exp) => (
              <TimelineItem key={exp.startDate}>
                <TimelineOppositeContent
                  color="textSecondary"
                  sx={{ minWidth: 200, display: { xs: "none", sm: "block" } }}
                >
                  <Typography>
                    {exp.startDate} - {exp.endDate}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ display: { xs: "block", sm: "none" } }}
                  >
                    {exp.startDate} - {exp.endDate}
                  </Typography>
                  <Typography>{exp.role}</Typography>
                  <Typography color="textSecondary">
                    {exp.company} . {exp.type} . {exp.duration}
                  </Typography>
                  <Typography color="textSecondary">{exp.location}</Typography>
                  <ul style={{ paddingLeft: 20 }}>
                    {exp.highlights.map((h) => (
                      <li key={h}>
                        <Typography variant="body2">{h}</Typography>
                      </li>
                    ))}
                  </ul>
                  <Box sx={{ my: 1.5 }}>
                    {exp.tags.map((t) => (
                      <Chip key={t} label={t} sx={{ mr: 0.5, mb: 0.5 }} />
                    ))}
                  </Box>
                  <Box sx={{ mb: 2.5 }}>
                    {exp.links.map((link) => (
                      <Button
                        key={link.url}
                        variant="outlined"
                        endIcon={<OpenInNew />}
                        sx={{ mr: 0.5, mb: 0.5 }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Box>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </>
  );
}
