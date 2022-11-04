import Header from "./Header"
import React, { useEffect, useState } from "react";
// src/components/Item.js
import { useDispatch } from 'react-redux';
import {useParams} from "react-router-dom"
import { addToCart } from "./Redux/cartSlice";

import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer"
import Text from "./Text"
import Icon from "./Icon";



export default function Order() {
    // src/components/Item.js
    const dispatch = useDispatch()
    const [order, setOrder] = useState ([])
    const [policy, setPolicy] = useState([])
    const [quanlity,setQuanlity]=useState( 1)
    useEffect(() => {
        fetch("http://localhost:3000/Combo")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setOrder(data);
            })
        fetch("http://localhost:3000/Order")
            .then((respones) => {
                return respones.json();
            })
            .then((policy) => {
                setPolicy(policy);
            })
    }, [])
    const {Id}=useParams()
    const thisOrder = order.filter(prod => prod.id == Id)

    const sett = {
        customPaging: function (i) {
            return (
                <a>
                    <img src={thisOrder.img1} className="img_slick" />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const handleClickAdd = (id,title,img,price,quanlityProduct) => {
        dispatch(addToCart({id,title,img,price,quanlityProduct}))
        
    }
    const handleNext =()=>{
        setQuanlity(prev => prev + 1)
    }
    const handlePrev=()=>{
        if(quanlity > 1)
        {
            setQuanlity(prev => prev - 1)
        }else{
            setQuanlity(1);
        }
        
    }
    return (
        <div className="Order">

            <Header />
            <Link to="/" className="Link"><Text type="Order_Product">Trang Chủ</Text></Link>
            <div className="block_Order">
                <Slider {...sett} className="block_previewImg">
                    {
                        thisOrder.map((value) => {
                            return (
                                <img key={value.id} src={value.img1} className="Order_img" />
                            )
                        })
                    }
                </Slider>
                <div className="describle_Order">
                    {
                        thisOrder.map((value) => {
                            return (
                                <div key={value.id} className="detail_Order">
                                    <Text type="name_product">{value.title}</Text>
                                    <div className="evaluate_Order">
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        <Icon className="fa-solid fa-star icon_product" />
                                        {
                                            value.evaluate
                                        }
                                        <p className="quanlity">Đã bán ({value.quanlity})</p>
                                    </div>
                                    <div className="price_Order">
                                        <p className="new_price">{value.price}đ</p>
                                        <p className="old_price">{value.oldPrice}</p>
                                        <p className="discount_price">{value.discount}</p>
                                    </div>
                                    <Text type="endow">Ưu đãi giá trải nghiệm đến 17/10</Text>
                                    <p className="color_order">Màu sắc: Đen</p>
                                    <p className="size_order">Kích thước: M</p>
                                    <div className="quanlity_Order">
                                        <p className="size_order">Số Lượng:</p>
                                        <div className="button_quanlity">
                                            <button className="btn_prev" onClick={()=>handlePrev()}>-</button>
                                            <p className="quanlity_Product">{quanlity}</p>
                                            <button className="btn_prev" onClick={()=>handleNext()}>+</button>
                                        </div>
                                    </div>
                                    <div className="size_productOrder">
                                        {
                                            value.size.map((sizes, index) => {
                                                return (
                                                    <button key={index} className='size_orderButton'>
                                                        {sizes}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="Add_Cart">
                                       
                                            <Button
                                                active
                                                color="warning"
                                                className="button_ProductDetail"
                                                onClick={()=>handleClickAdd(value.id,value.title,value.img1,value.price,quanlity)}
                                            >
                                                Thêm vào giỏ hàng
                                            </Button>
                                        
                                    </div>
                                    <div className="product-single_policy">
                                        <div className="product-policy">
                                            {
                                                policy.map((data,index) => {
                                                    return (
                                                        <div key={index} className="product-policy_item">
                                                            <div className="product-policy_icon">
                                                                <img src={data.img} alt="" className="img_policy" />
                                                            </div>
                                                            <span className="product-policy__title">
                                                                {data.describle}
                                                            </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="highlights_order">
                                        <Text type="highlights">Đặc điểm nổi bật</Text>
                                        <Text type="Content_hightlight">- Chất liệu 100% Polyester có thêm công nghệ HeiQ Vỉo Block</Text>
                                        <Text type="Content_hightlight">- Áo được thiết kế với kiểu tay Raglan, cửa tay có chun ôm gọn gàng</Text>
                                        <Text type="Content_hightlight">- Túi có khoá 2 bên thân trước, và mặt trong 2 bên thân trước cũng có túi an toàn</Text>
                                        <Text type="Content_hightlight">- Người mẫU: 1m75, 69kh * Mặc áo XL, quần L</Text>
                                        <Text type="Content_hightlight">- Tự hào sản xuất tại Việt Nam</Text>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}