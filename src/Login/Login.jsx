import './Login.css'
import Icon from '../Icon'
import '../App.css'
import { useEffect,useRef } from 'react'
export default function Login(prop) {
    return (
        <div className="login" >
            <div className="modal">
                <div className="modal_overlay">
                </div>
                <div className="modal_body" ref={prop.OutSideRef}>
                    <div className="modal_inner">
                        <div className="title_login">
                            <i className="fa-solid fa-xmark icon_close" onClick={prop.click} />
                            <h1 className="title_content_login">Đăng Nhập</h1> <br />
                            <p className="describe_title">
                                Nếu đã từng mua hàng trên Website trước đây, bạn có thể dùng tính năng <span className='text_color'>"Lấy mật khẩu"</span> <br/>
                                để có thể truy cập vào tài khoản bằng email nhé.
                            </p>
                        </div>
                        <div className="account">
                            <input type="text" className="input_account" placeholder='Email/SDT của bạn' />
                        </div>
                        <div className="account">
                            <input type="text" className="input_account" placeholder='Mật khẩu' />
                        </div>
                        <div className="button_login">
                            <button className="text_button_login">
                                Đăng nhập
                            </button>
                        </div>
                        <p className="or">Hoặc</p>
                        <div className="button_login_facebook">
                            <button className="login_facebook">
                                <p className="text_login">Đăng nhập với Facebook <Icon className="fa-brands fa-facebook icon_login" /></p>
                            </button>
                        </div>
                        <div className="button_login_google">
                            <button className="login_Google">
                                <p className="text_login">Đăng nhập với Google <Icon className="fa-brands fa-google icon_login" /></p>
                            </button>
                        </div>
                        <div className="footer_login">
                            <p className="new_account">Đăng ký tài khoản mới</p>
                            <p className="new_account">Quên mật khẩu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}