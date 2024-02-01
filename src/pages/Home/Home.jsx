import './Home.css'
import NameInputForm from "../../components/Forms/NameInputForm.jsx";
import {Link} from "react-router-dom";


const Home = () => {

    return (
        <div className="main-container">
            <section className="welcome-message">
                <h2 className={"pizza__title"}>The best pizza.</h2>
                <p className={"pizza__title__yellow"}>Straight out of the oven, straight to you.</p>
                <p className={"welcome__text"}>👋 Welcome! Please start by telling us your name:</p>
                <NameInputForm/>
                <div className={"menu__link__container"}>
                    <Link className={"menu__link"} to="/menu">Menu</Link>
                </div>
            </section>
        </div>
    )
}

export default Home