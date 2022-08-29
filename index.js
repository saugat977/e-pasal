const express = require('express')
const app = express()
require('dotenv').config()
const database = require('./src/database/connection')
const authRoutes = require('./src/routes/authRoute')


app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).send('<center><h1>Welcome to Our Very Own Node App</h1></br> <h1>Happy Coding!</h1></center>')
})

app.use('/api/v1/',authRoutes);

app.listen(8000,()=>{
    console.log('server started on port 8000...');
})