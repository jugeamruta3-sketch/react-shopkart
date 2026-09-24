import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Navbar.css";
import { Themecontext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { state, dispatch } = useContext(Themecontext);
  const { state: cartState } = useContext(CartContext);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-container">

        <div className="logo">
          <Link to="/">ShopKart</Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-link">
            Cart
            <span className="cart-count" aria-label={`${cartState.cart.length} items in cart`}>
              {cartState.cart.length}
            </span>
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${state.theme === "light" ? "dark" : "light"} mode`}
          >
            {state.theme === "light" ? "Dark mode" : "Light mode"}
          </button>
        </div>

      </div>
    </nav>
  );
}


