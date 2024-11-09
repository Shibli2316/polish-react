/* eslint-disable react/prop-types */
// Challenge: to make use of conditional rendering using props



export default function Greetings(props) {
  return (
        props.time ==="morning" ? (<h1>Good morning</h1>) : (<h1>Good afternoon</h1>)
  )
}
