import { getCollection, getProducts } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const search = searchParams.get("search") || "";
    const collectionSlug = searchParams.get("collection") || "";

    let collection = undefined;

    if (collectionSlug && collectionSlug !== "all") {
      const selectedCollection = await getCollection(collectionSlug);
      if (!selectedCollection) {
        return NextResponse.json(
          { message: "Collection not found" },
          { status: 404 }
        );
      }
      collection = selectedCollection.id;
    }
    const products = await getProducts(search, collection);
    return NextResponse.json(products, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching products", error: error.message },
      { status: 500 }
    );
  }
}
