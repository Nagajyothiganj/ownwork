const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api', todoRoutes);

app.get('/', (req, res) => { 
    res.send('Welcome to the MERN To-Do API');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
