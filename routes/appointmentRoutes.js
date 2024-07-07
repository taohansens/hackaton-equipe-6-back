const express = require('express');
const { getAppointments, createAppointment } = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getAppointments).post(protect, createAppointment);

module.exports = router;
