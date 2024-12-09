const connection = require('../config/database')

const getAllUsers = async () =>{
    const [results,fields] = await connection.query('select * from Users')
    return results
}

const getUserById = async (userId) =>{
    let [results,fields] = await connection.query('select * from Users where id=?',[userId])
    let user = results && results.length > 0 ? results[0] : {}
    return user
}

const updateUserById = async (email,city,name,userId) =>{
    let [results,fields] = await connection.query(
        `update Users
        set email = ?,city = ?,name = ?
        where id=?
        `,[email,city,name,userId])
}

const deleteUserbyId = async (id) =>{
    let [results,fields] = await connection.query(
        `delete 
        from Users
        where id=?
        `,[id])
}




module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserbyId
}