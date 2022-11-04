import Slider from "react-slick";
import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const items = [
    "./src/img/Banner-Coolmate-Active-opt-1.jpeg",
    "./src/img/Banner-CXp-2.jpeg",
    "./src/img/desktop_Banner-combo-tiet-kiem.jpg",
    "./src/img/Excool-Banner-website.jpg"
]

export default function CarouselCoolmate(){
    const settingss = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
    return (
        <div className="block_carousel">
            <Slider {...settingss}>
                {
                    items.map((value,index) => (
                        <img key={index} className="Carousel_img" src={value} />
                    ))
                }
            </Slider>
            <div className="block_button_seeMore">
                <a href="#" className="button_seeMore">Miễn phí vẫn chuyển cho <br></br>đơn hàng trên 200k</a>
                <a href="#" className="button_seeMore">60 ngày đổi trả vì <br></br>bất kì lý do gì</a>
                <a href="#" className="button_seeMore">Đến tận nơi nhận hàng trả <br></br>hoàn tiền trong 24h</a>
            </div>
        </div>
    )
}