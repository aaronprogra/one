// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeNombres = [];




function asignarTexto(elementou,texto){
    let elementoHTML = document.querySelector(elementou);
    elementoHTML.innerHTML= texto;
    
    return;
    
    }

const lista = document.getElementById("listaAmigos");
function agregarAmigo(){
// aqui falta si esta vacio
let NombreAmigo = document.getElementById('amigo').value;

if (NombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {

listaDeNombres.push(NombreAmigo);
console.log(listaDeNombres);
const li = document.createElement("li");
listaDeNombres.forEach(nombre => {
    
    li.textContent = nombre; 
    lista.appendChild(li); 
});
  }
limpiarInput();

// correr mejor lista
}

function sortearAmigo(){

   let cantidad = listaDeNombres.length;

   
   if (cantidad === 0){
        alert("Por favor, intentelo un nombre ");
    }else{ 
     let numeroGenerado =  Math.floor(Math.random()*cantidad);
     console.log(listaDeNombres.length);
    asignarTexto('li','EL AMIGO SECRETO ES : '+listaDeNombres[numeroGenerado]);
    }

}

function limpiarInput(){

    document.querySelector('#amigo').value='';
}
