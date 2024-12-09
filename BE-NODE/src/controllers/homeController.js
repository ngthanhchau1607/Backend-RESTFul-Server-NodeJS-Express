const express = require('express')
const connection = require('../config/database')
const {getAllUsers,getUserById,updateUserById,deleteUserbyId} = require('../services/CRUDService')
const User = require('../models/user')

const getHomepage = async (req, res) =>{
    // await getAllUsers()
    const results =  []  
    return res.render('home.ejs',{listUsers: results})
}


const getABC = (req, res) =>{
    res.send('Hello World! ABC')
}

const create = (req, res) =>{
    return res.render('create.ejs')
}

const createUser = async (req, res) =>{
    const {email,name,city} = req.body 
    
    await User.create({
        email:email,
        name:name,
        city:city
    })
    
    res.send('them thanh cong ')
    

}

const getEditUser = async (req,res) =>{
    const userId = req.params.id
    let user = await getUserById(userId)
    return res.render('edit.ejs',{user:user})
}

const updateUser = async (req, res) =>{
    const {email,name,city,userId} = req.body 
    
    await updateUserById(email,name,city,userId)
    
    res.redirect('/')
    

}

const deleteUser = async (req, res) =>{
    const userId = req.params.id
    let user = await getUserById(userId)
    
    res.render('delete.ejs',{userEdit:user})
    
} 
const removeUser = async (req,res) =>{
    const id = req.body.userId

    await deleteUserbyId(id)

    res.redirect('/')

}


module.exports = {
    getHomepage,
    getABC,
    createUser,
    create,
    getEditUser,
    updateUser,
    deleteUser,
    removeUser

    
}