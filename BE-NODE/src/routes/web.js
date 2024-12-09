const express = require('express');
const router = express.Router();
const {getHomepage,getABC,createUser,create,getEditUser,updateUser,deleteUser,removeUser} = require('../controllers/homeController')

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/create_user',create) 
router.get('/update/:id',getEditUser) 

router.post('/update-user', updateUser)
router.post('/create-user', createUser)
router.post('/delete-user/:id', deleteUser)
router.post('/delete-user', removeUser)

module.exports = router;

