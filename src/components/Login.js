import React from 'react';
import axios from 'axios';
import apiClient from '../services/api';
import Navbar from './Navbar';
import Flights from './Flights';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
 
const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    //const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const { isLoggedIn, login, logout } = useAuth();
    const nav = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('api/login', {
                    email: email,
                    password: password
                }).then(response => {
                    if(response.status === 201) {
                        login();
                        nav("/");
                        console.log("uspio");
                    }
                })
            });
    }

    return (
        <div>
            {isLoggedIn ? (
                <div></div>
            ) : (
                <div>
                    <Navbar/>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )}
        </div>
    );
}
 
export default Login;