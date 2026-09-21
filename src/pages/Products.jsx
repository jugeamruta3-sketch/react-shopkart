import { useEffect, useMemo, useState } from "react";
import ProductCart from "../components/ProductCart";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products1")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch the API");
                }

                return response.json();
            })
            .then((data) => setProducts(data))
            .catch(() => setError("Something went wrong"));
    }, []);

    const filteredProducts = useMemo(
        () => products.filter((product) => product.price < 150),
        [products]
    );

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <>
            <h1>Products</h1>

            <div className="products-grid">
                {filteredProducts.map((product) => (
                    <ProductCart
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </>
    );
}