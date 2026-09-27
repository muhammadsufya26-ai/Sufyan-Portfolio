import { NextResponse } from "next/server";
import { getDesignFolders } from "@/lib/designs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const folders = getDesignFolders();
    return NextResponse.json(
      { folders },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Error in /api/designs route:", error);
    return NextResponse.json(
      { error: "Failed to read design archives" },
      { status: 500 }
    );
  }
}
