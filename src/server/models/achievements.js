import mongoose from "mongoose";

const { Schema } = mongoose;

const Achievement = new Schema(
  {
    userId: {
      type: Number,
      unique: true,
      required: true,
    },
    cabbageSeedlings: {
      type: Number,
      default: 0,
    },
    carrotSeedlings: {
      type: Number,
      default: 0,
    },
    expansionOfTheBedsUpTo15Cells: {
      type: Number,
      default: 0,
    },
    forTheFirstHarvest: {
      type: Number,
      default: 0,
    },
    forTheFirst5VisitsToTheGame: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Achievement", Achievement);
