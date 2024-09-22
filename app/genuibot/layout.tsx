import React from "react";
import { AI } from "./actions";
import { CssBaseline } from "@mui/material";

type Props = Readonly<{ children: React.ReactNode }>;

export default function Layout({ children }: Props) {
  return (
    <AI>
      <CssBaseline />
      {children}
    </AI>
  );
}
