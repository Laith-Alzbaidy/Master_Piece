const User = require("../models/modelUser");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const generateVerificationCode = () => {
  // Generate a 4-digit random verification code
  return Math.floor(1000 + Math.random() * 9000);
};

// const generateVerificationToken = () => {
//   const tokenLength = 64; // You can adjust the token length as needed
//   return require("crypto").randomBytes(tokenLength).toString("hex");
// };

// Function to send a verification email
const sendVerificationEmail = async (user) => {
  const verificationCode = generateVerificationCode();
  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 15);

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "laithalzbaidy@gmail.com",
        pass: "twmxfenbjfbwxrri",
      },
    });
    const mailOptions = {
      from: "laithalzbaidy@gmail.com",
      to: user.email,
      subject: "Email Verification",
      text: `Your verification code is: ${verificationCode}`,
    };

    await transporter.sendMail(mailOptions);

    // Update the user document with the verification code and expiration time
    await User.findByIdAndUpdate(user._id, {
      verificationCode: verificationCode,
      verificationCodeExpires: expirationTime,
    });

    return verificationCode;
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw error;
  }
};

exports.SendEmailResetPassword = async (req, res) => {
  const email = req.body.email;

  try {
    // Use findOne to find a user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "The Email Not Exist" });
    }

    // Send the verification email
    const verificationCode = await sendVerificationEmail(user);

    return res.status(200).json({ message: "Sent to email code" });
  } catch (error) {
    console.error("Error in forgot-password route:", error);
    // Handle errors here as needed
  }
};

exports.ResetPassword = async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired verification code" });
    }

    if (user.verificationCode !== verificationCode) {
      console.log("Invalid verification code");
      return res.status(400).json({ message: "Invalid verification code" });
    }
    // Check if the provided verificationCode matches the one stored in the user document

    // Check if the verification code has expired
    if (user.verificationCodeExpires < new Date()) {
      return res.status(400).json({ message: "Verification code has expired" });
    }

    await User.updateOne(
      { email },
      {
        $unset: {
          verificationCode: 1,
          verificationCodeExpires: 1,
        },
      }
    );
    console.log("Verification code successful");

    return res.status(200).json({ message: "Verification code successful" });
  } catch (error) {
    console.error("Error in reset-password route:", error);
    // Handle errors here as needed
  }
};

exports.ChangePassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    // const passwordRegex =
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/;

    // if (!passwordRegex.test(newPassword)) {
    //   return res.status(400).json({ message: "Invalid password format" });
    // }
    // Hash the new password
    const saltRounds = 10; // You can adjust this number as needed
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update the user's password in the database
    const result = await User.updateOne(
      { email },
      { $set: { password: hashedPassword } }
    );
    console.log(result);
    if (result.nModified === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in ChangePassword route:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
