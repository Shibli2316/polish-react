// Main file to display everything

import Person from "./components/Person";
import Product from "./components/Product";


function App() {
  return (
    <>
      {/* <User name="Shibli" age={22} isMarried={false} hobbies={["Coding", "Sleeping"]} /> */}
      <Person name="Shibli" age ={23}/>
      <Product productName="Samsung" productPrice={222}/>
    </>
  )
}


// Creating a child component to learn about props may delete later

// const User = ({name, age, isMarried, hobbies}) => {
//   return (
//     <section>
//       <h1>Name: {name}</h1>
//       <h1>Age: {age}</h1>
//       <h1>Is Married: {isMarried}</h1>
//       <h1>Hobbies: {hobbies}</h1>
//     </section>
//   )
// }

export default App;