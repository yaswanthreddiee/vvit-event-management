require("dotenv").config();
const { Sequelize } = require("sequelize");

// Create a new Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,  // Set to true if you want to see SQL queries in the console
  }
);

// Test database connection
sequelize.authenticate()
  .then(() => console.log("✅ Connected to PostgreSQL successfully!"))
  .catch((err) => console.error("❌ Error connecting to PostgreSQL:", err));

module.exports = sequelize;
