// src/pages/ContactUs.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const ContactUs = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                Feel free to reach out to us for any inquiries or support. We are here to help!
            </Typography>
        </Container>
    );
};

export default ContactUs;
