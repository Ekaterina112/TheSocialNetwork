import React from 'react';
import LoginReduxForm from './LoginForm';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';

type LoginPageType = MapDispatchPropsType & MapStatePropsType
export  type FormLoginDataType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha:null| string,
}
const LoginPage:React.FC< LoginPageType> = (props) => {
    //login-callback
    const onSubmitMy = (formData: FormLoginDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (<div>
        <h1>Login here please</h1>
        <LoginReduxForm
            captchaUrl={props.captchaUrl} onSubmit={onSubmitMy}/>
    </div>)
}
export type MapStatePropsType = {
    isAuth: boolean,
    captchaUrl: null | string,
}

export  type MapDispatchPropsType = { login: (email: string, password: string, rememberMe: boolean, captchaUrl:null |string) => void }

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})


//login is a callback, which dispatch call thunkCreator
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {login})(LoginPage)