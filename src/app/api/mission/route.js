import { NextResponse } from "next/server";
import connectMongoDB from "@/app/config/mongodb.js";
import missionModel from "@/app/models/mission.js";

// POST /api/mission
export async function POST(request) {
  const { type, geometry, properties } = await request.json();
  await connectMongoDB(); // make connection to MongoDB
  await missionModel.create({ type, geometry, properties }); // create new mission
  return NextResponse.json({ message: "Mission created" }, { status: 201 });
}

// GET /api/mission
export async function GET() {
  await connectMongoDB(); // make connection to MongoDB
  const mission = await missionModel.find(); // get all missions
  return NextResponse.json({ mission }, { status: 200 });
}

// DELETE /api/mission
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB(); // make connection to MongoDB
  await missionModel.findByIdAndDelete(id); // delete mission by id
  return NextResponse.json({ message: "Mission deleted" }, { status: 200 });
}
