const mongoose = require("mongoose"); // Import Mongoose for MongoDB object modeling

// Define the Alien schema using Mongoose
const alienSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },
    homePlanet: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    technologyLevel: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

// Create a Mongoose model named "Alien" based on the defined schema
const Alien = mongoose.model("Alien", alienSchema);

module.exports = Alien; // Export the model for use in other parts of the application
