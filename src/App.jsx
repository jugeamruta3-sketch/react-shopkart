import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom'; 
import { Themecontext } from './context/ThemeContext';
import { useContext } from 'react';
function App() {
  const {state}=useContext(Themecontext)
  return (
    <div className={state.theme==='dark'?'app dark':'app light'}>    
    <Navbar/>
    <Outlet/>
    
    </div>
  )
}

export default App
