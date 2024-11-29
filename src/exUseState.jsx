import React, { useState } from 'react'

export const exUseState = () => {
    const [count,setcount] = useState(0);
    const handleClick = () => setcount(count + 1)
    const cleared = () => setcount(0) 
  return (
    <>
    <h1>Praveen has {count} bags </h1>
    <button onClick={handleClick}>ADD</button>
    <button onClick={cleared}>CLEAR</button>
    </>
  )
} 
