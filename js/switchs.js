import {data} from "../data/switchdata.js"
import { setItemInLocal } from "./utils.js"
const getDeskmatscard = document.getElementById("swtichsCard")


let SwitchCard = []
data.forEach(element=>{
let html = `
<div class="col-md-3 p-3">
<div class="card bg-transparent">
    <img alt="..." src=${element.srcImg}>
        <div class="card-body">
            <a class="card-title">${element.name}</a>
            <p class="card-text">${element.price} $</p>
            <a data-id=${element.id} class="btn btn-primary add-to-cart bg-transparent"  style="border-color:black;font-weight:600;font-size:17px;">ADD TO CART</a>
        </div>
</div>
</div>
`
SwitchCard += html
})

getDeskmatscard.innerHTML = SwitchCard;

let btns = document.querySelectorAll(".add-to-cart")

for (let i = 0; i < btns.length; i++) {
  let btn = btns[i]
  btn.addEventListener("click", add)
}


function add(event) {
  let id = event.target.dataset.id
  let item = data.filter((item) => item.id === id)
  if (item.length > 0) {
    setItemInLocal("products", item[0])
  }
}
