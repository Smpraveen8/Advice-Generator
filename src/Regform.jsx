import {useState} from 'react'

export const Regform = () => {
  const [user , setUser] = useState({
    name:"Praveen SM",
    age:21,
    gender:"Male",
    isMarried:true,
  })
  return (
    <>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{user.age}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td>IsMarried</td>
              <td>{user.isMarried ? "Married" : "Not Married"}</td>
            </tr>
          </tbody>
        </table>
        <form>
          <input type='text' placeholder='Full Name'  value={user.name}/>
          <input type='number' placeholder='Age'  value={user.age}/>
          <div className='gender'>
          <label htmlFor='male'>
                <input type='radio' name="gender" id="male" checked={user.gender == "Male"} value={user.gender} />
                Male
          </label>
          <label htmlFor='Female'>
                <input type='radio' name="gender" id="Female" value={user.gender} checked={user.gender == "Female"}/>
                Female
          </label>
          </div>
          <label htmlFor='isMarried'>
              <input type='checkbox' id="isMarried" checked={user.isMarried}/>
              IsMarried 
          </label>
          <div>
            <label htmlFor='country'>Select country:</label>
            <select name='country' id = "country">
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>
        </form>
    </>
  )
}
