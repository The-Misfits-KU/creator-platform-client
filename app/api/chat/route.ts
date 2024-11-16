import { pinecone, google, generateEmbedding } from '@/services/ai';

export async function POST(req: Request) {
  const { messages, postId, userId } = await req.json();
  const filter = [{ field: 'userId', values: [userId] }];
  if (!userId) {
    return new Response(JSON.stringify({ error: 'userId is required' }), {
      status: 400,
    });
  }
  if (postId) {
    filter.push({ field: 'postId', values: [postId] });
  }
  const last_message = messages[messages.length - 1];

  try {
    const index = pinecone.Index(process.env.PINECONE_INDEX as string);
    const embedding = await generateEmbedding(last_message);
    const queryResults = index.query({
      topK: 5,
      vector: embedding.values,
      filter: filter,
    });
    const model = google.getGenerativeModel({
      model: 'models/gemini-1.5-flash-8b',
    });
    const res = await model.generateContent(last_message);
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
