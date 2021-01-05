const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
var compression = require('compression');
const xss = require('xss-clean');

// Connect Database
connectDB();

const app = express();

// Set security header
app.use(helmet());
app.use(compression());

// body parser middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Prevent XSS attacks
app.use(xss());

app.get('/', (req, res) => res.send('API RUNNING'));

// Routes
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const requestsRoute = require('./routes/requests');

// Mount Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/requests', requestsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
