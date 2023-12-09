import { createContext, useContext, useEffect, useState } from 'react';

const cityContext = createContext(null);

export const CityProvider = ({ children }) => {
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

  return <cityContext.Provider value={{ cities, loading }}>{children}</cityContext.Provider>;
};

export const useCity = () => {
  const context = useContext(cityContext);
  if (!context) throw new Error('cityContext is used outside the provider');
  return context;
};
