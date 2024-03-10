import { asyncHandler } from "../utils/asyncHandler.js";
// import { User } from "../models/user.model.js";
import { Course } from "../models/course.model.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createCourse = asyncHandler(async (req, res) => {
  const { subject, topics, studyPreference, interests } = req.body;
  try {
    const newCourse = await Course.create({
      subject,
      topics,
      studyPreference,
      interests,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      data: newCourse,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

const getCourse = asyncHandler(async (req, res) => {
  const course = await Course.find({ user: req.user._id });
  res.status(201).json({
    success: true,
    data: course,
  });
});

const getPreference = asyncHandler(async (req, res) => {
  const { preference } = await req.body;
  const coursePreference = await Course.find({ studyPreference: preference });
  res.status(201).json({
    success: true,
    data: coursePreference,
  });
});

export { createCourse, getCourse, getPreference };
