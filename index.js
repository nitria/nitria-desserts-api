const PORT = process.env.PORT || 3000;
const express = require("express");
const axios = require("axios");
const data = require("./desserts.json");

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json("An Api for desserts.");
});

app.get("/desserts", (req, res) => {
  res.json(data.desserts);
});

app.get(`/desserts/:id`, (req, res) => {
  const id = req.params.id;
  const dessertId = data.desserts.filter((dessert) => dessert.id == id);
  res.json(dessertId);
});

app.listen(PORT, () => console.log(`Port: ${PORT}`));
