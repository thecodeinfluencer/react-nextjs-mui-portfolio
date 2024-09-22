"use client";

import { StreamableValue, useStreamableValue } from "ai/rsc";
import { motion } from "framer-motion";
import { EmojiHappy, User } from "iconsax-react";
import { ReactNode } from "react";
import { Markdown } from "./markdown";
import { Stack } from "@mui/material";

export const TextStreamMessage = ({
  content,
}: {
  content: StreamableValue;
}) => {
  const [text] = useStreamableValue(content);

  return (
    <Stack
      direction="row"
      alignItems="start"
      spacing={1}
      component={motion.div}
      sx={{ width: "100%", px: 1, py: 1 }}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Stack justifyContent="center" alignItems="center" flexShrink={0}>
        <EmojiHappy />
      </Stack>

      <Stack spacing={0.25}>
        <Stack spacing={1}>
          <Markdown>{text}</Markdown>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const Message = ({
  role,
  content,
}: {
  role: "assistant" | "user";
  content: string | ReactNode;
}) => {
  return (
    <Stack
      direction="row"
      alignItems="start"
      spacing={1}
      component={motion.div}
      sx={{ width: "100%", px: 1, py: 1 }}
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Stack justifyContent="center" alignItems="center" flexShrink={0}>
        {role === "assistant" ? <EmojiHappy /> : <User />}
      </Stack>

      <Stack spacing={0.25}>
        <Stack spacing={1}>{content}</Stack>
      </Stack>
    </Stack>
  );
};
