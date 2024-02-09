import './Input.css'

const TextInput = (props) => {
    const {value, onChange, onBlur, name, error, label } = props;

    return (
        <div className={'input__component__container'}>
            <div className={'input__container'}>
                {label && <label>{label}</label>}
                <input className={'input_field'} type="text" value={value} onChange={onChange} onBlur={onBlur} name={name}/>
            </div>
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default TextInput;