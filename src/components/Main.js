// src/components/Main.js
import React, { useEffect, useState } from 'react';
import { Grid, Typography, CircularProgress, Alert } from '@mui/material';
import ProductCard from './ProductCard';
import { fetchProducts } from '../api';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (err) {
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <Alert severity="error">{error}</Alert>;

    return (
        <main className="container mt-4">
            <Typography variant="h4" gutterBottom>
                Welcome to Modheel for Events Managements
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Main;
