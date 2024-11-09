// Teaching: how to map a nested list. -> in 2 ways, normal and destructured way


const NestedMapping = () => {
    const userInfo = [
        {
            username: "Ahmad",
            location: "Hazaribagh"
        },
        {
            username: "Raza",
            location: "Aligarh"
        },
        {
            username: "Shibli",
            location: "Germany"
        }
    ]
  return (
    <div>
        <h1>The users are</h1>
        {
            userInfo.map(({username, location}) =>( //destructured way. If we dont want to destructure it we can remove the parenthesis and write user.username and so on
                <ul key={Math.random()}>
                    <li>{username}</li>
                    <li>{location}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default NestedMapping    