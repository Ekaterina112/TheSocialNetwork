import React from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';


let mapStateToPropsForRedirect = (state: AppStateType): MapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}
type MapStateToPropsType = {
    isAuth: boolean
}

export function WithAuthRedirectComponent<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    //WCP wrapped component props
    const RedirectComponent: React.FC<MapStateToPropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'}/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    return connect<MapStateToPropsType, {}, WCP, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent)
}




