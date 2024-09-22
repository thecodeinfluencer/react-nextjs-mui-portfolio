"use client";

import { Message } from "@/components/message";
import { useScrollToBottom } from "@/components/use-scroll-to-bottom";
import { profile } from "@/utilities/content";
import {
  Alert,
  Box,
  Card,
  CardActionArea,
  Container,
  Grid2,
  ListItem,
  ListItemText,
  TextField,
  Toolbar,
} from "@mui/material";
import { useActions } from "ai/rsc";
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

export default function Portfolio() {
  const { sendMessage } = useActions();

  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Array<ReactNode>>([]);

  const inputRef = useRef<HTMLInputElement>(null);
  const [messagesContainerRef, messagesEndRef] =
    useScrollToBottom<HTMLDivElement>();

  const suggestedActions = [
    { title: "Tell me", label: "about yourself" },
    { title: "Show me", label: "some of your projects." },
    { title: "Do you have", label: "testimonials from colleagues?" },
    { title: "What music", label: "Are you currently listening to?" },
  ];

  return (
    <>
      <Container maxWidth="sm" ref={messagesContainerRef}>
        <Toolbar />
        {messages.length === 0 && (
          <Alert severity="info">
            I&apos;m a digital version of {profile.name}. I can show you his
            work history, projects, talks, blogs, testimonials, contributions,
            socials, or even what music he&apos;s currently jamming to.
          </Alert>
        )}
        {messages.map((message) => message)}
        <Toolbar />
        <Toolbar />
        <div ref={messagesEndRef} />
      </Container>

      <Box sx={{ position: "fixed", bottom: 20, left: 0, width: "100%" }}>
        <Container maxWidth="sm">
          <Grid2 container spacing={1} sx={{ mb: 1 }}>
            {messages.length === 0 &&
              suggestedActions.map((action, index) => (
                <Grid2
                  size={6}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.01 * index }}
                  key={index}
                  sx={{
                    display: index > 1 ? { xs: "none", sm: "block" } : "block",
                  }}
                >
                  <Card>
                    <CardActionArea
                      onClick={async () => {
                        setMessages((messages) => [
                          ...messages,
                          <Message
                            key={messages.length}
                            role="user"
                            content={`${action.title} ${action.label}`}
                          />,
                        ]);
                        const response: ReactNode = await sendMessage(
                          `${action.title} ${action.label}`
                        );
                        setMessages((messages) => [...messages, response]);
                      }}
                    >
                      <ListItem>
                        <ListItemText
                          primary={action.title}
                          secondary={action.label}
                        />
                      </ListItem>
                    </CardActionArea>
                  </Card>
                </Grid2>
              ))}
          </Grid2>

          <form
            onSubmit={async (event) => {
              event.preventDefault();

              setMessages((messages) => [
                ...messages,
                <Message key={messages.length} role="user" content={input} />,
              ]);

              setInput("");

              const response: ReactNode = await sendMessage(input);
              setMessages((messages) => [...messages, response]);
            }}
          >
            <Card sx={{ borderRadius: 70 }}>
              <TextField
                fullWidth
                value={input}
                ref={inputRef}
                placeholder="Send a message..."
                onChange={(event) => setInput(event.target.value)}
                slotProps={{ input: { style: { borderRadius: 70 } } }}
              />
            </Card>
          </form>
        </Container>
      </Box>
    </>
  );
}
