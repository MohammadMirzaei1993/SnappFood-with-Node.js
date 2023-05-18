const yup = require('yup');


const signSchema = yup.object().shape({
    phoneNumber:yup.string().length(11).matches(/09[\d]/).required(),
    name:yup.string().min(3).required(),
    familly:yup.string().min(3).required(),
    email:yup.string().email().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).required(),
    adress:yup.string().min(3).required(),
    password:yup.string().matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"لطفا پسورد معتبر وارد نمایید").required(),
    confirmPassword:yup.string().required()
})


module.exports = signSchema