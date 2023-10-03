const ContactUs = require("../models/modelContactUs");
const nodemailer = require("nodemailer");

const sendVerificationEmail = async (customer) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Example: Gmail, Outlook, etc.
      auth: {
        user: "laithalzbaidy@gmail.com",
        pass: "twmxfenbjfbwxrri",
      },
    });

    const notificationMailOptions = {
      from: "laithalzbaidy@gmail.com",
      to: "laithalzbaidy@gmail.com",
      subject: "New Contact Form Submission",
      text: `you have notification from ${customer.email} ${customer.subject} ${customer.message} `,
    };

    const customerMailOptions = {
      from: "yourEmailAddress@gmail.com", // Update with your email address
      to: customer.email,
      subject: "Thank You for Contacting Us",
      text: `Dear ${customer.email},\n\nThank you for reaching out to us. We appreciate your interest and will get back to you as soon as possible.\n\nBest regards,\nYour Name`,
    };

    await transporter.sendMail(notificationMailOptions);
    await transporter.sendMail(customerMailOptions);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

exports.CreateContactUs = async (req, res) => {
  console.log("***************", req.body);

  try {
    const contactus = await ContactUs.create(req.body);

    res.status(201).json({
      status: "sucsses",
      contactus,
    });

    await sendVerificationEmail(contactus);
  } catch (err) {
    res.status(404).json({
      status: "faled",
    });
  }
};
exports.GetContactUs = async (req, res) => {
  try {
    const contactus = await ContactUs.find();
    res.status(200).json({
      result: contactus.length,
      status: "success",
      data: contactus,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};

exports.DeleteContact = async (req, res) => {
  try {
    const contactus = await ContactUs.deleteMany();
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      massage: err,
    });
  }
};
