const express = require("express");
const { validationResult } = require("express-validator");
const alienController = require("../controllers/aliens.controller");
const { createAlienValidation, updateAlienValidation, deleteAlienValidation } = require("../validation/aliens.validator");

// Middleware for handling validation errors
const validate = (req, res, next) => {
    // Check for validation errors using express-validator
    const errors = validationResult(req);

    // If there are validation errors, return a 400 Bad Request response with error details
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

  // If there are no validation errors, proceed to the next middleware or route handler
    next();
};

// Create an instance of the Express Router
const router = express.Router();

// Define routes for Aliens

// Route for creating a new Alien with validation
router.post("/", createAlienValidation, validate, alienController.createAlien);

// Route for getting a list of all Aliens
router.get("/", alienController.getAllAliens);

// Route for getting a specific Alien by ID with validation
router.get("/:id", validate, alienController.getAlienById);

// Route for updating an existing Alien by ID with validation
router.put( "/:id", updateAlienValidation, validate, alienController.updateAlien);

// Route for deleting an Alien by ID with validation
router.delete("/:id", deleteAlienValidation, validate, alienController.deleteAlien);

// Export the router for use in other parts of the application
module.exports = router;
