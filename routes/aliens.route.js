const express = require("express");
const alienController = require("../controllers/aliens.controller");
const { createAlienSchema, updateAlienSchema, deleteAlienSchema, getAlienByIdSchema, } = require("../validation/aliens.validator");

const router = express.Router();

// Middleware for handling Joi validation errors
const validate = (schema, property) => (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => ({
        field: detail.path[0],
        message: detail.message,
        }));

        return res.status(400).json({ errors });
    }

    next();
};

// Middleware for handling 500 errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
};

// Define routes for Aliens

// Route for creating a new Alien with validation
router.post("/", validate(createAlienSchema, "body"), alienController.createAlien);

// Route for getting a list of all Aliens
router.get("/", alienController.getAllAliens);

// Route for getting a specific Alien by ID with validation
router.get("/:id",validate(getAlienByIdSchema, "params"),alienController.getAlienById);

// Route for updating an existing Alien by ID with validation
router.put("/:id",validate(updateAlienSchema, "params"),alienController.updateAlien);

// Route for deleting an Alien by ID with validation
router.delete("/:id",validate(deleteAlienSchema, "params"),alienController.deleteAlien);

// Error handling middleware for 500 errors
router.use(errorHandler);

// Export the router for use in other parts of the application
module.exports = router;
