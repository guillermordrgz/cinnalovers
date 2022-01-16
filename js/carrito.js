export class Carrito {

    constructor() {
        this.lista = JSON.parse(localStorage.getItem('carrito')) || [];
    }
}