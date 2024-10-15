const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const membershipSchema = mongoose.Schema({
    membershipTitle: {type: String, required: true},
    packageDuration: {type: Number, required: true},
    durationType: {type: String, required: true},
    amount: {type: Number, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Membership',membershipSchema);