import Carousal from '../components/carousal';
import Card from '../components/card';

export default function Home({ setCartCount, apiData, setApiData }) {
    return (
        <>
            <div className="carousal-container">
                <Carousal />
            </div>
            <div className="container my-5">
                <div className="row g-4">
                    {apiData.map((item) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                            <Card
                                image={item.images[0]}
                                title={item.title}
                                description={item.description}
                                Price={`$${item.price}`}
                                setCartCount={setCartCount}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}