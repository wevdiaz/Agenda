const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// Rota da Home
route.get("/", homeController.index );

// Rota de Login
route.get("/login/", loginController.index );
// route.post("/login/register", loginController.post );

module.exports = route;