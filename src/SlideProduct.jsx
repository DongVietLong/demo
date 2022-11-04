import Slider from "react-slick";
import { Link } from "react-router-dom";
import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text from "./Text";
import Icon from "./Icon";
const tabs = [
    {
        id: 1,
        name: "Combo Tiết Kiệm",
        type: 'Combo',
        istag: true,
        tag: "HOT"
    },
    {
        id: 2,
        name: "Quần lót nam",
        type: 'trousers',
        istag: false,
        tag: "HOT"
    },
    {
        id: 3,
        name: "Đồ thể thao",
        type: 'sport',
        istag: false,
        tag: "HOT"
    }
]
export default function SliderProduct() {
    const [type, setType] = useState('combo')
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/${type}`)
            .then(response => response.json())
            .then(posts => {
                setPost(posts)
            })
    }, [type])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="Slider">
            <div className="menu_option">
                {tabs.map(tab => (
                    <button key={tab.id} className='option' onClick={() => setType(tab.type)}>{tab.name}
                        <Text isTag={tab.istag} tag={tab.tag} />
                    </button>
                ))}
            </div>
            <Slider className="product" {...settings}>
                {
                    post.map((value) => {
                        return (
                            <div key={value.id} className='item_product'>
                                <Link to={"/Order/" + value.id} className="Link">
                                    <div className="block_product">
                                        <img src={value.img1} alt="lỗi hiển thị" className='img_product img1' />
                                        {/* <img src={value.img2} alt="lỗi hiển thị" className='img_product img2' /> */}
                                        <div className="position_product">
                                            <div className="evaluate">
                                                {
                                                    value.evaluate
                                                }
                                                <Icon className="fa-solid fa-star icon_product" />
                                                <p className="quanlity">({value.quanlity})</p>
                                            </div>
                                            <div className="packs">
                                                <p className={value.type}>{value.packs}</p>
                                            </div>
                                            <div className="describe">
                                                <p className="text_describe">{value.describe}</p>
                                            </div>
                                            <div className="size_product">
                                                {
                                                    value.size.map((sizes, index) => {
                                                        return (
                                                            <button key={index} className='size'>
                                                                {sizes}
                                                            </button>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="name_product">
                                        <a href='#' className="name">{value.title}</a>
                                    </div>
                                    <div className="price_product">
                                        <p className="new_price">{value.price}</p>
                                        <p className="old_price">{value.oldPrice}</p>
                                        <p className="discount_price">{value.discount}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}