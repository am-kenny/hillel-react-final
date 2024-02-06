import PropTypes from "prop-types";
import './Button.css';

const ProductButton = (props) => {

    const { text = "Default text", onClick, isPrimary = true } = props;

    return (
        <button className={`button ${isPrimary ? "primary__button": "secondary__button"}`} onClick={onClick}>{text}</button>
    )
}

ProductButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    isPrimary: PropTypes.bool,
}

export default ProductButton;
