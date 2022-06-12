exports.index = (req, res) => {
    
    return res.render("login");
}

exports.post = (req, res) => {
    
    return res.send(req.body);
}