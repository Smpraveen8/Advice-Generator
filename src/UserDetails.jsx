import {useState} from 'react'

export const UserDetails = () => {
    
    const [User ,setUser] = useState({name:"Praveen" , age:21})
     
    const handleName = () => {
        //setUser({...User , name:"Footballer"})
        User.name == "Praveen" ? setUser({...User,name:"Footballer"}) : setUser({...User,name:"Praveen"})
    }
    const handleAge = () => {
        setUser({...User , age:18})
        User.age == 21 ? setUser({...User,age:18}) : setUser({...User,age:21})
    }
  return (
    <>
    <h1>{User.name}</h1>
    <h1>{User.age}</h1>
    <button onClick={handleName}>C_Name</button>
    <p></p>
    <button onClick={handleAge}>C_AGE</button>
    </>
  )
}
