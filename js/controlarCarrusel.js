const fila = document.querySelector(".contenedorCarrusel");
const perro = document.querySelectorAll(".fotoPerro");

const flechaIzquierda = document.getElementById("flechaIzquierda");
const flechaDerecha = document.getElementById("flechaDerecha");

//-----------------------Eventos para las flechas-------------------------

function siguiente(){
  
  fila.scrollLeft += fila.offsetWidth;

	const luzActiva = document.querySelector(".indicadores .activo");

	if(luzActiva.nextSibling){
		luzActiva.nextSibling.classList.add("activo");
		luzActiva.classList.remove("activo");
	}
}

flechaDerecha.addEventListener("click", siguiente);

function anterior(){
  fila.scrollLeft -= fila.offsetWidth;

	const luzActiva = document.querySelector(".indicadores .activo");

	if(luzActiva.previousSibling){
		luzActiva.previousSibling.classList.add("activo");
		luzActiva.classList.remove("activo");
	}
}

flechaIzquierda.addEventListener("click", anterior);

const numeroHojas = Math.ceil(perro.length/1);

for(let i=0; i < numeroHojas; i++){
	const boton = document.createElement("button");

	if(i == 0){
		boton.classList.add("activo");
	}
	document.querySelector(".indicadores").appendChild(boton);

	boton.addEventListener("click", (e)=>{
		fila.scrollLeft = i*fila.offsetWidth;

		document.querySelector(".indicadores .activo").classList.remove("activo");
		e.target.classList.add("activo");
	});
}

perro.forEach((foto)=>{
	foto.addEventListener("mouseenter", (e)=>{
		const fotazo = e.currentTarget;
		setTimeout(()=>{
			perro.forEach(fo => fo.classList.remove("hover"));
			fotazo.classList.add("hover");
		}); 
	});
});

fila.addEventListener("mouseleave",()=>{
	perro.forEach(fo => fo.classList.remove("hover"));
});

