const express = require("express");

const router = express.Router();
const Customer = require("../models/customer_model");
// const { catch } = require("../models/database_model");

router.get("/", async (req, res) => {
  var customers = await Customer.findOneAndUpdate({ "name" : "Farhan" });
  res.json(customers);

});

router.get("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var customer = await Customer.findById(id);
    res.json(customer);
  }catch(error) {
    res.send(error);
  }
});

router.post("/", async (req, res) => {
  var customer = new Customer({
    name: req.body.name,
    adress: req.body.adress,
    contact: req.body.contact,
  });

  await customer.save(function (error, customer) {
    if (error) res.send("Something went wrong");
    else {
      // res.send("You just saved a customer to database");
      res.send("You just saved a customer to database\n" + customer);
    }
  });
});

module.exports = router;
