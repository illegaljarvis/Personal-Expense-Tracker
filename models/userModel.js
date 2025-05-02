const mongoose = require('mongoose');

//schema layout
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required!']
    },
    email:{
        type:String,
        required:[true, 'Email is required!'],
        unique: [true, 'Email must be unique!']
    },
    password:{
        type:String,
        required:[true, 'Password is required!']
    },
 },
{timestamps: true})

//exporting
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;