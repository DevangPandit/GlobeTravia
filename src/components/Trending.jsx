import React from 'react';

const Trending = () => {
    const cards = [
        {
            img: '/images/trending1.jpg',
            title: 'Mountain Hikings',
            desc: 'Embark on an adventure to explore the world’s most awe-inspiring mountain landscapes.',
            price: '$599.99',
            rating: '7.8',
            reviews: '10',
            days: '6',
            halfStar: true
        },
        {
            img: '/images/trending2.jpg',
            title: 'Train Travelling',
            desc: 'Discover breathtaking landscapes and unforgettable moments on a scenic train journey.',
            price: '$399.99',
            rating: '8.5',
            reviews: '10',
            days: '4',
            halfStar: true
        },
        {
            img: '/images/trending3.jpg',
            title: 'Vibrant Beaches',
            desc: 'Embrace the radiant charm of sun-kissed beaches for an unforgettable coastal escape',
            price: '$449.99',
            rating: '9.2',
            reviews: '10',
            days: '6',
            halfStar: true
        },
        {
            img: '/images/trending4.jpg',
            title: 'Jungle Safari',
            desc: 'Discover nature\'s untamed beauty and adventure on thrilling jungle safari experience',
            price: '$468.49',
            rating: '8.8',
            reviews: '10',
            days: '6',
            halfStar: true
        },
        {
            img: '/images/trending5.webp',
            title: 'Family Tours',
            desc: 'Create Unforgettable Moments with Your Family - A Once in a Lifetime Experience Awaits',
            price: '$501.99',
            rating: '9.3',
            reviews: '10',
            days: '6',
            halfStar: true
        },
        {
            img: '/images/trending6.jpg',
            title: 'Buisness Meets',
            desc: 'Host Your Business Meetings Anywhere, Anytime—Seamlessly Across the Globe',
            price: '$349.99',
            rating: '7.5',
            reviews: '10',
            days: '6',
            halfStar: true
        }
    ];

    return (
        <div className="section_trending" id="trending">
            <div className="section_div">
                <h2 className="section_title">Trending 2025</h2>
                <div className="trending_div">
                    <span><i className="ri-arrow-left-s-line"></i></span>
                    <span><i className="ri-arrow-right-s-line"></i></span>
                </div>
            </div>
            <div className="trending_grid">
                {cards.map((card, index) => (
                    <div className="trending_card" key={index}>
                        <img src={card.img} alt={`trending${index + 1}`} />
                        <h1>{card.title}</h1>
                        <p>{card.desc}</p>
                        <div className="trending_details">
                            <div className="price">
                                <p>From</p>
                                <h3>{card.price}</h3>
                                <p>*Price differs</p>
                            </div>
                            <div className="trending_ratings">
                                <div>
                                    <span><i className="ri-star-fill"></i></span>
                                    <span><i className="ri-star-fill"></i></span>
                                    <span><i className="ri-star-fill"></i></span>
                                    <span><i className="ri-star-fill"></i></span>
                                    {card.halfStar && <span><i className="ri-star-half-fill"></i></span>}
                                </div>
                                <p>{card.rating} ({card.reviews})</p>
                            </div>
                            <div>
                                <h5>
                                    <span><i className="ri-time-line"></i></span> {card.days} days
                                </h5>
                                <p>
                                    <span><i className="ri-check-line"></i></span> Free Cancellation
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
