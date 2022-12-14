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
  // Actualizar monto total segun la cantidad del campo cart-quantity-input
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
    // Llamamos a la funcion
    boton.addEventListener("click", agregarCarritoClick);
  }

  // boton comprar
  var botonComprar = document.getElementsByClassName("btn-purchase")[0];
  botonComprar.addEventListener("click", comprarClicked);
}

function comprarClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  actializarTotalCarrito();
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
  //tomamos todos los elementos bajo la clase de items de carrito mencionados en el HTML
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  //indicamos que la variable cartRows son los contenidos dentro del HTML nombrados bajo la clase cart-row
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  // se crea la variable total con el monto 0 a modo de modificarla despues
  var total = 0
  //hacemos un recorrido por las filas del carrito
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      /*declaramos una nueva variable de elemento de precio e indicamos que su contenido 
       son los elementos que estan bajo la clase de cart-price dentro del html*/
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      // Creamos la variable de Precio (al estar en decimales nuestro precio le asignamos un float)
      //como el simbolo del precio esta dentro del contenido sacamos el simbolo y lo reemplazamos por un espacio
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      //tomamos el valor del elemento de "Cantidad"
      var quantity = quantityElement.value
      // declaramos que el total nuevo es el total anterior =0  y le sumamos el precio de los productos multiplicados por la cantidad que introducimos
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  //seleccionamos al elemento del total del carrito del HTML, entramos dentro del texto y se introducimos el simbolo de moneda + el total generado
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
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
  
  // anhadir datos al objeto carrito
}
function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function a??adirAlCarrito(title, price, imageSrc) {
  //creamos un eleemnto de division 
  var cartRow = document.createElement('div')
  // a??adimos una nueva fila de carrito
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  // obtenemos el nombre del producto
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
    //a??adimos una condicional para validar si dentro del texto del carrito
    //ya esta el titulo o nombre del producto a modo de desplegar un mensaje
      if (cartItemNames[i].innerText == title) {
          alert('Este item ya fue a??adido al carrito previamente!')
          return
      }
  }
}

var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)



//_-----------------------------------------------------------------------------
  // Bucle para desplegar info de la compra: nombre productos y precios
  // Validar que el carrito no este vacio. Si esta vacio: alert(),
  // sino: sumar precios recorriendo los precios del objeto Carrito, calcular IVA y deplegar subtotal total
  // Validar datos de delivery: Nombre y apellido, direccion y edad no esten vacios. Sumar al monto total
  // Restar % cupon de descuento al subtotal -> agregar en HTML un campo para poner cupon descuento
  // En caso de que aun tenga plata en la Billetera, descontar, si no, avisar insuficiencia de fondos



function actualizarTotalCarrito() {
  //creamos una variable que contenga los items insertados en el carrito
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  //indicamos que el total es 0 para tomarlo como base y modificarlo sin que altere el resultado final
  var total = 0
  //hacemos un blucle que recorra los productos dentro del carrito si la cantidad de filas es menor a i que tiene el valor base de 0, y sumamos 1 a i 
  // cuando i sea del mismo tama??o este bucle para
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      //creamos una variable que contenga los precios de los productos mencionados en el html
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      //determinamos la cantidad de productos
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      //indicamos que es un valor numerico con decimales y eliminamos el simbolo de la moneda para no tener errores
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      //indicamos que la cantidad es el valor dentro del elemento de cantidad
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}


function descontarBilletera() {
  // tomar el monto total y restar al saldo
  // desplegar en pantalla
}
