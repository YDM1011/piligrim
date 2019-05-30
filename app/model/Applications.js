const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileModel = {
    name: String
};

const schema = new Schema({
    name: String,
    email: String,
    mobile: String,
    massenger: String,
    masseg: String,
    files: [fileModel],
    data: {type: Date, default: new Date()}
},{
    toJSON: {
        transform: function (doc, ret) {
        }
    },
    toObject: {
        transform: function (doc, ret) {
        }
    },
    createRestApi: true,
    strict: true,

});
const Applications = mongoose.model('Applications', schema);