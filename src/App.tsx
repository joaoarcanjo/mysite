import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Qualifications from './sections/Qualifications';
import { Hobbies } from './sections/Hobbies';
import NavBar from './Navigation/NavBar';
import "./App.css";
import Contacts from './sections/Contacts';
import Home from './sections/About';

function AppRouter() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/qualifications" element={<Qualifications/>}></Route>
          <Route path="/Hobbies" element={<Hobbies/>}></Route>
          <Route path="/Contacts" element={<Contacts/>}></Route>
        </Routes>
      </Router>
  )
}

function App() {
  return <AppRouter/>
}


export default App;