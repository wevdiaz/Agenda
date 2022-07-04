
exports.index = (req, res) => {
    return res.render("contato");
}

exports.register = (req, res) => {
    return res.send(req.body);
}