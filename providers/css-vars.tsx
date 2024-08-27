"use client";

import { profile } from "@/utilities/content";
import {
  Experimental_CssVarsProvider as ExperimentalThemeProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material";

const theme = extendTheme({
  cssVarPrefix: "sui",
  colorSchemes: {
    dark: { palette: { primary: { main: profile.primaryColor } } },
    light: { palette: { primary: { main: profile.primaryColor } } },
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
    <ExperimentalThemeProvider theme={theme} {...props}>
      {children}
    </ExperimentalThemeProvider>
  );
}
