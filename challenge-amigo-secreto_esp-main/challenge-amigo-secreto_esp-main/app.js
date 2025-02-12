// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeNombres = [];



function asignarTexto(elemento,texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML= texto;

return;

}
function agregarAmigo(){
// aqui falta si esta vacio
let NombreAmigo = document.getElementById('amigo').value;
listaDeNombres.push(NombreAmigo);
console.log(listaDeNombres);

limpiarInput();

asignarTexto('li',listaDeNombres);
}

function sortearAmigo(){
    let numeroGenerado =  Math.floor(Math.random()*listaDeNombres.length)+1;
    console.log(listaDeNombres.length);
    asignarTexto('ul','EL AMIGO SECRETO ES : '+listaDeNombres[numeroGenerado]);

}

function limpiarInput(){

    document.querySelector('#amigo').value='';
}