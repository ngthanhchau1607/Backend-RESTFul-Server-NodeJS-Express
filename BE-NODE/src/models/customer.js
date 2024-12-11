const mongoose = require('mongoose') 

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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