//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const { func } = require("joi");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
});

app.post("/",function(req,res){
  let item = req.body.newItem;

res.render("list", {newListItem: item})
  
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
 