const express = require("express");

const router = express.Router();

const pool = require("../database");

router.get("/mascotas/add", (req, res) => {
    res.render("links/add");
});

router.post("/mascotas/add", async (req, res) => {

    const{ nombre, edad, sexo, descripcion, url_foto, ciudad, raza } = req.body;

    const newLink = {
        nombre, 
        edad, 
        sexo, 
        descripcion, 
        url_foto, 
        ciudad, 
        raza
    };
    
    await pool.query("INSERT INTO mascota set ?", [newLink]);
    
    res.redirect("/links/mascotas");
});

router.get("/mascotas", async (req, res) => {
    
    const mascotas = await pool.query("select * from mascota");
    console.log(mascotas);
    res.render("links/mascotas", {mascotas: mascotas});
});

module.exports = router;