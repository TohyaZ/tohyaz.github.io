import { dataB1,dataB2,data2 } from "../data/product.js"

const getProductsCard = document.getElementById("sectionCard")
const getContainerCard = document.getElementById("indexCcard")
const getContainerCard2 = document.getElementById("indexCcard2")


let containerCard = ""
dataB1.forEach((element) => {
    let arrayCard = `
    <div class="col-md-3">
        <div class="card">
            <img src=${element.srcImg}>
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.price} $</p>
                </div>
        </div>
    </div>
    `
    containerCard += arrayCard
})

let containerCard2 = ""
dataB2.forEach((element) => {
    let arrayCard = `
    <div class="col-md-3">
        <div class="card">
            <img src=${element.srcImg}>
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.price} $</p>
                </div>
        </div>
    </div>
    `
    containerCard2 += arrayCard
})

let proDuct = ""
data2.forEach((element) => {
    let html = `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-sm mb-5 mt-5">
            <img alt="..." src=${element.srcImg}>
        </div>
    </div>
    `   
    proDuct += html
})
getContainerCard.innerHTML = containerCard;
getContainerCard2.innerHTML = containerCard2;
getProductsCard.innerHTML = proDuct;


