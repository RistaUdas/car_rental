

import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-image/ava-1.jpeg";
import ava02 from "../../assets/all-image/ava-2.jpeg";
import ava03 from "../../assets/all-image/ava-3.jpg";
import ava04 from "../../assets/all-image/ava-4.jpg";



const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        Responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };




  return (
    <Slider {...settings}>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas voluptate itaque suscipit pariatur porro laborum corrupti at, 
                nostrum molestias quidem modi facilis,
                id quisquam rerum harum voluptates deleniti ex placeat!
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

                <div>
                    <h6 className="mb-0 mt-3">Elina Shrestha</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas voluptate itaque suscipit pariatur porro laborum corrupti at, 
                nostrum molestias quidem modi facilis,
                id quisquam rerum harum voluptates deleniti ex placeat!
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

                <div>
                    <h6 className="mb-0 mt-3">Royal Shrestha</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas voluptate itaque suscipit pariatur porro laborum corrupti at, 
                nostrum molestias quidem modi facilis,
                id quisquam rerum harum voluptates deleniti ex placeat!
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

                <div>
                    <h6 className="mb-0 mt-3">Samul Khadka</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas voluptate itaque suscipit pariatur porro laborum corrupti at, 
                nostrum molestias quidem modi facilis,
                id quisquam rerum harum voluptates deleniti ex placeat!
            </p>

            <div className="mt-3 d-flex align-items-center gap-4">
                <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

                <div>
                    <h6 className="mb-0 mt-3">Samana Shrestha</h6>
                    <p className="section__description">Customer</p>
                </div>
            </div>
        </div>



    </Slider>
  )
}

export default Testimonial
