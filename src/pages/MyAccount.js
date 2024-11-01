// src/pages/MyAccount.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const MyAccount = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                My Account
            </Typography>
            <Typography variant="body1" paragraph>
                Manage your account settings, view order history, and update your profile here.
            </Typography>
        </Container>
    );
};

export default MyAccount;
