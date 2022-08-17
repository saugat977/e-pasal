const express = require('express')
const app = express()

const products = require('./src/routes/products')

app.get('/',(req,res)=>{
    res.status(200).send('<center><h1>Welcome to Our Very Own Node App</h1></br> <h1>Happy Coding!</h1></center>')
})

// REST API convention
app.use("/api/v1/products", products)

app.listen(8000,()=>{
    console.log('server started on port 8000...');
})