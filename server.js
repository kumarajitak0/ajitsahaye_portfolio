const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//  Load environment variables
dotenv.config();
const PORT = process.env.PORT || 8080;
const brevoKey = process.env.API_BREVO;

//  For debug only (optional — remove before deployment)
console.log("Brevo API Key:", brevoKey);

// 🔹 Create express app
const app = express();

// 🔹 Middleware
app.use(cors());
app.use(express.json());

// 🔹 Serve React static files
app.use(express.static(path.join(__dirname, "./client/build")));

// 🔹 API Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// 🔹 Fallback route for React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// 🔹 Start the server
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
