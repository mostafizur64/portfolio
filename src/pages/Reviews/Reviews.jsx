import React, { useState } from 'react';
import {  FaRegStar,  FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
const Reviews = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample JSON data
    const jsonData = [
        {
            id: 1,
            imageUrl: 'https://i.ibb.co/2gbzMTG/Rectangle-5.png',
            title: 'Great Experience',
            description: 'Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding.',
            name: 'John Doe',
            profession: 'Software Engineer',
            rating: 5,
        },
        {
            id: 2,
            imageUrl: 'https://i.ibb.co/B21QWks/P3-OLGJ1-copy-1.png',
            title: 'Awesome Product',
            description: 'Praesent cursus ligula ut est porta, ac tincidunt nulla commodo.',
            name: 'Jane Smith',
            profession: 'Graphic Designer',
            rating: 4,
        },
        {
            id: 3,
            imageUrl:
                'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=740&t=st=1688103979~exp=1688104579~hmac=1d0aba29db49376e6a9fd7679ffa5f8997bc82158c111074d12d89bee1b55439',
            title: 'Highly Recommended',
            description: 'Sed lacinia enim nec finibus fringilla.',
            name: 'Sarah Johnson',
            profession: 'Marketing Manager',
            rating: 5,
        },
    ];

    const totalSlides = jsonData.length;

    // Function to handle slide change
    const handleSlideChange = (direction) => {
        let newSlideIndex;

        if (direction === 'next') {
            newSlideIndex = (currentSlide + 1) % totalSlides;
        } else {
            newSlideIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        }

        setCurrentSlide(newSlideIndex);
    };

    return (
        <>

            <div className="carousel w-full mt-12">
                {jsonData.map((item, index) => (
                    <div
                        key={item.id}
                        id={`slide${index + 1}`}
                        className={`carousel-item relative w-full ${index === currentSlide ? 'active' : ''}`} >

                        <div className="text-center mx-auto">
                            <img src={item.imageUrl} className="w-60 h-60 mx-auto rounded-full" alt={`Slide ${index + 1}`} />

                            <h2 className="text-2xl font-bold text-[#15295f] mt-4">{item.title}</h2>
                            <p className='text-xl w-1/2 mx-auto mt-4'>{item.description}</p>
                            <div>
                                <p className="text-xl mt-4 font-bold text-[#15295f]">{item.name}</p>
                                <p className="text-lg text-gray-600">{item.profession}</p>
                            </div>
                            <div className="flex items-center justify-center mt-2">
                               
                                 
                                    <Rating placeholderRating={item.rating}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index}`} className="btn btn-circle bg-orange-500" onClick={() => handleSlideChange('prev')}>
                                ❮
                            </a>
                            <a href={`#slide${index + 2}`} className="btn btn-circle bg-orange-500" onClick={() => handleSlideChange('next')}>
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Reviews;
