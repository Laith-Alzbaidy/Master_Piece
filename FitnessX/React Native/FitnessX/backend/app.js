const express = require("express");
const morgan = require("morgan");
const UserRouter = require("./router/UserRouter");
const ExerciseRouter = require("./router/ExerciseRouter");
const TrainingRouter = require("./router/TrainingRouter");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = require("./models/modelUser");
const jwt = require("jsonwebtoken");
const upload = require("./utils/multerConfig");
const app = express();
app.use(cookieParser());

// Parse incoming requests with JSON payloads
app.use(express.json());
// Log HTTP requests to the console in a dev-friendly format
app.use(morgan("dev"));
// app.use((req, res, next) => {
//   console.log(req.headers);
//   next();
// });
// Use the "UserRouter" for handling routes starting with "/api/v1/users"
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(upload.single("image"));

app.use("/api/v1/users", UserRouter);
//endpoint to verify the email
app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    console.log("decodedToken", decodedToken);
    const user = await User.findById(decodedToken.id);
    console.log("-------------aaaaa--------------", user.verified);
    if (!user) {
      return res.status(404).json({ message: "Invalid verification token" });
    }

    await User.findByIdAndUpdate(decodedToken.id, { verified: true }); //

    console.log("cccccccccccccccccccccccc", user);
    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email Verificatioion Failed" });
  }
});

// app.use(bodyParser.json({ limit: "35mb" }));

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//     limit: "35mb",
//     parameterLimit: 50000,
//   })
// );
// Use the "ExerciseRouter" for handling routes starting with "/api/v1/exercise"
app.use("/api/v1/exercise", ExerciseRouter);
app.use("/api/v1/training", TrainingRouter);

// Export the Express app to be used in other parts of the application
module.exports = app;
