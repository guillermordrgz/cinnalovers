class Carrito {

    constructor( lista ) {
        this.lista = lista;
    }

    findAllItems() {
        return this.lista;
    }

    createItem( item ) {
        this.lista.push( item )
    }

    findOneByIdItem( itemId ) {
        const item = this.lista.find( element => element.id === itemId )

        if ( !item ) {
            throw new Error('No existe el item id:' + itemId)
        }

        return item;
    }   
}
class Producto {
    constructor(id, nombre, precio, cantidad, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.stock = stock;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

    agotado() {
        this.stock = false;
    }
}

const rollClasico = new Producto(1, 'Roll Clásico', 230, 100, true);
const rollNutella = new Producto(2, 'Roll Nutella', 280, 50, true);
const rollDulce = new Producto(3, 'Roll DDL', 260, 100, true);
const rollPecan = new Producto(4, 'Roll Caramel & Pecans', 50, 270, true);
const rollManzana = new Producto(5, 'Roll Manzana', 1, 50, true);
const rollFrutos = new Producto(6, 'Roll Frutos Rojos', 1, 100, true);
const rollChoco = new Producto(7, 'Roll Chocolate', 1, 100, true);

const carrito = new Carrito ([])
carrito.createItem (rollClasico)
carrito.createItem (rollNutella)
carrito.createItem (rollDulce)
carrito.createItem (rollPecan)
carrito.createItem (rollManzana)
carrito.createItem (rollFrutos)
carrito.createItem (rollChoco)

console.log( carrito.findAllItems() )