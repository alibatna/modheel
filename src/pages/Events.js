// src/pages/Events.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const Events = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Upcoming Events
            </Typography>
            <Typography variant="body1" paragraph>
                Stay tuned for our upcoming events where we showcase our latest products and features!
            </Typography>
        </Container>
    );
};

export default Events;
