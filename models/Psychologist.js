const mongoose = require('mongoose');

const PsychologistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialization: { type: String, required: true },
});

const Psychologist = mongoose.model('Psychologist', PsychologistSchema);

module.exports = Psychologist;
