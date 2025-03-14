let amigos = [];

const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const eaListaAmigos = document.getElementById ("listaAmigos");
const eaAlerta = document.getElementById("alerta");
const eaResultado = document.getElementById ("resultado")

//Función para agregar un amigo a la lista
function agregarAmigo(){
    const amigo = inputAmigo.value.trim();
    listaAmigos.push(inputAmigo.value);
    eaListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value = "";
 
//Alerta si se intenta dejar el espacio en blanco    
    if (amigo === "") {
        alert("Por favor, inserte un nombre valido.")
    };

};

//Función para seleccionar el amigo secreto
function sortearAmigo(){
    const ramdom = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[ramdom];
    eaResultado.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
};