const Customer = require('../models/customer')

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name : customerData.name,
            adress: customerData.adress,
            phone: customerData.phone,
            email : customerData.email,
            description : customerData.description,
        })
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};

const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};

const getAllCustomerService = async () => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};

const putUpdateCustomerService = async () => {
    try {
        let result = await Customer.updateOne({_id: id}, {name,email,adress});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};

const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById(id);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
    
};

module.exports = {
    createCustomerService,
    createArrayCustomerService,
    getAllCustomerService,
    putUpdateCustomerService,
    deleteACustomerService
};