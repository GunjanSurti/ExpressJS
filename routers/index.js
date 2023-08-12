const router = require("express").Router();
const path = require("path");

// const apiKeyMiddleWare = require("../middleware/apiKey");

// this is router level middleware
// it will apply all routers
// router.use(apiKeyMiddleWare)
router.get("/", (req, res) => {
  res.render(
    "index",
    /*passing obj*/ {
      title: "render server",
    }
  );
});
// no extention
//it takes path to the "view" file without extension
// it starts looking for file in given folder in our case it is 'views'
router.get("/about", (req, res) => {
  // res.send("<h1>Hello from Express</h1> ")
  //   res.sendFile(path.resolve(__dirname) + "/views/about.html");
  res.render("about", {
    title: "Server About",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/views/about.ejs");
});

// using middle ware
// to pass miltiple middleware do it in []
// router.get("/api/products", apiKeyMiddleWare, (req, res) => {
//   // to send json data
//   res.json([
//     {
//       id: "123",
//       name: "Chrome",
//     },
//     {
//       id: "456",
//       name: "FireFox",
//     },
//   ]);
// });

module.exports = router;

// there are third party middleware in express docs
