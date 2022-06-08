import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/users.js'

const app = express();
app.use(express.json())
app.use(cors())

import connectDB from './config/db.js'

// Database Connection
connectDB()

app.use('/users', userRoutes);
// app.get('/', (req, res) => res.send('API Running'))

const PORT = process.env.PORT || 5005
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`))