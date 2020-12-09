const mongoose = require("mongoose");


var custumerSchema = new mongoose.Schema({
    name:{ type: String, required: true},
    adress: { type: String},
    contact: { type: String}
});

module.exports = mongoose.model("customer", custumerSchema);