const express = require("express");

const router = express.Router();

const pool = require("../database");

router.get("/noticias", async (req, res) => {
    
    const noticias = await pool.query("select url_foto, titulo, descripcion , enlace from noticia");
    res.send(noticias);

});

router.get("/imagen", async (req, res) => {
    const imagen = "src/bodega/j.jpeg"
    res.send(imagen);
});



module.exports = router;