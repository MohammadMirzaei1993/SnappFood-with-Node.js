const { Schema, model } = require('mongoose');
const path = require('path');

const userSchema = new Schema(
    {
        name: { type: String },
        family: { type: String },
        age: { type: Number },
        adress: { type: String },
        userName: { type: String },
        email: { type: String },
        password: { type: String },
        phoneNumber: { type: String },
        token: { type: String },
        avatar :{type :String , default :"http://localhost:3000/default/1.png"}
    },
    { timestamps: true }
)
const userModel = model("user", userSchema)
module.exports = userModel