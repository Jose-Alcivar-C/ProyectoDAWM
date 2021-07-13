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
                        <a href="${enlace}"><p>Visitar noticia</p></a>
                      </div> 
                    </div>
                  </div>`

      contenedor.innerHTML+=plantilla;

      console.log(titulo)
    }

  }).catch(console.error);
}

llenarNoticias();



