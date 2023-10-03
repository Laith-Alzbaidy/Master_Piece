const nodemailer = require("nodemailer");
const crypto = require("crypto"); // For generating secure tokens

exports.sendVerificationEmail = async (req, res) => {
  console.log(req.body);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail, Outlook, etc.
      auth: {
        user: "laithalzbaidy@gmail.com",
        pass: "twmxfenbjfbwxrri",
      },
    });
    // Generate a secure verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const mailOptions = {
      from: "laithalzbaidy@gmail.com",
      to: email,
      subject: "Email Verification",
      text: `Click the following link to verify your email: http://localhost:8000/verify/${verificationToken}/`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully to:", email);
    return verificationToken; // You can return the token for further use if needed
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
