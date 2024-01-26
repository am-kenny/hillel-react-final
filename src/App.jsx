import './assets/reset.css'
import './assets/fonts.css'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
    return (
        <div className="App">
            <header className={"app__header"}>
                <div className="header-container">
                    <h1 className={"header__company__name"}>PIZZA DAY</h1>
                    <div className="search-container">
                        <input type="text" placeholder="Search for the order #" />
                    </div>
                </div>
            </header>


            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}
export default App
