const { Schema, model } = require("mongoose");

const Admin = new Schema({
  adminEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  order: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

module.exports = model("Admin", Admin);