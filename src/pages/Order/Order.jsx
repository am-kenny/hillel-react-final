import {useParams} from "react-router-dom";
import OrderProduct from "../../components/OrderProduct/OrderProduct.jsx";
import './Order.css';
import useFetch from "../../hooks/useFetch.jsx";
import {formatDeliveryDate, PIZZA_API} from "../../constants.js";
import ProductButton from "../../components/Button/ProductButton.jsx";

const Order = () => {
    const params = useParams();
    const {data: response, loading, error} = useFetch(`${PIZZA_API}/order/${params.id}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong: {error.message}</div>;

    const order = response.data;
    console.log(order);

    const estimatedDelivery = new Date(order.estimatedDelivery);
    const waitTimeMinutes =  (estimatedDelivery.getTime() - new Date().getTime())/60000;


    const products = order.cart

    return (
        <div className="order__container">
            <div className="order-header">
                <h2 className={'order-title'}>Order {order.id} status: {order.status}</h2>
                <div className="order-status">
                    {order.priority && <span className="priority">PRIORITY</span>}
                    {order.status === "preparing" && <span className="preparing">PREPARING ORDER</span>}
                </div>
            </div>

            <div className="order-timer order-accent-container">
                <span className={"order-timer__minutes-left"}>Only {waitTimeMinutes.toFixed()} minutes left 😮</span>
                <span className={"order-timer__estimated"}>(Estimated delivery: {formatDeliveryDate(estimatedDelivery)})</span>
            </div>

            <div className="order-products">
                {products.map((product, index) => (
                    <OrderProduct key={index} {...product} />
                ))}
            </div>
            <div className="order-summary order-accent-container">
                <p>Price pizza: €{order.orderPrice.toFixed(2)}</p>
                <p>Price priority: €{order.priorityPrice.toFixed(2)}</p>
                <p className={"order-summary__final-price"}>To pay on delivery: €{(order.orderPrice + order.priorityPrice).toFixed(2)}</p>
            </div>
            <div className={"prioritize__container"}>
                <span></span>
                <ProductButton text={"PRIORITIZE"} />
            </div>
        </div>
    );
};


export default Order;