const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equimentSchema = new Schema({
    equipmentName: {type: String, required: true},
    dateOfPurchase: {type: String, required: true},
    equipmentQuantity: {type: Number, required: true},
    costPerItem: {type: Number,required: true},
    description: {type: String},
    vendorName: {type: String, required: true},
    vendorContactNo: {type: String, required: true},
    vendorAddress: {type: String, required: true}
});

module.exports = mongoose.model('GymEquipment',equimentSchema);