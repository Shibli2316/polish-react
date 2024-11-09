/* eslint-disable react/prop-types */
// how to do conditional rendering

import Greetings from "./components/Greetings"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"


const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>Valid Password</h1>

const Password = ({isValid}) => {
    if(isValid){
        return <ValidPassword />
    }

    return <InvalidPassword />
}

export default function ConditionalRendering() {
  return (
    <div>
        <Password isValid={true} />
        <Weather />
        <UserStatus />
        <Greetings time="afternoon"/>
    </div>
  )
}
