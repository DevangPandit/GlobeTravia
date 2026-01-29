import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <div className="section_main">
            <div className="section_contact">
                <div className="section_logo">
                    <img src="/images/GlobeTravia.png" alt="logo" />
                    <div className="header">Globe Travia</div>
                </div>
                <div className="section_login">
                    <h2 style={{ marginBottom: '20px', color: '#1a2238' }}>LogIn</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            style={{ margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '100%' }}
                        /><br />
                        <input
                            type="password"
                            placeholder="Enter password"
                            required
                            style={{ margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '100%' }}
                        /><br />
                        <button type="submit" className="button" style={{
                            width: '100%',
                            backgroundColor: '#007bff',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '5px',
                            border: 'none',
                            fontWeight: '700',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}>Log In</button>
                        <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                            <input type="checkbox" style={{ margin: 0 }} />
                            <span style={{ fontSize: '14px', color: '#1a2238' }}>Remember me</span>
                        </div>
                        <p style={{ cursor: 'pointer', color: '#007bff', fontSize: '14px', marginBottom: '10px' }}>Forget password?</p>
                        <hr style={{ margin: '20px 0' }} />
                        <Link to="/create" style={{
                            display: 'block',
                            backgroundColor: 'green',
                            color: 'white',
                            textDecoration: 'none',
                            padding: '12px',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            marginTop: '10px',
                            textAlign: 'center'
                        }}>
                            Create Account
                        </Link>
                    </form>
                    <p style={{ marginTop: '20px', fontSize: '14px' }}>Join with us on</p>
                    <div className="section_links" style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '10px 0' }}>
                        <a href=""><i className="ri-twitter-fill" style={{ fontSize: '24px', color: '#1da1f2' }}></i></a>
                        <a href=""><i className="ri-facebook-fill" style={{ fontSize: '24px', color: '#1877f2' }}></i></a>
                        <a href=""><i className="ri-instagram-fill" style={{ fontSize: '24px', color: '#e4405f' }}></i></a>
                        <a href=""><i className="ri-linkedin-fill" style={{ fontSize: '24px', color: '#0a66c2' }}></i></a>
                    </div>
                    <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#64748b', fontSize: '14px', textDecoration: 'none' }}>Back to Home</Link>
                </div>
            </div>
            <footer className="section_footer" style={{ position: 'fixed', bottom: '0', width: '100%', padding: '15px 0', background: 'white' }}>
                <p style={{ textAlign: 'center', color: '#64748b', margin: 0 }}>Copyright &copy; 2024 Globe Travia. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Login;
