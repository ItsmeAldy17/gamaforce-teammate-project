import { NextResponse } from "next/server";
import connectMongoDB from "@/app/config/mongodb.js";
import missionModel from "@/app/models/mission.js";

// PUT /api/mission/[id]
// req.params.id
export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newType: type,
    newProperties: properties,
    newGeometry: geometry,
  } = await request.json();
  await connectMongoDB(); // make connection to MongoDB
  await missionModel.findByIdAndUpdate(id, { type, properties, geometry }); // update mission by id
  return NextResponse.json({ message: "Mission updated" }, { status: 200 });
}

// GET /api/mission/[id]
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB(); // make connection to MongoDB
  const mission = await missionModel.findOne({ _id: id }); // get mission by id
  return NextResponse.json({ mission }, { status: 200 });
}
