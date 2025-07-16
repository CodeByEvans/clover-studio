import connectDB from "@/lib/db/connect";
import { tagInputSchema, tagOutputSchema } from "@/lib/schemas/tagSchema";
import { createTag, getAllTags } from "@/lib/services/tagService";
import { NextRequest, NextResponse } from "next/server";

/*
export const GET = async (req: NextRequest) => {
  await connectDB();
  const tags = await getAllTags();
  return NextResponse.json(tags, { status: 200 });
};

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();
    const validatedBody = tagInputSchema.parse(body);
    const tag = await createTag(validatedBody);
    const tagOutput = tagOutputSchema.parse(tag);
    return NextResponse.json(tagOutput, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to create tag" },
      { status: error.status || 500 }
    );
  }
};
*/
