// Challenge: Make a product and access it using props



export default function Product(props) {
  return (
    <div>
        <h1>The name of the prduct is: {props.productName}</h1>
        <h1>The price of the prduct is: {props.productPrice}</h1>
    </div>
  )
}
