import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from './Navbar';
import './App.css';
import Home from './Page/HomePage';
import About from './Page/AboutPage';
import Service from './Page/Services';
import Footer from './Footer';
import Contact from './Page/ContactPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
     <Routes>
     <Route path="/"  element={<Home />}></Route>
     <Route path="/about"  element={<About />}></Route>
     <Route path="/occasions"  element={<Service />}></Route>
     <Route path="/contact"  element={<Contact />}></Route>
     </Routes>
     <Footer />
     </>
   
       
  
  )
}

export default App
