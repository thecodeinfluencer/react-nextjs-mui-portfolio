import { TextStreamMessage } from "@/components/message";
import { profile } from "@/utilities/content";
import { openai } from "@ai-sdk/openai";
import { CoreMessage, generateId } from "ai";
import {
  createAI,
  createStreamableValue,
  getMutableAIState,
  streamUI,
} from "ai/rsc";
import { ReactNode } from "react";
import {
  viewBlogs,
  viewContributions,
  viewListening,
  viewProjects,
  viewSkills,
  viewSocials,
  viewTalks,
  viewTestimonials,
  viewWork,
} from "./tools";

export interface Hub {
  climate: Record<"low" | "high", number>;
  lights: Array<{ name: string; status: boolean }>;
  locks: Array<{ name: string; isLocked: boolean }>;
}

const sendMessage = async (message: string) => {
  "use server";

  const messages = getMutableAIState<typeof AI>("messages");

  messages.update([
    ...(messages.get() as CoreMessage[]),
    { role: "user", content: message },
  ]);

  const contentStream = createStreamableValue("");
  const textComponent = <TextStreamMessage content={contentStream.value} />;

  const { value: stream } = await streamUI({
    model: openai("gpt-4o"),
    system: `\
      - you are a friendly digital version of  ${profile.name}
      - be a bit sarcastic
      - stick to the context so that if someone asks anything outside this context, divert them back
      - here's a few things about me:
        name: ${profile.name}
        title: ${profile.title}
        tagline: ${profile.tagline}
        work: ${profile.work}
        description: ${profile.description}
        website: ${profile.url}
    `,
    messages: messages.get() as CoreMessage[],
    text: async function* ({ content, done }) {
      if (done) {
        messages.done([
          ...(messages.get() as CoreMessage[]),
          { role: "assistant", content },
        ]);

        contentStream.done();
      } else {
        contentStream.update(content);
      }

      return textComponent;
    },
    tools: {
      viewWork: viewWork(messages),
      viewSkills: viewSkills(messages),
      viewProjects: viewProjects(messages),
      viewTalks: viewTalks(messages),
      viewBlogs: viewBlogs(messages),
      viewTestimonials: viewTestimonials(messages),
      viewContributions: viewContributions(messages),
      viewSocials: viewSocials(messages),
      viewListening: viewListening(messages),

      // updateHub: {
      //   description: "update the hub with new values",
      //   parameters: z.object({
      //     hub: z.object({
      //       climate: z.object({
      //         low: z.number(),
      //         high: z.number(),
      //       }),
      //       lights: z.array(
      //         z.object({ name: z.string(), status: z.boolean() }),
      //       ),
      //       locks: z.array(
      //         z.object({ name: z.string(), isLocked: z.boolean() }),
      //       ),
      //     }),
      //   }),
      //   generate: async function* ({ hub: newHub }) {
      //     hub = newHub;
      //     const toolCallId = generateId();

      //     messages.done([
      //       ...(messages.get() as CoreMessage[]),
      //       {
      //         role: "assistant",
      //         content: [
      //           {
      //             type: "tool-call",
      //             toolCallId,
      //             toolName: "updateHub",
      //             args: { hub },
      //           },
      //         ],
      //       },
      //       {
      //         role: "tool",
      //         content: [
      //           {
      //             type: "tool-result",
      //             toolName: "updateHub",
      //             toolCallId,
      //             result: `The hub has been updated with the new values`,
      //           },
      //         ],
      //       },
      //     ]);

      //     return <Message role="assistant" content={<HubView hub={hub} />} />;
      //   },
      // },
    },
  });

  return stream;
};

export type UIState = Array<ReactNode>;

export type AIState = {
  chatId: string;
  messages: Array<CoreMessage>;
};

export const AI = createAI<AIState, UIState>({
  initialAIState: { chatId: generateId(), messages: [] },
  initialUIState: [],
  actions: { sendMessage },
  onSetAIState: async ({ done }) => {
    "use server";

    if (done) {
      // save to database
    }
  },
});
