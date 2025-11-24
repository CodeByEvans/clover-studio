import { getHeaderHighlights } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const header_highlights = await getHeaderHighlights();
    return NextResponse.json(header_highlights, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching header highlights", error: error.message },
      { status: 500 }
    );
  }
}
