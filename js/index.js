const getProductsCard = document.getElementById("sectionCard")

const mockData = [
    {
    id: 1,
    srcImg:"images/CloseUpP1020100_1500x.webp"
    },
    {
    id: 2,
    srcImg:"images/RF18XSpaceDustRendered_1800x1800_25201802-82e3-40c4-aa90-2080902b195b_1500x.webp"
    },
    {
    id: 3,
    srcImg:"images/Keyboards_1500x.webp"
    },
]

let html = ""

for (let index = 0 ; index < mockData.length ; index++)
{
    const card = `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="card shadow-sm mb-5 mt-5">
            <img src=${mockData[index].srcImg}>
        </div>
    </div>
    `
    html += card
}
getProductsCard.innerHTML = html
