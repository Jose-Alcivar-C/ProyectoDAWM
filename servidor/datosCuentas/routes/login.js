var express = require('express');
var router = express.Router();

let usuarios =
{
  "JoseAlcivar":
  {
      "nombre":"José Alcivar",
      "usuario":"JoseAlcivar",
      "clave":"josealcivar",
      "correo":"josealci@espol.edu.ec"
  },

  "AndresMorales":
  {
      "nombre":"Andrés Morales",
      "usuario":"AndresMorales",
      "clave":"andresmorales"
  },

  "KellyVaque":
  {
      "nombre":"Kelly Vaque",
      "usuario":"KellyVaque",
      "clave":"kellyvaque"
  },

  "GustavoChonillo":
  {
      "nombre":"Gustavo Chonillo",
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

  if(usuarios.hasOwnProperty(usuario)){
    if(usuario == usuarios[usuario].usuario && contrasenia == usuarios[usuario].clave)
    {
      res.redirect('/cuenta/'+usuario);
    }

    else {
    res.redirect('/')
    }
  }

  else {
    res.redirect('/')
  }

});

module.exports = router;
