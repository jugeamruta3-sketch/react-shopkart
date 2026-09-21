import React from "react";
 function ProductCart({ title, price, image }) {
    return (
        <div className="product-card">
            <div className="product-image-frame">
                <img src={image} alt={title} />
            </div>

            <h3>{title}</h3>
            <p>${price}</p>
            <a href="#" className="product-button">
                Add to Cart
            </a>
        </div>
    );
}
export default React.memo(ProductCart);
