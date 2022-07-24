const { async } = require("regenerator-runtime");
const Contato = require("../models/ContatoModel");

exports.index = (req, res) => {
    return res.render("contato", {contatoUser: {} });
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

exports.editContact = async (req, res) => {
    const contato = new Contato(null, req.params.id)
    const contatoUser = await contato.findOne();

    if (!contatoUser) return res.render("404");
    
    return res.render("contato", {contatoUser});
}

exports.updateContact = async (req, res) => {
    try {
        if (!req.params.id) return res.render("404");
        const contato = new Contato(req.body);
        await contato.update(req.params.id); 

        if (contato.errors.length > 0) {
            req.flash("errors", contato.errors);
            req.session.save(() => res.redirect("back"));
            return;
        }
        
        req.flash("success", "Contato atualizado com sucesso!");
        req.session.save(() => res.redirect(`/contato/${contato.contato._id}`));
    } catch (err) {
        console.log(err);
        return res.render("404");
    }
    
}

exports.deleteContact = async (req, res) => {
    try {
        if (!req.params.id) return res.render("404");

        const contato = await new Contato().delete(req.params.id);
        if (!contato) return res.render("404");

        req.flash("success", "Contato apagado com sucesso!");
        req.session.save(() => res.redirect("back"));

    } catch(err) {
        console.log(err);
    }
}