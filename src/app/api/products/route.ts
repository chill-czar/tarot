import { type NextRequest, NextResponse } from "next/server";
import { connectDB } from "~/lib/db";
import Product from "~/models/Product";

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const activeOnly = searchParams.get("active") === "true";
    const category = searchParams.get("category");

    const filter: Record<string, string | boolean> = activeOnly
      ? { isActive: true }
      : {};
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter)
      .select("title description price duration category isActive")
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = (await req.json()) as Record<string, unknown>;

    // Basic validation could happen here, but Mongoose also handles schema validation
    const product = await Product.create(body);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("POST /api/products error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 400 },
    );
  }
}
