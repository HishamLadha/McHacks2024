import React, { useState } from 'react';

function Front() {
    // State for managing input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would usually handle the login logic, perhaps sending a request to your backend server
        console.log('Login Submitted', { username, password });
    };

    // Inline style for the background
    const pageStyle = {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        width: '100vw', // This will ensure that the background covers the full viewport width
        backgroundImage: 'url("../public/white-hat-bg.jpg")', // The correct path for public directory
        backgroundSize: '', // Ensure it covers the entire viewport
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundColor: "0F172A"
    };

    return (
        <div style={pageStyle}>
            <div style={{ width: '300px', background: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', margin: '0 0 20px 0' }}>Login to Your Account</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="username" style={{ marginBottom: '5px' }}>Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                        style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <label htmlFor="password" style={{ marginBottom: '5px' }}>Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                        style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ddd' }}
                    />
                    <button
                        type="submit"
                        style={{ padding: '10px', border: 'none', backgroundColor: '#333', color: 'white', cursor: 'pointer', borderRadius: '5px', marginBottom: '20px' }}
                    >
                        Login
                    </button>
                </form>
                <div style={{ textAlign: 'center', fontSize: '0.9em' }}>
                    <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Forgot password?</a>
                </div>
                <div style={{ textAlign: 'center', fontSize: '0.9em', marginTop: '20px' }}>
                    Don't have an account? <a href="#" style={{ color: '#333', textDecoration: 'none' }}>Sign up</a>
                </div>
            </div>
        </div>
    );
}

export default Front;
