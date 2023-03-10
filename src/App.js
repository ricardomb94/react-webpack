import React from "react";
import {  Route, Routes } from "react-router-dom"
import DrawerAppBar from "./components/DrawerAppBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Ceremony from "./pages/Ceremony";
import { BrowserRouter as Router} from 'react-router-dom';


const App = () => {
  return (
    <Router>
        <DrawerAppBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/ceremony" element={<Ceremony/>}/>
        </Routes>
    </Router>
  )
}

export default App