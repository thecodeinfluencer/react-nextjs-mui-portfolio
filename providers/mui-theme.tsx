"use client";

import { profile } from "@/utilities/content";
import {
  Experimental_CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material";

const theme = extendTheme({
  cssVarPrefix: "inf",
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

export default function MUIThemeProvider({ children, ...props }: Props) {
  return (
    <Experimental_CssVarsProvider theme={theme} {...props}>
      {children}
    </Experimental_CssVarsProvider>
  );
}
