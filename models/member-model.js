const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    emailAddress: {type: String,required: true},
    dateOfBirth: {type: String,required: true},
    mobileNumber: {type: String,required: true},
    addressLine1: {type: String,required: true},
    addressLine2: {type: String,required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    pinCode: {type: String,required: true},
    country: {type: String,required: true} 
});

module.exports = mongoose.model('Member',memberSchema);