import { data } from "../data/product.js"
import { data2 } from "../data/product.js"
const getProductsCard = document.getElementById("sectionCard")
const getContainerCard = document.getElementById("indexCcard")

console.log("contai",getProductsCard)
console.log("contai",getContainerCard)


let proDuct = ""
data2.forEach((element) => {
    let html = `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-sm mb-5 mt-5">
            <img src=${element.srcImg}>
        </div>
    </div>
    `   
    proDuct += html
})

let containerProduct = ""
data.forEach((element) => {
    let html = `
    <div class="col-md-4">
    <div class="card">
        <img src=${element.srcImg}>
        <div class="card-body">
            <h5 class="card-title">1</h5>
            <p class="card-text">2$</p>
        </div>
    </div>
    </div>
    `
    containerProduct += html
})


getContainerCard.innerHTM = containerProduct;
getProductsCard.innerHTML = proDuct;


