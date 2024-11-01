// src/pages/About.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to our e-commerce store! We aim to provide the best products to our customers.
                Our mission is to deliver quality service and foster lasting relationships with our clients.
            </Typography>
        </Container>
    );
};

export default About;
