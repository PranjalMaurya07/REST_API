const express = require('express');
const app = express();
const port = 8000;
const { connect } = require('./connection');
const router = require('./Routes/userRoutes');

// Connecting to MongoDB

const url = "mongodb://127.0.0.1:27017/REST_API";
connect(url);

// Middleware

app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Routes

app.use('/users',router);

// Connecting Server

app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
})

