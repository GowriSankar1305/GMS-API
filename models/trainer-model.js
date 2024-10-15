const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    mobileNumber: {type: String,required: true},
    emailAddress: {type: String,required: true}
});

module.exports = mongoose.model('Trainer',trainerSchema);