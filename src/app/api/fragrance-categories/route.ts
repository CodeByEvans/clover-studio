import { getFraganceCategories } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fraganceCategories = await getFraganceCategories();
    return NextResponse.json(fraganceCategories, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching fragance categories", error: error.message },
      { status: 500 }
    );
  }
}
