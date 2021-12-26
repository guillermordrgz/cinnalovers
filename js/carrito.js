class Producto {
  constructor(id, nombre, precio, stock, img) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
  }
}
const rollClasico = new Producto(
  1,
  "Roll Clásico",
  230,
  100,
  "../images/toppings/toppingClasico.jpg"
);
const rollNutella = new Producto(
  2,
  "Roll Nutella",
  280,
  50,
  "../images/toppings/toppingNutella.jpg"
);
const rollDulce = new Producto(
  3,
  "Roll DDL",
  260,
  100,
  "../images/toppings/toppingDulce.jpg"
);
const rollPecan = new Producto(
  4,
  "Roll Caramel & Pecans",
  270,
  50,
  "../images/toppings/toppingPecan.jpg"
);
const rollManzana = new Producto(
  5,
  "Roll Manzana",
  270,
  50,
  "../images/toppings/toppingManzana.jpg"
);
const rollFrutos = new Producto(
  6,
  "Roll Frutos Rojos",
  270,
  100,
  "../images/toppings/toppingFrutos.jpg"
);
const rollChoco = new Producto(
  7,
  "Roll Chocolate",
  260,
  100,
  "../images/toppings/toppingChoco.jpg"
);

let misProductos = [];

misProductos.push(
  rollClasico,
  rollNutella,
  rollDulce,
  rollPecan,
  rollManzana,
  rollFrutos,
  rollChoco
);

localStorage.setItem("productos", JSON.stringify(misProductos))

let contenedorProductos = document.getElementById("productos");

for (let producto of misProductos) {
  if (producto.stock > 0) {
    let div = document.createElement("div");
    div.setAttribute("class", "producto");

    div.innerHTML = `
<img src="${producto.img}" alt="" width="150" class="rounded-circle px-2">
<button type="button" class="btn btn-dark" id="producto${producto.id}">${producto.nombre}</button>
`;

    contenedorProductos.appendChild(div);
  } else {
    let div = document.createElement("div");
    div.setAttribute("class", "producto");

    div.innerHTML = `
<img src="${producto.img}" alt="" width="150">
<button type="button" class="button" id="producto${producto.id}">sin stock</button>
`;

    contenedorProductos.appendChild(div);
  }
}

let roll1 = document.getElementById("producto1");
producto1.addEventListener("click", function producto1() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[0].nombre +
    " - $ " +
    misProductos[0].precio +
    "</li>";
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let roll2 = document.getElementById("producto2");
producto2.addEventListener("click", function producto2() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[1].nombre +
    " - $ " +
    misProductos[1].precio +
    "</li>";
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let roll3 = document.getElementById("producto3");
producto3.addEventListener("click", function producto3() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[2].nombre +
    " - $ " +
    misProductos[2].precio +
    "</li>";
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let roll4 = document.getElementById("producto4");
producto4.addEventListener("click", function producto4() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[3].nombre +
    " - $ " +
    misProductos[3].precio +
    "</li>";
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let roll5 = document.getElementById("producto5");
producto5.addEventListener("click", function producto5() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[4].nombre +
    " - $ " +
    misProductos[4].precio +
    "</li>";
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let roll6 = document.getElementById("producto6");
producto6.addEventListener("click", function producto6() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[5].nombre +
    " - $ " +
    misProductos[5].precio +
    "</li>";
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let roll7 = document.getElementById("producto7");
producto7.addEventListener("click", function producto7() {
  document.getElementById("lista").innerHTML +=
    "<li>" +
    misProductos[6].nombre +
    " - $ " +
    misProductos[6].precio +
    "</li>";

    
  for (let i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarProducto);
  }
});
let eliminarProducto = function eliminarProducto() {
  this.parentNode.removeChild(this);
};

let vaciar = document.getElementById("vaciar");
vaciar.addEventListener("click", function vaciarCarrito() {
  document.getElementById("lista").innerHTML = null;
  localStorage.clear();
})
