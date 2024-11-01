// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import About from './pages/About';
import Services from './pages/Services';
import PartnersRegistration from './pages/PartnersRegistration';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import MyAccount from './pages/MyAccount';
import ContactUs from './pages/ContactUs';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/partners-registration" element={<PartnersRegistration />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
                <Footer />
            </Router>
        </CartProvider>
    );
}

export default App;
