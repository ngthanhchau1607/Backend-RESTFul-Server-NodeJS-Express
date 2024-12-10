require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const configviewEngiine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');
const connection = require('./config/database');
const fileUpload = require('express-fileupload'); // Import fileUpload

const app = express();
const port = process.env.PORT || 8888;

//config file upload 
app.use(fileUpload());  // Now fileUpload is properly defined

// Middleware xử lý dữ liệu JSON và form data
app.use(express.json()); // Xử lý JSON data
app.use(express.urlencoded({ extended: true })); // Xử lý form data

//template engine 
configviewEngiine(app);

//Khai bao router
app.use('/', webRouter);
app.use('/v1/api', apiRouter);

//kết nối 
connection();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
