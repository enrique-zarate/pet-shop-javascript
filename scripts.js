// Validamos que el DOM cargue completamente anter de cargar los scripts
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // Boton Eliminar de carrito
  var eliminarItemsCarritoBotones =
    document.getElementsByClassName("btn-danger");
  // Recorremos los botones y por cada uno, agregamos eventListener click
  for (var i = 0; i < eliminarItemsCarritoBotones.length; i++) {
    var boton = eliminarItemsCarritoBotones[i];
    // Llamamos a la funcion eliminarItemCarrito()
    boton.addEventListener("click", eliminarItemCarrito);
  }

  // Seleccionar cantidad del producto
  var cantidadInputs = document.getElementsByClassName("cart-quantity-input");
  //Actualizar monto total segun la cantidad del campo cart-quantity-input
  // Muy parecido al de arriba
  for (var i = 0; i < cantidadInputs.length; i++) {
    var boton = cantidadInputs[i];
    // Se llama a la funcion cantidadCambiada segun el evento 'change'
    boton.addEventListener("change", cantidadCambiada);
  }

  // Boton agregar al carrito
  var agregarCarritoBoton = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < agregarCarritoBoton.length; i++) {
    var boton = agregarCarritoBoton[i];
    // Llamamos a la funcion eliminarItemCarrito()
    boton.addEventListener("click", agregarCarritoClick);
  }
}

function eliminarItemCarrito(event) {
  var botonClicked = event.target;
  botonClicked.parentElement.parentElement.remove();
  // Llamamos a la funcion actualizarTotal()
  actualizarTotal();
}

function cantidadCambiada(event) {
  var input = event.target;
  // validar si el input es o no un numero
  // Validar si la cantidad es mayor a 0, si no cumple, actualizar valor a 1
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  // llamar a la funcion actualizarTotal()
  actualizarTotal();
}

function actualizarTotal() {
  // Traer todos los elementos de cart-items (cart-rows)
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  // Loopear cada uno, obtener los precios y las cantidades
  for (var i = 0; cartRows.length; i++) {
    var cartRow = cartRows[i];
    var precioElement = cartRow.getElementsByClassName("cart-price")[0];
    var cantidadElemento = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    // limpiamos el precio
    var precio = parseFloat(precioElement.innerText.replace("$", ""));
    var cantidad = cantidadElemento.value;
    // Multiplicar el precio por la cantidad
    // anhadir al total
    total = total + precio * cantidad;
    // redondeo
    total = Math.floor(total * 100) / 100;
    // escribir al innerText
    document.getElementsByClassName("cart-total-price")[0].innerText =
      "Gs " + total;
  }
}

function agregarCarritoClick(event) {
  var boton = event.target;
  // traemos el item de producto completo
  var itemCompra = boton.parentElement.parentElement;
  // tremos el titulo, el precio y la imagen
  var titulo =
    itemCompra.getElementsByClassName("shop-item-title")[0].innerText;
  var precio =
    itemCompra.getElementsByClassName("shop-item-price")[0].innerText;
  var imagenSrc = itemCompra.getElementsByClassName("shop-item-image")[0].src;
  agregarItemCarrito(titulo, precio, imagenSrc);
}

function agregarItemCarrito(titulo, precio, imagenSrc) {
  // creamos un elemento div vacio
  var carritoRow = document.createElement("div");
  // indicamos los estilos que tendra
  carritoRow.classList.add("cart-row");
  // traemos todos los items dentro del carro
  var carritoItems = document.getElementsByClassName("cart-items")[0];
  // creamos el nuevo item
  var carritoNuevoItem = `
  <div class="cart-item cart-column">
  <img
    class="cart-item-image"
    src="${imagenSrc}"
    width="100"
    height="100"
  />
  <span class="cart-item-title">${titulo}</span>
</div>
<span class="cart-price cart-column">Gs.${precio}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>`;
  carritoRow.innerHTML = carritoNuevoItem;
  // anhadimos el nuevo item a la lista de items del carrito
  carritoItems.append(carritoRow);
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
