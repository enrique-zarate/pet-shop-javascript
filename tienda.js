if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    listo()
}

function listo() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    actializarTotalCarrito()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    actializarTotalCarrito()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actializarTotalCarrito()
}

function añadirAlCarritoClick   (event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    añadirItemAlCarrito(title, price, imageSrc)
    actializarTotalCarrito()
}

function añadirItemAlCarrito(title, price, imageSrc) {
    var carritoFila = document.createElement('div')
    carritoFila.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Este item ya fue añadido al carrito')
            return
        }
    }
    var carritoContenidoDeFila = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        carritoFila.innerHTML = carritoContenidoDeFilas
    cartItems.append(carritoFila)
    carritoFila.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    carritoFila.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function actializarTotalCarrito() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var carritoFilas = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < carritoFilas.length; i++) {
        var carritoFila = carritoFilas[i]
        var priceElement = carritoFila.getElementsByClassName('cart-price')[0]
        var quantityElement = carritoFila.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
