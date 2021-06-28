const { Schema, model } = require("mongoose")

const Product = new Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: String, required: true },
    img: { type: String },
    categoryId: { type: Schema.Types.ObjectId, ref: "Сategory" },
    isNewProduct: { type: Boolean },
    isPromotionProduct: { type: Boolean },
})

module.exports = model("Product", Product)
