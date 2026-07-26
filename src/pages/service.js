export default function Services() {
    return (
        <div>

            {/* Hero Section */}

            <div
                className="text-white d-flex align-items-center justify-content-center text-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1583922560876-3bfef1f5ee03?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "70vh",
                    position: "relative",
                }}
            >

                {/* Overlay */}

                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,.55)",
                    }}
                ></div>

                <div
                    className="container"
                    style={{ position: "relative", zIndex: "2" }}
                >

                    <h1
                        className="fw-normal"
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "3.8rem",
                            letterSpacing: "3px",
                        }}
                    >
                        OUR SERVICES
                    </h1>

                    <p
                        className="text-white-50 mt-3"
                        style={{ letterSpacing: "1px" }}
                    >
                        Timeless Fashion Crafted For Every Lifestyle
                    </p>

                </div>

            </div>

            {/* Services */}

            <div
                className="py-5"
                style={{ background: "#f5f1eb" }}
            >

                <div className="container">

                    <div className="text-center mb-5">

                        <p
                            className="fw-semibold"
                            style={{ letterSpacing: "2px" }}
                        >
                            WHAT WE OFFER
                        </p>

                        <h2
                            style={{
                                fontFamily: "Georgia, serif",
                                fontSize: "2.8rem",
                            }}
                        >
                            Fashion Designed Around You
                        </h2>

                        <p
                            className="text-secondary mx-auto mt-3"
                            style={{ maxWidth: "700px" }}
                        >
                            Discover thoughtfully curated collections that
                            combine premium quality, modern elegance,
                            and everyday comfort.
                        </p>

                    </div>

                    <div className="row g-4">

                        {/* Women's Collection */}

                        <div className="col-lg-4">

                            <div className="bg-white shadow-sm rounded-3 overflow-hidden h-100">

                                <img
                                    src="https://i.pinimg.com/736x/16/3a/87/163a87ca1d7ed379a8d044eced2c780b.jpg"
                                    className="w-100"
                                    style={{
                                        height: "320px",
                                        objectFit: "cover",
                                    }}
                                    alt=""
                                />

                                <div className="p-4">

                                    <h4
                                        style={{
                                            fontFamily: "Georgia, serif",
                                        }}
                                    >
                                        Women's Collection
                                    </h4>

                                    <p className="text-secondary mt-3">
                                        Elegant dresses, everyday essentials,
                                        and timeless outfits crafted for women
                                        who appreciate effortless style.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Men's Collection */}

                        <div className="col-lg-4">

                            <div className="bg-white shadow-sm rounded-3 overflow-hidden h-100">

                                <img
                                    src="https://i.pinimg.com/1200x/55/2e/62/552e624f923399fb76d4b5db363f0797.jpg"
                                    className="w-100"
                                    style={{
                                        height: "320px",
                                        objectFit: "cover",
                                    }}
                                    alt=""
                                />

                                <div className="p-4">

                                    <h4
                                        style={{
                                            fontFamily: "Georgia, serif",
                                        }}
                                    >
                                        Men's Collection
                                    </h4>

                                    <p className="text-secondary mt-3">
                                        Premium shirts, jackets, trousers,
                                        and wardrobe essentials tailored
                                        for modern men.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* Accessories */}

                        <div className="col-lg-4">

                            <div className="bg-white shadow-sm rounded-3 overflow-hidden h-100">

                                <img
                                    src="https://i.pinimg.com/736x/c7/e8/c7/c7e8c74942b3fc0f21c8ffbc34750997.jpg"
                                    className="w-100"
                                    style={{
                                        height: "320px",
                                        objectFit: "cover",
                                    }}
                                    alt=""
                                />

                                <div className="p-4">

                                    <h4
                                        style={{
                                            fontFamily: "Georgia, serif",
                                        }}
                                    >
                                        Accessories
                                    </h4>

                                    <p className="text-secondary mt-3">
                                        Complete your wardrobe with premium
                                        handbags, shoes, belts and stylish
                                        accessories for every occasion.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* Why Choose Us */}

            <div
                className="py-5"
                style={{ backgroundColor: "#1a1a1a" }}
            >
                <div className="container">

                    <div className="text-center text-white mb-5">

                        <p
                            className="fw-semibold"
                            style={{ letterSpacing: "2px" }}
                        >
                            WHY CHOOSE US
                        </p>

                        <h2
                            style={{
                                fontFamily: "Georgia, serif",
                                fontSize: "2.8rem",
                            }}
                        >
                            More Than Just Fashion
                        </h2>

                    </div>

                    <div className="row g-4">

                        <div className="col-md-3">
                            <div className="text-center text-white p-4">
                                <div style={{ fontSize: "45px" }}>✨</div>
                                <h5
                                    className="mt-3"
                                    style={{ fontFamily: "Georgia, serif" }}
                                >
                                    Premium Quality
                                </h5>

                                <p className="text-white-50 mt-3">
                                    Carefully selected fabrics designed for
                                    comfort, elegance and durability.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="text-center text-white p-4">
                                <div style={{ fontSize: "45px" }}>🚚</div>
                                <h5
                                    className="mt-3"
                                    style={{ fontFamily: "Georgia, serif" }}
                                >
                                    Fast Delivery
                                </h5>

                                <p className="text-white-50 mt-3">
                                    Reliable shipping across Pakistan with
                                    secure packaging.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="text-center text-white p-4">
                                <div style={{ fontSize: "45px" }}>↩️</div>
                                <h5
                                    className="mt-3"
                                    style={{ fontFamily: "Georgia, serif" }}
                                >
                                    Easy Returns
                                </h5>

                                <p className="text-white-50 mt-3">
                                    Hassle-free returns because customer
                                    satisfaction always comes first.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="text-center text-white p-4">
                                <div style={{ fontSize: "45px" }}>💎</div>
                                <h5
                                    className="mt-3"
                                    style={{ fontFamily: "Georgia, serif" }}
                                >
                                    Modern Style
                                </h5>

                                <p className="text-white-50 mt-3">
                                    Timeless collections inspired by
                                    contemporary fashion trends.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            {/* Featured Collection */}

            <div
                className="py-5"
                style={{ backgroundColor: "#f5f1eb" }}
            >
                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <img
                                src="https://i.pinimg.com/1200x/67/82/ac/6782ac00903250905f31219153469a9d.jpg"
                                alt="Fashion"
                                className="img-fluid rounded-3 shadow"
                                style={{ height: "600px",
                                    width: "100%",
                                 }}
                            />

                        </div>

                        <div className="col-lg-6">

                            <p
                                className="fw-semibold"
                                style={{ letterSpacing: "2px" }}
                            >
                                FEATURED COLLECTION
                            </p>

                            <h2
                                className="mb-4"
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "2.8rem",
                                }}
                            >
                                Designed To Be Worn Every Day
                            </h2>

                            <p className="text-secondary">
                                Our collections combine timeless silhouettes,
                                premium materials, and effortless elegance.
                                Every piece is designed to make everyday
                                dressing feel refined and comfortable.
                            </p>

                            <button
                                className="btn mt-4 px-4 py-2"
                                style={{
                                    backgroundColor: "#1a1a1a",
                                    color: "#fff",
                                }}
                            >
                                Shop Collection
                            </button>

                        </div>

                    </div>

                </div>
            </div>


            {/* CTA */}

            <div
                className="py-5 text-center text-white"
                style={{ backgroundColor: "#1a1a1a" }}
            >

                <div className="container">

                    <h2
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "3rem",
                        }}
                    >
                        Elevate Your Everyday Style
                    </h2>

                    <p
                        className="text-white-50 mx-auto mt-3"
                        style={{ maxWidth: "650px" }}
                    >
                        Discover fashion that blends confidence,
                        comfort, and timeless elegance. Explore our
                        newest arrivals and redefine your wardrobe.
                    </p>

                    <button
                        className="btn mt-4 px-5 py-3"
                        style={{
                            backgroundColor: "#f5f1eb",
                            color: "#1a1a1a",
                            fontWeight: "600",
                        }}
                    >
                        Explore Now
                    </button>

                </div>

            </div>

        </div>
    );
}