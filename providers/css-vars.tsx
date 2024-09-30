"use client";

import { profile } from "@/utilities/content";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: { cssVarPrefix: "sui", colorSchemeSelector: "class" },
  colorSchemes: {
    dark: { palette: { primary: { main: profile.primaryColor.dark } } },
    light: { palette: { primary: { main: profile.primaryColor.light } } },
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "var(--font-prompt)" },
  components: {
    MuiButton: {
      styleOverrides: { root: { textTransform: "none", borderRadius: 70 } },
    },
  },
});

type Props = { children: React.ReactNode };

export function CssVarsProvider({ children, ...props }: Readonly<Props>) {
  return (
    <ThemeProvider theme={theme} {...props}>
      {children}
    </ThemeProvider>
  );
}
