require("dotenv").config();
const express = require("express");
const cors = require("cors");  // Import CORS
const sequelize = require("./models/db");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/users");

const app = express();
app.use(express.json());

// Enable CORS for frontend requests
app.use(cors({
    origin: "http://localhost:3000", // Allow requests from React frontend
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
}));

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("College Event Management API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
sequelize.sync({ force: false })
  .then(() => {
    console.log("✅ Database synced successfully!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ Error syncing database:", err));
