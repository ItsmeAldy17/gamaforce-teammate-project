import { NextResponse } from "next/server";
import connectMongoDB from "@/app/config/mongodb.js";
import missionModel from "@/app/models/mission.js";

// PUT /api/mission/[id]
// req.params.id
export async function PUT(request, { params }) {
  const { id } = params;
  const mission = await request.json();

  try {
    await connectMongoDB(); // make connection to MongoDB
    const updatedMission = await missionModel.findByIdAndUpdate(id, mission, {
      new: true,
    });
    console.log(updatedMission);

    if (!updatedMission) {
      return NextResponse.json(
        { message: "Mission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Mission updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    // return NextResponse.json(
    //   { message: "Failed to update mission" },
    //   { status: 500 }
    // );
  }
}

// GET /api/mission/[id]
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB(); // make connection to MongoDB
  const mission = await missionModel.findOne({ _id: id }); // get mission by id
  return NextResponse.json({ mission }, { status: 200 });
}
