import React from 'react';

const Hero = () => {
    return (
        <header className="hero-header" id="header">
            <div className="header_div">
                <h1>Explore the beauty of nature Discover the new you</h1>
                <div className="header_form">
                    <form action="/" onSubmit={(e) => e.preventDefault()}>
                        <div className="info_div">
                            <label htmlFor="destination">Where do you want to go</label>
                            <input type="text" placeholder="Country, City" />
                        </div>
                        <div className="info_div">
                            <label htmlFor="checkIn">CheckIn</label>
                            <input type="date" />
                        </div>
                        <div className="info_div">
                            <label htmlFor="checkOut">CheckOut</label>
                            <input type="date" />
                        </div>
                        <div className="info_div">
                            <label htmlFor="guests">Guests</label>
                            <input type="text" placeholder="Number of guests" />
                        </div>
                        <button className="button" id="check" style={{ marginLeft: '120px' }}>CHECK AVAILABILITY</button>
                    </form>
                </div>
            </div>
        </header>
    );
};

export default Hero;
