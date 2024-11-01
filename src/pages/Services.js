// src/pages/Services.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Services = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Our Services
            </Typography>
            <Typography variant="body1" paragraph>
                We offer a wide range of services including product delivery, customer support, and personalized shopping experiences.
            </Typography>
        </Container>
    );
};

export default Services;
