/* eslint-disable react/prop-types */
// Challenge: to make use of conditional rendering using props


const CheckStatus = ({loggedIn, isAdmin}) => {
    if(loggedIn && isAdmin){
        return <h1>Welcome Admin</h1>
    }
    return <h1>Welcome User</h1>
}

export default function UserStatus() {
  return (
    <>
        <CheckStatus loggedIn={true} isAdmin={true}/>
    </>
  )
}
