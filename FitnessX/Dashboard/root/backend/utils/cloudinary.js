const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "ddct7cqr7",
  api_key: "639522519592147",
  api_secret: "w62L2UfNuO3b3eoKqFOXE-M8JHA",
  secure: true,
});

module.exports = cloudinary;
