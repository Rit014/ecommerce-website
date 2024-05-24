import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import { Routes, Route} from 'react-router-dom';
import Product from './Components/Product';
import CategoriesProducts from './Components/CategoriesProducts';
import Cart from './Components/Cart';
import ProductCard from './Components/ProductCard';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductCard />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categories/:name" element={<CategoriesProducts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div className="flex-row p-12 justify-center items-center text-2xl">Sorry! Page not found</div>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App;
