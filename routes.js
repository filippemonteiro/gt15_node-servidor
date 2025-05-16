const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/features", (req, res) => {
  res.send("Features Page");
});

router.get("/contact", (req, res) => {
  res.send("Contact Page");
});

router.get("api/produtos", (req, res) => {
  res.json([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },
  ]);
});

module.exports = router;
