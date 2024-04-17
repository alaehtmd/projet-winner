import React from "react";
import Navbar from "./compo/nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './compo/home';
import About from './compo/about';
import Vente from './compo/vente';
import Regist from './compo/registrations';
import './App.css';

const App =() => {
    return( 
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/vente' element={<Vente />} />
            <Route path='/inscriptions' element={<Regist />} />
        </Routes>
        
    </Router>)
}
export default App;