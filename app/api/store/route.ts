import { NextApiRequest, NextApiResponse } from "next";
import { pinecone, google } from "@/services/ai";
import { embed } from "ai";

export async function POST(req: Request, res: Response) {
  const { postId, content, userId } = req.body as any;
  try {
    const index = pinecone.Index("posts");
    const model = google.textEmbeddingModel("text-embedding-004", {
      outputDimensionality: 512,
    });
    const embeddings = await embed({
      model: model,
      value: content,
    });
    console.log("Embeddings:", embeddings);
    // await index.upsert([
    //   {
    //     id: postId,
    //     values: "hello", // Pre-computed vector representation
    //     metadata: { postId, userId },
    //   },
    // ]);

    return new Response(
      JSON.stringify({ message: "Post stored successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error storing post:", error);
    return new Response(JSON.stringify({ message: "Error storing post" }), {
      status: 500,
    });
  }
}


