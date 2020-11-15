import express from 'express';
import connectDB from './config/db.js';

const app = express();

// Connect Database
connectDB();

// Init Middleware (Allow us to get the data from frontend)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
