import React from 'react'
import { useState  } from 'react'

export const Advice = () => {
    const [advice , setadvice] = useState("Click Below Button To Get Advice")
  
    async function getAdvice(){
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setadvice(data.slip.advice)
    }
    return (
    <div>
    <h1 className='one'>{advice}</h1>
    <button className='button' onClick={getAdvice}>Get Advice</button>
    </div>
  )
}
