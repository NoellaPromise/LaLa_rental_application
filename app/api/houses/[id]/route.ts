// app/api/houses/[id]/route.ts
import { NextResponse } from "next/server";
import { deleteHome } from "@/lib/data";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  deleteHome(id);
  return NextResponse.json({ message: "House deleted" });
}
