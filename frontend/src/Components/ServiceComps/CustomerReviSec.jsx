import React from 'react'
import Slider from "react-slick";

import RatingProduct from '../Common/RatingProduct';

const CustomerReview = [
    {
        "id": 1,
        "name": "Emma Wilson",
        "image": "https://i.pravatar.cc/150?img=11",
        "rating": 5,
        "description": [
            "The product quality is outstanding.",
            "Delivery was faster than expected.",
            "Customer support was very helpful.",
            "I would definitely buy again."
        ]
    },
    {
        "id": 2,
        "name": "Liam Johnson",
        "image": "https://i.pravatar.cc/150?img=12",
        "rating": 4,
        "description": [
            "Overall a great experience.",
            "The design looks modern and clean.",
            "Performance is smooth and reliable.",
            "Worth the price I paid."
        ]
    },
    {
        "id": 3,
        "name": "Olivia Brown",
        "image": "https://i.pravatar.cc/150?img=13",
        "rating": 5,
        "description": [
            "Excellent build quality.",
            "Very easy to set up and use.",
            "Support team responded quickly.",
            "Highly recommended product."
        ]
    },
    {
        "id": 4,
        "name": "Noah Davis",
        "image": "https://i.pravatar.cc/150?img=14",
        "rating": 3,
        "description": [
            "The product is decent.",
            "Shipping took longer than expected.",
            "Packaging could be improved.",
            "Still usable for daily needs."
        ]
    },
    {
        "id": 5,
        "name": "Ava Martinez",
        "image": "https://i.pravatar.cc/150?img=15",
        "rating": 4,
        "description": [
            "Good value for money.",
            "Features match the description.",
            "Looks premium and stylish.",
            "I am mostly satisfied."
        ]
    },
    {
        "id": 6,
        "name": "William Anderson",
        "image": "https://i.pravatar.cc/150?img=16",
        "rating": 5,
        "description": [
            "Amazing experience overall.",
            "The quality exceeded expectations.",
            "Setup was quick and simple.",
            "I would highly recommend this."
        ]
    },
    {
        "id": 7,
        "name": "Sophia Taylor",
        "image": "https://i.pravatar.cc/150?img=17",
        "rating": 4,
        "description": [
            "Very nice product design.",
            "Easy to use on a daily basis.",
            "Minor improvements are needed.",
            "Still a great purchase."
        ]
    }
]

const CustomerReviSec = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div className='flex items-center justify-center xs:px-1 md:px-14 lg:px-20 xl:px-30 py-20 w-full h-auto overflow-hidden'>
            <Slider {...settings} className="header-theme ProductComp xs:py-10 md:py-12 xl:py-16 w-full h-auto rounded-md duration-150">
                {CustomerReview.map((items, id) => {
                    const { name, image, rating, description } = items
                    return (
                        <div key={id} className='flex flex-col items-center justify-center xs:px-2 sm:px-4 lg:px-5 w-full h-auto text-[0.98em] text-center cursor-grab'>
                            <figcaption className='flex items-center justify-center'>
                                <img src={image} alt="customer_img" className='w-12 h-12 rounded-full bg-cover' />
                            </figcaption>
                            <div className='mt-2'>
                                <h1>{name}</h1>
                            </div>
                            <div className='mt-4'>
                                <p>{description}</p>
                            </div>
                            <div className='flex items-center justify-center mt-3'>
                                <RatingProduct rating={rating} />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default CustomerReviSec