export default function Contact() {
    return (
        <div>

            {/* Hero Section */}
            <div
                className="text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/a0/e5/6d/a0e56db7a77b4c50cf8e04a64692cec1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "55vh",
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

                <div
                    className="container"
                    style={{ position: "relative", zIndex: 2 }}
                >
                    <h1
                        className="fw-normal"
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "3.5rem",
                            letterSpacing: "3px",
                        }}
                    >
                        CONTACT US
                    </h1>

                    <p className="text-white-50 mt-3">
                        We'd love to hear from you. Let's connect.
                    </p>
                </div>
            </div>

            {/* Contact Information */}
            <div
                className="py-5"
                style={{ backgroundColor: "#f5f1eb" }}
            >
                <div className="container">

                    <div className="text-center mb-5">

                        <p
                            className="fw-semibold small"
                            style={{ letterSpacing: "2px" }}
                        >
                            GET IN TOUCH
                        </p>

                        <h2
                            style={{
                                fontFamily: "Georgia, serif",
                                fontSize: "2.7rem",
                            }}
                        >
                            Contact Information
                        </h2>

                        <p
                            className="text-secondary mt-3 mx-auto"
                            style={{ maxWidth: "650px" }}
                        >
                            Whether you have a question about our collections,
                            your order, or simply want fashion advice, our team
                            is always here to help.
                        </p>

                    </div>

                    <div className="row text-center g-4">

                        {/* Phone */}

                        <div className="col-md-4">

                            <div
                                className="bg-white p-4 h-100 shadow-sm rounded-3"
                            >
                                <div
                                    className="mb-3"
                                    style={{ fontSize: "45px" }}
                                >
                                    📞
                                </div>

                                <h5
                                    style={{
                                        fontFamily: "Georgia, serif",
                                    }}
                                >
                                    Call Us
                                </h5>

                                <p className="fw-semibold mt-3">
                                    +92 300 1234567
                                </p>

                                <p className="text-secondary">
                                    Our support team is available Monday to
                                    Saturday from 9:00 AM to 7:00 PM.
                                </p>

                            </div>

                        </div>

                        {/* Email */}

                        <div className="col-md-4">

                            <div
                                className="bg-white p-4 h-100 shadow-sm rounded-3"
                            >
                                <div
                                    className="mb-3"
                                    style={{ fontSize: "45px" }}
                                >
                                    ✉️
                                </div>

                                <h5
                                    style={{
                                        fontFamily: "Georgia, serif",
                                    }}
                                >
                                    Email
                                </h5>

                                <p className="fw-semibold mt-3">
                                    support@zarastore.com
                                </p>

                                <p className="text-secondary">
                                    Send us your questions anytime and we'll get
                                    back to you within 24 hours.
                                </p>

                            </div>

                        </div>

                        {/* Address */}

                        <div className="col-md-4">

                            <div
                                className="bg-white p-4 h-100 shadow-sm rounded-3"
                            >
                                <div
                                    className="mb-3"
                                    style={{ fontSize: "45px" }}
                                >
                                    📍
                                </div>

                                <h5
                                    style={{
                                        fontFamily: "Georgia, serif",
                                    }}
                                >
                                    Visit Us
                                </h5>

                                <p className="fw-semibold mt-3">
                                    Karachi, Pakistan
                                </p>

                                <p className="text-secondary">
                                    Visit our office to discover the latest
                                    collections and experience Zara Store in
                                    person.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* Contact Form */}

            <div
                className="py-5"
                style={{ backgroundColor: "#1a1a1a" }}
            >

                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* Left */}

                        <div className="col-lg-5 text-white">

                            <p
                                className="fw-semibold"
                                style={{ letterSpacing: "2px" }}
                            >
                                CONTACT
                            </p>

                            <h2
                                className="mb-4"
                                style={{
                                    fontFamily: "Georgia, serif",
                                    fontSize: "3rem",
                                }}
                            >
                                Get In Touch
                            </h2>

                            <p className="text-white-50">
                                Fashion is personal, and so is our customer
                                experience. Whether you're looking for style
                                recommendations, order assistance, or general
                                information, we'd be delighted to hear from you.
                            </p>

                        </div>

                        {/* Right */}

                        <div className="col-lg-7">

                            <form>

                                <div className="row">

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            className="form-control"
                                            style={{
                                                background: "transparent",
                                                color: "white",
                                                border: "1px solid #777",
                                                padding: "14px",
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email Address"
                                            className="form-control"
                                            style={{
                                                background: "transparent",
                                                color: "white",
                                                border: "1px solid #777",
                                                padding: "14px",
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Phone Number"
                                            className="form-control"
                                            style={{
                                                background: "transparent",
                                                color: "white",
                                                border: "1px solid #777",
                                                padding: "14px",
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Subject"
                                            className="form-control"
                                            style={{
                                                background: "transparent",
                                                color: "white",
                                                border: "1px solid #777",
                                                padding: "14px",
                                            }}
                                        />
                                    </div>

                                    <div className="col-12 mb-4">

                                        <textarea
                                            rows="6"
                                            placeholder="Write your message..."
                                            className="form-control"
                                            style={{
                                                background: "transparent",
                                                color: "white",
                                                border: "1px solid #777",
                                                padding: "14px",
                                            }}
                                        ></textarea>

                                    </div>

                                    <div className="col-12">

                                        <button
                                            className="btn px-5 py-3"
                                            style={{
                                                backgroundColor: "#f5f1eb",
                                                color: "#1a1a1a",
                                                fontWeight: "600",
                                            }}
                                        >
                                            Send Message
                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
            {/* Google Map */}

            <div
                className="py-5"
                style={{ backgroundColor: "#f5f1eb" }}
            >
                <div className="container">

                    <div className="text-center mb-5">

                        <p
                            className="fw-semibold small"
                            style={{ letterSpacing: "2px" }}
                        >
                            VISIT US
                        </p>

                        <h2
                            style={{
                                fontFamily: "Georgia, serif",
                                fontSize: "2.6rem",
                            }}
                        >
                            Find Our Store
                        </h2>

                        <p
                            className="text-secondary mx-auto"
                            style={{ maxWidth: "650px" }}
                        >
                            Visit Zara Store and explore timeless collections,
                            premium fabrics, and fashion designed for every
                            season.
                        </p>

                    </div>

                    <div
                        className="shadow rounded-3 overflow-hidden"
                    >

                        <iframe
                            title="Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115809.00783641884!2d66.9905018!3d24.9417335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0f4b9a3f09%3A0x2e3f7dcddcb6805!2sKarachi!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                            width="100%"
                            height="420"
                            style={{
                                border: 0,
                            }}
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

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
                        className="mb-3"
                        style={{
                            fontFamily: "Georgia, serif",
                            fontSize: "2.7rem",
                        }}
                    >
                        Let's Create Your Perfect Style
                    </h2>

                    <p
                        className="text-white-50 mx-auto mb-4"
                        style={{ maxWidth: "650px" }}
                    >
                        Every great outfit begins with a conversation.
                        Whether you're shopping for everyday essentials
                        or timeless statement pieces, our team is here
                        to help.
                    </p>

                    <button
                        className="btn px-5 py-3"
                        style={{
                            backgroundColor: "#f5f1eb",
                            color: "#1a1a1a",
                            fontWeight: "600",
                        }}
                    >
                        Explore Collection
                    </button>

                </div>

            </div>

        </div>
    );
}