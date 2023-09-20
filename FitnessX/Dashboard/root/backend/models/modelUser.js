// Import Mongoose module
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// Define the UsersSchema using the Mongoose.Schema constructor
const UsersSchema = new mongoose.Schema({
  firstname: { type: String, required: [true, "First name is required."] },
  lastname: { type: String, required: [true, "Last name is required."] },
  email: { type: String, required: [true, "Email is required."], unique: true },
  password: { type: String, required: [true, "Password is required."] },
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
  gender: { type: String },
  birthdate: { type: String },
  weight: { type: Number },
  height: { type: Number },
  passwordChangedAt: Date,
  image: String,
});

UsersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
});

UsersSchema.methods.correctPassword = async function (
  candidatePassword,
  userPasword
) {
  // Compare the candidate password with the admin's password using bcrypt
  return await bcrypt.compare(candidatePassword, userPasword);
};

// This method seems to be added to the User schema using Mongoose.
UsersSchema.methods.changePasswordAfter = function (JWTTimestamp) {
  // `this` refers to the current user document (instance of the schema).

  // Check if the user has a passwordChangedAt property and it's a valid Date.
  if (this.passwordChangedAt) {
    // Convert passwordChangedAt timestamp to milliseconds.
    const passwordTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    console.log("----------", this.passwordChangedAt);
    console.log(passwordTimestamp, JWTTimestamp);
    // If the JWT timestamp is earlier than the passwordChangedAt timestamp,
    // it means the password was changed after the token was issued.
    return JWTTimestamp < passwordTimestamp;
  }

  // If there's no passwordChangedAt property, return false.
  return false;
};
// Create the User model using the schema
const Users = mongoose.model("User", UsersSchema);
// Export the Users model to be used in other parts of the application
module.exports = Users;
