const path = require('path');
const express = require('express');
const viewEngine = (app) =>{
    app.set('views', './src/views')
    app.set('view engine', 'els')
    //config status file 
    app.use(express.static(path.join('./src', 'public')));
}
module.exports = viewEngine;