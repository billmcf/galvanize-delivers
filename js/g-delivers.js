$(document).ready(() => {
  let cart = [] //Array to hold objects representing items ordered

  $('.add-to-order').click((event) => {
    // console.log('in add to order click')
    // event.preventDefault()
    // console.log("you clicked", event.target)
    let cardInfo = $(event.target)
    // console.log('cardInfo is ', cardInfo)
    cardInfo = $(cardInfo).parent()
    // console.log('cardInfo is ', cardInfo)
    cardInfo = $(cardInfo).prev()
    // console.log('cardInfo is ', cardInfo)
    let price = cardInfo.find('.item-price').text()
    let title = cardInfo.find('.item-name').text()

    console.log('title is ', title)
    console.log('price is ', price)

    addToCart({title, price})
})

function addToCart(itemOrdered) {
    console.log("item is ", itemOrdered)
    cart[cart.length] = itemOrdered
    console.log('cart', cart)

    renderCart()
}

function renderCart() {
  // find table
  let tbody = $('#orders tbody')

  // clear out all order data
  tbody.children().remove()

  // re-render tbody
  let subtotal = 0
  for (item of cart) {
    let price = parsePrice(item.price)

    tbody.append(`<tr>
      <td>${item.title}</td>
      <td>${formatPrice(price)}</td>
    </tr>`)

    subtotal += price


  }
  console.log("subtotal", subtotal)
  $('#subtotal').text(formatPrice(subtotal))
  let tax = subtotal *.0885
  $('#tax').text(formatPrice(tax))
  console.log("tax ", tax)
  let total = subtotal + tax
  $('#total').text(formatPrice(total))
  console.log("total ", total)
}

function parsePrice(price) {
  return parseFloat(price.replace(/\$/, ''))
}

function formatPrice(price) {
  console.log("formatPrice price is", price)
  return '$' + price.toFixed(2)
}

/*
    $( "#target" ).click(function() {
      alert( "Handler for .click() called." );
    });


    $( "#other" ).click(function() {
  $( "#target" ).click();
});
*/


})
