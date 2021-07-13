let botonAccion = document.getElementById("subirInfo");

botonAccion.addEventListener("click", ()=>
{
  let nombre = document.getElementById("nombre").value;
  let direccion = document.getElementById("direccion").value;
  let sexo = document.getElementById("sexo");
  let sexoElegido = sexo.options[sexo.selectedIndex].text;
  let edad = document.getElementById("Edad").value;
  let descripcion = document.getElementById("descripcion").value;
  let nombreFoto = document.getElementById("selectorFoto").files[0].name;
  let ruta = "imagenesRegistradas/"+nombreFoto;
  
  console.log(nombre)
  console.log(direccion)
  console.log(sexoElegido)
  console.log(edad)
  console.log(descripcion)
  console.log(ruta)

  fetch("datosGenerados/generado.json")
  .then(response => response.json())
  .then(data => 
  {
    let objeto = Json.parse(data)
    objeto.mascotas.push({"nombre":"hola"});
    var json = JSON.stringify(objeto);

  }).catch(console.error);

  alert("Sus datos han sido agregados a la lista de animales por adoptar");
});