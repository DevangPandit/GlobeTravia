import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <nav className="nav_logo" style={{ justifyContent: 'space-between', padding: '10px 40px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/images/GlobeTravia.png" alt="Logo" style={{ height: '50px', width: '55px' }} />
                    <div className="nav_div">
                        <Link to="/" style={{ textDecoration: 'none', color: '#1a2238', fontSize: '24px' }}>GlobeTravia</Link>
                    </div>
                </div>

                {/* Always show hamburger as requested */}
                <div className="hamburger" onClick={toggleSidebar}>
                    <i className="ri-menu-3-line"></i>
                </div>
            </nav>

            {/* Sidebar Overlay */}
            {isSidebarOpen && <div className="sidebar_overlay" onClick={closeSidebar}></div>}

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar_header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src="/images/GlobeTravia.png" alt="Logo" style={{ height: '40px', borderRadius: '50%' }} />
                        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>GlobeTravia</span>
                    </div>
                    <div className="sidebar_close" onClick={closeSidebar}>
                        <i className="ri-close-line"></i>
                    </div>
                </div>
                <ul className="sidebar_links">
                    <li><Link to="/" onClick={closeSidebar}><i className="ri-home-line"></i> Home</Link></li>
                    <li><a href="/#trending" onClick={closeSidebar}><i className="ri-fire-line"></i> Trending</a></li>
                    <li><a href="/#destination" onClick={closeSidebar}><i className="ri-map-pin-line"></i> Destinations</a></li>
                    <li><a href="/#reviews" onClick={closeSidebar}><i className="ri-chat-3-line"></i> Reviews</a></li>
                    <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />
                    <li><Link to="/login" onClick={closeSidebar} className="sidebar-login" style={{ color: 'red', fontWeight: 'bold' }}><i className="ri-user-line"></i> LogIn</Link></li>
                    <li><Link to="/create" onClick={closeSidebar} style={{ color: 'green', fontWeight: 'bold' }}><i className="ri-user-add-line"></i> Create Account</Link></li>
                </ul>
                <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '12px', color: '#999' }}>
                    &copy; 2024 Globe Travia
                </div>
            </div>
        </>
    );
};

export default Navbar;
