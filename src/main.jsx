import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { Regform } from './Regform.jsx'
//import './regform.css'
//import { exUseState } from './Sample.jsx'
//import { UserDetails } from './UserDetails.jsx'
import App from './App.jsx'
import { Advice } from './Advice.jsx'
import './Advice.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*
      <App /> 
      <exUseState />
      <UserDetails />
      <Regform />
     */}
     <Advice />
     
     
    
  </StrictMode>,
)
