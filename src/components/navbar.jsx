import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/zara-logo.png" alt="Logo" className="nav-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/service">Service</Link></li>
                    </ul>

                    <div
                        className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill position-relative "
                        style={{ backgroundColor: "#f8f9fa", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.15)"}}
                    >
                        <i className="bi bi-cart-fill text-dark fs-5"></i>
                        <span className="text-black fw-semibold">Cart</span>

                        {cartCount > 0 && (
                            <span
                                className="position-absolute d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                    top: "-8px",
                                    right: "-8px",
                                    backgroundColor: "black",
                                    color: "white",
                                    width: "22px",
                                    height: "22px",
                                    fontSize: "0.75rem",
                                    fontWeight: "bold"
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}