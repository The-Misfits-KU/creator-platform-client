import React, { FormEvent, ChangeEvent } from 'react';
import { Message } from 'ai/react';

import Messages from './messages';

interface Chat {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMessageSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  messages: Message[];
}

const Chat: React.FC<Chat> = ({
  input,
  handleInputChange,
  handleMessageSubmit,
  messages,
}) => {
  return (
    <div className='...' id='chat'>
      <Messages messages={messages} />
      <>
        <form className='...' onSubmit={handleMessageSubmit}>
          <input
            className='...'
            type='text'
            value={input}
            onChange={handleInputChange}
          />

          <span className='...'>Press ⮐ to send</span>
        </form>
      </>
    </div>
  );
};

export default Chat;
