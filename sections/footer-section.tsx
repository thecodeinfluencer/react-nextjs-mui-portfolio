import ListeningCard from "@/components/listening-card";
import { TypoLink } from "@/components/typo-link";
import { profile } from "@/utilities/content";
import { Card, Container, Grid, Paper, Stack } from "@mui/material";

export default function FooterSection() {
  return (
    <Paper
      square
      sx={{
        py: 5,
        borderTopColor: "divider",
        borderTopStyle: "solid",
        borderTopWidth: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid sx={{ my: 2 }} size={{ xs: 12, sm: 6, md: 4 }}>
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
          <Grid sx={{ my: 2 }} size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack sx={{ px: 2 }}>
              <TypoLink href={profile.socials.twitter}>X (Twitter)</TypoLink>
              <TypoLink href={profile.socials.linkedIn}>LinkedIn</TypoLink>
              <TypoLink href={profile.socials.github}>GitHub</TypoLink>
              <TypoLink href={profile.socials.figma}>Figma</TypoLink>
            </Stack>
          </Grid>
          <Grid sx={{ my: 2 }} size={{ xs: 12, sm: 6, md: 4 }}>
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
          <Grid sx={{ my: 2 }} size={12}>
            <Card variant="outlined">
              <ListeningCard />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
