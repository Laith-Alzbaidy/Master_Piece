const User = require("../models/modelUser");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const generateVerificationCode = () => {
  // Generate a 4-digit random verification code
  return Math.floor(1000 + Math.random() * 9000);
};

// Function to send a verification email
const sendVerificationEmail = async (user, verificationToken) => {
  const verificationCode = generateVerificationCode();

  try {
    console.log(user);
    console.log(verificationToken);
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail, Outlook, etc.
      auth: {
        user: "laithalzbaidy@gmail.com",
        pass: "twmxfenbjfbwxrri",
      },
    });
    const mailOptions = {
      from: "laithalzbaidy@gmail.com",
      to: user.email,
      subject: "Email Verification",
      text: `Please click the following link to verify your email: ${
        "or this code " + verificationCode
      } http://localhost:8000/verify/${verificationToken}/`,
    };

    await transporter.sendMail(mailOptions);
    return verificationCode;
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

// Function Controller to Create User
exports.SignUpUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });

    // Check if the email already exists in the database
    if (existingUser) {
      return res
        .status(409)
        .json({ status: "fail", message: "Email already exists" });
    }

    const user = await User.create(req.body);

    // Create a verification token and send the verification email
    const verificationToken = signToken(user._id);

    const verificationCode = await sendVerificationEmail(
      user,
      verificationToken
    );

    // Set the token in the response header
    res.setHeader("Authorization", `Bearer ${verificationToken}`);

    // Update the user with the verification code
    await User.findByIdAndUpdate(user._id, {
      verificationCode: verificationCode,
    });

    res.status(201).json({
      status: "success",
      data: user,
      token: verificationToken,
      message: "Please check your email for verification instructions.",
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

// Function to verify the verification code
const verifyVerificationCode = async (userId, verificationCode) => {
  try {
    // Retrieve the user by userId
    const user = await User.findById(userId);

    // Check if the user exists and if the verification code matches
    if (user && user.verificationCode === verificationCode) {
      // Verification is successful
      return true;
    } else {
      // Verification failed
      return false;
    }
  } catch (error) {
    console.error("Error verifying verification code:", error);
    return false;
  }
};
// Function to verify a user
exports.VerifyUser = async (req, res) => {
  console.log(req.body);
  console.log("VerifyUser");
  try {
    const { userId, verificationCode } = req.body;
    console.log(userId);
    // Assuming you have a function to verify the code on the server side
    const isVerificationSuccessful = await verifyVerificationCode(
      userId,
      verificationCode
    );
    // console.log("user++++++++++++++++++++++++", userId);

    if (isVerificationSuccessful) {
      // Update the user's 'verify' field to true
      await User.findByIdAndUpdate(userId, {
        verified: true,
        verificationCode: undefined,
      });

      return res.json({
        status: "success",
        message: "Email verified successfully",
      });
    } else {
      return res
        .status(400)
        .json({ status: "fail", message: "Verification failed" });
    }
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getUserData = async (req, res) => {
  try {
    // The token is available in the request header
    const token = req.header("Authorization").replace("Bearer ", "");

    // Verify the token to get the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your actual secret key
    const userId = decoded.id;
    // Retrieve the user's data based on their ID
    const userData = await User.findById(userId).select(
      "-password -confirmPassword"
    );
    if (!userData) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found" });
    }
    res.status(200).json({ status: "success", data: userData });
  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

// //endpoint to verify the email
// exports.VerfiyEmail = async (req, res) => {
//   try {
//     const token = req.params.token;

//     console.log("--------------------", token);
//     //Find the user with the given verification token
//     const user = await User.findOne({ verificationToken: token });
//     if (!user) {
//       return res.status(404).json({ message: "Invalid verification token" });
//     }

//     //Mark the user as verified
//     user.verified = true;
//     user.verificationToken = undefined;

//     await user.save();

//     res.status(200).json({ message: "Email verified successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Email Verificatioion Failed" });
//   }
// };

// Function Controller to Create User
// exports.SignUpUser = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const existingUser = await User.findOne({ email });

//     // Check if the email already exists in the database
//     if (existingUser) {
//       return res
//         .status(409)
//         .json({ status: "fail", message: "Email already exists" });
//     }

//     const user = await User.create(req.body);

//     // Create a verification token and send the verification email
//     const verificationToken = signToken(user._id);

//     await sendVerificationEmail(user, verificationToken);

//     // Set the token in the response header
//     res.setHeader("Authorization", `Bearer ${verificationToken}`);

//     res.status(201).json({
//       status: "success",
//       data: user,
//       token: verificationToken,
//       message: "Please check your email for verification instructions.",
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: "failed",
//       message: err,
//     });
//   }
// };

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      status: "field",
      message: "Please provide email and password",
    });
    return;
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "error",
        message: "Incorrect email or password",
      });
    }

    const token = signToken(user._id);

    // Set the token in the response header
    res.setHeader("Authorization", `Bearer ${token}`);

    res.status(200).json({
      status: "success",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

exports.authenticateTokenLogin = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// exports.protect = async (req, res, next) => {
//   try {
//     // 1) Getting token and check if it's there
//     let token;
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       token = req.headers.authorization.split(" ")[1];
//     }
//     if (!token) {
//       return res.status(401).json({
//         status: "fail",
//         message: "You are not logged in! Please login to get access",
//       });
//     }
//     //2) verification token
//     //اذا انتهت صاحية الرمز او تم التلاعب بالبيانات
//     const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
//     console.log("-------------", decoded);

//     //3) check if user still exists
//     const freshuser = await User.findById(decoded.id);
//     const Admins = await Admins.findById(decoded.id);
//     console.log(freshuser);
//     if (!freshuser) {
//       return res.status(401).json({
//         status: "field",
//         massage: "the user belogining to this token no longer exist",
//       });
//     }
//     //4) check if user changed password after the token was issued
//     if (freshuser.changePasswordAfter(decoded.iat)) {
//       return res.status(401).json({
//         status: "fail",
//         message: "User recently changed password! Please login again",
//       });
//     }

//     req.user = freshuser;
//     next();
//   } catch (error) {
//     // Handle JWT verification errors
//     return res.status(401).json({
//       status: "fail",
//       message: error.name,
//     });
//   }
// };
