const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');  
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());  

mongoose.connect('mongodb+srv://athmikaubhat:Mika%402209@athmikau.jf8wzoa.mongodb.net/demoSDC', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Routes
app.use('/', authRoutes);  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
