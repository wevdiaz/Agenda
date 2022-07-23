const Contato = require("../models/ContatoModel");


module.exports = {

    async index(req, res) {
        const buscarContatos = new Contato();
        const contatos = await buscarContatos.findAllContacts();
       
        return res.render("index", { contatos });
    },

}