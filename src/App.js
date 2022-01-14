import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Sidebar from './Components/Sidebar/index.js'
import Navbar from './Components/Navbar/index.js';
import Hero from './Hero'
import ContactUs from './Components/ContactUs/ContactUs.js';
import FooterBar from './Components/Footer/index'
import Visionggc from './Components/Mission&vission';
import Products from './Components/Products/Products';
import StoreLocations from './Components/StoreLoc/StoreLocations';
import SkinCare from './Components/Categories/SkinCare';
import BabyCare from './Components/Categories/BabyCare';
import HairCare from './Components/Categories/HairCare';
import ManiPedi from './Components/Categories/ManiPedi';
import WishList from './Components/WishList/WishList';
function App() {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Routes>
        <Route exact path='/' element={<Hero/>}/>
        <Route exact path='/vision' element={<Visionggc/>}/>
        <Route exact path='/contact-us' element={<ContactUs/>}/>
        <Route exact path='/products' element={<Products heading="Our Collections"/>}/>
        <Route exact path='/location' element={<StoreLocations/>}/>

        <Route exact path='/skincare' element={<SkinCare/>}/>
        <Route exact path='/babycare' element={<BabyCare/>}/>

        <Route exact path='/haircare' element={<HairCare/>}/>

        <Route exact path='/manipedi' element={<ManiPedi/>}/>


        <Route exact path='/wishlist' element={<WishList/>}/>




      </Routes>
      <FooterBar/>
      </Router>
     
    </div>
  );
}

export default App;
