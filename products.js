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
const displayProdycts = () =>products.forEach(product => {console.log(product)})
displayProdycts()