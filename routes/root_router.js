var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    nieuws: req.app.get('itemsFile').nieuws,
    categorieen: req.app.get('categorieenFile').categorieen
  });
});

module.exports = root;
