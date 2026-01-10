import {
  getCollectionById,
  getProductsByCollection,
} from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const collection = await getCollectionById(id);

    if (!collection) {
      return NextResponse.json(
        { message: "Collection not found" },
        { status: 404 }
      );
    }
    const products = await getProductsByCollection(id);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching products by collection", error },
      { status: 500 }
    );
  }
}
