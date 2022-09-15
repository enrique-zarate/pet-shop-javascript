// Validamos que el DOM cargue completamente anter de cargar los scripts
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var eliminarItemsCarritoBotones =
    document.getElementsByClassName("btn-danger");
  console.log(eliminarItemsCarritoBotones);
  // Recorremos los botones y por cada uno, agregamos eventListener click
  for (var i = 0; i < eliminarItemsCarritoBotones.length; i++) {
    var boton = eliminarItemsCarritoBotones[i];
    // Llamamos a la funcion eliminarItemCarrito()
    boton.addEventListener("click", eliminarItemCarrito);

    // TO-DO: Llamamos a la funcion actualizarTotal()
    actualizarTotal();
  }

  // TO-DO: Actualizar monto total segun la cantidad del campo cart-quantity-input
  // Muy parecido al de arriba
  // Se llama a la funcion cantidadCambiada segun el evento 'change'
}

function eliminarItemCarrito(event) {
  var botonClicked = event.target;
  botonClicked.parentElement.parentElement.remove();
}

function actualizarTotal() {
  // Traer todos los elementos de cart-items (cart-rows)
  // Loopear cada uno, obtener los precios y las cantidades
  // Multiplicar el precio por la cantidad
  // anhadir al total
  // escribir al innerText
}

function cantidadCambiada() {
  // validar si el input es o no un numero
  // Validar si la cantidad es mayor a 0, si no cumple, actualizar valor a 1
  // llamar a la funcion actualizarTotal()
}

function anhadirCarrito() {
  // obtener el precio del producto
  // let price = document.getElementById("price").innerText;
  // console.log(price);
  // obtener el nombre del producto
  // anhadir datos al objeto carrito
}

function actualizarTotalCarrito() {
  // Bucle para desplegar info de la compra: nombre productos y precios
  // Validar que el carrito no este vacio. Si esta vacio: alert(),
  // sino: sumar precios recorriendo los precios del objeto Carrito, calcular IVA y deplegar subtotal total
  // Validar datos de delivery: Nombre y apellido, direccion y edad no esten vacios. Sumar al monto total
  // Restar % cupon de descuento al subtotal -> agregar en HTML un campo para poner cupon descuento
  // En caso de que aun tenga plata en la Billetera, descontar, si no, avisar insuficiencia de fondos
}

function descontarBilletera() {
  // tomar el monto total y restar al saldo
  // desplegar en pantalla
}
