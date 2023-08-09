const router = require("express").Router();


router.get("/products", (req, res) => {
    res.render("products", {
      title: "Products",
    });
  });

module.exports = router;
