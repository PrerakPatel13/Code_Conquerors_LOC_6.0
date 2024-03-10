import mongoose from "mongoose";

let courseSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
    // enum: ["Mathematics", "Science", "History"],
  },
  topic: {
    type: String,
  },
  studyPreference: {
    type: String,
  },
  interests: [
    {
      type: String,
      // enum: [
      //   "Cryptography",
      //   "Mathematical puzzles",
      //   "Environmental conservation",
      // ],
    },
  ],
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const Course = mongoose.model("Course", courseSchema);
