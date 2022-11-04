import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Text from "./Text"

export default function Product() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="container_collection">
            {
                product.map((value) => {
                    return (
                        <div key={value.id} className="block_collection">
                            <div className="img_collection">
                                <Link to="/ProductDetails">
                                    <img src={value.img} alt="" className="img_product_collection" />
                                </Link>
                            </div>
                            <button className="button_collection">
                                <Text type={value.type}>{value.text}</Text>
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}