const products = [
    {
        id: 1,
        name: 'Chleb',
        price: 100
    },
    {
        id: 2,
        name: 'China soup',
        price: 20
    },
    {
        id: 3,
        name: 'Jogurt Waniliowy',
        price: 3.50
    }
]


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
function multiplyBy10 () {
    return products.map(product =>  product.price * 10)
}
console.log(multiplyBy10())