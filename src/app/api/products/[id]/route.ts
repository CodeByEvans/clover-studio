// src/app/api/products/[id]/route.ts

import connectDB from "@/lib/db/connect";
import {
  deleteProduct,
  getProductById,
  updateProduct,
} from "@/lib/services/productService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }
  try {
    const product = await getProductById(id);
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Failed to get product" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  await connectDB();
  const { id } = await params;
  if (!id) {
    return NextResponse.json(
      { error: "Product ID is required" },
      { status: 400 }
    );
  }
  try {
    await deleteProduct(id);
    return NextResponse.json(
      { message: "Product deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Failed to delete product" },
      { status: 500 }
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
      { error: "Product ID is required" },
      { status: 400 }
    );
  }
  try {
    const body = await req.json();
    const product = await updateProduct(id, body);
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Failed to update product" },
      { status: 500 }
    );
  }
};
