const express = require('express');
const routerAPI = express.Router();
const {postUpLoadSingleFile} = require('../controllers/apiController')

routerAPI.post('/file',postUpLoadSingleFile)

module.exports = routerAPI;

