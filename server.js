require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        app.emit("pronto");
    })
    .catch((err) => console.log(err));

const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./router");
const path = require("path");
const { checkCsrfError, middlewareGlobal } = require("./src/middlewares/middlewares");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
    secret: "chocolate",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    },
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING })
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(middlewareGlobal);
app.use(checkCsrfError);

app.use(routes);

app.on("pronto", () => {

    app.listen( 3000 ,() => {
        console.log("http://localhost:3000");
        console.log("Server is running now port 3000");
    });

});