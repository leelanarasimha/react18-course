import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import PageNav from './components/PageNav';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<div>Cities list</div>} />
            <Route path="cities" element={<div>Cities List</div>} />
            <Route path="countries" element={<div>Cuntries list</div>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
