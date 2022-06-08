const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");

// Rota da Home
route.get("/", homeController.home );
route.post("/", homeController.tratarDados );

module.exports = route;