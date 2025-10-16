"use client";

import { cardItem } from "@/utilities/framer";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { ReactElement } from "react";

type Props = { children: ReactElement<any> };

export default function MotionItem({ children }: Props) {
  return (
    <Box component={motion.div} variants={cardItem}>
      {children}
    </Box>
  );
}
