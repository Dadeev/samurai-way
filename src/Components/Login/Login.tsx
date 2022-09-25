import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validator";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)
const minLength1 = minLengthCreator(1)

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={FormControl}
                           validate={[required, maxLength10, minLength1]} type={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={FormControl} type={'input'}
                           validate={[required, maxLength10, minLength1]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'checkbox'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    );
};
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)