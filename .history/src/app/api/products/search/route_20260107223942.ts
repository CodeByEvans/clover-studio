import {
  getCollection,
  getProducts,
  searchProducts,
} from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || undefined;
    const collection = searchParams.get("collection") || undefined;
    const limit = Number(searchParams.get("limit")) || 15;

    let collectionId = undefined;

    if (collection && collection !== "all") {
      const selectedCollection = await getCollection(collection);
      if (!selectedCollection) {
        return NextResponse.json(
          { message: "Collection not found" },
          { status: 404 }
        );
      }
      collectionId = selectedCollection.id;
    }

    const products = await searchProducts({
      search,
      collectionId,
      limit,
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 500 }
    );
  }
}
