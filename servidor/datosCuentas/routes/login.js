var express = require('express');
var router = express.Router();

let usuarios =
{
  "JoseAlcivar":
  {
      "usuario":"JoseAlcivar",
      "clave":"josealcivar"
  },

  "AndresMorales":
  {
      "usuario":"AndresMorales",
      "clave":"andresmorales"
  },

  "KellyVaque":
  {
      "usuario":"KellyVaque",
      "clave":"kellyvaque"
  },

  "GustavoChonillo":
  {
      "usuario":"GustavoChonillo",
      "clave":"gustavochonillo"
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/validate', function(req, res, next) {
  let usuario = req.body.usuario;
  let contrasenia = req.body.clave;

  console.log("usuario: ", usuario)
  console.log("contraseña: ", contrasenia)

  if(usuarios.hasOwnProperty(usuario)){
    if(usuario == usuarios[usuario].usuario && contrasenia == usuarios[usuario].clave){
      res.redirect('/hola')
    }

    else {
    res.redirect('/')
  }
  }

  else {
    res.redirect('/')
  }

  //Validación
  //if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {
  //  res.redirect('/');
  //} else {
  //  res.redirect('/login')
  //}

});

module.exports = router;
