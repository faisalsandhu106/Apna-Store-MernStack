import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSilder = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    return (

        <Slider {...settings} className="w-full h-full">
            <div className='w-full h-full'>
                <img className='w-full h-full bg-cover' src="./pic/hero.jpg" alt="" />
            </div>
            <div className='w-full h-full'>
                <img className='w-full h-full bg-cover' src="https://www.shutterstock.com/image-photo/smiling-little-girl-buying-school-260nw-2189403579.jpg" alt="" />
            </div>
            <div className='w-full h-full'>
                <img className='w-full h-full bg-cover' src="https://cdn.corporatefinanceinstitute.com/assets/consumer-products.jpg" alt="" />
            </div>
            <div className='w-full h-full'>
                <img className='w-full h-full bg-cover' src="https://img.freepik.com/free-photo/cheerful-woman-standing-with-smartphone-shopping-bags_23-2148042896.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>
            <div className='w-full h-full'>
                <img className='w-full h-full bg-cover' src="https://media.istockphoto.com/id/1426458619/photo/happy-man-using-mobile-phone-app-while-buying-groceries-in-supermarket-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=oUiBgl9UZ1ga77CnvG1zdGm73ehb8GZOkfcScGqnXjs=" alt="" />
            </div>
            <div className='w-full h-full'>
                <img className='w-full h-full bg-cover' src="https://media.istockphoto.com/id/2166504897/photo/mother-her-son-at-stationery-shopping-in-a-store-his-son-is-angry-because-he-didnt-get-what.jpg?s=612x612&w=0&k=20&c=ubSinFJFsQ387mh9arJuOiyHVNrXBo-hK21rV7d6x1Q=" alt="" />
            </div>
        </Slider>
    )
}

export default HeroSilder