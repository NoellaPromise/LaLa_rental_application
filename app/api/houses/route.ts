// app/api/houses/route.ts
import { NextResponse } from 'next/server';
import { homes, getHomes, addHome, deleteHome } from '@/lib/data';

export async function GET() {
  const houses = getHomes();
  return NextResponse.json(houses);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newHouse = addHome(data);
  return NextResponse.json(newHouse, { status: 201 });
}

