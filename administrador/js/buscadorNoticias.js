function llenarNoticias()
{
  fetch("datosGenerados/generado.json")
  .then(response => response.json())
  .then(data => 
  {
    const divs = [];
    let contenedor = document.getElementById("seccionNoticias");

    for(let i=0; i<data.noticias.length;i++)
    {
      let titulo = data.noticias[i].titulo;
      let descripcion = data.noticias[i].descripcion;
      let enlace = data.noticias[i].enlace;
      let ruta = data.noticias[i].foto;

      const p1 = React.createElement("p",{"className":"tituloNoticia"},titulo);
      const p2 = React.createElement("p",{"className":"desNoticia"},descripcion);
      const p3 = React.createElement("p",{}, "Visitar noticia");
      const a = React.createElement('a',{"href":enlace, "target":"_blank"}, p3);
      const div4 = React.createElement('div',{},[p1, p2, a]);

      const img = React.createElement("img",{"src":ruta, "alt":""});
      const div3 = React.createElement("div",{"className":"fotoNoticia"},img);

      const div2 = React.createElement("div",{"className":"elementosNoticia"},[div3, div4]);

      const div1 = React.createElement("div",{"className":"cajaNoticia"},div2);

      divs.push(div1);
    }
    
    ReactDOM.render(divs, contenedor);

  }).catch(console.error);
}

llenarNoticias();




