const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/authController');
const passport = require('passport');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/me', protect, getUserProfile);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/');  // Sucesso na autenticação, redireciona para a home
    }
);

module.exports = router;
