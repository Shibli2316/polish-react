// Challenge: Traverse through list


const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: "$1200",
        availability: "In stock"
    }
  return (
    <>
    <div>The name of the product is: {product.name}</div>
    <div>The price of the product is: {product.price}</div>
    <div>The availability of the product is: {product.availability}</div>
    </>
  )
}

export default ProductInfo