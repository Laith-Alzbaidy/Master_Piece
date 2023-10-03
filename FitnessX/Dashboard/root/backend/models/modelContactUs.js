const mongoose = require("mongoose");

const ContactUsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  subject: {
    type: String,
    required: [true, "subject is required"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
});
const ContactUs = mongoose.model("Contact Us", ContactUsSchema);

module.exports = ContactUs;
