import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            img: '/images/client1.avif',
            name: 'Devang Pandit',
            role: 'Buisnessman',
            text: '"Exceptional service! The travel company handled every detail seamlessly, from booking flights to organizing excursions. Our itinerary was well-planned, and the guides were knowledgeable and friendly. Communication was clear and prompt throughout. Thanks to their expertise, we enjoyed a stress-free and memorable trip. Highly recommend their services!"'
        },
        {
            img: '/images/client2.avif',
            name: 'Khusmit Patel',
            role: 'Manager',
            text: '"Impressive train service! The journey was smooth, comfortable, and on time. The staff was courteous and attentive, ensuring we had everything we needed. The seats were spacious, food was delicious, and amenities exceeded our expectations. It was truly a hassle-free and enjoyable travel experience. Highly recommend for any train journey!"'
        },
        {
            img: '/images/client3.avif',
            name: 'Rex Parmar',
            role: 'Engineer',
            text: '"Fantastic cruise experience! The staff was friendly, the cabins were spotless, and the onboard amenities made the trip unforgettable. The food was delicious, with plenty of options, and entertainment was top-notch. Every detail was well taken care of, making our cruise smooth and enjoyable. Highly recommend their cruise services!"'
        }
    ];

    return (
        <div className="section_reviews" id="reviews">
            <div className="section_div" id="revs">
                <h2 className="section_title">Reviews</h2>
                <div className="seller_div">
                    <button className="button">Check All</button>
                </div>
            </div>
            <div className="reviews_grid">
                {reviews.map((rev, index) => (
                    <div className="reviews_card" key={index}>
                        <div className="reviews_card_header">
                            <span><i className="ri-double-quotes-r"></i></span>
                            <div className="reviews_ratings">
                                <span><i className="ri-star-fill"></i></span>
                                <span><i className="ri-star-fill"></i></span>
                                <span><i className="ri-star-fill"></i></span>
                                <span><i className="ri-star-fill"></i></span>
                                <span><i className="ri-star-half-fill"></i></span>
                            </div>
                        </div>
                        <p className="reviews_card_para">{rev.text}</p>
                        <div className="reviews_card_footer">
                            <img src={rev.img} alt={`client${index + 1}`} />
                            <div className="client_details">
                                <h4>{rev.name}</h4>
                                <p>{rev.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
