import mongoose, { Schema } from "mongoose";

// Skema Mongoose untuk data GeoJson
const missionSchema = new Schema(
  {
    type: {
      type: String,
    },
    geometry: {
      type: {
        type: String,
      },
      coordinates: {
        type: [Number],
      },
    },
    properties: {
      name: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Buat model Mongoose dari skema
const missionModel = mongoose.model("Mission", missionSchema);

module.exports = missionModel;
