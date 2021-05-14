const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Item = require("./items.js");

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/items", (req, res, next) => {
  return res.json(Item.list);
});

app.post("/items", (req, res, next) => {
  let newItem = new Item(req.body.name, req.body.price);
  return res.json(newItem);
});

app.get("/items/:id", (req, res, next) => {
  let foundItem = Item.find(+req.params.id);
  return res.json(foundItem);
});

app.patch("/items/:id", (req, res, next) => {
  let foundItem = Item.update(+req.params.id, req.body);
  return res.json(foundItem);
});

app.delete("/items/:id", (req, res, next) => {
  Item.remove(+req.params.id);
  return res.json("Removed");
});
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
