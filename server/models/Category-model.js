const {Schema, model} = require("mongoose")

const Сategory = new Schema({
	name: { type: String, required: true },
	img: { type: String },
	product: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  });
  
  module.exports = model("Сategory", Сategory);