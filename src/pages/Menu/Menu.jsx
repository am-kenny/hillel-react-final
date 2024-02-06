import {useEffect, useState} from "react";
import './Menu.css'
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import {PIZZA_API} from "../../constants.js";

const Menu = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(`${PIZZA_API}/menu`)
                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }

                const response = await res.json()
                setProducts(response.data)
            } catch (e) {
                console.error(e.message)
            }
        }

        getProducts()

    }, []);

    return (
        <div className="container">
            <div>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Menu