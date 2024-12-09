require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose");
const path = require('path')
const configviewEngiine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888

// Middleware xử lý dữ liệu JSON và form data
app.use(express.json()); // Xử lý JSON data
app.use(express.urlencoded({ extended: true })); // Xử lý form data

//template engine 
configviewEngiine(app)

//Khai bao router
app.use('/',webRouter)



//kết nối 
connection()


const kittySchema = new mongoose.Schema({
name: String
})
const Kitten = mongoose.model("Kitten", kittySchema);
const cat = new Kitten({ name: 'Silence' });
cat.save();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})