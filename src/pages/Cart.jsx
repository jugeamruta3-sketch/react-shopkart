import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const { state, dispatch } = useContext(CartContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [message, setMessage] = useState(location.state?.message || "");

    useEffect(() => {
        if (!location.state?.message) {
            return;
        }

        setMessage(location.state.message);
        window.history.replaceState({}, document.title, window.location.href);

        const timer = window.setTimeout(() => setMessage(""), 2500);
        return () => window.clearTimeout(timer);
    }, [location.state]);

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>

            {message && <p className="cart-toast" role="status">{message}</p>}

            <div className="cart-items">
                {state.cart.length === 0 ? (
                    <h2>Your cart is empty</h2>
                ) : (
                    state.cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={item.image}
                                alt={item.title || "Product"}
                            />

                            <h3>{item.title}</h3>
                            <p>${Number(item.price).toFixed(2)}</p>

                            <button
                                type="button"
                                onClick={() => removeFromCart(item.id)}
                                aria-label={`Remove ${item.title} from cart`}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
                {state.cart.length > 0 && (
                    <button type="button" onClick={() => navigate("/payment")}>
                        Proceed To Payment
                    </button>
                )}
            </div>
        </div>
    );
}