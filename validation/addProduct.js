const yup = require('yup');

const addProductShema = yup.object().shape({
    name:yup.string().min(3).required(),
    description:yup.string().min(10).required(),
    category:yup.string().min(3).required(),
    store:yup.string().min(2).required(),
    rating:yup.number().min(1).max(5).required(),
    // image:yup.string().min().required(),
    countAvalibale:yup.number().min(0).required(),
    price:yup.number().min(0).required(),
    comments :yup.string().min(2)
})

module.exports = {addProductShema}