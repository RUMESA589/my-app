import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/aboutus';
import Contact from './pages/contactus';
import Service from './pages/service';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [apiData, setApiData] = useState([])
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setApiData(data.products)
      }
      fetchData();
    },
    []
  );
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar cartCount={cartCount} />

        <Routes>
          <Route path="/" element={<Home setCartCount={setCartCount} setApiData={setApiData} apiData={apiData} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;