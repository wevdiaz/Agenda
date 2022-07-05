const mongoose = require("mongoose");
const validator = require("validator");

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: ""},
    email: { type: String, required: false, default: ""},
    telephone: { type: String, required: false, default: ""},
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model("Contato", ContatoSchema);

class Contato {
    constructor (body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    async register() {
        this.validate();
        if (this.errors.length > 0) return;

        this.contato = await ContatoModel.create(this.body);
    }

    
    validate() {
        this.cleanUp();

        if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push("Email inválido!");
        if (!this.body.nome) this.errors.push("Você precisa colocar o nome do contato.");
        if (!this.body.email && !this.body.telephone) this.errors.push("Você precisa colocar um telefone ou email para o contato.");
        
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            email: this.body.email,
            telephone: this.body.telephone            
        };
    }

    async findOne(id) {}
}

module.exports = Contato;