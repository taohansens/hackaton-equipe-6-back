const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const psychologistRoutes = require('./routes/psychologistRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./config/passport');

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(bodyParser.json());
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/psychologists', psychologistRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 9900;

app.listen(PORT, console.log(`Server running on port ${PORT}`));