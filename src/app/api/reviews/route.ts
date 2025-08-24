import { createReview, getReviews } from "@/services/server/reviewService";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const reviews = await getReviews();
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const requestHeaders = await headers();

    const forwardedFor = requestHeaders.get("x-forwarded-for");
    const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

    const body = await req.json();
    const review = await createReview(body, ip);
    return NextResponse.json(review, { status: 200 });
  } catch (error) {
    const err = error instanceof Error ? error : new Error("Unknown error");
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
