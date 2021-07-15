const fila = document.querySelector(".contenedorCarrusel");
const perro = document.querySelectorAll(".fotoPerro");

const flechaIzquierda = document.getElementById("flechaIzquierda");
const flechaDerecha = document.getElementById("flechaDerecha");

const numeroHojas = Math.ceil(perro.length/1);

let valor =1;

for(let i=0; i < numeroHojas; i++)
{
	const boton = document.createElement("button");

	if(i == 0)
  {
		boton.classList.add("activo");
	}

	document.querySelector(".indicadores").appendChild(boton);

	boton.addEventListener("click", (e)=>
  {
		fila.scrollLeft = i*fila.offsetWidth;
    valor = i+1;
		document.querySelector(".indicadores .activo").classList.remove("activo");
		e.target.classList.add("activo");
	});
}

//-----------------------Eventos para las flechas-------------------------


flechaDerecha.addEventListener("click", ()=>
{
  fila.scrollLeft += fila.offsetWidth;
  
  const luzActiva = document.querySelector(".indicadores .activo");
	
  if(luzActiva.nextSibling && !(valor===numeroHojas))
  {
		luzActiva.nextSibling.classList.add("activo");
		luzActiva.classList.remove("activo");
    valor++;
	}
});

flechaIzquierda.addEventListener("click", ()=>
{
  fila.scrollLeft -= fila.offsetWidth;
  
  const luzActiva = document.querySelector(".indicadores .activo");
	
  if(luzActiva.previousSibling && !(valor===1))
  {
		luzActiva.previousSibling.classList.add("activo");
    luzActiva.classList.remove("activo");
    valor--;
	}
});

perro.forEach((foto)=>
{
  foto.addEventListener("mouseenter", (e)=>
  {
    const fotazo = e.currentTarget;
		
    setTimeout(()=>
    {
			perro.forEach(fo => fo.classList.remove("hover"));
      fotazo.classList.add("hover");
    });
  });
});

fila.addEventListener("mouseleave",()=>
{
	perro.forEach(fo => fo.classList.remove("hover"));
});

