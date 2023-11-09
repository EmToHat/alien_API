const mongoose = require("mongoose"); // Import Mongoose for MongoDB object modeling
const Alien = require("../models/aliens.model"); // Import the Alien model

// Create a new Alien
const createAlien = async (req, res) => {
    try {
        const alienData = req.body;
        const newAlien = new Alien(alienData);
        await newAlien.save(); // Save the new Alien to the database
        res.status(201).json(newAlien); // Respond with the created Alien
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors and respond with an error status
    }
};

// Get all Aliens
const getAllAliens = async (req, res) => {
    try {
        const aliens = await Alien.find(); // Retrieve all Aliens from the database
        res.status(200).json(aliens); // Respond with the list of Aliens
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors and respond with an error status
    }
};

// Get a specific Alien by ID
const getAlienById = async (req, res) => {
    try {
        const alienId = req.params.id;
        const alien = await Alien.findById(alienId); // Retrieve a specific Alien by ID from the database
        if (!alien) {
        return res.status(404).json({ error: "Alien not found" }); // Respond with a not found status if the Alien is not found
        }
        res.status(200).json(alien); // Respond with the retrieved Alien
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors and respond with an error status
    }
};

// Update an Alien by ID
const updateAlien = async (req, res) => {
    try {
        const alienId = req.params.id;
        const updatedData = req.body;
        const updatedAlien = await Alien.findByIdAndUpdate(alienId, updatedData, {
        new: true, // Return the modified Alien (updated)
        });
        if (!updatedAlien) {
        return res.status(404).json({ error: "Alien not found" }); // Respond with a not found status if the Alien is not found
        }
        res.status(200).json(updatedAlien); // Respond with the updated Alien
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors and respond with an error status
    }
};

// Delete an Alien by ID
const deleteAlien = async (req, res) => {
    try {
        const alienId = req.params.id;
        const deletedAlien = await Alien.findByIdAndDelete(alienId); // Delete a specific Alien by ID from the database
        if (!deletedAlien) {
        return res.status(404).json({ error: "Alien not found" }); // Respond with a not found status if the Alien is not found
        }
        res.status(200).json(deletedAlien); // Respond with the deleted Alien
    } catch (error) {
        res.status(500).json({ error: error.message }); // Handle errors and respond with an error status
    }
};

// Export the controller functions for use in other parts of the application
module.exports = {
    createAlien,
    getAllAliens,
    getAlienById,
    updateAlien,
    deleteAlien,
};
