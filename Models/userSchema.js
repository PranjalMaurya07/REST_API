const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : [true,"Ëmail already exists"],
    },
    phone : {
        type : Number,
        required : true,
        unique : [true,"Phone number already exists"],
    },
    address : {
        type : String,
        required : true,
    }
})

const User = mongoose.model('Student',userSchema);

module.exports = User;

