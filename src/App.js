import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Checkout from './component/checkout';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Ragister from './component/Ragister';

function App() {
  return (
    <>
     <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Ragister/>}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/products/:id" element={<Product/>} />
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
    </>
     
  );
}

export default App;
