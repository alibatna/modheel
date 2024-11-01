// src/components/Login.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Box className="container mt-5">
            <Typography variant="h4">Login</Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </Box>
    );
};

export default Login;
