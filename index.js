const express = require('express');
const app = express();
const authRoute = require('./routes/auth');
const postRoute = require('./posts');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//middleware
app.use(express.json());

//Import the route
app.use('/api/user', authRoute);
app.use('/api',postRoute);

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true },() =>{
    console.log('Connected To DB');
})


//create the server
app.listen(3000, () =>console.log('Server is up and running on 3000'));
