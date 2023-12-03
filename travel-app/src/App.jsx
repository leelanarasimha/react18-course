import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CitiesList from './pages/CitiesList';

function App() {
  const [cities, setCities] = useState('');
  const [loading, setLoading] = useState(false);
  const citiesUrl = 'http://localhost:9000/cities';
  async function fetchCities() {
    try {
      setLoading(true);
      let response = await fetch(citiesUrl);
      let cities = await response.json();
      setCities(cities);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  useEffect(function () {
    fetchCities();
  });

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CitiesList cities={cities} loading={loading} />} />
            <Route path="cities" element={<CitiesList cities={cities} loading={loading} />} />
            <Route path="countries" element={<div>Cuntries list</div>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
