// Import necessary dependencies
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

// Define the Admin schema
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required."],
    validate: {
      validator: function (value) {
        // `this` refers to the current document being validated
        return value === this.password;
      },
      message: "Passwords do not match.",
    },
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Invalid email address"],
  },
});

// Middleware: This pre-save hook is used to hash the password before saving it to the database
AdminSchema.pre("save", async function (next) {
  // Check if the password is modified, if not, move on to the next middleware or save the document
  if (!this.isModified("password")) return next();

  // Hash the password using bcrypt with a cost factor of 12
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  // Move on to the next middleware or save the document after password hashing
  next();
});

// Method: This method is used to compare a candidate password with the admin's actual password
AdminSchema.methods.correctPassword = async function (
  candidatePassword,
  adminPasword
) {
  // Compare the candidate password with the admin's password using bcrypt
  return await bcrypt.compare(candidatePassword, adminPasword);
};

// Create the Admin model based on the schema
const Admin = mongoose.model("Admin", AdminSchema);
// Export the Admin model to be used in other parts of the application
module.exports = Admin;
