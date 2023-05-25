import {data} from "../data/keyboarddata.js"
const getDeskmatscard = document.getElementById("deskMatscard")
console.log('a',getDeskmatscard)

let deskMcard = ""
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
deskMcard += html
})

getDeskmatscard.innerHTML = deskMcard;