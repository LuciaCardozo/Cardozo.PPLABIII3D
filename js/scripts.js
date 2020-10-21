import crearTabla from "./tabla.js";
import Auto from "./Auto.js";

let listaAuto;
let proximoId;
let frmAuto;
let divTabla;
//obtenemos estos datos aca arriba porque son constantes que no cambian
const inputTitulo=document.getElementById("txtTitulo");
const inputDescripcion = document.getElementById("txtDescripcion");
const inputId=document.getElementById("txtId");
const inputPrecio = document.getElementById("txtPrecio");
const inputPuerta = document.getElementById("txtPuerta");
const inputKM = document.getElementById("txtKM");
const inputPotencia = document.getElementById("txtPotencia"); 
const btnTabla = document.getElementById("btnGuardar");

const spinner = document.getElementById('spinnerCircle');


window.addEventListener('load', inicializarManejadores);

function inicializarManejadores() {

    //listaPersona = obtenerListaDePersonas();
    proximoId = obtenerId();
    divTabla = document.getElementById('divTabla');
    frmAuto = document.forms[0];

    //a cada boton le seteo un manejador!
    btnTabla.addEventListener("click", darDeAltaNuevoAuto);
   
}

function cargarTabla() { 
    listaAuto=obtenerListaDePersonas();
    actualizarDatos();  
    limpiarFormulario();  
}

function darDeAltaNuevoAuto(e) {
    e.preventDefault();
    const nuevoAuto = altaAuto();
    if (nuevoAuto) {
        listaAuto=obtenerListaDePersonas();
        listaAuto.push(nuevoAuto);
        proximoId++;
        guardarDatos();
        actualizarDatos();
    }
}

function altaAuto() {
    //console.log(inputNombre.value);
    if(inputTitulo.value != "" && inputDescripcion.value != "" && inputPrecio.value != ""){
     const nuevoAuto = new Auto(proximoId,
        document.querySelector("#txtTitulo").value,
        frmAuto.vehicle.value,
        document.querySelector("#txtDescripcion").value,
        document.querySelector("#txtPrecio").value,
        document.querySelector("#txtPuerta").value,
        document.querySelector("#txtKM").value,
        document.querySelector("#txtPotencia").value);
        return nuevoAuto;
     }
    
    //listaPersona.push(nuevaPersona);
    
    alert("verifique hay campos vacios");
    return null;
}

function obtenerListaDePersonas() {
    return JSON.parse(localStorage.getItem('autos')) || [];
}

function obtenerId() {
    return JSON.parse(localStorage.getItem('nextId')) || 0;
}
function guardarDatos() {
    localStorage.setItem('autos', JSON.stringify(listaAuto));
    localStorage.setItem('nextId', proximoId);

}

function actualizarDatos() {
    divTabla.innerHTML="";
    spinner.style.visibility = "visible";
    setTimeout(()=>{
        spinner.style.visibility = "hidden";
        divTabla.appendChild(crearTabla(listaAuto));

    },2000);
}

