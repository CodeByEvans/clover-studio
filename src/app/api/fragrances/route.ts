import { getFragances } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const fragances = await getFragances();
    return NextResponse.json(fragances, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching fragances", error: error.message },
      { status: 500 }
    );
  }
}
