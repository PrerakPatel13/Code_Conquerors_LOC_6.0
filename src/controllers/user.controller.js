import validator from "validator";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { StudyGoal } from "../models/studyGoal.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error generating access and refresh tokens");
  }
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  // get user details
  const { username, email, fullName, password } = req.body;
  // console.log(req.body);

  // validation for not empty
  if (
    [username, email, fullName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // valdiates email
  if (!validator.isEmail(email)) {
    throw new ApiError(400, "Invalid Email !");
  }

  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  // console.log(existedUser);

  if (existedUser) {
    throw new ApiError(409, "User with username or email already exists !");
  }
  // let avatarLocalPath;
  // if (
  //   req.files &&
  //   Array.isArray(req.files.avatar) &&
  //   req.files.avatar.length > 0
  // ) {
  //   avatarLocalPath = req.files.avatar[0].path;
  // } else {
  //   throw new ApiError(400, "Avatar file is required");
  // }

  // upload to cloudinary
  // const avatar = await uploadOnCloudinary(avatarLocalPath);
  // if (!avatar) {
  //   throw new ApiError(400, "Avatar file is required");
  // }

  // create user obj
  const user = await User.create({
    username: username.toLowerCase(), // stores username in lowercase
    email,
    fullName,
    password,
    // avatar: { publicId: avatar?.public_id, url: avatar?.url }, // cloudinary url
  });

  // check user creation & response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "Registration Successful"));
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  // data
  const { username, email, password } = req.body;

  if (!(username || email)) {
    throw new ApiError(400, "username or email is required");
  }

  // find user thro username or email
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // check password
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // generate access and refresh token
  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  // either update 'user' instance or again make a call to DB since the older instance doesn't contain refresh token
  const loggedInUser = await User.findOne(user._id).select(
    "-password -refreshToken"
  );

  // adding cookies
  // {httpOnly: true, secure: true,} allows only server & not frontend to modify cookies
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken, // access and refresh token sent again seperately if the user wants to store them locally
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const createStudyGoal = asyncHandler(async (req, res) => {
  const { description } = req.body;
  try {
    const newStudyGoal = await StudyGoal.create({
      description,
      user: req.user,
    });

    res.status(201).json({
      success: true,
      data: newStudyGoal,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});


export {
  registerUser,
  loginUser,
  createStudyGoal,
};
