import AddItem from './AddItem';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
  return (
    <div className="container">
      <Header />
      <AddItem />
      <ItemsList />
      <Footer />
    </div>
  );
}

export default App;
