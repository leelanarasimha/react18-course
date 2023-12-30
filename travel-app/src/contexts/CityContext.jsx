import { createContext, useContext, useEffect, useReducer, useState } from 'react';

const cityContext = createContext(null);

const initialState = {
  cities: [],
  loading: false,
  currentCity: '',
  error: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        loading: true
      };
    case 'cities/loaded':
      return {
        ...state,
        loading: false,
        cities: action.payload
      };
    case 'city/loaded':
      return {
        ...state,
        loading: false,
        currentCity: action.payload
      };
    case 'city/created':
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload]
      };
    case 'city/deleted':
      return {
        ...state,
        loading: false,
        cities: state.cities.filter((city) => city.id !== action.payload)
      };
    case 'rejected':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
  }
}

export const CityProvider = ({ children }) => {
  const [{ cities, loading, currentCity, error }, dispatch] = useReducer(reducer, initialState);

  const citiesUrl = 'http://localhost:9001/cities';
  async function fetchCities() {
    try {
      dispatch({ type: 'loading' });
      let response = await fetch(citiesUrl);
      let cities = await response.json();
      dispatch({ type: 'cities/loaded', payload: cities });
    } catch (e) {
      dispatch({ type: 'rejected', payload: 'error in fetching cities' });
    }
  }
  useEffect(function () {
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: 'loading' });
      let response = await fetch(`${citiesUrl}/${id}`);
      let cities = await response.json();
      dispatch({ type: 'city/loaded', payload: cities });
    } catch (e) {
      dispatch({ type: 'rejected', payload: 'error in getting city' });
    }
  }

  async function setCity(city) {
    try {
      dispatch({ type: 'loading' });
      let response = await fetch(`${citiesUrl}`, {
        method: 'POST',
        body: JSON.stringify(city),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let data = await response.json();
      dispatch({ type: 'city/created', payload: data });
    } catch (e) {
      dispatch({ type: 'rejected', payload: 'error in creating city' });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: 'loading' });
      await fetch(`${citiesUrl}/${id}`, {
        method: 'DELETE'
      });
      dispatch({ type: 'city/deleted', payload: id });
    } catch (e) {
      dispatch({ type: 'rejected', payload: 'error in deleting city' });
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
