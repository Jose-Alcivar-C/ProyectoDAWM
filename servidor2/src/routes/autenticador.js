const { Router } = require("express");
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
    res.render("principal");
});

//--------------------PARA INCIAR SESION--------------------------------

router.get("/login", (req, res) => {
    res.render("autenticacion/ingreso");    
});

router.post("/login", (req, res, next) => {
    passport.authenticate("ingreso.local", {
       successRedirect: "/usuario",
       failureRedirect:"/login",
       failureFlash: true
    })(req, res, next);
});
module.exports = router;