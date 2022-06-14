exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash("errors");
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render("404");
    }
    next();
};

