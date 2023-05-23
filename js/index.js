import { data } from "../data/product.js"
import { data2 } from "../data/product.js"
const getProductsCard = document.getElementById("sectionCard")
const getContainerCard = document.getElementById("indexCcard")

console.log("data1-đã gọi dc",getProductsCard)
console.log("Data2-ko gọi ra dc",getContainerCard)


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

let containerCard = ""
data.forEach((element) => {
    let arrayCard = `
    <div class="col-md-4">
        <div class="card">
            <img src=${element.srcImg}>
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.price}</p>
                </div>
        </div>
    </div>
    `
    containerCard += arrayCard
})


getContainerCard.innerHTM = containerCard;
getProductsCard.innerHTML = proDuct;


