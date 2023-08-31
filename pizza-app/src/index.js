import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { fontSize: '24px', color: 'red', textTransform: 'uppercase' };
  return (
    <div className="header">
      <h1>Leela Pizza App</h1>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>Please select the Pizza from the List</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOlD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const openHour = 11;
  const closedHour = 23;
  const isOpen = currentHour >= openHour && currentHour <= closedHour;
  console.log(isOpen);

  if (!isOpen) {
    return <p>We are closed!!</p>;
  }

  return (
    <footer className="footer">
      {isOpen ? <Order closedHour={closedHour} openHour={openHour} /> : <p>We are closed!!</p>}
    </footer>
  );
}

function Order({ openHour, closedHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closedHour}:00. Come and visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
