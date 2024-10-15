const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
    memberId: {type: Schema.Types.ObjectId,ref: 'Member'},
    checkinTime: {type: Date, required: true},
    checkoutTime: {type: Date, required: true}
});

module.exports = mongoose.model('Attendance',attendanceSchema);