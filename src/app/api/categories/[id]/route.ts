import connectDB from "@/lib/db/connect";
import {
  categoryOutputSchema,
  categoryUpdateSchema,
} from "@/lib/schemas/categorySchema";
import {
  deleteCategory,
  getCategoryById,
  updateCategory,
} from "@/lib/services/categoryService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Category ID is required" },
      { status: 400 }
    );
  }
  try {
    const category = await getCategoryById(id);
    return NextResponse.json(category, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to get category" },
      { status: error.status || 500 }
    );
  }
};

/* 

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Category ID is required" },
      { status: 400 }
    );
  }

  try {
    await deleteCategory(id);
    return NextResponse.json(
      { message: "Category deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to delete category" },
      { status: error.status || 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();
  const { id } = await params;

  if (!id) {
    return NextResponse.json(
      { error: "Category ID is required" },
      { status: 400 }
    );
  }

  try {
    const body = await req.json();
    const category = await updateCategory(id, body);
    const categoryOutput = categoryOutputSchema.parse(category);
    return NextResponse.json(categoryOutput, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to update category" },
      { status: error.status || 500 }
    );
  }
};
 */
