const PORT = process.env.PORT || 3000;
const express = require("express");
const axios = require("axios");
const { response } = require("express");
const data = require("./desserts.json");

const app = express();

app.get("/", (req, res) => {
  res.json("An Api for desserts.");
});

app.get("/desserts", (req, res) => {
  res.json(data.desserts);
});

// app.get(`/desserts/:id`, (req, res) => {
//   const id = req.params.id;
//   const dessertId = data.desserts.filter((dessert) => dessert.id == id);
//   res.json(dessertId);
// });

app.get(`/desserts/:category`, (req, res) => {
  const category = req.params.category;

  const dessertCategory = data.desserts.filter((dessert) => {
    const uniqueCategory = [
      ...new Set(data.desserts.map((dessert) => dessert.category)),
    ];
    uniqueCategory == category;
  });
  res.json(dessertCategory);
});

app.listen(PORT, () => console.log(`Port: ${PORT}`));
