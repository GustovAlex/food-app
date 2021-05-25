const {Schema, model} = require("mongoose")

const Order = new Schema({
	сlientName: { type: String, required: true },
	сlientPhone: { type: String, required: true },
	clientComment: { type: String, required: true },
	product: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  });
  
  module.exports = model("Order", Order);