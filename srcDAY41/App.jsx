import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Employee from './Components/Employee.jsx';
import Products from './Components/Products.jsx';
import Customers from './Components/Customers.jsx'
function App() {

  return (
    <>
     {/* <Employee/>  */}
     {/* <Products/> */}
     <Customers/>
    </>
  )
}

export default App
