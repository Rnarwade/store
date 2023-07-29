const express = require('express')
const app = express()
require('dotenv').config()

app.get('/',(req,res)=>{
res.send("welcome to my website")
})

app.listen(process.env.PORT,()=>{
    console.log('server started')
})