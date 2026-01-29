import React from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  return (
    <div className="section_member">
      <div className="member_div">
        <h4>Ready to explore? Join our travel family <br /> LogIn or SignUp and start your journey today!</h4>
        <div className="form" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginInline: 'auto' }}>
          <input type="email" placeholder="Enter your email address" style={{ border: 'none', outline: 'none', flex: 1, padding: '10px' }} />
          <Link to="/login" className="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: 'white', height: '50px' }}>
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
