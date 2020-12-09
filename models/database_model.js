const mongoose = require("mongoose");
const url = "mongodb://localhost/Order_Management";
const connection = mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) console.log("Error connecting to database");
      else console.log("Success");
    }
  );

  module.exports = connection;