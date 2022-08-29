const mongoose = require('mongoose')
const uuidv1 = require('uuidv1')
//A nodejs inbuilt package, converts readable into crypted form
const crypto = require('crypto')

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        trquired:true
    },
    role:{
        type:Number,
        default:0,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    salt:String,
    isVerified:{
        type:Boolean,
        default:false
    }
    
})

module.exports = mongoose.model("Users",authSchema)
