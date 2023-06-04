import { getItemInLocal , setItemsInLocal } from "./utils.js";
let orderItemData = getItemInLocal('products')
const containerOderlist = document.getElementById("oder-list")
let containerPricetotal = document.getElementById("priceTotal")
let priceTotal = 0
let arrayItem = []
let listID = []
orderItemData.forEach((item) => {
  if (listID.indexOf(item.id) === -1) {
    listID.push(item.id)
  }
})

listID.forEach(id => {
  let products = orderItemData.filter((element) => element.id === id)
  let html = `
  <hr class="my-4">

  <div class="row mb-4 d-flex justify-content-between align-items-center" id="oder-list">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <img
        src=${products[0].srcImg}
        class="img-fluid rounded-3" alt="...">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <h6 class="text-muted">${products[0].title}</h6>
      <h6 class="text-black mb-0">${products[0].name}</h6>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
      <button data-id=${products[0].id} class="removeOne px-2">-</button>
      <span id="count-${products[0].id}">${products.length}</span>
      <button data-id=${products[0].id} class="addOne px-2">+</button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 class="mb-0">$ ${products[0].price}.00</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
    </div>
  </div>
    `
  arrayItem += html
  priceTotal += products[0].price
});
containerOderlist.innerHTML = arrayItem;

containerPricetotal.innerHTML = priceTotal + ".00$";


let btnsAddOne = document.querySelectorAll(".addOne")
let btnsRemoveOne = document.querySelectorAll(".removeOne")

for (let i = 0; i < btnsAddOne.length; i++) {
  let btn = btnsAddOne[i];
  btn.addEventListener("click", addOne);
}

for (let i = 0; i < btnsAddOne.length; i++) {
  let btn = btnsRemoveOne[i];
  btn.addEventListener("click", reoveOne);
}

function addOne(event) {
  let id = event.target.dataset.id
  let items = orderItemData.filter((item) => item.id === id)
  orderItemData.push(items[0])
  setItemsInLocal("products", orderItemData)
  let total = document.getElementById(`count-${id}`)
  total.innerHTML = items.length + 1
}

function reoveOne(event) {
  let id = event.target.dataset.id
  let items = orderItemData.filter((item) => item.id === id)
  orderItemData.pop()
  setItemsInLocal("products", orderItemData)
  let total = document.getElementById(`count-${id}`)
  total.innerHTML = items.length - 1
}

