import express from 'express';
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import rideRoutes from './routes/rideRoutes.js'
import userRoutes from './routes/userRoutes.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express();

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/rides', rideRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(5000, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} mode on port 5000`);
});
