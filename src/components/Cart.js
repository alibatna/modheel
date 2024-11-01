// src/components/Cart.js
import React from 'react';
import { useCart } from '../context/CartContext';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { state, dispatch } = useCart();

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    };

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <Box className="container mt-4">
            <Typography variant="h4">Your Cart</Typography>
            {state.cart.length === 0 ? (
                <Box>
                    <Typography>Your cart is empty.</Typography>
                    <Link to="/">
                        <Button variant="contained" color="primary">
                            Browse Products
                        </Button>
                    </Link>
                </Box>
            ) : (
                <>
                    <List>
                        {state.cart.map((item) => (
                            <ListItem key={item.id}>
                                <ListItemText primary={item.name} />
                                <Button variant="contained" color="secondary" onClick={() => handleRemove(item.id)}>
                                    Remove
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <Button variant="contained" color="error" onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                </>
            )}
        </Box>
    );
};

export default Cart;
