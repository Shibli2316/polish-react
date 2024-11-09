// Challenge: Traverse in a nested list


const UserList = () => {
    const users = [
        {id: 1, name: "Alice", age: 35},
        {id: 2, name: "Bob", age: 30},
        {id: 3, name: "Charlie", age: 22}
    ]
  return (
    <div>
    {
        users.map((user) => (
            <div key={user.id}>
                <h1>{user.name}</h1>
                <p>{user.age}</p>
            </div>
        ))
    }

    </div>
  )
}

export default UserList