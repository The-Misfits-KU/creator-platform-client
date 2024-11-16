import { Pinecone } from '@pinecone-database/pinecone';
// import { Message, OpenAIStream, StreamData, StreamingTextResponse } from "ai";
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY ?? '',
});
export const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});
