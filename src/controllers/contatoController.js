const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
    return res.render("contato");
}

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body);
        await contato.register();

        if (contato.errors.length > 0) {
            req.flash("errors", contato.errors);
            req.session.save(() => res.redirect("back"));
            return;
        }
        
        req.flash("success", "Contato cadastrado com sucesso!");
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
    } catch (err) {
        console.log(err);
        return res.render("404");
    }
}

exports.editContact = (req, res) => {
    if (!req.params.id) return res.render("404");

    const contatoUser = req.params.id;

    return res.send("Edição de contato - ID: " + contatoUser);
}