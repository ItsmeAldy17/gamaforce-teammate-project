import { NextResponse } from "next/server";
import connectMongoDB from "@/app/config/mongodb.js";
import missionModel from "@/app/models/mission.js";

// POST /api/mission
export async function POST(request) {
  const mission = await request.json();
  await connectMongoDB(); // make connection to MongoDB
  const data = await missionModel.create(mission); // create new mission
  console.log(data);
  // console.log(mission);
  // console.log(mission.geoJSON[0].properties);
  // console.log(mission.geoJSON[0].geometry);
  return NextResponse.json({ message: "Mission created" }, { status: 201 });
}

// GET /api/mission
export async function GET() {
  await connectMongoDB(); // make connection to MongoDB
  const missions = await missionModel.find(); // get all missions
  return NextResponse.json({ missions }, { status: 200 });
}

// DELETE /api/mission
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB(); // make connection to MongoDB
  await missionModel.findByIdAndDelete(id); // delete mission by id
  return NextResponse.json({ message: "Mission deleted" }, { status: 200 });
}
