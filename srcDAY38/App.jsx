import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Profilecard from "./Components/Profilecard";
import Button from './Components/Button';
function App() {
  return (
    <>
      <h1>Profile Cards</h1>
      <div style={{ display: "flex" }}>
      <Profilecard name="John" age={25} role="Developer">
        <p>Likes React and JavaScript.</p>
      </Profilecard>

      <Profilecard name="Priya" age={23} role="Designer">
        <p>Likes UI design and creativity.</p>
      </Profilecard>

      <Profilecard name="Rahul" age={28} role="Tester">
        <p>Likes testing and finding bugs.</p>  
      </Profilecard>
</div>
       <Button color="blue" size="large">
        Submit
      </Button>

      <Button color="green" size="medium">
        Save
      </Button>

      <Button color="red" size="small">
        Delete
      </Button>
    </>
  );
}

export default App;
    
