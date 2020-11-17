const express = require('express');
const connectDB = require('./config/db');

// Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const authRoute = require('./routes/auth');

const app = express();

// Connect Database
connectDB();

// Init Middleware (Allow us to get the data from frontend)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));

// Define Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
