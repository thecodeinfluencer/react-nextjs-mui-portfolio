"use client";

import { profile } from "@/utilities/content";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SkillsSection() {
  const [isClient, setIsClient] = useState(false);

  const { resolvedTheme } = useNextTheme();
  const {
    palette: { grey, background },
  } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor:
          resolvedTheme == "dark" ? grey[900] : background.default,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Skills
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Languages
                </Typography>
                {profile.skills
                  .filter((skill) => skill.category == "languages")
                  .map((skill) => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      sx={{ mr: 1, mb: 1 }}
                      variant={resolvedTheme == "dark" ? "outlined" : "filled"}
                    />
                  ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Frameworks and Libraries
                </Typography>
                {profile.skills
                  .filter((skill) => skill.category == "frameworks")
                  .map((skill) => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      sx={{ mr: 1, mb: 1 }}
                      variant={resolvedTheme == "dark" ? "outlined" : "filled"}
                    />
                  ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Tools and Databases
                </Typography>
                {profile.skills
                  .filter((skill) => skill.category == "tools")
                  .map((skill) => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      sx={{ mr: 1, mb: 1 }}
                      variant={resolvedTheme == "dark" ? "outlined" : "filled"}
                    />
                  ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
