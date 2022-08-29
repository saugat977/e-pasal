const bcrypt = require('bcrypt')
const Users = require("../models/authModel");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try{
    const hashedPassword = await bcrypt.hash(req.body.password,10)
    const token = await jwt.sign(req.body.email, process.env.JWT_SECRET);
    const user = await Users.create({
      name:req.body.name,
      email:req.body.email,
      password:hashedPassword,
      token:token
    })
    console.log(user);
    res.status(200).json({success:'true',token:token,pass:hashedPassword})
  }
  catch(error){
    return res.status(400).send(error.message)
  }
  //req.body = name,email,password,cpassword
  // validate name,email and password
  //add validated and other data to the user model
  
  //send registration mail
};

exports.loginUser = async (req, res) => {
  const user = users.filter((user) => user.name == req.body.name);
  console.log(user);
  if (!user) {
    return res.status(400).send("Cannot find user"); 
  }
  //user.password is undefined
  console.log(user.password," and ",req.body.password);
  const isPasswordValid = await bcrypt.compare(user.password,req.body.password)
   if (isPasswordValid){
    const token = jwt.sign(req.body.email,process.env.JWT_SECRET)
    res.status(200).send({success:'true',token:token});
  } else {
    return res.status(400).send("Incorrect Password");
  }
};
