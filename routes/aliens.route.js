const express = require("express"); // Import the Express framework
const router = express.Router(); // Create an instance of the Express Router
const alienController = require("../controllers/aliens.controller"); // Import the Alien controller

// Define routes for Aliens

// Route for creating a new Alien
router.post("/", alienController.createAlien);

// Route for getting a list of all Aliens
router.get("/", alienController.getAllAliens);

// Route for getting a specific Alien by ID
router.get("/:id", alienController.getAlienById);

// Route for updating an existing Alien by ID
router.put("/:id", alienController.updateAlien);

// Route for deleting an Alien by ID
router.delete("/:id", alienController.deleteAlien);

module.exports = router; // Export the router for use in other parts of the application
