export default function crearTabla(lista) {
    
    const tabla = document.createElement('table');
    tabla.appendChild(crearCabecera(lista[0]));
    tabla.appendChild(crearCuerpo(lista));

    return tabla;
}

const inputTitulo=document.getElementById("txtTitulo");
const inputDescripcion = document.getElementById("txtDescripcion");
const inputId=document.getElementById("txtId");
const inputPrecio = document.getElementById("txtPrecio");
const inputPuerta = document.getElementById("txtPuerta");
const inputKM = document.getElementById("txtKM");
const inputPotencia = document.getElementById("txtPotencia"); 

function crearCabecera(item) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    for (const key in item) {
        const th = document.createElement('th');
        let txt = document.createTextNode(key); // key => id, nombre, apellido etc.
        th.appendChild(txt);
        tr.appendChild(th);
        tr.style.background="#66ff33";
    }
    thead.appendChild(tr);
    return thead;
}

function crearCuerpo(lista) {
    const tbody = document.createElement('tbody');
    lista.forEach(element => {
        const tr = document.createElement('tr');
        for (const key in element) {
            const td = document.createElement('td');
            let txt = document.createTextNode(element[key]);
            td.appendChild(txt);
            tr.appendChild(td);
        }
        if (element.hasOwnProperty('id')) {
            tr.setAttribute('data-id', element['id']);

        }
        //agregarManejadorTr(tr);
        tbody.appendChild(tr);
    });
    return tbody;
}


