export default class Anuncio{
    constructor(id,titulo,transaccion,descripcion,precio,puerta,km,potencia){
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
        this.puerta = puerta;
        this.km = km;
        this.potencia = potencia;
    }

    set Transaccion(transaccion){
        this.transaccion = transaccion.toLowerCase();
    }
    get Transaccion(){
        return this.transaccion;
    }
    
}