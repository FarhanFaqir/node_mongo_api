const express = require("express");
const app = express();
const customerRouter = require("./routes/customer_route");
const productRouter = require("./routes/product_route");

require('./models/database_model');

app.use(express.json());

app.use("/customer", customerRouter);
app.use("/product", productRouter);

var port = 3000;
app.listen(port, () => {
  console.log("App is running on port " + port);
});
