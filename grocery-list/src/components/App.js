import AddItem from './AddItem';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import ItemsList from './ItemsList';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AddItem />
        <ItemsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
