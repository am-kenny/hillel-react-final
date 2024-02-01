import './ProductCard.css';
import ProductButton from "../Button/ProductButton.jsx";
import PropTypes from "prop-types";

const ProductCard = ({product}) => {
    const {name, unitPrice, imageUrl, ingredients, soldOut} = product;

    const capitalize = (words) => {
        return words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
    }

    return (
        <div className={`product-card ${soldOut ? 'sold-out' : ''}`}>
            <div className="product-image-container">
                <img src={imageUrl} alt={name} className="product-image"/>
            </div>
            <div className="product-info">
                <div className={"product-info-text"}>
                    <h3 className="product-name">{name}</h3>
                    <p className="product-ingredients">{capitalize(ingredients).join(', ')}</p>
                    <div className="product-price">{soldOut ? 'SOLD OUT' : `€${unitPrice.toFixed(2)}`}</div>
                </div>
                <div className="add-to-cart-btn">
                    {!soldOut && <ProductButton text={"ADD TO CART"}></ProductButton>}
                </div>
            </div>
        </div>
    );
    
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        unitPrice: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        soldOut: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ProductCard;