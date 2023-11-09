const router = require("express").Router(); // Import the Express Router
const swaggerUi = require("swagger-ui-express"); // Middleware for serving Swagger UI
const swaggerDocument = require("../config/swagger/swagger-output.json"); // Swagger API documentation

// Middleware for serving Swagger UI at the "/api-docs" endpoint
router.use("/api-docs", swaggerUi.serve);
// Route handler to render the Swagger UI page using the provided Swagger document
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

module.exports = router; // Export the router for use in other parts of the application
