const express = require('express');
const { getPsychologists, createPsychologist } = require('../controllers/psychologistController');

const router = express.Router();

router.route('/').get(getPsychologists).post(createPsychologist);

module.exports = router;
