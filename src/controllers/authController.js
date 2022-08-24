// const bcrypt = require('bcrypt')
const {users} = require('../models/authModel')
const jwt = require('jsonwebtoken')

exports.registerUser =(req,res)=>{
    //req.body = name,email,password,cpassword
    const newUser = req.body
    // validate name,email and password
    //add validated and other data to the user model 
    users.push(newUser)
    const token = jwt.sign(newUser.email,process.env.JWT_SECRET)
    //send registration mail
    res.status(200).send(token)
}

exports.loginUser =(req,res)=>{
    const user = users.find(user=>user.name == req.body.name)
    if(!user){
        return res.status(400).send('Cannot find user')
    }
    // if (await bcrypt.compare(user.password,req.body.password)){
        if(user.password == req.body.password){
        res.status(200).send('login Successful')
    }
    else{
        return res.status(400).send('Incorrect Password')
    }

}
