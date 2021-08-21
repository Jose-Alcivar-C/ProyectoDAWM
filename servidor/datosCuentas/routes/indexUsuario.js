var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/JoseAlcivar', function(req, res, next) {
  res.render('indexUsuario',{nombre: "José Alcivar", correo: "josealci@espol.edu.ec"});
});

router.get('/KellyVaque', function(req, res, next) {
  res.render('indexUsuario',{nombre: "Kelly Vaque", correo: "ksvaque@espol.edu.ec"});
});

router.get('/GustavoChonillo', function(req, res, next) {
  res.render('indexUsuario',{nombre: "Gustavo Chonillo", correo: "guchvera@espol.edu.ec"});
});

router.get('/AndresMorales', function(req, res, next) {
  res.render('indexUsuario',{nombre: "Andrés Morales", correo: "aamorale@espol.edu.ec"});
});
module.exports = router;
