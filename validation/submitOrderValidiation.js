const yup = require('yup');


const shipingAdrressValidation = yup.object().shape({
    name: yup.string.min(3).require(),
    address: yup.string().min(10).required(),
    city: yup.string().min(3).required(),
    postalCode: yup.string().length(10).required(),
    phoneNumber: yup.string().length(11).required().matches(/09[\d]/)
})






module.exports = { shipingAdrressValidation }