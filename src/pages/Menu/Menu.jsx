import {useEffect, useState} from "react";
import './Menu.css'
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

const Menu = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu')
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
    console.log(products[0])
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