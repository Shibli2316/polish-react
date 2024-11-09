// challenge: on rendering dynamic content using jsx

const Greeting = () => {
    const date = new Date()
    const today = date.getDate()
    const name = "Shibli"

  return (
    <div>
        <h1>Good Morning</h1>
        <p>Todays Date is: {today}</p>
        <p>My name is: {name}</p>
    </div>
  )
}

export default Greeting