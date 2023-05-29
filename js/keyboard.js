import {data} from "../data/keyboarddata.js"
import { setItemInLocal , getItemInLocal } from "./utils.js"
const getDeskmatscard = document.getElementById("keyBoardcard")
console.log('a',getDeskmatscard)

let KeyBoardCard = ""
data.forEach((element)=>{
let html = `
<div class="col-md-3 p-3">
<div class="card bg-transparent">
    <img alt="..." src=${element.srcImg}>
        <div class="card-body">
            <a class="card-title">${element.name}</a>
            <p class="card-text">${element.price} $</p>
            <a class="btn btn-primary add-to-cart bg-transparent" style="border-color:black;font-weight:600;font-size:17px;" data-id=${element.id} >ADD TO CART</a>
        </div>
</div>
</div>
`
KeyBoardCard += html
})

getDeskmatscard.innerHTML = KeyBoardCard;

let btns = document.querySelectorAll(".add-to-cart")
console.log('btn',btns)

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i]
  btn.addEventListener("click", add)
}

function add(event) {
  let id = event.target.dataset.id
  let item = data.filter((element) => {
    if (element.id === Number(id)) {
      return element
    }
  })
  // ES6
  // let item = data.filter((element) => element.id === Number(id))

  setItemInLocal('products', item[0])
}

// let checkoutbtn = document.getElementById("checkout")
// console.log('checkout',checkoutbtn)
// checkoutbtn.addEventListener("click",redirect)

// function redirect() {
//   let products = getItemInLocal("products")
// }