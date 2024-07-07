const Psychologist = require('../models/Psychologist');

exports.getPsychologists = async (req, res) => {
    try {
        const psychologists = await Psychologist.find({});
        res.json(psychologists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPsychologist = async (req, res) => {
    const { name, email, specialization } = req.body;

    try {
        const psychologist = new Psychologist({ name, email, specialization });

        const createdPsychologist = await psychologist.save();
        res.status(201).json(createdPsychologist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
