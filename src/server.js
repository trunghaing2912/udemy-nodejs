const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static file
app.use(express.static("public"));

//khai bao route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/hoidanit", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`App listening on port ${port}`);
});
