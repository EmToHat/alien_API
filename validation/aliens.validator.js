// Import the 'body' function from the 'express-validator' library
const { body } = require("express-validator");

// Validation middleware for creating a new Alien
const createAlienValidation = [
    // Check if 'name' field is not empty, otherwise return an error message
    body("name").notEmpty().withMessage("Name is required"),

    // Check if 'species' field is not empty, otherwise return an error message
    body("species").notEmpty().withMessage("Species is required"),

    // Check if 'homePlanet' field is not empty, otherwise return an error message
    body("homePlanet").notEmpty().withMessage("Home planet is required"),

    // Check if 'description' field is not empty, otherwise return an error message
    body("description").notEmpty().withMessage("Description is required"),

    // Check if 'technologyLevel' is a valid integer between 0 and 5, otherwise return an error message
    body("technologyLevel").isInt().withMessage("Technology level must be a number between 0 and 5"),
];

// Validation middleware for updating an existing Alien by ID
const updateAlienValidation = [
    // Check if 'id' parameter is a valid MongoDB ObjectId, otherwise return an error message
    body("id").isMongoId().withMessage("Invalid ID parameter"),

    // Check if 'name' field is not empty, otherwise return an error message
    body("name").notEmpty().withMessage("Name is required"),

    // Check if 'species' field is not empty, otherwise return an error message
    body("species").notEmpty().withMessage("Species is required"),

    // Check if 'homePlanet' field is not empty, otherwise return an error message
    body("homePlanet").notEmpty().withMessage("Home planet is required"),

    // Check if 'description' field is not empty, otherwise return an error message
    body("description").notEmpty().withMessage("Description is required"),

    // Check if 'technologyLevel' is a valid integer between 0 and 5, otherwise return an error message
    body("technologyLevel").isInt().withMessage("Technology level must be a number between 0 and 5"),
];

// Validation middleware for deleting an Alien by ID
const deleteAlienValidation = [
    // Check if 'id' parameter is a valid MongoDB ObjectId, otherwise return an error message
    body("id").isMongoId().withMessage("Invalid ID parameter"),
];

// Export the validation middleware for use in other parts of the application
module.exports = {
    createAlienValidation,
    updateAlienValidation,
    deleteAlienValidation,
};
