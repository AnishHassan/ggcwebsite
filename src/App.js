import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Sidebar from './Components/Sidebar/index.js'
import Navbar from './Components/Navbar/index.js';
import Hero from './Hero'
import ContactUs from './Components/ContactUs/ContactUs.js';
import FooterBar from './Components/Footer/index'
import Visionggc from './Components/Mission&vission/Visionggc'
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

      </Routes>
      <FooterBar/>
      </Router>
     
    </div>
  );
}

export default App;
