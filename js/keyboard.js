import {data} from "../data/keyboarddata.js"
const getDeskmatscard = document.getElementById("keyBoardcard")
console.log('a',getDeskmatscard)

let KeyBoardCard = ""
data.forEach((element)=>{
let html = `
<div class="col-md-3 p-3">
<div class="card">
    <img alt="..." src=${element.srcImg}>
        <div class="card-body">
            <a class="card-title">${element.title}</a>
            <p class="card-text">${element.price} $</p>
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

let checkoutbtn = document.getElementById("checkout")
console.log('checkout',checkoutbtn)
checkoutbtn.addEventListener("click",redirect)

function redirect() {
  let products = getItemInLocal("products")
}