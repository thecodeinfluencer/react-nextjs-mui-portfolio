"use client";

import { cardContainer } from "@/utilities/framer";
import { Masonry } from "@mui/lab";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type Props = { children: NonNullable<ReactNode> };

export default function MotionMasonry({ children }: Props) {
  return (
    <Masonry
      component={motion.div}
      variants={cardContainer}
      initial="hidden"
      animate="visible"
      spacing={2}
      columns={{ xs: 1, sm: 2, md: 3 }}
    >
      {children}
    </Masonry>
  );
}
