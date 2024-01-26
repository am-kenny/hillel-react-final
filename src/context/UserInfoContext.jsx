import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const UserContext = createContext(null);
UserContext.displayName = "UserContext";

const UserInfoContext = ({children}) => {

    const [name, setName] = useState("")

    return (
        <UserContext.Provider value={[name, setName]}>
            {children}
        </UserContext.Provider>

    )
}

UserInfoContext.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserInfoContext