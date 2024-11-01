// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { state } = useCart();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Modheel For Events Managements
                </Typography>
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Home</Button>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">About Us</Button>
                </Link>
                <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Services</Button>
                </Link>
                <Link to="/partners-registration" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Partners Registration</Button>
                </Link>
                <Link to="/events" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Events</Button>
                </Link>
                <Link to="/blog" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Blog</Button>
                </Link>
                <Link to="/shop" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Shop</Button>
                </Link>
                <Link to="/my-account" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">My Account</Button>
                </Link>
                <Link to="/contact-us" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Contact Us</Button>
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Cart ({state.cart.length})</Button>
                </Link>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Login</Button>
                </Link>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                    <Button color="inherit">Register</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
