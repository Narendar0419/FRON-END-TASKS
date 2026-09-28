import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Report from "./Pages/Report";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/Products" element={<Products />} />

        <Route path="/Report" element={<Report />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;