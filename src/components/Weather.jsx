/* eslint-disable react/prop-types */
// Challenge: to make use of conditional rendering using props

let temp = 16

const WhatIsTheWeather = ({temperature}) => {
    if(temperature < 15){
        return <h2>It is cold</h2>
    }else if(temperature >15 && temperature < 25){
        return <h2>It is pleasent</h2>
    }
    return <h2>It is hot</h2>
}


export default function Weather() {
  return (
    <>
        <WhatIsTheWeather temperature={temp}/>
    </>
  )
}
