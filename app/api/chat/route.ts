import { pinecone, google, generateEmbedding } from '@/services/ai';
import prompt from '@/utils/constants';

export async function POST(req: Request) {
  const { messages, postId, userId } = await req.json();
  if (!userId) {
    return new Response(JSON.stringify({ error: 'userId is required' }), {
      status: 400,
    });
  }
  let filter: any = { user:  {"$eq": userId} };
  if (postId != null) {
    filter = {'$and': [{ user:  {"$eq": userId} }, { postId: {"$ne": postId}}]};
  }
  const last_message = messages[messages.length - 1];

  try {
    const index = pinecone.Index(process.env.PINECONE_INDEX as string);
    const embedding = await generateEmbedding(last_message);
    const queryResults = await index.query({
      topK: 5,
      vector: embedding.values,
      // filter: filter,
      includeMetadata: true,
    });
    console.log('queryResults:', queryResults);
    let retrived: string[] = [];
    queryResults.matches.forEach(async (match) => {
      const { metadata } = match;
      metadata && retrived.push(metadata.content as string);
    });
    console.log('retrived:', retrived);
    const model = google.getGenerativeModel({
      model: 'models/gemini-1.5-flash-8b',
    });
    const prompt_message = prompt(retrived, last_message);
    console.log(prompt_message);
    const res = await model.generateContent(prompt_message);
    return new Response(JSON.stringify({ messages: res.response.text() }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
