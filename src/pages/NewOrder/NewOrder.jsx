import {Controller, useForm} from "react-hook-form";
import {useContext} from "react";
import {UserContext} from "../../context/UserInfoContext.jsx";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchema} from "../../validationSchema.js";
import TextInput from "../../components/Input/TextInput.jsx";
import CheckboxInput from "../../components/Input/CheckboxInput.jsx";
import ProductButton from "../../components/Button/ProductButton.jsx";
import {useSelector} from "react-redux";
import './NewOrder.css';

const NewOrder = () => {
    const name = useContext(UserContext)[0]
    const {totalPrice} = useSelector((state) => state.cart);

    const {
        register,
        handleSubmit,
        control,
        watch,
    } = useForm({
        defaultValues: {
            name: name,
            phone: '',
            address: '',
            withPriority: false,
        },
        resolver: yupResolver(validationSchema),
        mode: 'onBlur'
    });

    const withPriority = watch('withPriority');
    const totalOrderPrice = withPriority ? totalPrice + 8 : totalPrice;

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={'order__container'}>
            <h2 className={'order__title'}>{"Ready to order? Let's go!"}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='name'
                    control={control}
                    render={
                        (
                            {
                                field: {value, onChange, onBlur, name},
                                fieldState: {error}
                            }
                        ) => <TextInput {...{value, onChange, onBlur, name, error}}
                                        label={"First Name"}/>
                    }/>

                <Controller
                    name='phone'
                    control={control}
                    render={
                        (
                            {
                                field: {value, onChange, onBlur, name},
                                fieldState: {error}
                            }
                        ) => <TextInput {...{value, onChange, onBlur, name, error}}
                                        label={"Phone number"}/>
                    }/>

                <Controller
                    name='address'
                    control={control}
                    render={
                        (
                            {
                                field: {value, onChange, onBlur, name},
                                fieldState: {error}
                            }
                        ) => <TextInput {...{value, onChange, onBlur, name, error}}
                                        label={"Address"}/>
                    }/>

                <Controller
                    name='withPriority'
                    control={control}
                    render={
                        (
                            {
                                field: {value, onChange, onBlur, name},
                            }
                        ) => <CheckboxInput {...{value, onChange, onBlur, name}}
                                            label={"Do you want to give your order priority?"}/>
                    }/>

                <input  type="hidden" {...register('totalPrice')} value={totalOrderPrice}/>

                <ProductButton type="submit" text={`ORDER NOW FOR €${totalOrderPrice.toFixed(2)}`}/>
            </form>
        </div>
    );
};

export default NewOrder;