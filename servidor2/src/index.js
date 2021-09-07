const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash");
const session = require("express-session");
const mySqlStore = require("express-mysql-session");
const passport = require("passport");
const cors = require("cors");

const { database } = require("./keys");

//inicializaciones

const app = express();
require("./lib/passport");

//configuraciones

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

app.engine(".hbs",exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir:path.join(app.get("views"), "partials"),
    extname: ".hbs",
    helpers: require("./lib/handlebars")
}));

app.set("view engine", ".hbs");

//middlewares

app.use(session({
    secret: "miSesionDeAdopciones",
    resave: false,
    saveUninitialized: false,
    store: new mySqlStore(database)
}));

app.use(cors());

app.use(flash());

app.use(morgan("dev"));

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(passport.initialize());

app.use(passport.session());


//variables globales

app.use((req, res, next) => {
    app.locals.exito = req.flash("exito");
    app.locals.message = req.flash("message");
    app.locals.user = req.user;
    next();
});

//rutas
app.use(require("./routes/autenticador.js"));
app.use("/usuario", require("./routes/links.js"));

//archivos publicos

app.use(express.static(path.join(__dirname, "public")));

//empezar servidor
app.listen(app.get("port"), () => {
    console.log("Servidor en el puerto", app.get("port"));
});

