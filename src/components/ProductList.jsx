// Challenge: to make a product list and iterate over the objects using destructured format


const ProductList = () => {
    const products = [
        {id: 1, name: "Phone", price: 699},
        {id: 2, name: "Laptop", price: 1699},
        {id: 3, name: "Headphones", price: 99}
    ]
    return (
    <div>
        {
            products.map(({id, name, price})=>(
                <div key={id}>
                    <h3>{name}</h3>
                    <p>{price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductList