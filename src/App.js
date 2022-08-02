import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import  {UserAuthContextProvider}  from "./context/UserAuthContext";
import Profile from './components/Profile';
window.isRegiLogin = false;
function App() {
  return (
      <>
        <UserAuthContextProvider>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Watch-Mart" element={<Home />}/>
            <Route exact path="/product" element={<Product />}/>
            <Route exact path="/product/:id" element={<SingleProduct/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/profile" element={<Profile />}/>
        </Routes>
        </UserAuthContextProvider>
        <Footer />
      </>
  );
}

export default App;
