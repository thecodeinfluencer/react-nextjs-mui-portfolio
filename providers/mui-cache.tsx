"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

type Props = { children: React.ReactNode };

export default function MUICacheProvider({ children }: Props) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
