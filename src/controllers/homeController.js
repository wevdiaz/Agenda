
module.exports = {

    home(req, res) {
        
        return res.render("index", {
            titulo: "Novo Título adicionado",           
        });
    },

    tratarDados(req, res) {

        return res.send(req.body);
    }
}