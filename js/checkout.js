import { getItemInLocal } from "./utils.js";

const products = getItemInLocal('products')
console.log('products',products)

let containerOderlist = document.getElementById("oder-list")
let arrayCart = ""
let priceTotal = 0
let shipTotal = 5
products.forEach(element => {
    let html = `
    <hr class="my-4">

    <div class="row mb-4 d-flex justify-content-between align-items-center" id="oder-list">
      <div class="col-md-2 col-lg-2 col-xl-2">
        <img
          src=${element.srcImg}
          class="img-fluid rounded-3" alt="...">
      </div>
      <div class="col-md-3 col-lg-3 col-xl-3">
        <h6 class="text-muted">${element.title}</h6>
        <h6 class="text-black mb-0">Cotton T-shirt</h6>
      </div>
      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button class="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
          <i class="fas fa-minus"></i>
        </button>

        <input id="form1" min="0" name="quantity" value="1" type="number"
          class="form-control form-control-sm" />

        <button class="btn btn-link px-2"
          onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h6 class="mb-0">$ ${element.price}.00</h6>
      </div>
      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
        <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
      </div>
    </div>
    `
    arrayCart += html
    priceTotal += element.price
});

containerOderlist.innerHTML = arrayCart;
console.log('arraycart',arrayCart)

let containerPricetotal = document.getElementById("priceTotal")
containerPricetotal.innerHTML = priceTotal + shipTotal + ".00$";