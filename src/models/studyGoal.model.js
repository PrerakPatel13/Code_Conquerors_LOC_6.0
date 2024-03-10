import mongoose from "mongoose";

const studyGoalSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const StudyGoal = mongoose.model("StudyGoal", studyGoalSchema);
