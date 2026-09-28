import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// function App() {
// const [name, setname]= useState("")
// const [display,setDisplay]=useState("")

//   function submitData() {
//     setDisplay(name);
//   }
//   return (
//     <>
//  <h1>1.Task submit button</h1>
//  <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter your name" />
// <button onClick={submitData}>submit</button>


// <h3>{display}</h3>


//     </>
//   )
// }

// export default App






//Task 02



// function App() {
//   const [name, setName] = useState("");
//   const [display, setDisplay] = useState("");

//   function showData() {
//     setDisplay(name);
//   }

//   return (
//     <>
//       <h2>2. Click / Double Click</h2>

//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter your name"
//       />

//       <br /><br />

//       <button
//          onClick={showData}
//         onDoubleClick={showData}
//       >
//         Click / Double Click
//       </button>

//       <h3>{display}</h3>
//     </>
//   );
// }

// export default App;



// Task 03

function App() {

  function showName(name) {
    alert("Hello " + name);
  }

  return (
    <>
      <h2>3. Passing a Value to an Event</h2>

      <button onClick={() => showName("Narendar")}>
        Click Me
      </button>
    </>
  );
}

export default App;