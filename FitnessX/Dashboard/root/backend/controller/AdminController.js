const Admin = require("../models/modelAdmin");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const creatSendToken = (admin, req, res) => {
  const token = signToken(admin._id);
  res.cookie("jwt", token, {
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    secure: true,
  });

  res.status(200).json({
    status: "sucsess",
    token,
  });
};

exports.CreateAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const existingAdmin = await Admin.findOne({ email });

    // Check if the email already exists in the database
    if (existingAdmin) {
      return res
        .status(409)
        .json({ status: "fail", message: "Email already exists" });
    }
    const admin = await Admin.create(req.body);
    console.log("........", req.body);
    const token = signToken(admin._id);
    res.status(201).json({
      status: "sucsess",
      token,
      data: admin,
    });
  } catch (err) {
    res.status(404).json({
      status: "feild",
      massage: err,
    });
  }
};

exports.verifyToken = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(req.cookies);

  
  try {
    if (!token) {
      return res.status(401).json({
        status: "Missing token",
        message: error.message, // Use the error message from the catch block
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decodedToken", decodedToken);
    // Token is valid, you can now access the decoded data
    const admin = await Admin.findById(decodedToken.id).select("-password");

    if (!admin) {
      return res.status(401).json({
        status: "Unauthorized - Admin not found",
        message: error.message, // Use the error message from the catch block
      });
    }
    // Attach the admin object to the request for future use
    req.admin = admin;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: error.message, // Use the error message from the catch block
    });
  }
};

exports.LoginAdmin = async (req, res) => {
  const { email, password } = req.body;
  // cheack if email and password exist
  if (!email || !password) {
    res.status(400).json({
      status: "feild",
      massage: "please provide email and password",
    });
    return;
  }

  //check if admin exist and password is correct

  const admin = await Admin.findOne({ email });
  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    // If admin is not found in the database
    return res.status(401).json({
      status: "error",
      message: "Incorrect email or password",
    });
  }
  creatSendToken(admin, req, res);
};

exports.GetAllAdmin = async (req, res) => {
  try {
    const admin = await Admin.find();
    res.status(200).json({
      result: admin.length,
      status: "success",
      data: admin,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};
