import HomePage from "./layouts/HomePage/HomePage";
import Products from "./layouts/Products/Products";

import Navbars from "./components/Header/Navbars/Navbars";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from 'react-router-dom'
import { Basket } from "./layouts/Basket/Basket";
import { OfficialDelivery } from "./layouts/OfficialDelivery/OfficialDelivery";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path='/' element={< HomePage />}/>
        <Route path='/products' element={<Products />}/>
        <Route path="/basket" element={<Basket/>}/>
        <Route path="/delivery" element={<OfficialDelivery />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
