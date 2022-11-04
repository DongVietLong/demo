import { useSelector } from 'react-redux'
import { removeItem} from './Redux/cartSlice'
import { useDispatch } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import Text from './Text';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cart.forEach(item => {
          totalQuantity += item.quanlityProduct
          totalPrice += item.price * item.quanlityProduct
        console.log(totalPrice);
        })
        return {totalPrice, totalQuantity}
      };
      console.log(getTotal().totalQuantity);
    return (
        // src/pages/Cart.js
        <div className="BlockCart">
            <Header />
            <div className="Cart">
                <div className="Cart_left">
                    <div className="BlockCart_left">
                        <Text type="Order_Product">Thông tin vận chuyển</Text>
                        <div className="nameOrphone">
                            <input type="text" name='Họ tên' placeholder='Họ tên' className='input_Name' />
                            <input type="text" name='Số điện thoại' placeholder='Số điện thoại' className='input_Name' />
                        </div>
                        <div className="Email">
                            <input type="text" name='Email' placeholder='Email' className='input_Email' />
                        </div>
                        <div className="address">
                            <input type="text" name='address' placeholder='address' className='input_address' />
                        </div>
                        <div className="addressDetail">
                            <select className="select_option">
                                <option value="" className="item_option">Hải Dương</option>
                                <option value="" className="item_option">Hải Phòng</option>
                                <option value="" className="item_option">Nam Định</option>
                                <option value="" className="item_option">Hà Nội</option>
                                <option value="" className="item_option">Quảng Ninh</option>
                            </select>
                            <select className="select_option">
                                <option value="" className="item_option">Tứ Kỳ</option>
                                <option value="" className="item_option">Thanh Miện</option>
                                <option value="" className="item_option">Thanh Hà</option>
                                <option value="" className="item_option">Hà Thanh</option>
                                <option value="" className="item_option">Ninh Giang</option>
                            </select>
                            <select className="select_option">
                                <option value="" className="item_option">Quý Cao</option>
                                <option value="" className="item_option">An tân</option>
                                <option value="" className="item_option">An Quý</option>
                                <option value="" className="item_option">An thổ</option>
                                <option value="" className="item_option">Văn vật</option>
                            </select>
                        </div>
                        <div className="note">
                            <input type="text" name='note' placeholder='Ghi chú' className='input_note' />
                        </div>
                        <Text type="Order_Product">Hình thức thanh toán</Text>
                    </div>
                </div>
                <div className="Cart_right">
                    <Text type="Order_Product">Giỏ hàng</Text>
                    <div>
                        {cart?.map((item) => {
                            return (
                                <div key={item.id} className="BlockCart_Detail">
                                    <div  className='cartDetail'>
                                        <img src={item.img} className="img_cart" alt="" />
                                        <div className="Cart_item">
                                            <Text>{item.title}</Text>
                                            <Text>{item.price}</Text>
                                            <p className="color_Product">Màu Sắc: Xanh bạc hà</p>
                                            <p className="color_Product">Size: M</p>
                                            <Text>Số Lượng: {item.quanlityProduct}</Text>
                                        </div>
                                        <i className="fa-solid fa-xmark icon_close" onClick={() => dispatch(removeItem(item.id))} />
                                    </div>
                                    <div className="transport">
                                        <p className="cost">Tạm tính: {item.price}</p>
                                        <p className="discount">Giảm giá: 0đ</p>
                                        <p className="cost_transport">Miễn phí</p>
                                    </div>
                                    <div className="total_Product">
                                        <p className="text_total">Tổng</p>
                                        <div className="total_money">
                                            <p className="money">{getTotal().totalPrice}đ</p>
                                            <p className="content_discount">đã giảm 10% trên giá gốc</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}