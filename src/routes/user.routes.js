import { Router } from "express";
import {
  registerUser,
  loginUser,
  createStudyGoal,
} from "../controllers/user.controller.js";
import {
  createCourse,
  getCourse,
  getPreference,
} from "../controllers/course.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  // upload.fields([
  //   {
  //     name: "avatar",
  //     maxCount: 1,
  //   },
  // ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/create-study-goal").post(verifyJWT, createStudyGoal);

router.route("/course/create").post(verifyJWT, createCourse);
router.route("/course/get").get(verifyJWT, getCourse);
router.route("/course/get-preference").get(verifyJWT, getPreference);

export default router;
