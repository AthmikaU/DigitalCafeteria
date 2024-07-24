// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');  
const orderRoutes = require('./routes/order');
const reviewRoutes = require('./routes/review');
const app = express();

app.use(cors());
app.use(express.json());  
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://athmikaubhat:Mika%402209@athmikau.jf8wzoa.mongodb.net/SDC', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use('/', authRoutes);  
app.use('/', orderRoutes); 
app.use('/', reviewRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
