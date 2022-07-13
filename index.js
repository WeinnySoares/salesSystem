let total = 0
let orders = []
let order = {
    "number": 0,
    "total": 0,
    "products": [],
}
let item = {} 

var btnOpen = document.getElementById("sell");
var modal = document.getElementById("open");
let handleAdd = document.getElementById("add");
let handleSave = document.getElementById("save");
var btnClose = document.getElementsByClassName("cancel");

btnOpen.onclick = function() {
  modal.style.display = "block"
  order.number += 1
  document.getElementById("orderNumber").textContent = order.number
}

handleAdd.onclick = function(){
    let inputClient = document.getElementById("client")
    let inputProduct = document.getElementById("product")
    let inputQuantity = document.getElementById("quantity")
    let inputValue = document.getElementById("value")

    item.client = inputClient.value
    item.product = inputProduct.value
    item.quantity = inputQuantity.value
    item.value = inputValue.value
    item.total = item.value * item.quantity

    order.products.push(item)
    order.total += item.total

    let itemCopy = item
    item = {} //reset 

    //data validate 
    let valid = Object.keys(itemCopy).reduce( (bool,col) => {
          if(itemCopy[col] === ''){
            bool = false
          }
          return bool
    }, true);

    if(!valid ){
      alert("Favor preecher todos os campos")
      return null
    }

    // update datas in modal
    let tr = ""
    +"<tr>"
      +"<td>"+itemCopy.product+"</td>"
      +"<td>"+itemCopy.quantity+"</td>"
      +"<td>"+itemCopy.value+"</td>"
      +"<td>"+itemCopy.total+"</td>"
    +"</tr>";
    
    document.getElementById("tbody").innerHTML += tr
    document.getElementById("totalItem").textContent = itemCopy.total
    document.getElementById("quantityTotal").textContent = order.products.length
    document.getElementById("orderTotal").innerHTML = order.total    
    client
  // reset inputs
    inputProduct.value = ''
    inputQuantity.value = ''
    inputValue.value = ''
}

handleSave.onclick = function(){
    orders.push(order)
    total += orders.reduce((acc, loop) => acc += loop.total, 0);

    console.log(total);

    modal.style.display = "none";
    item = {}
    order = {
      "number": order.number,
      "total": 0,
      "products": [],
    }

    document.getElementById("total").textContent = total
    document.getElementById("client").innerHTML = ''
    document.getElementById("tbody").innerHTML = ''
    document.getElementById("totalItem").textContent = 0
    document.getElementById("quantityTotal").textContent = 0
    document.getElementById("orderTotal").innerHTML = 0 
}

window.onclick = function(event) {
  if (event.target == modal || event.target == cancel) {
    modal.style.display = "none"
    orders = []
    document.getElementById("client").innerHTML = ''
    document.getElementById("tbody").innerHTML = ''
    document.getElementById("totalItem").textContent = 0
    document.getElementById("quantityTotal").textContent = 0
    document.getElementById("orderTotal").innerHTML = 0 
  }
}