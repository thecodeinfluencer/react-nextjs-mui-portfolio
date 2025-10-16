"use client";

import { ArrowForwardRounded, OpenInNew } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

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
