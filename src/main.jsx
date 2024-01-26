import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import UserInfoContext from "./context/UserInfoContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserInfoContext>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </UserInfoContext>
)
