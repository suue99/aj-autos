
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Menubar from './Components/Navbar';
import Buycar from './Components/Buycar';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';


function App() {
  return (
   <div>
      <BrowserRouter>
        <Menubar/>


        <Routes>

            <Route path = "/" element = {<Home />} />
            <Route path = "/buycars" element = {<Buycar />} />
            <Route path = "/services" element = {<Services />} />
            <Route path = "/contact-us" element = {<Contact />} />
            
        </Routes>
      
      
      </BrowserRouter>





   </div>
  );
}

export default App;
