const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// this will set key:value in app container
// set("key","value")
app.set("view engine", "ejs");

// static middleware
app.use(express.static("public")); // public has static files

// PORT=5000 node server.js or server only, this will run on port 5000
app.listen(PORT, () => {
  console.log(`Callback, Listening on port ${PORT}`);
});
// app.get("/aouut",()=>{}) to go to about page
app.get("/", (req, res) => {
  // res.send("<h1>Hello from Express</h1> ")
  //   res.sendFile(path.resolve(__dirname + "/views/index.html"));
  res.render(
    "index",
    /*passing obj*/ {
      title: "render server",
    }
  );
  // no extention
  //it takes path to the "view" file without extension
  // it starts looking for file in given folder in our case it is 'views'
});

app.get("/about", (req, res) => {
  // res.send("<h1>Hello from Express</h1> ")
  //   res.sendFile(path.resolve(__dirname) + "/views/about.html");
  res.render("about", {
    title: "Server About",
  });
});

// to download file
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/views/about.html");
});

//  app.get("view engine") => ejs
// console.log(app.get("views")); => D:\Express\ExpressJS\views
// thsi will search out html file in views folder by default
// we can change name of views by app.set('views','your Name')
// app.set("views", path.resolve(__dirname) + "/templates");
// console.log(app.get("views"));
