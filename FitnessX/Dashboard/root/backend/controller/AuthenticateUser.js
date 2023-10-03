const User = require("../models/modelUser");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
//Function Controller to Create  User
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
    const token = signToken(user._id);
    res.status(201).json({
      status: "success",
      data: user,
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;
  // cheack if email and password exist
  if (!email || !password) {
    res.status(400).json({
      status: "feild",
      massage: "please provide email and password",
    });
    return;
  }

  //check if user exist and password is correct

  const user = await User.findOne({ email });
  if (!user || !(await user.correctPassword(password, user.password))) {
    // If admin is not found in the database
    return res.status(401).json({
      status: "error",
      message: "Incorrect email or password",
    });
  }
  const token = signToken(user._id);

  res.status(200).json({
    status: "sucsess",
    token,
  });
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
