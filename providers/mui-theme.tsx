"use client";

import { PaletteMode, Theme, ThemeProvider, createTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";

export const MUIThemeProvider = ({ children }: any) => {
  const { resolvedTheme } = useNextTheme();

  const appTheme: Theme = createTheme({
    palette: {
      primary: { main: "#22C55E" },
      mode: resolvedTheme as PaletteMode | undefined,
    },
    shape: { borderRadius: 10 },
    typography: { fontFamily: "var(--font-prompt)" },
    components: {
      MuiButton: {
        styleOverrides: { root: { textTransform: "none", borderRadius: 70 } },
      },
    },
  });

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};

export default function Cover() {
  return <>DigiSOC App</>;
}
