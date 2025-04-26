'use strict'
const catalog = document.getElementById("catalog")
fetch("./data/products.json").then( uploadProducts )
function uploadProducts(data) {
    data.json().then( getProducts )
}
function getProducts(data) {
    for(let phoneName in data) {
        const phoneData = data[phoneName]
        const phoneCard = getProductCard(phoneName, phoneData)
        catalog.append(phoneCard)
    }
}