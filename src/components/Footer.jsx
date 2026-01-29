import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section_footer">
                <div className="footer_div">
                    <h3>Globe Travia</h3>
                    <p>Globe Travia opens doors to extraordinary adventures, <br /> connecting you to breathtaking destinations, <br />immersive experiences, and unforgettable
                        <br />journeys across the globe.</p>
                </div>

                <div className="footer_div">
                    <h3>Quick Links</h3>
                    <ul className="footer_ul">
                        <li className="footer_li"><a href="#header">Home</a></li>
                        <li className="footer_li"><a href="#trending">Trending</a></li>
                        <li className="footer_li"><a href="#destination">Destinations</a></li>
                        <li className="footer_li"><a href="#reviews">Reviews</a></li>
                        <li className="footer_li"><a href="mailto:panditdevang7@gmail.com">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer_div">
                    <h3>Our Features</h3>
                    <ul className="footer_ul">
                        <li className="footer_li">Vacation Packages</li>
                        <li className="footer_li">List of Tours</li>
                        <li className="footer_li">Destination Weeding</li>
                        <li className="footer_li">Family Tours</li>
                        <li className="footer_li">Buisness Deals</li>
                    </ul>
                </div>

                <div className="footer_div">
                    <h3>Follow Us</h3>
                    <div className="footer_a">
                        <a href=""><span><i className="ri-twitter-fill"></i></span></a>
                        <a href=""><span><i className="ri-facebook-fill"></i></span></a>
                        <a href=""><span><i className="ri-instagram-fill"></i></span></a>
                        <a href=""><span><i className="ri-linkedin-fill"></i></span></a>
                    </div>
                </div>
            </div>
            <p className="footer_p">Copyright &copy; 2024 Globe Travia. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
