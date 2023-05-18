const yup = require('yup');


const logingSchema = yup.object().shape({
    phoneNumber:yup.string().length(11).matches(/09[\d]/).required(),
    password:yup.string().matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"لطفا پسورد معتبر وارد نمایید").required()
})

module.exports = logingSchema