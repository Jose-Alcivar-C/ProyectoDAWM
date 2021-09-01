const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const pool = require("../database");
const helpers = require("../lib/helpers");

//-----------------------------------------PARA REGISTRARSE---------------------------------------------
passport.use("registro.local", new LocalStrategy({
    usernameField: "usuario",
    passwordField: "contrasenia",
    passReqToCallback: true
}, async (req, usuario, contrasenia, done) => {
    const { nombre, apellido, direccion, correo, dia, mes, anio} = req.body;

    const nacimiento = anio + "-" + mes + "-" + dia;
    
    const nuevoUsuario = {
        nombre,
        apellido,
        direccion,
        correo,
        rol: 2,
        nacimiento,
        usuario, 
        contrasenia
    }
    
    nuevoUsuario.contrasenia = await helpers.encriptarContrasenia(contrasenia);

    const result = await pool.query("insert into usuario set ?", [nuevoUsuario]);
    
    nuevoUsuario.id_usuario = result.insertId; 

    return done(null, nuevoUsuario);
}));   


passport.serializeUser((user, done) => {
    done(null, user.id_usuario);
});

passport.deserializeUser( async (id_usuario, done) => {
    const rows = await pool.query("select * from usuario where id_usuario = ?", [id_usuario]);
    done(null, rows[0]);
});

//------------------------------------------PARA LOGUEARSE--------------------------------------------------------------
