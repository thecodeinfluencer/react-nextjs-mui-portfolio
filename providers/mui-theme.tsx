"use client";

import { createTheme, ThemeProvider, PaletteMode, Theme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";

export const MUIThemeProvider = ({ children }: any) => {
  const { resolvedTheme } = useNextTheme();

  const appTheme: Theme = createTheme({
    palette: {
      primary: { main: "#0064e0" },
      mode: resolvedTheme as PaletteMode | undefined,
    },
    shape: { borderRadius: 10 },
    typography: { fontFamily: "Futura Bk BT" },
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
