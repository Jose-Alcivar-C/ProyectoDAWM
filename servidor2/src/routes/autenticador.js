const express = require("express");
const router = express.Router();

//----------------------PARA REGISTRAR UN NUEVO USUARIO---------------
router.get("/registrese", (req, res) =>{
    res.render("autenticacion/registro.hbs");
});

router.post("/registrese", (req, res) =>{
    
});

module.exports = router;