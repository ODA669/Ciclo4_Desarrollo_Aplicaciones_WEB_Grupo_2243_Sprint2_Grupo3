import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import CrearOrden from './pages/CrearOrden';
  
function App() {
  return (
    <React.Fragment>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/CrearOrden' element={<CrearOrden/>} />
        </Routes>
      </Router>
    </React.Fragment>
    
  );
}
  
export default App;