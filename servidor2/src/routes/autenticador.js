const express = require("express");
const router = express.Router();
const passport = require("passport");

//----------------------PARA REGISTRAR UN NUEVO USUARIO---------------
router.get("/registrese", (req, res) =>{
    res.render("autenticacion/registro.hbs");
});

router.post("/registrese", passport.authenticate("registro.local", {
    successRedirect: "/usuario",
    failureRedirect: "/registrese",
    failureFlash: true
}));

router.get("/usuario", (req, res) => {
    res.send("este es tu perfil");
});

module.exports = router;