const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
require('dotenv').config();

const URI = process.env.MONGO_DB

const app = express();
PORT = 3000

// middleware To use the Json formated data
app.use(express.json())

//middleware To send the request in form encoded
app.use(express.urlencoded({extended: false}))

//Routes 
app.use('/api/products/', productRoute);

app.get('/', (req,res)=>{
    res.send("Hello From Node Server")
});

mongoose.connect(URI)
.then(()=>{
    console.log("DB connected Successfully");
    app.listen(PORT,()=>{
        console.log(`Server running on Port: ${PORT}`)
    })
}).catch(()=>{
    console.log("Connection Failed")
})