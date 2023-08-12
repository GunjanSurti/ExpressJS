const router = require("express").Router();
const products = require("../productData");

router.get("/products", (req, res) => {
  res.render("products", {
    title: "Products",
  });
});

router.get("/api/products", (req, res) => {
  res.json(products);
  // console.log(products); 
  // consoling here means console to server, in our terminal as it is connected to server.js file 
});
module.exports = router;
