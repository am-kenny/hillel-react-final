import {useContext, useEffect} from 'react';
import './Forms.css'
import {UserContext} from "../../context/UserInfoContext.jsx";

const NameInputForm = () => {

    const [name, setName] = useContext(UserContext)

    useEffect(() => {
        if (name) {
            console.log("Name is set to: " + name)
        }
    }, [name]);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        setName(event.target[0].value)
    }

    return (
        <div className="name-entry">
            <form onSubmit={handleSubmitForm} className={"name__input__form"}>
                <input type="text" placeholder="Your full name" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default NameInputForm;