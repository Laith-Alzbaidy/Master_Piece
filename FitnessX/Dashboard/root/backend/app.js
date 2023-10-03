const express = require("express");
const morgan = require("morgan");
const UserRouter = require("./router/UserRouter");
const ExerciseRouter = require("./router/ExerciseRouter");
const TrainingRouter = require("./router/TrainingRouter");
const AdminRouter = require("./router/AdminRouter");
const ContactUsRouter = require("./router/ContactUsRouter");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const app = express();
app.use(cookieParser());

// Parse incoming requests with JSON payloads
app.use(express.json());
// Log HTTP requests to the console in a dev-friendly format
app.use(morgan("dev"));

// Configure Multer for file upload
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Set up Multer for  upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder for temporary uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.use(
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ])
);

// Use the "UserRouter" for handling routes starting with "/api/v1/users"
app.use("/api/v1/users", UserRouter);

// Use the "ExerciseRouter" for handling routes starting with "/api/v1/exercise"
app.use("/api/v1/exercise", ExerciseRouter);
app.use("/api/v1/training", TrainingRouter);
app.use("/api/v1/Admin", AdminRouter);
app.use("/api/v1/contact", ContactUsRouter);

// app.post("/upload", uploader.single("file"), async (req, res) => {
//   console.log("-------------------------------------------", req.file);
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "No file uploaded",
//       });
//     }

//     const upload = await cloudinary.uploader.upload(req.file.path);

//     return res.json({
//       success: true,
//       file: upload.secure_url,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       success: false,
//       message: "An error occurred during upload",
//     });
//   }
// });

module.exports = app;
