const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
    content: {type: String,required: true},
    appliedDate: {type: Date,required: true},
    adminId: {type: Schema.Types.ObjectId,ref: 'Admin' }
});

module.exports = mongoose.model(announcementSchema,'Announcement');