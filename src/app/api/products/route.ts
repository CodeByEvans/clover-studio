// src/app/api/products/route.ts

import connectDB from "@/lib/db/connect";
import { createProduct, getAllProducts } from "@/lib/services/productService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  const products = await getAllProducts();
  return NextResponse.json(products);
};

export const POST = async (req: NextRequest) => {
  await connectDB();
  const formData = await req.formData();
  if (!formData) {
    return NextResponse.json(
      { error: "No form data provided" },
      { status: 400 }
    );
  }
  try {
    const product = await createProduct(formData);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
