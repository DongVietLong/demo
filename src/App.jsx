// import { useState, useEffect,useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Text from './Text'
import { Button } from 'reactstrap';
import Product from './Product'
import SliderProduct from './SlideProduct'
import CarouselCoolmate from './CarouselCoolmate';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarouselCoolmate/>
      <Text type={"title_container"}>Mặc Ngay, Yêu Luôn</Text>
      <SliderProduct/>

      <div className="container_demin">
        <div className="container">
          <div className="about_card">
            <div className="about-card_img">
              <img src="./src/img/img_aboutCard.jpg" alt="lỗi hiển thị" className='img_aboutCard' />
            </div>
            <div className="about-card_content">
              <h2 className="about-card_heading">
                Coolmate's <br /> CLEAN DENIM
              </h2>
              <div className="about-card_description">
                <p className="about-card_description_text">
                  Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất liệu
                  là Cotton Tái sinh (Regenerative Cotton) - loại Cotton chất lượng và
                  trồng bằng quy trình sạch, bền vững. Chiếc quần với vải Denim được
                  dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng Nai của Saitex - nhà máy
                  với nhiều trang máy móc, thiết bị hiện đại với quy trình sản xuất khép
                  kín, giảm thiểu CO2 và nước thải ra môi trường.
                </p>
              </div>
              <div>
                <Button
                  active
                  color="info"
                  outline
                  size="sm"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container_excool">
        <div className="container">
          <div className="about_excool">
            <div className="about-card_content container_excool_block">
              <h2 className="about-card_heading">
                Dòng sản phẩm công nghệ EXCOOL
              </h2>
              <div className="about-card_description">
                <p className="about-card_description_text">
                  <p>
                    Công nghệ Việt cho người Việt.<br />
                    Với hơn <b>100.000</b> sản phẩm đã được gửi đến tay khách hàng sử dụng và hài lòng
                  </p>
                </p>
              </div>
              <div>
                <Button
                  active
                  color="info"
                  outline
                  size="sm"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
            <div className="about-card_img img_excool">
              <img src="./src/img/img_excool.jpg" alt="lỗi hiển thị" className='img_aboutCard' />
            </div>
          </div>
        </div>
      </div>

      <div className="container_medium">
        <div className="coolclub_about">
          <h1 className="coolclub-about_heading">
            Coolmate Basics
          </h1>
          <div className="coolclub-about_wrapper">
            <img src="./src/img/coolclub1.png" alt="" className="img_coolclub" />
            <img src="./src/img/coolclub2.png" alt="" className="img_coolclub" />
            <img src="./src/img/coolclub3.png" alt="" className="img_coolclub" />
            <img src="./src/img/coolclub4.png" alt="" className="img_coolclub" />
            <img src="./src/img/coolclub5.png" alt="" className="img_coolclub" />
          </div>
          <p className="text__coolmate">
            Dòng sản phẩm mặc cơ bản <span className='text_color'>chất lượng tốT</span>  và <span className='text_color'>giá rẻ</span> của Coolmate
          </p>
          <div className='button_coolclub'>
            <Button
              active
              color="warning"
            >
              Trải nghiệm
            </Button>
          </div>
        </div>
      </div>

      <div className="container_collection">
        <Product />
      </div>

      <div className="container_demin">
        <div className="container">
          <div className="about">
            <div className="about-card_img">
              <img src="./src/img/about.png" alt="lỗi hiển thị" className='img_aboutCard' />
            </div>
            <div className="about-card_content color_about">
              <h2 className="about-card_heading">
                Trải nghiệm mua sắm với<br /> #Coolmate
              </h2>
              <div className="about-card_description">
                <p className="about-card_description_text">
                  Giá cả hợp lý <br />
                  Dịch vụ 100% hài lòng <br />
                  60 ngày đổi trả <br />
                  Tự hào sản xuất tại Việt Nam
                </p>
              </div>
              <div>
                <Button
                  active
                  color="info"
                  outline
                  size="sm"
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container_caption">
        <marquee className="caption">
          <p><b>CoolClub</b> - Ưu đãi <b>nhiều hơn</b>, mua sắm vui hơn. Nhận ngay <b>ưu đãi 7%</b> cho lần mua sắm tiếp theo</p>
        </marquee>
        <button className="button_caption">Gia nhập ngay</button>
      </div>

      <div className="information_coolmate">
        <img src="./src/img/information1.jpg" alt="" className='img_information' />
        <img src="./src/img/information2.jpg" alt="" className='img_information' />
      </div>

      <Footer/>
    </div>
  )
}

export default App
