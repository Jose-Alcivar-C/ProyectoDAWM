let plantilla =`<div class="cajaNoticia">
                  <img src="" alt="">
                  <div>
                    <p class="tituloNoticia"></p>
                    <p class="desNoticia"></p>
                    <a href="">Visitar noticia</a>
                  </div> 
                </div>`

let contenedor = document.getElementById("seccionNoticias");

function llenarNoticias()
{
  fetch("datosGenerados/generado.json")
  .then(response => response.json())
  .then(data => 
  {
    for(let i=0; i<data.noticias.length;i++)
    {
      let titulo = data.noticias[i].titulo;
      let descripcion = data.noticias[i].descripcion;
      let enlace = data.noticias[i].enlace;
      let ruta = data.noticias[i].foto;

      plantilla =`<div class="cajaNoticia">
                    <div class="elementosNoticia">
                      <div class="fotoNoticia">
                        <img src="${ruta}" alt="">
                      </div>
                      
                      <div>
                        <p class="tituloNoticia">${titulo}</p>
                        <p class="desNoticia">${descripcion}</p>
                        <a href="${enlace}" target="_blank"><p>Visitar noticia</p></a>
                      </div> 
                    </div>
                  </div>`

      contenedor.innerHTML+=plantilla;
    }

  }).catch(console.error);
}

llenarNoticias();



let boton = document.getElementById("buscador");

function filtrarNoticias()
{
  let buscado = document.getElementById("buscado").value;

  if(!(buscado===""))
  {
    buscado = buscado.toUpperCase();

    let cajitas = document.getElementsByClassName("cajaNoticia");

    for(let i=0; i<cajitas.length; i++)
    {
      let tit=cajitas[i].getElementsByTagName("p")[0].textContent.toUpperCase();
      let des=cajitas[i].getElementsByTagName("p")[1].textContent.toUpperCase()

      if( !(tit.includes(buscado) || des.includes(buscado)) )
      {
        cajitas[i].classList.add("oculto");
      }

      else
      {
        cajitas[i].classList.remove("oculto")
      }
    }
  }
}
filtrarNoticias()

boton.addEventListener("click", filtrarNoticias)

let barraBusqueda = document.getElementById("buscado");

barraBusqueda.addEventListener("keydown", function (e) 
{
  if (e.keyCode === 13 && !e.shiftKey) 
  { 
    filtrarNoticias()
  }
});





