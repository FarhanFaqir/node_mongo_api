const express = require("express");

const router = express.Router();
const Product = require("../models/product_model");

router.get("/", async (req, res) => {
  var product = await Product.find();
  res.json(product);
});

router.post("/", async (req, res) => {
  var product = new Product({
    name: req.body.name,
    quantity: req.body.quantity,
    cost_price: req.body.cost_price,
    sale_price: req.body.sale_price,
  });

  await product.save(function (error, product) {
    if (error) res.send("Something went wrong");
    else {
      // res.send("You just saved a Product to database");
      res.send("You just saved a product to database\n" + product);
    }
  });
});

module.exports = router;
