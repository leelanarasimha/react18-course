import { createContext, useContext, useEffect, useState } from 'react';

const cityContext = createContext(null);

export const CityProvider = ({ children }) => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState('');

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

  async function getCity(id) {
    try {
      setLoading(true);
      let response = await fetch(`${citiesUrl}/${id}`);
      let cities = await response.json();
      setCurrentCity(cities);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function setCity(city) {
    try {
      setLoading(true);
      let response = await fetch(`${citiesUrl}`, {
        method: 'POST',
        body: JSON.stringify(city),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let data = await response.json();
      setCities((cities) => [...cities, data]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setLoading(true);
      await fetch(`${citiesUrl}/${id}`, {
        method: 'DELETE'
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  let values = {
    cities,
    loading,
    getCity,
    currentCity,
    setCity,
    deleteCity
  };

  return <cityContext.Provider value={values}>{children}</cityContext.Provider>;
};

export const useCity = () => {
  const context = useContext(cityContext);
  if (!context) throw new Error('cityContext is used outside the provider');
  return context;
};
