const express = require('express');
const connectDB = require('./config/db');
const xss = require('xss-clean');

// Connect Database
connectDB();

const app = express();

// Init Middleware (Allow us to get the data from frontend)
app.use(express.json({ extended: false }));

// Prevent XSS attacks
app.use(xss());

app.get('/', (req, res) => res.send('API RUNNING'));

// Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const authRoute = require('./routes/auth');

// Mount Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
