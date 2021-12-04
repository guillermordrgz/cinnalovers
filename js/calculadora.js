const precioMaxis = 230
const cantidadRolls = +prompt('Tienes descuentos comprando más de 3 maxi rolls! Ingresa el número de maxi rolls para calcular tu descuento!')

if (isNaN(cantidadRolls) || cantidadRolls.lenght == 0 || cantidadRolls === 0){
    alert("Tienes que poner un número!")
} else {}
if (cantidadRolls >= 3){
    descuento = 0.85
} else{
    alert("No tienes descuento, son a partir de 3")
}

if (cantidadRolls >= 6){
    descuento = 0.80
} else{}

if (cantidadRolls >=12){
    descuento = 0.75
} else{}

function resultado(){
    let subtotal = precioMaxis * cantidadRolls;
    let total = subtotal * descuento;
    let ahorro = subtotal - total;
    var porcentaje = (1 - descuento) * 100;
    var porcentaje = Math.round(porcentaje)
    console.log(porcentaje)
    alert("Tienes un descuento de " + porcentaje + "% ($" + ahorro + "), tu total es $" + total)
}
resultado()