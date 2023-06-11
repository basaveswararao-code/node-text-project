const express = require('express');

/// get the Mongoose Atlas url to ge the now and password was to must and complesary
// const uri = "mongodb+srv://nbasi541:J1cXToqjDLJq1LqS@cluster0.vjoptcd.mongodb.net/?retryWrites=true&w=majority"
const uri = 'mongodb+srv://nbasi541:PPCyLArDdtEoUEY7@cluster0.vjoptcd.mongodb.net/?retryWrites=true&w=majority'

//import the mongoose
const mongoose = require('mongoose');

//import mongoose
mongoose.connect(uri);

//connected with db
const db = mongoose.connection;

db.once('open',()=>{
    console.log("Successfully conneted to db")
})

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

const usersRouter = require('./routes/user');
app.use('/users', usersRouter);

app.listen(5000)
console.log("server is listning on 5000")