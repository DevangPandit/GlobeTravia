import React from 'react';

const Destinations = () => {
    const items = [
        { img: '/images/Bali.jpg', rating: '4.6', name: 'Bali', tags: 'Beaches | Wildlife' },
        { img: '/images/Dubai.jpg', rating: '4.5', name: 'Dubai', tags: 'Beaches | Skyline' },
        { img: '/images/London.jpg', rating: '4.7', name: 'London', tags: 'Nightlife | British Monumentry' },
        { img: '/images/Miami.jpg', rating: '4.9', name: 'Miami', tags: 'Beaches | Nightlife' },
        { img: '/images/Newyork.jpg', rating: '4.3', name: 'Newyork', tags: 'Buisness | Skyline' },
        { img: '/images/Paris.webp', rating: '4.7', name: 'Paris', tags: 'French Monuments' },
        { img: '/images/Rio.jpeg', rating: '4.6', name: 'Rio', tags: 'Mountains | Amazon', id: 'd7' },
        { img: '/images/Sydney.webp', rating: '4.6', name: 'Sydney', tags: 'Beaches | Wildlife' },
        { img: '/images/Toronto.jpg', rating: '4.5', name: 'Toronto', tags: 'Skyline | Funpark' },
        { img: '/images/Agra.webp', rating: '4.8', name: 'Agra', tags: 'Historical | Travel' },
        { img: '/images/Islamabad1.jpg', rating: '4.6', name: 'Islamabad', tags: 'Beauty | Nature', id: 'isl_dest' }
    ];

    return (
        <div className="section_destination" id="destination">
            <div className="section_div" id="dest">
                <h2 className="section_title">Top Destinations</h2>
                <div className="trending_div">
                    <span><i className="ri-arrow-left-s-line"></i></span>
                    <span><i className="ri-arrow-right-s-line"></i></span>
                </div>
            </div>
            <div className="destination_grid">
                {items.map((item, index) => (
                    <div className="destination_card" key={index}>
                        <img src={item.img} alt={`destination${index + 1}`} id={item.id} />
                        <div className="badge">
                            {item.rating}
                        </div>
                        <div className="destination_details">
                            <h4>{item.name}</h4>
                            <p>{item.tags}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
