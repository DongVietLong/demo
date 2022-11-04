import './ProductDetail.css'


import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Icon from './Icon'
import './App.css'
import Header from './Header'
import Footer from './Footer'
export default function ProductDetails() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/Combo`)
            .then(response => response.json())
            .then(posts => {
                setData(posts)
            })
    })

    return (
        <div className="ProductDetails">
            <Header />
            <div className="title_prodcutDetail">
                <h3 className="Content_title">Sản Phẩm</h3>
                <select className="select_option">
                    <option value="" className="item_option">Mới nhất</option>
                    <option value="" className="item_option">Bán chạy</option>
                    <option value="" className="item_option">Giá thấp đến cao</option>
                    <option value="" className="item_option">Giá cao đến thấp</option>
                    <option value="" className="item_option">% giảm giá nhiều</option>
                </select>
            </div>
            <h4 className="Name_Product">Đồ mặc hàng ngày</h4>
            <div className="item_productDetail">
                <div className="block_ItemProductDetail">
                    <div className="Blockimg_firstProduct">
                        <img src="./src/img/ProductDetail.jpg" alt="" className="img_firstProduct" />
                    </div>

                    {
                        data.map((value) => {
                            return (
                                // <div key={value.id} className='item_product'>
                                <Link to={"/Order/" + value.id} className="Link" key={value.id}>
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
                                // </div>
                            )
                        })
                    }

                </div>
            </div>
            <Footer />
        </div>
    )
}