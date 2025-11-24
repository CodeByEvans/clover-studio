import { getNavigation } from "@/utils/supabase/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const navigation = await getNavigation();
    return NextResponse.json(navigation, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error fetching navigation", error: error.message },
      { status: 500 }
    );
  }
}
