// src/components/ProductCard.js
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        alert(`Added ${product.name} to cart`);
    };

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {product.description}
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        ${product.price.toFixed(2)}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Button size="small" color="primary" onClick={handleAddToCart}>
                Add to Cart
            </Button>
        </Card>
    );
};

export default ProductCard;
