export default function About() {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1712830462928-f684c2ec5f52?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "80vh",
                    position: "relative",
                }}
            >
                {/* Dark Overlay */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.55)",
                    }}
                ></div>

                {/* Content */}
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <h1
                        className="fw-normal mb-2"
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "3.5rem",
                            letterSpacing: "3px",
                        }}
                    >
                        ABOUT US
                    </h1>

                    <p
                        className="text-white-50"
                        style={{ letterSpacing: "1px" }}
                    >
                        Meet the Story Behind Zara Store
                    </p>
                </div>
            </div>

            {/* Cream Section - Main Story */}
            <div className="py-5" style={{ backgroundColor: "#f5f1eb" }}>
                <div className="container text-center py-4">
                    <p className="fw-semibold small mb-3" style={{ letterSpacing: "2px" }}>
                        FASHION SHOULDN'T FEEL LIKE A COMPROMISE
                    </p>

                    <h2 className="mb-5 mx-auto" style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem", maxWidth: "700px", lineHeight: "1.3" }}>
                        We want everyone to spend less time searching and more time wearing <em>what they truly love</em>
                    </h2>

                    <div className="row mx-auto" style={{ maxWidth: "800px" }}>
                        <div className="col-md-6 text-start mb-3">
                            <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                                Zara Store began the way most good things do: a small idea, a
                                handful of products, and a vision that felt bigger than another
                                clothing store. At the time, quality fashion online felt out of
                                reach for most people.
                            </p>
                            <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                                The more we talked to customers, the more we realized what
                                they actually wanted — style that didn't cost a fortune, and
                                a shopping experience that felt personal, not overwhelming.
                            </p>
                        </div>
                        <div className="col-md-6 text-start mb-3">
                            <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                                We started as a small idea that slowly grew into a team that
                                cares deeply about what we do. We believe great fashion starts
                                with clarity, thoughtful design, and making customers feel seen.
                            </p>
                            <p className="text-secondary" style={{ fontSize: "0.95rem" }}>
                                Today, Zara Store is trusted by thousands across Pakistan —
                                and we're just getting started.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonial */}
                <div className="container py-4">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-3 mb-3">
                            <img
                                src="https://i.pinimg.com/1200x/d9/b8/39/d9b8390327f20cec58ca9395b171e6b5.jpg"
                                alt="Customer"
                                className="rounded-2 w-100"
                                style={{ height: "220px", objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-6">
                            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontStyle: "italic", lineHeight: "1.4" }}>
                                "Zara Store completely changed how I shop online. Everything
                                finally feels effortless and put together."
                            </p>
                            <p className="text-secondary mt-3" style={{ fontSize: "0.9rem" }}>
                                I never felt more confident in how I dress. The quality speaks
                                for itself, and the delivery was faster than I expected.
                            </p>
                            <p className="fw-semibold mt-3 fst-italic">— Sara Ahmed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dark Team/Collection Section */}
            <div className="text-white py-5" style={{ backgroundColor: "#1a1a1a" }}>
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-md-4">
                            <h2 className="fw-normal mb-3" style={{ fontFamily: "Georgia, serif", fontSize: "2.5rem" }}>
                                Meet Our Collection
                            </h2>
                            <p className="text-white-50 mb-4">
                                A closer look at what makes Zara Store different — quality
                                fabrics, timeless design, and pieces made to last.
                            </p>
                            <button className="btn btn-outline-light rounded-0 px-4 py-2">
                                Shop Now
                            </button>
                        </div>

                        <div className="col-md-4">
                            <img
                                src="https://i.pinimg.com/736x/50/3f/30/503f30c10ad2b822683afc2368ee60ae.jpg"
                                alt="Collection 1"
                                className="w-100 rounded-2 mb-2"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <p className="fw-semibold">Summer Collection</p>
                        </div>

                        <div className="col-md-4">
                            <img
                                src="https://i.pinimg.com/736x/05/f9/ad/05f9adfa034910bb6b9d4bef2f58722c.jpg"
                                alt="Winter Collection"
                                className="w-100 rounded-2 mb-2"
                                style={{ height: "300px", objectFit: "cover" }}
                            />
                            <p className="fw-semibold">Winter Collection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}