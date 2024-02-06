import './assets/reset.css'
import './assets/fonts.css'
import './App.css'
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import {UserContext} from "./context/UserInfoContext.jsx";
import {useContext} from "react";
import Cart from "./pages/Cart/Cart.jsx";
import cartImage from './assets/images/cart.png'

function App() {

    const name = useContext(UserContext)[0]
    const navigate = useNavigate();

    return (
        <div className="App">
            <header className={"app__header"}>
                <div className="header-container">
                    <h1 className={"header__company__name"}>PIZZA DAY</h1>
                    <div className="search-container">
                        <input type="text" placeholder="Search for the order #" />
                    </div>

                    <div className={'cart_and_name'}>
                        <img className={'cart_image'} src={cartImage} alt={'Cart'} onClick={() => navigate('/cart')} />
                        <div className={"user_name"}>
                            {name}
                        </div>
                    </div>
                </div>

            </header>


            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/menu' element={<Menu/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>
        </div>
    )
}
export default App
