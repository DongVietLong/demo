import { useState,useEffect } from "react";

import Icon from "./Icon"
import Text from "./Text"
import { Button } from 'reactstrap';
export default function Footer() {
    const [footer, setFooter] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/footer')
            .then(des => des.json())
            .then(infor => setFooter(infor))
    }, [])
    return (
        <footer className='footer'>
            <div className="footer_describe">
                {footer.map((value) => {
                    if (value.id < 9) {
                        return (
                            <div key={value.id} className='content_footer '>
                                <Text type={value.type}>{value.text}</Text>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="footer_describe">
                {footer.map((value) => {
                    if (value.id > 9 && value.id < 22) {
                        return (
                            <div key={value.id} className='content_footer '>
                                <Text type={value.type}>{value.text}</Text>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="footer_describe">
                {footer.map((value) => {
                    if (value.id >= 22 && value.id < 32) {
                        return (
                            <div key={value.id} className='content_footer '>
                                <Text type={value.type}>{value.text}</Text>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="footer_describe">
                {footer.map((value) => {
                    if (value.id >= 32 && value.id < 35) {
                        return (
                            <div key={value.id} className='content_footer '>
                                <Text type={value.type}>{value.text}</Text>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="footer_describe">
                {footer.map((value) => {
                    if (value.id >= 35) {
                        return (
                            <div key={value.id} className='content_footer '>
                                <Text type={value.type}>{value.text}</Text>
                            </div>
                        )
                    }
                })}
                <div className="button_idea">
                    <Button
                        active
                        color="warning"
                    >
                        Gửi Ý Kiến
                    </Button>
                </div>
                <div className="hotline">
                    <Icon className="fa-solid fa-phone icon_footer" />
                    <div className="content_hotline">
                        <div className="title_hotline">Hotline</div>
                        <div className="phone_number">1900.272737</div>
                    </div>
                </div>
                <div className="hotline">
                    <Icon className="fa-solid fa-envelope icon_footer" />
                    <div className="content_hotline">
                        <div className="title_hotline">Email</div>
                        <div className="phone_number">Cool@coolmate.me</div>
                    </div>
                </div>
                <div className="block_icon_footer">
                    <Icon className="fa-brands fa-facebook icon_footer" />
                    <Icon className="fa-brands fa-instagram icon_footer" />
                    <Icon className="fa-brands fa-youtube icon_footer" />
                </div>
            </div>
        </footer>
    )
}