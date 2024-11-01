// src/pages/Blog.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Blog = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Our Blog
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to our blog! Here you will find the latest news, tips, and insights on products and services.
            </Typography>
        </Container>
    );
};

export default Blog;
