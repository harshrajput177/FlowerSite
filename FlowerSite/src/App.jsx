import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from './Navbar'
import './App.css'
import Home from './Page/HomePage';
import Footer from './Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
     <Router>
     <Routes>

     <Route path="/"  element={<Home />}></Route>
      {/* <Route path="/Admin-Paneel-Product"  element={<AdminPannel />}></Route>
      <Route path="/Front-cards-Product"  element={<Cards />}></Route>
      <Route path="/Category-Front-cards"  element={<Category />}></Route>
      <Route path="/edit-product"  element={<EditProduct />}></Route>
      <Route path="/category/:category"  element={<ShowCategory />}></Route> */}
     </Routes>
     </Router>
      <Footer />
     </>
   
       
  
  )
}

export default App
