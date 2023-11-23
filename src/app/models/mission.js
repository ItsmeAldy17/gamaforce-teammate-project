import mongoose, { Schema } from "mongoose";

// Skema Mongoose untuk data GeoJson
const missionSchema = new Schema(
  {
    type: {
      type: String,
    },
    properties: {
      id: {
        type: Number,
      },
      mission_name: {
        type: String,
      },
    },
    geometry: {
      type: {
        type: String,
      },
      coordinates: {
        type: [[Number]], // Nestaed array of [longitude, latitude]
      },
    },
  },
  {
    timestamps: true,
  }
);

// Mongoose model untuk data GeoJson
// mongoose.models._Mission --> Jika udah dibuat modelnya maka tidak perlu dibuat lagi
const missionModel =
  mongoose.models._Mission || mongoose.model("_Mission", missionSchema); //

module.exports = missionModel;