const { model, Schema, Types } = require('mongoose');

const orderSchema = new Schema({

    orderItems: [
        {
            product: {
                name: { type: String, require: true },
                description: { type: String, require: true },
                category: { type: String, require: true },
                image: { type: String, require: true, default: "productimage.jpg" },
                seller: { type: String, require: true },
                price: { type: Number, require: true },
                countAvalibale: { type: Number, default: false, require: true },
                rating: { type: String, require: true },

            },
            qty: { type: Number, require: true }
        }
    ],
    shipmentAddress: {

        name: { type: String, require: true },
        address: { type: String, require: true },
        city: { type: String, require: true },
        postalCode: { type: String, require: true },

        phoneNumber: { type: Number, require: true },
    },
    paymentMethod: { type: String, require: true },
    shipmentPrice: { type: Number, require: true },
    totalPrice: { type: Number, require: true },
    user: { type: Types.ObjectId, require: true },


},
    { timestamps: true }
)
const orderModel = model("order", orderSchema)
module.exports = orderModel