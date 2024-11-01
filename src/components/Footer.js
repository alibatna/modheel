// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box mt={5} py={3} bgcolor="#f8f8f8" textAlign="center">
            <Typography variant="body2" color="textSecondary">
                &copy; 2024 Modheel for Events Managements. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
