const express = require('express');
const app = express()
const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" })
const mongoose = require('mongoose');
const router = require("./router/router");
const path = require('path');

try {
    mongoose.connect('mongodb://127.0.0.1:27017/snappfood')
    console.log("connected to db");
} catch (error) {
    console.log(err);
}


app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname,"public")))


app.use("/",router)



















const port = process.env.PORT
app.listen(3000, () => console.log(`server is running on port ${port} `))