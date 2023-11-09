const express = require("express"); // Import the Express framework
const router = express.Router(); // Create an instance of the Express Router
const alienRoutes = require("./aliens.route"); // Import the routes for aliens
const swaggerRoutes = require("./swagger"); // Import the routes for Swagger documentation

// Middleware to handle routes related to aliens
router.use("/aliens", alienRoutes);

// Middleware to handle routes related to Swagger documentation
router.use("/", swaggerRoutes);

module.exports = router; // Export the router for use in other parts of the application
