// src/components/Register.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import { auth, googleProvider, facebookProvider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User registered successfully!');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert('User signed in with Google!');
        } catch (err) {
            setError(err.message);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
            await signInWithPopup(auth, facebookProvider);
            alert('User signed in with Facebook!');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Box className="container mt-5">
            <Typography variant="h4">Register</Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <form onSubmit={handleRegister}>
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
                    Register
                </Button>
            </form>
            <Box mt={2}>
                <Button variant="contained" color="secondary" onClick={handleGoogleSignIn} fullWidth>
                    Register with Google
                </Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleFacebookSignIn} fullWidth>
                    Register with Facebook
                </Button>
            </Box>
        </Box>
    );
};

export default Register;
