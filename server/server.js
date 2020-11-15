import express from 'express';
import connectDB from './config/db.js';

// Routes
import registerRoute from './routes/register.js';
import loginRoute from './routes/login.js';
import authRoute from './routes/auth.js';

const app = express();

// Connect Database
connectDB();

// Init Middleware (Allow us to get the data from frontend)
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('API RUNNING'));

// Define Routes
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
