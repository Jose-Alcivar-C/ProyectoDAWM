
let contenedor = document.getElementById("seccionNoticias");

function llenarNoticias()
{
  fetch("datosGenerados/generado.json")
  .then(response => response.json())
  .then(data => 
  {
    const divs = [];

    for(let i=0; i<data.noticias.length;i++)
    {
      let titulo = data.noticias[i].titulo;
      let descripcion = data.noticias[i].descripcion;
      let enlace = data.noticias[i].enlace;
      let ruta = data.noticias[i].foto;

      /*plantilla =`<div class="cajaNoticia">
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
                  </div>`*/

      const p1 = React.createElement("p",{"className":"tituloNoticia"},titulo);
      const p2 = React.createElement("p",{"className":"desNoticia"},descripcion);
      const p3 = React.createElement("p",{}, "Visitar noticia");
      const a = React.createElement('a',{"href":enlace, "target":"_blank"}, p3);
      const div4 = React.createElement('div',{},[p1, p2, a]);

      const img = React.createElement("img",{"src":ruta, "alt":""});
      const div3 = React.createElement("div",{"className":"fotoNoticia"},img);

      const div2 = React.createElement("div",{"className":"elementosNoticia"},[div3, div4]);

      const div1 = React.createElement("div",{"className":"cajaNoticia"},div2);

      divs.push(div1)
    }
    
    ReactDOM.render(divs, contenedor);

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





