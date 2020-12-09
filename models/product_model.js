const { Double } = require("mongodb");
const mongoose = require("mongoose");


var productSchema = new mongoose.Schema({
    name: { type: String, required: true},
    quantity: { type: String},
    cost_price: { type: String},
    sale_price: { type: String}
});

module.exports = mongoose.model("product", productSchema);