import React from 'react';
import LoginReduxForm, {FormDataType} from './LoginForm';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {login} from '../../redux/authReducer';
import {Redirect} from 'react-router-dom';

type LoginPageType = MapDispatchPropsType & MapStatePropsType

const LoginPage = (props: LoginPageType) => {

    const onSubmitMy = (formData: FormDataType) => {
        //login-callback
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
        <h1>Login here please</h1>
        <LoginReduxForm onSubmit={onSubmitMy}/>
    </div>)
}
export type MapStatePropsType = {
    isAuth: boolean
}

export  type MapDispatchPropsType = { login: (email: string, password: string, rememberMe: boolean) => void }

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
})


//login is a callback, which dispatch call thunkCreator
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {login})(LoginPage)