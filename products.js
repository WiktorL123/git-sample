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


const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    const productsDiv = document.querySelector('#products');
    const list = document.createElement('ul')
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.price} zł`;
        list.appendChild(li)
    })
    productsDiv.appendChild(list)

})
const displayProducts = () =>products.forEach(product => {console.log(product)})
displayProducts()