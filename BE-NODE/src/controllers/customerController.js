const express = require('express')
const connection = require('../config/database')
const {uploadSingleFile,uploadMultipleFile} = require('../services/fileService')
const Customer = require('../models/customer') 
const {createCustomerService ,createArrayCustomerService,getAllCustomerService,putUpdateCustomerService} = require('../services/customerService')
const postCreateCustomer = async(req,res) => {

   let {name,adress,phone,email,description} = req.body;
   let imageUrl ="";

   if (!req.files || Object.keys(req.files).length === 0) {
    
   }else{
    let result = await uploadSingleFile (req.files.image);
    imageUrl = result.image;
   }

   let customerData = {
    name,
    adress,
    phone,
    email,
    description,
    image: imageUrl
   }

   let customer = await createCustomerService(customerData);

   return res.status(200).json({
        EC:0,
        data:customer
   })

}

const postCreateArrayCustomer = async(req,res) => {

    let customers = await createArrayCustomerService(req.body.customers);
    if(customers) {
        return res.status(200).json({
            EC:0,
            data:customers
       })
    }else{
        return res.status(200).json({
            EC:-1,
            data:customers
       })
    }
 }

 const getAllCustomer = async(req,res) => {

    let customers = await getAllCustomerService();
    if(customers) {
        return res.status(200).json({
            EC:0,
            data:customers
       })
    }else{
        return res.status(200).json({
            EC:-1,
            data:customers
       })
    }
 }

 const putUpdateCustomer = async(req,res) => {

    let {id , name,email,adress} = req.body;
    let customers = await putUpdateCustomerService(id,name,email,adress);
    if(customers) {
        return res.status(200).json({
            EC:0,
            data:customers
       })
    }else{
        return res.status(200).json({
            EC:-1,
            data:customers
       })
    }
 }


module.exports = {
    postCreateCustomer,
    postCreateArrayCustomer,
    getAllCustomer,
    putUpdateCustomer
}