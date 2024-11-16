'use client';
import { useChat } from 'ai/react';
import React from 'react';

import Chat from '@/components/ai/chat';

const Page: React.FC = () => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit: originalHandleSubmit,
  } = useChat();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await originalHandleSubmit();
  };

  return (
    <Chat
      handleInputChange={handleInputChange}
      handleMessageSubmit={handleSubmit}
      input={input}
      messages={messages}
    />
  );
};

export default Page;
