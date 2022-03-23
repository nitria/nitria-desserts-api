const PORT = process.env.PORT || 3000;
const express = require("express");
const data = require("./desserts.json");

const app = express();

app.use(function (req, res, next) {
  res.header("Allow", "GET");
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
  let getJson;

  //GET DEESERTS BY CATEGORY//
  if (req.query.category) {
    let dessertCategory = data.desserts.filter(
      (dessert) => dessert.category.toLowerCase() == req.query.category
    );

    getJson = dessertCategory;

    return res.json(getJson);
  }
  //GET DEESERTS BY TITLE
  else if (req.query.title) {
    let dessertTitle = data.desserts.filter(
      (dessert) => dessert.title.toLowerCase() == req.query.title
    );

    getJson = dessertTitle;

    return res.json(getJson);
  }
  //GET ALL DESERTS
  else {
    return res.json(data.desserts);
  }
});

//GET DESSERTS BY ID//
app.get(`/desserts/:id`, (req, res) => {
  const id = req.params.id;
  const dessertId = data.desserts.filter((dessert) => dessert.id == id);
  res.json(dessertId);
});

app.listen(PORT, () => console.log(`Port: ${PORT}`));
