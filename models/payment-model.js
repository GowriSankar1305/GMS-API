const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    memberId: {type: Schema.Types.ObjectId, ref: 'Member'},
    paymentDate: {type: Date, required: true},
    amount: {type: Number, required: true},
    membershipId: {type: Schema.Types.ObjectId, ref: 'Membership'}
});

module.exports = mongoose.model('Payment',paymentSchema);