const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    psychologist: { type: mongoose.Schema.Types.ObjectId, ref: 'Psychologist', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;