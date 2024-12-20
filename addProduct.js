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