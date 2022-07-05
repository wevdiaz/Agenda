const express = require("express");
const route = express.Router();

const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");

const { loginRequired } = require("./src/middlewares/middlewares");

// Rota da Home
route.get("/", homeController.index );

// Rota de Login
route.get("/login/", loginController.index );
route.post("/login/register", loginController.register );
route.post("/login/login", loginController.login );
route.get("/login/logout", loginController.logout );


// Rota de Contato
route.get("/contato/", loginRequired, contatoController.index );
route.post("/contato/register", loginRequired, contatoController.register );
route.get("/contato/:id", contatoController.editContact );
route.post("/contato/edit/:id", contatoController.updateContact );

module.exports = route;