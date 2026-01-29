import React from 'react';

const VideoTour = () => {
    return (
        <div className="tour">
            <div className="section_tour">
                <h4>Watch Our Video Tour</h4>
                <div className="section_video">
                    <video controls autoPlay muted>
                        <source src="/images/IslandVideo.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default VideoTour;
