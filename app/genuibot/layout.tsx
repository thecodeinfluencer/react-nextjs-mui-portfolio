import React from "react";
import { AI } from "./actions";

type Props = Readonly<{ children: React.ReactNode }>;

export default function Layout({ children }: Props) {
  return <AI>{children}</AI>;
}
