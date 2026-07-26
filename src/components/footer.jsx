export default function Footer() {
    return (
        <footer className="text-center text-lg-start bg-light text-dark">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3 mb-4">
                        <a href="/" className="d-inline-flex align-items-center mb-2 text-decoration-none">
                            <img src="/assets/zara-logo.png" alt="Logo" style={{ height: "40px" }} />
                        </a>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Section</h5>
                        <ul className="nav flex-column footer-links">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0  ">Home</a></li>
                            <li className="nav-item mb-2"><a href="/features" className="nav-link p-0  ">Features</a></li>
                            <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0  ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0  ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/about" className="nav-link p-0  ">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Section</h5>
                        <ul className="nav flex-column footer-links">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0  ">Home</a></li>
                            <li className="nav-item mb-2"><a href="/features" className="nav-link p-0  ">Features</a></li>
                            <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0  ">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0  ">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/about" className="nav-link p-0  ">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-4">
                        <h5 className="mb-3">Subscribe to our newsletter</h5>
                        <p className=" ">Monthly digest of what's new and exciting from us.</p>
                        <form className="d-flex flex-column flex-sm-row gap-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                                aria-label="Email address"
                            />
                            <button className="btn btn-dark" type="button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="border-secondary" />

                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-4">
                    <p className="  mb-3 mb-sm-0">© 2026 Company, Inc. All rights reserved.</p>
                    <div className="d-flex gap-3">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                            <i className="bi bi-instagram fs-5"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                            <i className="bi bi-facebook fs-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}