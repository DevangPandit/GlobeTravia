import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Create.css';

const Create = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePass, setRePass] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const navigate = useNavigate();

    const validateAll = (e) => {
        e.preventDefault();
        let isValid = true;

        if (email === "") {
            setErrorEmail("This field must be filled.");
            isValid = false;
        } else {
            setErrorEmail("");
        }

        if (password !== rePass) {
            setErrorPassword("password does not matches.");
            isValid = false;
        } else if (password === "") {
            setErrorPassword("password does not matches.");
            isValid = false;
        } else {
            setErrorPassword("");
        }

        if (isValid) {
            alert('Account created successfully!');
            navigate('/login');
        }
    };

    return (
        <div className="section_main">
            <div className="section_contact">
                <div className="section_logo">
                    <img src="/images/GlobeTravia.png" alt="logo" />
                    <div className="header">Globe Travia</div>
                </div>
                <div className="section_sign">
                    <h2 style={{ marginBottom: '20px', color: '#1a2238' }}>Create Account</h2>
                    <form name="myForm" onSubmit={validateAll}>
                        <input
                            name="femail"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '100%' }}
                        /><br />
                        <div id="error-message" className="error" style={{ color: 'red', fontSize: '12px' }}>{errorEmail}</div>
                        <input
                            name="fpass"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '100%' }}
                        /><br />
                        <input
                            name="frepass"
                            type="password"
                            placeholder="Re-Enter password"
                            value={rePass}
                            onChange={(e) => setRePass(e.target.value)}
                            style={{ margin: '10px 0', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', width: '100%' }}
                        />
                        <div id="error-message1" className="error1" style={{ color: 'red', fontSize: '12px' }}>{errorPassword}</div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', margin: '10px 0' }}>
                            <input type="checkbox" style={{ margin: 0 }} />
                            <span style={{ fontSize: '14px', color: '#1a2238' }}>Remember me</span>
                        </div>
                        <button type="submit" className="button" style={{
                            width: '100%',
                            backgroundColor: 'green',
                            color: 'white',
                            padding: '12px',
                            borderRadius: '5px',
                            border: 'none',
                            fontWeight: '700',
                            cursor: 'pointer',
                            marginTop: '10px'
                        }}>Create Account</button>
                    </form>
                    <hr style={{ margin: '20px 0' }} />
                    <p style={{ fontSize: '14px' }}>Join with us on</p>
                    <div className="section_links" style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '10px 0' }}>
                        <a href=""><i className="ri-twitter-fill" style={{ fontSize: '24px', color: '#1da1f2' }}></i></a>
                        <a href=""><i className="ri-facebook-fill" style={{ fontSize: '24px', color: '#1877f2' }}></i></a>
                        <a href=""><i className="ri-instagram-fill" style={{ fontSize: '24px', color: '#e4405f' }}></i></a>
                        <a href=""><i className="ri-linkedin-fill" style={{ fontSize: '24px', color: '#0a66c2' }}></i></a>
                    </div>
                    <p style={{ marginTop: '15px', fontSize: '14px' }}>
                        Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>LogIn</Link>
                    </p>
                    <Link to="/" style={{ display: 'block', marginTop: '15px', color: '#64748b', fontSize: '14px', textDecoration: 'none' }}>Back to Home</Link>
                </div>
            </div>
            <footer className="section_footer" style={{ position: 'fixed', bottom: '0', width: '100%', padding: '15px 0', background: 'white' }}>
                <p style={{ textAlign: 'center', color: '#64748b', margin: 0 }}>Copyright &copy; 2024 Globe Travia. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Create;
