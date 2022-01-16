import { productos } from "./productos.js";
import { Carrito } from "./carrito.js";

const carrito = new Carrito();

for (const producto of productos) {
  if (producto.stock > 0) {
    $("#productos").append(`
  <img src="${producto.img}" alt="" width="150" class="rounded-circle px-2">
  <button type="button" class="btn btn-dark" id="btn-${producto.id}">${producto.nombre}</button>
  `);
    $(`#btn-${producto.id}`).click(function () {
      $("#lista").append(`
    <li id="item-lista"> ${producto.nombre} $${producto.precio}</li>`);
    });
  } else {
    $("#productos").append(
      `
  <img src="${producto.img}" alt="" width="150" class="rounded-circle px-2">
  <button type="button" class="btn btn-dark" id="btn-ss-${producto.id}">SIN STOCK</button>
  `
    );
    $(`#btn-ss-${producto.id}`).click(function () {
      alert("Producto sin stock!");
    });
  }
}

let vaciar = document.getElementById("vaciar");
vaciar.addEventListener("click", function vaciarCarrito() {
  document.getElementById("lista").innerHTML = null;
  localStorage.clear();
});