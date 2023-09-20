// Import required modules
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from config.env file
dotenv.config({ path: "./config.env" });

// Import the Express app from app.js
const app = require("./app.js");

// Connect to the database
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connection successful ...");
  })
  .catch((err) => {
    console.log("ERROR: Database connection failed 💣", err);
  });

// Set the server port from environment variable
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ...`);
});
