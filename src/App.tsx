import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Qualifications from './sections/Qualifications';
import { Hobbies } from './sections/Hobbies';
import NavBar from './Navigation/NavBar';
import "./App.css";
import About from './sections/About';
import { OpenInContext } from './Navigation/OpenMenu';

function AppRouter() {
  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<About/>}></Route>
          <Route path="/qualifications" element={<Qualifications/>}></Route>
          <Route path="/Hobbies" element={<Hobbies/>}></Route>
        </Routes>
      </Router>
  )
}

function App() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const currentOpenMenuContext = { 
    isOpen: isMenuOpen,
    setState: setMenuOpen
}

  return (
    <div>
      <OpenInContext.Provider value={currentOpenMenuContext}>
          <AppRouter/>
      </OpenInContext.Provider>
    </div>
  )
}


export default App;