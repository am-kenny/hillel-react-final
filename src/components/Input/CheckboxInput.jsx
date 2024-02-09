const CheckboxInput = (props) => {
    const {value, onChange, onBlur, name, label} = props;


    return (<div className={'input__container'}>
        <div></div>
        <div className={'checkbox__container'}>
            <input className={"checkbox__input"} type="checkbox" value={value} onChange={onChange} onBlur={onBlur} name={name}/>
            {label && <label className={'checkbox__label'}>{label}</label>}
        </div>
    </div>);
};

export default CheckboxInput;