const express = require('express');
const routerAPI = express.Router();
const {postUpLoadSingleFile,postUpLoadMultipleFile} = require('../controllers/apiController')
const {postCreateCustomer,postCreateArrayCustomer,getAllCustomer,putUpdateCustomer} = require('../controllers/customerController')

routerAPI.post('/file',postUpLoadSingleFile)
routerAPI.post('/files',postUpLoadMultipleFile)

routerAPI.get('/customers',getAllCustomer)
routerAPI.post('/customers',postCreateCustomer)
routerAPI.post('/customers-many',postCreateArrayCustomer)
routerAPI.put('/customers',putUpdateCustomer)
module.exports = routerAPI;

