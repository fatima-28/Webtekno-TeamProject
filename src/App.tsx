import HomePage from "./layouts/HomePage/HomePage";
import Products from "./layouts/Products/Products";

import Navbars from "./components/Header/Navbars/Navbars";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from 'react-router-dom'

//! Header folder-nin icinde Navbar folderi yarat
function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={< HomePage />}/>
        <Route path='/products' element={<Products />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
