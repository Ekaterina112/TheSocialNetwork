import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {RootStateType} from '../components/redux/types';

//нет типизации
let mapStateToPropsForRedirect =(state:RootStateType)=> {
    return {isAuth: state.auth.isAuth}}

export const WithAuthRedirectComponent =(Component:any) => {
    class RedirectComponent extends React.Component<any, any>{
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }
    let ConnectedRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}




