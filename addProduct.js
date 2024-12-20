

function addProduct(productId, productName, productPrice) {
    products.push({id:productId, name:productName, price:productPrice})
}
addProduct(4, "cerveza", 5)
console.log(products)

function editProduct(productId, productName, productPrice) {
    const productIndex = products.findIndex(product => product.id === productId)
    if(productIndex === -1) {
        console.log("Nie ma produktu o podanym id")
    }
    else {
        products[productIndex] = {id:productId, name:productName, price:productPrice}
    }
}

editProduct(4, "beber cerveza", 10)
console.log(products)