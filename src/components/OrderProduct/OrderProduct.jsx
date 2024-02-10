import './OrderProduct.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getMenuItems} from "../../redux/slices/menuSlice.jsx";
import {capitalizeIngredients} from "../../constants.js";

const OrderProduct = ({pizzaId, name, totalPrice, quantity }) => {
    const dispatch = useDispatch();
    const {isLoading, isError, menuItems} = useSelector((state) => state.menu);

    useEffect(() => {
        dispatch(getMenuItems())
    }, [dispatch]);

    let ingredients = [];
    if (!isLoading && !isError && menuItems) {
        const pizza = menuItems.find((pizza) => pizza.id === pizzaId);
        if (pizza) {
            ingredients = pizza.ingredients;
        }
    }

    return (
        <div className="order-product">
            <div className="order-product-details">
                <h3><span className={"order-product__quantity"}>{quantity}x</span> {name}</h3>
                <p className={"order-product__ingredients"}>{capitalizeIngredients(ingredients).join(', ')}</p>
            </div>
            <div className="order-product-price">
                <span>€{totalPrice.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default OrderProduct;