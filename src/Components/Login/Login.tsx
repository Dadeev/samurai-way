import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import style from './../common/FormsControls/FormsControls.module.css'

type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = ({isAuth, ...props}: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)

type FormDataType = {
    email: string
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
                    <Field placeholder={'Email'} name={'email'} component={FormControl}
                           validate={[required]} type={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={FormControl} type={'input'}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember me
                </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </>
    );
};
export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)