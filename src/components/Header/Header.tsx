import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean,
    login: string | null
    logout:()=>void
}

const Header = (props: PropsType) => {
    return <header className={classes.header}>
        <div className={classes.logo}>
           The Social Network
        </div>
        <div className={classes.login}>
            {props.isAuth ? <div>{props.login } <button  onClick={props.logout}>Log Out</button></div>
                :
                <NavLink to={'/login'} className={classes.login}>
                    Login
                </NavLink>}
        </div>
    </header>
}
export default Header;