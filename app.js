// Import necessary packages and modules
const express = require("express"); // Express framework for building web applications
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const bodyParser = require("body-parser"); // Middleware to parse incoming request bodies
const cors = require("cors"); // Middleware for enabling Cross-Origin Resource Sharing (CORS)
const swaggerUi = require("swagger-ui-express"); // Middleware for serving Swagger UI
const swaggerDocument = require("./config/swagger/swagger-output.json"); // Swagger API documentation
const routes = require("./routes/index"); // Application routes
const { initDb } = require("./config/db.connection"); // Database connection initialization
const config = require("./config/db.config"); // Database configuration
require("dotenv").config(); // Load environment variables from .env file

// Set the default port for the server or use 3000 if not specified in the configuration
const configPort = config.DB_PORT || 3000;
// Create an instance of the Express application
const app = express();

// Start the application
async function startApplication() {
  try {
    // Initialize the database connection and execute the provided callback
    await initDb((err, db) => {
      if (err) {
        console.error("Error initializing the database:", err);
      } else {
        // Middleware setup
        app.use(cors()); // Enable CORS for all routes
        app.use(bodyParser.json()); // Parse JSON bodies of requests
        app.use((req, res, next) => {
          res.setHeader("Access-Control-Allow-Origin", "*"); // Set CORS headers
          next();
        });

        // Set up application routes and Swagger documentation endpoint
        app.use("/", routes);
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        // Start the Express server and listen on the specified port
        app.listen(configPort, () => {
          console.log(`Server is running on port ${configPort}`);
        });
      }
    });
  } catch (error) {
    console.error("An error occurred during application startup:", error);
  }
}

// Call the startApplication function to start the application
startApplication();
