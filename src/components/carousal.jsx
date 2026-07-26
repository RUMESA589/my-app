export default function Carousal() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.pinimg.com/736x/84/21/df/8421df9b19a711bd46b2dec33594fe35.jpg" className="d-block carousal-image w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://i.pinimg.com/1200x/3b/fd/0d/3bfd0d6acf20003655dad62ebbe5229e.jpg" className="d-block  carousal-image w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://i.pinimg.com/1200x/42/ae/fb/42aefb44c057ae2adcaa2028b2734dd6.jpg" className="d-block carousal-image w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )


}