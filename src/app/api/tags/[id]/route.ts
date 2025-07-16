import connectDB from "@/lib/db/connect";
import { tagOutputSchema, tagUpdateSchema } from "@/lib/schemas/tagSchema";
import { deleteTag, getTagById, updateTag } from "@/lib/services/tagService";
import { NextRequest, NextResponse } from "next/server";

/*

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectDB();
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "Tag ID is required" }, { status: 400 });
  }
  try {
    const tag = await getTagById(id);
    return NextResponse.json(tag, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to get tag" },
      { status: error.status || 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectDB();
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "Tag ID is required" }, { status: 400 });
  }
  try {
    await deleteTag(id);
    return NextResponse.json(
      { message: "Tag deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to delete tag" },
      { status: error.status || 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectDB();
  const { id } = params;
  if (!id) {
    return NextResponse.json({ error: "Tag ID is required" }, { status: 400 });
  }
  try {
    const body = await req.json();
    const tag = await updateTag(id, body);
    const tagOutput = tagOutputSchema.parse(tag);
    return NextResponse.json(tagOutput, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to update tag" },
      { status: error.status || 500 }
    );
  }
};

*/
