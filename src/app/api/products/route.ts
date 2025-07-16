// src/app/api/products/route.ts

import connectDB from "@/lib/db/connect";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "@/lib/services/productService";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
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
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: error.status || 500 }
    );
  }
};
