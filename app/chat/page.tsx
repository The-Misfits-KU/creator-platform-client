"use client";
import Chat from "@/components/ai/chat";
import { useChat } from "ai/react";
import React, { useState } from "react";

const Page: React.FC = () => {
  const [context, setContext] = useState<string[] | null>(null);
  const { messages, input, handleInputChange, handleSubmit: originalHandleSubmit } = useChat();
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await originalHandleSubmit();
  };

  return (
    <div className="...">
      <div className="...">
        <Chat
          input={input}
          handleInputChange={handleInputChange}
          handleMessageSubmit={handleSubmit}
          messages={messages}
        />
      </div>
    </div>
  );
};

export default Page;