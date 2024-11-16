"use client";

import Chat from "@/components/ai/chat";
import { useChat } from "ai/react";
import { useState } from "react";

const Page: React.FC = () => {
  const [context, setContext] = useState<string[] | null>(null);
  const { messages, input, handleInputChange, handleSubmit: originalHandleSubmit } = useChat();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await originalHandleSubmit();
  };

  return (
    <Chat
      input={input}
      handleInputChange={handleInputChange}
      handleMessageSubmit={handleSubmit}
      messages={messages}
    />
  );
};

export default Page;
