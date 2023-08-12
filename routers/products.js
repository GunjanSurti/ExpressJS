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
router.post("/api/products", (req, res) => {
  // we get req.body in 'post' data
  // const { name, price } = req.body;
  // if (!name || !price) {
  // }
  console.log(req.body);
  res.json({});
});
module.exports = router;
