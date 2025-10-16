"use client";

import { profile } from "@/utilities/content";
import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function SkillsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <Paper
      square
      sx={{
        py: 10,
        borderTop: ({ palette }) => `2px solid ${palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Skills
        </Typography>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Languages
                </Typography>
                {profile.skills
                  .filter(skill => skill.category == "languages")
                  .map(skill => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      sx={{ mr: 1, mb: 1 }}
                      variant="outlined"
                    />
                  ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Frameworks and Libraries
                </Typography>
                {profile.skills
                  .filter(skill => skill.category == "frameworks")
                  .map(skill => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      sx={{ mr: 1, mb: 1 }}
                      variant="outlined"
                    />
                  ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ fontWeight: "bold", mb: 2 }}>
                  Tools and Databases
                </Typography>
                {profile.skills
                  .filter(skill => skill.category == "tools")
                  .map(skill => (
                    <Chip
                      key={skill.label}
                      label={skill.label}
                      sx={{ mr: 1, mb: 1 }}
                      variant="outlined"
                    />
                  ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
