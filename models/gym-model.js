const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gymSchema = new Schema({
    name: {type: String,required: true},
    contactNumber: {type: String, required: true},
    addressLine1: {type: String, required: true},
    addressLine2: {type: String, required: true},
    city: {type: String,required: true},
    state: {type: String, required: true},
    pinCode: {type: String, required: true},
    country: {type: String, required: true}
});

module.exports = mongoose.model('Gym',gymSchema);
