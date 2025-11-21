import { getCollections } from "@/utils/supabase/collections";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const collections = await getCollections();
    return NextResponse.json(collections, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching collections", error: error.message },
      { status: 500 }
    );
  }
}
