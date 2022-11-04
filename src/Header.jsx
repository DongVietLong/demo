import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import Text from "./Text";
import { useHover } from "./useHover";
import Login from './Login/Login'

export default function Header() {
    const [menu, setMenu] = useState([])
    const [navbar, setNavbar] = useState(false);
    const [login, setLogin] = useState(false);
    const [isHover, hoverConfig] = useHover(false);
    const inputElement = useRef();

    const handleLogin  = () => {
        setLogin(true);
    }
    const handleSearch = () => {
        setNavbar(true)
    }
    const handleClose = () => {
        setLogin(false);
    }
    const handleNavbar = () => {
        setNavbar(false)
    }
    const OutSideRef = useRef(null);
    useEffect(() => {
        if (navbar === true) {
            inputElement.current.focus();
        }
    }, [navbar])
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (OutSideRef.current && !OutSideRef.current.contains(event.target)) {
                setLogin(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [OutSideRef]);
    useEffect(() => {
        const handleClickOutsides = (event) => {
            if (inputElement.current && !inputElement.current.contains(event.target)) {
                setNavbar(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutsides);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsides);
        }
    }, [inputElement]);

    useEffect(() => {
        fetch('http://localhost:3000/menu')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
            })
    }, [])

    const cart = useSelector((state) => state.cart)
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    return (
        <header className='header'>
            <div className="discout_header">
                <a className="text_discout_header">Ưu đãi 44% Combo tiết kiệm</a>
            </div>
            {
                !navbar && <div >
                    <div className="navbar_menu-item">
                        <div className='logo_navar'>
                            <a href="/">
                                <img src="../src/img/Untitled.png" alt="lỗi hiển thị" className='img_logo' />
                            </a>
                        </div>
                        <div className="menu_navbar">
                            {
                                menu.map((value, index) => {
                                    if (value.title === "Sản Phẩm") {
                                        return (
                                            <li key={value.id} className='item_menu_navbar' onMouseEnter={hoverConfig.onMouseEnter} onMouseLeave={hoverConfig.onMouseLeave}>
                                                {value.title}
                                            </li>
                                        )
                                    }
                                    return (<li key={value.id} className='item_menu_navbar'>{value.title}</li>)
                                })
                            }
                            {isHover && <div className="block_item">
                                <ul className="item_navbar">
                                    {menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                                        const Childlren = value.children.map((a) => {
                                            return <Text type={a.type}>{a.name}</Text>
                                        }
                                        )
                                        return <>{Childlren}</>
                                    })}
                                </ul>
                                <ul className='item_navbar_menu'>
                                    <li className='text_menu'>
                                        {
                                            menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                                                return value.children.filter(item => item.name === "Nhu cầu").map(a => {
                                                    return a.item.map(b => (
                                                        <Text key={b.id} type={b.type} isTag={b.istag} tag={b.tag}>{b.name}</Text>
                                                    ))
                                                })
                                            })
                                        }
                                    </li>
                                    <li className='text_menu2'>
                                        {
                                            menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                                                return value.children.filter(item => item.name === "Danh mục").map(a => {
                                                    return a.item.map(b => (
                                                        <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}</Text>
                                                    ))
                                                })
                                            })
                                        }
                                    </li>
                                    <li className='text_menu'>
                                        {
                                            menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                                                return value.children.filter(item => item.name === "Bộ Sưu Tập").map(a => {
                                                    return a.item.map(b => (
                                                        <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}</Text>
                                                    ))
                                                })
                                            })
                                        }
                                    </li>
                                    <li className='text_menu'>
                                        {
                                            menu.filter(item => item.title === "Sản Phẩm").map((value) => {
                                                return value.children.filter(item => item.name === "Công nghệ").map(a => {
                                                    return a.item.map(b => (
                                                        <Text type={b.type} isTag={b.istag} tag={b.tag}>{b.name}
                                                            <img className="img_menu" src={b.img} />
                                                        </Text>
                                                    ))
                                                })
                                            })
                                        }
                                    </li>
                                </ul>
                            </div>}
                        </div>
                        <div className="icon_navbar">
                            <i className="fa-solid fa-magnifying-glass icon" onClick={handleSearch} />
                            <i className="fa-solid fa-user icon" onClick={handleLogin} />
                            <Link to="/Cart" className="Link">
                                <i className="fa-solid fa-weight-hanging icon Cart_icon" >
                                    <p className="Icon_quantity">{getTotalQuantity() || 0}</p>
                                </i>
                                
                            </Link>
                        </div>
                    </div>
                </div>
            }
            {
                navbar && <div >
                    <div className="navbar_search">
                        <input type="text" className="input_search" placeholder='Tìm kiếm sản phẩm' ref={inputElement} />
                        <i className="fa-solid fa-magnifying-glass icon" onClick={handleNavbar} />
                    </div>
                </div>
            }
            {
                login && <Login OutSideRef={OutSideRef} click={handleClose} />
            }
        </header>
    )
}