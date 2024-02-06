import {useDispatch} from "react-redux";
import {decrementQuantity, incrementQuantity, removeFromCart} from "../../redux/slices/cartSlice.jsx";
import PropTypes from "prop-types";
import './CartProduct.css';

const CartProduct = ({product}) => {


    const dispatch = useDispatch();


    const handleDeleteFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleDecrementQuantity = (id) => {
        dispatch(decrementQuantity(id));
    }

    const handleIncrementQuantity = (id) => {
        dispatch(incrementQuantity(id))
    }


    return (
        <div className={'cart__product__container'}>
            <div className={'cart__product__name'}>{product.quantity}x {product.name}</div>
            <div className={'cart__product__info'}>
                <span className={'cart__product__price'}>€{(product.unitPrice * product.quantity).toFixed(2)}</span>
                <button className={'cart__product__quantity_button'} onClick={() => handleDecrementQuantity(product.id)}>-</button>
                <span className={'cart__product__quantity'}>{product.quantity}</span>
                <button className={'cart__product__quantity_button'} onClick={() => handleIncrementQuantity(product.id)}>+</button>
                <button className={'cart__product__delete'} onClick={() => handleDeleteFromCart(product.id)}>DELETE</button>
            </div>
        </div>
    );
};

CartProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        unitPrice: PropTypes.number.isRequired,
    }).isRequired,
}

export default CartProduct;