import { NextResponse } from "next/server";
import { services } from "@/data/services";

export async function GET() {
  try {
    return NextResponse.json(services, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 },
    );
  }
}
