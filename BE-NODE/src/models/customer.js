const mongoose = require('mongoose') 

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    adress: String,
    phone: String,
    email: String,
    image:String,
    description: String
},
{
    timestamps: true
}
);

const Customer = mongoose.model('Customer',customerSchema)

module.exports = Customer;