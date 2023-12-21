// Framer Motion Variants

import { Variants } from "framer-motion";

export const textContainer: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.05 },
  },
};

export const cardContainer: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delayChildren: 0.3, staggerChildren: 0.2 },
  },
};

export const cardItem: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const cardPopup: Variants = {
  offscreen: { y: 200 },
  onscreen: {
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};
