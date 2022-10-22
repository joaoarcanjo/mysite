import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './sections/About';
import { Hobbies } from './sections/Hobbies';
import NavBar from './Navigation/NavBar';
import "./App.css";
import Contacts from './sections/Contacts';

function AppRouter() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/Hobbies" element={<Hobbies/>}></Route>
          <Route path="/Contacts" element={<Contacts/>}></Route>
        </Routes>
      </Router>
  )
}

function App() {
  return (
    <>
      <AppRouter/>
    </>
  )
}


export default App;