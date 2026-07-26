import { useState } from 'react';

export default function Card({ image, title, description, Price, setCartCount }) {
    const [quantity, setQuantity] = useState(0);

    function increase() {
        setQuantity((prev) => prev + 1);
    }

    function decrease() {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    }

    function handleAddToCart() {
        setCartCount((prev) => prev + quantity);
        setQuantity(0);
    }

    return (
        <div className="card h-100 shadow-sm">
            <img
                src={image}
                className="card-img-top"
                alt={title}
                style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-muted small flex-grow-1">
                    {description}
                </p>
                <p className="card-text fw-bold">{Price}</p>

                <div className="d-flex align-items-center gap-2 mb-3 ">
                    <button type="button"
                        className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
                        style={{ width: "32px", height: "32px", fontSize: "1.1rem" }}
                        onClick={decrease}>-</button>
                    <span className="fw-bold">{quantity}</span>
                    <button type="button"
                        className="d-flex align-items-center justify-content-center rounded-circle border bg-white"
                        style={{ width: "32px", height: "32px", fontSize: "1.1rem" }}
                        onClick={increase}>+</button>
                    <button type="button" className="btn btn-dark w-50" onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>

            </div>
        </div>
    );
}