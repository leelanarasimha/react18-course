import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CitiesList from './pages/CitiesList';
import CountryList from './pages/CountryList';
import CityDetails from './pages/cityDetails';
import AddCity from './pages/AddCity';

function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  const citiesUrl = 'http://localhost:9001/cities';
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
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate to="cities" replace />} />
            <Route path="cities" element={<CitiesList cities={cities} loading={loading} />} />
            <Route path="addcity" element={<AddCity />} />
            <Route path="cities/:cityId" element={<CityDetails />} />
            <Route path="countries" element={<CountryList cities={cities} loading={loading} />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
