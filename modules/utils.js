const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { date } = require('yup');
dotenv.config({ path: "../config.env" })
const path = require('path');
const fs = require('fs');



const hashedSring = (str) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(str, salt)
}



const compareHashedString = (Data, hashedString) => {
    return bcrypt.compareSync(Data, hashedString)

}


const generatWebToken = (payload) => {
    return jwt.sign({ data: payload }, process.env.SECRET_key, { expiresIn: "1d" })
}
const compareWebToken = (payload) => {
    return jwt.verify(payload, process.env.SECRET_key)
}

const uploadFilepath = ()=>{
    const year =new Date().getFullYear()
    const month = new Date().getMonth()
    const day = new Date().getDay()
    const fileAdress = 
    path.join(__dirname , "..","public" , "upload","images", 
    // String(year),String(month +1),
    // String(day)
    );
    fs.mkdirSync(fileAdress , {recursive :true})
    return path.join("public" ,
     "upload","images", 
    //  String(year),
    //  String(month +1),
    //  String(day)
    )


}


module.exports = { hashedSring, compareHashedString, generatWebToken,uploadFilepath, compareWebToken}