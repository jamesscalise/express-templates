"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  errorController = require("./controllers/errorController")

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());



app.get("/", homeController.respondWithHomescreen)
app.get("/name", homeController.respondWithName);
app.get("/name/:myName", homeController.respondWithName)
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.use(errorController.logErrors)

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError)

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
