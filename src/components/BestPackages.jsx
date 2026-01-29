import React from 'react';

const BestPackages = () => {
    const packages = [
        {
            img: '/images/seller1.jpg',
            discount: '30%',
            duration: '10 Days | 9 Nights',
            price: '$846.77',
            title: 'Thailand Nightlife',
            desc: 'Experience the electrifying energy of Thailand\'s nightlife, where the fun never stops!'
        },
        {
            img: '/images/seller2.jpeg',
            discount: '35%',
            duration: '7 Days | 6 Nights',
            price: '$799.98',
            title: 'Maldives Honeymoon',
            desc: 'Discover paradise in the Maldives, where your honeymoon dreams come true!'
        },
        {
            img: '/images/seller3.jpg',
            discount: '35%',
            duration: '10 Days | 9 Nights',
            price: '$757.99',
            title: 'Jamaican Vacation',
            desc: 'Escape to the vibrant shores of Jamaica for sun, sand, and unforgettable memories!'
        },
        {
            img: '/images/seller4.jpg',
            discount: '40%',
            duration: '14 Days | 13 Nights',
            price: '$996.47',
            title: 'Cruize Trip - Goa',
            desc: 'Set sail for adventure on a luxurious cruise trip!'
        },
        {
            img: '/images/seller5.jpg',
            discount: '25%',
            duration: '11 Days | 10 Nights',
            price: '$1149.98',
            title: 'Hollywood Trip',
            desc: 'Lights, camera, adventure! Get ready to explore Hollywood\'s iconic sights and star-studded charm!'
        }
    ];

    return (
        <div className="section_seller">
            <div className="section_div" id="sell">
                <h2 className="section_title">Best Packages</h2>
                <div className="seller_div">
                    <button className="button">Check All</button>
                </div>
            </div>
            <div className="seller_grid">
                {packages.map((pkg, index) => (
                    <div className="seller_card" key={index}>
                        <div className="seller_image">
                            <img src={pkg.img} alt={`seller${index + 1}`} />
                            <div className="seller_image_content">
                                <div className="badge">{pkg.discount}</div>
                                <div className="seller_image_footer">
                                    <div className="seller_image_price">
                                        <p>{pkg.duration}</p>
                                        <h4>{pkg.price}</h4>
                                        <button className="button1">Explore</button>
                                    </div>
                                </div>
                            </div>
                            <div className="seller_details">
                                <h4>{pkg.title}</h4>
                                <p>{pkg.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestPackages;
