const express = require('express')
const connection = require('../config/database')
const {uploadSingleFile,uploadMultipleFile} = require('../services/fileService')
const User = require('../models/user')

const postUpLoadSingleFile =async (req,res) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    let result = await uploadSingleFile(req.files.image)
    console.log(result)
}

const postUpLoadMultipleFile =async() =>{
    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).send('No files were uploaded.');
        return;
    }

    if(Array.isArray(req.files.image)){
        let result = await uploadMultipleFile(req.files.image)
        return res.status(200).json({
            EC:0,
            data:result
        })
    }else{
        return await postUpLoadSingleFile(req,res)
    }
}


module.exports = {
    postUpLoadSingleFile,postUpLoadMultipleFile
}