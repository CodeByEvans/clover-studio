import connectDB from "@/lib/db/connect";
import { getAllCategories } from "@/services/server/categoryService";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();
  const categories = await getAllCategories();
  return NextResponse.json(categories, { status: 200 });
};

/*export const POST = async (req: NextRequest) => {
  await connectDB();
  try {
    const body = await req.json();
    const validatedBody = categoryInputSchema.parse(body);
    const category = await createCategory(validatedBody);
    const categoryOutput = categoryOutputSchema.parse(category);
    return NextResponse.json(categoryOutput, { status: 200 });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message || "Failed to create category" },
      { status: error.status || 500 }
    );
  }
}; 
*/
