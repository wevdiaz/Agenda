const Login = require("../models/LoginModel");

exports.index = (req, res) => {
    
    return res.render("login");
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash("errors", login.errors);            
            req.session.save(function(){
            return res.redirect("back");
            });

            return;
        }

        req.flash("success", "Seu usuário foi criado com sucesso!");            
        req.session.save(function(){
        return res.redirect("back");
        });


    } catch(err) {
        console.log(err);
        return res.render("404");
    }
}

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash("errors", login.errors);            
            req.session.save(function(){
            return res.redirect("back");
            });

            return;
        }
        
        req.flash("success", "Você entrou no sistema!");
        req.session.user = login.user;           
        req.session.save(function(){
        return res.redirect("back");
        });


    } catch(err) {
        console.log(err);
        return res.render("404");
    }
}