"use client";

import {
  Card,
  List,
  ListItem,
  ListItemText,
  Switch,
  useColorScheme,
} from "@mui/material";

import { useEffect } from "react";

type Props = { theme: "light" | "dark" | "system" | null };

export default function ThemeSwitcher({ theme }: Readonly<Props>) {
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    theme && setMode?.(theme);
  }, [setMode, theme]);

  return (
    <Card variant="outlined">
      <List sx={{ minWidth: 180 }}>
        <ListItem
          secondaryAction={
            <Switch
              checked={mode == "dark"}
              onChange={(_, v) => setMode(v ? "dark" : "light")}
            />
          }
        >
          <ListItemText primary="Dark Theme" />
        </ListItem>
      </List>
    </Card>
  );
}
