import React from 'react';

const Banner = () => {

    return (
        <>
            <div className="carousel w-full h-[26rem] container mt-1">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://admin.techshopbd.com/uploads/product/Grove-AlcoholSensor.jpg" className="h-full mx-auto object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://admin.techshopbd.com/uploads/product/IRObstacleSensor_1.jpg" className="h-full mx-auto object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://admin.techshopbd.com/uploads/product/LaserSensor.jpg" className="h-full mx-auto object-cover" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;