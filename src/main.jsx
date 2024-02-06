import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import UserInfoContext from "./context/UserInfoContext.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/store";


ReactDOM.createRoot(document.getElementById('root')).render(
    <UserInfoContext>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </UserInfoContext>
)
