const express = require("express");

const router = express.Router();

const pool = require("../database");

const { estaLogueado } = require("../lib/verificador");

//---------------------------------------------------PARA LAS MASCOTAS----------------------------------------------------------------
//ventana para añadir mascota
router.get("/mascotas/anadir", estaLogueado, (req, res) => {
    res.render("links/anadirmascota");
});

//añadir mascota
router.post("/mascotas/anadir", estaLogueado, async (req, res) => {

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
        
        await pool.query("insert into mascota set ?", [newLink]);
        req.flash("exito", "Mascota registrada con éxito.");
        res.redirect("/usuario/mascotas");
});

//ventana para mostrar mascotas
router.get("/mascotas", estaLogueado, async (req, res) => {
    
    const mascotas = await pool.query("select * from mascota");
    res.render("links/mascotas", {mascotas: mascotas});
});

//borrar una mascota
router.get("/mascotas/borrar/:id", estaLogueado, async (req, res) =>{
    const { id } = req.params;
    await pool.query("delete from mascota where id_mascota = ?", [id]);
    req.flash("exito", "Mascota borrada con éxito.");
    res.redirect("/usuario/mascotas");
});

//ventana para editar una mascota
router.get("/mascotas/editar/:id", estaLogueado, async (req, res) =>{
    const { id } = req.params;
    const mascota = await pool.query("select * from mascota where id_mascota =?", [id]);
    res.render("links/editarmascota", { mascota:mascota[0] });
});

//editar mascota
router.post("/mascotas/editar/:id", estaLogueado, async (req, res) =>{
    const { id } = req.params;
    const { nombre, edad, sexo, descripcion, url_foto, ciudad, raza } = req.body;
    const nuevosDatos = {
        nombre, 
        edad, 
        sexo, 
        descripcion, 
        url_foto, 
        ciudad, 
        raza 
    };

    await pool.query("update mascota set ? where id_mascota = ?", [nuevosDatos, id]);
    req.flash("exito", "Datos de mascota actualizados con éxito.");
    res.redirect("/usuario/mascotas");
});

//---------------------------------------------------PARA LAS NOTICIAS----------------------------------------------------------------
module.exports = router;