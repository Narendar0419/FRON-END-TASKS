// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Card from './Components/Card.jsx';
import './App.css';

function App() {

  return (
    <>
    <Card title="Product" footer="₹999">
       <p>This is a great product.</p> </Card> 
       <Card title="About" footer="Learn More">
         <p>We provide quality products.</p> </Card> 
         <Card title="Contact" footer="Contact Us"> 
          <p>Email: example@gmail.com</p> </Card>
    </>
  )
}

export default App;
