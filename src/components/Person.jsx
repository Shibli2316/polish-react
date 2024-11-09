// Challenge: implement props



const Person = (props) => {
  return (
    <div>
        <h2>Name of person: {props.name}</h2>
        <p>Age of person: {props.age}</p>
    </div>
  )
}

export default Person