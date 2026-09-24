import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./ProductCart.css";

function ProductCart({ id, title, price, image }) {
    const { dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, title, price, image },
        });
        navigate("/cart", { state: { message: "Product added to cart" } });
    };

    return (
        <div className="product-card">
            <div className="product-image-frame">
                <img src={image} alt={title || "Product"} />
            </div>

            <h3>{title}</h3>
            <p className="product-price">${Number(price).toFixed(2)}</p>
            <button
                className="add-cart-btn"
                type="button"
                onClick={handleAddToCart}
                aria-label={`Add ${title} to cart`}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default memo(ProductCart);
