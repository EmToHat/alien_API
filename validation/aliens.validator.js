const Joi = require("joi");

// Validation schema for getting a specific Alien by ID
const getAlienByIdSchema = Joi.object({
    id: Joi.string().required(),
});

// Validation schema for creating a new Alien
const createAlienSchema = Joi.object({
    name: Joi.string().required(),
    species: Joi.string().required(),
    homePlanet: Joi.string().required(),
    description: Joi.string().required(),
    technologyLevel: Joi.number().integer().min(0).max(5),
});

// Validation schema for updating an existing Alien by ID
const updateAlienSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    species: Joi.string().required(),
    homePlanet: Joi.string().required(),
    description: Joi.string().required(),
    technologyLevel: Joi.number().integer().min(0).max(5),
});

// Validation schema for deleting an Alien by ID
const deleteAlienSchema = Joi.object({
    id: Joi.string().required(),
});

module.exports = {
    getAlienByIdSchema,
    createAlienSchema,
    updateAlienSchema,
    deleteAlienSchema,
};
