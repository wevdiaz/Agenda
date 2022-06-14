const Login = require("../models/LoginModel");

exports.index = (req, res) => {
    
    return res.render("login");
}

exports.register = (req, res) => {
    const login = new Login(req.body);
    login.register();

    return res.send(login.errors);
}