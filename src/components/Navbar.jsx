import {useContext, useReducer} from 'react'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'
import { Link } from 'react-router-dom'

import { Themecontext } from '../context/ThemeContext'

export default function Navbar(){
 const{state,dispatch}=useContext(Themecontext);


  return (
    <nav
        style={{
            padding: "10px",
            background: "black",
            color: "white",
        }}
      >
        
          <Link to="">Home</Link> 
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
<button
  classname="theme-btn"
  onclick={()=>
  
    dispatch({type:"TOGGLE_THEME"})}

  
  
  >
  {state.theme==="light"?"lightmode":"Darkmode"}
</button>
 </nav>

   
  );
}


